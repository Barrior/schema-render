import {
  getRenderStats,
  logRender,
  resetRenderStats,
  setRenderLogEnabled,
  withRenderLog,
} from '@core-react/utils/devLog'
import { wrapRootSchema } from '@test/@helpers/schema'
import { render, screen } from '@testing-library/react'

import CompletedCore from '../@helpers/CompletedCore'

describe('开发环境渲染日志', () => {
  afterEach(() => {
    setRenderLogEnabled(undefined)
    resetRenderStats()
    jest.restoreAllMocks()
  })

  test('测试环境默认不输出、不计数', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    const info = jest.spyOn(console, 'info').mockImplementation(() => undefined)

    logRender('Core')

    expect(log).not.toHaveBeenCalled()
    expect(info).not.toHaveBeenCalled()
    expect(getRenderStats()).toEqual({})
  })

  test('开启后按「组件 + 路径」累计次数', () => {
    setRenderLogEnabled(true)
    const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    jest.spyOn(console, 'info').mockImplementation(() => undefined)

    logRender('Core')
    logRender('RendererFieldNode', ['nested', 'left'])
    logRender('RendererFieldNode', ['nested', 'left'])

    const lines = log.mock.calls.map((call) => String(call[0]))

    expect(lines).toHaveLength(3)
    expect(lines[0]).toContain('Core 第 1 次渲染')
    expect(lines[1]).toContain('RendererFieldNode nested.left 第 1 次渲染')
    expect(lines[2]).toContain('RendererFieldNode nested.left 第 2 次渲染')
    expect(getRenderStats()).toEqual({
      Core: 1,
      'RendererFieldNode nested.left': 2,
    })
  })

  test('reset 清空统计；关闭后不再输出', () => {
    setRenderLogEnabled(true)
    jest.spyOn(console, 'info').mockImplementation(() => undefined)
    logRender('Core')
    expect(getRenderStats()).toEqual({ Core: 1 })

    resetRenderStats()
    expect(getRenderStats()).toEqual({})

    setRenderLogEnabled(false)
    const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    logRender('Core')
    expect(log).not.toHaveBeenCalled()
    expect(getRenderStats()).toEqual({})
  })

  test('withRenderLog 复用同一个包装组件并透传 props', () => {
    setRenderLogEnabled(true)
    ;(window as unknown as Record<string, unknown>).__SCHEMA_RENDER_LOG_MOUNT__ = true
    const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    jest.spyOn(console, 'info').mockImplementation(() => undefined)

    const Input = ({ value }: any) => <div data-testid="wrapped">{value}</div>

    const First = withRenderLog(Input)
    const Second = withRenderLog(Input)
    expect(First).toBe(Second)

    try {
      render(<First schema={{ renderType: 'InputText' }} path={['name']} value="v" />)

      expect(screen.getByTestId('wrapped')).toHaveTextContent('v')
      expect(String(log.mock.calls[0][0])).toContain(
        'renderer:InputText name 第 1 次渲染 (首次渲染)'
      )
    } finally {
      delete (window as unknown as Record<string, unknown>).__SCHEMA_RENDER_LOG_MOUNT__
    }
  })

  test('组件树渲染时会真正打出各层日志（开启挂载日志时）', () => {
    setRenderLogEnabled(true)
    ;(window as unknown as Record<string, unknown>).__SCHEMA_RENDER_LOG_MOUNT__ = true
    const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    jest.spyOn(console, 'info').mockImplementation(() => undefined)

    try {
      render(
        <CompletedCore
          schema={wrapRootSchema({
            name: {
              title: '姓名',
              renderType: 'InputText',
              renderOptions: { 'data-testid': 'tid-name' },
            },
          })}
        />
      )

      const messages = log.mock.calls.map((call) => String(call[0]))
      const has = (text: string) => messages.some((line) => line.includes(text))

      expect(has('Core 第 1 次渲染 (首次渲染)')).toBe(true)
      expect(has('RendererIterator 第 1 次渲染 (首次渲染)')).toBe(true)
      expect(has('RendererDistributor name 第 1 次渲染 (首次渲染)')).toBe(true)
      expect(has('RendererExecutor name 第 1 次渲染 (首次渲染)')).toBe(true)
      expect(has('renderer:InputText name 第 1 次渲染 (首次渲染)')).toBe(true)
    } finally {
      delete (window as unknown as Record<string, unknown>).__SCHEMA_RENDER_LOG_MOUNT__
    }
  })

  test('挂载日志默认静默，但统计仍然累加', () => {
    setRenderLogEnabled(true)
    const log = jest.spyOn(console, 'log').mockImplementation(() => undefined)

    render(
      <CompletedCore
        schema={wrapRootSchema({
          name: {
            title: '姓名',
            renderType: 'InputText',
            renderOptions: { 'data-testid': 'tid-name' },
          },
        })}
      />
    )

    expect(log).not.toHaveBeenCalled()
    expect(getRenderStats()['RendererExecutor name']).toBe(1)
  })

  test('window 上暴露查看 / 清零 / 开关入口', () => {
    const api = (window as any).__schemaRender

    expect(typeof api.stats).toBe('function')
    expect(typeof api.reset).toBe('function')
    expect(typeof api.enabled).toBe('function')
  })
})
