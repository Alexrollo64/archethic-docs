"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,y=p["".concat(o,".").concat(u)]||p[u]||m[u]||s;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1060:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=a(7294),s=a(3905);a(8209);const i={id:"address",title:"Address",hide_table_of_contents:!1},d=void 0,o={unversionedId:"build/api/schema/scalars/address",id:"build/api/schema/scalars/address",title:"Address",description:"The [Address] scalar type represents a transaction's address.",source:"@site/docs/build/api/schema/scalars/address.mdx",sourceDirName:"build/api/schema/scalars",slug:"/build/api/schema/scalars/address",permalink:"/build/api/schema/scalars/address",draft:!1,tags:[],version:"current",lastUpdatedAt:1694426346,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"address",title:"Address",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"version",permalink:"/build/api/schema/queries/version"},next:{title:"Boolean",permalink:"/build/api/schema/scalars/boolean"}},l={},c=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:p,SpecifiedBy:m,Badge:u},k="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(k,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ","[Address]"," scalar type represents a transaction's address.\nThe Address appears in a JSON response as Base16 formatted string. The parsed address will\nbe converted to a binary and any invalid address with an invalid algorithm or invalid size will be rejected"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Address\n")),(0,s.kt)("h3",{id:"returned-by"},"Returned by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/queries/genesis-address"},(0,s.kt)("inlineCode",{parentName:"a"},"genesisAddress")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/queries/balance"},(0,s.kt)("inlineCode",{parentName:"a"},"balance")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/data"},(0,s.kt)("inlineCode",{parentName:"a"},"Data")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/queries/genesis-address"},(0,s.kt)("inlineCode",{parentName:"a"},"genesisAddress")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/queries/last-transaction"},(0,s.kt)("inlineCode",{parentName:"a"},"lastTransaction")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/node"},(0,s.kt)("inlineCode",{parentName:"a"},"Node")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/token"},(0,s.kt)("inlineCode",{parentName:"a"},"Token")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/queries/token"},(0,s.kt)("inlineCode",{parentName:"a"},"token")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/token-balance"},(0,s.kt)("inlineCode",{parentName:"a"},"TokenBalance")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/token-transfer"},(0,s.kt)("inlineCode",{parentName:"a"},"TokenTransfer")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,s.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transaction"},(0,s.kt)("inlineCode",{parentName:"a"},"transaction")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-attestation"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionAttestation")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transaction-chain"},(0,s.kt)("inlineCode",{parentName:"a"},"transactionChain")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/subscriptions/transaction-confirmed"},(0,s.kt)("inlineCode",{parentName:"a"},"transactionConfirmed")),"  ",(0,s.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-error"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionError")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/subscriptions/transaction-error"},(0,s.kt)("inlineCode",{parentName:"a"},"transactionError")),"  ",(0,s.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-input"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionInput")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/queries/transaction-inputs"},(0,s.kt)("inlineCode",{parentName:"a"},"transactionInputs")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-movement"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionMovement")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction-summary"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionSummary")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/uco-transfer"},(0,s.kt)("inlineCode",{parentName:"a"},"UcoTransfer")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/build/api/schema/objects/unspent-output"},(0,s.kt)("inlineCode",{parentName:"a"},"UnspentOutput")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);