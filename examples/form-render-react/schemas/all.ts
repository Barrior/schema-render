import type { IRootSchema } from '@schema-render/core-react'

const commonOptions = [
  { label: '成都', value: 'chengdu' },
  { label: '杭州', value: 'hangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '北京', value: 'beijing' },
]

const schema: IRootSchema = {
  renderType: 'Root',
  properties: {
    InputText: {
      title: '单行文本（InputText）',
      renderType: 'InputText',
      renderOptions: {
        placeholder: '请输入内容',
      },
    },
    InputNumber: {
      title: '数字（InputNumber）',
      renderType: 'InputNumber',
      renderOptions: {
        placeholder: '请输入数字',
      },
    },
    Switch: {
      title: '开关（Switch）',
      renderType: 'Switch',
    },
    TextArea: {
      title: '多行文本（TextArea）',
      renderType: 'TextArea',
      renderOptions: {
        placeholder: '请输入内容',
      },
    },
    Password: {
      title: '密码框（Password）',
      renderType: 'Password',
      renderOptions: {
        placeholder: '请输入密码',
      },
    },
    Select: {
      title: '单项选择器（Select）',
      renderType: 'Select',
      renderOptions: {
        placeholder: '请选择内容',
        options: commonOptions,
        mode: 'multiple',
      },
    },
    SelectMultiple: {
      title: '多项选择器（SelectMultiple）',
      renderType: 'SelectMultiple',
      renderOptions: {
        placeholder: '请选择内容',
        options: commonOptions,
      },
    },
    Radio: {
      title: '单选框（Radio）',
      renderType: 'Radio',
      renderOptions: {
        options: commonOptions,
      },
    },
    Checkbox: {
      title: '多选框（Checkbox）',
      renderType: 'Checkbox',
      renderOptions: {
        options: commonOptions,
      },
    },
    Rate: {
      title: '评分（Rate）',
      renderType: 'Rate',
    },
    DatePicker: {
      title: '日期（DatePicker）',
      renderType: 'DatePicker',
      renderOptions: {
        placeholder: '请选择日期',
        format: 'YYYY年MM月DD日',
      },
    },
    DateRangePicker: {
      title: '日期范围（DateRangePicker）',
      renderType: 'DateRangePicker',
      renderOptions: {
        placeholder: ['开始日期', '结束日期'],
      },
    },
    Description: {
      title: '纯展示（Description）',
      renderType: 'Description',
    },
    Object: {
      title: '对象容器（Object）',
      renderType: 'Object',
      properties: {
        InputText: {
          title: '单行文本（InputText）',
          renderType: 'InputText',
          renderOptions: {
            placeholder: '请输入内容',
          },
        },
        InputNumber: {
          title: '数字（InputNumber）',
          renderType: 'InputNumber',
          renderOptions: {
            placeholder: '请输入数字',
          },
        },
      },
    },
    ObjectRightIcon: {
      title: '对象容器，箭头在右边',
      renderType: 'Object',
      renderOptions: {
        headerOptions: {
          expandIconPosition: 'end',
        },
      },
      properties: {
        InputText: {
          title: '单行文本（InputText）',
          renderType: 'InputText',
          renderOptions: {
            placeholder: '请输入内容',
          },
        },
        InputNumber: {
          title: '数字（InputNumber）',
          renderType: 'InputNumber',
          renderOptions: {
            placeholder: '请输入数字',
          },
        },
      },
    },
    ObjectNotCollapse: {
      title: '对象容器，不允许折叠',
      renderType: 'Object',
      renderOptions: {
        headerOptions: {
          collapsible: 'icon',
        },
        panelOptions: {
          showArrow: false,
        },
      },
      properties: {
        InputText: {
          title: '单行文本（InputText）',
          renderType: 'InputText',
          renderOptions: {
            placeholder: '请输入内容',
          },
        },
        InputNumber: {
          title: '数字（InputNumber）',
          renderType: 'InputNumber',
          renderOptions: {
            placeholder: '请输入数字',
          },
        },
      },
    },
  },
}

export default schema
