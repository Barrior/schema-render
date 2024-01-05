import type { IBaseSchema, IRootSchema } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import type { CheckboxOptionType } from 'antd'

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

/**
 * 获取 Antd options 选项 label 数据
 * @param options Antd options
 * @param values label 对应的 value 值，可以多个
 */
export function getOptionsLabels(
  options?: CheckboxOptionType[],
  values?: (CheckboxOptionType['value'] | undefined)[]
) {
  const labels: string[] = []

  if (utils.isArray(values) && utils.isArray(options)) {
    values.forEach((value) => {
      if (!utils.isNil(value)) {
        const result = utils.find<CheckboxOptionType>(options, { value })
        if (result) {
          labels.push(result.label as string)
        }
      }
    })
  }

  return labels
}

/**
 * 校验是否是空值：null、undefined 和空字符串判断为空
 */
export function isEmpty(value: unknown): value is null | undefined | '' {
  return !!(utils.isNil(value) || value === '')
}
