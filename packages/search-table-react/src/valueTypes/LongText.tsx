import { Tooltip } from 'antd'
import type { ComponentProps, FC } from 'react'

import { isEmpty } from '../utils/common'
import type { IEllipsisPlacement } from '../utils/text'
import { ellipsisText } from '../utils/text'

interface ILongTextOptions {
  maxLength?: number
  placement?: IEllipsisPlacement
  tooltipProps?: ComponentProps<typeof Tooltip>
}

interface ILongTextProps {
  value?: any
  options?: ILongTextOptions
}

const LongText: FC<ILongTextProps> = ({ value, options = {} }) => {
  const text = isEmpty(value) ? '-' : String(value)

  const { maxLength = 10, placement = 'end', tooltipProps } = options

  const displayText = ellipsisText(text, maxLength, placement)

  if (displayText === text) {
    return <>{text}</>
  }

  return (
    <Tooltip title={text} {...tooltipProps}>
      <span>{displayText}</span>
    </Tooltip>
  )
}

export default LongText
