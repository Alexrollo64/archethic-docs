"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));n(8209);const o={id:"election",title:"Election"},a=void 0,l={unversionedId:"build/core/election",id:"build/core/election",title:"Election",description:"Archethic provides rotating algorithm to elect validation and storage nodes.",source:"@site/docs/build/core/election.md",sourceDirName:"build/core",slug:"/build/core/election",permalink:"/build/core/election",draft:!1,tags:[],version:"current",lastUpdatedAt:1687852490,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{id:"election",title:"Election"},sidebar:"docs",previous:{title:"Archethic's database",permalink:"/build/core/database"},next:{title:"CD",permalink:"/build/core/governance/code-proposals-cd"}},c={},s=[{value:"Heuristic constraints",id:"heuristic-constraints",level:2},{value:"Low-Level integrations",id:"low-level-integrations",level:2},{value:"Hypergeomtric distribution",id:"hypergeomtric-distribution",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic provides rotating algorithm to elect validation and storage nodes. "),(0,i.kt)("p",null,"Validation and Storage Election algorithm provides also list of heuristic constraints to fine grained elections. "),(0,i.kt)("h2",{id:"heuristic-constraints"},"Heuristic constraints"),(0,i.kt)("p",null,"An ETS table is used to store the last constraints values for a faster lookup."),(0,i.kt)("p",null,"Storage constraints are defined by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"minimum storage geographical patches"),(0,i.kt)("li",{parentName:"ul"},"minimum storage average by geographical patch"),(0,i.kt)("li",{parentName:"ul"},"number of replicast")),(0,i.kt)("p",null,"Validation constraints are defined by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"minimum validation geographical patch distribution"),(0,i.kt)("li",{parentName:"ul"},"minimum validation nodes"),(0,i.kt)("li",{parentName:"ul"},"validation number based on a given transaction")),(0,i.kt)("h2",{id:"low-level-integrations"},"Low-Level integrations"),(0,i.kt)("p",null,"Sometimes for performance issue, we are leveraging low-level programming in C, to perform fast computation."),(0,i.kt)("h3",{id:"hypergeomtric-distribution"},"Hypergeomtric distribution"),(0,i.kt)("p",null,"For example, the Hypergeometric Distribution simulation is computed in C and wrapped in an Erlang port communication.\nBut for better simulation lookup, a cache is provided as process to hold the last value for a given number of nodes.\nIf the number of nodes changes, the hypergeometric distribution will be trigger."),(0,i.kt)("p",null,"The C program is using ",(0,i.kt)("inlineCode",{parentName:"p"},"GMP")," for big float arithemetic operations and ",(0,i.kt)("inlineCode",{parentName:"p"},"OMP")," for parallel computations to make it efficient."),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    Election->>+Process: Run simulation for N nodes\n    alt with cache value\n        Process--\x3e>Election: Retrieve cached value\n    else without cache value\n        Process->>C: Run simultation\n    end\n"}))}d.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);