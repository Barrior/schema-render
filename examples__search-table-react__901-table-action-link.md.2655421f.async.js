"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9287],{54948:(function(_,a,e){e.r(a);var t=e(55804),c=e(33405),i=e(72700),s=e(84359),h=e(53867),d=e(77658),f=e(75968),x=e(83728),o=e(18775),m=e(17437),l=e(96540),r=e(66551),n=e(74848);function u(){return(0,n.jsx)(o.LO,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(m.A,{}),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u64CD\u4F5C\u6309\u94AE\u5355\u9875\u8DF3\u8F6C",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u64CD\u4F5C\u6309\u94AE\u5355\u9875\u8DF3\u8F6C",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u64CD\u4F5C\u6309\u94AE\u5355\u9875\u8DF3\u8F6C"]}),(0,n.jsxs)("p",{children:[r.texts[0].value,(0,n.jsx)("code",{children:r.texts[1].value}),r.texts[2].value,(0,n.jsx)("a",{href:"https://nextjs.org/",children:r.texts[3].value}),r.texts[4].value]}),(0,n.jsx)(d.A,{lang:"tsx",highlightLines:[7,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],children:r.texts[5].value})]}),(0,n.jsx)(s.A,{type:"info",title:"\u6E29\u99A8\u63D0\u793A",children:(0,n.jsx)("p",{children:r.texts[6].value})})]})})})}a.default=u}),66551:(function(_,a,e){e.r(a);const t=[{value:"\u591A\u6570\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4E8C\u6B21\u5C01\u88C5 SearchTable \u4EE5\u9002\u5408\u81EA\u8EAB\u4E1A\u52A1\u7684\u5E38\u7528\u573A\u666F\uFF0C\u6BD4\u5982\u5728\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u64CD\u4F5C\u5217\u7684\u94FE\u63A5\u8DF3\u8F6C\u662F\u5355\u9875\u8DF3\u8F6C\u800C\u4E0D\u662F",paraId:0,tocIndex:0},{value:"<a>",paraId:0,tocIndex:0},{value:" \u6807\u7B7E\u7684\u5237\u65B0\u8DF3\u8F6C\uFF0C\u57FA\u4E8E\u6B64\u9700\u6C42\u6211\u4EEC\u4EE5 ",paraId:0,tocIndex:0},{value:"Next.js",paraId:0,tocIndex:0},{value:" \u5355\u9875\u8DF3\u8F6C\u4E8C\u6B21\u5C01\u88C5\u5982\u4E0B\u3002",paraId:0,tocIndex:0},{value:`import { useRef, forwardRef, useImperativeHandle } from 'react'
import { sleep } from '@examples/utils'
import schema from './helpers/schema'
import columns from './helpers/columns'
import createDataSource from './helpers/createDataSource'
import SchemaSearchTable from '@schema-render/search-table-react'
import Link from 'next/link'
import { map } from 'lodash'

import type { Ref } from 'react'
import type {
  ISearchTableProps,
  ISearchTableRef,
} from '@schema-render/search-table-react'

type IObjectAny = Record<string, any>

/**
 * \u4E8C\u6B21\u5C01\u88C5
 */
const SearchTable = forwardRef((props: ISearchTableProps, ref?: Ref<ISearchTableRef>) => {
  const STableRef = useRef<ISearchTableRef>(null)

  const actionItems = (record: IObjectAny, index: number) => {
    const items = props.table?.actionItems?.(record, index)
    return map(items, (item: IObjectAny, idx: number) => {
      // \u8DF3\u8F6C\u5904\u7406
      const text = item.href ? (
        <Link
          href={item.href}
          target={item.target}
          // \u52A0\u552F\u4E00 key
          key={\`link-\${idx}\`}
        >
          {item.text}
        </Link>
      ) : (
        item.text
      )
      return { ...item, text }
    })
  }

  // \u5F00\u653E API
  useImperativeHandle(ref, () => STableRef.current!)

  return (
    <SchemaSearchTable
      {...props}
      ref={STableRef}
      table={{
        ...props.table,
        actionItems: props.table?.actionItems ? actionItems : undefined,
      }}
    />
  )
})

const Demo = () => {
  const STableRef = useRef<ISearchTableRef>(null)

  return (
    <SearchTable
      ref={STableRef}
      search={{ schema }}
      table={{ columns }}
      request={async (searchParams) => {
        await sleep()
        const data = createDataSource(searchParams.pageSize)
        return { data, total: 100 }
      }}
    />
  )
}

export default Demo
`,paraId:1,tocIndex:0},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u64CD\u4F5C\u5217\u6309\u94AE\u589E\u52A0\u300C\u6743\u9650\u6821\u9A8C\u300D\u7684\u903B\u8F91\u7B49\uFF08\u589E\u52A0\u6743\u9650\u914D\u7F6E\u5C5E\u6027\uFF0C\u7ED3\u5408 isShow \u5C5E\u6027\u5B9E\u73B0\uFF09\uFF0C\u5C01\u88C5\u65B9\u5F0F\u96F7\u540C\u3002",paraId:2}];e.d(a,["texts",0,t])})}]);
