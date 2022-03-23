"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7265],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),s=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),p=s(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(f,o(o({ref:e},d),{},{components:n})):i.createElement(f,o({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38968:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"replication-attestation",title:"Replication attestation"},l=void 0,s={unversionedId:"learn/sharding/replication-attestation",id:"learn/sharding/replication-attestation",title:"Replication attestation",description:"How to ensure a minimun of confirmation from the storage nodes to ensure the data availability of a given transaction.",source:"@site/docs/learn/sharding/replication-attestation.md",sourceDirName:"learn/sharding",slug:"/learn/sharding/replication-attestation",permalink:"/archethic-docs/learn/sharding/replication-attestation",tags:[],version:"current",lastUpdatedAt:1648066299,formattedLastUpdatedAt:"3/23/2022",frontMatter:{id:"replication-attestation",title:"Replication attestation"},sidebar:"docs",previous:{title:"Beacon Explorer",permalink:"/archethic-docs/learn/sharding/beacon-chain/explorer"},next:{title:"P2P",permalink:"/archethic-docs/learn/p2p"}},d=[{value:"Heuristic solution",id:"heuristic-solution",children:[{value:"Nested replications",id:"nested-replications",children:[],level:3},{value:"Client notifications",id:"client-notifications",children:[],level:3}],level:2},{value:"Further improvements",id:"further-improvements",children:[],level:2}],u={toc:d};function p(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to ensure a minimun of confirmation from the storage nodes to ensure the data availability of a given transaction.\nIf we are not providing this kind of mechanism, we can end up into a network split / mistmatch where shards and beacon aren't cross linked.\nAlso we do not want to overload the beacon chain by broadcasting it with hundred of messages for single transaction summary."),(0,a.kt)("h2",{id:"heuristic-solution"},"Heuristic solution"),(0,a.kt)("p",null,"Each validation node will notify the replications nodes in charge, and wait their confirmations to attest the validity\nand the availability of the transaction in the shard before to notify the beacon chain and the welcome node."),(0,a.kt)("p",null,"In 1st approx, a single notification from the validation nodes is sufficient to ensure the availability. This attestation will contains a list of signatures,\nfrom the replication nodes, to status about their commitment to store the transaction.\nHowever, further attestations and confirmations can be checked later during the time, to provide more security."),(0,a.kt)("p",null,"For example, a beacon chain receiving 1 attestation from a validation node including X storage confirmations\nwill be valid as 3 attestations with their respective confirmations."),(0,a.kt)("h3",{id:"nested-replications"},"Nested replications"),(0,a.kt)("p",null,"Moreover, when we are dealing with recipients for transfer or smart contract calls, we want to support the recipients shards will be notified\nonly when the main transaction is validated and stored.\nSo for example, the replication can be splitted by levels: ","[ Main Chain ]"," -> ","[ Recipient Chains]"),(0,a.kt)("p",null,"Then the welcome node will be notified by a validation node with a given number of replica confirmations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"          V1\n        /  |  \\\nChain: S1  S2  S3\n       /     |   \\\n      Recipient Shards\n")),(0,a.kt)("h3",{id:"client-notifications"},"Client notifications"),(0,a.kt)("p",null,"When a transaction is submitted, the welcome node will transfer this transaction to the validation nodes and return to the client a pending status.\nThe client would have to subscribe to notifications about the completion of the transaction.\nOnce the transaction will be validated and the validation nodes by notifing the welcome will notify the clients asynchronously."),(0,a.kt)("h2",{id:"further-improvements"},"Further improvements"),(0,a.kt)("p",null,"To reduce the overall size of the attestations and confirmations we can support signature aggregation or cosigning to embed a single transaction with a bitfield\nto indicate which nodes signed the transaction replication, which will be signed over by a validation node."))}p.isMDXComponent=!0}}]);