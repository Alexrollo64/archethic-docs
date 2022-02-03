"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[942],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},240:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"beacon-chain",title:"Beacon Chain"},l=void 0,c={unversionedId:"learn/sharding/beacon-chain",id:"learn/sharding/beacon-chain",title:"Beacon Chain",description:"ARCHEthic Blockchain is using Sharding mechanism to ensure scalability in terms of storage and validation.",source:"@site/docs/learn/sharding/beacon-chain.md",sourceDirName:"learn/sharding",slug:"/learn/sharding/beacon-chain",permalink:"/archethic-docs/learn/sharding/beacon-chain",tags:[],version:"current",lastUpdatedAt:1643892115,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"beacon-chain",title:"Beacon Chain"},sidebar:"docs",previous:{title:"Sharding",permalink:"/archethic-docs/learn/sharding"},next:{title:"Beacon Explorer",permalink:"/archethic-docs/learn/sharding/beacon-chain/explorer"}},d=[{value:"Concepts",id:"concepts",children:[],level:2},{value:"Transaction tracking and timestamping",id:"transaction-tracking-and-timestamping",children:[],level:2},{value:"Status and Network Coordinates of nodes",id:"status-and-network-coordinates-of-nodes",children:[],level:2},{value:"Slot",id:"slot",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ARCHEthic Blockchain is using ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharding")," mechanism to ensure scalability in terms of storage and validation."),(0,r.kt)("p",null,"But since there is no way in a well sharded and distributed network to know all the transaction in the system,\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Beacon Chain")," is used to keep a global synchronization and reference."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Beacon Chain")," is used as tracer/marker of a global state but to face some scalability issue, ARCHEthic Blockchain is using ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharding")," also for the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeaconChain"),"."),(0,r.kt)("p",null,"Which means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Beacon Chain")," is sharded and divided into ",(0,r.kt)("inlineCode",{parentName:"p"},"subset")," defined by the transaction's address and a given date."),(0,r.kt)("p",null,"For example: a transaction's address starting by ",(0,r.kt)("inlineCode",{parentName:"p"},"0F")," for a given day, will not be stored on the same subset as a transaction's address starting by ",(0,r.kt)("inlineCode",{parentName:"p"},"9F")," for the same day."),(0,r.kt)("h2",{id:"transaction-tracking-and-timestamping"},"Transaction tracking and timestamping"),(0,r.kt)("p",null,"Each time a transaction is validated, the validation nodes will send the transaction to the right Beacon Chain storage nodes, to transmit the address of the transaction and its timestamp."),(0,r.kt)("p",null,"For each Beacon Chain interval, a new slot is generated referencing all the transaction during this interval."),(0,r.kt)("p",null,"At the end of the day, a transaction chain is formed, and a last transaction is computed to generate a summary of the current day for a given subset."),(0,r.kt)("p",null,"Because each transaction has its own storage nodes, ",(0,r.kt)("inlineCode",{parentName:"p"},"Beacon Chains")," are balanced between the storage nodes to ensure a better scalability and distribution."),(0,r.kt)("h2",{id:"status-and-network-coordinates-of-nodes"},"Status and Network Coordinates of nodes"),(0,r.kt)("p",null,"Beacon Chains also contain network status of the nodes where the public key starts by the Beacon Chain subset."),(0,r.kt)("p",null,"The storage nodes in each subset is in charge of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check the node availabilities"),(0,r.kt)("li",{parentName:"ul"},"gather networking information such as latency, bandwidth")),(0,r.kt)("p",null,"At the end of the day, a transaction is formed as well and a last transaction is computed to generate a summary of node availability and network coordinates"),(0,r.kt)("h2",{id:"slot"},"Slot"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Beacon Chain")," is divided during the day into multiple slots, defined by interval (for instance every 10 min)."),(0,r.kt)("p",null,"Those slot contains the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transaction summaries: timestamping of the validated transactions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"address: Transaction's address"),(0,r.kt)("li",{parentName:"ul"},"timestamp: Transaction validation time"),(0,r.kt)("li",{parentName:"ul"},"movements addresses: List of outputs addresses of the transaction"))),(0,r.kt)("li",{parentName:"ul"},"End of node synchronization: timestamping when a node finished its synchronization",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"node public key: Node's first public key"),(0,r.kt)("li",{parentName:"ul"},"timestamp: Time when the node synchronization ended"))),(0,r.kt)("li",{parentName:"ul"},"P2P view:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"availabilities: binary form of the availability of the sampled nodes for the given subset"),(0,r.kt)("li",{parentName:"ul"},"network statistics: latency and bandwidth of the sampled nodes for the given subset")))))}p.isMDXComponent=!0}}]);