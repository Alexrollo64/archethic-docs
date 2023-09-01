"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,f=p["".concat(c,".").concat(u)]||p[u]||h[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));n(8209);const r={id:"governance",title:"Governance"},i=void 0,l={unversionedId:"learn/governance/governance",id:"learn/governance/governance",title:"Governance",description:"A DAO (Decentralized Autonomous Organization) is a decentralized organization whose governance rules are automated,",source:"@site/docs/learn/governance/governance.md",sourceDirName:"learn/governance",slug:"/learn/governance/",permalink:"/learn/governance/",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557909,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"governance",title:"Governance"},sidebar:"docs",previous:{title:"Keychain",permalink:"/learn/decentralized-id/keychain"},next:{title:"OracleChain",permalink:"/learn/oracle-chain"}},c={},s=[{value:"Decentralized Identity &amp; Proof of Identity",id:"decentralized-identity--proof-of-identity",level:2},{value:"Code \xabOn-Chain\xbb",id:"code-on-chain",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Details",id:"details",level:3},{value:"Incentives",id:"incentives",level:2}],d={toc:s},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A DAO (Decentralized Autonomous Organization) is a decentralized organization whose governance rules are automated,\nimmutable, and transparently embedded in a blockchain."),(0,o.kt)("p",null,"It's one of the biggest challenge in the Blockchain's industry. Often relayed as \"code is law\", those governance model is\nonly applied to a single actor which the miner's owner."),(0,o.kt)("p",null,"While those model are decentralized, they are ignoring huge part of the ecosystem being the users themselves, the\napplication providers, the technical contributors, and even the Blockchain itself constrained by the code installed on the\nhighest computing power."),(0,o.kt)("p",null,"The governance of the Archethic Blockchain is based on several technical and functional fundamentals:"),(0,o.kt)("h2",{id:"decentralized-identity--proof-of-identity"},"Decentralized Identity & Proof of Identity"),(0,o.kt)("p",null,"An essential prerequisite for a human-inclusive governance:\nthe ability of the ecosystem to uniquely identify a person and\nto integrate that person into a relevant group of actors"),(0,o.kt)("h2",{id:"code-on-chain"},"Code \xabOn-Chain\xbb"),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'The code used by the nodes is hosted by the Blockchain itself, so the network is certain that all the nodes will\nimmediately apply the decided updates (via Elixir hot-reload modules and from the information stored in the "transaction content" area). '),(0,o.kt)("p",null,"The Archethic Blockchain is also equipped with the ability to test the impact of a new feature in real-time."),(0,o.kt)("p",null,"Each update is stored in the form of a specific transaction chain allowing the network to version (git...) all updates, but also to force each update according to a specific governance (voting quorum, veto right...)."),(0,o.kt)("h3",{id:"details"},"Details"),(0,o.kt)("p",null,"Archethic Blockchain is using code proposals to have a way to upgrade current blockchain code in a automated and tested way. "),(0,o.kt)("p",null,"The idea behind the governance on Archethic blockchain is to be able to audit, test and apply code proposals in a automatic, indepedent and secure way across the deployed network."),(0,o.kt)("mermaid",{value:"flowchart LR\n    Dev[Developer] --\x3e|Create proposal| CodeProposal(Transaction)\n    CodeProposal --\x3e SemanticValidation(Semantic Validation)\n    SemanticValidation --\x3e CI(Continuous Integration)\n    CI --\x3e CD(Continuous Deployment)\n    CD --\x3e Up(Upgrade)\n    Up --\x3e Reward(Reward)\n    Reward --\x3e Dev"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The process begins when a contributor creates a code proposal within a transaction. This code proposal will be checked to ensure that it follows the proper form (contains the correct fields for example)."),(0,o.kt)("li",{parentName:"ol"},"After the code proposal is verified, we start going over the details of the proposal and verifying that it contains correct version, valid upgrade terms and valid changes for example."),(0,o.kt)("li",{parentName:"ol"},"When the code proposal is considered valid, and after gathering enough approvals from members of the technical council, we start the Continuous Integration phase.\nThe role of this part is to check that the proposal passes the tests, security checks and code style."),(0,o.kt)("li",{parentName:"ol"},"If the phase returns a success then we start the Continuous Deployment phase.\nThe aim of this part is to test the proposal in a real world settings by deploying it into a testnet with various nodes performing multiple distinct functions."),(0,o.kt)("li",{parentName:"ol"},"After the last phase succeeded, we launch the next phase which consists of upgrading the actual nodes to the new versions and finally rewarding all the actors that participated in the global process.")),(0,o.kt)("h2",{id:"incentives"},"Incentives"),(0,o.kt)("p",null,"Financing of the work associated with updates, new features, and contributions is an essential element.\nThe network has a reserve of one-third of the tokens (with progressive distribution constraints) for this purpose."))}h.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);