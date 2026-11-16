import useRootContext from '@core-react/hooks/useRootContext'
import type { IOpenItemLayoutParams, IRenderers } from '@core-react/index'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'
import type { FC } from 'react'
import { useCallback, useState } from 'react'

import CompletedCore from './@helpers/CompletedCore'

const staticContexts: any[] = []

const Probe = () => {
  staticContexts.push(useRootContext())
  return <div data-testid="tid-probe" />
}

const probeRenderer = { component: Probe }

// 正确写法之一：布局组件定义在渲染函数之外，引用天然稳定
const HorizontalLayout: FC<IOpenItemLayoutParams> = ({
  body,
  schema,
  required,
  prefixClassNames,
}) => (
  <div className={prefixClassNames('item-layout-horizontal')} data-testid="tid-layout">
    <span data-testid="tid-layout-title">{`${required ? '*' : ''}${schema.title}`}</span>
    {body}
  </div>
)

const schema = wrapRootSchema({
  probe: {
    title: '探针',
    renderType: 'Probe',
    // 表达式让该字段每轮都要重新求值，从而持续重渲染，才能观察到静态 Context 的引用
    required: '$root.age !== ""',
  },
  age: {
    title: '年龄',
    renderType: 'InputText',
    renderOptions: {
      'data-testid': 'tid-age',
    },
  },
})

// 受控模式下应用层每次输入都会重渲染，这里刻意内联传新对象
function ControlledForm() {
  const [value, setValue] = useState<Record<string, any>>({})

  return (
    <CompletedCore
      schema={schema}
      renderers={{ Probe: probeRenderer } as unknown as IRenderers}
      userCtx={{ role: 'admin' }}
      validators={{}}
      locale={{}}
      style={{ marginTop: 8 }}
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
    />
  )
}

describe('静态配置引用稳定性（受控模式）', () => {
  beforeEach(() => {
    staticContexts.length = 0
  })

  test('内联传入但内容未变的配置，不会导致静态 Context 重建', () => {
    render(<ControlledForm />)

    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '1' } })
    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '12' } })

    expect(staticContexts.length).toBeGreaterThanOrEqual(3)
    expect(staticContexts.every((ctx) => ctx === staticContexts[0])).toBe(true)
  })

  test('渲染器列表本身也保持引用稳定', () => {
    render(<ControlledForm />)

    const firstRenderers = staticContexts[0].renderers
    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '1' } })

    expect(staticContexts[staticContexts.length - 1].renderers).toBe(firstRenderers)
  })

  test('内联 style 不进入静态配置，样式照常生效', () => {
    const { container } = render(<ControlledForm />)
    const root = container.querySelector('.schema-render') as HTMLElement

    expect(root.style.marginTop).toBe('8px')

    fireEvent.change(screen.getByTestId('tid-age'), { target: { value: '1' } })

    expect(staticContexts.every((ctx) => ctx === staticContexts[0])).toBe(true)
    expect(
      (container.querySelector('.schema-render') as HTMLElement).style.marginTop
    ).toBe('8px')
  })

  test('内联 itemLayout 是组件类型变化：静态 Context 重建且 DOM 重挂载', () => {
    const InlineLayout = ({ body }: { body?: unknown }) => <div>{body as any}</div>

    function InlineForm() {
      const [value, setValue] = useState<Record<string, any>>({})

      return (
        <CompletedCore
          schema={schema}
          renderers={{ Probe: probeRenderer } as unknown as IRenderers}
          itemLayout={(params: any) => <InlineLayout {...params} />}
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
        />
      )
    }

    render(<InlineForm />)

    const before = screen.getByTestId('tid-age')
    fireEvent.change(before, { target: { value: '1' } })

    expect(staticContexts[staticContexts.length - 1]).not.toBe(staticContexts[0])
    // 组件类型变了，React 会卸载并重建整棵子树，输入节点被替换
    expect(screen.getByTestId('tid-age')).not.toBe(before)
  })

  test('正确写法①：模块级 itemLayout —— 静态配置不重建、布局不重挂载', () => {
    function LayoutForm() {
      const [value, setValue] = useState<Record<string, any>>({})

      return (
        <CompletedCore
          schema={schema}
          renderers={{ Probe: probeRenderer } as unknown as IRenderers}
          itemLayout={HorizontalLayout}
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
        />
      )
    }

    render(<LayoutForm />)

    // 布局组件正常接管了两个字段
    expect(screen.getAllByTestId('tid-layout')).toHaveLength(2)
    expect(screen.getAllByTestId('tid-layout-title')[1]).toHaveTextContent('年龄')

    const before = screen.getByTestId('tid-age')
    fireEvent.change(before, { target: { value: '1' } })

    expect(screen.getByTestId('tid-age')).toBe(before)
    expect(staticContexts.every((ctx) => ctx === staticContexts[0])).toBe(true)
    expect(staticContexts[staticContexts.length - 1].itemLayout).toBe(HorizontalLayout)
  })

  test('正确写法②：内联 itemLayout 用 useCallback 稳定引用 —— 同样不重建', () => {
    function CallbackLayoutForm() {
      const [value, setValue] = useState<Record<string, any>>({})
      const itemLayout = useCallback(
        (params: IOpenItemLayoutParams) => <HorizontalLayout {...params} />,
        []
      )

      return (
        <CompletedCore
          schema={schema}
          renderers={{ Probe: probeRenderer } as unknown as IRenderers}
          itemLayout={itemLayout}
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
        />
      )
    }

    render(<CallbackLayoutForm />)

    const before = screen.getByTestId('tid-age')
    fireEvent.change(before, { target: { value: '1' } })

    expect(screen.getByTestId('tid-age')).toBe(before)
    expect(staticContexts.every((ctx) => ctx === staticContexts[0])).toBe(true)
  })
})
