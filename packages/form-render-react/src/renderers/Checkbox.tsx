import type { IOpenComponentParams } from '@schema-render/core-react'
import { Checkbox as AntCheckbox } from 'antd'
import React from 'react'

type IValue = Array<string | number | boolean>

const Checkbox: React.FC<IOpenComponentParams<IValue>> = ({
  schema,
  disabled,
  value,
  onChange,
}) => {
  return (
    <AntCheckbox.Group
      {...schema.renderOptions}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

export default {
  component: Checkbox,
}
