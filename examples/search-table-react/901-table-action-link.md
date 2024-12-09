---
group:
  title: 案例集锦
  order: 901
toc: content
---

# 操作按钮单页跳转

多数情况下可以二次封装 SearchTable 以适合自身业务的常用场景，比如在单页应用中，我们希望操作列的链接跳转是单页跳转而不是`<a>` 标签的刷新跳转，基于此需求我们以 [Next.js](https://nextjs.org/) 单页跳转二次封装如下。

```tsx {7,24-42} | pure
import { useRef, forwardRef, useImperativeHandle } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SchemaSearchTable from '@schema-render/search-table-react'
import Link from 'next/link'
import { map } from 'lodash'

import type { Ref } from 'react'
import type {
  ISearchTableProps,
  ISearchTableRef,
} from '@schema-render/search-table-react'

type IObjectAny = Record<string, any>

/**
 * 二次封装
 */
const SearchTable = forwardRef((props: ISearchTableProps, ref?: Ref<ISearchTableRef>) => {
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: IObjectAny, index: number) => {
    const items = props.table?.actionItems?.(record, index)
    return map(items, (item: IObjectAny, idx: number) => {
      // 跳转处理
      const text = item.href ? (
        <Link
          href={item.href}
          target={item.target}
          // 加唯一 key
          key={`link-${idx}`}
        >
          {item.text}
        </Link>
      ) : (
        item.text
      )
      return { ...item, text }
    })
  }

  // 开放 API
  useImperativeHandle(ref, () => STableRef.current!)

  return (
    <SchemaSearchTable
      {...props}
      ref={STableRef}
      table={{
        ...props.table,
        actionItems: props.table?.actionItems ? actionItems : undefined,
      }}
    />
  )
})

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  return (
    <SearchTable
      ref={STableRef}
      search={{ schema }}
      table={{ columns }}
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

:::info{title=温馨提示}
除此之外，还可以为操作列按钮增加「权限校验」的逻辑等（增加权限配置属性，结合 isShow 属性实现），封装方式雷同。
:::
