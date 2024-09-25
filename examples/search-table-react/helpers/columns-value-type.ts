import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: '常规标题',
    dataIndex: 'title',
  },
  {
    title: '评级(rate)',
    dataIndex: 'rate',
    valueType: 'rate',
  },
  {
    title: '代码块(code)',
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '千分位数字(comma-number)',
    dataIndex: 'comma_number',
    valueType: 'comma-number',
  },
  {
    title: '百分比(percent)',
    dataIndex: 'percent',
    valueType: 'percent',
  },
  {
    title: '长文案(long-text)',
    dataIndex: 'long_text',
    valueType: (_record, index) => ({
      type: 'long-text',
      maxLength: 20,
      color: index % 2 ? '#1677ff' : '#000',
    }),
    width: 270,
  },
  {
    title: '长文案(long-text-modal)',
    dataIndex: 'long_text_modal',
    valueType: () => ({
      type: 'long-text-modal',
      maxLength: 20,
      width: 500,
    }),
    width: 270,
  },
  {
    title: '状态开关(switch)',
    dataIndex: 'switch_status',
    valueType: 'switch',
  },
  {
    title: '标签(tags)',
    dataIndex: 'tags',
    valueType: 'tags',
    width: 140,
  },
  {
    title: '图片(images)',
    dataIndex: 'image_list',
    valueType: 'images',
  },
]

export default columns
