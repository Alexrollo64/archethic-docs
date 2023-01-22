"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4338],{3101:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));t(1839);const a={id:"proof-of-work",title:"Proof of Work"},r=void 0,s={unversionedId:"learn/arch-consensus/proof-of-work",id:"learn/arch-consensus/proof-of-work",title:"Proof of Work",description:"Others blockchains are using the concept of Proof of Work to ensure an unpredictable and pseudo random election of block validation (mining).",source:"@site/docs/learn/arch-consensus/proof-of-work.md",sourceDirName:"learn/arch-consensus",slug:"/learn/arch-consensus/proof-of-work",permalink:"/archethic-docs/learn/arch-consensus/proof-of-work",draft:!1,tags:[],version:"current",lastUpdatedAt:1674388958,formattedLastUpdatedAt:"Jan 22, 2023",frontMatter:{id:"proof-of-work",title:"Proof of Work"},sidebar:"docs",previous:{title:"ARCH consensus",permalink:"/archethic-docs/learn/arch-consensus/"},next:{title:"Cryptography",permalink:"/archethic-docs/learn/cryptography/"}},c={},l=[],d={toc:l};function p(e){let{components:o,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Others blockchains are using the concept of ",(0,i.kt)("inlineCode",{parentName:"p"},"Proof of Work")," to ensure an unpredictable and pseudo random election of block validation (mining).\nBut this technique requires a lot of energy consumption and can still be subject to exploit by HashRate control."),(0,i.kt)("p",null,"Archethic Blockchain is using a new kind of ",(0,i.kt)("inlineCode",{parentName:"p"},"Proof of Work")," to ensure the authenticity of the transaction origination devices.\nThis allows the additional security requirements on transaction validation like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prohibit any transaction even in case of key theft"),(0,i.kt)("li",{parentName:"ul"},"allow user to consult their balance on any smartphone, but generate a transaction only on a trusted device"),(0,i.kt)("li",{parentName:"ul"},"enable the organizers of an election to ensure biometric identity of a voter")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Proof Of Work")," consists of finding the right public key associated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Origin Signature")," of the transaction\nfrom a list of public keys known by the network."),(0,i.kt)("p",null,"This verification is performed during the ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation Stamp")," creation by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Coordinator Node")," and ensure the device is authorized to generate the transaction"),(0,i.kt)("p",null,"Just like any other actor into the system, devices will have their own transaction chain allowing them to update their keys. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Each origin device public keys are grouped by family which helps nodes to determine which set of keys, must be played to produce the Proof of Work. (i.e: software, usb, biometric).")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Each origin device public key is encrypted and renewed by the network ensuring confidentiality and authenticity of devices.")))}p.isMDXComponent=!0}}]);