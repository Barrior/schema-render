import type { IRenderers } from '@core-react/index'
import { useFieldValue } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'

import CompletedCore from './@helpers/CompletedCore'

describe('受控模式', () => {
  const schema = wrapRootSchema({
    name: {
      title: '姓名',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-name' },
    },
    age: {
      title: '年龄',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-age' },
    },
  })

  function ControlledForm({
    onValueChange,
    initialValue = {},
  }: {
    onValueChange?: (value: any) => void
    initialValue?: Record<string, any>
  }) {
    const [value, setValue] = useState(initialValue)

    return (
      <CompletedCore
        schema={schema}
        value={value}
        onChange={(nextValue) => {
          onValueChange?.(nextValue)
          setValue(nextValue)
        }}
      />
    )
  }

  test('输入后父级状态与视图同步', () => {
    const changes: any[] = []
    render(<ControlledForm onValueChange={(value) => changes.push(value)} />)

    const input = screen.getByTestId('tid-age')
    fireEvent.change(input, { target: { value: '18' } })

    expect(changes[changes.length - 1]).toEqual({ age: '18' })
    expect(input).toHaveValue('18')
  })

  test('父级外部改值后字段同步更新', () => {
    const { rerender } = render(<ControlledForm initialValue={{ age: '1' }} />)
    expect(screen.getByTestId('tid-age')).toHaveValue('1')

    rerender(
      <CompletedCore schema={schema} value={{ age: '99' }} onChange={() => undefined} />
    )

    expect(screen.getByTestId('tid-age')).toHaveValue('99')
  })

  test('父级外部改值后 hidden 字段出现', () => {
    const hiddenSchema = wrapRootSchema({
      show: {
        title: '显示',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-show' },
      },
      extra: {
        title: '额外',
        renderType: 'InputText',
        hidden: '$root.show !== "1"',
        renderOptions: { 'data-testid': 'tid-extra' },
      },
    })

    const { rerender } = render(
      <CompletedCore schema={hiddenSchema} value={{}} onChange={() => undefined} />
    )
    expect(screen.queryByTestId('tid-extra')).toBeNull()

    rerender(
      <CompletedCore
        schema={hiddenSchema}
        value={{ show: '1' }}
        onChange={() => undefined}
      />
    )

    expect(screen.queryByTestId('tid-extra')).toBeTruthy()
  })
})

describe('非受控模式', () => {
  const renders: Record<string, number> = {}

  const PlainProbe = ({ path }: any) => {
    renders[String(path[0])] = (renders[String(path[0])] ?? 0) + 1
    return <div data-testid={`tid-${path[0]}`} />
  }

  const schema = wrapRootSchema({
    name: {
      title: '姓名',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-name' },
    },
    plain: {
      title: '纯字段',
      renderType: 'PlainProbe',
    },
  })

  const renderers = {
    PlainProbe: { component: PlainProbe, pure: true },
  } as unknown as IRenderers

  beforeEach(() => {
    Object.keys(renders).forEach((key) => {
      delete renders[key]
    })
  })

  test('输入更新自身值，无关纯字段不重渲染', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    const beforePlain = renders.plain

    fireEvent.change(screen.getByTestId('tid-name'), { target: { value: 'x' } })
    expect(screen.getByTestId('tid-name')).toHaveValue('x')
    expect(renders.plain).toBe(beforePlain)
  })

  test('默认值会渲染到控件上', () => {
    render(
      <CompletedCore
        schema={schema}
        renderers={renderers}
        defaultValue={{ name: 'init' }}
      />
    )

    expect(screen.getByTestId('tid-name')).toHaveValue('init')
  })
})

describe('hidden 切换', () => {
  const schema = wrapRootSchema({
    flag: {
      title: '标记',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-flag' },
    },
    extra: {
      title: '额外',
      renderType: 'InputText',
      hidden: '$root.flag !== "1"',
      renderOptions: { 'data-testid': 'tid-extra' },
    },
    name: {
      title: '姓名',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-name' },
    },
  })

  test('依赖字段变化时切换显隐，无关字段变化不影响', () => {
    render(<CompletedCore schema={schema} />)

    expect(screen.queryByTestId('tid-extra')).toBeNull()

    fireEvent.change(screen.getByTestId('tid-name'), { target: { value: 'abc' } })
    expect(screen.queryByTestId('tid-extra')).toBeNull()

    fireEvent.change(screen.getByTestId('tid-flag'), { target: { value: '1' } })
    expect(screen.queryByTestId('tid-extra')).toBeTruthy()

    fireEvent.change(screen.getByTestId('tid-flag'), { target: { value: '0' } })
    expect(screen.queryByTestId('tid-extra')).toBeNull()
  })
})

