import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { useMemoizedFn } from '@schema-render/core-react'
import type {
  IFormRenderRef,
  IRegisterActions,
  IRegisterActionsFn,
} from '@schema-render/form-render-react'
import { Button } from 'antd'
import type { RefObject } from 'react'
import { useMemo, useRef, useState } from 'react'

import type { IInnerSearchProps, ILocale } from '../typings'
import { calcCollapsedNumber } from '../utils/collapsedNumber'
import createDisplayedSchema from '../utils/createDisplayedSchema'
import { size } from '../utils/tinyLodash'
import useResize from './useResize'

/**
 * 「收起/展开」功能处理
 */
export default function useCollapse(
  props: IInnerSearchProps,
  formRenderRef: RefObject<IFormRenderRef>
) {
  const rawSchema = props.schema
  const [isCollapsed, setIsCollapsed] = useState(props.defaultCollapsed)
  const [collapsedNumber, setCollapsedNumber] = useState(() =>
    calcCollapsedNumber(
      formRenderRef.current?.getRootElement(),
      props.collapsedRows,
      props.calcCollapsedNumber
    )
  )
  const schemaRef = useRef(rawSchema)

  /**
   * rawSchema 变化时更新展示的 Schema, useState 的方式会渲染 2 次，所以采用 ref 的方案
   * collapsedNumber、isCollapsed 变化时更新展示的 Schema
   */
  useMemo(() => {
    schemaRef.current = createDisplayedSchema({ isCollapsed, collapsedNumber, rawSchema })
  }, [collapsedNumber, isCollapsed, rawSchema])

  /**
   * 容器元素窗口尺寸变化时，重新计算折叠个数
   */
  useResize(formRenderRef, (rootElement) => {
    setCollapsedNumber(
      calcCollapsedNumber(rootElement, props.collapsedRows, props.calcCollapsedNumber)
    )
  })

  /**
   * 事件：处理「收起/展开」
   */
  const handleCollapse = useMemoizedFn((isCollapsed: boolean) => {
    setIsCollapsed(isCollapsed)
    props.onToggleCollapsed?.(isCollapsed)
  })

  /**
   * 注册「收起/展开」按钮
   */
  const collapse: IRegisterActionsFn<ILocale> = useMemoizedFn(({ locale }) => {
    // Schema 个数未超过折叠个数则不展示「展开/收起」按钮
    if (size(rawSchema.properties) <= collapsedNumber) {
      return null
    }

    // 展开
    if (isCollapsed) {
      return (
        <Button type="link" onClick={() => handleCollapse(false)} style={{ padding: 0 }}>
          {locale?.Search?.expand}
          <DownOutlined />
        </Button>
      )
    }

    // 收起
    return (
      <Button type="link" onClick={() => handleCollapse(true)} style={{ padding: 0 }}>
        {locale?.Search?.collapse}
        <UpOutlined />
      </Button>
    )
  })

  /**
   * 注册操作行为
   */
  const registerActions: IRegisterActions<ILocale> = {
    collapse,
    ...props.registerActions,
  }

  return {
    schema: schemaRef.current,
    registerActions,
  }
}
