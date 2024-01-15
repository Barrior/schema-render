import { useRef } from 'react'

import type { IObjectAny } from '../typings/common'
import type { ICore } from '../typings/core'
import type { IChangeEvent } from '../typings/rootContext'
import { hasOwnProperty } from '../utils/base'
import { isFunction } from '../utils/checking'
import { stringifyPath } from '../utils/misc'
import { set } from '../utils/tinyLodash'
import useForceUpdate from './useForceUpdate'
import useMemoizedFn from './useMemoizedFn'
import useUnmountedRef from './useUnmountedRef'

/**
 * 表单 value 受控与非受控模式支持
 * 需要考虑【多渲染器内部 onChange 初始化值】场景，参考 952 调试文档
 * @param props 内核参数
 */
export default function useCoreValue(props: ICore) {
  const valueRef = useRef<IObjectAny>(props.defaultValue ?? {})
  const isUnmountedRef = useUnmountedRef()
  const { forceUpdate } = useForceUpdate()

  // 是否受控模式，存在 value 字段即为受控模式
  const isControlled = hasOwnProperty(props, 'value')

  if (isControlled) {
    valueRef.current = props.value ?? {}
  }

  // 处理回调事件
  const handleChange = useMemoizedFn((nextValue: IObjectAny, event: IChangeEvent) => {
    // 实例没有卸载时才可触发 “onChange” 事件
    if (!isUnmountedRef.current) {
      const sPath = stringifyPath(event.path)
      const eventInfo = { ...event, sPath }

      const matchedWatch = props.watch?.[sPath]

      // watch 监听模式
      if (isFunction(matchedWatch)) {
        matchedWatch(nextValue, eventInfo)
      }

      /**
       * React 18 多个子渲染器 useEffect 同时触发 onChange
       * 渲染流程不会通过应用层父组件重渲染来先更新 valueRef 的值
       * 故这里需要内部更新赋值
       */
      valueRef.current = nextValue

      // 非受控模式下内部更新，受控模式下由应用层父组件触发更新
      if (!isControlled) {
        forceUpdate()
      }

      // 单个表单项 change 事件
      props.onItemChange?.(eventInfo)

      // 整个表单数据的 change 事件
      props.onChange?.(nextValue, eventInfo)
    }
  })

  // 使 onChange 不可变
  const onChange = useMemoizedFn((event: IChangeEvent) => {
    const nextValue = set({ ...valueRef.current }, event.path, event.value)
    handleChange(nextValue, event)
  })

  // 获取表单数据
  const getValue = useMemoizedFn(() => valueRef.current)

  // 设置表单数据
  const setValue = useMemoizedFn((nextValue: IObjectAny) => {
    handleChange(nextValue, { path: [], value: undefined })
  })

  // 重置表单数据
  const resetValue = useMemoizedFn(() => {
    setValue({})
  })

  return {
    value: valueRef.current,
    valueRef,
    onChange,
    getValue,
    setValue,
    resetValue,
  }
}
