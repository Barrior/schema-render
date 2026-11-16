import type { IPath } from '../typings/common'

const ROOT_PATH = Object.freeze([] as Array<string | number>) as unknown as IPath

/**
 * 父 path（按引用）→ 字段名 → 子 path 数组。
 * 只用引用做键，因此父 path 必须来自 getRootPath() 或 internPath() 的返回值。
 */
const childPathCache = new WeakMap<IPath, Map<string | number, IPath>>()

export function getRootPath(): IPath {
  return ROOT_PATH
}

/**
 * 按 (父 path, 字段名) 复用同一个 path 数组：同一字段在多次渲染间拿到相同引用，
 * 下游的 memo / 依赖比较才有意义。返回值已冻结，不要原地修改。
 */
export function internPath(parentPath: IPath, field: string | number): IPath {
  let children = childPathCache.get(parentPath)

  if (!children) {
    children = new Map()
    childPathCache.set(parentPath, children)
  }

  let path = children.get(field)

  if (!path) {
    path = Object.freeze([...parentPath, field]) as unknown as IPath
    children.set(field, path)
  }

  return path
}
