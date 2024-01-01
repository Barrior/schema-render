import type { IOpenComponentParams } from '@schema-render/core-react'
import { DatePicker } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import React from 'react'

function toISOString(date: Dayjs | string | null) {
  return dayjs(date).toISOString()
}

const DateRangePicker: React.FC<IOpenComponentParams<[string, string]>> = ({
  schema,
  value,
  onChange,
  disabled,
  validator,
}) => {
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

export default {
  component: DateRangePicker,
}
