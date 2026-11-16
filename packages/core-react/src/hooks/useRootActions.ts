import { useContext } from 'react'

import RootActionsContext from '../RootActionsContext'

export default function useRootActions() {
  const rootActionsCtx = useContext(RootActionsContext)
  return rootActionsCtx
}
