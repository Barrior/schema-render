import type { TableProps } from 'antd'

const columns: TableProps<object>['columns'] = [
  {
    title: '供应商名称',
    dataIndex: 'supplier_name',
    align: 'center',
  },
  {
    title: '供应商编码',
    dataIndex: 'supplier_code',
    align: 'center',
  },
  {
    title: '单据编号',
    dataIndex: 'bill_no',
    align: 'center',
  },
  {
    title: '单据类型',
    dataIndex: 'bill_type',
    align: 'center',
  },
  {
    title: '单据日期',
    dataIndex: 'bill_date',
    align: 'center',
  },
  {
    title: '单据状态',
    dataIndex: 'bill_status',
    align: 'center',
  },
  {
    title: '制单人',
    dataIndex: 'operator',
    align: 'center',
  },
  {
    title: '商品名称',
    dataIndex: 'goods_name',
    align: 'center',
  },
  {
    title: '商品编码',
    dataIndex: 'goods_code',
    align: 'center',
  },
  {
    title: '商品分类',
    dataIndex: 'goods_category',
    align: 'center',
  },
  {
    title: '商品日期',
    dataIndex: 'goods_date',
    align: 'center',
  },
]

export default columns
