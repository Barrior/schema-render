import type { IObjectAny } from '../typings/common'
import { cloneDeep, mapKeys, toLower } from '../utils/tinyLodash'

interface ITraverseParams<S extends IObjectAny = IObjectAny> {
  schema: S
  parentSchema?: S
  path: string[]
  state: IObjectAny
  store: IObjectAny
}

interface IVisitorMethodParams<S extends IObjectAny = IObjectAny>
  extends ITraverseParams<S> {
  field: string
}

interface IVisitor<S extends IObjectAny = IObjectAny> {
  [type: string]: {
    enter?: (
      p: IVisitorMethodParams<S> & { traverse: (p?: Partial<ITraverseParams<S>>) => void }
    ) => void
    exit?: (p: IVisitorMethodParams<S>) => void
  }
}

interface IOptions {
  // 类型映射键值
  mapKey?: string
  // 是否 visitor 键值匹配忽略大小写
  ignoreCase?: boolean
  // 是否复制 schema 用于遍历，避免影响原始 schema
  clone?: boolean
  // 节点状态
  initialState?: IObjectAny
  // 全局存储 store
  initialStore?: IObjectAny
}

export function isInvalidTraverseSchema({ properties }: ITraverseParams['schema']) {
  return !properties || typeof properties !== 'object' || Array.isArray(properties)
}

export default function traverseSchema<S extends IObjectAny = IObjectAny>(
  schema: S,
  visitor: IVisitor<S>,
  options?: IOptions
) {
  const opts = {
    mapKey: 'renderType',
    ignoreCase: true,
    clone: true,
    initialState: {},
    initialStore: {},
    ...options,
  }

  const finalSchema = opts.clone ? cloneDeep(schema) : schema

  // 将 visitor 转换成小写
  visitor = mapKeys(visitor, (_, key) => key.toLowerCase())

  const traverse = ({ schema, path, state, store }: ITraverseParams<S>) => {
    if (isInvalidTraverseSchema(schema)) return

    Object.keys(schema.properties).forEach((field) => {
      const subSchema = schema.properties[field]
      const subPath = [...path, field]
      const currentState = cloneDeep(state)

      const params = {
        schema: subSchema,
        parentSchema: schema,
        path: subPath,
        field,
        state: currentState,
        store,
      }

      const innerTraverse = (innerParams?: Partial<ITraverseParams<S>>) => {
        traverse({
          schema: subSchema,
          path: subPath,
          state: currentState,
          ...innerParams,
          store,
        })
      }

      // $$: 匹配所有的节点类型
      const $$ = visitor.$$ ?? {}
      const $$Object = visitor.$$object ?? {}

      // 节点进入事件
      $$.enter?.({ ...params, traverse: innerTraverse })

      // special: 匹配特定的节点类型
      let nodeType = subSchema[opts.mapKey] ?? ''
      nodeType = opts.ignoreCase ? toLower(nodeType) : nodeType

      const isObjectLike = toLower(nodeType).startsWith('object')

      // 对象类型进入事件
      if (isObjectLike) {
        $$Object.enter?.({ ...params, traverse: innerTraverse })
      }

      // 特定节点进入事件
      const special = visitor[nodeType] ?? {}
      special.enter?.({ ...params, traverse: innerTraverse })

      /**
       * 节点退出事件
       */
      $$.exit?.(params)
      isObjectLike && $$Object.exit?.(params)
      special.exit?.(params)
    })
  }

  traverse({
    schema: finalSchema,
    path: [],
    state: opts.initialState,
    store: opts.initialStore,
  })

  return finalSchema
}
