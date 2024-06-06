import type { ISearchTableProps } from '@schema-render/search-table-react'

const columns: ISearchTableProps['table']['columns'] = [
  {
    title: '供应商名称',
    dataIndex: 'supplier_name',
  },
  {
    title: '供应商编码',
    dataIndex: 'supplier_code',
  },
  {
    title: '单据编号',
    dataIndex: 'bill_no',
  },
  {
    title: '单据类型',
    dataIndex: 'bill_type',
  },
  {
    title: '单据日期',
    dataIndex: 'bill_date',
  },
  {
    title: '单据状态',
    dataIndex: 'bill_status',
  },
  {
    title: '制单人',
    dataIndex: 'operator',
  },
  {
    title: '商品名称',
    dataIndex: 'goods_name',
  },
  {
    title: '商品编码',
    dataIndex: 'goods_code',
  },
  {
    title: '商品分类',
    dataIndex: 'goods_category',
  },
  {
    title: '商品日期',
    dataIndex: 'goods_date',
  },
]

export default columns
