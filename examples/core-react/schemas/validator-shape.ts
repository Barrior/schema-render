import type { IRootSchema } from '@schema-render/core-react'

export default {
  renderType: 'Root',
  title: '校验器 - shape',
  properties: {
    title: {
      renderType: 'InputText',
      renderOptions: {
        minLength: 8,
        maxLength: 20,
        placeholder: '请输入标题，8-20个字符',
      },
      title: '标题',
      required: true,
      rules: [
        { min: 8, message: '至少输入 8 个字符' },
        { pattern: '^[a-zA-Z]*$', message: '只能填入英文字母' },
      ],
    },
    object: {
      renderType: 'Object',
      title: '对象类型',
      titleDescription: '对象类型 Tooltip',
      properties: {
        title: {
          renderType: 'InputText',
          title: '内容',
          required: true,
        },
      },
    },
    // 实验 Object 数据类型 Rules 规则
    objectDataType: {
      renderType: 'ComposeODT',
      title: '寄件信息',
      // required: true,
      rules: [
        { type: 'object', required: true, message: '请完善快递信息' },
        {
          type: 'object',
          shape: {
            payType: { type: 'string', required: true, message: '请选择是寄付还是到付' },
            address: { type: 'string', required: true, message: '请完善收件地址' },
          },
        },
      ],
    },
    // 实验 Array 数据类型 Rules 规则
    arrayDataType: {
      renderType: 'ComposeADT',
      title: 'Array 信息',
      rules: [
        { type: 'array', required: true, message: '请完善列表信息' },
        { type: 'array', min: 2, message: '列表数据最少 2 项' },
        { type: 'array', max: 10, message: '列表数据最多 10 项' },
        {
          type: 'array',
          shape: {
            payType: { type: 'string', required: true, message: '请选择是寄付还是到付' },
            address: { type: 'string', required: true, message: '请完善收件地址' },
          },
        },
      ],
    },
  },
} as IRootSchema
