import { useEffect, useRef } from 'react'

/**
 * fork from https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useUnmountedRef/index.tsx
 */
const useUnmountedRef = () => {
  const unmountedRef = useRef(false)

  useEffect(() => {
    unmountedRef.current = false
    return () => {
      unmountedRef.current = true
    }
  }, [])

  return unmountedRef
}

export default useUnmountedRef