describe('嵌套 Object', () => {
  const renders: Record<string, number> = {}

  const NestProbe = ({ path }: any) => {
    const key = path.join('.')
    renders[key] = (renders[key] ?? 0) + 1
    return <div data-testid={`tid-${key}`} />
  }

  const schema = wrapRootSchema({
    nested: {
      title: '嵌套',
      renderType: 'Object',
      properties: {
        left: {
          title: '左侧',
          renderType: 'InputText',
          renderOptions: { 'data-testid': 'tid-left' },
        },
        probe: {
          title: '探针',
          renderType: 'NestProbe',
        },
        secret: {
          title: '隐藏项',
          renderType: 'InputText',
          hidden: '$root.show !== "1"',
          renderOptions: { 'data-testid': 'tid-secret' },
        },
      },
    },
    show: {
      title: '显示隐藏项',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-show' },
    },
  })

  const renderers = {
    NestProbe: { component: NestProbe, pure: true },
  } as unknown as IRenderers

  beforeEach(() => {
    Object.keys(renders).forEach((key) => {
      delete renders[key]
    })
  })

  test('嵌套字段输入自身更新，不影响兄弟纯字段', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    expect(screen.getByTestId('tid-nested.probe')).toBeInTheDocument()
    const beforeProbe = renders['nested.probe']

    fireEvent.change(screen.getByTestId('tid-left'), { target: { value: '7' } })
    expect(screen.getByTestId('tid-left')).toHaveValue('7')
    expect(renders['nested.probe']).toBe(beforeProbe)

    // 兄弟字段变化同样不会重渲染嵌套内的纯字段
    fireEvent.change(screen.getByTestId('tid-show'), { target: { value: '0' } })
    expect(renders['nested.probe']).toBe(beforeProbe)
  })

  test('嵌套内的 hidden 依赖外层字段', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    expect(screen.queryByTestId('tid-secret')).toBeNull()

    fireEvent.change(screen.getByTestId('tid-show'), { target: { value: '1' } })
    expect(screen.queryByTestId('tid-secret')).toBeTruthy()
  })

  test('嵌套字段外部改值（受控）能同步', () => {
    const { rerender } = render(
      <CompletedCore
        schema={schema}
        renderers={renderers}
        value={{ nested: { left: '1' } }}
        onChange={() => undefined}
      />
    )

    expect(screen.getByTestId('tid-left')).toHaveValue('1')

    rerender(
      <CompletedCore
        schema={schema}
        renderers={renderers}
        value={{ nested: { left: '2' } }}
        onChange={() => undefined}
      />
    )

    expect(screen.getByTestId('tid-left')).toHaveValue('2')
  })
})

