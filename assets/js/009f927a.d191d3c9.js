"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));n(8209);const o={id:"replication-attestation",title:"Replication attestation"},r=void 0,s={unversionedId:"learn/sharding/replication-attestation",id:"learn/sharding/replication-attestation",title:"Replication attestation",description:"How to ensure a minimum of confirmation from the storage nodes to ensure the data availability of a given transaction.",source:"@site/docs/learn/sharding/replication-attestation.md",sourceDirName:"learn/sharding",slug:"/learn/sharding/replication-attestation",permalink:"/learn/sharding/replication-attestation",draft:!1,tags:[],version:"current",lastUpdatedAt:1687852490,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{id:"replication-attestation",title:"Replication attestation"},sidebar:"docs",previous:{title:"Beacon Explorer",permalink:"/learn/sharding/beacon-chain/explorer"},next:{title:"Tokens",permalink:"/learn/token"}},l={},c=[{value:"Heuristic solution",id:"heuristic-solution",level:2},{value:"Nested replications",id:"nested-replications",level:3},{value:"Client notifications",id:"client-notifications",level:3},{value:"Further improvements",id:"further-improvements",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to ensure a minimum of confirmation from the storage nodes to ensure the data availability of a given transaction.\nIf we are not providing this kind of mechanism, we can end up into a network split / mismatch where shards and beacon aren't cross linked.\nAlso we do not want to overload the beacon chain by broadcasting it with hundred of messages for a single transaction summary."),(0,a.kt)("h2",{id:"heuristic-solution"},"Heuristic solution"),(0,a.kt)("p",null,"Each validation node will notify the replications nodes in charge, and wait their confirmations to attest the validity\nand the availability of the transaction in the shard before notifying the beacon chain and the welcome node."),(0,a.kt)("p",null,"In 1st approx, a single notification from the validation nodes is sufficient to ensure the availability. This attestation will contain a list of signatures,\nfrom the replication nodes, to status about their commitment to store the transaction.\nHowever, further attestations and confirmations can be checked later during the time, to provide more security."),(0,a.kt)("p",null,"For example, a beacon chain receiving 1 attestation from a validation node including X storage confirmations\nwill be valid as 3 attestations with their respective confirmations."),(0,a.kt)("h3",{id:"nested-replications"},"Nested replications"),(0,a.kt)("p",null,"Moreover, when we are dealing with recipients for transfer or smart contract calls, we want to support the recipients shards will be notified\nonly when the main transaction is validated and stored.\nSo for example, the replication can be splitted by levels: ","[ Main Chain ]"," -> ","[ Recipient Chains]"),(0,a.kt)("p",null,"Then the welcome node will be notified by a validation node with a given number of replica confirmations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"          V1\n        /  |  \\\nChain: S1  S2  S3\n       /     |   \\\n      Recipient Shards\n")),(0,a.kt)("h3",{id:"client-notifications"},"Client notifications"),(0,a.kt)("p",null,"When a transaction is submitted, the welcome node will transfer this transaction to the validation nodes and return a pending status to the client.\nThe client would have to subscribe to notifications about the completion of the transaction.\nOnce the transaction will be validated and the validation nodes by notifing the welcome will notify the clients asynchronously."),(0,a.kt)("h2",{id:"further-improvements"},"Further improvements"),(0,a.kt)("p",null,"To reduce the overall size of the attestations and confirmations we can support signature aggregation or cosigning to embed a single transaction with a bitfield\nto indicate which nodes signed the transaction replication, which will be signed over by a validation node."))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);