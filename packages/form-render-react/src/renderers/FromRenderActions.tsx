import type { IOpenFormItemParams } from '@schema-render/core-react'
import React from 'react'

import Actions from '../components/Actions'

const FormRenderActions: React.FC<IOpenFormItemParams<never>> = ({ disabled }) => {
  return <Actions disabled={disabled} />
}

export default {
  formItem: FormRenderActions as never,
}
