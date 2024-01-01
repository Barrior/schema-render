/* eslint-disable */
// @ts-nocheck
/**
 * fork from https://github.com/JedWatson/classnames/blob/main/index.js
 */
const hasOwn = {}.hasOwnProperty

type Value = string | number | boolean | undefined | null
type Mapping = Record<string, unknown>
type Argument = Value | Mapping | ArgumentArray | ReadonlyArgumentArray

interface ReadonlyArgumentArray extends ReadonlyArray<Argument> {}
interface ArgumentArray extends Array<Argument> {}

type IClassNames = (...args: ArgumentArray) => string

export type IClassNamesParams = ArgumentArray

function classNames() {
  const classes = []

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (!arg) continue

    const argType = typeof arg

    if (argType === 'string' || argType === 'number') {
      classes.push(arg)
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames.apply(null, arg)
        if (inner) {
          classes.push(inner)
        }
      }
    } else if (argType === 'object') {
      if (
        arg.toString !== Object.prototype.toString &&
        !arg.toString.toString().includes('[native code]')
      ) {
        classes.push(arg.toString())
        continue
      }

      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
}

export default classNames as IClassNames
