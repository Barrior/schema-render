import { createContext } from 'react'

import type { IFormRenderContext } from './typings'

const FormRenderContext = createContext<Readonly<IFormRenderContext>>(
  {} as unknown as IFormRenderContext
)

export default FormRenderContext
