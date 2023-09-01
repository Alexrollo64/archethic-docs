"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));n(8209);const r={id:"dapps-communication",title:"Communication with DApps",sidebar_label:"Communication with DApps",sidebar_position:1},s=void 0,o={unversionedId:"participate/wallet/dapps-communication",id:"participate/wallet/dapps-communication",title:"Communication with DApps",description:"In the blockchain ecosystem, decentralized applications (dApps) are becoming increasingly popular. To enable reliable and secure communication between these applications and the blockchain, Archethic has developed a communication protocol with its Archethic Wallet application. This protocol allows dApps to delegate secure communication with the blockchain to the wallet and to protect private information within the wallet (seed, private keys) without exposing it to the dApps.",source:"@site/docs/participate/wallet/dapps-communication.md",sourceDirName:"participate/wallet",slug:"/participate/wallet/dapps-communication",permalink:"/participate/wallet/dapps-communication",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557909,formattedLastUpdatedAt:"Sep 1, 2023",sidebarPosition:1,frontMatter:{id:"dapps-communication",title:"Communication with DApps",sidebar_label:"Communication with DApps",sidebar_position:1},sidebar:"docs",previous:{title:"Archethic Wallet",permalink:"/participate/wallet/"},next:{title:"Build",permalink:"/category/build"}},c={},l=[{value:"get_endpoint",id:"get_endpoint",level:2},{value:"Request",id:"request",level:3},{value:"Success Response",id:"success-response",level:3},{value:"get_accounts",id:"get_accounts",level:2},{value:"Request",id:"request-1",level:3},{value:"Success Response",id:"success-response-1",level:3},{value:"send_transaction",id:"send_transaction",level:2},{value:"Request",id:"request-2",level:3},{value:"Success Response",id:"success-response-2",level:3},{value:"add_service",id:"add_service",level:2},{value:"Request",id:"request-3",level:3},{value:"Success Response",id:"success-response-3",level:3},{value:"get_services_from_keychain",id:"get_services_from_keychain",level:2},{value:"Request",id:"request-4",level:3},{value:"Success Response",id:"success-response-4",level:3},{value:"keychain_derive_keypair",id:"keychain_derive_keypair",level:2},{value:"Request",id:"request-5",level:3},{value:"Success Response",id:"success-response-5",level:3},{value:"keychain_derive_address",id:"keychain_derive_address",level:2},{value:"Request",id:"request-6",level:3},{value:"Success Response",id:"success-response-6",level:3},{value:"get_current_account",id:"get_current_account",level:2},{value:"Request",id:"request-7",level:3},{value:"Success Response",id:"success-response-7",level:3},{value:"sign_transactions",id:"sign_transactions",level:2},{value:"Request",id:"request-8",level:3},{value:"Success Response",id:"success-response-8",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the blockchain ecosystem, decentralized applications (dApps) are becoming increasingly popular. To enable reliable and secure communication between these applications and the blockchain, Archethic has developed a communication protocol with its Archethic Wallet application. This protocol allows dApps to delegate secure communication with the blockchain to the wallet and to protect private information within the wallet (seed, private keys) without exposing it to the dApps."),(0,i.kt)("h1",{id:"point-of-view-on-usage"},"Point of view on usage"),(0,i.kt)("p",null,"When a dApp wants to perform a transaction that requires the use of private keys, it must call on the user\u2019s wallet to protect this information and avoid unauthorized exposure. There are several ways to do this:"),(0,i.kt)("p",null,"The dApp can solicit the wallet in a \u201ccovert\u201d manner without requiring the user\u2019s intervention. For example, it can retrieve information about the current account or services available in the decentralized wallet."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1",src:n(3148).Z,width:"815",height:"158"})),(0,i.kt)("p",null,"The dApp can also listen to the wallet and adapt itself according to the actions performed in it. For example, a change in the current account in the wallet may result in a change in the current account in the dApp."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2",src:n(3886).Z,width:"1004",height:"295"})),(0,i.kt)("p",null,"Finally, the dApp can solicit the wallet and ask the user to confirm an action. For example, this could be the signing of a transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3",src:n(1079).Z,width:"1262",height:"420"})),(0,i.kt)("h1",{id:"technical-point-of-view"},"Technical point of view"),(0,i.kt)("p",null,"In order not to limit the platforms, Archethic has implemented two protocols to allow an easy integration of its wallet with dApps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Desktop and Web Client platforms, Archethic uses the Local RPC server protocol. A WebSocket server is provided by Archethic Wallet, using the JSON-RPC 2.0 protocol. DApp developers can use the Dart or JS coded communication libraries provided by Archethic to easily integrate this functionality into their dApp."),(0,i.kt)("li",{parentName:"ul"},"For Mobile platforms, Archethic uses DeepLinks via an HTTPS URL to enable communication between the dApp and the Archethic wallet.")),(0,i.kt)("p",null,"For the Dart and Flutter part, these protocols have been implemented within the \u201cArchethic Wallet Client\u201d (AWC) communication library, which therefore allows Dapps to communicate with the Archethic wallet through a unified interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"4",src:n(8268).Z,width:"1321",height:"685"})),(0,i.kt)("p",null,"AWC supports several API methods, including signing and sending transactions to the Archethic blockchain, retrieving the wallet\u2019s endpoint URL, retrieving accounts available on the wallet, adding services to the keychain, and more."),(0,i.kt)("p",null,"Using AWC allows Dapps developers to focus on developing their application rather than managing communication with the wallet and blockchain. The solution is also cross-platform (macOS, iOS, Android, Web, Windows, Linux), which facilitates the interaction between users and the blockchain and avoids forcing developers to develop their Dapps on a specific platform."),(0,i.kt)("p",null,"It is worth noting that for the JS part, developers can find the interfaces directly in the \u201clibjs\u201d library of Archethic. This greatly facilitates the integration of the wallet with dApps written in JavaScript."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"5",src:n(4389).Z,width:"1321",height:"684"})),(0,i.kt)("h1",{id:"available-commands"},"Available commands"),(0,i.kt)("p",null,"The wallet context related commands that do not require user confirmation in the wallet are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Endpoint retrieval,"),(0,i.kt)("li",{parentName:"ul"},"Recovery of user accounts,"),(0,i.kt)("li",{parentName:"ul"},"Recovery of the current account,"),(0,i.kt)("li",{parentName:"ul"},"Recovery of the services contained in the decentralized wallet,"),(0,i.kt)("li",{parentName:"ul"},"Derivation of a key pair for a given service and index and recovery of the public key,"),(0,i.kt)("li",{parentName:"ul"},"Deriving an address for a given service and index.")),(0,i.kt)("p",null,"The information that can be listened to is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The change of balance or last address of the current account,"),(0,i.kt)("li",{parentName:"ul"},"The change of the current account.")),(0,i.kt)("p",null,"The commands related to the wallet context requiring the user\u2019s confirmation in the wallet are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Signing and sending a transaction to the blockchain,"),(0,i.kt)("li",{parentName:"ul"},"Signature of a list of transactions,"),(0,i.kt)("li",{parentName:"ul"},"Adding a service in the decentralized wallet.")),(0,i.kt)("h1",{id:"rpc-methods"},"RPC Methods"),(0,i.kt)("p",null,"There are two kinds of methods :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"one time call"),(0,i.kt)("li",{parentName:"ul"},"subscriptions.")),(0,i.kt)("p",null,"Subscriptions won't be available on Deeplink channel because of technical limitations."),(0,i.kt)("h2",{id:"get_endpoint"},"get_endpoint"),(0,i.kt)("p",null,"Gets the endpoint URL used on AEWallet."),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// no payload in request\n")),(0,i.kt)("h3",{id:"success-response"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "endpointUrl": String // Endpoint URL\n}\n')),(0,i.kt)("h2",{id:"get_accounts"},"get_accounts"),(0,i.kt)("p",null,"Gets the accounts avalaible on AEWallet."),(0,i.kt)("h3",{id:"request-1"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// No payload\n")),(0,i.kt)("h3",{id:"success-response-1"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "accounts": [\n    {\n      "name": String,           // Account name\n      "genesisAddress": String, // Genesis address\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"send_transaction"},"send_transaction"),(0,i.kt)("p",null,"Signs and sends a transaction."),(0,i.kt)("h3",{id:"request-2"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "type": String,                 // Type of transaction\n  "version": Number,              // Version of the transaction (used for backward compatiblity)\n  "data": Object,                 // Transaction data zone (identity, keychain, smart contract, etc.)\n}\n')),(0,i.kt)("h3",{id:"success-response-2"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "transactionAddress": String,  // Sent transaction address.\n  "nbConfirmations": Number,     // Number of received confirmations.\n  "maxConfirmations": Number,    // Max number of confirmations.\n}\n')),(0,i.kt)("h2",{id:"add_service"},"add_service"),(0,i.kt)("p",null,"Add a service in the keychain"),(0,i.kt)("h3",{id:"request-3"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "name": String,                 // Name of the service\n}\n')),(0,i.kt)("h3",{id:"success-response-3"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "transactionAddress": String,  // Transaction address.\n  "nbConfirmations": Number,     // Number of received confirmations.\n  "maxConfirmations": Number,    // Max number of confirmations.\n}\n')),(0,i.kt)("h2",{id:"get_services_from_keychain"},"get_services_from_keychain"),(0,i.kt)("p",null,"Gets keychain's services from the keychain connected to AEWallet."),(0,i.kt)("h3",{id:"request-4"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// No payload\n")),(0,i.kt)("h3",{id:"success-response-4"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "services": [\n    {\n      "derivationPath": String, // Derivation path\n      "curve": String, // Curve\n      "hashAlgo": String // Hash Algo\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"keychain_derive_keypair"},"keychain_derive_keypair"),(0,i.kt)("p",null,"Derive a keypair for the given service at the index given and get the public key"),(0,i.kt)("h3",{id:"request-5"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "serviceName": String,  // Service name to identify the derivation path to use\n  "index": Number,        // Chain index to derive (optional - default to 0)\n  "pathSuffix": String    // Additional information to add to a service derivation path (optional - default to empty)\n}\n')),(0,i.kt)("h3",{id:"success-response-5"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "publicKey": String     // Public key of the service at the index given\n}\n')),(0,i.kt)("h2",{id:"keychain_derive_address"},"keychain_derive_address"),(0,i.kt)("p",null,"Derive an address for the given service at the index given"),(0,i.kt)("h3",{id:"request-6"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "serviceName": String,  // Service name to identify the derivation path to use\n  "index": Number,        // Chain index to derive (optional - default to 0)\n  "pathSuffix": String    // Additional information to add to a service derivation path (optional - default to empty)\n}\n')),(0,i.kt)("h3",{id:"success-response-6"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "address": String     // Address derived\n}\n')),(0,i.kt)("h2",{id:"get_current_account"},"get_current_account"),(0,i.kt)("p",null,"Gets the current account selected on AEWallet."),(0,i.kt)("h3",{id:"request-7"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// No payload\n")),(0,i.kt)("h3",{id:"success-response-7"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "name": String,           // Account name\n  "genesisAddress": String, // Genesis address\n}\n')),(0,i.kt)("h2",{id:"sign_transactions"},"sign_transactions"),(0,i.kt)("p",null,"Signs many transactions."),(0,i.kt)("h3",{id:"request-8"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "serviceName": String,              // Service name to use to sign the tx\n  "pathSuffix": String,               // Additional information to add to a service derivation path (optional)\n  "transactions": [\n    {\n      "type": String,                 // Type of transaction\n      "version": Number,              // Version of the transaction (used for backward compatiblity)\n      "data": Object                  // Transaction data zone (identity, keychain, smart contract, etc.)\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"success-response-8"},"Success Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "signedTxs": [\n    {\n      "address": String,              // Address: hash of the new generated public key for the given transaction\n      "previousPublicKey": String,    // Previous generated public key matching the previous signature\n      "previousSignature": String,    // Signature from the previous public key\n      "originSignature": String       // Signature from the device which originated the transaction (used in the Proof of work)\n    }\n  ]\n}\n')),(0,i.kt)("h1",{id:"in-conclusion"},"In conclusion"),(0,i.kt)("p",null,"The communication protocol developed by Archethic allows an easy and secure interaction between dApps and the blockchain by delegating the communication to the user\u2019s wallet. The integration methods proposed are simple and efficient, especially thanks to the \u201cArchethic Wallet Client\u201d (AWC) communication library which facilitates the use of the API. Developers can focus on developing their application without having to manage communication with the wallet and the blockchain. This cross-platform solution is therefore a wise choice for developers who want to write dApps that are compatible with different platforms. Finally, the availability of interfaces in the \u201clibjs\u201d library also facilitates integration for developers of applications written in JavaScript."),(0,i.kt)("p",null,"Find more information at the following links."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AEIP 4 / Specifications: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/aeip/blob/main/AEIP-4.md"},"https://github.com/archethic-foundation/aeip/blob/main/AEIP-4.md")),(0,i.kt)("li",{parentName:"ul"},"AWC Dart lib: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/archethic-wallet-client-dart"},"https://github.com/archethic-foundation/archethic-wallet-client-dart")),(0,i.kt)("li",{parentName:"ul"},"AWC JS lib (into archethic JS lib): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/libjs"},"https://github.com/archethic-foundation/libjs"))))}u.isMDXComponent=!0},3148:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},3886:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-5d6085ceb76c0bd0ffdb9a438a83d08d.webp"},1079:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-3258cf4b259426fbb84541316eca5d55.webp"},8268:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-2fb8682543e15e738aacb6684b57b221.webp"},4389:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-997d8657ade91f1c2a419d5187b3de61.webp"},8209:(e,t,n)=>{n(7294)}}]);