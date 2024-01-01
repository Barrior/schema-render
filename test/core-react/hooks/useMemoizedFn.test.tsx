/**
 * fork from https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useMemoizedFn/__tests__/index.test.ts
 */
import useMemoizedFn from '@core-react/hooks/useMemoizedFn'
import type { RenderHookResult } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react'
import { useState } from 'react'

const useCount = () => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount((c) => c + 1)
  }

  const memoizedFn = useMemoizedFn(() => count)

  return { addCount, memoizedFn }
}

let hook!: RenderHookResult<ReturnType<typeof useCount>, any>

describe('useMemoizedFn', () => {
  it('useMemoizedFn should work', () => {
    act(() => {
      hook = renderHook(() => useCount())
    })
    const currentFn = hook.result.current.memoizedFn
    expect(hook.result.current.memoizedFn()).toBe(0)

    act(() => {
      hook.result.current.addCount()
    })

    expect(currentFn).toEqual(hook.result.current.memoizedFn)
    expect(hook.result.current.memoizedFn()).toBe(1)
  })
})
