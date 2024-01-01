import type { IRenderer, IRenderers } from '../typings/core'
import type { ISchema } from '../typings/schema'

export function matchRenderer<T extends ISchema>(
  renderers: IRenderers = {},
  renderType?: string
): IRenderer<T> | undefined {
  if (!renderType) {
    return
  }

  const renderer = renderers[renderType.toLowerCase()]

  if (renderer && (renderer.formItem || renderer.component)) {
    return renderer as IRenderer<T>
  }
}
