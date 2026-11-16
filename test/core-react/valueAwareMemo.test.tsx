import type { IRenderers } from '@core-react/index'
import { useFieldValue, useRootValue } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'

import CompletedCore from './@helpers/CompletedCore'
import baseRenderers from './@helpers/renderers'

const renders: Record<string, number> = {}

const PlainProbe = ({ path }: any) => {
  const key = String(path[0])
  renders[key] = (renders[key] ?? 0) + 1

  return <div data-testid={`tid-${key}`} />
}

const ExprProbe = ({ path, disabled }: any) => {
  const key = String(path[0])
  renders[key] = (renders[key] ?? 0) + 1

  return <div data-testid={`tid-${key}`} className={disabled ? 'is-disabled' : ''} />
}

const renderers = {
  PlainProbe: { component: PlainProbe, pure: true },
  ExprProbe: { component: ExprProbe, pure: true },
} as unknown as IRenderers

const schema = wrapRootSchema({
  plain: {
    title: '普通字段',
    renderType: 'PlainProbe',
  },
  expr: {
    title: '表达式字段',
    renderType: 'ExprProbe',
    disabled: '$root.age === "18"',
  },
  age: {
    title: '年龄',
    renderType: 'InputText',
    renderOptions: {
      'data-testid': 'tid-age',
    },
  },
  name: {
    title: '姓名',
    renderType: 'InputText',
    renderOptions: {
      'data-testid': 'tid-name',
    },
  },
})

