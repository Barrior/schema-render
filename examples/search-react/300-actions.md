---
order: 300
toc: content
---

# 行为操作 actions

`Search` 除了支持 `FormRender` 的提交与重置等相关 API 外，还增加了折叠与展开操作行为。

## 折叠与展开

默认情况下表单项超过 `2` 行就会折叠，`onToggleCollapsed` 是折叠展开事件。

```tsx
import { ConfigProvider } from 'antd'
import { sleep } from '@examples/utils'
import zhCN from 'antd/locale/zh_CN'
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
  // 处理搜索
  const handleSearch: ISearchProps['onSubmit'] = async (searchParams) => {
    // 打印搜索条件
    console.log('searchParams:', searchParams)

    // 模拟请求接口并重新设置表格数据
    await sleep()
  }

  // 处理折叠事件
  const onToggleCollapsed = (isCollapsed: boolean) => {
    // 打印折叠状态
    console.log('isCollapsed:', isCollapsed)
  }

  return (
    <ConfigProvider locale={zhCN}>
      <Search
        schema={schema}
        onSubmit={handleSearch}
        onReset={handleSearch}
        onToggleCollapsed={onToggleCollapsed}
      />
    </ConfigProvider>
  )
}

export default Demo
```

## API 详解

| **参数**                | **描述**                                                   | **类型**                              | **默认值**                        |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------- | --------------------------------- |
| **actions**             | 配置操作按钮展示项及其顺序                                 | `string[]`                            | `["reset", "submit", "collapse"]` |
| **defaultCollapsed**    | 是否默认折叠                                               | `boolean`                             | `true`                            |
| **collapsedRows**       | 折叠行数                                                   | `number`                              | `2`                               |
| **calcCollapsedNumber** | 计算折叠时展示的表单项个数的算法，`container` 是根节点元素 | `(container?: HTMLElement) => number` | -                                 |
| **onToggleCollapsed**   | 「折叠/展开」切换事件                                      | `(isCollapsed: boolean) => void`      | -                                 |
