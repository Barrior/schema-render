import type { IColumnType } from '../../../typings/table.d'

/**
 * 配置列数据合并算法
 * @param baseColumns 原始列数据
 * @param settingColumns 存储的列数据
 */
export const defaultColumnsMergeAlgo = (
  baseColumns: IColumnType<any>[],
  settingColumns: IColumnType<any>[]
) => {
  const mergedColumns: IColumnType<any>[] = []
  const dictionary: Record<string, IColumnType<any>> = {}

  // 数组转换成对象结构便于计算以及性能提升
  baseColumns.forEach((col) => {
    dictionary[String(col.dataIndex)] = col
  })

  // 按存储的数据排序，同时过滤已删除的列数据
  settingColumns.forEach((storedCol) => {
    const strDataIndex = String(storedCol.dataIndex)
    const currentCol = dictionary[strDataIndex]
    if (currentCol) {
      // 合并列数据
      mergedColumns.push({
        ...currentCol,
        width: storedCol.width ?? currentCol.width,
        hidden: storedCol.hidden ?? currentCol.hidden,
        fixed: storedCol.fixed ?? currentCol.fixed,
      })

      // 删除已经匹配过的数据
      delete dictionary[strDataIndex]
    }
  })

  // 将未匹配的列数据添加最后
  for (const value of Object.values(dictionary)) {
    mergedColumns.push(value)
  }

  return mergedColumns
}
