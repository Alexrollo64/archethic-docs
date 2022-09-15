"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5e3],{4879:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));n(1839);const o={id:"transaction-chain",title:"TransactionChains"},r=void 0,s={unversionedId:"learn/transaction-chain",id:"learn/transaction-chain",title:"TransactionChains",description:"In the Archethic network, there are no blocks but only transactions, as each block is reduced to its atomic form - transaction with its own validation evidences.",source:"@site/docs/learn/transaction_chain.md",sourceDirName:"learn",slug:"/learn/transaction-chain",permalink:"/archethic-docs/learn/transaction-chain",draft:!1,tags:[],version:"current",lastUpdatedAt:1663256411,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"transaction-chain",title:"TransactionChains"},sidebar:"docs",previous:{title:"Ecosystem",permalink:"/archethic-docs/learn/ecosystem"},next:{title:"ARCH consensus",permalink:"/archethic-docs/learn/arch-consensus"}},l={},c=[{value:"Principles",id:"principles",level:2},{value:"Transaction structure",id:"transaction-structure",level:2}],p={toc:c};function d(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the Archethic network, there are no blocks but only transactions, as each block is reduced to its atomic form - ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," with its own validation evidences."),(0,i.kt)("h2",{id:"principles"},"Principles"),(0,i.kt)("admonition",{title:"Liveness",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each validated transaction is stored as a chain than can only be updated from the last validation transaction in the chain\nThe last transaction on a chain becomes the ",(0,i.kt)("em",{parentName:"p"},"authoritative")," transaction. ")),(0,i.kt)("admonition",{title:"Quantum resistant",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For security reason, once the public key is disclosed, it is considered as expired, only the hash of the public key of the next transaction(aka ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),") is announced.\nThis allows the next public key to be kept until the next transaction on the chain.")),(0,i.kt)("admonition",{title:"Address resolution",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Any addresses of a transaction chain can be used as destination address.\nIt's not necessary to specify the last transaction address in the chain.")),(0,i.kt)("admonition",{title:"Stateless transactions",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Transaction are using an ",(0,i.kt)("em",{parentName:"p"},"UTXO")," (Unspent Transaction Output) model so, a transaction cannot change state.\nThere is no reality outside the validated transactions")),(0,i.kt)("admonition",{title:"UTXO mining",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"List of unspent outputs does not need to be specified by the sender of the transaction\nall unspent outputs will be reintegrated directly into the last transaction.")),(0,i.kt)("h2",{id:"transaction-structure"},"Transaction structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h3",{parentName:"li",id:"pending-transaction"},"Pending transaction"))),(0,i.kt)("p",null,"A pending transaction is a transaction that does not have validation.\nIts structure is described as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"|-----------|------|------|---------------------|--------------------|------------------|\n|  Address  | Type | Data | Previous public key | Previous signature | Origin signature |\n|-----------|------|------|---------------------|--------------------|------------------|\n                      |      \n                      |\n      |---------|------|--------|------------|------------|\n      | Content | Code | Ledger | Ownerships | Recipients |\n      |---------|------|--------|------------|------------|\n                            |      |\n                            |      |\n                  |-----|-------|  |-----------------|--------|  \n                  | UCO | Token |  | Authorized keys | Secret |\n                  |-----|-------|  |-----------------|--------|                     \n  \n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Address: Corresponds to the hash of the public key of the transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: Defines the functional role of the transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data: Contains all the operations to be performed (transfers, smart contracts, key authorizations, etc.)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Content: Can contain any kind of data. It can be used to host some data (HTML page, text, image, code, etc.) "),(0,i.kt)("li",{parentName:"ul"},"Code: Defines the smart contract code to be interpreted by the node. More details on ",(0,i.kt)("a",{parentName:"li",href:"/build/smart-contracts"},"Smart-Contracts")," section."),(0,i.kt)("li",{parentName:"ul"},"Ledger: Defines several types of ledger operations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"UCO: for the cryptocurrency transfers"),(0,i.kt)("li",{parentName:"ul"},"Token: for non-financial transactions (intended for P2P uses - as tokens, loyalties, etc.)"))),(0,i.kt)("li",{parentName:"ul"},"Ownerships: Define some cryptographic authorizations and delegations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Authorized keys: list of authorized keys to be able to decrypt secrets"),(0,i.kt)("li",{parentName:"ul"},"Secrets: Encrypted contents which can be decrypted by the authorized keys"))),(0,i.kt)("li",{parentName:"ul"},"Recipients: Additional recipients to target smart contracts"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Previous public key: Corresponds to the public key associated to the previous transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Previous signature: Corresponds to the signature of the private key associated with the mentioned previous public key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Origin signature: Corresponds to the signature of the device or software that generated the transaction. This is used on the ",(0,i.kt)("a",{parentName:"p",href:"/learn/arch-consensus/proof-of-work"},"Proof Of Work")," mechanism and is a necessary condition of its validation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h3",{parentName:"li",id:"validated-transaction"},"Validated transaction"))),(0,i.kt)("p",null,"A validated transaction is a pending transaction completed with the validation proofs required by the Heuristic Algorithms.\nThose are defined by the given structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"|------------------|-------------------------|\n| Validation Stamp | Cross Validation Stamps |\n|------------------|-------------------------|\n         |                      |\n         |             |-----------------|-----------|\n         |             | Node public key | Signature |     \n         |             |-----------------|-----------|\n         |\n|-----------|---------------|--------------------|-------------------|-------------------|------------|--------|-----------|\n| Timestamp | Proof of Work | Proof of Integrity | Proof of Election | Ledger Operations | Recipients | Errors | Signature |\n|-----------|---------------|--------------------|-------------------|-------------------|------------|--------|-----------|\n                                                                           |\n                                 |-----|-----------------------|-----------------|\n                                 | Fee | Transaction movements | Unspent outputs |\n                                 |-----|-----------------------|-----------------|\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Validation Stamp: Stamp generated by the coordinator node",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Proof of work: Corresponds to the public key matching the origin signature (More details on the ",(0,i.kt)("a",{parentName:"li",href:"/learn/arch-consensus/proof-of-work"},"Proof of Work")," section)."),(0,i.kt)("li",{parentName:"ul"},"Proof of integrity: Proves the linkage of the previous transactions"),(0,i.kt)("li",{parentName:"ul"},"Proof of election: Proves the validation node's rotating election and permit to reproduce it later (See ",(0,i.kt)("a",{parentName:"li",href:"/learn/arch-consensus#rotating-election"},"Rotating Election"),")"),(0,i.kt)("li",{parentName:"ul"},"Ledger operations: Contains all the ledger operations that will be taken into account by the network",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"fee: Transaction's fee"),(0,i.kt)("li",{parentName:"ul"},"transaction movements: Issuer and resolved transaction movements"),(0,i.kt)("li",{parentName:"ul"},"Unspent outputs: List of the remaining unspent outputs of the transaction chain after validation"))),(0,i.kt)("li",{parentName:"ul"},"Recipients: List of resolved addresses of the recipients"),(0,i.kt)("li",{parentName:"ul"},"Errors: Any errors found in the validation (i.e. pending transaction error)"),(0,i.kt)("li",{parentName:"ul"},"Signature: Cryptographic signature of the entire stamp by the coordinator's key"))),(0,i.kt)("li",{parentName:"ul"},"Cross validation stamps: To be considered as validated, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Validation Stamp")," must be joined as many ",(0,i.kt)("inlineCode",{parentName:"li"},"Cross Validation Stamp")," as required by the Heuristic Algorithms.\nThey are signatures of the given validation stamp.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Node public key: Correspond to the node's public key which generate this ",(0,i.kt)("inlineCode",{parentName:"li"},"Cross Validation Stamp"),"'s signature"),(0,i.kt)("li",{parentName:"ul"},"Signature: Correspond to the signature of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Cross Validation Stamp")," for the mentioned public key"),(0,i.kt)("li",{parentName:"ul"},"Inconsistencies: In case of inconsistencies or disagreement, it will contain a list of inconsistencies noted")))))}d.isMDXComponent=!0}}]);