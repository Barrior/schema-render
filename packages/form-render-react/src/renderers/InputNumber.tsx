import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { InputNumber as AntInputNumber } from 'antd'
import React, { useMemo } from 'react'

const InputNumber: React.FC<IOpenComponentParams<number>> = ({
  schema,
  disabled,
  value,
  onChange,
  validator,
  locale,
}) => {
  const placeholder = useMemo(
    () =>
      utils.templateCompiled(locale.FormRender.placeholderInput, {
        title: schema.title,
      }),
    [schema.title, locale.FormRender.placeholderInput]
  )

  return (
    <AntInputNumber
      style={{ width: '100%' }}
      placeholder={placeholder}
      {...schema.renderOptions}
      status={validator.status as never}
      value={value}
      onChange={(val) => onChange(val ?? undefined)}
      disabled={disabled}
    />
  )
}

export default {
  component: InputNumber,
}
