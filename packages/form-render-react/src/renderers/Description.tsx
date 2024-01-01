import type { IOpenComponentParams } from '@schema-render/core-react'
import React from 'react'

const Description: React.FC<IOpenComponentParams<string | number>> = ({ value }) => {
  return <>{value}</>
}

export default {
  component: Description,
}
