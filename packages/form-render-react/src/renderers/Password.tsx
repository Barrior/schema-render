import type { IOpenComponentParams } from '@schema-render/core-react'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import { Input } from 'antd'
import React, { useMemo } from 'react'

import Description from '../components/Description'

type IProps = React.FC<IOpenComponentParams<string>>

/**
 * 编辑与禁用态组件
 */
const Password: IProps = ({ schema, disabled, value, onChange, validator, locale }) => {
  const { validateOnBlur, ...restProps } = schema.renderOptions || {}

  const placeholder = useMemo(
    () =>
      utils.templateCompiled(locale.FormRender.placeholderInput, {
        title: schema.title,
      }),
    [schema.title, locale.FormRender.placeholderInput]
  )

  const handleChange = useMemoizedFn((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value

    /* istanbul ignore else */
    if (val !== value) {
      onChange(val, { triggerValidator: !validateOnBlur })
    }
  })

  const handleBlur = useMemoizedFn(() => {
    onChange(value, { triggerValidator: true })
  })

  return (
    <Input.Password
      placeholder={placeholder}
      {...restProps}
      status={validator.status as never}
      value={value ?? ''}
      onChange={handleChange}
      onBlur={validateOnBlur ? handleBlur : undefined}
      disabled={disabled}
    />
  )
}

/**
 * 只读态组件
 */
const ReadonlyPassword: IProps = ({ value }) => {
  return <Description>{value}</Description>
}

export default {
  component: Password,
  readonlyComponent: ReadonlyPassword,
}
