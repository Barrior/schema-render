---
group:
  title: 案例集锦
  order: 900
toc: content
---

# 表格内容编辑

```tsx
import { useRef } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import type { IColumnType } from '@schema-render/search-table-react'
import { InputNumber, Button, message } from 'antd'

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  const columns: IColumnType[] = [
    {
      title: '单据编号',
      dataIndex: 'bill_no',
      width: 130,
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
      title: '商品名称',
      dataIndex: 'goods_name',
      width: 130,
    },
    {
      title: '商品价格(元)',
      dataIndex: 'goods_price',
      render: (value, record) => {
        return (
          <InputNumber
            value={value}
            onChange={(newValue) => {
              record.goods_price = newValue
              STableRef.current?.rerender()
            }}
          />
        )
      },
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

  const handleSubmit = () => {
    console.log('dataSource:', STableRef.current?.getDataSource())
    message.success('请在控制台查看修改后的最新数据')
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema }}
        table={{ columns }}
        request={async (searchParams) => {
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return { data, total: 100 }
        }}
      />
      <Button type="primary" onClick={handleSubmit}>
        提交
      </Button>
    </ConfigProvider>
  )
}

export default Demo
```
