import useLatest from '@core-react/hooks/useLatest'
import { renderHook } from '@testing-library/react'

const setUp = (val: any) => renderHook((state) => useLatest(state), { initialProps: val })

describe('useLatest 验证', () => {
  test('useLatest with basic variable should work', () => {
    const { result, rerender } = setUp(0)

    rerender(1)
    expect(result.current.current).toBe(1)

    rerender(2)
    expect(result.current.current).toBe(2)

    rerender(3)
    expect(result.current.current).toBe(3)
  })

  test('useLatest with reference variable should work', () => {
    const { result, rerender } = setUp({})

    expect(result.current.current).toEqual({})

    rerender([])
    expect(result.current.current).toEqual([])
  })
})
