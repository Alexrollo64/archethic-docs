"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1328],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||c;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3630:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));t(8209);const c={id:"oracle-chain",title:"OracleChain"},i=void 0,o={unversionedId:"build/core/oracle-chain/oracle-chain",id:"build/core/oracle-chain/oracle-chain",title:"OracleChain",description:"OracleChain is an internal mechanism inside Archethic Node Software making external data fetching embedded into a transaction chain.",source:"@site/docs/build/core/oracle-chain/README.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/",permalink:"/build/core/oracle-chain/",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858857,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"oracle-chain",title:"OracleChain"},sidebar:"docs",previous:{title:"Transaction context retrieval",permalink:"/build/core/mining/transaction-context"},next:{title:"Memory database",permalink:"/build/core/oracle-chain/memory-table"}},l={},u=[],p={toc:u},s="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OracleChain is an internal mechanism inside Archethic Node Software making external data fetching embedded into a transaction chain."),(0,a.kt)("p",null,"It's built around three main components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List of ",(0,a.kt)("a",{parentName:"li",href:"/build/core/oracle-chain/service"},"services")," or provider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/build/core/oracle-chain/scheduler"},"Scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/build/core/oracle-chain/memory-table"},"InMemory database"))))}d.isMDXComponent=!0},8209:(e,r,t)=>{t(7294)}}]);