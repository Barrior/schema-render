import { getStatementDeps } from '@core-react/utils/deps'

describe('getStatementDeps', () => {
  test('$root 的取值路径', () => {
    expect(getStatementDeps(['$root.age === "18"'], [])).toEqual([['age']])
    expect(getStatementDeps(['$root.form.status === 2'], [])).toEqual([
      ['form', 'status'],
    ])
    expect(getStatementDeps(['$root["x y"] === 1'], [])).toEqual([['x y']])
    expect(getStatementDeps(['$root.list[0].id === 1'], [])).toEqual([['list', 0, 'id']])
  })

  test('$ 是当前字段的父对象，依赖要拼上父路径', () => {
    expect(getStatementDeps(['$.open === true'], ['order'])).toEqual([['order', 'open']])
    expect(getStatementDeps(['$.a && $.b'], ['nested'])).toEqual([
      ['nested', 'a'],
      ['nested', 'b'],
    ])
  })

  test('$userCtx 不是数据依赖', () => {
    expect(getStatementDeps(['$userCtx.role === "admin"'], [])).toEqual([])
  })

  test('字符串字面量里的 $root 不算依赖', () => {
    expect(getStatementDeps(['$.type === "$root.age"'], ['form'])).toEqual([
      ['form', 'type'],
    ])
  })

  test('多条语句合并去重，布尔语句忽略', () => {
    expect(
      getStatementDeps(
        ['$root.age === 1', true, '$root.age > 0', undefined, '$root.name'],
        []
      )
    ).toEqual([['age'], ['name']])
  })

  test('裸 $root / 裸 $ 无法静态确定，返回 null', () => {
    expect(getStatementDeps(['$root'], [])).toBeNull()
    expect(getStatementDeps(['$ ? true : false'], ['form'])).toBeNull()
  })

  test('没有表达式时返回空数组', () => {
    expect(getStatementDeps([true, undefined], [])).toEqual([])
  })
})
