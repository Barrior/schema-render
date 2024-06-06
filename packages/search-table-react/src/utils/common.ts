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
