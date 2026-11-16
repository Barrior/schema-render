import { getRootPath, internPath } from '@core-react/utils/path'

describe('path 缓存', () => {
  test('根 path 始终是同一个引用', () => {
    expect(getRootPath()).toBe(getRootPath())
    expect(getRootPath()).toEqual([])
  })

  test('同一父 path 的同一字段返回同一个数组', () => {
    const root = getRootPath()
    const name1 = internPath(root, 'name')
    const name2 = internPath(root, 'name')

    expect(name1).toBe(name2)
    expect(name1).toEqual(['name'])
  })

  test('不同字段返回不同数组', () => {
    const root = getRootPath()
    const name = internPath(root, 'name')
    const age = internPath(root, 'age')

    expect(name).not.toBe(age)
    expect(age).toEqual(['age'])
  })

  test('嵌套路径逐层复用，且父 path 不同则子 path 也不同', () => {
    const left = internPath(internPath(getRootPath(), 'nested'), 'left')

    expect(left).toBe(internPath(internPath(getRootPath(), 'nested'), 'left'))
    expect(left).toEqual(['nested', 'left'])
    expect(internPath(internPath(getRootPath(), 'other'), 'left')).not.toBe(left)
  })

  test('返回的数组已冻结，避免下游原地修改污染缓存', () => {
    const path = internPath(getRootPath(), 'name')

    expect(Object.isFrozen(path)).toBe(true)
  })
})
