import type { IDeepReadonly, IObjectAny } from '../typings/common'
import { isString } from './checking'
import type { IClassNamesParams } from './classnames'
import classNames from './classnames'
import logger from './logger'

// ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#examples
export function deepFreeze<T extends IObjectAny>(object: T): IDeepReadonly<T> {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object)

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = object[name]

    if (value && typeof value === 'object') {
      deepFreeze(value)
    }
  }

  return Object.freeze(object)
}

// 生成 Unique ID
export function generateUID() {
  return `${Date.now()}${Math.random().toString().substring(2, 5)}`.replace(
    /^(\d{4})(\d{4})(\d{4})(\d{4})/g,
    '$1-$2-$3-$4'
  )
}

/**
 * 字符串转换成 hash 码
 * fork from https://github.com/darkskyapp/string-hash
 */
export function hashCode(str: string) {
  let hash = 5381
  let i = str.length

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i)
  }

  // JavaScript does bitwise operations (like XOR, above) on 32-bit signed
  // integers. Since we want the results to be always positive, convert the
  // signed int to an unsigned by doing an unsigned bitshift.
  return hash >>> 0
}

/**
 * 通过正则字符串创建正则表达式对象
 */
export function createRegExpByString(regexp: any): RegExp | null {
  if (!isString(regexp)) {
    return null
  }

  try {
    return new RegExp(regexp)
  } catch (e) {
    logger.warn(e)
  }

  return null
}

/**
 * 编译模板字符串，支持 ${} 语法的模板
 */
export function templateCompiled(tpl?: string, data: IObjectAny = {}) {
  if (!tpl) {
    return ''
  }
  return tpl.replace(/\$\{((\s|.)+?)?\}/g, function (...args) {
    const field = args[1]?.trim()
    if (!field) {
      return ''
    }
    const replacement = data[field]
    return replacement ?? ''
  })
}

/**
 * 创建带前缀的类名
 * @param prefix 类名前缀
 * @param args classNames 库参数
 * @returns 带前缀的类名
 */
export function classNamesWithPrefix(prefix: string, ...args: IClassNamesParams): string {
  if (!args.length) {
    return ''
  }

  const classString = classNames(...args).trim()
  if (!classString) {
    return ''
  }

  const result = classString.split(' ').map((name) => `${prefix}-${name}`)
  return result.join(' ')
}

export function hasOwnProperty(obj: object, property: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(obj, property)
}

export function sleep(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
