import type { IOpenComponentParams } from '@schema-render/core-react'
import { Checkbox } from 'antd'
import React from 'react'

type IProps = React.FC<IOpenComponentParams<boolean>>

/**
 * 编辑、禁用与只读态组件
 */
const SwitchBox: IProps = ({ schema, disabled, readonly, value, onChange }) => {
  return (
    <Checkbox
      {...schema.renderOptions}
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
      disabled={disabled || readonly}
    >
      {schema.renderOptions?.text}
    </Checkbox>
  )
}

export default {
  component: SwitchBox,
}
