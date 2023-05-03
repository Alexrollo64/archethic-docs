"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8607],{2020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));a(1839);const o={id:"sharding",title:"Sharding"},s=void 0,r={unversionedId:"learn/sharding/sharding",id:"learn/sharding/sharding",title:"Sharding",description:"To become an unlimited decentralized network, Archethic Blockchain is using a feature called Sharding, used to split processing and storage power to ensure a scalable system.",source:"@site/docs/learn/sharding/README.md",sourceDirName:"learn/sharding",slug:"/learn/sharding/",permalink:"/learn/sharding/",draft:!1,tags:[],version:"current",lastUpdatedAt:1683100968,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{id:"sharding",title:"Sharding"},sidebar:"docs",previous:{title:"Self Repair",permalink:"/learn/p2p/self-repair"},next:{title:"Beacon Chain",permalink:"/learn/sharding/beacon-chain/"}},l={},d=[{value:"Validation",id:"validation",level:2},{value:"Storage",id:"storage",level:2},{value:"Rotating Election",id:"rotating-election",level:2}],c={toc:d};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To become an unlimited decentralized network, Archethic Blockchain is using a feature called ",(0,i.kt)("inlineCode",{parentName:"p"},"Sharding"),", used to split processing and storage power to ensure a scalable system."),(0,i.kt)("p",null,"Thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction Chain")," paradigm, transactions can be divided into chains, to ensure a concurrent processing\nas the opposite of traditional blockchains."),(0,i.kt)("p",null,"Other new blockchain networks start to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Sharding")," but sometimes not in a complete form: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"either storage"),(0,i.kt)("li",{parentName:"ul"},"either validation")),(0,i.kt)("p",null,"Archethic Blockchain supports a complete sharding scheme for validation and for storage."),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"Each transaction is validated by a new set of rotating nodes."),(0,i.kt)("p",null,"This ensures the distribution of validation and processing, to achieve a linear scalability and a high TPS."),(0,i.kt)("p",null,"Because transaction are using the UTXO model,\nthere is no reality out of the transaction, so the network is not subject to issues like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cross shards synchronization"),(0,i.kt)("li",{parentName:"ul"},"state channels communication")),(0,i.kt)("p",null,"To get the state of a transaction, only the transaction and the transaction inputs will be taken into consideration"),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"After the validation of the transaction, validation nodes will be in charge to send the transaction to several pools of nodes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transaction Chain Storage Pool: All the transaction associated with the same chain must be replicated on the storage nodes associated with the new transaction's address."),(0,i.kt)("li",{parentName:"ul"},"I/O Storage Pool: Each validated transaction is replicated on the storage nodes associated with the addresses of the transaction input/outputs:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Transaction movements addresses storage pools"),(0,i.kt)("li",{parentName:"ul"},"Node movements public key storage pools"),(0,i.kt)("li",{parentName:"ul"},"Recipients addresses storage pools"))),(0,i.kt)("li",{parentName:"ul"},"Beacon Storage Pool: Each transaction address must be replicated on the storage nodes of the associated address subset ",(0,i.kt)("a",{parentName:"li",href:"/learn/sharding/beacon-chain"},"See BeaconChain"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For each transaction, the Transaction Chain Storage Pool will change, assuring a completed distribution of nodes and the data replication. Nevertheless, nothing prevents the storage nodes to overlap within the chain.")),(0,i.kt)("h2",{id:"rotating-election"},"Rotating Election"),(0,i.kt)("p",null,"Like the validation nodes election, the storage nodes election is subject to a rotating election.\nIn other terms, each transaction will have its own shard and storage nodes."),(0,i.kt)("p",null,"The storage node election is based on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the address of the transaction"),(0,i.kt)("li",{parentName:"ul"},"the storage nonce: a stable secret known by the network"),(0,i.kt)("li",{parentName:"ul"},"the list of nodes")),(0,i.kt)("p",null,"This permits any node to perform this computation autonomously to reproduce this list and to request a transaction from the closest node."),(0,i.kt)("p",null,"To ensure the best availability of the data, this list is refined by some criteria, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"P2P availability"),(0,i.kt)("li",{parentName:"ul"},"Geographical distribution")))}h.isMDXComponent=!0}}]);