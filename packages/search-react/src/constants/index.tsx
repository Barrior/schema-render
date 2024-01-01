/**
 * 内置 Action 名称
 */
export const ACTIONS = {
  submit: 'submit',
  reset: 'reset',
  collapse: 'collapse',
} as const

/**
 * 默认参数
 */
export const DEFAULT_SEARCH_PROPS = {
  prefixCls: 'schema-render',
  layoutColumnGap: 10,
  layoutRowGap: 15,
  actions: [ACTIONS.reset, ACTIONS.submit, ACTIONS.collapse],
  defaultCollapsed: true,
  collapsedRows: 2,
}

export type ISearchDefaultProps = typeof DEFAULT_SEARCH_PROPS
