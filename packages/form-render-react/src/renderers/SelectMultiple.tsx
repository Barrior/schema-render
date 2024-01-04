import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Select as AntSelect } from 'antd'
import React, { useMemo } from 'react'

import Description from '../components/Description'
import { getOptionsLabels } from '../utils'

const SelectMultiple: React.FC<IOpenComponentParams<string[]>> = ({
  schema,
  disabled,
  readonly,
  value,
  onChange,
  validator,
  locale,
}) => {
  const placeholder = useMemo(
    () =>
      utils.templateCompiled(locale.FormRender.placeholderSelect, {
        title: schema.title,
      }),
    [schema.title, locale.FormRender.placeholderSelect]
  )

  // 只读态
  if (readonly) {
    const labels = getOptionsLabels(schema.renderOptions?.options, value)
    return <Description>{labels.join(locale.FormRender?.comma)}</Description>
  }

  return (
    <AntSelect
      allowClear
      style={{ width: '100%' }}
      placeholder={placeholder}
      {...schema.renderOptions}
      status={validator.status as never}
      mode="multiple"
      value={value}
      onChange={(val) => onChange(val)}
      disabled={disabled}
    />
  )
}

export default {
  component: SelectMultiple,
}
