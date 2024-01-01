/**
 * Fork from https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useDebounceFn/index.ts
 */
import { useMemo } from 'react'

import { debounce } from '../utils/tinyLodash'
import useLatest from './useLatest'
import useUnmount from './useUnmount'

export interface DebounceOptions {
  wait?: number
}

function useDebounceFn<T extends (...args: any[]) => any>(
  fn: T,
  options?: DebounceOptions
) {
  const fnRef = useLatest(fn)
  const wait = options?.wait ?? 1000

  const debounced = useMemo(
    () =>
      debounce((...args) => {
        return fnRef.current(...args)
      }, wait),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useUnmount(() => debounced.cancel())

  return {
    run: debounced,
    cancel: debounced.cancel,
  }
}

export default useDebounceFn
