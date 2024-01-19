import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Select as AntSelect } from 'antd'
import React, { useMemo } from 'react'

import Description from '../components/Description'
import { getOptionsLabels } from '../utils'

type IProps = React.FC<IOpenComponentParams<string>>

/**
 * 编辑与禁用态组件
 */
const Select: IProps = ({ schema, disabled, value, onChange, locale, validator }) => {
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

/**
 * 只读态组件
 */
const ReadonlySelect: IProps = ({ schema, value, locale }) => {
  const labels = getOptionsLabels(schema.renderOptions?.options, [value])
  return <Description>{labels.join(locale.FormRender?.comma)}</Description>
}

export default {
  component: Select,
  readonlyComponent: ReadonlySelect,
}
