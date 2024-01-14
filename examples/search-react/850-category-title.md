---
group:
  title: 案例集锦
  order: 850
toc: content
---

# 分类标题

分类标题实现方式有两种：

- 通过 Object 对象渲染器，会改变表单数据结构
- 设置分类标题表单项占满一行，不改变表单数据结构

## Object 对象渲染器实现

```tsx
import Search from '@schema-render/search-react'
import type { ISearchProps } from '@schema-render/search-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'
import BankSelect from './renderers/BankSelect'
import ObjectSectionTitle from './renderers/ObjectSectionTitle'

const renderers = {
  BankSelect,
  ObjectSectionTitle,
}

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    basic: {
      title: '基础信息',
      renderType: 'ObjectSectionTitle',
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
        bill_date: {
          title: '单据日期',
          renderType: 'DateRangePicker',
        },
        goods_name: {
          title: '商品名称',
          renderType: 'InputText',
        },
        goods_code: {
          title: '商品编码',
          renderType: 'InputText',
        },
      },
    },
    payment: {
      title: '付款信息',
      renderType: 'ObjectSectionTitle',
      properties: {
        bank_name: {
          title: '开户银行名称',
          renderType: 'BankSelect',
        },
        bank_branch_name: {
          title: '开户支行名称',
          renderType: 'BankSelect',
        },
        bank_account: {
          title: '开户银行账号',
          renderType: 'BankSelect',
        },
      },
    },
    collection: {
      title: '收款信息',
      renderType: 'ObjectSectionTitle',
      properties: {
        bank_name: {
          title: '开户银行名称',
          renderType: 'BankSelect',
        },
        bank_branch_name: {
          title: '开户支行名称',
          renderType: 'BankSelect',
        },
        bank_account: {
          title: '开户银行账号',
          renderType: 'BankSelect',
        },
      },
    },
  },
}

// 联动逻辑处理
const bankRelationFn = (filed: string) => {
  const watchFn: ISearchProps['onChange'] = (formData, event) => {
    formData[filed].bank_id = event.extra.bank_id
    formData[filed].bank_account = event.extra.bank_account
    formData[filed].bank_name = event.extra.bank_name
    formData[filed].bank_branch_name = event.extra.bank_branch_name
  }
  return watchFn
}

const paymentBankRelation = bankRelationFn('payment')
const collectionBankRelation = bankRelationFn('collection')

const Demo = () => {
  return (
    <Search
      defaultCollapsed={false}
      // 将外层的 gridTemplateColumns 样式去掉，让对象标题可以占满一行
      style={{ gridTemplateColumns: 'auto' }}
      schema={schema}
      renderers={renderers}
      actions={['collapse']}
      /* 监听关联表单项变化，联动逻辑处理 */
      watch={{
        'payment.bank_account': paymentBankRelation,
        'payment.bank_name': paymentBankRelation,
        'payment.bank_branch_name': paymentBankRelation,
        'collection.bank_account': collectionBankRelation,
        'collection.bank_name': collectionBankRelation,
        'collection.bank_branch_name': collectionBankRelation,
      }}
    />
  )
}

export default Demo
```

## 表单项占满一行实现

```tsx
import Search from '@schema-render/search-react'
import type { ISearchProps } from '@schema-render/search-react'
import type { IFormRenderRootSchema } from '@schema-render/form-render-react'
import BankSelect from './renderers/BankSelect'
import SectionTitle from './renderers/SectionTitle'

const renderers = {
  BankSelect,
  SectionTitle,
}

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    _section_title_x1: {
      title: '基础信息',
      renderType: 'SectionTitle',
    },
    supplier_name: {
      title: '供应商名称',
      renderType: 'InputText',
      spanStart: 1,
    },
    supplier_code: {
      title: '供应商编码',
      renderType: 'InputText',
    },
    bill_no: {
      title: '单据编号',
      renderType: 'InputText',
    },
    bill_date: {
      title: '单据日期',
      renderType: 'DateRangePicker',
    },
    goods_name: {
      title: '商品名称',
      renderType: 'InputText',
    },
    goods_code: {
      title: '商品编码',
      renderType: 'InputText',
    },
    _section_title_x2: {
      title: '付款信息',
      renderType: 'SectionTitle',
      spanStart: 1,
    },
    payment_bank_name: {
      title: '开户银行名称',
      renderType: 'BankSelect',
      spanStart: 1,
    },
    payment_bank_branch_name: {
      title: '开户支行名称',
      renderType: 'BankSelect',
    },
    payment_bank_account: {
      title: '开户银行账号',
      renderType: 'BankSelect',
    },
    _section_title_x3: {
      title: '收款信息',
      renderType: 'SectionTitle',
      spanStart: 1,
    },
    collection_bank_name: {
      title: '开户银行名称',
      renderType: 'BankSelect',
      spanStart: 1,
    },
    collection_bank_branch_name: {
      title: '开户支行名称',
      renderType: 'BankSelect',
    },
    collection_bank_account: {
      title: '开户银行账号',
      renderType: 'BankSelect',
    },
    _section_title_x4: {
      title: '其他信息',
      renderType: 'SectionTitle',
      spanStart: 1,
    },
    reason: {
      title: '事由',
      renderType: 'InputText',
      spanStart: 1,
      style: {
        // 表单项实际宽度通过 style.width 设置
        width: 'calc(100vw - 635px)',
      },
    },
    remark: {
      title: '备注',
      renderType: 'TextArea',
      renderOptions: {
        rows: 1,
      },
      style: {
        // Search 模式下，不支持 span 属性，可以通过 style 属性设置
        gridColumn: '1/3',
      },
    },
  },
}

// 联动逻辑处理
const bankRelationFn = (filed: string) => {
  const watchFn: ISearchProps['onChange'] = (formData, event) => {
    formData[`${filed}_bank_id`] = event.extra.bank_id
    formData[`${filed}_bank_account`] = event.extra.bank_account
    formData[`${filed}_bank_name`] = event.extra.bank_name
    formData[`${filed}_bank_branch_name`] = event.extra.bank_branch_name
  }
  return watchFn
}

const paymentBankRelation = bankRelationFn('payment')
const collectionBankRelation = bankRelationFn('collection')

// 计算折叠个数算法调整，增加标题项保留
const calcCollapsedNumber: ISearchProps['calcCollapsedNumber'] = (container) => {
  // 容器不存在，返回兜底默认值
  if (!container) {
    return 5
  }

  // 容器宽度
  const containerWidth = container.clientWidth

  // 子节点宽度
  const childWidth =
    container
      .querySelector('.schema-render-form-item:nth-of-type(2)')
      ?.getBoundingClientRect()?.width || 320

  // 计算折叠个数
  return Math.floor(containerWidth / childWidth) * 2
}

const Demo = () => {
  return (
    <Search
      defaultCollapsed={false}
      schema={schema}
      renderers={renderers}
      actions={['collapse']}
      /* 监听关联表单项变化，联动逻辑处理 */
      watch={{
        payment_bank_account: paymentBankRelation,
        payment_bank_name: paymentBankRelation,
        payment_bank_branch_name: paymentBankRelation,
        collection_bank_account: collectionBankRelation,
        collection_bank_name: collectionBankRelation,
        collection_bank_branch_name: collectionBankRelation,
      }}
      calcCollapsedNumber={calcCollapsedNumber}
    />
  )
}

export default Demo
```
