---
order: 60
toc: content
---

# 数据显示 Value Type

为了提升一些常规数据内容的渲染研发效率，如数字金额千分位处理、图片显示、代码块显示等，SearchTable 扩展了 Antd Table 组件的 `column` 属性，增加了 `valueType` 属性，数字千分位处理只需声明 `valueType` 为 `comma-number`，数据的显示就会自动做千分位处理。

## 内置数据显示类型全览

```tsx
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns-value-type'
import createDataSource from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          showRowNumber: true,
          sortMode: 'local-all',
        }}
        request={async (searchParams) => {
          // 模拟请求接口获取表格数据
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo
```

函数方式，可以用来传递参数，如下示例，彩色标签。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'
import type { IColumnType } from '@schema-render/search-table-react'

const columns: IColumnType[] = [
  {
    title: '常规标题',
    dataIndex: 'title',
  },
  {
    title: '彩色标签',
    dataIndex: 'tags',
    // 函数格式，接收当前行数据 record
    valueType: (record: Record<string, any>) => {
      return {
        // 必须返回 type 字段，对应数据显示类型
        type: 'tags',
        // 其他参数，将透传给类型渲染组件，对应组件接收的 options 字段
        color: Array.isArray(record.tags) ? 'blue' : 'green',
      }
    },
  },
]

const Demo = () => {
  return (
    <SearchTable
      search={{ schema }}
      table={{
        columns,
        sortMode: 'local-all',
      }}
      request={async (searchParams) => {
        // 模拟请求接口获取表格数据
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo
```

## 内置数据显示类型参数详解

| **参数**            | **描述**            | **数据值类型**       | **传参说明**                                                       |
| ------------------- | ------------------- | -------------------- | ------------------------------------------------------------------ |
| **code**            | 代码块形式显示      | `string`             | -                                                                  |
| **rate**            | 评分形式显示        | `number`             | Antd Rate 组件参数                                                 |
| **switch**          | 开关形式显示        | `boolean \| 1 \| 0`  | Antd Switch 组件参数                                               |
| **images**          | 图片预览形式显示    | `string \| string[]` | Antd Image 组件参数                                                |
| **tags**            | 标签形式            | `string \| string[]` | Antd Tag 组件参数                                                  |
| **comma-number**    | 数字千分位处理显示  | `number \| string`   | -                                                                  |
| **percent**         | 数字加百分号显示    | `number \| string`   | -                                                                  |
| **long-text**       | 长文案 tooltip 显示 | `number \| string`   | `maxLength:` 溢出省略长度，默认为 10，其他为 Antd Tooltip 组件参数 |
| **long-text-modal** | 长文案点击弹窗显示  | `number \| string`   | `maxLength:` 溢出省略长度，默认为 10，其他为 Antd Modal 组件参数   |

## 注册数据显示类型

通过 `registerValueType` 属性可以注册自定义的数据显示类型，同名将覆盖。

```tsx
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { ConfigProvider, Tag } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import createDataSource from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'
import type { IColumnType, ITableProps } from '@schema-render/search-table-react'

const columns: IColumnType<'deploy-status' | 'deploy-status-tag'>[] = [
  {
    title: '常规标题',
    dataIndex: 'title',
  },
  {
    title: '代码块',
    dataIndex: 'code',
    valueType: 'code',
  },
  {
    title: '部署状态',
    dataIndex: 'deploy_status',
    valueType: 'deploy-status',
  },
  {
    title: '部署状态(Tag)',
    dataIndex: 'deploy_status_tag',
    valueType: 'deploy-status-tag',
  },
]

const DEPLOY_STATUS_MAP = {
  0: {
    text: '异常',
    style: { background: 'red' },
    color: 'red',
  },
  1: {
    text: '进行中',
    style: { background: 'blue' },
    color: 'blue',
  },
  2: {
    text: '成功',
    style: { background: 'green' },
    color: 'green',
  },
}

// 注册数据显示类型
const registerValueType: ITableProps['registerValueType'] = {
  /**
   * 自定义代码块显示，覆盖内置方案
   */
  code: ({ value }) => <SyntaxHighlighter value={value} language="js" />,
  /**
   * 自定义部署状态类型
   */
  'deploy-status': ({ value }) => {
    const status = DEPLOY_STATUS_MAP[value as keyof typeof DEPLOY_STATUS_MAP]
    return (
      <div>
        <span
          style={{
            display: 'inline-block',
            width: 8,
            height: 8,
            borderRadius: '50%',
            marginRight: 6,
            ...status.style,
          }}
        />
        {status.text}
      </div>
    )
  },
  /**
   * 自定义部署状态 Tag 方案
   */
  'deploy-status-tag': ({ record }) => {
    // 因为数据中没有 deploy-status-tag 字段，所以从 deploy_status 字段取值。实际上最好一一对应。
    const value = record.deploy_status
    const status = DEPLOY_STATUS_MAP[value as keyof typeof DEPLOY_STATUS_MAP]
    return <Tag color={status.color}>{status.text}</Tag>
  },
}

const Demo = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <SearchTable
        search={{ schema }}
        table={{
          columns,
          showRowNumber: true,
          sortMode: 'local-all',
          registerValueType,
        }}
        request={async (searchParams) => {
          // 模拟请求接口获取表格数据
          await sleep()
          const data = createDataSource(searchParams.pageSize)
          return { data, total: 100 }
        }}
      />
    </ConfigProvider>
  )
}

export default Demo
```
