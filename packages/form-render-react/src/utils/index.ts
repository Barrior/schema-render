import type { IBaseSchema, IRootSchema } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import type { CheckboxOptionType } from 'antd'
import type { ReactNode } from 'react'

import { ACTIONS_RENDER_TYPE } from '../constants'
import type { IInnerFormRenderProps } from '../typings'

type IAntdOptions = Array<CheckboxOptionType | string | number>

const { isArray, isNil, isObject } = utils

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
 * 标准化遍历 Antd options 数据，支持跳出遍历
 */
function forEachOptions(
  options: IAntdOptions = [],
  callback: (item: CheckboxOptionType) => boolean | void
) {
  for (let i = 0; i < options.length; i++) {
    // 标准化 item 数据
    const item = options[i]
    const objectItem = isObject(item) ? item : { label: item, value: item }
    const breakEach = callback(objectItem)
    if (breakEach) {
      return
    }
  }
}

/**
 * 获取 Antd options 选项 label 数据
 * @param options Antd options
 * @param checkedValues label 对应的 value 值，可以多个
 */
export function getOptionsLabels(
  options?: IAntdOptions,
  checkedValues?: (CheckboxOptionType['value'] | undefined)[]
): ReactNode[] {
  const labels: ReactNode[] = []

  if (!isArray(options) || !isArray(checkedValues)) {
    return labels
  }

  checkedValues.forEach((value) => {
    if (isNil(value)) {
      return
    }

    forEachOptions(options, (item) => {
      // 找到一项，跳出遍历
      if (value === item.value) {
        labels.push(item.label)
        return true
      }
    })
  })

  return labels
}

/**
 * 查找选中的 Antd options 选项数据
 */
export function getCheckedOptions(
  options?: IAntdOptions,
  checkedValues?: CheckboxOptionType['value'][]
): CheckboxOptionType[] {
  const result: CheckboxOptionType[] = []

  if (!isArray(options) || !isArray(checkedValues)) {
    return result
  }

  forEachOptions(options, (item) => {
    if (checkedValues.includes(item.value)) {
      result.push(item)
    }
  })

  return result
}

/**
 * 校验是否是空值：null、undefined 和空字符串判断为空
 */
export function isEmpty(value: unknown): value is null | undefined | '' {
  return !!(isNil(value) || value === '')
}
