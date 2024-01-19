import type { IOpenComponentParams } from '@schema-render/core-react'
import { Radio as AntRadio } from 'antd'
import React from 'react'

import Description from '../components/Description'
import { getOptionsLabels } from '../utils'

type IProps = React.FC<IOpenComponentParams<string | number>>

/**
 * 编辑与禁用态组件
 */
const Radio: IProps = ({ schema, disabled, value, onChange }) => {
  return (
    <AntRadio.Group
      {...schema.renderOptions}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  )
}

/**
 * 只读态组件
 */
const ReadonlyRadio: IProps = ({ schema, value }) => {
  const labels = getOptionsLabels(schema.renderOptions?.options, [value])
  return <Description>{labels[0]}</Description>
}

export default {
  component: Radio,
  readonlyComponent: ReadonlyRadio,
}
