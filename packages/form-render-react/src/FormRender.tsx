import type { ICoreRef } from '@schema-render/core-react'
import Core, { utils } from '@schema-render/core-react'
import type { Ref } from 'react'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

import Actions from './components/Actions'
import { ACTIONS_RENDER_MODE, FORM_RENDER_DEFAULT_PROPS } from './constants'
import FormRenderContext from './FormRenderContext'
import useActions from './hooks/useActions'
import useItemLayout from './hooks/useItemLayout'
import useSchema from './hooks/useSchema'
import * as styles from './index.style'
import zh_CN from './locale/zh_CN'
import renderers from './renderers/index'
import type {
  IFormRenderDefaultProps,
  IFormRenderProps,
  IFormRenderRef,
  IInnerFormRenderProps,
} from './typings'
import { calcActionsMarginLeft } from './utils'

const FormRender = (formRenderProps: IFormRenderProps, ref?: Ref<IFormRenderRef>) => {
  const props: IInnerFormRenderProps = {
    ...(FORM_RENDER_DEFAULT_PROPS as IFormRenderDefaultProps),
    ...formRenderProps,
  }

  const coreRef = useRef<ICoreRef>(null)

  // 暴露 Open API
  useImperativeHandle(ref, () => coreRef.current!)

  // 渲染器集合处理
  const innerRenderers = useMemo(
    () => ({ ...renderers, ...props.renderers }),
    [props.renderers]
  )

  // 国际化处理
  const locale = useMemo(() => ({ ...zh_CN, ...props.locale }), [props.locale])

  // 表单项布局结构处理
  const ItemLayout = useItemLayout(props)

  // 操作行为事件封装
  const { handleFormSubmit, handleSubmit, handleReset, actionsLoading, isLoading } =
    useActions({
      props,
      coreRef,
    })

  // 处理 Schema
  const schema = useSchema(
    utils.pick(props, 'schema', 'actionsRestSchema', 'actionsRenderMode')
  )

  // FormRender 上下文数据
  const formRenderCtx = {
    ...utils.pick(
      props,
      'labelWidth',
      'labelGap',
      'labelColon',
      'labelRender',
      'layoutColumnGap',
      'layoutRowGap',
      'actions',
      'registerActions',
      'readonlyPlaceholder'
    ),
    locale,
    actionsLoading,
    handleSubmit,
    handleReset,
  }

  // 全局禁用态处理
  const disabled = props.disableFormOnActionLoading
    ? props.disabled || isLoading
    : props.disabled

  return (
    <FormRenderContext.Provider value={formRenderCtx}>
      <form
        onSubmit={handleFormSubmit}
        className={utils.classNames(props.rootClassName, styles.formRender)}
        style={props.rootStyle}
      >
        <Core
          {...props}
          ref={coreRef}
          schema={schema}
          locale={locale}
          renderers={innerRenderers}
          itemLayout={ItemLayout}
          disabled={disabled}
        />
        {props.actionsRenderMode === ACTIONS_RENDER_MODE.normal && (
          <Actions
            disabled={disabled}
            className={utils.classNamesWithPrefix(props.prefixCls, 'form-actions')}
            style={{
              marginTop: props.layoutRowGap,
              marginLeft: calcActionsMarginLeft(props),
            }}
          />
        )}
      </form>
    </FormRenderContext.Provider>
  )
}

export default forwardRef(FormRender)
