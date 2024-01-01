import { utils } from '@schema-render/core-react'

export function createActionsResetSchema(prefixCls: string) {
  return {
    className: utils.classNamesWithPrefix(prefixCls, 'form-actions'),
    style: {
      gridColumnStart: -2,
      textAlign: 'end',
    },
  }
}
