"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[246],{9461:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=i(7462),n=(i(7294),i(3905)),a=i(1839);const r={id:"election",title:"Election"},l=void 0,s={unversionedId:"build/core/election",id:"build/core/election",title:"Election",description:"Archethic provides rotating algorithm to elect validation and storage nodes.",source:"@site/docs/build/core/election.md",sourceDirName:"build/core",slug:"/build/core/election",permalink:"/archethic-docs/build/core/election",draft:!1,tags:[],version:"current",lastUpdatedAt:1663256411,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"election",title:"Election"},sidebar:"docs",previous:{title:"Bootstrap",permalink:"/archethic-docs/build/core/bootstrap"},next:{title:"Archethic's wallet specification",permalink:"/archethic-docs/build/clients/wallet-spec"}},c={},u=[{value:"Heuristic constraints",id:"heuristic-constraints",level:2},{value:"Low-Level integrations",id:"low-level-integrations",level:2},{value:"Hypergeomtric distribution",id:"hypergeomtric-distribution",level:3}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Archethic provides rotating algorithm to elect validation and storage nodes. "),(0,n.kt)("p",null,"Validation and Storage Election algorithm provides also list of heuristic constraints to fine grained elections. "),(0,n.kt)("h2",{id:"heuristic-constraints"},"Heuristic constraints"),(0,n.kt)("p",null,"An ETS table is used to store the last constraints values for a faster lookup."),(0,n.kt)("p",null,"Storage constraints are defined by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"minimum storage geographical patches"),(0,n.kt)("li",{parentName:"ul"},"minimum storage average by geographical patch"),(0,n.kt)("li",{parentName:"ul"},"number of replicast")),(0,n.kt)("p",null,"Validation constraints are defined by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"minimum validation geographical patch distribution"),(0,n.kt)("li",{parentName:"ul"},"minimum validation nodes"),(0,n.kt)("li",{parentName:"ul"},"validation number based on a given transaction")),(0,n.kt)("h2",{id:"low-level-integrations"},"Low-Level integrations"),(0,n.kt)("p",null,"Sometimes for performance issue, we are leveraging low-level programming in C, to perform fast computation."),(0,n.kt)("h3",{id:"hypergeomtric-distribution"},"Hypergeomtric distribution"),(0,n.kt)("p",null,"For example, the Hypergeometric Distribution simulation is computed in C and wrapped in an Erlang port communication.\nBut for better simulation lookup, a cache is provided as process to hold the last value for a given number of nodes.\nIf the number of nodes changes, the hypergeometric distribution will be trigger."),(0,n.kt)("p",null,"The C program is using ",(0,n.kt)("inlineCode",{parentName:"p"},"GMP")," for big float arithemetic operations and ",(0,n.kt)("inlineCode",{parentName:"p"},"OMP")," for parallel computations to make it efficient."),(0,n.kt)(a.G,{chart:"sequenceDiagram\n    Election->>+Process: Run simulation for N nodes\n    alt with cache value\n        Process--\x3e>Election: Retrieve cached value\n    else without cache value\n        Process->>C: Run simultation\n    end\n",mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);