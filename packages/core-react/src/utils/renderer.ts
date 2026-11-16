import type { IRenderer, IRenderers } from '../typings/core'
import type { ISchema } from '../typings/schema'

const EMPTY_RENDERERS: IRenderers = {}

/**
 * 以 renderers 对象为键缓存匹配结果：对象不可变（Core 里由 useMemo 生成）
 * 时不会读到过期值；换新对象即自动失效。
 * null 表示「查过但没有可用渲染器」，与「未查过」区分开。
 */
const matchCache = new WeakMap<IRenderers, Map<string, IRenderer | null>>()

export function matchRenderer<T extends ISchema>(
  renderers: IRenderers = EMPTY_RENDERERS,
  renderType?: string
): IRenderer<T> | undefined {
  if (!renderType) {
    return
  }

  const key = renderType.toLowerCase()
  let cache = matchCache.get(renderers)

  if (!cache) {
    cache = new Map()
    matchCache.set(renderers, cache)
  }

  const cached = cache.get(key)

  if (cached !== undefined) {
    return (cached ?? undefined) as IRenderer<T> | undefined
  }

  const renderer = renderers[key]
  const matched =
    renderer && (renderer.formItem || renderer.component)
      ? (renderer as IRenderer<T>)
      : null

  cache.set(key, matched)

  return matched ?? undefined
}
