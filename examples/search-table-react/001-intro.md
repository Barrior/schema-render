---
order: 1
toc: content
---

# 介绍

`SearchTable` 是基于 Search + Antd Table 封装的条件搜索表格组件；常用于后台管理系统数据检索、显示与操作。

主要特性有：

- 默认简单、开箱即用
- 默认空数据占位符处理
- 默认列宽度处理
- 支持表格高度自适应（一屏展示）
- 支持自动添加序号
- 支持配置式操作栏
- 支持前端排序：按拼音、数字、日期格式排序
- 支持“合计栏”，通过数据自动匹配
- 支持表格列隐藏显示、排序、宽度设置
- [WIP]支持表格列配置持久化存储与合并算法
- [WIP]支持本地搜索（精准查询、模糊查询）

## 安装

```bash
npm install @schema-render/search-table-react --save
```

如果没有安装 antd，还需安装它

```bash
npm install antd --save
```

## 使用

基本用法，只需要配置三个属性

- `schema`: 搜索的条件，详解 [Search](../search-react/001-intro) 组件。
- `columns`: 表格列属性，除 [Antd Table columns](https://ant.design/components/table-cn#column) 属性外，扩展的属性见 API Reference。
  - 注：`dataIndex` 字段需保持唯一性，`key` 字段可省略。
- `request`: 请求数据的函数，用来请求后端数据接口，并按格式返回。
  - 参数除 schema 声明的字段外，还包括分页字段。
    - `current`: 当前页码。
    - `pageSize`: 每页条数。
  - 返回字段如下。
    - `data`: 表格数据源，对应 Antd Table 的 `dataSource` 属性。
    - `total`: 总的记录数，应用于分页。
    - `summary`: 合计栏数据，详见 [合计栏 Summary](./030-table-summay.md)。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'

// 引入 Search
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{ columns }}
      request={async (searchParams) => {
        // 打印搜索条件
        console.log('searchParams:', searchParams)

        // 模拟请求接口获取表格数据
        await sleep()
        const data = createDataSource(searchParams.pageSize)

        // 返回表格数据渲染
        return {
          // 表格数据
          data,
          // 数据总数，用于分页
          total: 100,
        }
      }}
    />
  )
}

export default Demo
```

## 全功能概览

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { useState, useRef } from 'react'
import { ConfigProvider, message, Button, Tag } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { pinyin } from 'pinyin-pro'

// 检查是否为中文的正则
const REG_CHINESE = /[\u4e00-\u9fa5]/

const items = [
  { key: '1', label: '已提交' },
  { key: '2', label: '待提交' },
  { key: '3', label: '待审核' },
]

// 创建固定列
const fixedColumns = columns.map((col, index) => {
  const newCol = { ...col }

  if (index === 0) {
    newCol.fixed = 'left'
  } else if (index === columns.length - 1) {
    newCol.fixed = 'right'
  }

  return newCol
})

// 模拟删除接口
const postDeleteBill = (_id: string) => sleep()

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: Record<string, any>, index: number) => {
    return [
      {
        text: '编辑',
        onClick: () => {
          message.success(`点击了第 ${index} 个编辑`)
        },
      },
      {
        text: '详情',
        href: 'https://schema-render.js.org/',
        target: '_blank',
      },

      {
        text: '删除',
        danger: true,
        // 增加二次确认
        confirmAgain: true,
        onClick: async () => {
          // 调用删除接口
          await postDeleteBill(record.id)
          // 刷新表格数据
          STableRef.current?.refresh()
        },
      },
    ]
  }

  const tabBarExtraContent = {
    left: <Button style={{ marginRight: 16 }}>自定义左侧内容</Button>,
    right: <Button>自定义右侧内容</Button>,
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema, labelWidth: 80 }}
        title={{
          // 显示列设置
          showSetting: true,
          // 标签页
          tabs: {
            activeKey,
            items,
            onChange: setActiveKey,
            tabBarExtraContent,
          },
        }}
        table={{
          columns: fixedColumns,
          // 显示序号栏
          showRowNumber: true,
          // 添加操作列与配置个数、宽度
          actionItems,
          actionItemsCount: 3,
          actionItemsColumnData: {
            width: 180,
          },
          // 前端排序所有字段
          sortMode: 'local-all',
          sortStringValueTransform: (value) => {
            return REG_CHINESE.test(value) ? pinyin(value, { toneType: 'none' }) : value
          },
        }}
        request={async (searchParams) => {
          // 模拟请求接口获取表格数据
          await sleep()
          const data = createDataSource(searchParams.pageSize)

          // 计算商品合计总价
          const totalPrice = data
            .reduce((total, item) => total + item.goods_price, 0)
            .toFixed(2)

          return {
            data,
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
    </ConfigProvider>
  )
}

export default Demo
```
