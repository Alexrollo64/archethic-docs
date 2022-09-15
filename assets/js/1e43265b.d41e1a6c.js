"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1049],{8974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));a(1839);const r={id:"cryptography",title:"Cryptography"},o=void 0,l={unversionedId:"learn/cryptography",id:"learn/cryptography",title:"Cryptography",description:"Archethic network through the usage of TransactionChains is leveraging an adaptative and quantum-safe cryptography.",source:"@site/docs/learn/cryptography.md",sourceDirName:"learn",slug:"/learn/cryptography",permalink:"/archethic-docs/learn/cryptography",draft:!1,tags:[],version:"current",lastUpdatedAt:1663256411,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"cryptography",title:"Cryptography"},sidebar:"docs",previous:{title:"Transaction fee",permalink:"/archethic-docs/learn/fee"},next:{title:"Harware Root of Trust",permalink:"/archethic-docs/learn/cryptography/hardware-root-of-trust"}},s={},p=[{value:"Quantum-Safe",id:"quantum-safe",level:2},{value:"Non-Discolure of public keys",id:"non-discolure-of-public-keys",level:3},{value:"Origin Devices",id:"origin-devices",level:3},{value:"Adaptative",id:"adaptative",level:2},{value:"Public keys",id:"public-keys",level:3},{value:"Hashes",id:"hashes",level:3},{value:"Transaction addresses",id:"transaction-addresses",level:3},{value:"Default algorithms",id:"default-algorithms",level:2}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic network through the usage of TransactionChains is leveraging an adaptative and quantum-safe cryptography."),(0,i.kt)("h2",{id:"quantum-safe"},"Quantum-Safe"),(0,i.kt)("h3",{id:"non-discolure-of-public-keys"},"Non-Discolure of public keys"),(0,i.kt)("p",null,"Archethic ",(0,i.kt)("a",{parentName:"p",href:"/learn/transaction-chain"},"TransactionChains")," uses a non-disclosure mechanism of public keys using chains of cryptography.\nEach transaction contains an address, which is a hash of the next public key and the previous public key.\nTherefore, we don't have way to know which public key is used for a given transaction until a next one is coming."),(0,i.kt)("h3",{id:"origin-devices"},"Origin Devices"),(0,i.kt)("p",null,"In order to build a transaction, we need to known multiple temporary private keys a key to provide a signature based on the previous private key and a signature based on an origin device private key.\nOrigin device can be categorized in several families: software, hardware, biometrics. (See ",(0,i.kt)("a",{parentName:"p",href:"/learn/arch-consensus/proof-of-work"},"Proof of Work"),")"),(0,i.kt)("p",null,"So to be allowed to generate a transaction, the task of a quantum computer potentially capable of ",(0,i.kt)("strong",{parentName:"p"},"breaking")," private keys should be considerably more complex"),(0,i.kt)("h2",{id:"adaptative"},"Adaptative"),(0,i.kt)("p",null,"In order to be backward compatible and to evolve the network as the cryptographic research progesses and to provide the choice of cryptographic algorithms to people, organizations or countries, Archethic is a versioned cryptography or metadata cryptography."),(0,i.kt)("p",null,"While this word sounds complex, it's not hard to get it."),(0,i.kt)("h3",{id:"public-keys"},"Public keys"),(0,i.kt)("p",null,"Each public key is prepended by some additional bytes to inform some metadata or algorithm versioning.\nThis includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a byte to indicate the elliptic curve used (i.e Ed25519, NIST, secp256k1)"),(0,i.kt)("li",{parentName:"ul"},"a byte to indicate the origin of the generation (i.e software, hardware, ...)")),(0,i.kt)("h3",{id:"hashes"},"Hashes"),(0,i.kt)("p",null,"Like the public keys, cryptographic hashes are also versioned with a byte of to identify which algorithms is used (i.e SHA-256).\nThis information helps to determine the length of a hash and to perform some checks for the validition and for the encoding/decoding of the data."),(0,i.kt)("h3",{id:"transaction-addresses"},"Transaction addresses"),(0,i.kt)("p",null,"While transaction addresses are often represented as hashes, Archethic provide a new level of information inside the transaction's address. A byte is prepending the hash with an information regarding the elliptic curve used to generate the public key related."),(0,i.kt)("p",null,"You may be wondering why would we need this kind of information."),(0,i.kt)("p",null,"So, in order to be really adaptative and based on the non-disclosure mechanism offered by the transaction chain, we need to know which elliptic was used for a previous transaction to be able to reproduce the previous public key."),(0,i.kt)("p",null,"For example, imagine we have a transaction address encoded in that way, using a ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," elliptic"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hash algorithm"),(0,i.kt)("th",{parentName:"tr",align:null},"Digest"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"01"),(0,i.kt)("td",{parentName:"tr",align:null},"01309F1C765967AC7")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Reminder: a transaction address is the hash of the next public key")),(0,i.kt)("p",null,"For a new transaction coming after, if now, we want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519")," elliptic curve, we need to know which was used before. For this reason, we have two possibility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"keep an history of the previous transaction and curves (",(0,i.kt)("em",{parentName:"li"},"not really pratical and not scalable"),")"),(0,i.kt)("li",{parentName:"ul"},"add a byte in front of each transaction's address to the curve used")),(0,i.kt)("p",null,"So with a new model:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Curve type"),(0,i.kt)("th",{parentName:"tr",align:null},"Hash algorithm"),(0,i.kt)("th",{parentName:"tr",align:null},"Digest"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"01"),(0,i.kt)("td",{parentName:"tr",align:null},"01"),(0,i.kt)("td",{parentName:"tr",align:null},"01309F1C765967AC7")))),(0,i.kt)("p",null,"Now we are able to compute the previous public key, with the curve ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," and continues with new elliptic curve along the way."),(0,i.kt)("p",null,"This will be even more pratical with On-Chain Decentralized Wallet (",(0,i.kt)("inlineCode",{parentName:"p"},"Keychain"),") to support multiple derived keys and custom algorithms."),(0,i.kt)("h2",{id:"default-algorithms"},"Default algorithms"),(0,i.kt)("p",null,"Except for hardware compatability issues (HSM, etc..), EdDSA signatures, Curve25519 and AES256 will be used by default on the network."))}h.isMDXComponent=!0}}]);