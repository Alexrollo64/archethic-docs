"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6857],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1168:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"smart-contracts",title:"Smart Contracts"},c=void 0,l={unversionedId:"build/smart-contracts",id:"build/smart-contracts",title:"Smart Contracts",description:"Smart-contracts are in computing what robots are in real life: they perform actions according to events.",source:"@site/docs/build/smart-contracts.md",sourceDirName:"build",slug:"/build/smart-contracts",permalink:"/archethic-docs/build/smart-contracts",tags:[],version:"current",lastUpdatedAt:1653663989,formattedLastUpdatedAt:"5/27/2022",frontMatter:{id:"smart-contracts",title:"Smart Contracts"},sidebar:"docs",previous:{title:"Keychain",permalink:"/archethic-docs/learn/decentralized-id/keychain"},next:{title:"Smart Contract Language",permalink:"/archethic-docs/build/smart-contracts/language"}},d=[{value:"Autonomous",id:"autonomous",children:[],level:2},{value:"Modifiable:",id:"modifiable",children:[],level:2},{value:"Interpreted",id:"interpreted",children:[],level:2},{value:"Stateless",id:"stateless",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Smart-contracts are in computing what robots are in real life: they perform actions according to events.")," "),(0,o.kt)("p",null,"Archethic Blockchain leverages next generation of smart contract to make the development of decentralized application easier to bring a mass adoption of the Blockchain technology."),(0,o.kt)("p",null,"They introduce new features to this domain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completly autonomous and can be triggered from internal states (date, transactions) or real life (OracleChain updates)."),(0,o.kt)("li",{parentName:"ul"},"Entirely modifiable: TransactionChains make update seamless"),(0,o.kt)("li",{parentName:"ul"},"Interpreted: Code is interpreted and atomically verified by the miners"),(0,o.kt)("li",{parentName:"ul"},"Without external reality: They are entirely based on the UTXO model and do not depend on the state of an internal database but only the transactions validated")),(0,o.kt)("p",null,"Archethic Smart Contract is defined by: ",(0,o.kt)("inlineCode",{parentName:"p"},"triggers"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"conditions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Triggers: events will automatically launch the execution of a contract."),(0,o.kt)("li",{parentName:"ul"},"Conditions: define the rules to accept new transactions (chain or UTXO)"),(0,o.kt)("li",{parentName:"ul"},"Actions: operations to perform from a trigger's calls")),(0,o.kt)("h2",{id:"autonomous"},"Autonomous"),(0,o.kt)("p",null,"Archethic smart contracts autonomous behavior is due to the capability to define different kind of triggers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Datetime: when the current date matches this timestamp"),(0,o.kt)("li",{parentName:"ul"},"Interval: when the current dates matches this cron interval scheduler"),(0,o.kt)("li",{parentName:"ul"},"Transaction: when the contract receive a transaction in input (UTXO model)"),(0,o.kt)("li",{parentName:"ul"},"Oracle: when the OracleChain pushed new data")),(0,o.kt)("p",null,"!> Since smart contracts can autonomous and create transactions on the behalf of the owner, transaction should authorize nodes to use the cryptographic keys to generate transaction."),(0,o.kt)("p",null,"Then the contract has to specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"inherit conditions")," to accept new changes."),(0,o.kt)("h2",{id:"modifiable"},"Modifiable:"),(0,o.kt)("p",null,"Archethic relies on TransactionChain which means than a smart contract can have its own transaction chain."),(0,o.kt)("p",null,"Then, it subjects to the same properties of the transaction chain: any last transaction of a chain is considered as the reference."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("p",null,"We deployed a smart contract with the address ",(0,o.kt)("inlineCode",{parentName:"p"},"0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"),"."),(0,o.kt)("p",null,"Then we want to add a feature or to fix an issue, we resend a transaction on this chain, and we get the new address: ",(0,o.kt)("inlineCode",{parentName:"p"},"AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C")),(0,o.kt)("p",null,"But clients which depends on the smart contract don't need to update their code or interaction, as each destination address is forwarded to the last one."),(0,o.kt)("p",null,"So if we send a transaction to ",(0,o.kt)("inlineCode",{parentName:"p"},"0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"),", the code executed will be at ",(0,o.kt)("inlineCode",{parentName:"p"},"AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C")),(0,o.kt)("p",null,"?> Also, because we are not relying on internal state and database, and only with the UTXO, we do need to provide migrations of data or funds, and neither implement cross shard synchronization"),(0,o.kt)("h2",{id:"interpreted"},"Interpreted"),(0,o.kt)("p",null,"Archethic smart contracts are interpreted instead of compiled, here are the reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Interpreted code is understandable by the human, and compiled code are only understandable by the computer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Intepreted code makes the transparency and audit of smart contracts easier as we do need to provide the source of the contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Interpreted code makes verification and safety checks better, instead to execute a code in blindness, miners can step by step verify the instructions and avoid any security issues"))),(0,o.kt)("h2",{id:"stateless"},"Stateless"),(0,o.kt)("p",null,"Archethic Smart Contracts does not depend on internal state or databases, only the UTXO is used as inputs, it's not possible to make a database with them."),(0,o.kt)("p",null,"For example"),(0,o.kt)("p",null,"in an e-commerce smart contract, the smart-contract issued by a merchant will be able to define stocks, prices and interactions with its customers using a view which is continuously updated by the nodes responsible for storing the smart-contract and based on transactions validated to that same smart-contract"),(0,o.kt)("p",null,'The "UTXO" operation does not give a status within a smart-contract but allows it to be calculated (in the example above, the merchant cannot directly query a smart-contract on the status of orders, but can verify the proven status of orders through validated transactions).'),(0,o.kt)("p",null,"The experience of a user or a merchant is absolutely identical, since each state is irrefutable and unambiguous."),(0,o.kt)("p",null,"However, if required, we could easily make a snapshot data during time to have faster reads for archived data"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any data processed within the contract which is not stored in the next transaction or send somewhere will be lost"))))}p.isMDXComponent=!0}}]);