import type { IObjectAny, IPath } from '../typings/common'
import { get } from './tinyLodash'

/**
 * 通知携带「本次变化、且属于该订阅者关注范围」的路径集合。
 * changedPaths 为 null 表示订阅了整体（无法静态枚举），具体哪条变了未知。
 */
export type IValueListener = (changedPaths: IPath[] | null) => void

interface ISubscriber {
  /* null 表示订阅整个 rootValue */
  paths: IPath[] | null
  listener: IValueListener
  /* 每个依赖路径上一次通知时的值（原始值快照） */
  lastValues: unknown[]
}

/**
 * 按路径通知的 value store：
 * 数据变化时只通知「自己盯的路径真的变了」的订阅者，其余的不重渲染；
 * 通知时把「该订阅者关注的、真正变化了的路径」一并传出去，
 * 让消费者可以只重算依赖命中的部分，而不是整层全量重算。
 *
 * 注意：`set` 对嵌套对象是原地修改，对象引用不可靠，
 * 因此依赖路径解析出对象/数组时一律按「已变化」通知，保证正确性。
 */
export default class ValueStore {
  private value: IObjectAny

  private subscribers = new Set<ISubscriber>()

  constructor(value: IObjectAny) {
    this.value = value
  }

  getValue(): IObjectAny {
    return this.value
  }

  subscribe(paths: IPath[] | null, listener: IValueListener): () => void {
    const subscriber: ISubscriber = {
      paths,
      listener,
      lastValues: paths ? paths.map((path) => get(this.value, path)) : [],
    }

    this.subscribers.add(subscriber)

    return () => {
      this.subscribers.delete(subscriber)
    }
  }

  setValue(next: IObjectAny): void {
    if (Object.is(this.value, next)) {
      return
    }

    this.value = next

    // 先收集再通知，避免通知过程中订阅集合被修改
    const notified: Array<{
      listener: IValueListener
      changedPaths: IPath[] | null
    }> = []

    this.subscribers.forEach((subscriber) => {
      const changedPaths = this.getChangedPaths(subscriber)

      if (changedPaths === null || changedPaths.length > 0) {
        notified.push({ listener: subscriber.listener, changedPaths })
      }
    })

    notified.forEach(({ listener, changedPaths }) => listener(changedPaths))
  }

  private getChangedPaths(subscriber: ISubscriber): IPath[] | null {
    if (!subscriber.paths) {
      return null
    }

    const changedPaths: IPath[] = []

    subscriber.paths.forEach((path, index) => {
      const nextValue = get(this.value, path)

      if (typeof nextValue === 'object' && nextValue !== null) {
        subscriber.lastValues[index] = nextValue
        changedPaths.push(path)
        return
      }

      if (!Object.is(nextValue, subscriber.lastValues[index])) {
        subscriber.lastValues[index] = nextValue
        changedPaths.push(path)
      }
    })

    return changedPaths
  }
}
