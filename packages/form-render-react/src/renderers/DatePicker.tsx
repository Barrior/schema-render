import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { DatePicker as AntDatePicker } from 'antd'
import dayjs from 'dayjs'
import React, { useMemo } from 'react'

import Description from '../components/Description'
import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_TIME_FORMAT } from '../constants'

type IProps = React.FC<IOpenComponentParams<string>>

/**
 * 编辑与禁用态组件
 */
const DatePicker: IProps = ({ schema, value, onChange, disabled, locale, validator }) => {
  const placeholder = useMemo(
    () =>
      utils.templateCompiled(locale.FormRender.placeholderSelect, {
        title: schema.title,
      }),
    [schema.title, locale.FormRender.placeholderSelect]
  )

  return (
    <AntDatePicker
      allowClear
      placeholder={placeholder}
      style={{ width: '100%' }}
      {...schema.renderOptions}
      status={validator.status as never}
      value={value ? dayjs(value) : null}
      onChange={(val) => onChange(val ? dayjs(val).toISOString() : undefined)}
      disabled={disabled}
    />
  )
}

/**
 * 只读态组件
 */
const ReadonlyDatePicker: IProps = ({ schema, value }) => {
  return (
    <Description>
      {value
        ? dayjs(value).format(
            schema.renderOptions?.format ||
              (schema.renderOptions?.showTime
                ? DEFAULT_DATE_TIME_FORMAT
                : DEFAULT_DATE_FORMAT)
          )
        : ''}
    </Description>
  )
}

export default {
  component: DatePicker,
  readonlyComponent: ReadonlyDatePicker,
}
