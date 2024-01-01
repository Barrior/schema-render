import type { IObjectAny } from './common'

// 数据类型
export type IType = 'string' | 'number' | 'boolean' | 'object' | 'array'

export interface IRuleItem {
  // 校验的数据类型
  type?: IType
  // 是否必填，任何类型都生效
  required?: boolean
  // 最小值/最小长度，仅 number、string、array 类型生效
  // string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度
  min?: number
  // 最大值/最大长度，仅 number、string、array 类型生效
  // string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度
  max?: number
  // 长度匹配，仅 string、number、array 类型生效
  // string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度
  len?: number
  // 正则匹配，仅 string 类型生效
  pattern?: string
  // 全局校验器
  validator?: string
  // 错误提示信息
  message?: string
}

export interface IBaseSchema<RT extends string = string> {
  // 保留字段，纯数据类型
  type?: IType

  // 渲染类型，对应渲染组件名称
  renderType: RT
  // 渲染参数，透传给渲染组件的参数
  renderOptions?: IObjectAny

  // 标题
  title?: string
  // 标题的描述，常渲染为 Tooltip
  titleDescription?: string
  // 描述
  description?: string

  /**
   * 表达式支持变量如下
   * $: 当前对象
   * $root: 当前表单数据
   * $userCtx: userCtx 数据
   */
  // 是否必填，支持表达式
  required?: boolean | string
  // 是否禁用，支持表达式
  disabled?: boolean | string
  // 是否只读，支持表达式
  readonly?: boolean | string
  // 是否隐藏，支持表达式
  // 隐藏的字段不会在展示，但数据仍然存在
  hidden?: boolean | string

  /** UI 属性 * */
  // 表单项类名
  className?: string
  // 表单项样式
  style?: IObjectAny
  // 表单项栅格大小
  span?: number
  // 表单项栅格起始位置，无则根据上一个表单项栅格大小自动往后计算
  spanStart?: number

  // 数据校验
  rules?: IRuleItem[]

  // RFC: 数据联动协议
  // dependencies: ['select', 'select.name'],

  // 用户扩展元数据
  [metaKey: string]: any
}

export interface IArraySchema<RT extends string = string> extends IBaseSchema {
  /**
   * 以 Array 开头的类型被视为 Array 结构，如: Array, ArrayA, ArrayB
   */
  renderType: `Array${string}` | RT
  /**
   * 数组的每一项
   */
  items: IObjectSchema<RT>
}

// IObjectSchema 无法使用 RT，需要解决
export interface IObjectSchema<RT extends string = string> extends IBaseSchema {
  /**
   * 以 Object 开头的类型被视为 Object 结构，如: Object, ObjectA, ObjectB
   */
  renderType: `Object${string}` | RT
  /**
   * 对象的每一项
   */
  properties: Record<string, ISchema<RT>>
}

export type IStructSchema<RT extends string = string> =
  | IObjectSchema<RT>
  | IArraySchema<RT>

export type ISchema<RT extends string = string> = IStructSchema<RT> | IBaseSchema<RT>

export type IRootSchema<RT extends string = string> = {
  renderType: 'Root'
  properties: Record<string, ISchema<RT>>
  [metaKey: string]: any
}
