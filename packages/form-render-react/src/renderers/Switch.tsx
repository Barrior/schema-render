import type { IOpenComponentParams } from '@schema-render/core-react'
import { Switch as AntSwitch } from 'antd'
import React from 'react'

const Switch: React.FC<IOpenComponentParams<boolean>> = ({
  schema,
  disabled,
  value,
  onChange,
}) => {
  return (
    <AntSwitch
      {...schema.renderOptions}
      checked={value}
      onChange={(val) => onChange(val)}
      disabled={disabled}
    />
  )
}

export default {
  component: Switch,
}
