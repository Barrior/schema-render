import {
  cloneDeep,
  debounce,
  dropRight,
  find,
  get,
  isMatch,
  mapKeys,
  omit,
  pick,
  set,
} from '@core-react/utils/tinyLodash'
import sleep from '@test/@helpers/sleep'

describe('cloneDeep 验证', () => {
  test('clone object should be correct', () => {
    const obj = {
      a: 0,
      b: {
        c: 'd',
        d: [1, 2, null, undefined],
      },
      x: [1, 2, BigInt('123456789')],
    }
    const result = cloneDeep(obj)
    expect(result).toEqual(obj)
    expect(result === obj).toBeFalsy()
    expect(result.b === obj.b).toBeFalsy()
  })

  test('clone array should be correct', () => {
    const arr = [
      { a: 0, b: 1 },
      { c: [3, { d: 5 }] },
      ['d', null, undefined, { x: 6, y: BigInt('123456789') }],
      'k',
      90,
    ]
    const result = cloneDeep(arr)
    expect(result).toEqual(arr)
    expect(result === arr).toBeFalsy()
    expect(result[0] === arr[0]).toBeFalsy()
  })
})

describe('mapKeys 验证', () => {
  test('test cases should be correct', () => {
    const result = mapKeys({ a: 1, b: 2 }, (value, key) => {
      return key + value
    })
    expect(result).toEqual({ a1: 1, b2: 2 })
  })
})

describe('pick 验证', () => {
  test('test cases should be correct', () => {
    const obj = { a: 1, b: '2', c: 3 }
    expect(pick(obj, 'a', 'c')).toEqual({ a: 1, c: 3 })
    expect(obj).toEqual({ a: 1, b: '2', c: 3 })
  })
})

describe('omit 验证', () => {
  test('test cases should be correct', () => {
    const obj = { a: 1, b: '2', c: 3 }
    expect(omit(obj, 'a', 'c')).toEqual({ b: '2' })
    expect(obj).toEqual({ a: 1, b: '2', c: 3 })
  })

  test('omit non object should return "{}"', () => {
    expect(omit(undefined, 'a', 'c')).toEqual({})
  })
})

describe('dropRight 验证', () => {
  test('dropRight test cases should be correct', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2])
    expect(dropRight([1, 2, 3], 2)).toEqual([1])
    expect(dropRight([1, 2, 3], 5)).toEqual([])
    expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3])
  })

  test('the original array should not be changed ', () => {
    const arr = [1, 2, 3]
    expect(dropRight(arr)).toEqual([1, 2])
    expect(arr).toEqual([1, 2, 3])
  })
})

describe('find 验证', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
    { user: 'cobbles', age: 1, active: true },
  ]

  test('function predicate should be correct', () => {
    const r1 = find(users, function (o) {
      return o.age < 50
    })
    expect(r1).toEqual({ user: 'barney', age: 36, active: true })

    const r2 = find(
      users,
      function (o) {
        return o.age < 50
      },
      1
    )
    expect(r2).toEqual({ user: 'fred', age: 40, active: false })
  })

  test('object predicate should be correct', () => {
    const r1 = find(users, { age: 1, active: true })
    expect(r1).toEqual({ user: 'pebbles', age: 1, active: true })

    const r2 = find(users, { age: 1, active: true }, 3)
    expect(r2).toEqual({ user: 'cobbles', age: 1, active: true })
  })
})

describe('isMatch 验证', () => {
  const object = { a: 1, b: 2 }

  test('should be truthy', () => {
    expect(isMatch(object, {})).toBeTruthy()
    expect(isMatch(object, { a: 1 })).toBeTruthy()
    expect(isMatch(object, { b: 2 })).toBeTruthy()
    expect(isMatch(object, { a: 1, b: 2 })).toBeTruthy()
  })

  test('should be falsy', () => {
    expect(isMatch(object, { a: 0 })).toBeFalsy()
    expect(isMatch(object, { b: 0 })).toBeFalsy()
    expect(isMatch(object, { a: 0, b: 0 })).toBeFalsy()
  })
})

describe('get 验证', () => {
  const object = { a: [{ b: { c: 3 } }] }

  test('should be correct', () => {
    expect(get(object, ['a', 0, 'b', 'c'])).toBe(3)
    expect(get(object, ['a', 1, 'b'])).toBe(undefined)
  })
})

describe('set 验证', () => {
  const object = { a: [{ b: { c: 3 } }] }

  test('should be correct', () => {
    set(object, ['a', 0, 'b', 'c'], 88)
    expect(object).toEqual({ a: [{ b: { c: 88 } }] })

    set(object, ['x', 1, 'y', 'z.1'], 99)
    expect(object).toEqual({
      a: [{ b: { c: 88 } }],
      x: [undefined, { y: { 'z.1': 99 } }],
    })
  })
})

describe('debounce 验证', () => {
  test('should debounce a function', async () => {
    let count = 0

    const debounced = debounce(() => {
      count++
    }, 30)

    expect(debounced('a')).toBe(undefined)
    expect(debounced('b')).toBe(undefined)
    expect(count).toBe(0)

    await sleep(50)
    expect(count).toBe(1)
  })

  test('should cancel invoke', async () => {
    let count = 0

    const debounced = debounce(() => {
      count++
    }, 30)

    expect(debounced('a')).toBe(undefined)
    expect(debounced('b')).toBe(undefined)

    debounced.cancel()

    await sleep(50)
    expect(count).toBe(0)
  })
})
