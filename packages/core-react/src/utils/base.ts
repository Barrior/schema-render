import type { IObjectAny } from '../typings/common'
import { isString } from './checking'
import type { IClassNamesParams } from './classnames'
import classNames from './classnames'
import logger from './logger'

// 生成 Unique ID
export function generateUID() {
  return `${Date.now()}${Math.random().toString().substring(2, 5)}`.replace(
    /^(\d{4})(\d{4})(\d{4})(\d{4})/g,
    '$1-$2-$3-$4'
  )
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
