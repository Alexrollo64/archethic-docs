"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={id:"beacon-chain",title:"BeaconChain"},i=void 0,s={unversionedId:"build/core/beacon-chain/beacon-chain",id:"build/core/beacon-chain/beacon-chain",title:"BeaconChain",description:"BeaconChain helps the Archethic sharding network to be supervised and provided global view of the system.",source:"@site/docs/build/core/beacon-chain/README.md",sourceDirName:"build/core/beacon-chain",slug:"/build/core/beacon-chain/",permalink:"/build/core/beacon-chain/",draft:!1,tags:[],version:"current",lastUpdatedAt:1694426346,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"beacon-chain",title:"BeaconChain"},sidebar:"docs",previous:{title:"Account",permalink:"/build/core/account"},next:{title:"P2P availability sampling",permalink:"/build/core/beacon-chain/p2p-sampling"}},c={},l=[{value:"Subsets",id:"subsets",level:2},{value:"Timers and schedulers",id:"timers-and-schedulers",level:2},{value:"Transaction loading",id:"transaction-loading",level:2},{value:"Supervisor",id:"supervisor",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"BeaconChain helps the Archethic sharding network to be supervised and provided global view of the system."),(0,r.kt)("p",null,"To be able to manage it, few modules and functions are needed to make this possible."),(0,r.kt)("h2",{id:"subsets"},"Subsets"),(0,r.kt)("p",null,"The BeaconChain is divided into a set of subsets (shards of the BeaconChain) based on hexadecimal splits.\nCurrently the BeaconChain supports 256 subsets, from 0 to F (hex)"),(0,r.kt)("p",null,"Each subset is maintained by its own ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/beacon_chain/subset.ex"},"process")),(0,r.kt)("p",null,"This process is responsible of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add transaction replication confirmation to the current slot"),(0,r.kt)("li",{parentName:"ul"},"Check ",(0,r.kt)("a",{parentName:"li",href:"/build/core/beacon-chain/p2p-sampling"},"P2P availability")," of the nodes where their public key starts by the subset hexadecimal identifier "),(0,r.kt)("li",{parentName:"ul"},"Create beacon transaction and notify BeaconChain summary nodes (for the current epoch)"),(0,r.kt)("li",{parentName:"ul"},"Create beacon summary transaction (if it's one of the summary node)"),(0,r.kt)("li",{parentName:"ul"},"Notify explorer about the new transaction validated (See ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:9001/archethic-docs/learn/sharding/beacon-chain/explorer"},"Sharded Explorer"),")")),(0,r.kt)("h2",{id:"timers-and-schedulers"},"Timers and schedulers"),(0,r.kt)("p",null,"Because each BeaconChain subsets change over time, we need a may to determine what are the current nodes for those subsets and so on. So we have two kind of timers and schedulers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slot timer: Manage the interval for the beacon slot creations"),(0,r.kt)("li",{parentName:"ul"},"Summary timer: Manage the interval for the beacon summary creations")),(0,r.kt)("p",null,"Each of those timer provides helpers to be able to generate previous or next dates"),(0,r.kt)("h2",{id:"transaction-loading"},"Transaction loading"),(0,r.kt)("p",null,"Before a transaction's confirmation is loaded into the BeaconChain, a phase of validation is performed to ensure the correctness of the replication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it asserts the transaction's address is the right one"),(0,r.kt)("li",{parentName:"ul"},"it asserts the transaction attestation (node election, signatures, etc.)")),(0,r.kt)("p",null,"For more details, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/beacon_chain/slot/validation.ex"},"SlotValidation")),(0,r.kt)("p",null,"Then the slot is deserialized to be loaded into a cache, for a faster summary aggregation and computation"),(0,r.kt)("h2",{id:"supervisor"},"Supervisor"),(0,r.kt)("p",null,"To manage all those processes and isolation a proper supervision tree is defined"),(0,r.kt)("mermaid",{value:"graph TD\n    A[BeaconChain Supervisor]\n    A --\x3eB[Slot Timer]\n    A --\x3eC[Summary Timer]\n    A --\x3eD{Subset supervisor}\n    D --\x3eE[Summary Cache]\n    D --\x3eF[Subset 0]\n    D --\x3eH[Subset ..F]\n    D --\x3eI[Subset registry]"}))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);