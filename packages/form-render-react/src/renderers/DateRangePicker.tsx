import type { IObjectAny, IOpenComponentParams } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { DatePicker } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import React from 'react'

import Description from '../components/Description'
import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_TIME_FORMAT } from '../constants'

function toString(date: Dayjs | string | null | undefined, outputFormat?: string) {
  return outputFormat ? dayjs(date).format(outputFormat) : dayjs(date).toISOString()
}

function getFields(valueFieldMap?: { start?: string; end?: string }) {
  const startField = valueFieldMap?.['start'] || 'start'
  const endField = valueFieldMap?.['end'] || 'end'
  return { startField, endField }
}

function getValue(val: any, renderOptions?: IObjectAny) {
  let startTime: Dayjs
  let endTime: Dayjs

  if (renderOptions?.valueStruct === 'object') {
    const { startField, endField } = getFields(renderOptions?.valueFieldMap)
    startTime = val[startField]
    endTime = val[endField]
  } else {
    startTime = val[0]
    endTime = val[1]
  }

  return [dayjs(startTime), dayjs(endTime)] as [Dayjs, Dayjs]
}

function outputValue(
  startTime: Dayjs,
  endTime: Dayjs,
  outputFormat: string,
  renderOptions?: IObjectAny
) {
  const outputStartTime = toString(startTime, outputFormat)
  const outputEndTime = toString(endTime, outputFormat)

  if (renderOptions?.valueStruct === 'object') {
    const { startField, endField } = getFields(renderOptions?.valueFieldMap)
    return {
      [startField]: outputStartTime,
      [endField]: outputEndTime,
    }
  }

  return [outputStartTime, outputEndTime]
}

type IProps = React.FC<IOpenComponentParams<[string, string] | IObjectAny>>

/**
 * 编辑与禁用态组件
 */
const DateRangePicker: IProps = ({ schema, value, onChange, disabled, validator }) => {
  const { showTime, outputFormat } = schema.renderOptions || {}

  return (
    <DatePicker.RangePicker
      allowClear
      allowEmpty
      style={{ width: '100%' }}
      {...schema.renderOptions}
      disabled={disabled}
      status={validator.status as never}
      value={value ? getValue(value, schema.renderOptions) : null}
      onChange={(val) => {
        if (val && val[0] && val[1]) {
          // 不是 showTime 的情况，endTime 时分秒设置到当日结束时间
          const startTime = showTime ? val[0] : val[0].startOf('day')
          const endTime = showTime ? val[1] : val[1].endOf('day')
          onChange(outputValue(startTime, endTime, outputFormat, schema.renderOptions))
        } else {
          onChange(undefined)
        }
      }}
    />
  )
}

/**
 * 只读态组件
 */
const ReadonlyDateRangePicker: IProps = ({ schema, value, locale }) => {
  let displayText = ''

  if (utils.isArray(value) || utils.isPlainObject(value)) {
    const [startTime, endTime] = getValue(value, schema.renderOptions)

    const defaultFormat = schema.renderOptions?.showTime
      ? DEFAULT_DATE_TIME_FORMAT
      : DEFAULT_DATE_FORMAT
    const format = schema.renderOptions?.format || defaultFormat
    const displayTextTemplate =
      schema.renderOptions?.displayTextTemplate || locale.FormRender.displayDateRange

    displayText = utils.templateCompiled(displayTextTemplate, {
      start: startTime.format(format),
      end: endTime.format(format),
    })
  }

  return <Description>{displayText}</Description>
}

export default {
  component: DateRangePicker,
  readonlyComponent: ReadonlyDateRangePicker,
}
