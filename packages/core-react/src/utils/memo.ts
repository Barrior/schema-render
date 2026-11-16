import type { IPath } from '../typings/common'
import type { ISchema } from '../typings/schema'

export interface IValueAwareProps {
  schema: ISchema
  path: IPath
  gridColumn?: string
  renderer?: unknown
}

/**
 * Executor 的 memo 比较：
 * 字段值的更新由 `ValueStore` 订阅驱动（不经过父级 props），
 * 所以这里只比较结构类 props。
 *
 * 只有声明了 pure 的渲染器才可能被跳过——渲染器是否读取 rootValue 等其它数据
 * 无法静态判断，未声明 pure 时按「有依赖」处理。
 */
export function areRendererPropsEqual(
  prev: IValueAwareProps,
  next: IValueAwareProps
): boolean {
  if (prev.renderer !== next.renderer) {
    return false
  }

  if (prev.schema !== next.schema || prev.path !== next.path) {
    return false
  }

  if (prev.gridColumn !== next.gridColumn) {
    return false
  }

  return (next.renderer as { pure?: boolean } | undefined)?.pure === true
}
