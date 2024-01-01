import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Input } from 'antd'
import React, { useMemo } from 'react'

const Password: React.FC<IOpenComponentParams<string>> = ({
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

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    /* istanbul ignore else */
    if (val !== value) {
      onChange(val)
    }
  }

  return (
    <Input.Password
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
  component: Password,
}
