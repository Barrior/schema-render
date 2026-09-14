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
      maxLength: 15,
      placement: index % 3 === 0 ? 'start' : index % 3 === 1 ? 'middle' : 'end',
      tooltipProps: {
        color: index % 2 ? '#1677ff' : '#000',
      },
    }),
    width: 270,
  },
  {
    title: '长文案(long-text-modal)',
    dataIndex: 'long_text_modal',
    valueType: (_record, index) => ({
      type: 'long-text-modal',
      maxLength: 20,
      btnText: index % 2 ? '查看详情' : '全部',
      modalProps: {
        title: index % 2 ? '详情' : '全部',
        width: 500,
      },
      modalContent:
        index % 2
          ? '这是自定义的 modal 内容，您可以在这里放置任何 React 组件或元素。'
          : undefined,
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
