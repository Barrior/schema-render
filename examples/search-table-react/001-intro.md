---
order: 1
toc: content
---

# 介绍

`SearchTable` 是基于 Search + Antd Table 封装的条件搜索表格组件；常用于后台管理系统数据检索、显示与操作。

主要特性有：

- 开箱即用、简单易用
- 默认空数据占位符处理
- 默认列宽度、key 处理
- 支持表格高度自适应（一屏展示）
- 支持自动添加序号
- 支持配置式操作栏
- 支持前端排序：按拼音、数字、日期格式排序
- 支持“合计栏”，通过数据自动匹配
- 支持表格列隐藏显示、排序、宽度设置（可拖拽设置）
- 支持表格列配置持久化存储与合并算法
- 支持本地搜索（精准查询、模糊查询）

## 安装

```bash
npm install @schema-render/search-table-react --save
```

如果没有安装 antd，还需安装它

```bash
npm install antd --save
```

## 使用

最基础的用法，只需要配置三个属性

- `schema`: 搜索的条件，详解 [Search](../search-react/001-intro) 组件。
- `columns`: 表格列属性，除 [Antd Table columns](https://ant.design/components/table-cn#column) 属性外，扩展的其他特性属性见 API Reference。
- `request`: 请求数据的函数，用来请求后端数据接口，并按格式返回。
  - 参数除了 schema 声明的字段外，还包括如下分页字段。
    - `current`: 当前页码。
    - `pageSize`: 每页条数。
  - 返回字段如下。
    - `data`: 表格数据源，对应 Antd Table 的 `dataSource` 属性。
    - `total`: 总的记录数，应用于分页。
    - `summary`: 合计栏数据。

```tsx
/**
 * defaultShowCode: true
 */
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
