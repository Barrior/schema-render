import type { IOpenComponentParams } from '@schema-render/core-react'
import { Rate as AntRate } from 'antd'

const Rate: React.FC<IOpenComponentParams<number>> = ({
  schema,
  disabled,
  readonly,
  value,
  onChange,
}) => {
  return (
    <AntRate
      {...schema.renderOptions}
      value={value ?? 0}
      onChange={(val) => onChange(val)}
      disabled={disabled || readonly}
    />
  )
}

export default {
  component: Rate,
}
