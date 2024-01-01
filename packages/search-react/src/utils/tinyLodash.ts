import { utils } from '@schema-render/core-react'

/**
 * ref https://lodash.com/docs/4.17.15#size
 */
export function size(value: unknown) {
  if (utils.isPlainObject(value)) {
    return Object.keys(value).length
  }

  if (utils.isArray(value)) {
    return value.length
  }

  if (utils.isString(value)) {
    return value.length
  }

  return 0
}
