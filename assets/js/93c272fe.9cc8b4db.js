"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={id:"smart-contracts",title:"Smart Contracts"},i=void 0,s={unversionedId:"build/smart-contracts/smart-contracts",id:"build/smart-contracts/smart-contracts",title:"Smart Contracts",description:"Smart-contracts are in computing what robots are in real life: they perform actions according to events.",source:"@site/docs/build/smart-contracts/README.md",sourceDirName:"build/smart-contracts",slug:"/build/smart-contracts/",permalink:"/build/smart-contracts/",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858857,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"smart-contracts",title:"Smart Contracts"},sidebar:"docs",previous:{title:"Javascript SDK",permalink:"/build/sdk/js"},next:{title:"Language",permalink:"/build/smart-contracts/language/"}},c={},l=[{value:"Autonomous",id:"autonomous",level:2},{value:"Modifiable:",id:"modifiable",level:2},{value:"Interpreted",id:"interpreted",level:2},{value:"Stateless",id:"stateless",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Smart-contracts are in computing what robots are in real life: they perform actions according to events.")),(0,r.kt)("p",null,"Archethic Blockchain leverages next generation of smart contract to make the development of decentralized application easier to bring a mass adoption of the Blockchain technology."),(0,r.kt)("p",null,"They introduce new features to this domain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Completly autonomous and can be triggered from internal states (date, transactions) or real life (OracleChain updates)."),(0,r.kt)("li",{parentName:"ul"},"Entirely modifiable: TransactionChains make update seamless"),(0,r.kt)("li",{parentName:"ul"},"Interpreted: Code is interpreted and atomically verified by the miners"),(0,r.kt)("li",{parentName:"ul"},"Without external reality: They are entirely based on the UTXO model and do not depend on the state of an internal database but only the transactions validated")),(0,r.kt)("p",null,"Archethic Smart Contract is defined by: ",(0,r.kt)("inlineCode",{parentName:"p"},"triggers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"conditions")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers: events will automatically launch the execution of a contract."),(0,r.kt)("li",{parentName:"ul"},"Conditions: define the rules to accept new transactions (chain or UTXO)"),(0,r.kt)("li",{parentName:"ul"},"Actions: operations to perform from a trigger's calls")),(0,r.kt)("h2",{id:"autonomous"},"Autonomous"),(0,r.kt)("p",null,"Archethic smart contracts autonomous behavior is due to the capability to define different kind of triggers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Datetime: when the current date matches this timestamp"),(0,r.kt)("li",{parentName:"ul"},"Interval: when the current dates matches this cron interval scheduler"),(0,r.kt)("li",{parentName:"ul"},"Transaction: when the contract receive a transaction in input (UTXO model)"),(0,r.kt)("li",{parentName:"ul"},"Oracle: when the OracleChain pushed new data")),(0,r.kt)("p",null,"Transactions are then created on the behalf of the contract's owner which authorized nodes to use the chain's private key to generate transaction."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To restrict a misusage of the user's cryptographic keys, ",(0,r.kt)("inlineCode",{parentName:"p"},"inherit conditions")," can be defined as a security guard by the contract's owner."),(0,r.kt)("p",{parentName:"admonition"},"However, in order to make contract development and improve readability, transparent inherit conditions are generated based on the action's code.\nThis verification is done during the transaction validation and the ARCH consensus with atomic commitment and ensures the next transaction of the chain respects the inherit constraints either :"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"mentioned in the code by the contract's owner"),(0,r.kt)("li",{parentName:"ul"},"derived by the action's code.")),(0,r.kt)("p",{parentName:"admonition"},"This way, users can delegate the chain's private key to the nodes with the guarantee of a good usage of the chain's identity and signature capability.")),(0,r.kt)("h2",{id:"modifiable"},"Modifiable:"),(0,r.kt)("p",null,"Archethic relies on TransactionChain which means that a smart contract can have its own transaction chain."),(0,r.kt)("p",null,"Then, it is subject to the same properties of the transaction chain: any last transaction of a chain is considered as the reference."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,"We deployed a smart contract with the address ",(0,r.kt)("inlineCode",{parentName:"p"},"@Contract1"),"."),(0,r.kt)("p",null,"Then we want to add a feature or to fix an issue, we resend a transaction on this chain, and we get the new address: ",(0,r.kt)("inlineCode",{parentName:"p"},"@Contract2")),(0,r.kt)("p",null,"But clients which depends on the smart contract don't need to update their code or interaction, as each destination address is forwarded to the last one."),(0,r.kt)("p",null,"So if we send a transaction to ",(0,r.kt)("inlineCode",{parentName:"p"},"@Contract#"),", the code executed will be at ",(0,r.kt)("inlineCode",{parentName:"p"},"@Contract2")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Because we are not relying on internal state and database, and only with the UTXO, we don't need to provide migrations of data or funds, and neither implement cross shard synchronization")),(0,r.kt)("h2",{id:"interpreted"},"Interpreted"),(0,r.kt)("p",null,"Archethic smart contracts are interpreted instead of compiled, here are the reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interpreted code is understandable by the human, and compiled code are only understandable by the computer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Intepreted code makes the transparency and audit of smart contracts easier as we do need to provide the source of the contracts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interpreted code makes verification and safety checks better, instead to execute a code in blindness, miners can step by step verify the instructions and avoid any security issues"))),(0,r.kt)("h2",{id:"stateless"},"Stateless"),(0,r.kt)("p",null,"Archethic Smart Contracts does not depend on internal state or databases, only the UTXO is used as inputs and the source of truth relies on the transactions."),(0,r.kt)("p",null,"For example, in an e-commerce smart contract, the smart-contract issued by a merchant will be able to define stocks, prices and interactions with its customers using a view which is continuously updated by the transactions validated to that same smart-contract."),(0,r.kt)("p",null,"The contract doesn't hold a given state but allows it to be calculated. In the example above, can verify the proven status of orders through validated transactions."),(0,r.kt)("p",null,"Hence, each state is irrefutable and unambiguous."),(0,r.kt)("p",null,'However, if required, we could easily make a snapshot data during time to have faster reads for archived data, by creating a new transaction on the chain.\nThis operation would serialize the "state" of a contract and be able to be queried by applications.'),(0,r.kt)("admonition",{title:"Be careful",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Any data processed within the contract which is not stored in the next transaction or send somewhere will be lost")))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);