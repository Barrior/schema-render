import { createRandomId } from '../utils/common'

const clsUid = createRandomId()

/**
 * 列配置 key
 */
export enum EColumnsKeys {
  /**
   * 操作栏
   */
  actions = '__actions__',
  /**
   * 序号栏
   */
  rowNumber = '__row-number__',
}

/**
 * 内部使用类名
 */
export const EClassNames = {
  /**
   * 表格根节点类名
   */
  table: `st-table-${clsUid}`,
  /**
   * 表格分页节点类名
   */
  pagination: `st-pagination-${clsUid}`,
}
