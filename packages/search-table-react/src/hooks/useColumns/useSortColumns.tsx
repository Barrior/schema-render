import { useAsyncEffect, useMemoizedFn, utils } from '@schema-render/core-react'
import { useMemo, useRef, useState } from 'react'

import ColumnSettingModal from '../../components/ColumnSettingModal'
import type { IGlobalStateRef } from '../../typings'
import type { IColumnType, ITableProps } from '../../typings/table.d'
import { defaultColumnsMergeAlgo } from './helpers/setting'

const { pick } = utils

interface IParams {
  baseColumns: IColumnType<any>[]
  table: ITableProps
  globalStateRef: IGlobalStateRef
}

export default function useSortColumns({ baseColumns, table, globalStateRef }: IParams) {
  const sortColumnsRef = useRef<IColumnType<any>[]>([])
  const [modalVisible, setModalVisible] = useState(false)
  const [settingColumns, setSettingColumns] = useState<IColumnType<any>[]>([])
  const { isTabChanging } = globalStateRef.current

  // 「基础列」、「设置列」变换时，排序列重新生成
  useMemo(() => {
    // Tab 切换中不需要执行
    if (isTabChanging) {
      return
    }

    if (settingColumns.length) {
      const mergeAlgo = table.settingColumnsMergeAlgo || defaultColumnsMergeAlgo
      sortColumnsRef.current = mergeAlgo(baseColumns, settingColumns)
    } else {
      // 浅复制一层，避免基础列数据被污染
      sortColumnsRef.current = [...baseColumns]
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseColumns, settingColumns])

  // 打开列设置弹窗
  const openSettingModal = useMemoizedFn(() => {
    setModalVisible(true)
  })

  // 关闭列设置弹窗
  const closeSettingModal = useMemoizedFn(() => {
    setModalVisible(false)
  })

  // 保存排序数据
  const handleOk = useMemoizedFn((newSortColumns: IColumnType<any>[]) => {
    sortColumnsRef.current = newSortColumns
    closeSettingModal()

    // 触发设置改变事件
    const storeColumns = newSortColumns.map((col) =>
      pick(col, 'title', 'dataIndex', 'width', 'hidden', 'fixed')
    )
    table.onSettingChanged?.({ columns: storeColumns }, table.settingId)
  })

  const sortModalHolder = (
    <ColumnSettingModal
      open={modalVisible}
      sortColumns={sortColumnsRef.current}
      defaultColumns={baseColumns}
      onCancel={closeSettingModal}
      onOk={handleOk}
    />
  )

  // 组件加载完毕、settingId 变化时，重新获取存储数据
  useAsyncEffect(async () => {
    const data = await table.getSetting?.(table.settingId)
    if (data?.columns?.length) {
      setSettingColumns(data.columns)
    }
  }, [table.settingId])

  return {
    sortColumns: sortColumnsRef.current,
    sortModalHolder,
    openSettingModal,
    closeSettingModal,
  }
}
