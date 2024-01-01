import type { IObjectAny, IPath } from '../typings/common'
import { dropRight, get } from '../utils/tinyLodash'
import { isBoolean, isString } from './checking'
import logger from './logger'

// 执行 hidden、required、disabled 语句
export function performStatement({
  statement,
  parentValue = {},
  rootValue = {},
  userCtx = {},
}: {
  statement: boolean | string | undefined
  parentValue: IObjectAny | undefined
  rootValue: IObjectAny | undefined
  userCtx: IObjectAny | undefined
}): boolean {
  if (isBoolean(statement)) {
    return statement
  }

  if (isString(statement)) {
    try {
      const fn = new Function('$', '$root', '$userCtx', `return ${statement}`)
      return !!fn(parentValue, rootValue, userCtx)
    } catch (e) {
      logger.warn(e)
    }
  }

  return false
}

export function performStatementWithPath({
  statement,
  path,
  rootValue,
  userCtx,
}: {
  statement: boolean | string | undefined
  path: IPath
  rootValue: IObjectAny
  userCtx: IObjectAny | undefined
}): boolean {
  const parentPath = dropRight(path)
  return performStatement({
    statement,
    parentValue: parentPath.length ? get(rootValue, parentPath) : rootValue,
    rootValue,
    userCtx,
  })
}
