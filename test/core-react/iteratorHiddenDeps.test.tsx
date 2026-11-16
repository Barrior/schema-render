import * as rendererUtils from '@core-react/utils/renderer'
import * as statementUtils from '@core-react/utils/statement'
import { wrapRootSchema } from '@test/@helpers/schema'
import { fireEvent, render, screen } from '@testing-library/react'

import CompletedCore from './@helpers/CompletedCore'

const HIDDEN_STATEMENT = '$root.flag !== "1"'

const schema = wrapRootSchema({
  flag: {
    title: '标记',
    renderType: 'InputText',
    renderOptions: { 'data-testid': 'tid-flag' },
  },
  extra: {
    title: '额外',
    renderType: 'InputText',
    hidden: HIDDEN_STATEMENT,
    renderOptions: { 'data-testid': 'tid-extra' },
  },
  name: {
    title: '姓名',
    renderType: 'InputText',
    renderOptions: { 'data-testid': 'tid-name' },
  },
})

const nestedSchema = wrapRootSchema({
  flag: {
    title: '标记',
    renderType: 'InputText',
    renderOptions: { 'data-testid': 'tid-flag' },
  },
  name: {
    title: '姓名',
    renderType: 'InputText',
    renderOptions: { 'data-testid': 'tid-name' },
  },
  nested: {
    title: '嵌套',
    renderType: 'Object',
    properties: {
      left: {
        title: '左侧',
        renderType: 'InputText',
        hidden: HIDDEN_STATEMENT,
        renderOptions: { 'data-testid': 'tid-nested-left' },
      },
    },
  },
})

let performStatementSpy: jest.SpyInstance

function countHidden(statement: string) {
  return (performStatementSpy.mock.calls as any[]).filter(
    (call) => call[0]?.statement === statement
  ).length
}

describe('Iterator 按依赖重算 hidden', () => {
  beforeEach(() => {
    performStatementSpy = jest.spyOn(statementUtils, 'performStatement')
  })

  afterEach(() => {
    performStatementSpy.mockRestore()
  })

  test('无关字段变化不重算 hidden，依赖变化才重算并切换显隐', () => {
    render(<CompletedCore schema={schema} />)

    const afterMount = countHidden(HIDDEN_STATEMENT)
    expect(afterMount).toBeGreaterThan(0)
    expect(screen.queryByTestId('tid-extra')).toBeNull()

    fireEvent.change(screen.getByTestId('tid-name'), { target: { value: 'abc' } })
    expect(countHidden(HIDDEN_STATEMENT)).toBe(afterMount)

    fireEvent.change(screen.getByTestId('tid-flag'), { target: { value: '1' } })
    expect(countHidden(HIDDEN_STATEMENT)).toBeGreaterThan(afterMount)
    expect(screen.queryByTestId('tid-extra')).toBeTruthy()
  })

  test('嵌套容器里的 hidden 也只按依赖重算', () => {
    render(<CompletedCore schema={nestedSchema} />)

    const afterMount = countHidden(HIDDEN_STATEMENT)
    expect(afterMount).toBeGreaterThan(0)
    expect(screen.queryByTestId('tid-nested-left')).toBeNull()

    fireEvent.change(screen.getByTestId('tid-name'), { target: { value: 'abc' } })
    expect(countHidden(HIDDEN_STATEMENT)).toBe(afterMount)

    fireEvent.change(screen.getByTestId('tid-flag'), { target: { value: '1' } })
    expect(countHidden(HIDDEN_STATEMENT)).toBeGreaterThan(afterMount)
    expect(screen.queryByTestId('tid-nested-left')).toBeTruthy()
  })

  test('同一层里只有依赖命中的字段才重新求值', () => {
    const multipleSchema = wrapRootSchema({
      a: {
        title: 'a',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-a' },
      },
      b: {
        title: 'b',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-b' },
      },
      f1: { title: 'f1', renderType: 'InputText', hidden: '$root.a !== "x"' },
      f2: { title: 'f2', renderType: 'InputText', hidden: '$root.a === "y"' },
      f3: { title: 'f3', renderType: 'InputText', hidden: '$root.b === "z"' },
    })

    render(<CompletedCore schema={multipleSchema} />)

    const beforeA1 = countHidden('$root.a !== "x"')
    const beforeA2 = countHidden('$root.a === "y"')
    const beforeB = countHidden('$root.b === "z"')

    fireEvent.change(screen.getByTestId('tid-a'), { target: { value: '1' } })

    // a 的两个依赖字段重算，b 的依赖字段复用缓存
    expect(countHidden('$root.a !== "x"')).toBe(beforeA1 + 1)
    expect(countHidden('$root.a === "y"')).toBe(beforeA2 + 1)
    expect(countHidden('$root.b === "z"')).toBe(beforeB)
  })

  test('hidden 依赖变化时，未变化字段的 Distributor 被 memo 跳过', () => {
    const matchSpy = jest.spyOn(rendererUtils, 'matchRenderer')

    const memoTestSchema = wrapRootSchema({
      a: {
        title: 'a',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-a2' },
      },
      b: {
        title: 'b',
        renderType: 'InputText',
        renderOptions: { 'data-testid': 'tid-b2' },
      },
      f1: { title: 'f1', renderType: 'InputText', hidden: '$root.a !== "1"' },
      f2: { title: 'f2', renderType: 'InputText', hidden: '$root.a === "none"' },
      f3: { title: 'f3', renderType: 'InputText', hidden: '$root.b === ""' },
    })

    render(<CompletedCore schema={memoTestSchema} />)

    const afterMount = matchSpy.mock.calls.length
    fireEvent.change(screen.getByTestId('tid-a2'), { target: { value: '1' } })

    // 只有「由隐藏变为可见」的 f1 新挂载了一次 Distributor；
    // a / b / f2 的 props 未变，被 memo 跳过
    expect(matchSpy.mock.calls.length - afterMount).toBe(1)

    matchSpy.mockRestore()
  })
})
