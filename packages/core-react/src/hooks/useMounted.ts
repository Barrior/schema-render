import type { EffectCallback } from 'react'
import { useEffect } from 'react'

const useMounted = (effect: EffectCallback) => {
  useEffect(
    () => effect(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}

export default useMounted
