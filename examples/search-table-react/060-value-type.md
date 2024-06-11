---
order: 60
toc: content
---

# 数据类型与显示 Value Type

## 内置数据类型

value: 'code' | 'number' | 'status'

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

## 注册数据类型
