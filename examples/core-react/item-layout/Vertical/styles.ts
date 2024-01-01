import { cij } from '@examples/utils/cssinjs'

export const header = cij`
  margin-bottom: 8px;
`

export const title = cij`
  word-break: break-all;
`

export const mark = cij`
  margin-right: 4px;
  color: #ff4d4f;
  position: relative;
  top: 2px;
`

export const titleTooltip = cij`
  margin-left: 4px;
`

export const footer = cij`
  word-break: break-all;

  &:empty {
    display: none;
  }
`

export const desc = cij`
  margin-top: 8px;
  color: #999;
`

export const errorMsg = cij`
  margin-top: 8px;
  color: #ff4d4f;
`
