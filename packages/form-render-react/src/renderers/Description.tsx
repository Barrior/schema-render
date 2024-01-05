import type { IOpenComponentParams } from '@schema-render/core-react'
import React from 'react'

import InternalDescription from '../components/Description'

const Description: React.FC<IOpenComponentParams<string | number>> = ({ value }) => {
  return <InternalDescription>{value}</InternalDescription>
}

export default {
  component: Description,
}
