import { createContext } from 'react'

import type { IRootValueContext } from './typings/rootContext'

const RootValueContext = createContext<Readonly<IRootValueContext>>(
  {} as unknown as IRootValueContext
)

export default RootValueContext
