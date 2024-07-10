---
order: 40
toc: content
---

# 排序 Sort

`sortMode` 属性控制是`前端排序`还是`后端排序`，取值有四种：

- `local`: 前端排序
- `local-all`: 前端排序，排序所有字段，且按数据类型自动应用排序方案
- `service`: 后端排序
- `service-all`: 后端排序，排序所有字段

## 前端排序

在列上声明 `sortType` 属性就会添加排序功能；`sortType` 取值有如下几种：

- `string`: 让数据以字符串顺序进行排序
- `number`: 让数据以数值大小进行排序
- `date`: 让数据以日期大小进行排序

默认排序数据值是通过列的 `dataIndex` 获取，如果数据复杂，则需要通过 `sortDataExtractor` 属性获取。

- 类型：`sortDataExtractor: (record: IObjectAny) => string | number | void`

```tsx
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableProps } from '@schema-render/search-table-react'

const columns: ISearchTableProps['table']['columns'] = [
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
    // 通过字符串顺序进行排序
    sortType: 'string',
  },
  {
    title: '单据类型',
    dataIndex: 'bill_type',
    sortType: 'string',
    // 假设获取复杂数据值
    sortDataExtractor: (record) => record.bill_type,
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
    // 通过数值大小进行排序
    sortType: 'number',
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

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{ columns }}
        request={async (searchParams) => {
          // 模拟请求接口获取表格数据
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo
```

### 排序所有字段

为了提高效率，可以设置 `sortMode` 属性为 `local-all`，这样所有的列字段都将进行排序（排除序号、操作等无关列）。

排序的方式将以数据的类型进行自动判断，当然判断错误时，则需要手动设置排序类型 `sortType` 值。

```tsx
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          sortMode: 'local-all',
        }}
        request={async (searchParams) => {
          // 模拟请求接口获取表格数据
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo
```

### 排序嵌套表头

支持嵌套表头排序。

```tsx
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import treeColumns from './helpers/columns-tree'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns: treeColumns,
          bordered: true,
          sortMode: 'local-all',
        }}
        request={async (searchParams) => {
          // 模拟请求接口获取表格数据
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo
```

### 拼音排序

要实现按拼音排序，可以使用中文转拼音的解析库，如 [pinyin-pro](https://github.com/zh-lx/pinyin-pro)。

再通过 `sortStringValueTransform` 属性将字符串数据进行转换就可以实现按拼音排序了。

```tsx
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { pinyin } from 'pinyin-pro'

// 检查是否为中文的正则
const REG_CHINESE = /[\u4e00-\u9fa5]/

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          sortMode: 'local-all',
          sortStringValueTransform: (value) => {
            return REG_CHINESE.test(value) ? pinyin(value, { toneType: 'none' }) : value
          },
        }}
        request={async (searchParams) => {
          // 模拟请求接口获取表格数据
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo
```

## 后端排序

设置 `sortMode` 属性为 `service`，则表示后端接口排序，将调用 `request` 请求。

```tsx
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableProps } from '@schema-render/search-table-react'

const columns: ISearchTableProps['table']['columns'] = [
  {
    title: '供应商名称',
    dataIndex: 'supplier_name',
    width: 130,
  },
  {
    title: '供应商编码',
    dataIndex: 'supplier_code',
    sorter: true,
  },
  {
    title: '单据编号',
    dataIndex: 'bill_no',
    width: 130,
    sorter: true,
  },
  {
    title: '单据类型',
    dataIndex: 'bill_type',
    sortType: 'string',
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
    sorter: true,
  },
  {
    title: '商品编码',
    dataIndex: 'goods_code',
    width: 130,
  },
  {
    title: '商品分类',
    dataIndex: 'goods_category',
    sorter: true,
  },
  {
    title: '商品日期',
    dataIndex: 'goods_date',
    width: 120,
    sorter: true,
  },
]

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          sortMode: 'service',
        }}
        request={async (searchParams, { sorter }) => {
          // 排序数据
          const sortData = sorter as any

          // 模拟请求接口获取表格数据
          await sleep()
          const data = createDataSource(searchParams.pageSize, {
            sort_field: sortData?.field,
            sort_order: sortData?.order,
          })

          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo
```
