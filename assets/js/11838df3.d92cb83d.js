"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),f=o,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||n;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2226:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),o=a(7294),n=a(3905);a(8209);const l={id:"uco-data",title:"UcoData",hide_table_of_contents:!1},c=void 0,i={unversionedId:"build/api/schema/objects/uco-data",id:"build/api/schema/objects/uco-data",title:"UcoData",description:"No description",source:"@site/docs/build/api/schema/objects/uco-data.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/uco-data",permalink:"/build/api/schema/objects/uco-data",draft:!1,tags:[],version:"current",lastUpdatedAt:1694426346,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"uco-data",title:"UcoData",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Transaction",permalink:"/build/api/schema/objects/transaction"},next:{title:"UcoLedger",permalink:"/build/api/schema/objects/uco-ledger"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UcoData.<b>eur</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ucodatabeurbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UcoData.<b>usd</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ucodatabusdbcodefloat-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:p,Badge:f},b="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(b,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type UcoData {\n  eur: Float\n  usd: Float\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ucodatabeurbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UcoData.",(0,n.kt)("b",null,"eur"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ucodatabusdbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UcoData.",(0,n.kt)("b",null,"usd"))),(0,n.kt)(u,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/build/api/schema/objects/oracle-services"},(0,n.kt)("inlineCode",{parentName:"a"},"OracleServices")),"  ",(0,n.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);