describe('值感知 memo', () => {
  beforeEach(() => {
    Object.keys(renders).forEach((key) => {
      delete renders[key]
    })
  })

  test('普通字段不会因其它字段的数据变化而重渲染', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    expect(renders.plain).toBe(1)

    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '12' } })

    expect(renders.plain).toBe(1)
  })

  test('带表达式的字段会重渲染，表达式结果随数据更新', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    expect(screen.getByTestId('tid-expr').className).not.toContain('is-disabled')

    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '18' } })

    expect(renders.expr).toBeGreaterThan(1)
    expect(screen.getByTestId('tid-expr').className).toContain('is-disabled')

    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '19' } })

    expect(screen.getByTestId('tid-expr').className).not.toContain('is-disabled')
  })

  test('字段自身值变化时，渲染器会拿到新值', () => {
    const values: any[] = []

    const ValueInput = ({ value, onChange }: any) => {
      values.push(value)

      return (
        <input
          data-testid="tid-value"
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    }

    render(
      <CompletedCore
        schema={wrapRootSchema({
          v: { title: '值', renderType: 'ValueInput' },
        })}
        renderers={{ ValueInput: { component: ValueInput } } as unknown as IRenderers}
      />
    )

    fireEvent.change(screen.getByTestId('tid-value'), { target: { value: 'a' } })
    fireEvent.change(screen.getByTestId('tid-value'), { target: { value: 'ab' } })

    expect(values).toContain('a')
    expect(values[values.length - 1]).toBe('ab')
  })

  test('需要跨字段读取时，用 useRootValue 订阅即可拿到最新数据', () => {
    const seen: any[] = []

    const CrossField = () => {
      const { rootValue } = useRootValue()
      seen.push(rootValue.age)

      return <div data-testid="tid-cross" />
    }

    render(
      <CompletedCore
        schema={wrapRootSchema({
          cross: { title: '跨字段', renderType: 'CrossField' },
          age: {
            title: '年龄',
            renderType: 'InputText',
            renderOptions: { 'data-testid': 'tid-age2' },
          },
        })}
        renderers={{ CrossField: { component: CrossField } } as unknown as IRenderers}
      />
    )

    expect(seen.length).toBe(1)

    fireEvent.change(screen.getByTestId('tid-age2'), { target: { value: '18' } })

    // 订阅了 rootValue 的组件会跟着更新
    expect(seen.length).toBeGreaterThan(1)
    expect(seen[seen.length - 1]).toBe('18')
  })

  test('未声明 pure 的渲染器：其它字段变化时会重渲染并拿到最新 rootValue', () => {
    const seen: any[] = []

    const ImpureProbe = ({ rootValue }: any) => {
      seen.push(rootValue.age)
      return <div data-testid="tid-impure" />
    }

    render(
      <CompletedCore
        schema={wrapRootSchema({
          impure: { title: '未声明 pure', renderType: 'ImpureProbe' },
          age: {
            title: '年龄',
            renderType: 'InputText',
            renderOptions: { 'data-testid': 'tid-age3' },
          },
        })}
        renderers={{ ImpureProbe: { component: ImpureProbe } } as unknown as IRenderers}
      />
    )

    expect(seen.length).toBe(1)

    fireEvent.change(screen.getByTestId('tid-age3'), { target: { value: '18' } })

    // 默认按「有依赖」处理：不跳过，重渲染时读最新 rootValue
    expect(seen.length).toBeGreaterThan(1)
    expect(seen[seen.length - 1]).toBe('18')
  })

  test('未声明 pure 时，一次输入会让所有字段一起重渲染（默认安全的代价）', () => {
    const fieldRenders: Record<string, number> = {}

    const CountField = ({ path }: any) => {
      const key = String(path[0])
      fieldRenders[key] = (fieldRenders[key] ?? 0) + 1

      return <div data-testid={`tid-${key}`} />
    }

    const properties: Record<string, any> = {
      f0: {
        title: '输入框',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-input' },
      },
    }

    for (let i = 1; i < 20; i += 1) {
      properties[`f${i}`] = { title: `字段${i}`, renderType: 'CountField' }
    }

    render(
      <CompletedCore
        schema={wrapRootSchema(properties)}
        renderers={{ CountField: { component: CountField } } as unknown as IRenderers}
      />
    )

    const afterMount = { ...fieldRenders }

    fireEvent.change(screen.getByTestId('tid-input'), { target: { value: 'x' } })

    // 与本次输入毫无关系的 19 个字段也各自多渲染了一次
    expect(fieldRenders.f1).toBe(afterMount.f1 + 1)
    expect(fieldRenders.f10).toBe(afterMount.f10 + 1)
    expect(fieldRenders.f19).toBe(afterMount.f19 + 1)
  })

  test('表达式字段只在自己的依赖变化时重渲染', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    const before = renders.expr

    // name 不在 $root.age 的依赖里：不重渲染
    fireEvent.change(screen.getByTestId('tid-name'), { target: { value: 'abc' } })
    expect(renders.expr).toBe(before)

    // age 是依赖字段：重新求值
    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '18' } })
    expect(renders.expr).toBeGreaterThan(before)
    expect(screen.getByTestId('tid-expr').className).toContain('is-disabled')
  })

  test('渲染器用 useFieldValue 精确订阅业务字段', () => {
    const seen: any[] = []

    const AgeViewer = () => {
      const age = useFieldValue('age')
      seen.push(age)

      return <div data-testid="tid-viewer">{String(age ?? '')}</div>
    }

    render(
      <CompletedCore
        schema={wrapRootSchema({
          viewer: { title: '查看年龄', renderType: 'AgeViewer' },
          age: {
            title: '年龄',
            renderType: 'InputText',
            renderOptions: { 'data-testid': 'tid-age4' },
          },
          name: {
            title: '姓名',
            renderType: 'InputText',
            renderOptions: { 'data-testid': 'tid-name4' },
          },
        })}
        renderers={
          { AgeViewer: { component: AgeViewer, pure: true } } as unknown as IRenderers
        }
      />
    )

    expect(seen.length).toBe(1)

    fireEvent.change(screen.getByTestId('tid-name4'), { target: { value: 'abc' } })
    expect(seen.length).toBe(1)

    fireEvent.change(screen.getByTestId('tid-age4'), { target: { value: '18' } })
    expect(seen.length).toBeGreaterThan(1)
    expect(seen[seen.length - 1]).toBe('18')

    // 订阅触发的重渲染会拿到最新值并反映到 DOM
    expect(screen.getByTestId('tid-viewer')).toHaveTextContent('18')

    fireEvent.change(screen.getByTestId('tid-age4'), { target: { value: '19' } })
    expect(screen.getByTestId('tid-viewer')).toHaveTextContent('19')
  })

  test('容器字段被跳过重渲染时，子字段的值仍会更新（内层 Iterator 自己订阅）', () => {
    const nestedSchema = wrapRootSchema({
      nested: {
        title: '嵌套',
        renderType: 'Object',
        properties: {
          left: {
            title: '左侧',
            renderType: 'InputText',
            renderOptions: { 'data-testid': 'tid-nested-left' },
          },
        },
      },
      other: {
        title: '其它',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-nested-other' },
      },
    })

    const pureNestedRenderers = {
      ...baseRenderers,
      Object: { ...(baseRenderers.Object as object), pure: true },
    } as unknown as IRenderers

    render(<CompletedCore schema={nestedSchema} renderers={pureNestedRenderers} />)

    fireEvent.change(screen.getByTestId('tid-nested-left'), { target: { value: '7' } })
    expect(screen.getByTestId('tid-nested-left')).toHaveValue('7')

    // 兄弟字段变化也不影响子字段
    fireEvent.change(screen.getByTestId('tid-nested-other'), { target: { value: 'x' } })
    expect(screen.getByTestId('tid-nested-left')).toHaveValue('7')
  })

  test('容器字段被跳过重渲染时，子字段的 hidden 表达式仍随外部数据更新', () => {
    const nestedSchema = wrapRootSchema({
      show: {
        title: '显示',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-nested-show' },
      },
      nested: {
        title: '嵌套',
        renderType: 'Object',
        properties: {
          left: {
            title: '左侧',
            renderType: 'InputText',
            hidden: '$root.show !== "1"',
            renderOptions: { 'data-testid': 'tid-nested-hidden-left' },
          },
        },
      },
    })

    const pureNestedRenderers = {
      ...baseRenderers,
      Object: { ...(baseRenderers.Object as object), pure: true },
    } as unknown as IRenderers

    render(<CompletedCore schema={nestedSchema} renderers={pureNestedRenderers} />)

    expect(screen.queryByTestId('tid-nested-hidden-left')).toBeNull()

    fireEvent.change(screen.getByTestId('tid-nested-show'), { target: { value: '1' } })
    expect(screen.queryByTestId('tid-nested-hidden-left')).toBeTruthy()
  })

  test('未声明 pure 时，useFieldValue 的订阅不会减少重渲染（声明才是开关）', () => {
    const seen: any[] = []

    const ImpureViewer = () => {
      const age = useFieldValue('age')
      seen.push(age)

      return <div data-testid="tid-impure-viewer" />
    }

    render(
      <CompletedCore
        schema={wrapRootSchema({
          viewer: { title: '查看年龄', renderType: 'ImpureViewer' },
          age: {
            title: '年龄',
            renderType: 'InputText',
            renderOptions: { 'data-testid': 'tid-age5' },
          },
          name: {
            title: '姓名',
            renderType: 'InputText',
            renderOptions: { 'data-testid': 'tid-name5' },
          },
        })}
        renderers={{ ImpureViewer: { component: ImpureViewer } } as unknown as IRenderers}
      />
    )

    const before = seen.length

    // 未声明 pure：无关字段变化时 Executor 照常重渲染，订阅只额外增加一次通知
    fireEvent.change(screen.getByTestId('tid-name5'), { target: { value: 'abc' } })
    expect(seen.length).toBeGreaterThan(before)
  })
})
