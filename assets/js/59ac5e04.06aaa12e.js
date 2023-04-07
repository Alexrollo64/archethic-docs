"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9199],{7759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var l=a(7462),n=(a(7294),a(3905));a(1839);const r={id:"commands",title:"ADPU commands"},i=void 0,s={unversionedId:"build/clients/ledger-wallet/commands",id:"build/clients/ledger-wallet/commands",title:"ADPU commands",description:"APDU commands",source:"@site/docs/build/clients/ledger-wallet/commands.md",sourceDirName:"build/clients/ledger-wallet",slug:"/build/clients/ledger-wallet/commands",permalink:"/build/clients/ledger-wallet/commands",draft:!1,tags:[],version:"current",lastUpdatedAt:1680857167,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{id:"commands",title:"ADPU commands"},sidebar:"docs",previous:{title:"Ledger Application API",permalink:"/build/clients/ledger-wallet/api"},next:{title:"Archethic's wallet access",permalink:"/build/clients/wallet-access"}},d={},c=[{value:"APDU commands",id:"apdu-commands",level:2},{value:"Get Origin Public Key",id:"get-origin-public-key",level:3},{value:"Get Archethic Account Address",id:"get-archethic-account-address",level:3},{value:"Get Signature",id:"get-signature",level:3}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"apdu-commands"},"APDU commands"),(0,n.kt)("h3",{id:"get-origin-public-key"},"Get Origin Public Key"),(0,n.kt)("p",null,"APDU Command ","[bytes]",":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,n.kt)("th",{parentName:"tr",align:null},"INS = 02"),(0,n.kt)("th",{parentName:"tr",align:null},"P1 = 00"),(0,n.kt)("th",{parentName:"tr",align:null},"P2 = 00"),(0,n.kt)("th",{parentName:"tr",align:null},"Lc = 00")))),(0,n.kt)("p",null,"APDU Response = Encoded Origin Public Key i.e., encode(o_{pub}) "),(0,n.kt)("h3",{id:"get-archethic-account-address"},"Get Archethic Account Address"),(0,n.kt)("p",null,"APDU Command ","[bytes]"," = "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,n.kt)("th",{parentName:"tr",align:null},"INS = 04"),(0,n.kt)("th",{parentName:"tr",align:null},"P1 = hash_type (for addr) ","[1 byte]"),(0,n.kt)("th",{parentName:"tr",align:null},"P2 = address_index (for bip44) ","[4 bytes]"),(0,n.kt)("th",{parentName:"tr",align:null},"Lc = len(ewk",(0,n.kt)("em",{parentName:"th"},"{aes}+ew"),"{aes}) ","[1 byte]"),(0,n.kt)("th",{parentName:"tr",align:null},"ewk_{aes} ","[bytes]"),(0,n.kt)("th",{parentName:"tr",align:null},"ew_{aes} ","[bytes]")))),(0,n.kt)("p",null,"APDU Response = Encoded Archethic Account Address i.e., arch_address "),(0,n.kt)("h3",{id:"get-signature"},"Get Signature"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,n.kt)("th",{parentName:"tr",align:null},"INS = 08"),(0,n.kt)("th",{parentName:"tr",align:null},"P1 = hash_type (of tx_hash) ","[1 byte]"),(0,n.kt)("th",{parentName:"tr",align:null},"P2 = address_index (for bip44) ","[4 bytes]"),(0,n.kt)("th",{parentName:"tr",align:null},"Lc = len(tx",(0,n.kt)("em",{parentName:"th"},"hash+ewk"),"{aes}+ew_{aes}) ","[1 byte]"),(0,n.kt)("th",{parentName:"tr",align:null},"tx_hash ","[bytes]"),(0,n.kt)("th",{parentName:"tr",align:null},"ewk_{aes} ","[bytes]"),(0,n.kt)("th",{parentName:"tr",align:null},"ew_{aes} ","[bytes]")))),(0,n.kt)("p",null,"APDU Response = ASN DER Signature || Corresponding public key from whose private key the signature was made, i.e., encode(pub_key)"))}u.isMDXComponent=!0}}]);