import useUnmount from '@core-react/hooks/useUnmount'
import { renderHook } from '@testing-library/react'

describe('useUnmount 验证', () => {
  test('useUnmount should work', () => {
    const fn = jest.fn()
    const hook = renderHook(() => useUnmount(fn))
    expect(fn).toBeCalledTimes(0)
    hook.rerender()
    expect(fn).toBeCalledTimes(0)
    hook.unmount()
    expect(fn).toBeCalledTimes(1)
  })
})
