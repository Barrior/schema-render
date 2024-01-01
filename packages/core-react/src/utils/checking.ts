const funcToString = Function.prototype.toString
const objectCtorString = funcToString.call(Object)

/**
 * 类型检测
 * @param value 目标值
 * @param type 预期类型
 */
export function typeChecking(value: any, type: string): boolean {
  // 直接使用 toString.call(value) 在 ie 会下报错
  return Object.prototype.toString.call(value) === type
}

/**
 * 检测 value 是否为函数
 */
export function isFunction<T extends Function>(value: any): value is T {
  return (
    typeChecking(value, '[object Function]') ||
    typeChecking(value, '[object AsyncFunction]')
  )
}

/**
 * 检测 value 是否为数组
 */
export function isArray<T extends any[]>(value: any): value is T {
  return Array.isArray(value)
}

/**
 * 检测 value 是否为 object 类型
 *
 * isObject({}) => true
 * isObject([]) => true
 * isObject(Function) => true
 * isObject(null) => false
 */
export function isObject<T extends object>(value: any): value is T {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

/**
 * 检测 value 是否为纯对象，即 {} 或 new Object() 创建的对象
 * 参见 https://lodash.com/docs/4.17.15#isPlainObject
 */
export function isPlainObject<T extends Record<string, any>>(value: any): value is T {
  if (!typeChecking(value, '[object Object]')) {
    return false
  }

  // 过滤 Object.create(null)
  const proto = Object.getPrototypeOf(value)
  if (proto === null) {
    return true
  }

  // 过滤 Object.create({}) 与 new Foo()
  const Ctor = Object.hasOwnProperty.call(proto, 'constructor') && proto.constructor

  return (
    typeof Ctor === 'function' &&
    Ctor instanceof Ctor &&
    funcToString.call(Ctor) === objectCtorString
  )
}

/**
 * 检测 value 是否为字符串
 */
export function isString<T extends string>(value: any): value is T {
  return typeof value === 'string'
}

/**
 * 检测 value 是否为数值
 */
export function isNumber<T extends number>(value: any): value is T {
  return typeof value === 'number'
}

/**
 * 检测 value 是否为布尔值
 */
export function isBoolean<T extends boolean>(value: any): value is T {
  return typeof value === 'boolean'
}

/**
 * 检测 value 是否为 Undefined
 */
export function isUndefined<T extends any>(value: any): value is T {
  return value === undefined
}

/**
 * 检测 value 是否为 Null
 */
export function isNull<T extends any>(value: any): value is T {
  return value === null
}

/**
 * 检测 value 是否为 Undefined 或者 Null
 */
export function isNil<T extends any>(value: any): value is T {
  return isUndefined(value) || isNull(value)
}
