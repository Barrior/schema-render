import type { ICoreRef, IRenderers } from '@core-react/index'
import { useFieldValue } from '@core-react/index'
import {
  getRenderStats,
  resetRenderStats,
  setRenderLogEnabled,
} from '@core-react/utils/devLog'
import { wrapRootSchema } from '@test/@helpers/schema'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { createRef } from 'react'

import CompletedCore from './@helpers/CompletedCore'

let summaryRenders = 0

/**
 * 业务联动组件：读取「数量」和「单价」，算出「合计」
 * 只依赖这两个字段，声明 pure 后其它字段变化不会触发它
 */
const AmountSummary = () => {
  summaryRenders += 1

  const quantity = useFieldValue('quantity')
  const price = useFieldValue('price')
  const total = (Number(quantity) || 0) * (Number(price) || 0)

  return <div data-testid="tid-summary">{String(total)}</div>
}

/** 未声明 pure 的对照组：每次数据变化都会被通知重渲染 */
const ImpureSummary = () => {
  summaryRenders += 1

  const quantity = useFieldValue('quantity')
  const price = useFieldValue('price')
  const total = (Number(quantity) || 0) * (Number(price) || 0)

  return <div data-testid="tid-summary">{String(total)}</div>
}

const baseSchema = wrapRootSchema({
  quantity: {
    title: '数量',
    renderType: 'InputText',
    renderOptions: { 'data-testid': 'tid-quantity' },
  },
  price: {
    title: '单价',
    renderType: 'InputText',
    renderOptions: { 'data-testid': 'tid-price' },
  },
  remark: {
    title: '备注',
    renderType: 'InputText',
    renderOptions: { 'data-testid': 'tid-remark' },
  },
  summary: {
    title: '合计',
    renderType: 'AmountSummary',
  },
})

const pureRenderers = {
  AmountSummary: { component: AmountSummary, pure: true },
} as unknown as IRenderers

const impureRenderers = {
  AmountSummary: { component: ImpureSummary },
} as unknown as IRenderers

describe('useFieldValue 联动自定义组件', () => {
  beforeEach(() => {
    summaryRenders = 0
  })

  test('依赖字段变化时更新，且按「数量 × 单价」正确计算', () => {
    render(<CompletedCore schema={baseSchema} renderers={pureRenderers} />)

    expect(screen.getByTestId('tid-summary')).toHaveTextContent('0')

    fireEvent.change(screen.getByTestId('tid-price'), { target: { value: '3' } })
    expect(screen.getByTestId('tid-summary')).toHaveTextContent('0')

    fireEvent.change(screen.getByTestId('tid-quantity'), { target: { value: '2' } })
    expect(screen.getByTestId('tid-summary')).toHaveTextContent('6')

    fireEvent.change(screen.getByTestId('tid-quantity'), { target: { value: '4' } })
    expect(screen.getByTestId('tid-summary')).toHaveTextContent('12')
  })

  test('无关字段变化时不重渲染', () => {
    render(<CompletedCore schema={baseSchema} renderers={pureRenderers} />)

    const before = summaryRenders

    fireEvent.change(screen.getByTestId('tid-remark'), { target: { value: 'hello' } })

    expect(summaryRenders).toBe(before)
    expect(screen.getByTestId('tid-summary')).toHaveTextContent('0')
  })

  test('未声明 pure 的对照组件：值仍然正确，但无关字段变化也会重渲染', () => {
    render(<CompletedCore schema={baseSchema} renderers={impureRenderers} />)

    fireEvent.change(screen.getByTestId('tid-price'), { target: { value: '5' } })

    const before = summaryRenders
    fireEvent.change(screen.getByTestId('tid-remark'), { target: { value: 'hello' } })

    expect(summaryRenders).toBeGreaterThan(before)
    expect(screen.getByTestId('tid-summary')).toHaveTextContent('0')
  })

  test('命令式 setValue 更新依赖时也能联动', () => {
    const coreRef = createRef<ICoreRef>()
    render(<CompletedCore ref={coreRef} schema={baseSchema} renderers={pureRenderers} />)

    act(() => {
      coreRef.current?.setValue({ quantity: 3, price: 2 })
    })

    expect(screen.getByTestId('tid-summary')).toHaveTextContent('6')
  })

  test('defaultValue 会在首次渲染时被读到', () => {
    render(
      <CompletedCore
        schema={baseSchema}
        renderers={pureRenderers}
        defaultValue={{ quantity: 2, price: 5 }}
      />
    )

    expect(screen.getByTestId('tid-summary')).toHaveTextContent('10')
  })

  test('useFieldValue 触发更新时会打印订阅日志', () => {
    setRenderLogEnabled(true)
    const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    jest.spyOn(console, 'info').mockImplementation(() => undefined)

    try {
      render(<CompletedCore schema={baseSchema} renderers={pureRenderers} />)
      log.mockClear()

      fireEvent.change(screen.getByTestId('tid-quantity'), { target: { value: '2' } })

      const lines = log.mock.calls.map((call) => String(call[0]))

      expect(
        lines.some((line) =>
          line.includes('useFieldValue AmountSummary(summary) ← quantity')
        )
      ).toBe(true)
    } finally {
      setRenderLogEnabled(undefined)
      resetRenderStats()
      jest.restoreAllMocks()
    }
  })

  test('订阅更新只重渲染组件自身，不经过 Executor', () => {
    setRenderLogEnabled(true)
    jest.spyOn(console, 'log').mockImplementation(() => undefined)
    jest.spyOn(console, 'info').mockImplementation(() => undefined)

    try {
      render(<CompletedCore schema={baseSchema} renderers={pureRenderers} />)
      resetRenderStats()

      fireEvent.change(screen.getByTestId('tid-quantity'), { target: { value: '2' } })

      const stats = getRenderStats()

      // 组件自身的订阅更新
      expect(stats['useFieldValue AmountSummary(summary) ← quantity']).toBe(1)

      // 父级 Executor 与渲染器包装层都没有被带着重渲染
      expect(stats['RendererExecutor summary']).toBeUndefined()
      expect(stats['renderer:AmountSummary summary']).toBeUndefined()
    } finally {
      setRenderLogEnabled(undefined)
      resetRenderStats()
      jest.restoreAllMocks()
    }
  })
})

