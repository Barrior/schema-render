import type { DependencyList } from 'react'
import { useEffect } from 'react'

import type { IMaybePromise } from '../typings/common'
import useLatest from './useLatest'

const useAsyncEffect = (
  fn: () => IMaybePromise<void | Function>,
  deps?: DependencyList
) => {
  const fnRef = useLatest(fn)

  useEffect(() => {
    fnRef.current()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useAsyncEffect
