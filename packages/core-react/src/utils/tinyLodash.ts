import type { IDictionary, IObjectAny } from '../typings/common'
import assert from './assert'
import { hasOwnProperty } from './base'
import {
  isArray,
  isFunction,
  isNumber,
  isObject,
  isPlainObject,
  isString,
} from './checking'

/**
 * fork from https://github.com/lukeed/klona/blob/master/src/json.js
 * @param val input JSON Value
 * @returns cloned JSON Value
 */
export function cloneDeep<T extends IObjectAny | any[]>(val: T): T {
  let k, out, tmp

  if (Array.isArray(val)) {
    out = Array((k = val.length))
    while (k--) out[k] = (tmp = val[k]) && typeof tmp === 'object' ? cloneDeep(tmp) : tmp
    return out as T
  }

  if (Object.prototype.toString.call(val) === '[object Object]') {
    out = {} as IObjectAny
    const internalVal = val as IObjectAny
    for (k in internalVal) {
      if (k === '__proto__') {
        Object.defineProperty(out, k, {
          value: cloneDeep(internalVal[k]),
          configurable: true,
          enumerable: true,
          writable: true,
        })
      } else {
        out[k] = (tmp = internalVal[k]) && typeof tmp === 'object' ? cloneDeep(tmp) : tmp
      }
    }
    return out as T
  }

  return val
}

export function mapKeys<T extends IObjectAny>(
  obj: T | undefined,
  fn: (value: T[keyof T], key: string) => string
): IDictionary<T[keyof T]> {
  if (!isPlainObject(obj) || !isFunction(fn)) {
    return {}
  }

  const keys = Object.keys(obj)
  const result: IObjectAny = {}

  keys.map((key) => {
    const value = obj[key]
    const newKey = fn(value, key)
    result[newKey] = value
  })

  return result
}

export function pick<T extends IObjectAny, U extends keyof T>(
  obj: T | undefined | null,
  ...keys: U[]
): Pick<T, U> {
  const result = {} as Pick<T, U>

  if (!isPlainObject(obj)) {
    return result
  }

  keys.map((key) => {
    if (hasOwnProperty(obj, key)) {
      result[key] = obj[key]
    }
  })

  return result
}

export function omit<T extends IObjectAny, U extends keyof T>(
  obj: T | undefined,
  ...keys: U[]
): Omit<T, U> {
  if (!isPlainObject(obj)) {
    return {} as Omit<T, U>
  }

  const result = { ...obj }

  keys.map((key) => {
    if (hasOwnProperty(obj, key)) {
      delete result[key]
    }
  })

  return result
}

// ref https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_dropRight
export function dropRight<T>(arr: Array<T> | undefined, n = 1): T[] {
  if (!isArray(arr)) {
    return []
  }

  return arr.slice(0, n > 0 ? n * -1 : arr.length)
}

/**
 * ref https://lodash.com/docs/4.17.15#find
 * e.g. find(users, function(o) { return o.age < 40 })
 */
export function find<T extends IObjectAny>(
  arr: ArrayLike<T> | undefined,
  predicate: (item: T) => boolean,
  fromIndex?: number
): T | undefined

/**
 * ref https://lodash.com/docs/4.17.15#find
 * e.g. find(users, { 'age': 1, 'active': true })
 */
export function find<T extends IObjectAny>(
  arr: ArrayLike<T> | undefined,
  predicate: Partial<T>,
  fromIndex?: number
): T | undefined

export function find<T extends IObjectAny>(
  arr: ArrayLike<T> | undefined,
  predicate: Partial<T> | ((item: T) => boolean),
  fromIndex = 0
): T | undefined {
  if (!isArray(arr)) {
    return undefined
  }

  const length = arr.length

  for (let i = fromIndex; i < length; i++) {
    const item = arr[i]
    if (isFunction(predicate)) {
      if (predicate(item)) {
        return item
      }
    } else if (isPlainObject(predicate)) {
      if (isMatch(item, predicate)) {
        return item
      }
    }
  }
}

export function isMatch(obj: IObjectAny | undefined, source: IObjectAny) {
  if (!isPlainObject(obj)) {
    return true
  }

  const keys = Object.keys(source)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (!hasOwnProperty(obj, key) || source[key] !== obj[key]) {
      return false
    }
  }

  return true
}

export function get<T extends any = any>(
  obj: IObjectAny | undefined,
  path: Array<string | number>
): T | undefined {
  if (!isPlainObject(obj) || !isArray(path)) {
    return undefined
  }

  let value = obj

  for (let i = 0; i < path.length; i++) {
    const filed = path[i]
    if (value) {
      value = value[filed]
    } else {
      return undefined
    }
  }

  return value as T
}

/**
 * fork from https://github.com/lodash/lodash/blob/4.17.21-es/_isIndex.js
 */
const regIsUint = /^(?:0|[1-9]\d*)$/
function isIndex(value: string | number) {
  return isNumber(value) || regIsUint.test(value)
}

/**
 * fork from https://github.com/lodash/lodash/blob/4.17.21-es/_baseSet.js
 */
export function set<T extends IObjectAny>(
  obj: IObjectAny,
  path: Array<string | number>,
  value: any
): T {
  if (!isPlainObject(obj)) {
    return obj
  }

  const length = path.length
  const lastIndex = length - 1

  let index = -1
  let nested = obj

  while (nested !== null && ++index < length) {
    const key = path[index]
    let newValue = value

    if (index !== lastIndex) {
      const objValue = nested[key]
      newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {}
    }
    nested[key] = newValue
    nested = nested[key]
  }

  return obj as T
}

export function debounce<T extends (...args: any) => any>(func: T, wait: number) {
  if (!isFunction(func)) {
    assert.fail('Expected a function')
  }

  let timeout: ReturnType<typeof setTimeout>

  function debounced(this: unknown, ...args: unknown[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      return func.apply(this, args)
    }, wait)
  }

  debounced.cancel = () => {
    clearTimeout(timeout)
  }

  return debounced
}

export function toLower(str?: string) {
  if (isString(str)) {
    return str.toLowerCase()
  }
  return ''
}
