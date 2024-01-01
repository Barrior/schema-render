import type { FC } from 'react'
import { Fragment } from 'react'

import useRootContext from '../hooks/useRootContext'
import type { ICommonProps } from '../typings/common'
import type { IObjectSchema, IRootSchema } from '../typings/schema'
import { stringifyPath } from '../utils/misc'
import { performStatement } from '../utils/statement'
import { get } from '../utils/tinyLodash'
import RendererDistributor from './RendererDistributor'

// export interface IBeforeEachResult {
//   // 子节点状态
//   childState?: IObjectAny
//   // 自定义渲染节点
//   node?: ReactNode
// }

// export interface IBeforeEachParams {
//   schema: ISchema
//   path: IPath
// }

// export interface IProps extends ICommonProps<IObjectSchema> {
//   onBeforeEach?: (p: IBeforeEachParams) => IBeforeEachResult
//   onAfterEach?: (p: IBeforeEachParams) => IBeforeEachResult
//   onBeforeItemRender?: () => {}
// }

const RendererIterator: FC<ICommonProps<IObjectSchema | IRootSchema>> = ({
  schema,
  path,
}) => {
  const rootCtx = useRootContext()
  const { rootValue, userCtx } = rootCtx

  // path 为 [] 表示根节点
  const value = path.length ? get(rootValue, path) : rootValue

  // 上一个 column 起始值
  let prevColumnStart = 1

  // onBeforeEach?.()

  const items = Object.keys(schema.properties).map((field) => {
    const subSchema = schema.properties[field]

    // 执行 hidden 语法
    const shouldHidden = performStatement({
      statement: subSchema.hidden,
      parentValue: value,
      rootValue,
      userCtx,
    })

    if (shouldHidden) {
      return null
    }

    const subPath = [...path, field]
    const uniqueKey = stringifyPath(subPath)

    // const res = onBeforeItemRender?.({ schema: subSchema, path: subPath })

    // // 自定义内容
    // if (res?.node !== undefined && React.isValidElement(res.node)) {
    //   return res.node
    // }

    // const rendererProps = {
    //   ...res?.state,
    //   schema: subSchema,
    //   path: subPath,
    // }

    /**
     * 计算 gridColumn 值
     * span 值如果是:   8      8       8
     * 计算结果应该是:  1/9    9/17   17/25
     */
    let gridColumn: string | undefined

    if (rootCtx.layout === 'normal') {
      let start = prevColumnStart
      let end = 25

      if (subSchema.span) {
        if (subSchema.spanStart) {
          start = subSchema.spanStart
        }
        end = start + subSchema.span
        prevColumnStart = end
      }

      gridColumn = `${start}/${end}`
    }

    const rendererProps = {
      schema: subSchema,
      path: subPath,
      gridColumn,
    }

    return <RendererDistributor key={uniqueKey} {...rendererProps} />
  })

  // onAfterEach?.()

  return <Fragment>{items}</Fragment>
}

export default RendererIterator
