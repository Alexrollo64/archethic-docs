"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,l(l({ref:t},s),{},{components:r})):o.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));r(8209);const a={id:"code-proposals",title:"Code Proposals"},l=void 0,c={unversionedId:"build/core/governance/code-proposals",id:"build/core/governance/code-proposals",title:"Code Proposals",description:"Archethic Blockchain is using code proposals to have a way to upgrade current blockchain",source:"@site/docs/build/core/governance/code-proposals.md",sourceDirName:"build/core/governance",slug:"/build/core/governance/code-proposals",permalink:"/build/core/governance/code-proposals",draft:!1,tags:[],version:"current",lastUpdatedAt:1687852490,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{id:"code-proposals",title:"Code Proposals"},sidebar:"docs",previous:{title:"CI",permalink:"/build/core/governance/code-proposals-ci"},next:{title:"Mining",permalink:"/build/core/mining/"}},i={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Archethic Blockchain is using code proposals to have a way to upgrade current blockchain\ncode in a automated and tested way."),(0,n.kt)("p",null,"A pending code proposal contains the following fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Address: Address of the code proposal"),(0,n.kt)("li",{parentName:"ul"},"Approvals: Approvals signed by the users"),(0,n.kt)("li",{parentName:"ul"},"Changes: Diff between current version and code proposal"),(0,n.kt)("li",{parentName:"ul"},"Description: Description of the code proposal"),(0,n.kt)("li",{parentName:"ul"},"Files: Files changed in code proposal"),(0,n.kt)("li",{parentName:"ul"},"Previous Public Key"),(0,n.kt)("li",{parentName:"ul"},"Timestamp"),(0,n.kt)("li",{parentName:"ul"},"Version: target version")),(0,n.kt)("p",null,"For a code proposal to be valid it needs to validate 3 conditions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The version in code proposal needs to be a successor version of the current one"),(0,n.kt)("li",{parentName:"ul"},"The changes need to contain a valid ",(0,n.kt)("a",{parentName:"li",href:"https://www.erlang.org/doc/man/appup.html"},"appup file")),(0,n.kt)("li",{parentName:"ul"},"the code proposal is applicable on the current branch")),(0,n.kt)("p",null,"Code proposals can be visualised in the governance section of the UI."),(0,n.kt)("p",null,"when a code proposal get enough approvals from members of technical council (more than the threshhold), it automatically launchs the CI/CD process."))}d.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);