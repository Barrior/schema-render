import ValueStore from '@core-react/utils/valueStore'

describe('ValueStore', () => {
  test('订阅的路径变化时才通知', () => {
    const store = new ValueStore({ age: 1, name: 'a' })
    const listener = jest.fn()

    store.subscribe([['age']], listener)

    store.setValue({ age: 1, name: 'b' })
    expect(listener).not.toHaveBeenCalled()

    store.setValue({ age: 2, name: 'b' })
    expect(listener).toHaveBeenCalledTimes(1)
  })

  test('通知时携带本次变化的路径', () => {
    const store = new ValueStore({ age: 1, name: 'a' })
    const listener = jest.fn()

    store.subscribe([['age'], ['name']], listener)
    store.setValue({ age: 2, name: 'a' })

    expect(listener).toHaveBeenCalledWith([['age']])
  })

  test('订阅整体时变更路径为 null', () => {
    const store = new ValueStore({ age: 1 })
    const listener = jest.fn()

    store.subscribe(null, listener)
    store.setValue({ age: 2 })

    expect(listener).toHaveBeenCalledWith(null)
  })

  test('paths 为 null 表示订阅整体，任何变化都通知', () => {
    const store = new ValueStore({ age: 1 })
    const listener = jest.fn()

    store.subscribe(null, listener)

    store.setValue({ age: 1, other: 1 })
    expect(listener).toHaveBeenCalledTimes(1)
  })

  test('依赖路径解析出对象时一律视为变化（嵌套对象原地修改）', () => {
    const store = new ValueStore({ form: { a: 1 } })
    const listener = jest.fn()

    store.subscribe([['form']], listener)

    store.setValue({ form: { a: 1 } })
    expect(listener).toHaveBeenCalledTimes(1)
  })

  test('取消订阅后不再通知', () => {
    const store = new ValueStore({ age: 1 })
    const listener = jest.fn()
    const unsubscribe = store.subscribe([['age']], listener)

    unsubscribe()
    store.setValue({ age: 2 })

    expect(listener).not.toHaveBeenCalled()
  })

  test('引用相同的值不触发通知', () => {
    const value = { age: 1 }
    const store = new ValueStore(value)
    const listener = jest.fn()

    store.subscribe(null, listener)
    store.setValue(value)

    expect(listener).not.toHaveBeenCalled()
  })

  test('getValue 始终返回最新值', () => {
    const store = new ValueStore({ age: 1 })

    store.setValue({ age: 2 })

    expect(store.getValue()).toEqual({ age: 2 })
  })
})
