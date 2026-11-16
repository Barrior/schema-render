import type { Expression } from 'expr-eval-fork'
import { Parser } from 'expr-eval-fork'

import type { IObjectAny, IPath } from '../typings/common'
import { dropRight, get } from '../utils/tinyLodash'
import { isBoolean, isString } from './checking'
import logger from './logger'

export type IStatementMode = 'legacy' | 'safe'

type IStatementFunction = (
  parentValue: IObjectAny,
  rootValue: IObjectAny,
  userCtx: IObjectAny
) => unknown

// expr-eval 只接受普通标识符，且 and/or/not 才是逻辑运算符
const SAFE_PARENT = '_parent'
const SAFE_ROOT = '_root'
const SAFE_USER_CTX = '_userCtx'

const legacyCache = new Map<string, IStatementFunction>()
const safeCache = new Map<string, Expression>()

const MEMBER_CALL_RE = /^\.\s*[A-Za-z_$][A-Za-z0-9_$]*\s*\(/

let statementMode: IStatementMode = 'legacy'

export function setStatementMode(mode: IStatementMode): void {
  statementMode = mode
}

export function clearStatementCache(): void {
  legacyCache.clear()
  safeCache.clear()
}

function compileLegacy(statement: string): IStatementFunction {
  const cached = legacyCache.get(statement)
  if (cached) {
    return cached
  }

  const fn = new Function(
    '$',
    '$root',
    '$userCtx',
    `return ${statement}`
  ) as IStatementFunction
  legacyCache.set(statement, fn)
  return fn
}

function isIdentifierChar(char: string | undefined): boolean {
  return !!char && /[A-Za-z0-9_$]/.test(char)
}

function skipString(statement: string, start: number): number {
  const quote = statement[start]
  let index = start + 1

  while (index < statement.length) {
    if (statement[index] === '\\') {
      index += 2
    } else if (statement[index] === quote) {
      return index + 1
    } else {
      index += 1
    }
  }

  return statement.length
}

// 把 JS 写法改写成 expr-eval 支持的等价写法，字符串字面量原样保留
function normalizeStatement(statement: string): {
  value: string
  hasMemberCall: boolean
} {
  let normalized = ''
  let hasMemberCall = false
  let index = 0

  while (index < statement.length) {
    const char = statement[index]

    if (char === '.' && MEMBER_CALL_RE.test(statement.slice(index))) {
      hasMemberCall = true
    }

    if (char === '"' || char === "'") {
      const end = skipString(statement, index)
      normalized += statement.slice(index, end)
      index = end
      continue
    }

    if (
      statement.startsWith('$userCtx', index) &&
      !isIdentifierChar(statement[index + 8])
    ) {
      normalized += SAFE_USER_CTX
      index += 8
      continue
    }

    if (statement.startsWith('$root', index) && !isIdentifierChar(statement[index + 5])) {
      normalized += SAFE_ROOT
      index += 5
      continue
    }

    if (char === '$') {
      normalized += SAFE_PARENT
      index += 1
      continue
    }

    if (statement.startsWith('!==', index)) {
      normalized += '!='
      index += 3
      continue
    }

    if (statement.startsWith('===', index)) {
      normalized += '=='
      index += 3
      continue
    }

    if (statement.startsWith('!=', index)) {
      normalized += '!='
      index += 2
      continue
    }

    if (statement.startsWith('&&', index)) {
      normalized += ' and '
      index += 2
      continue
    }

    if (statement.startsWith('||', index)) {
      normalized += ' or '
      index += 2
      continue
    }

    if (char === '!') {
      normalized += ' not '
      index += 1
      continue
    }

    normalized += char
    index += 1
  }

  return { value: normalized, hasMemberCall }
}

function compileSafe(statement: string): Expression {
  const cached = safeCache.get(statement)
  if (cached) {
    return cached
  }

  const { value, hasMemberCall } = normalizeStatement(statement)

  if (hasMemberCall) {
    throw new Error('不支持成员函数调用')
  }

  const expression = Parser.parse(value)
  safeCache.set(statement, expression)
  return expression
}

// 执行 hidden、required、disabled 语句
export function performStatement({
  statement,
  parentValue = {},
  rootValue = {},
  userCtx = {},
  mode = statementMode,
}: {
  statement: boolean | string | undefined
  parentValue: IObjectAny | undefined
  rootValue: IObjectAny | undefined
  userCtx: IObjectAny | undefined
  mode?: IStatementMode
}): boolean {
  if (isBoolean(statement)) {
    return statement
  }

  if (!isString(statement)) {
    return false
  }

  if (mode === 'safe') {
    let expression: Expression

    try {
      expression = compileSafe(statement)
    } catch (e) {
      // safe 模式下语法不支持属于配置错误，直接抛出让调用方看到
      throw new Error(
        `[schema-render] 表达式 "${statement}" 在 safe 模式下解析失败：${
          (e as Error).message
        }`
      )
    }

    try {
      return !!expression.evaluate({
        [SAFE_PARENT]: parentValue,
        [SAFE_ROOT]: rootValue,
        [SAFE_USER_CTX]: userCtx,
      })
    } catch (e) {
      logger.warn(e)
      return false
    }
  }

  try {
    const fn = compileLegacy(statement)
    return !!fn(parentValue, rootValue, userCtx)
  } catch (e) {
    logger.warn(e)
  }

  return false
}

export function performStatementWithPath({
  statement,
  path,
  rootValue,
  userCtx,
  mode,
}: {
  statement: boolean | string | undefined
  path: IPath
  rootValue: IObjectAny
  userCtx: IObjectAny | undefined
  mode?: IStatementMode
}): boolean {
  const parentPath = dropRight(path)
  return performStatement({
    statement,
    parentValue: parentPath.length ? get(rootValue, parentPath) : rootValue,
    rootValue,
    userCtx,
    mode,
  })
}
