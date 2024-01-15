import assert from 'node:assert/strict'
import vm from 'node:vm'

import classNames from '@core-react/utils/classnames'

/**
 * fork form https://github.com/JedWatson/classnames/blob/main/tests/index.js
 */
describe('classNames', () => {
  test('keeps object keys with truthy values', () => {
    assert.equal(
      classNames({
        a: true,
        b: false,
        c: 0,
        d: null,
        e: undefined,
        f: 1,
      }),
      'a f'
    )
  })

  test('joins arrays of class names and ignore falsy values', () => {
    assert.equal(classNames('a', 0, null, undefined, true, 1, 'b'), 'a 1 b')
  })

  test('supports heterogenous arguments', () => {
    assert.equal(classNames({ a: true }, 'b', 0), 'a b')
  })

  test('should be trimmed', () => {
    assert.equal(classNames('', 'b', {}, ''), 'b')
  })

  test('returns an empty string for an empty configuration', () => {
    assert.equal(classNames({}), '')
  })

  test('supports an array of class names', () => {
    assert.equal(classNames(['a', 'b']), 'a b')
  })

  test('joins array arguments with string arguments', () => {
    assert.equal(classNames(['a', 'b'], 'c'), 'a b c')
    assert.equal(classNames('c', ['a', 'b']), 'c a b')
  })

  test('handles multiple array arguments', () => {
    assert.equal(classNames(['a', 'b'], ['c', 'd']), 'a b c d')
  })

  test('handles arrays that include falsy and true values', () => {
    assert.equal(classNames(['a', 0, null, undefined, false, true, 'b']), 'a b')
  })

  test('handles arrays that include arrays', () => {
    assert.equal(classNames(['a', ['b', 'c']]), 'a b c')
  })

  test('handles arrays that include objects', () => {
    assert.equal(classNames(['a', { b: true, c: false }]), 'a b')
  })

  test('handles deep array recursion', () => {
    assert.equal(classNames(['a', ['b', ['c', { d: true }]]]), 'a b c d')
  })

  test('handles arrays that are empty', () => {
    assert.equal(classNames('a', []), 'a')
  })

  test('handles nested arrays that have empty nested arrays', () => {
    assert.equal(classNames('a', [[]]), 'a')
  })

  test('handles all types of truthy and falsy property values as expected', () => {
    assert.equal(
      classNames({
        // falsy:
        null: null,
        emptyString: '',
        noNumber: NaN,
        zero: 0,
        negativeZero: -0,
        false: false,
        undefined: undefined,

        // truthy (literally anything else):
        nonEmptyString: 'foobar',
        whitespace: ' ',
        function: Object.prototype.toString,
        emptyObject: {},
        nonEmptyObject: { a: 1, b: 2 },
        emptyList: [],
        nonEmptyList: [1, 2, 3],
        greaterZero: 1,
      }),
      'nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero'
    )
  })

  test('handles toString() method defined on object', () => {
    assert.equal(
      classNames({
        toString: () => {
          return 'classFromMethod'
        },
      }),
      'classFromMethod'
    )
  })

  test('handles objects in a VM', () => {
    const context = { classNames, output: undefined }
    vm.createContext(context)

    const code = 'output = classNames({ a: true, b: true });'

    vm.runInContext(code, context)
    assert.equal(context.output, 'a b')
  })
})
