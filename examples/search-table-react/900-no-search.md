---
group:
  title: 仅开发调试
toc: content
debug: true
---

# 隐藏搜索区域

设置 `search: false` 可隐藏搜索区域

```tsx
/**
 * defaultShowCode: true
 */
import { sleep } from '@examples/utils'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={false}
      table={{ columns }}
      request={async () => {
        // 模拟请求接口获取表格数据
        await sleep()
        const data = createDataSource()
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo
```
