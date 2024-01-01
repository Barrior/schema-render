import useUnmountedRef from '@core-react/hooks/useUnmountedRef'
import { renderHook } from '@testing-library/react'

/**
 * fork from https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useUnmountedRef/__tests__/index.test.ts
 */
describe('useUnmountedRef', () => {
  it('should work', async () => {
    const hook = renderHook(() => useUnmountedRef())
    expect(hook.result.current.current).toBe(false)
    hook.rerender()
    expect(hook.result.current.current).toBe(false)
    hook.unmount()
    expect(hook.result.current.current).toBe(true)
  })
})