describe('useFieldValue 读取嵌套字段', () => {
  const nestedSchema = wrapRootSchema({
    nested: {
      title: '嵌套',
      renderType: 'Object',
      properties: {
        name: {
          title: '名称',
          renderType: 'InputText',
          renderOptions: { 'data-testid': 'tid-name' },
        },
      },
    },
    remark: {
      title: '备注',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-remark' },
    },
    viewer: {
      title: '查看',
      renderType: 'NestedViewer',
    },
  })

  const NestedViewer = () => {
    const byString = useFieldValue('nested.name')
    const byArray = useFieldValue(['nested', 'name'])

    return (
      <div data-testid="tid-nested-viewer">{`${byString ?? ''}|${byArray ?? ''}`}</div>
    )
  }

  const renderers = {
    NestedViewer: { component: NestedViewer, pure: true },
  } as unknown as IRenderers

  test('字符串路径与数组路径等价，且能随嵌套字段更新', () => {
    render(<CompletedCore schema={nestedSchema} renderers={renderers} />)

    expect(screen.getByTestId('tid-nested-viewer')).toHaveTextContent('|')

    fireEvent.change(screen.getByTestId('tid-name'), { target: { value: 'Tom' } })

    expect(screen.getByTestId('tid-nested-viewer')).toHaveTextContent('Tom|Tom')

    fireEvent.change(screen.getByTestId('tid-remark'), { target: { value: 'x' } })

    expect(screen.getByTestId('tid-nested-viewer')).toHaveTextContent('Tom|Tom')
  })
})

describe('useFieldValue 与 hidden 的关系', () => {
  const hiddenSchema = wrapRootSchema({
    show: {
      title: '显示单价',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-show' },
    },
    price: {
      title: '单价',
      renderType: 'InputText',
      hidden: '$root.show !== "1"',
      renderOptions: { 'data-testid': 'tid-price' },
    },
    quantity: {
      title: '数量',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'tid-quantity' },
    },
    summary: {
      title: '合计',
      renderType: 'AmountSummary',
    },
  })

  test('依赖字段被隐藏时值仍保留，联动照常工作', () => {
    render(
      <CompletedCore
        schema={hiddenSchema}
        renderers={pureRenderers}
        defaultValue={{ price: 5 }}
      />
    )

    // price 隐藏，但值存在
    expect(screen.queryByTestId('tid-price')).toBeNull()

    fireEvent.change(screen.getByTestId('tid-quantity'), { target: { value: '2' } })
    expect(screen.getByTestId('tid-summary')).toHaveTextContent('10')

    // 显示后能看到之前的值
    fireEvent.change(screen.getByTestId('tid-show'), { target: { value: '1' } })
    expect(screen.getByTestId('tid-price')).toHaveValue('5')
  })
})
