"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5371],{3022:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));t(1839);const s={id:"beacon-chain",title:"Beacon Chain"},o=void 0,r={unversionedId:"learn/sharding/beacon-chain/beacon-chain",id:"learn/sharding/beacon-chain/beacon-chain",title:"Beacon Chain",description:"Archethic Blockchain is using Sharding mechanism to ensure scalability in terms of storage and validation.",source:"@site/docs/learn/sharding/beacon-chain/README.md",sourceDirName:"learn/sharding/beacon-chain",slug:"/learn/sharding/beacon-chain/",permalink:"/archethic-docs/learn/sharding/beacon-chain/",draft:!1,tags:[],version:"current",lastUpdatedAt:1672994118,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"beacon-chain",title:"Beacon Chain"},sidebar:"docs",previous:{title:"Sharding",permalink:"/archethic-docs/learn/sharding/"},next:{title:"Beacon Explorer",permalink:"/archethic-docs/learn/sharding/beacon-chain/explorer"}},l={},d=[{value:"Concepts",id:"concepts",level:2},{value:"Transaction tracking and timestamping",id:"transaction-tracking-and-timestamping",level:2},{value:"Status and Network Coordinates of nodes",id:"status-and-network-coordinates-of-nodes",level:2},{value:"Slot",id:"slot",level:2}],c={toc:d};function h(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic Blockchain is using ",(0,i.kt)("inlineCode",{parentName:"p"},"Sharding")," mechanism to ensure scalability in terms of storage and validation."),(0,i.kt)("p",null,"But since there is no way in a well sharded and distributed network to know all the transaction in the system,\na ",(0,i.kt)("inlineCode",{parentName:"p"},"Beacon Chain")," is used to keep a global synchronization and reference."),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Beacon Chain")," is used as tracer/marker of a global state but to face some scalability issue, Archethic Blockchain is using ",(0,i.kt)("inlineCode",{parentName:"p"},"Sharding")," also for the ",(0,i.kt)("inlineCode",{parentName:"p"},"BeaconChain"),"."),(0,i.kt)("p",null,"Which means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Beacon Chain")," is sharded and divided into ",(0,i.kt)("inlineCode",{parentName:"p"},"subset")," defined by the transaction's address and a given date."),(0,i.kt)("p",null,"For example: a transaction's address starting by ",(0,i.kt)("inlineCode",{parentName:"p"},"0F")," for a given day, will not be stored on the same subset as a transaction's address starting by ",(0,i.kt)("inlineCode",{parentName:"p"},"9F")," for the same day."),(0,i.kt)("h2",{id:"transaction-tracking-and-timestamping"},"Transaction tracking and timestamping"),(0,i.kt)("p",null,"Each time a transaction is validated, the validation nodes will send the transaction to the right Beacon Chain storage nodes, to transmit the address of the transaction and its timestamp."),(0,i.kt)("p",null,"For each Beacon Chain interval, a new slot is generated referencing all the transaction during this interval."),(0,i.kt)("p",null,"At the end of the day, a transaction chain is formed, and a last transaction is computed to generate a summary of the current day for a given subset."),(0,i.kt)("p",null,"Because each transaction has its own storage nodes, ",(0,i.kt)("inlineCode",{parentName:"p"},"Beacon Chains")," are balanced between the storage nodes to ensure a better scalability and distribution."),(0,i.kt)("h2",{id:"status-and-network-coordinates-of-nodes"},"Status and Network Coordinates of nodes"),(0,i.kt)("p",null,"Beacon Chains also contain network status of the nodes where the public key starts by the Beacon Chain subset."),(0,i.kt)("p",null,"The storage nodes in each subset is in charge of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check the node availabilities"),(0,i.kt)("li",{parentName:"ul"},"gather networking information such as latency, bandwidth")),(0,i.kt)("p",null,"At the end of the day, a transaction is formed as well and a last transaction is computed to generate a summary of node availability and network coordinates"),(0,i.kt)("h2",{id:"slot"},"Slot"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"Beacon Chain")," is divided during the day into multiple slots, defined by interval (for instance every 10 min)."),(0,i.kt)("p",null,"Those slot contains the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transaction summaries: timestamping of the validated transactions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"address: Transaction's address"),(0,i.kt)("li",{parentName:"ul"},"timestamp: Transaction validation time"),(0,i.kt)("li",{parentName:"ul"},"movements addresses: List of outputs addresses of the transaction"))),(0,i.kt)("li",{parentName:"ul"},"End of node synchronization: timestamping when a node finished its synchronization",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"node public key: Node's first public key"),(0,i.kt)("li",{parentName:"ul"},"timestamp: Time when the node synchronization ended"))),(0,i.kt)("li",{parentName:"ul"},"P2P view:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"availabilities: binary form of the availability of the sampled nodes for the given subset"),(0,i.kt)("li",{parentName:"ul"},"network statistics: latency and bandwidth of the sampled nodes for the given subset")))))}h.isMDXComponent=!0}}]);