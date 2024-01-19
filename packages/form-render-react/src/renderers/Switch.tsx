import type { IOpenComponentParams } from '@schema-render/core-react'
import { Switch as AntSwitch } from 'antd'
import React from 'react'

const Switch: React.FC<IOpenComponentParams<boolean>> = ({
  schema,
  disabled,
  readonly,
  value,
  onChange,
}) => {
  return (
    <AntSwitch
      {...schema.renderOptions}
      checked={value}
      onChange={(val) => onChange(val)}
      // 禁用态、只读态都表现为禁用
      disabled={disabled || readonly}
    />
  )
}

export default {
  component: Switch,
}
