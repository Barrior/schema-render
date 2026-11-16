---
group:
  title: 性能测试
  order: 890
toc: content
---

# 性能测试

## 600

600 个表单项联动性能测试，丝滑流畅

```jsx
import Core from '@schema-render/core-react'
import { useState, Profiler } from 'react'

const VerticalItemLayout = ({ schema, body }) => {
  return (
    <>
      <h4>{schema.title}</h4>
      <div>{body}</div>
    </>
  )
}

const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: 6,
  padding: 8,
  width: '100%',
  boxSize: 'border-box',
}

const renderers = {
  InputText: {
    // 只依赖自身 value / schema，声明为值纯渲染器：
    // 其它字段变化时本字段跳过重渲染（联动写入的字段仍会更新）
    pure: true,
    component: ({ schema, value, onChange }) => {
      return (
        <div style={{ display: 'flex' }}>
          <input
            style={inputStyle}
            placeholder={`请输入${schema.title}`}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )
    },
  },
}

/**
 * 生成表单项 schema
 */
const quantity = 600
const schema = { renderType: 'Root', properties: {} }
const numbers = [...Array(quantity).keys()]

numbers.forEach((num) => {
  const field = `field_${num}`
  schema.properties[field] = {
    title: field,
    renderType: 'InputText',
  }
})

const layoutMinMax = ['100px', '1fr']

const Demo = () => {
  const [value, setValue] = useState({})
  const [profileData, setProfileData] = useState('')

  // 随机联动
  const handleChange = (formData, event) => {
    const currentIndex = parseInt(event.sPath.slice(6))
    const prev = currentIndex - 1
    const next = currentIndex + 1
    const field = `field_${next >= quantity ? prev : next}`
    formData[field] = event.value
    setValue(formData)
  }

  return (
    <Profiler
      id="sr"
      onRender={(_id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        const msg = `[${quantity}] 操作: ${phase}, 渲染耗时: ${actualDuration.toFixed(
          1
        )} ms (实际生产环境中性能会好那么一点，因为没有使用 Profiler 性能分析)`

        const elem = document.getElementById('profile-600')
        elem && (elem.innerHTML = msg)

        console.log(`===> ${msg}`)
        console.log(
          `phase: ${phase}, actualDuration: ${actualDuration.toFixed(
            1
          )} ms, baseDuration: ${baseDuration.toFixed(
            1
          )} ms, startTime: ${startTime.toFixed(1)} ms, commitTime: ${commitTime.toFixed(
            1
          )} ms`
        )
      }}
    >
      <h3 id="profile-600">{profileData}</h3>
      <Core
        layout="autoFill"
        layoutMinMax={layoutMinMax}
        schema={schema}
        itemLayout={VerticalItemLayout}
        renderers={renderers}
        value={value}
        onChange={handleChange}
      />
    </Profiler>
  )
}

export default Demo
```

## 1800

1800 个表单项联动性能测试，较为流畅

```jsx
import Core from '@schema-render/core-react'
import { useState, Profiler } from 'react'

const VerticalItemLayout = ({ schema, body }) => {
  return (
    <>
      <h4>{schema.title}</h4>
      <div>{body}</div>
    </>
  )
}

const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: 6,
  padding: 8,
  width: '100%',
  boxSize: 'border-box',
}

const renderers = {
  InputText: {
    // 只依赖自身 value / schema，声明为值纯渲染器：
    // 其它字段变化时本字段跳过重渲染（联动写入的字段仍会更新）
    pure: true,
    component: ({ schema, value, onChange }) => {
      return (
        <div style={{ display: 'flex' }}>
          <input
            style={inputStyle}
            placeholder={`请输入${schema.title}`}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )
    },
  },
}

/**
 * 生成表单项 schema
 */
const quantity = 1800
const schema = { renderType: 'Root', properties: {} }
const numbers = [...Array(quantity).keys()]

numbers.forEach((num) => {
  const field = `field_${num}`
  schema.properties[field] = {
    title: field,
    renderType: 'InputText',
  }
})

const layoutMinMax = ['100px', '1fr']

const Demo = () => {
  const [value, setValue] = useState({})
  const [profileData, setProfileData] = useState('')

  // 随机联动
  const handleChange = (formData, event) => {
    const currentIndex = parseInt(event.sPath.slice(6))
    const prev = currentIndex - 1
    const next = currentIndex + 1
    const field = `field_${next >= quantity ? prev : next}`
    formData[field] = event.value
    setValue(formData)
  }

  return (
    <Profiler
      id="sr-1800"
      onRender={(_id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        const msg = `[${quantity}] 操作: ${phase}, 渲染耗时: ${actualDuration.toFixed(
          1
        )} ms (实际生产环境中性能会好那么一点，因为没有使用 Profiler 性能分析)`

        const elem = document.getElementById('profile-1800')
        elem && (elem.innerHTML = msg)

        console.log(`===> ${msg}`)
        console.log(
          `phase: ${phase}, actualDuration: ${actualDuration.toFixed(
            1
          )} ms, baseDuration: ${baseDuration.toFixed(
            1
          )} ms, startTime: ${startTime.toFixed(1)} ms, commitTime: ${commitTime.toFixed(
            1
          )} ms`
        )
      }}
    >
      <h3 id="profile-1800">{profileData}</h3>
      <Core
        layout="autoFill"
        layoutMinMax={layoutMinMax}
        schema={schema}
        itemLayout={VerticalItemLayout}
        renderers={renderers}
        value={value}
        onChange={handleChange}
      />
    </Profiler>
  )
}

export default Demo
```

