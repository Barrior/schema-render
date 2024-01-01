import { useEffect } from 'react'

import useLatest from './useLatest'

/**
 * fork from https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useUnmount/index.ts
 */
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn)

  useEffect(
    () => () => {
      fnRef.current()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}

export default useUnmount
