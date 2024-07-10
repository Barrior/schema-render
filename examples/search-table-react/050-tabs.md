---
order: 50
toc: content
---

# 标签页 Tabs

## 基础用法

`title.tabs` 属性可定义标签页切换功能，切换后会再次调用 `request` 函数。API 与 Antd [Tabs](https://ant-design.antgroup.com/components/tabs-cn#api) 组件一致。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { useState } from 'react'

const items = [
  { key: '1', label: '已提交' },
  { key: '2', label: '待提交' },
  { key: '3', label: '待审核' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // 打印 activeKey 值
        console.log('activeKey:', activeKey)

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

## 分类不同列数据

```tsx
import { useState } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import columnsVT from './helpers/columns-value-type'
import createDataSource from './helpers/createDataSource'
import createDataSourceVT from './helpers/createDataSource-vt'
import SearchTable from '@schema-render/search-table-react'

const items = [
  { key: '1', label: '分类一' },
  { key: '2', label: '分类二' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <SearchTable
      search={{ schema }}
      title={{
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{
        columns: activeKey === '1' ? columns : columnsVT,
        showRowNumber: true,
        actionItems: () => [{ text: '编辑' }, { text: '详情' }],
      }}
      request={async (searchParams) => {
        // 模拟请求接口获取表格数据
        await sleep()
        const fetchData = activeKey === '1' ? createDataSource : createDataSourceVT
        const data = fetchData(searchParams.pageSize)

        // 主动抛错，验证异常场景
        if (Math.random() > 0.7) throw new Error('抛出一个错误')

        return { data, total: 100 }
      }}
    />
  )
}

export default Demo
```

## 开启列设置

设置 `showSetting` 属性为 `true` 可以开启列设置功能。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { useState } from 'react'

const items = [
  { key: '1', label: '已提交' },
  { key: '2', label: '待提交' },
  { key: '3', label: '待审核' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
        },
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // 打印 activeKey 值
        console.log('activeKey:', activeKey)

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

## 单开列设置

仅开启列设置功能时，标题栏 DOM 结构有变化，不存在 Tabs 组件 DOM 结构。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'

const Demo = () => {
  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        showSetting: true,
      }}
      table={{ columns }}
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

## 自定义两侧内容

使用 Antd Tabs 自带的 `tabBarExtraContent` 属性实现。

```tsx
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SearchTable from '@schema-render/search-table-react'
import { useState } from 'react'
import { Button } from 'antd'

const items = [
  { key: '1', label: '已提交' },
  { key: '2', label: '待提交' },
  { key: '3', label: '待审核' },
]

const Demo = () => {
  const [activeKey, setActiveKey] = useState('1')

  const tabBarExtraContent = {
    left: <Button style={{ marginRight: 16 }}>左侧内容</Button>,
    right: <Button>右侧内容</Button>,
  }

  return (
    <SearchTable
      search={{ schema, labelWidth: 80 }}
      title={{
        showSetting: true,
        tabs: {
          activeKey,
          items,
          onChange: setActiveKey,
          tabBarExtraContent,
        },
      }}
      table={{ columns }}
      request={async (searchParams) => {
        // 打印 activeKey 值
        console.log('activeKey:', activeKey)

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
