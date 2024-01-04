import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { DatePicker as AntDatePicker } from 'antd'
import dayjs from 'dayjs'
import React, { useMemo } from 'react'

import Description from '../components/Description'
import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_TIME_FORMAT } from '../constants'

const DatePicker: React.FC<IOpenComponentParams<string>> = ({
  schema,
  value,
  onChange,
  disabled,
  readonly,
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

  // 只读态
  if (readonly) {
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

export default {
  component: DatePicker,
}
