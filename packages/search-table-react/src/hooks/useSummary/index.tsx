import type { IObjectAny } from '@schema-render/core-react'
import { useMemoizedFn } from '@schema-render/core-react'
import { useMemo } from 'react'

import type { ISearchTableProps } from '../../typings/index.d'
import type { IColumnType } from '../../typings/table'
import { isEmpty } from '../../utils/common'
import { createTableSummary, getFlattenedColumns } from './helpers'

interface IUseSummaryParams {
  table: ISearchTableProps['table']
  finalColumns: IColumnType<any>[]
  summaryData: IObjectAny
}

/**
 * 总结栏处理：支持合计数据分布
 */
export default function useSummary({
  table,
  finalColumns,
  summaryData,
}: IUseSummaryParams) {
  const flattenedColumns = useMemo(
    () => getFlattenedColumns(finalColumns),
    [finalColumns]
  )

  const renderSummary = useMemoizedFn(() => {
    return createTableSummary({
      flattenedColumns,
      summaryData,
      summaryText: table.summaryText,
      hasRowSelection: !!table.rowSelection,
      hasRowNumber: table.showRowNumber,
    })
  })

  // 合计栏函数需要一直变，否则不会每次渲染都执行
  const finalSummary = table.summary
    ? table.summary
    : isEmpty(summaryData)
    ? undefined
    : () => renderSummary()

  return {
    finalSummary,
  }
}
