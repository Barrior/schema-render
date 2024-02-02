import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { useMemoizedFn } from '@schema-render/core-react'
import { Select as AntSelect } from 'antd'
import type { ComponentProps } from 'react'
import React, { useMemo } from 'react'

import Description from '../components/Description'
import { getOptionsLabels } from '../utils'

type IProps = React.FC<IOpenComponentParams<string[]>>

type IHandleChange = ComponentProps<typeof AntSelect>['onChange']

/**
 * 编辑与禁用态组件
 */
const SelectMultiple: IProps = ({
  schema,
  disabled,
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

  const handleChange: IHandleChange = useMemoizedFn((selectedValues, options) => {
    onChange(selectedValues, {
      extra: { selectedOptions: options },
    })
  })

  return (
    <AntSelect
      allowClear
      style={{ width: '100%' }}
      placeholder={placeholder}
      {...schema.renderOptions}
      status={validator.status as never}
      mode="multiple"
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

/**
 * 只读态组件
 */
const ReadonlySelectMultiple: IProps = ({ schema, value, locale }) => {
  const labels = getOptionsLabels(schema.renderOptions?.options, value)
  return <Description>{labels.join(locale.FormRender?.comma)}</Description>
}

export default {
  component: SelectMultiple,
  readonlyComponent: ReadonlySelectMultiple,
}
