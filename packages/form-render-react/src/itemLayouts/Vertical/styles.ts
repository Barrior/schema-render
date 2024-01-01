import { cij } from '../../cssinjs'

export const header = cij`
  margin-bottom: 8px;
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
`

export const footer = cij`
  word-break: break-all;

  &:empty {
    display: none;
  }
`

export const description = cij`
  margin-top: 8px;
  color: var(--schema-render-color-description);
`

export const errorMsg = cij`
  margin-top: 8px;
  color: var(--schema-render-color-error);
`

export const warningMsg = cij`
  color: var(--schema-render-color-warning);
`
