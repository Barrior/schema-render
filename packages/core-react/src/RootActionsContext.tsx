import { createContext } from 'react'

import type { IRootActionsContext } from './typings/rootContext'

const RootActionsContext = createContext<Readonly<IRootActionsContext>>(
  {} as unknown as IRootActionsContext
)

export default RootActionsContext
