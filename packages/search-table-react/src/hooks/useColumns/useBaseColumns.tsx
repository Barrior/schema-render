import { utils } from '@schema-render/core-react'
import { useMemo, useRef } from 'react'

import type { IGlobalStateRef, ISearchTableProps } from '../../typings/index.d'
import type { IColumnType } from '../../typings/table'
import { BUILT_IN_VALUE_TYPES } from '../../valueTypes'
import { processRawColumns } from './helpers/traverse'

const { mapKeys } = utils

interface IParams {
  table: ISearchTableProps['table']
  globalStateRef: IGlobalStateRef
}

export default function useBaseColumns({ table, globalStateRef }: IParams) {
  // 原始列数据
  const rawColumnsRef = useRef<IColumnType<any>[]>([])
  const { isTabChanging } = globalStateRef.current

  // 更新原始列
  useMemo(() => {
    if (!isTabChanging) {
      rawColumnsRef.current = table.columns || []
    }
  }, [table.columns, isTabChanging])

  // 合并 valueType
  const finalValueTypeProcessors = useMemo(() => {
    const processors = {
      ...BUILT_IN_VALUE_TYPES,
      ...table.registerValueType,
    }
    // 统一小写化
    return mapKeys(processors, (_, key) => key.toLowerCase())
  }, [table.registerValueType])

  const baseColumns = useMemo(
    () => processRawColumns(rawColumnsRef.current, table, finalValueTypeProcessors),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rawColumnsRef.current]
  )

  return {
    rawColumns: rawColumnsRef.current,
    baseColumns,
  }
}
