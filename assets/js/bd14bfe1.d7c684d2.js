"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4060],{7990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var i=a(7462),n=(a(7294),a(3905));a(1839);const c={id:"wallet-access",title:"Archethic's wallet access"},l=void 0,s={unversionedId:"build/clients/wallet-access",id:"build/clients/wallet-access",title:"Archethic's wallet access",description:"Onchain wallet (aka Keychain) is a wallet stored on Archethic blockchain in encrypted form, to allow only the authorized access to read it and build transaction from it.",source:"@site/docs/build/clients/wallet-access.md",sourceDirName:"build/clients",slug:"/build/clients/wallet-access",permalink:"/archethic-docs/build/clients/wallet-access",draft:!1,tags:[],version:"current",lastUpdatedAt:1674388958,formattedLastUpdatedAt:"Jan 22, 2023",frontMatter:{id:"wallet-access",title:"Archethic's wallet access"},sidebar:"docs",previous:{title:"ADPU commands",permalink:"/archethic-docs/build/clients/ledger-wallet/commands"},next:{title:"Archethic's wallet specification",permalink:"/archethic-docs/build/clients/wallet-spec"}},r={},o=[{value:"Access enrollment",id:"access-enrollment",level:2},{value:"Keychain retrieval",id:"keychain-retrieval",level:2}],d={toc:o};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Onchain wallet (aka ",(0,n.kt)("strong",{parentName:"p"},"Keychain"),") is a wallet stored on Archethic blockchain in encrypted form, to allow only the authorized access to read it and build transaction from it."),(0,n.kt)("p",null,"Also to avoid disclosure of information, access and keychain are using end to end encryption with elliptic curve cryptography to secure it."),(0,n.kt)("p",null,"Hence any client which would like to support wallet access and transaction building will have to be authorized."),(0,n.kt)("h2",{id:"access-enrollment"},"Access enrollment"),(0,n.kt)("p",null,"When a device or application want to become an access to the wallet, it first have to create a transaction where the keychain transaction's address is encrypted into it.\nThis data is stored in the ",(0,n.kt)("inlineCode",{parentName:"p"},"/data/ownerships")," section of the transaction., where the authorized public key is the ",(0,n.kt)("inlineCode",{parentName:"p"},"transaction's public key")," and the secret is an aes encryption of the keychain's address."),(0,n.kt)("p",null,"Then the keychain will create a new transaction on its chain by encrypting the wallet with a new AES key itself encrypted for the list of authorized access public keys wanted. (For instance the new device or application)"),(0,n.kt)("h2",{id:"keychain-retrieval"},"Keychain retrieval"),(0,n.kt)("p",null,"In order to retrieve the keychain from a device or application perspective, the access transaction's will be generated to be retrieved from the network."),(0,n.kt)("p",null,"Then the device or application will decrypt the encrypted keychain address to be able to download the keychain transaction."),(0,n.kt)("p",null,"Once received, the device or application - as being authorized by the keychain - will be able to decrypt the AES key to decrypt the wallet and perform any key derivation and transaction building from it."),(0,n.kt)("p",null,"Then, because the key have been generated on the fly, the client will forget about the private keys and seeds decrypted."))}h.isMDXComponent=!0}}]);