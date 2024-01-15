import assert from '@core-react/utils/assert'

describe('assert.truthy 验证', () => {
  test('truthy 值应该抛出错误', () => {
    expect(() => assert.truthy(true)).toThrow()
    expect(() => assert.truthy(1)).toThrow()
    expect(() => assert.truthy('ok')).toThrow()
    expect(() => assert.truthy({})).toThrow()
  })

  test('非 truthy 值不会抛出错误，如空字符串等', () => {
    expect(() => {
      assert.truthy('')
      assert.truthy(0)
      assert.truthy(false)
      assert.truthy(null)
      assert.truthy(undefined)
    }).not.toThrow()
  })
})

describe('assert.falsy 验证', () => {
  test('falsy 值应该抛出错误，如空字符串等', () => {
    expect(() => assert.falsy('')).toThrow()
    expect(() => assert.falsy(0)).toThrow()
    expect(() => assert.falsy(false)).toThrow()
    expect(() => assert.falsy(null)).toThrow()
    expect(() => assert.falsy(undefined)).toThrow()
  })

  test('非 falsy 值不会抛出错误', () => {
    expect(() => {
      assert.falsy('ok')
      assert.falsy(1)
      assert.falsy(true)
      assert.falsy({})
      assert.falsy(Date)
    }).not.toThrow()
  })
})

describe('assert.fail 验证', () => {
  test('错误消息应该一致', () => {
    const errorMsg = '错误了'
    expect(() => assert.fail(errorMsg)).toThrow(`[AssertionError]: ${errorMsg}`)
  })

  test('兜底错误消息应该一致', () => {
    expect(() => assert.fail()).toThrow('[AssertionError]: Failed')
  })
})
