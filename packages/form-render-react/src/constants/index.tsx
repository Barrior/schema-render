/**
 * 内置 Action 名称
 */
export const ACTIONS = {
  submit: 'submit',
  reset: 'reset',
} as const

/**
 * 内置表单行为
 */
export type IAction = keyof typeof ACTIONS | string

/**
 * 操作行为渲染模式
 * normal: 标准渲染，作为独立节点渲染在 Form 底部
 * formItem: 作为表单项渲染，提供给 @schema-render/search-react 用
 */
export const ACTIONS_RENDER_MODE = {
  normal: 'normal',
  formItem: 'formItem',
} as const

export type IActionsRenderMode = keyof typeof ACTIONS_RENDER_MODE

/**
 * FormRender 默认参数
 */
export const FORM_RENDER_DEFAULT_PROPS = {
  prefixCls: 'schema-render',
  itemLayout: 'horizontal',
  readonlyPlaceholder: '-',
  labelWidth: 100,
  labelGap: 15,
  layoutColumnGap: 10,
  layoutRowGap: 15,
  actions: [ACTIONS.submit, ACTIONS.reset],
  actionsRenderMode: ACTIONS_RENDER_MODE.normal,
  disableFormOnActionLoading: true,
  validateFormOnSubmit: true,
} as const

/**
 * Actions loading 默认状态
 */
export const ACTIONS_DEFAULT_LOADING_STATE = {
  [ACTIONS.submit]: false,
  [ACTIONS.reset]: false,
}

export type IActionsLoading = typeof ACTIONS_DEFAULT_LOADING_STATE

/**
 * Actions 渲染器名称
 */
export const ACTIONS_RENDER_TYPE = '__FORM_RENDER_ACTIONS__'

/**
 * 默认时间展示格式
 */
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'
export const DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
