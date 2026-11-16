import { useContext } from 'react'

import RootValueContext from '../RootValueContext'

export default function useRootValue() {
  const rootValueCtx = useContext(RootValueContext)
  return rootValueCtx
}
