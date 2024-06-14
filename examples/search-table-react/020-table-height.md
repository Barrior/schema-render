---
order: 20
toc: content
---

# 高度自适应 AutoScrollY

自动计算 `scrollY` 的值

```tsx
/**
 * defaultShowCode: true
 */
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      style={{
        // 保证 SearchTable 高度存在
        height: 500,
      }}
      search={{ schema }}
      table={{
        columns,
        // 开启自动滚动 Y 轴计算
        autoScrollY: true,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo
```
