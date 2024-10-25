import { useContext } from 'react'

import RootContext from '../RootContext'

export default function useRootContext() {
  const rootCtx = useContext(RootContext)
  return rootCtx
}
