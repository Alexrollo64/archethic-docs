"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(b,c(c({ref:t},p),{},{components:a})):n.createElement(b,c({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5416:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(7462),r=a(7294),o=a(3905);a(8209);const c={id:"int",title:"Int",hide_table_of_contents:!1},l=void 0,i={unversionedId:"build/api/schema/scalars/int",id:"build/api/schema/scalars/int",title:"Int",description:"The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",source:"@site/docs/build/api/schema/scalars/int.mdx",sourceDirName:"build/api/schema/scalars",slug:"/build/api/schema/scalars/int",permalink:"/build/api/schema/scalars/int",draft:!1,tags:[],version:"current",lastUpdatedAt:1689065377,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{id:"int",title:"Int",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Hex",permalink:"/build/api/schema/scalars/hex"},next:{title:"NonNegInteger",permalink:"/build/api/schema/scalars/non-neg-integer"}},s={},p=[{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:p,Bullet:d,SpecifiedBy:m,Badge:u},k="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Int\n")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/balance"},(0,o.kt)("inlineCode",{parentName:"a"},"Balance")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/beacon-chain-summary"},(0,o.kt)("inlineCode",{parentName:"a"},"BeaconChainSummary")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"Endpoint")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/ledger-operations"},(0,o.kt)("inlineCode",{parentName:"a"},"LedgerOperations")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/token"},(0,o.kt)("inlineCode",{parentName:"a"},"Token")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/token-balance"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenBalance")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/token-transfer"},(0,o.kt)("inlineCode",{parentName:"a"},"TokenTransfer")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-attestation"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionAttestation")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionInput")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-movement"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionMovement")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-summary"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionSummary")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/uco-transfer"},(0,o.kt)("inlineCode",{parentName:"a"},"UcoTransfer")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/unspent-output"},(0,o.kt)("inlineCode",{parentName:"a"},"UnspentOutput")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/validation-stamp"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationStamp")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);