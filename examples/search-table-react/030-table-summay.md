---
order: 30
toc: content
---

# 合计栏 Summary

## 基础功能

内置“合计”数据显示功能，只需在 `request` 里返回 `summaryData` 数据即可，数据字段对应表格列的 `dataIndex` 字段，合计数据的位置将根据此对应关系自动计算。

```tsx
import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{ columns, scroll: { y: 300 } }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // 计算商品合计总价
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // 返回表格数据渲染
        return {
          // 表格数据
          data,
          // 数据总数，用于分页
          total: 100,
          // 合计栏数据
          summaryData: {
            // 对应「供应商编码」
            supplier_code: <Tag color="blue">自定义内容</Tag>,
            // 对应「商品价格」
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo
```

## 自定义合计文案

通过 `summaryText` 可定义 `合计` 文案，会在序号栏显示。

```tsx
import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  const actionItems = () => [{ text: '编辑' }, { text: '删除' }]
  const summaryText = <div style={{ color: 'red', fontWeight: 'bold' }}>合计</div>
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        scroll: { y: 300 },
        showRowNumber: true,
        summaryText,
        actionItems,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // 计算商品合计总价
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // 返回表格数据渲染
        return {
          // 表格数据
          data,
          // 数据总数，用于分页
          total: 100,
          // 合计栏数据
          summaryData: {
            supplier_code: <Tag color="blue">自定义内容</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo
```

## 选中栏效果

只有`选中栏`。

```tsx
import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  const actionItems = () => [{ text: '编辑' }, { text: '删除' }]
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        scroll: { y: 300 },
        actionItems,
        rowSelection: {
          columnWidth: 60,
          fixed: true,
          type: 'checkbox',
        },
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // 计算商品合计总价
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // 返回表格数据渲染
        return {
          // 表格数据
          data,
          // 数据总数，用于分页
          total: 100,
          // 合计栏数据
          summaryData: {
            supplier_code: <Tag color="blue">自定义内容</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo
```

`选中栏` 与 `序号栏` 同时存在。

```tsx
import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  const actionItems = () => [{ text: '编辑' }, { text: '删除' }]
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        scroll: { y: 300 },
        showRowNumber: true,
        actionItems,
        rowSelection: {
          type: 'checkbox',
        },
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // 计算商品合计总价
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // 返回表格数据渲染
        return {
          // 表格数据
          data,
          // 数据总数，用于分页
          total: 100,
          // 合计栏数据
          summaryData: {
            supplier_code: <Tag color="blue">自定义内容</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo
```

同时存在时，“合计” 文案占据两个单元格。

```jsx
import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

// 通过样式控制效果
const textStyle = {
  width: 116,
  height: '100%',
  background: 'white',
  position: 'absolute',
  left: -48,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Demo = () => {
  const actionItems = () => [{ text: '编辑' }, { text: '删除' }]
  const summaryText = <div style={textStyle}>合计</div>

  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        scroll: { y: 300 },
        showRowNumber: true,
        bordered: true,
        summaryText,
        actionItems,
        rowSelection: {
          type: 'checkbox',
        },
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // 计算商品合计总价
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // 返回表格数据渲染
        return {
          // 表格数据
          data,
          // 数据总数，用于分页
          total: 100,
          // 合计栏数据
          summaryData: {
            supplier_code: <Tag color="blue">自定义内容</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo
```

## 嵌套表头

```jsx
import { Tag } from 'antd'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import treeColumns from './helpers/columns-tree'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  const actionItems = () => [{ text: '编辑' }, { text: '删除' }]

  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns: treeColumns,
        scroll: { y: 300 },
        showRowNumber: true,
        bordered: true,
        actionItems,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // 计算商品合计总价
        const totalPrice = data
          .reduce((total, item) => total + item.goods_price, 0)
          .toFixed(2)

        // 返回表格数据渲染
        return {
          // 表格数据
          data,
          // 数据总数，用于分页
          total: 100,
          // 合计栏数据
          summaryData: {
            supplier_code: <Tag color="blue">自定义内容</Tag>,
            goods_price: totalPrice,
          },
        }
      }}
    />
  )
}

export default Demo
```
