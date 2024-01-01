import { useRef } from 'react'

/**
 * fork from https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useLatest/index.ts
 */
function useLatest<T>(value: T) {
  const ref = useRef(value)
  ref.current = value

  return ref
}

export default useLatest
