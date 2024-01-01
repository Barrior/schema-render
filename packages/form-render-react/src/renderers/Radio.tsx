import type { IOpenComponentParams } from '@schema-render/core-react'
import type { RadioChangeEvent } from 'antd'
import { Radio as AntRadio } from 'antd'
import React from 'react'

export interface IOptions {
  value: string | number
  label: string
  disabled?: boolean
}

const Radio: React.FC<IOpenComponentParams<IOptions['value']>> = ({
  schema,
  disabled,
  value,
  onChange,
}) => {
  const options: IOptions[] =
    (schema.renderOptions?.options as IOptions[] | undefined) ?? []

  const onRadioChange = (e: RadioChangeEvent) => {
    onChange(e.target.value)
  }

  return (
    <AntRadio.Group value={value} onChange={onRadioChange} disabled={disabled}>
      {options.map((item) => {
        return (
          <AntRadio value={item.value} disabled={item.disabled} key={item.value}>
            {item.label}
          </AntRadio>
        )
      })}
    </AntRadio.Group>
  )
}

export default {
  component: Radio,
}
