import { useEffect } from 'react'

const useMounted = (fn: () => void) => {
  useEffect(
    () => {
      fn()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}

export default useMounted
