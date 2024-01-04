import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Input } from 'antd'
import React, { useMemo } from 'react'

import Description from '../components/Description'

const TextArea: React.FC<IOpenComponentParams<string>> = ({
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
      utils.templateCompiled(locale.FormRender.placeholderInput, {
        title: schema.title,
      }),
    [schema.title, locale.FormRender.placeholderInput]
  )

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value

    /* istanbul ignore else */
    if (val !== value) {
      onChange(val)
    }
  }

  // 只读态
  if (readonly) {
    return <Description>{value}</Description>
  }

  return (
    <Input.TextArea
      rows={3}
      placeholder={placeholder}
      {...schema.renderOptions}
      status={validator.status as never}
      value={value ?? ''}
      onChange={onInputChange}
      disabled={disabled}
    />
  )
}

export default {
  component: TextArea,
}
