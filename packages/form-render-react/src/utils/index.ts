import type { IBaseSchema, IRootSchema } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'

import { ACTIONS_RENDER_TYPE } from '../constants'
import type { IInnerFormRenderProps } from '../typings'

/**
 * 添加操作行为 Schema
 */
export function addActionsSchema(
  schema: IRootSchema,
  actionsRestSchema?: Partial<IBaseSchema>
) {
  const filed = `${ACTIONS_RENDER_TYPE}_${Date.now()}`
  return {
    ...schema,
    properties: {
      ...schema?.properties,
      [filed]: {
        ...actionsRestSchema,
        renderType: ACTIONS_RENDER_TYPE,
      },
    },
  }
}

/**
 * 计算 normal 模式下 actions 左偏移值
 */
export function calcActionsMarginLeft({
  itemLayout,
  labelWidth,
  labelGap,
}: Pick<IInnerFormRenderProps, 'itemLayout' | 'labelWidth' | 'labelGap'>) {
  if (itemLayout === 'horizontal' && utils.isNumber(labelWidth)) {
    return labelWidth + labelGap
  }
  return 0
}
