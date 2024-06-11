---
order: 10
toc: content
---

# 序号与操作列

## 序号列 row-number

通过添加 `showRowNumber` 属性，可自动添加序号列。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        // 添加序号列
        showRowNumber: true,
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return {
          data,
          total: 100,
        }
      }}
    />
  )
}

export default Demo
```

## 序号列-自定义样式

通过 `rowNumberColumnData` 可配置序号列属性，对应 [Antd Table columns](https://ant.design/components/table-cn#column) 属性。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

// 自定义序号列渲染
const customRowNumberRender = (_t: string, _r: object, index: number) => {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'black',
        color: 'white',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {index + 1}
    </div>
  )
}

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        // 添加序号列
        showRowNumber: true,
        // 配置序号列属性
        rowNumberColumnData: {
          // 配置列宽度
          width: 80,
          // 自定义渲染
          render: customRowNumberRender,
        },
      }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return {
          data,
          total: 100,
        }
      }}
    />
  )
}

export default Demo
```

## 操作列 action-items
