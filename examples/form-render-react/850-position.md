---
group:
  title: 复杂案例
  order: 850
---

# 自由位置布局

通过在 `Schema` 上指定 `span` 和 `spanStart` 可以控制表单项特定的`宽度`和`位置`，详情见[栅格布局-自定义宽度](../core-react/100-layout#栅格布局-自定义宽度)。

```tsx
/**
 * defaultShowCode: true
 */
import FormRender from '@schema-render/form-render-react'
import type {
  IFormRenderRootSchema,
  IFormRenderProps,
} from '@schema-render/form-render-react'
import renderers from './renderers'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    settlement_mode: {
      title: '结算周期名称',
      renderType: 'InputText',
      description: '支持中文、字母、数字、下划线(_)，不能包含空格',
      span: 16,
    },
    supplier_name: {
      title: '供应商名称',
      renderType: 'InputText',
      // 通过 span 设置表单项为 50% 的宽度（12/24）
      span: 8,
      // 通过 spanStart 设置表单项从第一个栅格开始布局，即新起一行
      spanStart: 1,
    },
    // 后面的表单项会自动计算，跟随上一个表单项的位置
    supplier_code: {
      title: '供应商编码',
      renderType: 'InputText',
      span: 8,
    },
    bank_name: {
      title: '开户银行名称',
      renderType: 'BankSelect',
      span: 8,
      spanStart: 1,
    },
    bank_branch_name: {
      title: '开户支行名称',
      renderType: 'BankSelect',
      span: 8,
    },
    bank_account: {
      title: '开户银行账号',
      renderType: 'BankSelect',
      span: 8,
    },
    // 当 span 和 spanStart 都未定义时，自动恢复常规模式（占满一行）
    cooperation: {
      title: '合作方式',
      renderType: 'Radio',
      renderOptions: {
        options: [
          { label: '购销', value: 1 },
          { label: '代销', value: 2 },
        ],
      },
    },
    payment: {
      title: '付款方式',
      renderType: 'Radio',
      renderOptions: {
        options: [
          { label: '线上支付', value: 1 },
          { label: '线下支付', value: 2 },
        ],
      },
    },
  },
}

// 联动逻辑处理
const bankRelation: IFormRenderProps['onChange'] = (formData, event) => {
  formData.bank_id = event.extra.bank_id
  formData.bank_account = event.extra.bank_account
  formData.bank_name = event.extra.bank_name
  formData.bank_branch_name = event.extra.bank_branch_name
}

const Demo = () => {
  return (
    <FormRender
      schema={schema}
      renderers={renderers}
      /* 监听关联表单项变化，联动逻辑处理 */
      watch={{
        bank_account: bankRelation,
        bank_name: bankRelation,
        bank_branch_name: bankRelation,
      }}
    />
  )
}

export default Demo
```
