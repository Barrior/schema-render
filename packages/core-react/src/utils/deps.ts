import type { IPath } from '../typings/common'
import type { ISchema } from '../typings/schema'

function isIdentifierChar(char: string | undefined): boolean {
  return !!char && /[A-Za-z0-9_$]/.test(char)
}

function skipWhitespace(source: string, index: number): number {
  let current = index

  while (current < source.length && /\s/.test(source[current])) {
    current += 1
  }

  return current
}

function readString(
  source: string,
  index: number
): { value: string; end: number } | null {
  const quote = source[index]

  if (quote !== '"' && quote !== "'" && quote !== '`') {
    return null
  }

  let value = ''
  let current = index + 1

  while (current < source.length) {
    const char = source[current]

    if (char === '\\') {
      value += source[current + 1] ?? ''
      current += 2
      continue
    }

    if (char === quote) {
      return { value, end: current + 1 }
    }

    value += char
    current += 1
  }

  return null
}

/**
 * 从 start 位置读访问链：`.a`、`["a b"]`、`[0]`
 * 遇到方法调用（`.includes(`）时丢弃方法名并结束，避免把方法当数据路径。
 */
function readAccessors(
  source: string,
  start: number
): { keys: Array<string | number>; end: number } {
  const keys: Array<string | number> = []
  let index = start

  while (index < source.length) {
    const cursor = skipWhitespace(source, index)
    const char = source[cursor]

    if (char === '.') {
      const nameStart = skipWhitespace(source, cursor + 1)
      const name = /^[A-Za-z_$][A-Za-z0-9_$]*/.exec(source.slice(nameStart))

      if (!name) {
        break
      }

      const next = skipWhitespace(source, nameStart + name[0].length)

      // 方法调用不是数据依赖
      if (source[next] === '(') {
        break
      }

      keys.push(name[0])
      index = next
      continue
    }

    if (char === '[') {
      const inner = skipWhitespace(source, cursor + 1)
      const quoted = readString(source, inner)

      if (quoted) {
        const close = skipWhitespace(source, quoted.end)

        if (source[close] !== ']') {
          break
        }

        keys.push(quoted.value)
        index = close + 1
        continue
      }

      const numeric = /^\d+/.exec(source.slice(inner))

      if (numeric) {
        const close = skipWhitespace(source, inner + numeric[0].length)

        if (source[close] !== ']') {
          break
        }

        keys.push(Number(numeric[0]))
        index = close + 1
        continue
      }

      break
    }

    break
  }

  return { keys, end: index }
}

/**
 * 从表达式里抽出它依赖的数据路径（绝对路径）。
 * - `$root.a.b` → ['a', 'b']
 * - `$.x`（parentPath = ['form']）→ ['form', 'x']
 * - `$userCtx.x` 不算数据依赖（静态配置）
 * - 返回 null 表示无法静态确定（裸 `$root` / 裸 `$`）：按「依赖全部」处理
 */
export function getStatementDeps(
  statements: Array<string | boolean | undefined>,
  parentPath: IPath
): IPath[] | null {
  const paths: IPath[] = []
  const seen = new Set<string>()

  const addPath = (path: IPath) => {
    const key = JSON.stringify(path)

    if (!seen.has(key)) {
      seen.add(key)
      paths.push(path)
    }
  }

  for (const statement of statements) {
    if (typeof statement !== 'string') {
      continue
    }

    let index = 0

    while (index < statement.length) {
      const char = statement[index]

      if (char === '"' || char === "'" || char === '`') {
        const quoted = readString(statement, index)
        index = quoted ? quoted.end : index + 1
        continue
      }

      if (char !== '$') {
        index += 1
        continue
      }

      if (
        statement.startsWith('$root', index) &&
        !isIdentifierChar(statement[index + 5])
      ) {
        const { keys, end } = readAccessors(statement, index + 5)

        if (!keys.length) {
          return null
        }

        addPath(keys)
        index = end
        continue
      }

      if (
        statement.startsWith('$userCtx', index) &&
        !isIdentifierChar(statement[index + 8])
      ) {
        index += 8
        continue
      }

      // 其它以 $ 开头的自定义标识符不作为数据根
      if (isIdentifierChar(statement[index + 1])) {
        index += 1
        continue
      }

      const { keys, end } = readAccessors(statement, index + 1)

      if (!keys.length) {
        return null
      }

      addPath([...parentPath, ...keys])
      index = end
    }
  }

  return paths
}

export interface IChildrenHiddenMeta {
  /* 字段名 → 该字段 hidden 表达式的依赖路径；null 表示无法静态解析 */
  depsByField: Map<string, IPath[] | null>
  /* 可解析子级依赖的并集；任一子级不可解析时为 null（需按全量订阅） */
  unionDeps: IPath[] | null
}

/**
 * 汇总某个容器 schema 下所有子级 `hidden` 表达式的依赖：
 * - `depsByField` 供迭代器做「按字段失效」判断；
 * - `unionDeps` 供迭代器订阅。
 */
export function getChildrenHiddenMeta(
  schema: { properties?: Record<string, ISchema> },
  parentPath: IPath
): IChildrenHiddenMeta {
  const properties = schema.properties || {}
  const depsByField = new Map<string, IPath[] | null>()
  const union: IPath[] = []
  const seen = new Set<string>()
  let hasUnknown = false

  for (const field of Object.keys(properties)) {
    const deps = getStatementDeps([properties[field]?.hidden], parentPath)
    depsByField.set(field, deps)

    if (!deps) {
      hasUnknown = true
      continue
    }

    for (const dep of deps) {
      const key = JSON.stringify(dep)

      if (!seen.has(key)) {
        seen.add(key)
        union.push(dep)
      }
    }
  }

  return { depsByField, unionDeps: hasUnknown ? null : union }
}
