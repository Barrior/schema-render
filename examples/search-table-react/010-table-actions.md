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

## 序号列 - 自定义

通过 `rowNumberColumnData` 可以配置序号列属性，对应 [Antd Table columns](https://ant.design/components/table-cn#column) 属性。

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
          // 自定义宽度
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

声明 `actionItems` 属性，将添加操作列，参数详解见文底【actionItems 参数详解】。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { ConfigProvider, message } from 'antd'
import zhCN from 'antd/locale/zh_CN'

const Demo = () => {
  const actionItems = (_record: Record<string, any>, index: number) => {
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
    ]
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          // 添加操作列
          actionItems,
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
    </ConfigProvider>
  )
}

export default Demo
```

## 操作列 - 下拉菜单

按钮数量超过阈值，将以`“更多”`形式交互，默认阈值为 `2`，可通过 `actionItemsCount` 修改阈值。

下拉框属性可通过 `actionItemsDropdownProps` 配置，对应 Antd [Dropdown](https://ant.design/components/dropdown-cn#api) 属性。

```tsx
import { useRef } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { ConfigProvider, message } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// 模拟删除接口
const postDeleteBill = (_id: string) => sleep()

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: Record<string, any>, index: number) => {
    return [
      {
        text: '编辑',
        onClick: () => {
          message.success(`点击第 ${index} 编辑了`)
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

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema }}
        table={{
          columns,
          // 添加操作列
          actionItems,
          // 为操作按钮下拉菜单添加特定样式类名
          actionItemsDropdownProps: {
            overlayClassName: 'my-dropdown-class-name',
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
    </ConfigProvider>
  )
}

export default Demo
```

## 操作列 - 自定义

通过 `actionItemsColumnData` 可以配置操作列属性，同样对应 Antd Table columns 值。

```tsx
import { useRef } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import type { ISearchTableRef } from '@schema-render/search-table-react'
import { ConfigProvider, message } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// 模拟删除接口
const postDeleteBill = (_id: string) => sleep()

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: Record<string, any>) => {
    return [
      {
        text: (
          <a
            href="https://schema-render.js.org/"
            style={{ color: 'green', padding: '0 7px' }}
          >
            编辑
          </a>
        ),
      },
      {
        text: '详情',
        href: 'https://schema-render.js.org/',
        target: '_blank',
      },
      {
        text: '删除',
        danger: true,
        confirmAgain: true,
        confirmProps: {
          title: '温馨提示',
          description: `您确定要删除【${record.supplier_code}】供应商吗？`,
        },
        onClick: async () => {
          // 调用删除接口
          await postDeleteBill(record.id)
          // 刷新表格数据
          STableRef.current?.refresh()
        },
      },
    ]
  }

  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        ref={STableRef}
        search={{ schema }}
        table={{
          columns,
          actionItems,
          actionItemsCount: 3,
          // 设置操作列属性，如宽度
          actionItemsColumnData: {
            width: 180,
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
    </ConfigProvider>
  )
}

export default Demo
```

## actionItems 参数详解

### 函数参数

| **参数**   | **说明**   | **类型**              |
| ---------- | ---------- | --------------------- |
| **record** | 当前行数据 | `Record<string, any>` |
| **index**  | 当前行索引 | `number`              |

### 函数返回值

除了 Antd [Button](https://ant.design/components/button-cn#api) 属性外，还支持如下参数。

| **参数**         | **说明**                                                                                   | **类型**                                                     |
| ---------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| **text**         | 操作文案                                                                                   | `string \| ReactNode`                                        |
| **isShow**       | 是否展示                                                                                   | `boolean`                                                    |
| **confirmAgain** | 是否增加「二次确认」                                                                       | `boolean`                                                    |
| **confirmProps** | 二次确认属性，对应 Antd [Popconfirm](https://ant.design/components/popconfirm-cn#api) 属性 | `object`                                                     |
| **onClick**      | 点击事件，返回 Promise 将添加 loading 效果                                                 | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` |
