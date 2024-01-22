import type { ISchema } from './schema'

export type IObjectAny = IDictionary<any>

export type IWindow = typeof window

export interface IDictionary<T> {
  [index: string]: T
}

/**
 * 可以是同步状态值，也可以是 Promise 异步值
 */
export type IMaybePromise<T> = T | Promise<T>

/**
 * 让对象属性部分必填
 */
export type IPartRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

/**
 * 让对象属性部分可选
 */
export type IPartPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * 让对象属性部分可选
 * @deprecated please use IPartPartial
 */
export type IOptional<T, K extends keyof T> = IPartPartial<T, K>

/**
 * 让对象属性去掉只读限制
 */
export type IWriteable<T> = { -readonly [P in keyof T]: T[P] }

/**
 * 让对象属性去掉只读限制，深递归处理
 */
export type IDeepWriteable<T> = { -readonly [P in keyof T]: IDeepWriteable<T[P]> }

/**
 * 让对象属性变为只读，深递归处理
 */
export type IDeepReadonly<T> = {
  readonly [P in keyof T]: IDeepReadonly<T[P]>
}

export type IPath = Array<string | number>

export interface ICommonProps<S extends ISchema = ISchema> {
  // 渲染器 schema
  schema: S
  // 渲染器路径
  path: IPath
}
