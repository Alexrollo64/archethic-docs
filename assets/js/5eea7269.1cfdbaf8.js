"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),i=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9323:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>c,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(7462),o=n(7294),r=n(3905);n(8209);const l={id:"unspent-output",title:"UnspentOutput",hide_table_of_contents:!1},s=void 0,d={unversionedId:"build/api/schema/objects/unspent-output",id:"build/api/schema/objects/unspent-output",title:"UnspentOutput",description:"[UnspentOutput] represents the remaining unspent output of the transaction.",source:"@site/docs/build/api/schema/objects/unspent-output.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/unspent-output",permalink:"/build/api/schema/objects/unspent-output",draft:!1,tags:[],version:"current",lastUpdatedAt:1694426346,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"unspent-output",title:"UnspentOutput",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"UcoTransfer",permalink:"/build/api/schema/objects/uco-transfer"},next:{title:"ValidationStamp",permalink:"/build/api/schema/objects/validation-stamp"}},i={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>amount</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbamountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>from</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbfrombcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbtimestampbcodetimestamp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>tokenAddress</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbtokenaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>tokenId</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbtokenidbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>type</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UnspentOutput.<b>version</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-unspentoutputbversionbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:u,Bullet:p,SpecifiedBy:c,Badge:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[UnspentOutput]"," represents the remaining unspent output of the transaction.\nIt includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From: transaction which send the amount of assets"),(0,r.kt)("li",{parentName:"ul"},"Amount: asset amount"),(0,r.kt)("li",{parentName:"ul"},"Type: UCO/token"),(0,r.kt)("li",{parentName:"ul"},"token address: address of the token if the type is token"),(0,r.kt)("li",{parentName:"ul"},"token id: It is the id for a token which is allocated when the token is minted."),(0,r.kt)("li",{parentName:"ul"},"Timestamp: Date time when the UTXO created/manipulated"),(0,r.kt)("li",{parentName:"ul"},"Version: Version of the UTXO data structure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UnspentOutput {\n  amount: Int\n  from: Address\n  timestamp: Timestamp\n  tokenAddress: Address\n  tokenId: Int\n  type: String\n  version: Int\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbamountbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,r.kt)("b",null,"amount"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbfrombcodeaddress-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,r.kt)("b",null,"from"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbtimestampbcodetimestamp-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,r.kt)("b",null,"timestamp"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbtokenaddressbcodeaddress-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,r.kt)("b",null,"tokenAddress"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbtokenidbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,r.kt)("b",null,"tokenId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbtypebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,r.kt)("b",null,"type"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-unspentoutputbversionbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UnspentOutput.",(0,r.kt)("b",null,"version"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/build/api/schema/objects/ledger-operations"},(0,r.kt)("inlineCode",{parentName:"a"},"LedgerOperations")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);