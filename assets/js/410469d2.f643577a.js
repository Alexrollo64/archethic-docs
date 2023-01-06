"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6328],{5386:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=i(7462),n=(i(7294),i(3905)),o=i(1839);const r={id:"p2p-sampling",title:"P2P availability sampling"},s=void 0,l={unversionedId:"build/core/beacon-chain/p2p-sampling",id:"build/core/beacon-chain/p2p-sampling",title:"P2P availability sampling",description:"Each beacon chain's subset is responsible to perform verification of the nodes is in charge to monitor.",source:"@site/docs/build/core/beacon-chain/p2p-sampling.md",sourceDirName:"build/core/beacon-chain",slug:"/build/core/beacon-chain/p2p-sampling",permalink:"/archethic-docs/build/core/beacon-chain/p2p-sampling",draft:!1,tags:[],version:"current",lastUpdatedAt:1672994118,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"p2p-sampling",title:"P2P availability sampling"},sidebar:"docs",previous:{title:"BeaconChain",permalink:"/archethic-docs/build/core/beacon-chain/"},next:{title:"Bootstrap",permalink:"/archethic-docs/build/core/bootstrap"}},c={},p=[{value:"Heartbeat",id:"heartbeat",level:2},{value:"Aggregation",id:"aggregation",level:2}],d={toc:p};function u(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Each beacon chain's subset is responsible to perform verification of the nodes is in charge to monitor."),(0,n.kt)("h2",{id:"heartbeat"},"Heartbeat"),(0,n.kt)("p",null,"So periodically (when a transaction is confirmed or before a slot creation), the nodes of a given subset perform P2P availability sampling of the given peers. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If multiple transactions arrive to a given subset quickly, a timespan of 3s from the previous sampling is used, to determine if we need to sample availability again ")),(0,n.kt)(o.G,{chart:"sequenceDiagram\n    Subset node->>+Supervised node: Ping\n    Supervised node->>+Subset node: Ok",mdxType:"Mermaid"}),(0,n.kt)("p",null,"A timeout of 1s is given in which a node should respond otherwise it will considered as locally offline by the beacon chain"),(0,n.kt)("h2",{id:"aggregation"},"Aggregation"),(0,n.kt)("p",null,"During the transaction generation of the BeaconChain summary, we aggregate multiple slots into a common structure."),(0,n.kt)("p",null,"All the aggregated P2P samples are accumulated to determine the frequencies of availability and determine the average."),(0,n.kt)("p",null,"So during the ",(0,n.kt)("a",{parentName:"p",href:"/learn/p2p/self-repair"},"Self-Repair"),", we are using those summary and aggregated data to determine if a node is considered as available for the next epoch/cycle."))}u.isMDXComponent=!0}}]);