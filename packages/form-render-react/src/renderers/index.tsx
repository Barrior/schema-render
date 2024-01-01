import { ACTIONS_RENDER_TYPE } from '../constants'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'
import DateRangePicker from './DateRangePicker'
import Description from './Description'
import FromRenderActions from './FromRenderActions'
import InputNumber from './InputNumber'
import InputText from './InputText'
import Object from './Object'
import Password from './Password'
import Radio from './Radio'
import Rate from './Rate'
import Select from './Select'
import SelectMultiple from './SelectMultiple'
import Switch from './Switch'
import TextArea from './TextArea'

const renderers = {
  [ACTIONS_RENDER_TYPE]: FromRenderActions,

  /**
   * 结构渲染器
   */
  Object,

  /**
   * 常规渲染器
   */
  InputText,
  InputNumber,
  Password,
  TextArea,
  Radio,
  Checkbox,
  Switch,
  DatePicker,
  DateRangePicker,
  Description,
  Rate,
  Select,
  SelectMultiple,
}

export type IBuiltinRenderers = Exclude<
  keyof typeof renderers,
  typeof ACTIONS_RENDER_TYPE
>

export default renderers