## 10000

10000 个表单项联动性能测试（首次渲染需要生成 10000 个输入框，可能卡顿数秒，请谨慎操作）

```jsx
import Core from '@schema-render/core-react'
import { useState, Profiler } from 'react'

const VerticalItemLayout = ({ schema, body }) => {
  return (
    <>
      <h4>{schema.title}</h4>
      <div>{body}</div>
    </>
  )
}

const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: 6,
  padding: 8,
  width: '100%',
  boxSize: 'border-box',
}

const renderers = {
  InputText: {
    // 只依赖自身 value / schema，声明为值纯渲染器：
    // 其它字段变化时本字段跳过重渲染（联动写入的字段仍会更新）
    pure: true,
    component: ({ schema, value, onChange }) => {
      return (
        <div style={{ display: 'flex' }}>
          <input
            style={inputStyle}
            placeholder={`请输入${schema.title}`}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )
    },
  },
}

/**
 * 生成表单项 schema
 */
const quantity = 10000
const schema = { renderType: 'Root', properties: {} }
const numbers = [...Array(quantity).keys()]

numbers.forEach((num) => {
  const field = `field_${num}`
  schema.properties[field] = {
    title: field,
    renderType: 'InputText',
  }
})

const layoutMinMax = ['100px', '1fr']

const Demo = () => {
  const [mounted, setMounted] = useState(false)
  const [value, setValue] = useState({})
  const [profileData, setProfileData] = useState('')

  // 随机联动
  const handleChange = (formData, event) => {
    const currentIndex = parseInt(event.sPath.slice(6))
    const prev = currentIndex - 1
    const next = currentIndex + 1
    const field = `field_${next >= quantity ? prev : next}`
    formData[field] = event.value
    setValue(formData)
  }

  return (
    <div>
      <h3 id="profile-10000">{profileData}</h3>

      {!mounted ? (
        <button type="button" onClick={() => setMounted(true)}>
          渲染 10000 个表单项（首次渲染可能卡顿数秒）
        </button>
      ) : (
        <Profiler
          id="sr-10000"
          onRender={(_id, phase, actualDuration, baseDuration, startTime, commitTime) => {
            const msg = `[${quantity}] 操作: ${phase}, 渲染耗时: ${actualDuration.toFixed(
              1
            )} ms (实际生产环境中性能会好那么一点，因为没有使用 Profiler 性能分析)`

            const elem = document.getElementById('profile-10000')
            elem && (elem.innerHTML = msg)

            console.log(`===> ${msg}`)
            console.log(
              `phase: ${phase}, actualDuration: ${actualDuration.toFixed(
                1
              )} ms, baseDuration: ${baseDuration.toFixed(
                1
              )} ms, startTime: ${startTime.toFixed(
                1
              )} ms, commitTime: ${commitTime.toFixed(1)} ms`
            )
          }}
        >
          <Core
            layout="autoFill"
            layoutMinMax={layoutMinMax}
            schema={schema}
            itemLayout={VerticalItemLayout}
            renderers={renderers}
            value={value}
            onChange={handleChange}
          />
        </Profiler>
      )}
    </div>
  )
}

export default Demo
```

