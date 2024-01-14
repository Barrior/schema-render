---
group:
  title: 案例集锦
  order: 850
---

# Steps 步骤表单

步骤表单实现方式有两种：

- **表单项都由 FormRender 渲染，通过 hidden 属性控制显示与隐藏**
  - 优势：数据在一个 FormRender 实例里，校验方法只调用一个
  - 劣势：表单数据层级有变化，需要将表单项放在 Object 对象里
- **渲染多个 FormRender 实例**
  - 优势：表单数据层级无变化
  - 劣势：校验方法需要调用多个，最终的数据需要合并在一起

下面示例第一种方案

```tsx
/**
 * defaultShowCode: true
 */
import { useState, useMemo, useRef } from 'react'
import FormRender from '@schema-render/form-render-react'
import type {
  IFormRenderRootSchema,
  IFormRenderProps,
  IFormRenderRef,
} from '@schema-render/form-render-react'
import { Steps, Button } from 'antd'
import { useMemoizedFn } from 'ahooks'

const schema: IFormRenderRootSchema = {
  renderType: 'Root',
  properties: {
    step1: {
      title: '步骤一',
      renderType: 'ObjectNull',
      hidden: '$userCtx.step !== 0',
      properties: {
        title: {
          title: '步骤一标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '步骤一内容',
          renderType: 'InputText',
          required: true,
        },
      },
    },
    step2: {
      title: '步骤二',
      renderType: 'ObjectNull',
      hidden: '$userCtx.step !== 1',
      properties: {
        title: {
          title: '步骤二标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '步骤二内容',
          renderType: 'InputText',
          required: true,
        },
      },
    },
    step3: {
      title: '步骤三',
      renderType: 'ObjectNull',
      hidden: '$userCtx.step !== 2',
      properties: {
        title: {
          title: '步骤三标题',
          renderType: 'InputText',
          required: true,
        },
        content: {
          title: '步骤三内容',
          renderType: 'InputText',
          required: true,
        },
      },
    },
  },
}

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [value, setValue] = useState({})
  const formRenderRef = useRef<IFormRenderRef>(null)

  // 上一步事件
  const handlePrev = () => {
    setCurrentStep((cur) => cur - 1)
  }

  // 下一步事件
  const handleNext = useMemoizedFn(async () => {
    // formRenderRef 的 validate 会校验所有表单项
    const res = await formRenderRef.current?.validate()
    if (res?.hasError || res?.hasWarning) {
      const currentStepField = `step${currentStep + 1}`

      // 如果错误列表里存在当前步骤下的表单，表示当前步骤下的表单存在错误项，则不跳到下一步
      const blockCurrentStep = res.errorList.some(
        (item) => item.path[0] === currentStepField
      )
      if (blockCurrentStep) {
        return
      }
    }

    // 校验通过才进行下一步
    setCurrentStep(currentStep + 1)
  })

  // 只重置当前步骤下的表单项数据
  const handleReset = useMemoizedFn(() => {
    // 重置数据
    setValue({
      ...value,
      [`step${currentStep + 1}`]: {},
    })
    // 重置错误提示
    formRenderRef.current?.resetError()
  })

  const registerActions = useMemo(() => {
    return {
      prev: () => <Button onClick={handlePrev}>上一步</Button>,
      next: () => (
        <Button type="primary" onClick={handleNext}>
          下一步
        </Button>
      ),
      reset: () => <Button onClick={handleReset}>重置</Button>,
    }
  }, [])

  // 提交事件
  const handleSubmit: IFormRenderProps['onSubmit'] = async () => {
    const res = await formRenderRef.current?.validate()

    if (res?.hasError || res?.hasWarning) {
      return
    }

    // 校验通过后，发送提交数据
  }

  return (
    <div style={{ maxWidth: 800 }}>
      <Steps
        size="small"
        current={currentStep}
        onChange={setCurrentStep}
        items={[
          { title: '步骤一', disabled: true },
          { title: '步骤二', disabled: true },
          { title: '步骤三', disabled: true },
        ]}
        style={{ marginBottom: 20 }}
      />
      <FormRender
        ref={formRenderRef}
        schema={schema}
        value={value}
        onChange={setValue}
        // 通过 userCtx 注入步骤进度，在 schema 里使用
        userCtx={{ step: currentStep }}
        actions={
          currentStep === 0
            ? ['next', 'reset']
            : currentStep === 2
            ? ['submit', 'prev', 'reset']
            : ['next', 'prev', 'reset']
        }
        registerActions={registerActions}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Demo
```
