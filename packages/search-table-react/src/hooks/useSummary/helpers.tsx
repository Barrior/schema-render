import type { IObjectAny } from '@schema-render/core-react'
import { utils } from '@schema-render/core-react'
import { Table } from 'antd'
import type { Key, ReactNode } from 'react'

import { EColumnsKeys } from '../../constants'
import type { IColumnType } from '../../typings/table.d'
import { forEach } from '../../utils/common'

const { isArray, isNil } = utils

export interface ICreateTableSummaryParams {
  /** 平铺的列数据 */
  flattenedColumns: IColumnType[]
  /** 「合计」数据 */
  summaryData: IObjectAny
  /** 「合计」文案 */
  summaryText?: ReactNode
  /**
   * 表格是否存在 checkbox 选择框，存在会给「合计」索引自动 +1
   */
  hasRowSelection?: boolean
  /**
   * 是否存在序号栏
   */
  hasRowNumber?: boolean
}

/**
 * 获取默认文案
 */
function getSummaryDefaultText(dataKey: Key, summaryText: ReactNode) {
  // 序号栏显示“合计”文案
  if (dataKey === EColumnsKeys.rowNumber) {
    return summaryText
  }

  // 操作栏默认为空
  if (dataKey === EColumnsKeys.actions) {
    return ''
  }

  // 其他列数据不存在显示中横线
  return '-'
}

/**
 * 获取平铺的 columns
 */
export function getFlattenedColumns(columns?: IColumnType[]) {
  const flattened: IColumnType[] = []

  function traverse(list?: IColumnType[]) {
    forEach(list, (item) => {
      if (isArray(item.children)) {
        traverse(item.children)
      } else {
        flattened.push(item)
      }
    })
  }

  traverse(columns)

  return flattened
}

/**
 * 创建 Antd Table 总结栏列表数据
 */
function createTableSummaryItems({
  flattenedColumns,
  summaryData,
  summaryText = '合计',
  hasRowNumber = false,
  hasRowSelection = false,
}: ICreateTableSummaryParams) {
  const resultList: { index: number; text: ReactNode; colSpan?: number }[] = []

  let index = -1

  if (hasRowSelection) {
    index++
    resultList.push({
      index,
      text: hasRowNumber ? '' : summaryText,
    })
  }

  forEach(flattenedColumns, ({ key, dataIndex }) => {
    const strDataIndex = (isArray(dataIndex) ? dataIndex.join('.') : dataIndex) as string
    const dataKey = key || strDataIndex
    const content = summaryData[dataKey]

    index++

    resultList.push({
      index,
      text: isNil(content) ? getSummaryDefaultText(dataKey, summaryText) : content,
    })
  })

  return resultList
}

/**
 * 创建 antd table 总结栏
 */
export function createTableSummary(p: ICreateTableSummaryParams) {
  const items = createTableSummaryItems(p)
  return (
    <Table.Summary fixed="bottom">
      <Table.Summary.Row>
        {items.map((item) => {
          return (
            <Table.Summary.Cell
              align="center"
              key={item.index}
              index={item.index}
              colSpan={item.colSpan}
            >
              {item.text}
            </Table.Summary.Cell>
          )
        })}
      </Table.Summary.Row>
    </Table.Summary>
  )
}
