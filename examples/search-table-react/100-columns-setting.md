---
order: 100
toc: content
---

# 列配置 Columns Setting

- 隐藏与显示
- 排序
- 宽度设置
- 持久化存储与合并算法

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
      table={{
        columns,
        showRowNumber: true,
      }}
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
