import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: '常规标题',
    dataIndex: 'title',
  },
  {
    title: '评级',
    dataIndex: 'rate',
    valueType: 'rate',
  },
  {
    title: '代码块',
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '千分位数字',
    dataIndex: 'comma_number',
    valueType: 'comma-number',
  },
  {
    title: '百分比',
    dataIndex: 'percent',
    valueType: 'percent',
  },
  {
    title: '状态开关',
    dataIndex: 'switch_status',
    valueType: 'switch',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    valueType: 'tags',
    width: 140,
  },
  {
    title: '图片',
    dataIndex: 'image_list',
    valueType: 'images',
  },
]

export default columns
