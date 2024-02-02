import type { IOpenComponentParams } from '@schema-render/core-react'
import { useMemoizedFn } from '@schema-render/core-react'
import { Checkbox as AntCheckbox } from 'antd'
import React from 'react'

import Description from '../components/Description'
import { getCheckedOptions, getOptionsLabels } from '../utils'

type IValue = Array<string | number | boolean>
type IProps = React.FC<IOpenComponentParams<IValue>>

/**
 * 编辑与禁用态组件
 */
const Checkbox: IProps = ({ schema, disabled, value, onChange }) => {
  const handleChange = useMemoizedFn((checkedValue: IValue) => {
    onChange(checkedValue, {
      extra: {
        checkedOptions: getCheckedOptions(schema.renderOptions?.options, checkedValue),
      },
    })
  })

  return (
    <AntCheckbox.Group
      {...schema.renderOptions}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

/**
 * 只读态组件
 */
const ReadonlyCheckbox: IProps = ({ schema, value, locale }) => {
  const labels = getOptionsLabels(schema.renderOptions?.options, value)
  return <Description>{labels.join(locale.FormRender.comma)}</Description>
}

export default {
  component: Checkbox,
  readonlyComponent: ReadonlyCheckbox,
}
