---
order: 1
toc: content
---

# 介绍

`Search` 是基于 FormRender 封装的开箱即用的条件搜索组件。

特性如下：

- 默认 `layout` 为 `autoFill` 布局
- 增加折叠展开功能，详见[行为操作 actions](./300-actions.md)

## 安装

```bash
npm install @schema-render/search-react --save
```

## 使用

常与表格配合用于后台管理系统数据检索与展示操作。

```tsx
/**
 * defaultShowCode: true
 */
import { useState } from 'react'
import { ConfigProvider, Table } from 'antd'
import { sleep } from '@examples/utils'
import zhCN from 'antd/locale/zh_CN'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'
import type { ISearchProps } from '@schema-render/search-react'

// 引入 Search
import Search from '@schema-render/search-react'

// 定义 Schema
const schema: IFormRenderRootSchema = {
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
  const [dataSource, setDataSource] = useState(() => createDataSource())

  // 处理搜索
  const handleSearch: ISearchProps['onSubmit'] = async (searchParams) => {
    // 打印搜索条件
    console.log('searchParams:', searchParams)

    // 模拟请求接口并重新设置表格数据
    await sleep()
    setDataSource(createDataSource())
  }

  return (
    <ConfigProvider locale={zhCN}>
      {/* 使用 */}
      <Search schema={schema} onSubmit={handleSearch} onReset={handleSearch} />
      <Table
        style={{ marginTop: 20 }}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 1500 }}
      />
    </ConfigProvider>
  )
}

export default Demo
```
