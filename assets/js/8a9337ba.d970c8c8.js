"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1113],{6585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var n=a(7462),i=(a(7294),a(3905)),o=a(1839);const s={id:"beacon-chain",title:"BeaconChain"},r=void 0,l={unversionedId:"build/core/beacon-chain/beacon-chain",id:"build/core/beacon-chain/beacon-chain",title:"BeaconChain",description:"BeaconChain helps the Archethic sharding network to be supervised and provided global view of the system.",source:"@site/docs/build/core/beacon-chain/README.md",sourceDirName:"build/core/beacon-chain",slug:"/build/core/beacon-chain/",permalink:"/build/core/beacon-chain/",draft:!1,tags:[],version:"current",lastUpdatedAt:1680857167,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{id:"beacon-chain",title:"BeaconChain"},sidebar:"docs",previous:{title:"Account",permalink:"/build/core/account"},next:{title:"P2P availability sampling",permalink:"/build/core/beacon-chain/p2p-sampling"}},c={},h=[{value:"Subsets",id:"subsets",level:2},{value:"Timers and schedulers",id:"timers-and-schedulers",level:2},{value:"Transaction loading",id:"transaction-loading",level:2},{value:"Supervisor",id:"supervisor",level:2}],d={toc:h};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BeaconChain helps the Archethic sharding network to be supervised and provided global view of the system."),(0,i.kt)("p",null,"To be able to manage it, few modules and functions are needed to make this possible."),(0,i.kt)("h2",{id:"subsets"},"Subsets"),(0,i.kt)("p",null,"The BeaconChain is divided into a set of subsets (shards of the BeaconChain) based on hexadecimal splits.\nCurrently the BeaconChain supports 256 subsets, from 0 to F (hex)"),(0,i.kt)("p",null,"Each subset is maintained by its own ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/beacon_chain/subset.ex"},"process")),(0,i.kt)("p",null,"This process is responsible of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add transaction replication confirmation to the current slot"),(0,i.kt)("li",{parentName:"ul"},"Check ",(0,i.kt)("a",{parentName:"li",href:"/build/core/beacon-chain/p2p-sampling"},"P2P availability")," of the nodes where their public key starts by the subset hexadecimal identifier "),(0,i.kt)("li",{parentName:"ul"},"Create beacon transaction and notify BeaconChain summary nodes (for the current epoch)"),(0,i.kt)("li",{parentName:"ul"},"Create beacon summary transaction (if it's one of the summary node)"),(0,i.kt)("li",{parentName:"ul"},"Notify explorer about the new transaction validated (See ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:9001/archethic-docs/learn/sharding/beacon-chain/explorer"},"Sharded Explorer"),")")),(0,i.kt)("h2",{id:"timers-and-schedulers"},"Timers and schedulers"),(0,i.kt)("p",null,"Because each BeaconChain subsets change over time, we need a may to determine what are the current nodes for those subsets and so on. So we have two kind of timers and schedulers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Slot timer: Manage the interval for the beacon slot creations"),(0,i.kt)("li",{parentName:"ul"},"Summary timer: Manage the interval for the beacon summary creations")),(0,i.kt)("p",null,"Each of those timer provides helpers to be able to generate previous or next dates"),(0,i.kt)("h2",{id:"transaction-loading"},"Transaction loading"),(0,i.kt)("p",null,"Before a transaction's confirmation is loaded into the BeaconChain, a phase of validation is performed to ensure the correctness of the replication:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it asserts the transaction's address is the right one"),(0,i.kt)("li",{parentName:"ul"},"it asserts the transaction attestation (node election, signatures, etc.)")),(0,i.kt)("p",null,"For more details, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/beacon_chain/slot/validation.ex"},"SlotValidation")),(0,i.kt)("p",null,"Then the slot is deserialized to be loaded into a cache, for a faster summary aggregation and computation"),(0,i.kt)("h2",{id:"supervisor"},"Supervisor"),(0,i.kt)("p",null,"To manage all those processes and isolation a proper supervision tree is defined"),(0,i.kt)(o.G,{chart:"graph TD\n    A[BeaconChain Supervisor]\n    A --\x3eB[Slot Timer]\n    A --\x3eC[Summary Timer]\n    A --\x3eD{Subset supervisor}\n    D --\x3eE[Summary Cache]\n    D --\x3eF[Subset 0]\n    D --\x3eH[Subset ..F]\n    D --\x3eI[Subset registry]",mdxType:"Mermaid"}))}u.isMDXComponent=!0}}]);