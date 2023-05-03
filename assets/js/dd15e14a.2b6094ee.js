"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[681],{3580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));n(1839);const o={id:"arch-consensus",title:"ARCH consensus"},l=void 0,s={unversionedId:"learn/arch-consensus/arch-consensus",id:"learn/arch-consensus/arch-consensus",title:"ARCH consensus",description:"Archethic Blockchain is using a new consensus called ARCH (Atomic Rotating Commitment Heuristic) for an uncompromising consensus to support high scalability and high throughput.",source:"@site/docs/learn/arch-consensus/README.md",sourceDirName:"learn/arch-consensus",slug:"/learn/arch-consensus/",permalink:"/learn/arch-consensus/",draft:!1,tags:[],version:"current",lastUpdatedAt:1683100968,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{id:"arch-consensus",title:"ARCH consensus"},sidebar:"docs",previous:{title:"TransactionChains",permalink:"/learn/transaction-chain"},next:{title:"Proof of Work",permalink:"/learn/arch-consensus/proof-of-work"}},r={},c=[{value:"Atomic Commitment",id:"atomic-commitment",level:2},{value:"Rotating Election",id:"rotating-election",level:2},{value:"Workflow",id:"workflow",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Archethic Blockchain is using a new consensus called ",(0,a.kt)("inlineCode",{parentName:"p"},"ARCH")," (Atomic Rotating Commitment Heuristic) for an uncompromising consensus to support high scalability and high throughput."),(0,a.kt)("p",null,"Archethic Blockchain is based on three properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Security: Each transaction is validated atomically"),(0,a.kt)("li",{parentName:"ul"},"Data consistency: Algorithms ensure to access the latest write and maximum availability"),(0,a.kt)("li",{parentName:"ul"},"Fault tolerance: Allow nodes to operate independently even in case of disaster")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ARCH")," consensus is defined by three concepts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Atomic Commitment"),": The most absolute form a consensus which implies 100% of concordant responses for the acceptance or refusal of the transaction validation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Heuristic"),": Set of algorithms which manages the entire network, allowing to elect in a decentralized and coordinated way the nodes in charge to validate or store the transaction chains"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Rotating"),": Node election is constantly changing. No nodes can predict which nodes will validate the transaction before its arrives.")),(0,a.kt)("h2",{id:"atomic-commitment"},"Atomic Commitment"),(0,a.kt)("p",null,"Archethic Blockchain is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"Hypergeometric distribution")," laws which from an unpredictable election and formal consensus make it possible to obtain with certainty (99.99999999%) the same answer by querying 197 nodes as would be obtained by querying 100 000 nodes."),(0,a.kt)("p",null,"Therefore, it makes possible the consensus establishment with a small part of nodes and can resist to attacks of 90% of malicious nodes. "),(0,a.kt)("p",null,"The risk of related availability is ensured by a strict management of the disruptive nodes, which are banished after investigation of the origin of the disagreement."),(0,a.kt)("p",null,"By supporting more 90% of malicious nodes into its network, ",(0,a.kt)("inlineCode",{parentName:"p"},"ARCH")," consensus is above aeronautical or nuclear standard, thanks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Atomic Commitment")," which request the total agreement of the validation nodes and from a ",(0,a.kt)("inlineCode",{parentName:"p"},"Malicious Detection")," algorithm to detect the malicious nodes."),(0,a.kt)("h2",{id:"rotating-election"},"Rotating Election"),(0,a.kt)("p",null,"Each rotating election is unpredictable, but still verifiable and reproducible.\nThe rotating algorithm sort a list of nodes based on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Hash of transaction"),": Unpredictable until the transaction arrives"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Daily nonce"),": Secret shared between the authorized nodes and renewed daily"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Node public key"),": Last node public key")),(0,a.kt)("p",null,"The rotating election produces a proof, named: ",(0,a.kt)("inlineCode",{parentName:"p"},"Proof of Election")," which can be verified by any other nodes to ensure the right election of nodes."),(0,a.kt)("p",null,"From this algorithm, we get a list of nodes which can be filtered according to the constraints of the validation of the transaction."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"P2P availability"),(0,a.kt)("li",{parentName:"ul"},"Geographical distribution")),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"When a transaction is willing to be validated, its follows the given workflow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The transaction is received by any node (aka ",(0,a.kt)("inlineCode",{parentName:"li"},"Welcome node"),")"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Welcome Node")," determines the validation nodes from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Rotating Election")," algorithm and forward the transaction"),(0,a.kt)("li",{parentName:"ol"},"The validation nodes after receiving the transaction start some preliminary job to gather the context of the transaction:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Previous transaction"),(0,a.kt)("li",{parentName:"ul"},"List of unspent outputs"))),(0,a.kt)("li",{parentName:"ol"},"After the context building, the ",(0,a.kt)("inlineCode",{parentName:"li"},"Cross Validation Nodes")," communicate to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Coordinator Node")," the list of storage nodes involved to gather this information."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Coordinator Node")," can build the ",(0,a.kt)("inlineCode",{parentName:"li"},"Validation Stamp")," and compute the replication tree. Then it transmits them to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Cross Validation Nodes"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Cross Validation Nodes")," verify the content of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Validation Stamp"),", sign with or without inconsistencies, and send the ",(0,a.kt)("inlineCode",{parentName:"li"},"Cross Validation Stamp")," to all the validation nodes involved."),(0,a.kt)("li",{parentName:"ol"},"Once all the ",(0,a.kt)("inlineCode",{parentName:"li"},"Cross Validation Stamps")," are received and if the ",(0,a.kt)("inlineCode",{parentName:"li"},"Atomic Commitment")," is reached, the replication phase starts."),(0,a.kt)("li",{parentName:"ol"},"Validation nodes send the transaction to the respective storage nodes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Storage nodes responsible for the new transaction chain"),(0,a.kt)("li",{parentName:"ul"},"Storage nodes responsible for the outputs of the transactions (transaction's movements addresses, recipients)"),(0,a.kt)("li",{parentName:"ul"},"Storage nodes responsible for the ",(0,a.kt)("a",{parentName:"li",href:"/learn/sharding/beacon-chain"},"Beacon Chain"))),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"The storage for the new transaction chain will notify the validation nodes and the ",(0,a.kt)("inlineCode",{parentName:"li"},"Welcome Node")," about the replication, and the ",(0,a.kt)("inlineCode",{parentName:"li"},"Welcome Node")," will notify the client about it.")))}h.isMDXComponent=!0}}]);