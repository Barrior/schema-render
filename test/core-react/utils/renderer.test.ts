import type { IRenderers } from '@core-react/typings/core'
import { matchRenderer } from '@core-react/utils/renderer'

const InputRenderer = { component: () => null }
const FormItemOnlyRenderer = { formItem: () => null }
const EmptyRenderer = { formItem: undefined, component: undefined }

function createCountingRenderers(source: Record<string, any>) {
  let reads = 0

  const proxy = new Proxy(source, {
    get(target, key) {
      reads++
      return target[key as string]
    },
  }) as IRenderers

  return {
    renderers: proxy,
    getReads: () => reads,
  }
}

describe('matchRenderer', () => {
  test('按 renderType 匹配渲染器，忽略大小写', () => {
    const renderers = { input: InputRenderer } as unknown as IRenderers

    expect(matchRenderer(renderers, 'Input')).toBe(InputRenderer)
    expect(matchRenderer(renderers, 'INPUT')).toBe(InputRenderer)
    expect(matchRenderer(renderers, 'input')).toBe(InputRenderer)
  })

  test('只有 formItem 或只有 component 也算匹配', () => {
    const renderers = {
      input: InputRenderer,
      'form-item-only': FormItemOnlyRenderer,
    } as unknown as IRenderers

    expect(matchRenderer(renderers, 'form-item-only')).toBe(FormItemOnlyRenderer)
  })

  test('renderType 为空或渲染器缺少 formItem/component 时返回 undefined', () => {
    const renderers = {
      empty: EmptyRenderer,
    } as unknown as IRenderers

    expect(matchRenderer(renderers, undefined)).toBeUndefined()
    expect(matchRenderer(renderers, '')).toBeUndefined()
    expect(matchRenderer(renderers, 'empty')).toBeUndefined()
    expect(matchRenderer(renderers, 'notExist')).toBeUndefined()
  })

  test('同一个 renderers 对象只查表一次，未命中的结果也会缓存', () => {
    const { renderers, getReads } = createCountingRenderers({
      input: InputRenderer,
    })

    expect(matchRenderer(renderers, 'Input')).toBe(InputRenderer)
    expect(matchRenderer(renderers, 'input')).toBe(InputRenderer)
    expect(getReads()).toBe(1)

    expect(matchRenderer(renderers, 'select')).toBeUndefined()
    expect(matchRenderer(renderers, 'SELECT')).toBeUndefined()
    expect(getReads()).toBe(2)
  })

  test('换一个 renderers 对象会重新匹配', () => {
    const first = { input: InputRenderer } as unknown as IRenderers
    const NextRenderer = { component: () => null }
    const second = { input: NextRenderer } as unknown as IRenderers

    expect(matchRenderer(first, 'input')).toBe(InputRenderer)
    expect(matchRenderer(second, 'input')).toBe(NextRenderer)
  })
})
