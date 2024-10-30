import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

type IRootSchema = IFormRenderRootSchema<string>

/**
 * 创建折叠的 Schema
 * @param rawSchema 原始 Schema
 * @param collapsedNumber 折叠的个数
 * @returns 折叠的 Schema
 */
function createCollapsedSchema(
  rawSchema: IRootSchema,
  collapsedNumber: number
): IRootSchema {
  const collapsedProps: IRootSchema['properties'] = {}

  const displayedKeys = Object.keys(rawSchema.properties).slice(0, collapsedNumber)
  for (const key of displayedKeys) {
    collapsedProps[key] = rawSchema.properties[key]
  }

  return {
    renderType: 'Root',
    properties: collapsedProps,
  }
}

interface ICreateSearchSchema {
  /**
   * 是否折叠
   */
  isCollapsed: boolean
  /**
   * 原始 Schema
   */
  rawSchema: IRootSchema
  /**
   * 折叠的个数
   */
  collapsedNumber: number
}

/**
 * 根据折叠个数，创建展示的 Schema
 */
export default function createDisplayedSchema({
  isCollapsed,
  rawSchema,
  collapsedNumber,
}: ICreateSearchSchema) {
  return isCollapsed ? createCollapsedSchema(rawSchema, collapsedNumber) : rawSchema
}
