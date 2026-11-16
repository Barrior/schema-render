import useShallowStable, { shallowEqual } from '@core-react/hooks/useShallowStable'
import { renderHook } from '@testing-library/react'

describe('shallowEqual', () => {
  test('引用相同直接相等', () => {
    const value = { a: 1 }

    expect(shallowEqual(value, value)).toBe(true)
  })

  test('键值浅相等即相等，引用不同不影响', () => {
    expect(shallowEqual({ a: 1, b: 'x' }, { a: 1, b: 'x' })).toBe(true)
  })

  test('值或键不同则不相等', () => {
    expect(shallowEqual({ a: 1 }, { a: 2 })).toBe(false)
    expect(shallowEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
  })

  test('数组与原始值按引用比较', () => {
    expect(shallowEqual([1], [1])).toBe(false)
    expect(shallowEqual(null, null)).toBe(true)
    expect(shallowEqual(1, 1)).toBe(true)
  })
})

describe('useShallowStable', () => {
  test('内容浅相等时复用上一次的引用', () => {
    const { result, rerender } = renderHook(
      ({ value }: { value: Record<string, any> }) => useShallowStable(value),
      { initialProps: { value: { a: 1, b: 2 } } }
    )

    const first = result.current
    rerender({ value: { a: 1, b: 2 } })

    expect(result.current).toBe(first)
  })

  test('内容变化时返回新引用', () => {
    const { result, rerender } = renderHook(
      ({ value }: { value: Record<string, any> }) => useShallowStable(value),
      { initialProps: { value: { a: 1 } } }
    )

    const first = result.current
    rerender({ value: { a: 2 } })

    expect(result.current).not.toBe(first)
    expect(result.current).toEqual({ a: 2 })
  })
})