## 验证订阅与重算范围（对照测试用例）

这一节不是看性能数字，而是用**可观察行为**验证订阅粒度。打开渲染日志后按步骤操作，输出应与下表一致。

```jsx
import { useState } from 'react'
import Core from '@schema-render/core-react'
import Horizontal from './item-layout/Horizontal'

const InputText = {
  pure: true,
  component: ({ schema, value, onChange }) => (
    <input
      data-testid={schema.renderOptions?.['data-testid']}
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
    />
  ),
}

const renderers = { InputText }

const schema = {
  renderType: 'Root',
  properties: {
    a: {
      title: '字段 A',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'a' },
    },
    b: {
      title: '字段 B',
      renderType: 'InputText',
      renderOptions: { 'data-testid': 'b' },
    },
    f1: {
      title: '依赖 A（非空显示）',
      renderType: 'InputText',
      hidden: '!$root.a',
    },
    f2: {
      title: '依赖 A',
      renderType: 'InputText',
      hidden: '$root.a === "none"',
    },
    f3: {
      title: '依赖 B',
      renderType: 'InputText',
      hidden: '!$root.b',
    },
  },
}

const Demo = () => {
  const [value, setValue] = useState({})

  return (
    <Core
      schema={schema}
      itemLayout={Horizontal}
      renderers={renderers}
      value={value}
      onChange={setValue}
    />
  )
}

export default Demo
```

**操作与期望**

1. 打开控制台，先打开挂载日志并清零统计：

   ```js
   window.__schemaRender.mountLogs(true) // 打开「首次渲染」日志（默认静默）
   window.__schemaRender.reset()
   ```

2. 在「字段 A」输入一个字符：

   - 只出现 `hidden 求值 f1`、`hidden 求值 f2`（依赖命中），**不会出现 f3**；
   - **f1 由隐藏变为可见**（初始未填时 `!$root.a` 为真），可以看到它的完整挂载链路：

     ```
     RendererIterator 第 N 次渲染 (hidden 依赖变化)
     hidden 求值 f1 第 M 次渲染 (重算)
     RendererDistributor f1 第 1 次渲染 (首次渲染)
     RendererExecutor f1 第 1 次渲染 (首次渲染)
     renderer:InputText f1 第 1 次渲染 (首次渲染)
     RendererExecutor a 第 K 次渲染 (字段值变化 → 1)
     ```

   - f2 求值结果不变（一直可见），既不渲染 Distributor 也不渲染 Executor；

3. 在「字段 B」输入：只出现 `hidden 求值 f3`，且 f3 由隐藏变为可见（同样会打出三条首次渲染日志）。

> 这里用 `!$root.a` 而不是 `$root.a === undefined`：后者在 legacy（`new Function`）下可行，但 safe 模式（expr-eval）不认 `undefined` 标识符，会退化成 `false`；`!$root.a` 在两种解释器下语义一致。

> 日志格式：`[schema-render] @12.34s <组件/路径> 第 N 次渲染 (原因)`。
> 挂载日志默认静默（`window.__SCHEMA_RENDER_LOG_MOUNT__ = true` 可打开），`__schemaRender.enabled(false)` 可关闭全部日志。

**与单测的对应关系**

| 场景                          | 期望                                     | 对应测试                                        |
| ----------------------------- | ---------------------------------------- | ----------------------------------------------- |
| 同层 hidden 按依赖重算        | 改 A 只重算依赖 A 的字段                 | `test/core-react/iteratorHiddenDeps.test.tsx`   |
| 无关字段变化                  | hidden 求值次数为 0                      | 同上                                            |
| 嵌套容器                      | 每层各自按依赖重算                       | 同上                                            |
| 通知携带变更路径              | `listener([['age']])`；订阅整体为 `null` | `test/core-react/utils/valueStore.test.ts`      |
| pure + useFieldValue 精确订阅 | 无关字段零渲染、依赖字段更新             | `test/core-react/useFieldValueLinkage.test.tsx` |
| 基准联动 pure / 非 pure       | pure 时一次输入只渲染 2 个字段，否则全部 | `test/core-react/benchmarkLinkage.test.tsx`     |
| 中文输入法                    | 组合输入不丢字                           | `test/core-react/imeInput.test.tsx`             |

本地运行：

```bash
npx jest test/core-react
```
