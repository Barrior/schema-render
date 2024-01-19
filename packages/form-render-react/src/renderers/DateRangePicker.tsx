import type { IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { DatePicker } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import React from 'react'

import Description from '../components/Description'
import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_TIME_FORMAT } from '../constants'

function toISOString(date: Dayjs | string | null) {
  return dayjs(date).toISOString()
}

type IProps = React.FC<IOpenComponentParams<[string, string]>>

/**
 * 编辑与禁用态组件
 */
const DateRangePicker: IProps = ({ schema, value, onChange, disabled, validator }) => {
  return (
    <DatePicker.RangePicker
      allowClear
      style={{ width: '100%' }}
      {...schema.renderOptions}
      status={validator.status as never}
      value={value ? [dayjs(value[0]), dayjs(value[1])] : null}
      onChange={(val) =>
        onChange(val ? [toISOString(val[0]), toISOString(val[1])] : undefined)
      }
      disabled={disabled}
    />
  )
}

/**
 * 只读态组件
 */
const ReadonlyDateRangePicker: IProps = ({ schema, value, locale }) => {
  let displayText = ''

  if (utils.isArray(value) && value[0] && value[1]) {
    const defaultFormat = schema.renderOptions?.showTime
      ? DEFAULT_DATE_TIME_FORMAT
      : DEFAULT_DATE_FORMAT
    const format = schema.renderOptions?.format || defaultFormat

    displayText = utils.templateCompiled(locale.FormRender.displayDateRange, {
      start: dayjs(value[0]).format(format),
      end: dayjs(value[1]).format(format),
    })
  }

  return <Description>{displayText}</Description>
}

export default {
  component: DateRangePicker,
  readonlyComponent: ReadonlyDateRangePicker,
}
