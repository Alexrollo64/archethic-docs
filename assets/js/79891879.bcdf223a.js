"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1260],{8421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));r(1839);const i={id:"cryptography",title:"Cryptography"},s=void 0,n={unversionedId:"build/core/cryptography/cryptography",id:"build/core/cryptography/cryptography",title:"Cryptography",description:"Node cryptography is maintains through keystores",source:"@site/docs/build/core/cryptography/README.md",sourceDirName:"build/core/cryptography",slug:"/build/core/cryptography/",permalink:"/build/core/cryptography/",draft:!1,tags:[],version:"current",lastUpdatedAt:1683100968,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{id:"cryptography",title:"Cryptography"},sidebar:"docs",previous:{title:"Bootstrap",permalink:"/build/core/bootstrap"},next:{title:"TPM Implementation",permalink:"/build/core/cryptography/tpm"}},p={},l=[{value:"Node Keystore",id:"node-keystore",level:2},{value:"Node Shared Secrets Keystore",id:"node-shared-secrets-keystore",level:2}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Node cryptography is maintains through keystores"),(0,a.kt)("h2",{id:"node-keystore"},"Node Keystore"),(0,a.kt)("p",null,"Node cryptography is maintain through keystore which stores the transaction index and reference to the public keys."),(0,a.kt)("p",null,"A behavior is defined to be able swap and test easily implementations."),(0,a.kt)("p",null,"There are several implementations of the node keystore:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Software implementation (used in dev mode and testnet)"),(0,a.kt)("li",{parentName:"ul"},"Hardware implementation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/build/core/cryptography/tpm"},"TPM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/build/core/cryptography/yubikey"},"Yubikey"))))),(0,a.kt)("p",null,"More details here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/crypto/keystore/node.ex"},"Node keystore")),(0,a.kt)("h2",{id:"node-shared-secrets-keystore"},"Node Shared Secrets Keystore"),(0,a.kt)("p",null,"Along with node keystore, node shared secrets have their own keystore as it used to store secrets as daily nonce, storage nonce and provide the API to leverage them for transaction validation, election algorithm, etc.."),(0,a.kt)("p",null,"A behavior is also provided to be able to swap implementations. Right now only the software implementation is supported."),(0,a.kt)("p",null,"More details here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/crypto/keystore/shared_secrets.ex"},"Shared Secrets keystore")))}c.isMDXComponent=!0}}]);