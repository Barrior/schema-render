import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: '供应商名称',
    dataIndex: 'supplier_name',
    width: 130,
  },
  {
    title: '供应商编码',
    dataIndex: 'supplier_code',
  },
  {
    title: '单据编号',
    dataIndex: 'bill_no',
    width: 130,
  },
  {
    title: '单据类型',
    dataIndex: 'bill_type',
  },
  {
    title: '单据日期',
    dataIndex: 'bill_date',
    width: 120,
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
    width: 130,
  },
  {
    title: '商品价格(元)',
    dataIndex: 'goods_price',
  },
  {
    title: '商品编码',
    dataIndex: 'goods_code',
    width: 130,
  },
  {
    title: '商品分类',
    dataIndex: 'goods_category',
  },
  {
    title: '商品日期',
    dataIndex: 'goods_date',
    width: 120,
  },
]

export default columns
