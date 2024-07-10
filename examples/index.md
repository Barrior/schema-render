---
title: SchemaRender
description: 一套更好用的表单渲染解决方案，协议驱动、简洁易用、高可定制、轻量级
keywords: ['SchemaRender', 'Form Render']
hero:
  title: SchemaRender
  description: 一套更好用的表单渲染解决方案，提升研发效率
  actions:
    - text: 立即上手
      link: /core-react/001-intro
    - text: GitHub
      link: https://github.com/Barrior/schema-render
features:
  - title: Core
    emoji: 💎
    description: 渲染内核：协议驱动、简洁易用、高可定制、轻量级（17.6k, gzip 6.5k）
    link: /core-react/001-intro
  - title: FormRender
    emoji: 🚀
    description: 基于 Core + Antd 封装的开箱即用的表单渲染库
    link: /form-render-react/001-intro
  - title: Search
    emoji: ⛵️
    description: 基于 FormRender 封装的条件搜索组件
    link: /search-react/001-intro
  - title: SearchTable
    emoji: 🛳
    description: 基于 Search + Antd Table 封装的条件搜素表格组件
    link: /search-table-react/001-intro
---

### Core 样例

内核灵活、高可定制，但需要组装必要部件 `itemLayout`（表单项布局结构）、`renderers`（渲染器集合），
然后通过一套 Schema 描述需要渲染的表单。

```jsx
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { useState, useRef } from 'react'
import { Button, message } from 'antd'

import Core from '@schema-render/core-react' // 内核
import Horizontal from './core-react/item-layout/Horizontal' // 表单项布局结构
import renderers from './core-react/renderers/common' // 渲染器集合

// Schema 描述
const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '用户名',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 20,
        placeholder: '请输入用户名，最多20个字符',
      },
      required: true,
    },
    password: {
      title: '密码',
      description: '请输入6~10个字符，只能输入英文字母和数字',
      renderType: 'Password',
      renderOptions: {
        minLength: 6,
        maxLength: 20,
      },
      required: true,
      rules: [
        { min: 6, message: '请输入至少 6 个字符' },
        { max: 20, message: '最多只能 20 个字符' },
        { pattern: '^[A-Za-z0-9]+$', message: '只能输入英文字母和数字' },
      ],
    },
    auto_login: {
      title: '自动登录',
      titleDescription: '开启后两周内自动再次登录',
      renderType: 'Switch',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})
  const coreRef = useRef()

  const handleSubmit = async () => {
    const res = await coreRef.current.validate()
    if (!res.hasError) {
      message.success('提交成功')
    }
  }

  return (
    <div className="example-layout-cols-2">
      <div>
        <Core
          ref={coreRef}
          schema={schema}
          value={value}
          onChange={setValue}
          itemLayout={Horizontal}
          renderers={renderers}
        />
        <Button
          type="primary"
          style={{ margin: '20px 0 0 115px' }}
          onClick={handleSubmit}
        >
          提交
        </Button>
      </div>
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

### FromRender 样例

`FormRender` 是基于 Core + Antd 封装的表单渲染库，内置了 `itemLayout`（表单项布局结构）、`renderers`（常用表单类渲染器集合）以及提交重置操作，以达到`开箱即用`。

```jsx
import SyntaxHighlighter from '@examples/components/SyntaxHighlighter'
import { useState } from 'react'
import { message } from 'antd'

import FormRender from '@schema-render/form-render-react' // 表单渲染库

// Schema 描述
const schema = {
  renderType: 'Root',
  properties: {
    username: {
      title: '用户名',
      renderType: 'InputText',
      renderOptions: {
        maxLength: 20,
        placeholder: '请输入用户名，最多20个字符',
      },
      required: true,
    },
    password: {
      title: '密码',
      description: '请输入6~10个字符，只能输入英文字母和数字',
      renderType: 'Password',
      renderOptions: {
        minLength: 6,
        maxLength: 20,
      },
      required: true,
      rules: [
        { min: 6, message: '请输入至少 6 个字符' },
        { max: 20, message: '最多只能 20 个字符' },
        { pattern: '^[A-Za-z0-9]+$', message: '只能输入英文字母和数字' },
      ],
    },
    auto_login: {
      title: '自动登录',
      titleDescription: '开启后两周内自动再次登录',
      renderType: 'Switch',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <div className="example-layout-cols-2">
      <FormRender
        schema={schema}
        value={value}
        onChange={setValue}
        onSubmit={() => message.success('提交成功')}
      />
      <SyntaxHighlighter value={value} />
    </div>
  )
}

export default Demo
```

### Search 样例

`Search` 是基于 FormRender 封装的开箱即用的条件搜索组件，常与表格配合用于后台管理系统数据检索与展示操作。

```jsx
import { sleep } from '@examples/utils'

// 引入 Search
import Search from '@schema-render/search-react'

// 定义 Schema
const schema = {
  renderType: 'Root',
  properties: {
    supplier_name: {
      title: '供应商名称',
      renderType: 'InputText',
    },
    supplier_code: {
      title: '供应商编码',
      renderType: 'InputText',
    },
    bill_no: {
      title: '单据编号',
      renderType: 'InputText',
    },
    bill_type: {
      title: '单据类型',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '采购单', value: 1 },
          { label: '入库单', value: 2 },
          { label: '退货单', value: 3 },
        ],
      },
    },
    bill_date: {
      title: '单据日期',
      renderType: 'DateRangePicker',
    },
    bill_status: {
      title: '单据状态',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '已提交', value: 1 },
          { label: '待提交', value: 2 },
          { label: '待审批', value: 3 },
        ],
      },
    },
    operator: {
      title: '制单人',
      renderType: 'InputText',
    },
    goods_name: {
      title: '商品名称',
      renderType: 'InputText',
    },
    goods_code: {
      title: '商品编码',
      renderType: 'InputText',
    },
    goods_category: {
      title: '商品分类',
      renderType: 'Select',
      renderOptions: {
        options: [
          { label: '水果鲜花', value: 1 },
          { label: '海鲜水产', value: 2 },
          { label: '粮油调味', value: 3 },
        ],
      },
    },
  },
}

const Demo = () => {
  // 处理搜索
  const handleSearch = async (searchParams) => {
    // 打印搜索条件
    console.log('searchParams:', searchParams)

    // 模拟请求接口等操作
    await sleep()
  }

  return <Search schema={schema} onSubmit={handleSearch} onReset={handleSearch} />
}

export default Demo
```

### SearchTable 样例

```tsx
/**
 * background: '#fff'
 */
import { sleep } from '@examples/utils'
import schema from './search-table-react/helpers/schema'
import columns from './search-table-react/helpers/columns'
import createDataSource from './search-table-react/helpers/createDataSource'

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
