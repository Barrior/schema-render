import { useMemoizedFn } from '@schema-render/core-react'
import { Button, Space } from 'antd'
import type { FC } from 'react'
import { useMemo, useState } from 'react'

import useRootContext from '../../hooks/useRootContext'
import type { IColumnType } from '../../typings/table'
import Sortable from '../Sortable'
import { createColumns } from './index.column'
import styles from './index.module.css'

export interface IColumnSettingContentProps {
  sortColumns: IColumnType<any>[]
  defaultColumns: IColumnType<any>[]
  onOk?: (newSortColumns: IColumnType<any>[]) => void
}

function createInitialDataSource(columns: IColumnType<any>[]) {
  return columns.map((item) => ({
    id: String(item.dataIndex),
    name: item.title,
    hidden: item.hidden,
    width: item.width,
    fixed: item.fixed,
  }))
}

const ColumnSettingContent: FC<IColumnSettingContentProps> = ({
  defaultColumns,
  sortColumns,
  onOk,
}) => {
  const rootCtx = useRootContext()
  const [dataSource, setDataSource] = useState(() => createInitialDataSource(sortColumns))
  const columns = useMemo(
    () => createColumns({ locale: rootCtx.locale }),
    [rootCtx.locale]
  )

  // 配置数据变更事件
  const handleChange = useMemoizedFn(
    (index: number, dataKey: keyof (typeof dataSource)[0], newValue: any) => {
      const newDataSource: any[] = [...dataSource]
      newDataSource[index][dataKey] = newValue
      setDataSource(newDataSource)
    }
  )

  // 排序事件
  const handleSortChange = useMemoizedFn((newDataSource: typeof dataSource) => {
    setDataSource(newDataSource)
  })

  // 重置本次排序
  const handleResetCurrentSetting = useMemoizedFn(() => {
    setDataSource(createInitialDataSource(sortColumns))
  })

  // 恢复默认排序
  const handleRestoreDefaultSetting = useMemoizedFn(() => {
    setDataSource(createInitialDataSource(defaultColumns))
  })

  // 配置完成事件
  const handleOk = useMemoizedFn(() => {
    const newSortColumns: IColumnType<any>[] = []
    dataSource.forEach(({ id, width, hidden }) => {
      const col = defaultColumns.find((item) => String(item.dataIndex) === id)
      if (col) {
        newSortColumns.push({
          ...col,
          width,
          hidden,
        })
      }
    })
    onOk?.(newSortColumns)
  })

  return (
    <>
      <div className={styles.header}>
        {columns.map((col, i) => (
          <div
            className={styles.col}
            style={{ width: col.width, justifyContent: col.algin }}
            key={i}
          >
            {col.title}
          </div>
        ))}
      </div>

      <div className={styles.list}>
        <Sortable
          items={dataSource}
          onChange={handleSortChange}
          itemClassName={styles.rowWrapper}
          overlayClassName={styles.rowWrapperOverlay}
          renderItem={(item, rowIndex, sortCtx) => {
            return (
              <div className={styles.row} key={rowIndex}>
                {columns.map((col, colIndex) => {
                  const val = item[col.dataIndex as keyof typeof item]

                  // 排序手柄
                  const listeners = col.dataIndex === 'sort' ? sortCtx?.listeners : {}

                  return (
                    <div
                      className={styles.col}
                      style={{ width: col.width, justifyContent: col.algin }}
                      key={`${rowIndex}${colIndex}`}
                      {...listeners}
                    >
                      {col.render
                        ? col.render(val, (newValue) =>
                            handleChange(rowIndex, col.dataIndex as never, newValue)
                          )
                        : val}
                    </div>
                  )
                })}
              </div>
            )
          }}
        />
      </div>

      <div className={styles.footer}>
        <Space>
          <Button onClick={handleRestoreDefaultSetting}>
            {rootCtx.locale.SearchTable.settingModalResetDefault}
          </Button>
          <Button onClick={handleResetCurrentSetting}>
            {rootCtx.locale.SearchTable.settingModalReset}
          </Button>
          <Button type="primary" onClick={handleOk}>
            {rootCtx.locale.SearchTable.settingModalOk}
          </Button>
        </Space>
      </div>
    </>
  )
}

export default ColumnSettingContent
