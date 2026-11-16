import type { IRenderers } from '@core-react/index'
import { resetRenderStats, setRenderLogEnabled } from '@core-react/utils/devLog'
import { wrapRootSchema } from '@test/@helpers/schema'
import { act, fireEvent, render, screen } from '@testing-library/react'

import CompletedCore from './@helpers/CompletedCore'

describe('单次输入只触发一次渲染', () => {
  const renders: string[] = []

  const makeInput = (tag: string) => {
    return ({ value, onChange }: any) => {
      renders.push(`${tag}:${value ?? ''}`)
      return (
        <input
          data-testid={`tid-${tag}`}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    }
  }

  const PureInput = makeInput('pure')
  const RawInput = makeInput('raw')

  const schema = wrapRootSchema({
    pure: { title: '纯字段', renderType: 'PureInput' },
    raw: { title: '非纯字段', renderType: 'RawInput' },
  })

  const renderers = {
    PureInput: { component: PureInput, pure: true },
    RawInput: { component: RawInput },
  } as unknown as IRenderers

  beforeEach(() => {
    renders.length = 0
  })

  test('纯字段：输入一次，渲染器只执行一次', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    renders.length = 0
    fireEvent.change(screen.getByTestId('tid-pure'), { target: { value: '1' } })

    // 非纯字段会因全量订阅也渲染一次，这里只关注纯字段自身
    expect(renders.filter((item) => item.startsWith('pure:'))).toEqual(['pure:1'])
  })

  test('非纯字段：输入一次，渲染器也只执行一次（订阅是唯一触发源）', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    renders.length = 0
    fireEvent.change(screen.getByTestId('tid-raw'), { target: { value: '1' } })

    expect(renders).toEqual(['raw:1'])
  })

  test('普通字段变化不会带来非纯字段的重复渲染（每次变化一次）', () => {
    render(<CompletedCore schema={schema} renderers={renderers} />)

    renders.length = 0
    fireEvent.change(screen.getByTestId('tid-pure'), { target: { value: 'a' } })
    fireEvent.change(screen.getByTestId('tid-pure'), { target: { value: 'ab' } })

    expect(renders.filter((item) => item.startsWith('raw:'))).toEqual(['raw:', 'raw:'])
  })

  test('校验结果与当前状态一致时，300ms 后不再产生额外渲染', async () => {
    jest.useFakeTimers()

    try {
      render(<CompletedCore schema={schema} renderers={renderers} />)

      renders.length = 0
      fireEvent.change(screen.getByTestId('tid-pure'), { target: { value: '1' } })

      const afterInput = renders.filter((item) => item.startsWith('pure:')).length
      expect(afterInput).toBe(1)

      await act(async () => {
        jest.advanceTimersByTime(500)
      })

      expect(renders.filter((item) => item.startsWith('pure:')).length).toBe(afterInput)
    } finally {
      jest.useRealTimers()
    }
  })

  test('校验状态真正变化时仍会重渲染并显示错误', async () => {
    jest.useFakeTimers()

    const requiredInput = ({ value, onChange, validator }: any) => (
      <div>
        <input
          data-testid="tid-required"
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
        />
        <span data-testid="tid-required-msg">{validator.message ?? ''}</span>
      </div>
    )

    const requiredSchema = wrapRootSchema({
      required: { title: '必填项', renderType: 'RequiredInput', required: true },
    })

    const requiredRenderers = {
      RequiredInput: { component: requiredInput, pure: true },
    } as unknown as IRenderers

    try {
      render(<CompletedCore schema={requiredSchema} renderers={requiredRenderers} />)

      fireEvent.change(screen.getByTestId('tid-required'), { target: { value: 'a' } })
      fireEvent.change(screen.getByTestId('tid-required'), { target: { value: '' } })

      await act(async () => {
        jest.advanceTimersByTime(500)
      })

      expect(screen.getByTestId('tid-required-msg')).toHaveTextContent('必填')
    } finally {
      jest.useRealTimers()
    }
  })

  test('非 pure 字段因全量订阅重渲染时，日志标注「订阅通知（值未变化）」', () => {
    setRenderLogEnabled(true)
    const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    jest.spyOn(console, 'info').mockImplementation(() => undefined)

    try {
      render(<CompletedCore schema={schema} renderers={renderers} />)
      log.mockClear()

      fireEvent.change(screen.getByTestId('tid-pure'), { target: { value: 'a' } })

      const lines = log.mock.calls.map((call) => String(call[0]))

      expect(
        lines.some(
          (line) =>
            line.includes('RendererExecutor raw') && line.includes('订阅通知（值未变化）')
        )
      ).toBe(true)
    } finally {
      setRenderLogEnabled(undefined)
      resetRenderStats()
      jest.restoreAllMocks()
    }
  })
})
