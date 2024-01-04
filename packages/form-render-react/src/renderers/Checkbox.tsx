import type { IOpenComponentParams } from '@schema-render/core-react'
import { Checkbox as AntCheckbox } from 'antd'
import React from 'react'

import Description from '../components/Description'
import { getOptionsLabels } from '../utils'

type IValue = Array<string | number | boolean>

const Checkbox: React.FC<IOpenComponentParams<IValue>> = ({
  schema,
  disabled,
  readonly,
  value,
  onChange,
  locale,
}) => {
  // 只读态
  if (readonly) {
    const labels = getOptionsLabels(schema.renderOptions?.options, value)
    return <Description>{labels.join(locale.FormRender.comma)}</Description>
  }

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
