import type { IRenderer } from '@schema-render/core-react'

import { ACTIONS_RENDER_TYPE } from '../constants'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'
import DateRangePicker from './DateRangePicker'
import Description from './Description'
import FromRenderActions from './FromRenderActions'
import InputNumber from './InputNumber'
import InputText from './InputText'
import ObjectRenderer from './Object'
import ObjectNull from './ObjectNull'
import Password from './Password'
import Radio from './Radio'
import Rate from './Rate'
import Select from './Select'
import SelectMultiple from './SelectMultiple'
import Switch from './Switch'
import SwitchBox from './SwitchBox'
import TextArea from './TextArea'

/**
 * 内置渲染器只依赖自身 value、schema 与静态配置（locale / userCtx 等），
 * 不读取 rootValue（本包内 grep 为 0），因此声明为值纯渲染器：
 * 其它字段变化时跳过重渲染。
 */
const pure = (renderer: IRenderer): IRenderer => ({ ...renderer, pure: true })

const renderers = {
  // 操作区只依赖 disabled，同样声明为值纯渲染器
  [ACTIONS_RENDER_TYPE]: pure(FromRenderActions),

  /**
   * 结构渲染器：只把 schema/path 交给内层 RendererIterator，
   * 子节点自己订阅数据，因此同样可以声明为值纯渲染器。
   */
  Object: pure(ObjectRenderer),
  ObjectNull: pure(ObjectNull),

  /**
   * 常规渲染器
   */
  InputText: pure(InputText),
  InputNumber: pure(InputNumber),
  Password: pure(Password),
  TextArea: pure(TextArea),
  Radio: pure(Radio),
  Checkbox: pure(Checkbox),
  Switch: pure(Switch),
  SwitchBox: pure(SwitchBox),
  DatePicker: pure(DatePicker),
  DateRangePicker: pure(DateRangePicker),
  Description: pure(Description),
  Rate: pure(Rate),
  Select: pure(Select),
  SelectMultiple: pure(SelectMultiple),
}

export type IBuiltinRenderers = Exclude<
  keyof typeof renderers,
  typeof ACTIONS_RENDER_TYPE
>

export default renderers