describe('自定义渲染器', () => {
  const renders = { viewer: 0, raw: 0 }

  const PairViewer = () => {
    renders.viewer += 1
    const left = useFieldValue('left')
    const right = useFieldValue('right')
    return <div data-testid="tid-viewer">{`${left ?? ''}|${right ?? ''}`}</div>
  }

  const RawRootViewer = ({ rootValue }: any) => {
    renders.raw += 1
    return <div data-testid="tid-raw">{String(rootValue.left ?? '')}</div>
  }

  const CustomFormItem = ({ value, onChange }: any) => (
    <input
      data-testid="tid-custom"
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
    />
  )

  const schema = wrapRootSchema({
    viewer: { title: '组合展示', renderType: 'PairViewer' },
    raw: { title: '直接读 rootValue', renderType: 'RawRootViewer' },
    custom: { title: '自定义 formItem', renderType: 'CustomFormItem' },
    left: {
      title: '左',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-left' },
    },
    right: {
      title: '右',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-right' },
    },
  })

  const renderers = {
    PairViewer: { component: PairViewer, pure: true },
    RawRootViewer: { component: RawRootViewer },
    CustomFormItem: { formItem: CustomFormItem, pure: true },
  } as unknown as IRenderers

  beforeEach(() => {
    renders.viewer = 0
    renders.raw = 0
  })

  test('pure + useFieldValue：只随订阅字段更新', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    expect(screen.getByTestId('tid-viewer')).toHaveTextContent('|')

    fireEvent.change(screen.getByTestId('tid-left'), { target: { value: '1' } })
    // custom 是非订阅字段（自身值变化不影响 viewer），viewer 只订阅 left/right
    expect(screen.getByTestId('tid-viewer')).toHaveTextContent('1|')

    const before = renders.viewer
    fireEvent.change(screen.getByTestId('tid-custom'), { target: { value: 'x' } })
    expect(renders.viewer).toBe(before)

    fireEvent.change(screen.getByTestId('tid-right'), { target: { value: '2' } })
    expect(screen.getByTestId('tid-viewer')).toHaveTextContent('1|2')
  })

  test('未声明 pure 的直接读 rootValue：每次变化都能拿到最新数据', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    expect(screen.getByTestId('tid-raw')).toHaveTextContent('')

    fireEvent.change(screen.getByTestId('tid-left'), { target: { value: 'abc' } })
    expect(screen.getByTestId('tid-raw')).toHaveTextContent('abc')
  })

  test('自定义 formItem 渲染器可正常读写', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    fireEvent.change(screen.getByTestId('tid-custom'), { target: { value: 'hello' } })
    expect(screen.getByTestId('tid-custom')).toHaveValue('hello')
  })
})

describe('表达式引用外部数据', () => {
  const schema = wrapRootSchema({
    mode: {
      title: '模式',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-mode' },
    },
    name: {
      title: '姓名',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-name' },
      disabled: '$root.mode === "lock"',
      readonly: '$root.mode === "readonly"',
    },
    nested: {
      title: '嵌套',
      renderType: 'Object',
      properties: {
        flag: {
          title: '标记',
          renderType: 'InputText',
          renderOptions: { 'data-testid': 'tid-nested-flag' },
        },
        detail: {
          title: '明细',
          renderType: 'InputText',
          renderOptions: { 'data-testid': 'tid-detail' },
          // $ 是父对象（nested）
          required: '$.flag === "1"',
        },
      },
    },
    other: {
      title: '无关字段',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-other' },
    },
  })

  test('disabled 表达式只随依赖字段切换', () => {
    render(<CompletedCore schema={schema} />)

    const nameInput = () => screen.getByTestId('tid-name')

    fireEvent.change(screen.getByTestId('tid-other'), { target: { value: 'x' } })
    expect(nameInput().classList.contains('is-disabled')).toBe(false)

    fireEvent.change(screen.getByTestId('tid-mode'), { target: { value: 'lock' } })
    expect(nameInput().classList.contains('is-disabled')).toBe(true)

    fireEvent.change(screen.getByTestId('tid-mode'), { target: { value: 'edit' } })
    expect(nameInput().classList.contains('is-disabled')).toBe(false)
  })

  test('readonly 表达式切换只读渲染', () => {
    render(<CompletedCore schema={schema} />)

    fireEvent.change(screen.getByTestId('tid-mode'), { target: { value: 'readonly' } })

    const readonlyElement = screen.getByTestId('tid-name')
    expect(readonlyElement.tagName).toBe('DIV')
    expect(readonlyElement.classList.contains('is-readonly')).toBe(true)

    fireEvent.change(screen.getByTestId('tid-mode'), { target: { value: 'edit' } })
    expect(screen.getByTestId('tid-name').tagName).toBe('INPUT')
  })

  test('required 表达式引用父对象（$）在嵌套内生效', () => {
    render(<CompletedCore schema={schema} />)

    const detail = () => screen.getByTestId('tid-detail')

    expect(detail().closest('.is-required')).toBeNull()

    fireEvent.change(screen.getByTestId('tid-nested-flag'), { target: { value: '1' } })
    expect(detail().closest('.is-required')).toBeTruthy()

    fireEvent.change(screen.getByTestId('tid-nested-flag'), { target: { value: '0' } })
    expect(detail().closest('.is-required')).toBeNull()
  })
})
