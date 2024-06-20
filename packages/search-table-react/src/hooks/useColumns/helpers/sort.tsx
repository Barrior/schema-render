import type { IObjectAny } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import dayjs from 'dayjs'

import type { IColumnType, ITableProps } from '../../../typings/table'
import { isEmpty } from '../../../utils/common'

const { get, isArray, isPlainObject } = utils

function sorterCompare(a: number | string | Date, b: number | string | Date) {
  return a === b ? 0 : a > b ? 1 : -1
}

interface ISorterOptions {
  // 数据索引
  arrDataIndex: string[]
  // 排序方式
  sortOrder: IColumnType['sortOrder']
  // 排序方式，自动推断不准确时，手动声明排序方式
  sortType: IColumnType['sortType']
  // 排序时的列数据取值，复杂场景的列数据获取需要手动获取
  sortDataExtractor?: IColumnType['sortDataExtractor']
  // 排序字符串数据转换方案
  sortStringValueTransform: ITableProps['sortStringValueTransform']
}

export const localSorter = (
  a: IObjectAny,
  b: IObjectAny,
  {
    sortType,
    sortOrder,
    arrDataIndex,
    sortDataExtractor,
    sortStringValueTransform,
  }: ISorterOptions
) => {
  let aValue = sortDataExtractor ? sortDataExtractor(a) : get(a, arrDataIndex)
  let bValue = sortDataExtractor ? sortDataExtractor(b) : get(b, arrDataIndex)

  // 对象类型不排序
  if (isPlainObject(aValue) || isPlainObject(bValue)) {
    return 0
  }

  // 将数值类型转换成字符串类型
  if (isArray(aValue)) {
    aValue = aValue.join('')
  }

  if (isArray(bValue)) {
    bValue = bValue.join('')
  }

  // 数据字符串化，并去除空字符
  aValue = String(aValue).trim()
  bValue = String(bValue).trim()

  // 处理空值一直排在最后
  if (isEmpty(aValue)) {
    return sortOrder === 'ascend' ? 1 : -1
  }

  if (isEmpty(bValue)) {
    return sortOrder === 'ascend' ? -1 : 1
  }

  // 字符串类型处理
  if (sortType === 'string') {
    if (sortStringValueTransform) {
      aValue = sortStringValueTransform(aValue)
      bValue = sortStringValueTransform(bValue)
    }
    // 加 @ 符号强制转换数字类型为字符串类型
    return sorterCompare(`@${aValue}`.toLowerCase(), `@${bValue}`.toLowerCase())
  }

  // 日期类型处理
  if (sortType === 'date') {
    return sorterCompare(new Date(aValue), new Date(bValue))
  }

  /**
   * 以下为自动推断
   */
  // 数字类型处理
  if (!isNaN(Number(aValue)) && !isNaN(Number(bValue))) {
    return sorterCompare(Number(aValue), Number(bValue))
  }

  // 日期类型处理
  if (dayjs(aValue).isValid() && dayjs(bValue).isValid()) {
    return sorterCompare(new Date(aValue), new Date(bValue))
  }

  // 字符串类型处理
  if (sortStringValueTransform) {
    aValue = sortStringValueTransform(aValue)
    bValue = sortStringValueTransform(bValue)
  }
  return sorterCompare(aValue, bValue)
}
