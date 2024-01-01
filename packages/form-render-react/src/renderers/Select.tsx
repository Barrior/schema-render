import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Select as AntSelect } from 'antd'
import React, { useMemo } from 'react'

const Select: React.FC<IOpenComponentParams<string>> = ({
  schema,
  disabled,
  value,
  onChange,
  locale,
  validator,
}) => {
  const placeholder = useMemo(
    () =>
      utils.templateCompiled(locale.FormRender.placeholderSelect, {
        title: schema.title,
      }),
    [schema.title, locale.FormRender.placeholderSelect]
  )

  return (
    <AntSelect
      allowClear
      style={{ width: '100%' }}
      placeholder={placeholder}
      {...schema.renderOptions}
      status={validator.status as never}
      mode={undefined}
      value={value ?? null}
      onChange={(val) => onChange(val)}
      disabled={disabled}
    />
  )
}

export default {
  component: Select,
}
