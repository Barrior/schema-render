import type { IOpenComponentParams } from '@schema-render/core-react'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import { Input } from 'antd'
import React, { useMemo } from 'react'

import Description from '../components/Description'

type IProps = React.FC<IOpenComponentParams<string>>

/**
 * 编辑与禁用态组件
 */
const TextArea: IProps = ({ schema, disabled, value, onChange, validator, locale }) => {
  const placeholder = useMemo(
    () =>
      utils.templateCompiled(locale.FormRender.placeholderInput, {
        title: schema.title,
      }),
    [schema.title, locale.FormRender.placeholderInput]
  )

  const onInputChange = useMemoizedFn((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value

    /* istanbul ignore else */
    if (val !== value) {
      onChange(val)
    }
  })

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

/**
 * 只读态组件
 */
const ReadonlyTextArea: IProps = ({ value }) => {
  return <Description>{value}</Description>
}

export default {
  component: TextArea,
  readonlyComponent: ReadonlyTextArea,
}
