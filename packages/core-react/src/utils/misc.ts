import type { IPath } from '../typings/common'
import { isNumber } from './checking'

/**
 * 字符串化路径
 */
export function stringifyPath(path: IPath) {
  return path.join('.')
}

/**
 * 将 string 或 number 类型的样式值标准化为 string 类型样式值
 * @param value 样式值
 */
export function normalizeStyleValue(value: string | number) {
  return isNumber(value) ? `${String(value)}px` : value
}
