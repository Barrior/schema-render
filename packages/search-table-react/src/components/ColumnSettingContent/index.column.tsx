import { HolderOutlined } from '@ant-design/icons'
import { Button, InputNumber, Switch, Tag } from 'antd'
import type { ReactNode } from 'react'

import type { ILocale } from '../../typings'

interface IColumn {
  title: string
  dataIndex: string
  width: number
  render?: (value: any, onChange: (val: any) => void) => ReactNode
  algin?: 'center'
}

export function createColumns({ locale }: { locale: ILocale }) {
  const titleEnum = locale.SearchTable.settingModalColumnEnum
  const sortEnum = locale.SearchTable.settingModalColumnSortEnum

  const columns: IColumn[] = [
    {
      title: titleEnum[0],
      dataIndex: 'name',
      width: 200,
    },
    {
      title: titleEnum[1],
      dataIndex: 'hidden',
      width: 90,
      render: (value: boolean, onChange) => {
        return <Switch checked={!value} onChange={(val) => onChange(!val)} />
      },
    },
    {
      title: titleEnum[2],
      dataIndex: 'width',
      width: 100,
      render: (value: number, onChange) => {
        return (
          <InputNumber
            min={1}
            value={value}
            onChange={(val) => {
              val ? onChange(val) : undefined
            }}
          />
        )
      },
    },
    {
      title: titleEnum[3],
      dataIndex: 'fixed',
      width: 60,
      algin: 'center',
      render: (value?: 'left' | 'right') => {
        const text = value ? (value === 'left' ? sortEnum[0] : sortEnum[1]) : sortEnum[2]
        const color = value ? (value === 'left' ? 'orange' : 'blue') : undefined
        return (
          <Tag color={color} style={{ margin: 0 }}>
            {text}
          </Tag>
        )
      },
    },
    {
      title: titleEnum[4],
      dataIndex: 'sort',
      width: 50,
      algin: 'center',
      render: () => (
        <Button
          type="text"
          size="small"
          icon={<HolderOutlined />}
          style={{ cursor: 'move' }}
        />
      ),
    },
  ]

  return columns
}
