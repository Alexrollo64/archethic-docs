"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[703],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9011:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={id:"archethic-intro",title:"ARCHEthic introduction"},l=void 0,c={unversionedId:"learn/archethic-intro",id:"learn/archethic-intro",title:"ARCHEthic introduction",description:"ARCHEthic is the next generation of Blockchain which provides a truly decentralized limitless network, using TransactionChain and a new consensus named ARCH (Atomic Rotating Commitment Heuristic),",source:"@site/docs/learn/archethic-intro.md",sourceDirName:"learn",slug:"/learn/archethic-intro",permalink:"/archethic-docs/learn/archethic-intro",tags:[],version:"current",lastUpdatedAt:1643892115,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"archethic-intro",title:"ARCHEthic introduction"},sidebar:"docs",next:{title:"UCO token",permalink:"/archethic-docs/learn/uco"}},u=[{value:"Motivations",id:"motivations",children:[],level:2},{value:"Innovations",id:"innovations",children:[],level:2}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ARCHEthic is the next generation of Blockchain which provides a truly decentralized limitless network, using TransactionChain and a new consensus named ARCH (Atomic Rotating Commitment Heuristic),\nto be the most secure and scalable decentralized network."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"ARCHEthic's network is built to overcome the issues faced by other blockchain solutions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support of billions of transactions"),(0,r.kt)("li",{parentName:"ul"},"Linear scalability"),(0,r.kt)("li",{parentName:"ul"},"Low-energy consumption"),(0,r.kt)("li",{parentName:"ul"},"Mass adoption"),(0,r.kt)("li",{parentName:"ul"},"Low transaction fees")),(0,r.kt)("p",null,"This document aims to provide information and resources about the technology and the usage to build new decentralized applications on top of ARCHEthic."),(0,r.kt)("h2",{id:"motivations"},"Motivations"),(0,r.kt)("p",null,"Given the universal constraints both material and physical, billions of transactions cannot be integrated into a single branch of chained blocks."),(0,r.kt)("p",null,"Similarly, regardless of the consensus method, it is not possible to ensure universal consensus on billions of transactions by polling all nodes of the network."),(0,r.kt)("p",null,"Finally, the functioning of current distributed networks (P2P) is such that it is not possible to guarantee the freshness (consistency) of data on an asynchronous network,\nunless the network is slowed down excessively by the calculation of the nonce of the block (PoW), as is the case with other blockchain networks."),(0,r.kt)("h2",{id:"innovations"},"Innovations"),(0,r.kt)("p",null,"ARCHEthic Blockchain solved this issues in the following way:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"TransactionChains"),"Instead of chained blocks of transactions, each block is reduced to its atomic form.",(0,r.kt)("br",null),"Therefore, each block contains only one transaction and each transaction will be chained in its own chain."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Real Sharded Network"),"ARCHEthic is using sharding technology to ensure distribution of transaction processing and storage to provide a very high scalability."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Next-generation consensus"),"ARCHEthic is using an universal consensus called ARCH based on Atomic Commitment using Heuristic Rotating election of a tiny set of validation nodes providing the highest level of security"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optimized Replication and Self Repair"),"Every transaction will be stored in a deterministic way on a set of nodes using a sharded storage layer.",(0,r.kt)("br",null),"Thus, every node will autonomously know all the nodes for a given transaction and ease the network by only interrogating the closest elected nodes."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Distributed network without bottleneck"),"ArchEthic rebuilds the entire P2P layer to provide an efficient messaging between peers based on the Supervised Multicast using self discovery mechanism from incoming connection and network transactions.",(0,r.kt)("br",null),"The system is able to maintain a qualified vision of the network while limiting the generation of requests."))}h.isMDXComponent=!0}}]);