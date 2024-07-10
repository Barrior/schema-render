import { useMemoizedFn } from '@schema-render/core-react'
import { useMemo, useRef, useState } from 'react'

import ColumnSettingModal from '../../components/ColumnSettingModal'
import type { IColumnType } from '../../typings/table.d'

interface IParams {
  baseColumns: IColumnType<any>[]
}

/**
 * 浅复制第一层列数据，避免基础列数据被污染修改
 */
function initSortColumns(baseColumns: IColumnType<any>[]): IColumnType<any>[] {
  return baseColumns.map((col) => ({ ...col }))
}

export default function useSortColumns({ baseColumns }: IParams) {
  const sortColumnsRef = useRef<IColumnType<any>[]>([])
  const [modalVisible, setModalVisible] = useState(false)

  // 「第一次」以及「基础列变换时」，排序列重新生成
  useMemo(() => {
    sortColumnsRef.current = initSortColumns(baseColumns)
  }, [baseColumns])

  // 打开列设置弹窗
  const openSortModal = useMemoizedFn(() => {
    setModalVisible(true)
  })

  // 关闭列设置弹窗
  const closeSortModal = useMemoizedFn(() => {
    setModalVisible(false)
  })

  // 保存排序数据
  const handleOk = useMemoizedFn((newSortColumns) => {
    sortColumnsRef.current = newSortColumns
    closeSortModal()
  })

  const sortModalHolder = (
    <ColumnSettingModal
      open={modalVisible}
      sortColumns={sortColumnsRef.current}
      defaultColumns={baseColumns}
      onCancel={closeSortModal}
      onOk={handleOk}
    />
  )

  return {
    sortColumns: sortColumnsRef.current,
    sortModalHolder,
    openSortModal,
    closeSortModal,
  }
}
