import { createContext } from 'react'

import type { IRootStaticContext } from './typings/rootContext'

const RootContext = createContext<Readonly<IRootStaticContext>>(
  {} as unknown as IRootStaticContext
)

export default RootContext
