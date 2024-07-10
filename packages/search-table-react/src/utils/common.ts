import { utils } from '@schema-render/core-react'

const { isArray, isPlainObject, isString, isNil } = utils

/**
 * 数据是否为空，【null、undefined、空数组、空对象、空字符串】将被判断为空
 */
export const isEmpty = (data: any): boolean => {
  if (isArray(data)) {
    return !data.length
  }

  if (isPlainObject(data)) {
    return !Object.keys(data).length
  }

  if (isString(data)) {
    return data.trim() === ''
  }

  return isNil(data)
}

/**
 * 遍历数组，返回新数组
 */
export function map<U extends any>(
  arr: any,
  fn: (value: any, index: number, array: any[]) => U
) {
  if (isArray(arr)) {
    return arr.map(fn)
  }
  return []
}

/**
 * 遍历数组，返回 true 跳出后续循环
 */
export function forEach<V extends any>(
  arrLike?: ArrayLike<V>,
  fn?: (value: V, index: number, array: ArrayLike<V>) => boolean | void
) {
  if (!arrLike) {
    return
  }

  const length = arrLike.length

  for (let i = 0; i < length; i++) {
    const isBreakOff = fn?.(arrLike[i], i, arrLike)
    if (isBreakOff) {
      return
    }
  }
}

/**
 * 创建短字符唯一ID
 * ref https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 */
export function createRandomId() {
  return Math.random().toString(36).substring(7).replace(/\d/g, 'x')
}
