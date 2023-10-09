"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={id:"sharding",title:"Sharding"},i=void 0,s={unversionedId:"learn/sharding/sharding",id:"learn/sharding/sharding",title:"Sharding",description:"To become an unlimited decentralized network, Archethic Blockchain is using a feature called Sharding, used to split processing and storage power to ensure a scalable system.",source:"@site/docs/learn/sharding/README.md",sourceDirName:"learn/sharding",slug:"/learn/sharding/",permalink:"/learn/sharding/",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858857,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"sharding",title:"Sharding"},sidebar:"docs",previous:{title:"Self Repair",permalink:"/learn/p2p/self-repair"},next:{title:"Beacon Chain",permalink:"/learn/sharding/beacon-chain/"}},l={},c=[{value:"Validation",id:"validation",level:2},{value:"Storage",id:"storage",level:2},{value:"Rotating Election",id:"rotating-election",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To become an unlimited decentralized network, Archethic Blockchain is using a feature called ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharding"),", used to split processing and storage power to ensure a scalable system."),(0,r.kt)("p",null,"Thanks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction Chain")," paradigm, transactions can be divided into chains, to ensure a concurrent processing\nas the opposite of traditional blockchains."),(0,r.kt)("p",null,"Other new blockchain networks start to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharding")," but sometimes not in a complete form: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"either storage"),(0,r.kt)("li",{parentName:"ul"},"either validation")),(0,r.kt)("p",null,"Archethic Blockchain supports a complete sharding scheme for validation and for storage."),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"Each transaction is validated by a new set of rotating nodes."),(0,r.kt)("p",null,"This ensures the distribution of validation and processing, to achieve a linear scalability and a high TPS."),(0,r.kt)("p",null,"Because transaction are using the UTXO model,\nthere is no reality out of the transaction, so the network is not subject to issues like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cross shards synchronization"),(0,r.kt)("li",{parentName:"ul"},"state channels communication")),(0,r.kt)("p",null,"To get the state of a transaction, only the transaction and the transaction inputs will be taken into consideration"),(0,r.kt)("h2",{id:"storage"},"Storage"),(0,r.kt)("p",null,"After the validation of the transaction, validation nodes will be in charge to send the transaction to several pools of nodes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transaction Chain Storage Pool: All the transaction associated with the same chain must be replicated on the storage nodes associated with the new transaction's address."),(0,r.kt)("li",{parentName:"ul"},"I/O Storage Pool: Each validated transaction is replicated on the storage nodes associated with the addresses of the transaction input/outputs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Transaction movements addresses storage pools"),(0,r.kt)("li",{parentName:"ul"},"Node movements public key storage pools"),(0,r.kt)("li",{parentName:"ul"},"Recipients addresses storage pools"))),(0,r.kt)("li",{parentName:"ul"},"Beacon Storage Pool: Each transaction address must be replicated on the storage nodes of the associated address subset ",(0,r.kt)("a",{parentName:"li",href:"/learn/sharding/beacon-chain"},"See BeaconChain"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For each transaction, the Transaction Chain Storage Pool will change, assuring a completed distribution of nodes and the data replication. Nevertheless, nothing prevents the storage nodes to overlap within the chain.")),(0,r.kt)("h2",{id:"rotating-election"},"Rotating Election"),(0,r.kt)("p",null,"Like the validation nodes election, the storage nodes election is subject to a rotating election.\nIn other terms, each transaction will have its own shard and storage nodes."),(0,r.kt)("p",null,"The storage node election is based on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the address of the transaction"),(0,r.kt)("li",{parentName:"ul"},"the storage nonce: a stable secret known by the network"),(0,r.kt)("li",{parentName:"ul"},"the list of nodes")),(0,r.kt)("p",null,"This permits any node to perform this computation autonomously to reproduce this list and to request a transaction from the closest node."),(0,r.kt)("p",null,"To ensure the best availability of the data, this list is refined by some criteria, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"P2P availability"),(0,r.kt)("li",{parentName:"ul"},"Geographical distribution")))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);