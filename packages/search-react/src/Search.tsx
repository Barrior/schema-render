import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import type { IFormRenderRef, IRegisterActions } from '@schema-render/form-render-react'
import FormRender from '@schema-render/form-render-react'
import { Button } from 'antd'
import type { Ref } from 'react'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

import { DEFAULT_SEARCH_PROPS } from './constants'
import useCollapse from './hooks/useCollapse'
import zh_CN from './locale/zh_CN'
import type { ISearchProps, ISearchRef } from './typings'
import { createActionsResetSchema } from './utils/actions'

/**
 * 覆盖 submit、reset 操作，添加图标样式
 */
const overrideDefaultActions: IRegisterActions = {
  submit: ({ loading, locale }) => {
    return (
      <Button
        loading={loading.submit}
        htmlType="submit"
        type="primary"
        icon={<SearchOutlined />}
      >
        {locale.FormRender.submit}
      </Button>
    )
  },
  reset: ({ loading, locale, handleReset }) => {
    return (
      <Button loading={loading.reset} onClick={handleReset} icon={<DeleteOutlined />}>
        {locale.FormRender.reset}
      </Button>
    )
  },
}

const Search = (searchProps: ISearchProps, ref?: Ref<ISearchRef>) => {
  const props = {
    ...DEFAULT_SEARCH_PROPS,
    ...searchProps,
  }

  const formRenderRef = useRef<IFormRenderRef>(null)

  // 国际化处理
  const locale = useMemo(() => ({ ...zh_CN, ...props.locale }), [props.locale])

  // 「收起/展开」功能处理
  const { schema, registerActions } = useCollapse(props, formRenderRef)

  // Actions 样式处理
  const actionsRestSchema = useMemo(
    () => createActionsResetSchema(props.prefixCls),
    [props.prefixCls]
  )

  // 暴露 Open API
  useImperativeHandle(ref, () => formRenderRef.current!)

  return (
    <FormRender
      layout="autoFill"
      {...props}
      ref={formRenderRef}
      locale={locale}
      schema={schema}
      registerActions={{
        ...overrideDefaultActions,
        ...(registerActions as IRegisterActions),
      }}
      actionsRestSchema={actionsRestSchema}
      actionsRenderMode="formItem"
    />
  )
}

export default forwardRef(Search)
