function truthy(value: any, message?: string) {
  value && fail(message)
}

function falsy(value: any, message?: string) {
  !value && fail(message)
}

function fail(message?: string) {
  throw new Error(`[AssertionError]: ${message ?? 'Failed'}`)
}

export default { truthy, falsy, fail }
