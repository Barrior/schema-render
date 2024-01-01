/**
 * fork from https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useDebounceFn/__tests__/index.test.ts
 */
import useDebounceFn from '@core-react/hooks/useDebounceFn'
import sleep from '@test/@helpers/sleep'
import type { RenderHookResult } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react'

interface ISetUpParams {
  fn: (...arg: any[]) => any
  wait: number
}

let count = 0
const debounceFn = (gap: number) => {
  count += gap
}

const setUp = ({ fn, wait }: ISetUpParams) =>
  renderHook(() => useDebounceFn(fn, { wait }))

let hook: RenderHookResult<ReturnType<typeof useDebounceFn>, null>

describe('useDebounceFn 验证', () => {
  test('run, cancel and flush should work', async () => {
    act(() => {
      hook = setUp({
        fn: debounceFn,
        wait: 200,
      })
    })

    await act(async () => {
      hook.result.current.run(2)
      hook.result.current.run(2)
      hook.result.current.run(2)
      hook.result.current.run(2)
      expect(count).toBe(0)
      await sleep(300)
      expect(count).toBe(2)

      hook.result.current.run(4)
      expect(count).toBe(2)
      await sleep(300)
      expect(count).toBe(6)

      hook.result.current.run(4)
      expect(count).toBe(6)
      hook.result.current.cancel()
      expect(count).toBe(6)
      await sleep(300)
      expect(count).toBe(6)
    })
  })
})
