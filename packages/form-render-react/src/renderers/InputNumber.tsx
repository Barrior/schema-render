import type { IOpenComponentParams } from '@schema-render/core-react'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import { InputNumber as AntInputNumber } from 'antd'
import React, { useMemo } from 'react'

import Description from '../components/Description'

type IProps = React.FC<IOpenComponentParams<number>>

/**
 * 编辑与禁用态组件
 */
const InputNumber: IProps = ({
  schema,
  disabled,
  value,
  onChange,
  validator,
  locale,
}) => {
  const { validateOnBlur, ...restProps } = schema.renderOptions || {}

  const placeholder = useMemo(
    () =>
      utils.templateCompiled(locale.FormRender.placeholderInput, {
        title: schema.title,
      }),
    [schema.title, locale.FormRender.placeholderInput]
  )

  const handleChange = useMemoizedFn((val: number | null) => {
    onChange(val ?? undefined, { triggerValidator: !validateOnBlur })
  })

  const handleBlur = useMemoizedFn(() => {
    onChange(value, { triggerValidator: true })
  })

  return (
    <AntInputNumber
      style={{ width: '100%' }}
      placeholder={placeholder}
      {...restProps}
      status={validator.status as never}
      value={value}
      onChange={handleChange}
      onBlur={validateOnBlur ? handleBlur : undefined}
      disabled={disabled}
    />
  )
}

/**
 * 只读态组件
 */
const ReadonlyInputNumber: IProps = ({ value }) => {
  return <Description>{value}</Description>
}

export default {
  component: InputNumber,
  readonlyComponent: ReadonlyInputNumber,
}
