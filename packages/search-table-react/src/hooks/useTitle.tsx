import { SettingOutlined, SyncOutlined } from '@ant-design/icons'
import { useMemoizedFn } from '@schema-render/core-react'
import { Button, Tabs, Tooltip } from 'antd'
import type { ReactNode } from 'react'
import { isValidElement } from 'react'

import type {
  IGlobalStateRef,
  ILocale,
  ISearchTableProps,
  ISearchTableRef,
} from '../typings'

interface IUseTitleParams {
  locale: ILocale
  title: ISearchTableProps['title']
  loading: boolean
  globalStateRef: IGlobalStateRef
  runRequest: ISearchTableRef['refresh']
  openSettingModal: ISearchTableRef['openSettingModal']
}

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

  const tabBarExtraContent: { left?: ReactNode; right?: ReactNode } = {}
  const hasBtn = title.showSetting || title.showRefresh

  // 列设置按钮
  const settingBtn = title.showSetting ? (
    <Tooltip title={locale.SearchTable.settingTips}>
      <Button
        icon={<SettingOutlined />}
        disabled={loading}
        style={{ marginLeft: 10 }}
        onClick={openSettingModal}
      />
    </Tooltip>
  ) : null

  // 刷新按钮
  const refreshBtn = title.showRefresh ? (
    <Tooltip title={locale.SearchTable.refreshTips}>
      <Button
        icon={<SyncOutlined />}
        disabled={loading}
        style={{ marginLeft: 10 }}
        onClick={() => runRequest()}
      />
    </Tooltip>
  ) : null

  // 用户 tabBarExtraContent 标准化处理
  if (title.tabs?.tabBarExtraContent) {
    if (isValidElement(title.tabs.tabBarExtraContent)) {
      tabBarExtraContent.right = title.tabs.tabBarExtraContent
    } else {
      Object.assign(tabBarExtraContent, title.tabs.tabBarExtraContent)
    }
  }

  // 添加「列设置」等按钮
  if (hasBtn) {
    tabBarExtraContent.right = (
      <>
        {tabBarExtraContent.right}
        {refreshBtn}
        {settingBtn}
      </>
    )
  }

  // 标题节点内容
  const titleNodeHolder = title.tabs ? (
    <Tabs
      {...title.tabs}
      tabBarExtraContent={tabBarExtraContent}
      onChange={handleTabChange}
    />
  ) : hasBtn ? (
    <div
      className={title.className}
      style={{ textAlign: 'right', marginBottom: 16, ...title.style }}
    >
      {refreshBtn}
      {settingBtn}
    </div>
  ) : null

  return {
    titleNodeHolder,
  }
}
