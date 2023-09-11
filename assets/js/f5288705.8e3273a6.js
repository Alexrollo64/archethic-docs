"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6087],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(a),p=r,y=d["".concat(c,".").concat(p)]||d[p]||u[p]||s;return a?n.createElement(y,o(o({ref:t},m),{},{components:a})):n.createElement(y,o({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2977:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(7462),r=a(7294),s=a(3905);a(8209);const o={id:"transaction-summary",title:"TransactionSummary",hide_table_of_contents:!1},l=void 0,c={unversionedId:"build/api/schema/objects/transaction-summary",id:"build/api/schema/objects/transaction-summary",title:"TransactionSummary",description:"[Transaction Summary] Represents transaction header or extract to summarize it",source:"@site/docs/build/api/schema/objects/transaction-summary.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/transaction-summary",permalink:"/build/api/schema/objects/transaction-summary",draft:!1,tags:[],version:"current",lastUpdatedAt:1694426346,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"transaction-summary",title:"TransactionSummary",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"TransactionMovement",permalink:"/build/api/schema/objects/transaction-movement"},next:{title:"Transaction",permalink:"/build/api/schema/objects/transaction"}},i={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionSummary.<b>address</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionsummarybaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionSummary.<b>fee</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionsummarybfeebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionSummary.<b>movementsAddresses</b></code><Bullet /><code>[Address]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionsummarybmovementsaddressesbcodeaddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionSummary.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionsummarybtimestampbcodetimestamp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionSummary.<b>type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionsummarybtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionSummary.<b>validationStampChecksum</b></code><Bullet /><code>Hash</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionsummarybvalidationstampchecksumbcodehash-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:d,SpecifiedBy:u,Badge:p},b="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"[Transaction Summary]"," Represents transaction header or extract to summarize it"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type TransactionSummary {\n  address: Address\n  fee: Int\n  movementsAddresses: [Address]\n  timestamp: Timestamp\n  type: String\n  validationStampChecksum: Hash\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionsummarybaddressbcodeaddress-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionSummary.",(0,s.kt)("b",null,"address"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,s.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionsummarybfeebcodeint-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionSummary.",(0,s.kt)("b",null,"fee"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionsummarybmovementsaddressesbcodeaddress--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionSummary.",(0,s.kt)("b",null,"movementsAddresses"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,s.kt)("inlineCode",{parentName:"a"},"[Address]"))," ",(0,s.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionsummarybtimestampbcodetimestamp-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionSummary.",(0,s.kt)("b",null,"timestamp"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,s.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionsummarybtypebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionSummary.",(0,s.kt)("b",null,"type"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactionsummarybvalidationstampchecksumbcodehash-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"TransactionSummary.",(0,s.kt)("b",null,"validationStampChecksum"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/hash"},(0,s.kt)("inlineCode",{parentName:"a"},"Hash"))," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/beacon-chain-summary"},(0,s.kt)("inlineCode",{parentName:"a"},"BeaconChainSummary")),"  ",(0,s.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);