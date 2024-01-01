import { memo } from 'react'

import Core from './Core'

const MemoCore = memo(Core, (prevProps, nextProps) => {
  const propKeys = Object.keys(nextProps) as Array<keyof typeof nextProps>
  let shouldUpdate = false

  for (const key of propKeys) {
    if (typeof nextProps[key] !== 'function' && nextProps[key] !== prevProps[key]) {
      shouldUpdate = true
      break
    }
  }

  // Don't re-render
  if (!shouldUpdate) {
    return true
  }

  return false
})

export default MemoCore
