import { useContext } from 'react'

import FormRenderContext from '../FormRenderContext'

export default function useFormRenderContext() {
  const formRenderCtx = useContext(FormRenderContext)
  return formRenderCtx
}
