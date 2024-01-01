import type { IRootSchema } from '@core-react/index'

export function wrapRootSchema(properties: IRootSchema['properties'] = {}) {
  return {
    renderType: 'Root',
    properties,
  } as const
}
