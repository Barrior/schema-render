import { HolderOutlined } from '@ant-design/icons'
import { Button, InputNumber, Switch, Tag } from 'antd'
import type { ReactNode } from 'react'

interface IColumn {
  title: string
  dataIndex: string
  width: number
  render?: (value: any, onChange: (val: any) => void) => ReactNode
  algin?: 'center'
}

const columns: IColumn[] = [
  {
    title: '列名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '隐藏列',
    dataIndex: 'hidden',
    width: 90,
    render: (value: boolean, onChange) => {
      return <Switch checked={value} onChange={onChange} />
    },
  },
  {
    title: '宽度',
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
    title: '固定方式',
    dataIndex: 'fixed',
    width: 60,
    algin: 'center',
    render: (value?: 'left' | 'right') => {
      const text = value ? (value === 'left' ? '左' : '右') : '无'
      const color = value ? (value === 'left' ? 'orange' : 'blue') : undefined
      return (
        <Tag color={color} style={{ margin: 0 }}>
          {text}
        </Tag>
      )
    },
  },
  {
    title: '排序',
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

export default columns
