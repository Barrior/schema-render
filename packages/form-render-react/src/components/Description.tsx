import type { FC, ReactNode } from 'react'

import useFormRenderContext from '../hooks/useFormRenderContext'
import { isEmpty } from '../utils'

const Description: FC<{ children: ReactNode }> = ({ children }) => {
  const { readonlyPlaceholder } = useFormRenderContext()
  return <>{isEmpty(children) ? readonlyPlaceholder : children}</>
}

export default Description
