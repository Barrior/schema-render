import logger from '@core-react/utils/logger'
import {
  clearStatementCache,
  performStatement,
  performStatementWithPath,
  setStatementMode,
} from '@core-react/utils/statement'
import { Parser } from 'expr-eval-fork'

const rootValue = { form: { status: 2 } }
const userCtx = { role: 'admin', step: 1 }

describe('performStatement 验证', () => {
  beforeEach(() => {
    clearStatementCache()
    setStatementMode('legacy')
  })

  test('boolean 语句直接返回', () => {
    expect(
      performStatement({ statement: true, parentValue: {}, rootValue: {}, userCtx: {} })
    ).toBe(true)
    expect(
      performStatement({ statement: false, parentValue: {}, rootValue: {}, userCtx: {} })
    ).toBe(false)
  })

  test('表达式可以通过 $ 访问父对象', () => {
    expect(
      performStatement({
        statement: '$.type === "custom"',
        parentValue: { type: 'custom' },
        rootValue: { type: 'custom' },
        userCtx: {},
      })
    ).toBe(true)
  })

  test('表达式可以通过 $root 访问全量数据', () => {
    expect(
      performStatement({
        statement: '$root.form.status === 2',
        parentValue: {},
        rootValue: { form: { status: 2 } },
        userCtx: {},
      })
    ).toBe(true)
  })

  test('表达式可以通过 $userCtx 访问上下文', () => {
    expect(
      performStatement({
        statement: '$userCtx.role === "admin"',
        parentValue: {},
        rootValue: {},
        userCtx: { role: 'admin' },
      })
    ).toBe(true)
  })

  test('表达式异常时返回 false，并输出 warn', () => {
    const warn = jest.spyOn(logger, 'warn').mockImplementation(() => undefined)

    expect(
      performStatement({
        statement: 'a +',
        parentValue: {},
        rootValue: {},
        userCtx: {},
      })
    ).toBe(false)
    expect(warn).toHaveBeenCalledTimes(1)

    warn.mockRestore()
  })

  test('performStatementWithPath 会用父路径取值作为 $', () => {
    expect(
      performStatementWithPath({
        statement: '$.price > 0',
        path: ['order', 'amount'],
        rootValue: { order: { amount: 1, price: 10 } },
        userCtx: {},
      })
    ).toBe(true)
  })

  test('同一个表达式只会编译一次', () => {
    const OriginalFunction = global.Function
    let compileCount = 0
    global.Function = function (...args: any[]) {
      compileCount++
      return new (OriginalFunction as any)(...args)
    } as any

    try {
      performStatement({
        statement: '$root.a === 1',
        parentValue: {},
        rootValue: { a: 1 },
        userCtx: {},
      })
      performStatement({
        statement: '$root.a === 1',
        parentValue: {},
        rootValue: { a: 1 },
        userCtx: {},
      })
      performStatement({
        statement: '$root.a === 2',
        parentValue: {},
        rootValue: { a: 2 },
        userCtx: {},
      })
    } finally {
      global.Function = OriginalFunction
    }

    expect(compileCount).toBe(2)
  })
})

describe('safe 模式', () => {
  beforeEach(() => {
    clearStatementCache()
    setStatementMode('legacy')
  })

  test('$ / $root / $userCtx 与 === 语义保持不变', () => {
    expect(
      performStatement({
        statement: '$.type === "custom"',
        parentValue: { type: 'custom' },
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toBe(true)

    expect(
      performStatement({
        statement: '$root.form.status === 2',
        parentValue: {},
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toBe(true)

    expect(
      performStatement({
        statement: '$userCtx.role === "admin"',
        parentValue: {},
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toBe(true)
  })

  test('支持 !==、&&、||、!', () => {
    expect(
      performStatement({
        statement: '$userCtx.step !== 0',
        parentValue: {},
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toBe(true)

    expect(
      performStatement({
        statement: '$.open && $userCtx.step === 1',
        parentValue: { open: true },
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toBe(true)

    expect(
      performStatement({
        statement: '$.open || $.expanded',
        parentValue: { open: false, expanded: true },
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toBe(true)

    expect(
      performStatement({
        statement: '!$.open',
        parentValue: { open: false },
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toBe(true)
  })

  test('支持三元运算符（含嵌套）', () => {
    const safe = (statement: string, parentValue: Record<string, any>) =>
      performStatement({
        statement,
        parentValue,
        rootValue,
        userCtx,
        mode: 'safe',
      })

    expect(safe('$.n === 0 ? true : false', { n: 0 })).toBe(true)
    expect(safe('$.n === 0 ? true : false', { n: 1 })).toBe(false)
    expect(safe('$.n === 0 ? true : $.open ? true : false', { n: 1, open: true })).toBe(
      true
    )
    expect(safe('$.type === "custom" ? "是" : "否"', { type: 'custom' })).toBe(true)
  })

  test('字符串字面量里的 $ 与 === 不被改写', () => {
    expect(
      performStatement({
        statement: '$.type === "$root === $userCtx"',
        parentValue: { type: '$root === $userCtx' },
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toBe(true)
  })

  test('属性访问是支持的，只有成员函数调用被拦', () => {
    const safe = (statement: string, root: Record<string, any>) =>
      performStatement({
        statement,
        parentValue: {},
        rootValue: root,
        userCtx,
        mode: 'safe',
      })

    expect(safe("$root.bizFoo === '1'", { bizFoo: '1' })).toBe(true)
    expect(safe("$root.bizFoo === '2'", { bizFoo: '1' })).toBe(false)
    expect(safe("$root.notExist === '1'", { bizFoo: '1' })).toBe(false)
    expect(safe("$root.form.bizFoo === '1'", { form: { bizFoo: '1' } })).toBe(true)

    expect(() => safe("$root.bizFoo.toString() === '1'", { bizFoo: '1' })).toThrow(
      /成员函数调用/
    )
  })

  test('不支持的语法显式抛错，而不是静默返回 false', () => {
    expect(() =>
      performStatement({
        statement: '$.name.includes("a")',
        parentValue: { name: 'abc' },
        rootValue,
        userCtx,
        mode: 'safe',
      })
    ).toThrow(/safe 模式下解析失败/)
  })

  test('运行时取值异常仍返回 false，并输出 warn', () => {
    const warn = jest.spyOn(logger, 'warn').mockImplementation(() => undefined)

    expect(
      performStatement({
        statement: '$root.form.status === 2',
        parentValue: {},
        rootValue: {},
        userCtx,
        mode: 'safe',
      })
    ).toBe(false)
    expect(warn).toHaveBeenCalledTimes(1)

    warn.mockRestore()
  })

  test('同一个表达式只会解析一次', () => {
    const parse = jest.spyOn(Parser, 'parse')

    performStatement({
      statement: '$.a === 1',
      parentValue: { a: 1 },
      rootValue,
      userCtx,
      mode: 'safe',
    })
    performStatement({
      statement: '$.a === 1',
      parentValue: { a: 1 },
      rootValue,
      userCtx,
      mode: 'safe',
    })

    expect(parse).toHaveBeenCalledTimes(1)

    parse.mockRestore()
  })

  test('setStatementMode 可以切换默认解释器', () => {
    const params = {
      statement: '$.a and $.b',
      parentValue: { a: true, b: true },
      rootValue,
      userCtx,
    }

    // legacy 下 `and` 是语法错误，静默返回 false
    expect(performStatement(params)).toBe(false)

    setStatementMode('safe')
    expect(performStatement(params)).toBe(true)
  })
})
