import { SettingOutlined, SyncOutlined } from '@ant-design/icons'
import { useMemoizedFn, utils } from '@schema-render/core-react'
import { Button, Space, Tabs, Tooltip } from 'antd'
import type { TabBarExtraMap } from 'rc-tabs/lib/interface.d.ts'
import type { ReactNode } from 'react'
import { isValidElement } from 'react'

import type {
  IGlobalStateRef,
  ILocale,
  ISearchTableProps,
  ISearchTableRef,
} from '../../typings'
import styles from './index.module.css'

interface IUseTitleParams {
  locale: ILocale
  title: ISearchTableProps['title']
  loading: boolean
  globalStateRef: IGlobalStateRef
  runRequest: ISearchTableRef['refresh']
  openSettingModal: ISearchTableRef['openSettingModal']
}

const { classNames } = utils

export default function useTitle({
  locale,
  title = {},
  loading,
  globalStateRef,
  runRequest,
  openSettingModal,
}: IUseTitleParams) {
  // Tab Change 事件处理
  const handleTabChange = useMemoizedFn((activeKey: string) => {
    // 数据请求中，不允许连续切换 Tab
    if (loading) {
      return
    }

    // 设置 tab 正在切换
    globalStateRef.current.isTabChanging = true

    // 触发 onChange 事件
    title.tabs?.onChange?.(activeKey)

    // 等事件 setState 值更新完毕后再发起请求
    setTimeout(
      /**
       * 1、Tab 切换分页重置到第一页
       * 2、请求完毕更新 isTabChanging 值
       */
      () =>
        runRequest({ current: 1 }).finally(
          () => (globalStateRef.current.isTabChanging = false)
        ),
      0
    )
  })

  // 公共插槽参数
  const comRenderParams = { loading }
  // 额外的左右侧内容
  const leftExtraContent = title.leftExtraContent?.(comRenderParams)
  const rightExtraContent = title.rightExtraContent?.(comRenderParams)
  let tabBarLeftExtraContent: ReactNode | null = null
  let tabBarRightExtraContent: ReactNode | null = null

  // 列设置按钮
  const settingBtn = title.showSetting ? (
    <Tooltip title={locale.SearchTable.settingTips}>
      <Button icon={<SettingOutlined />} disabled={loading} onClick={openSettingModal} />
    </Tooltip>
  ) : null

  // 刷新按钮
  const refreshBtn = title.showRefresh ? (
    <Tooltip title={locale.SearchTable.refreshTips}>
      <Button icon={<SyncOutlined />} disabled={loading} onClick={() => runRequest()} />
    </Tooltip>
  ) : null

  // Antd tabBarExtraContent 标准化处理
  if (title.tabs?.tabBarExtraContent) {
    if (isValidElement(title.tabs.tabBarExtraContent)) {
      tabBarRightExtraContent = title.tabs.tabBarExtraContent
    } else {
      const extraContent = title.tabs.tabBarExtraContent as TabBarExtraMap
      tabBarLeftExtraContent = extraContent.left
      tabBarRightExtraContent = extraContent.right
    }
  }

  const tabBarExtraContent = {
    left:
      tabBarLeftExtraContent || leftExtraContent ? (
        <Space size={10} style={{ marginRight: 16 }}>
          {tabBarLeftExtraContent}
          {leftExtraContent}
        </Space>
      ) : null,
    right:
      tabBarRightExtraContent || rightExtraContent || refreshBtn || settingBtn ? (
        <Space size={10}>
          {tabBarRightExtraContent}
          {rightExtraContent}
          {refreshBtn}
          {settingBtn}
        </Space>
      ) : null,
  }

  // 标题节点内容
  const titleNodeHolder =
    tabBarExtraContent.left || tabBarExtraContent.right || title.tabs ? (
      <Tabs
        {...title.tabs}
        className={classNames(title.className, title.tabs?.className, {
          [styles.tabsHideLine]: !title.tabs,
        })}
        style={title.style || title.tabs?.style}
        tabBarExtraContent={tabBarExtraContent}
        onChange={handleTabChange}
      />
    ) : null

  return { titleNodeHolder }
}
