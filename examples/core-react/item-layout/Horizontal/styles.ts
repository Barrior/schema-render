import { cij } from '@examples/utils/cssinjs'

export const horizontal = cij``

export const main = cij`
  display: flex;
  align-items: center;
`

export const header = cij`
  flex: 0 0 100px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 15px;
  height: max-content;
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
  position: relative;
  top: 1px;
`

export const body = cij`
  flex-grow: 1;
`

export const footer = cij`
  word-break: break-all;
  padding-left: 115px;

  &:empty {
    display: none;
  }
`

export const desc = cij`
  margin-top: 6px;
  color: #999;
`

export const errorMsg = cij`
  margin-top: 6px;
  color: #ff4d4f;
`
