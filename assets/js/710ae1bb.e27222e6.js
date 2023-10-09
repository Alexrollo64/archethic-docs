"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));a(8209);const o={id:"cryptography",title:"Cryptography"},i=void 0,l={unversionedId:"learn/cryptography/cryptography",id:"learn/cryptography/cryptography",title:"Cryptography",description:"Archethic network through the usage of TransactionChains is leveraging an adaptative and quantum-safe cryptography.",source:"@site/docs/learn/cryptography/README.md",sourceDirName:"learn/cryptography",slug:"/learn/cryptography/",permalink:"/learn/cryptography/",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858857,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"cryptography",title:"Cryptography"},sidebar:"docs",previous:{title:"Proof of Work",permalink:"/learn/arch-consensus/proof-of-work"},next:{title:"Harware Root of Trust",permalink:"/learn/cryptography/hardware-root-of-trust"}},s={},p=[{value:"Quantum-Safe",id:"quantum-safe",level:2},{value:"Non-Discolure of public keys",id:"non-discolure-of-public-keys",level:3},{value:"Origin Devices",id:"origin-devices",level:3},{value:"Adaptative",id:"adaptative",level:2},{value:"Public keys",id:"public-keys",level:3},{value:"Hashes",id:"hashes",level:3},{value:"Transaction addresses",id:"transaction-addresses",level:3},{value:"Default algorithms",id:"default-algorithms",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Archethic network through the usage of TransactionChains is leveraging an adaptative and quantum-safe cryptography."),(0,n.kt)("h2",{id:"quantum-safe"},"Quantum-Safe"),(0,n.kt)("h3",{id:"non-discolure-of-public-keys"},"Non-Discolure of public keys"),(0,n.kt)("p",null,"Archethic ",(0,n.kt)("a",{parentName:"p",href:"/learn/transaction-chain"},"TransactionChains")," uses a non-disclosure mechanism of public keys using chains of cryptography.\nEach transaction contains an address, which is a hash of the next public key and the previous public key.\nTherefore, we don't have way to know which public key is used for a given transaction until a next one is coming."),(0,n.kt)("h3",{id:"origin-devices"},"Origin Devices"),(0,n.kt)("p",null,"In order to build a transaction, we need to known multiple temporary private keys a key to provide a signature based on the previous private key and a signature based on an origin device private key.\nOrigin device can be categorized in several families: software, hardware, biometrics. (See ",(0,n.kt)("a",{parentName:"p",href:"/learn/arch-consensus/proof-of-work"},"Proof of Work"),")"),(0,n.kt)("p",null,"So to be allowed to generate a transaction, the task of a quantum computer potentially capable of ",(0,n.kt)("strong",{parentName:"p"},"breaking")," private keys should be considerably more complex"),(0,n.kt)("h2",{id:"adaptative"},"Adaptative"),(0,n.kt)("p",null,"In order to be backward compatible and to evolve the network as the cryptographic research progesses and to provide the choice of cryptographic algorithms to people, organizations or countries, Archethic is a versioned cryptography or metadata cryptography."),(0,n.kt)("p",null,"While this word sounds complex, it's not hard to get it."),(0,n.kt)("h3",{id:"public-keys"},"Public keys"),(0,n.kt)("p",null,"Each public key is prepended by some additional bytes to inform some metadata or algorithm versioning.\nThis includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a byte to indicate the elliptic curve used (i.e Ed25519, NIST, secp256k1)"),(0,n.kt)("li",{parentName:"ul"},"a byte to indicate the origin of the generation (i.e software, hardware, ...)")),(0,n.kt)("h3",{id:"hashes"},"Hashes"),(0,n.kt)("p",null,"Like the public keys, cryptographic hashes are also versioned with a byte of to identify which algorithms is used (i.e SHA-256).\nThis information helps to determine the length of a hash and to perform some checks for the validition and for the encoding/decoding of the data."),(0,n.kt)("h3",{id:"transaction-addresses"},"Transaction addresses"),(0,n.kt)("p",null,"While transaction addresses are often represented as hashes, Archethic provide a new level of information inside the transaction's address. A byte is prepending the hash with an information regarding the elliptic curve used to generate the public key related."),(0,n.kt)("p",null,"You may be wondering why would we need this kind of information."),(0,n.kt)("p",null,"So, in order to be really adaptative and based on the non-disclosure mechanism offered by the transaction chain, we need to know which elliptic was used for a previous transaction to be able to reproduce the previous public key."),(0,n.kt)("p",null,"For example, imagine we have a transaction address encoded in that way, using a ",(0,n.kt)("inlineCode",{parentName:"p"},"secp256k1")," elliptic"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Hash algorithm"),(0,n.kt)("th",{parentName:"tr",align:null},"Digest"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"01"),(0,n.kt)("td",{parentName:"tr",align:null},"01309F1C765967AC7")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Reminder: a transaction address is the hash of the next public key")),(0,n.kt)("p",null,"For a new transaction coming after, if now, we want to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"ed25519")," elliptic curve, we need to know which was used before. For this reason, we have two possibility:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"keep an history of the previous transaction and curves (",(0,n.kt)("em",{parentName:"li"},"not really pratical and not scalable"),")"),(0,n.kt)("li",{parentName:"ul"},"add a byte in front of each transaction's address to the curve used")),(0,n.kt)("p",null,"So with a new model:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Curve type"),(0,n.kt)("th",{parentName:"tr",align:null},"Hash algorithm"),(0,n.kt)("th",{parentName:"tr",align:null},"Digest"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"01"),(0,n.kt)("td",{parentName:"tr",align:null},"01"),(0,n.kt)("td",{parentName:"tr",align:null},"01309F1C765967AC7")))),(0,n.kt)("p",null,"Now we are able to compute the previous public key, with the curve ",(0,n.kt)("inlineCode",{parentName:"p"},"secp256k1")," and continues with new elliptic curve along the way."),(0,n.kt)("p",null,"This will be even more pratical with On-Chain Decentralized Wallet (",(0,n.kt)("inlineCode",{parentName:"p"},"Keychain"),") to support multiple derived keys and custom algorithms."),(0,n.kt)("h2",{id:"default-algorithms"},"Default algorithms"),(0,n.kt)("p",null,"Except for hardware compatability issues (HSM, etc..), EdDSA signatures, Curve25519 and AES256 will be used by default on the network."))}u.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);