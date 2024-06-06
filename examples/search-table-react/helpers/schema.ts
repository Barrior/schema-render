import type { IFormRenderRootSchema } from '@schema-render/form-render-react'

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

export default schema
