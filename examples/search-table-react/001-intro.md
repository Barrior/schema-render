---
order: 1
toc: content
---

# 介绍

`SearchTable` 是基于 Search + Antd Table 封装的条件搜索表格组件。

特点：

- 开箱即用、简单易用
- 支持空数据占位符
- 支持表格高度自适应（自动计算 scrollY）
- 支持配置模式操作栏
- 支持自动添加序号

- 支持前端排序：按拼音、数字、日期排序
- 支持后端排序
- 支持“合计栏”，通过数据自动匹配

- 支持表格列隐藏或展示、排序、宽度设置（可配置接口持久化存储）
- 支持表格列宽度拖拽设置
- 自动 columns key 计算

- 支持表格数据前端查询（精准查询、模糊查询）

## 安装

```bash
npm install @schema-render/search-table-react --save
```

如果没有安装 antd，还需安装它

```bash
npm install antd --save
```

## 使用

常与表格配合用于后台管理系统数据检索与展示操作。

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
        const data = createDataSource()

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
