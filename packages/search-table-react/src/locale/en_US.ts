import en_US from '@schema-render/search-react/src/locale/en_US'

export default {
  ...en_US,
  SearchTable: {
    serialColumnName: 'Rank',
    actionColumnName: 'Actions',
    more: 'More',
    paginationTotal: 'Showing ${start} to ${end} of ${total} entries',
    refreshTips: 'Refresh',
    settingTips: 'Columns Setting',
    settingModalTitle: 'Columns Setting',
    settingModalOk: 'Ok',
    settingModalReset: 'Reset Current Setting',
    settingModalResetDefault: 'Restore Defaults',
    settingModalColumnEnum: ['Name', 'Display', 'Width', 'Fixed', 'Sort'],
    settingModalColumnSortEnum: ['left', 'right', '-'],
    longTextModalLabel: 'All',
    longTextModalTitle: 'All',
  },
}
