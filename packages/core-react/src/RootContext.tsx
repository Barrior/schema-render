import { createContext } from 'react'

import type { IRootContext } from './typings/rootContext'

const RootContext = createContext<Readonly<IRootContext>>({} as unknown as IRootContext)

export default RootContext
