import type { IObjectAny } from '@schema-render/core-react'
import { Tooltip } from 'antd'
import type { FC } from 'react'

import { isEmpty } from '../utils/common'

interface ILongTextProps {
  value?: string
  options?: IObjectAny
}

const LongText: FC<ILongTextProps> = ({ value, options = {} }) => {
  const text = isEmpty(value) ? '-' : String(value)
  const { maxLength = 10, ...tooltipProps } = options

  return text.length > maxLength ? (
    <Tooltip title={text} {...tooltipProps}>
      {text.slice(0, maxLength - 1)}...
    </Tooltip>
  ) : (
    <>{text}</>
  )
}

export default LongText
