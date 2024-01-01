import { cij } from '../../cssinjs'

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
  color: var(--schema-render-color-required-mark);
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

export const description = cij`
  margin-top: 6px;
  color: var(--schema-render-color-description);
`

export const errorMsg = cij`
  margin-top: 6px;
  color: var(--schema-render-color-error);
`

export const warningMsg = cij`
  color: var(--schema-render-color-warning);
`
