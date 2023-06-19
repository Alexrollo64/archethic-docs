"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9286],{5536:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(7462),o=(i(7294),i(3905));i(1839);const a={id:"core",title:"Core development"},r=void 0,s={unversionedId:"build/core/core",id:"build/core/core",title:"Core development",description:"Archethic Node repository can be found here",source:"@site/docs/build/core/README.md",sourceDirName:"build/core",slug:"/build/core/",permalink:"/build/core/",draft:!1,tags:[],version:"current",lastUpdatedAt:1687180718,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{id:"core",title:"Core development"},sidebar:"docs",previous:{title:"transactionError",permalink:"/build/api/schema/subscriptions/transaction-error"},next:{title:"Account",permalink:"/build/core/account"}},l={},c=[{value:"Technology Stack",id:"technology-stack",level:2},{value:"Why Elixir ?",id:"why-elixir-",level:3},{value:"Why C ?",id:"why-c-",level:3},{value:"Structure",id:"structure",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Archethic Node repository can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node"},"here")),(0,o.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,o.kt)("p",null,"Archethic Blockchain node used a combination of Elixir & C programming languages to achieve fast and reliable decentralized network."),(0,o.kt)("h3",{id:"why-elixir-"},"Why Elixir ?"),(0,o.kt)("p",null,"Elixir is a dynamic, functional language for building scalable and maintainable applications."),(0,o.kt)("p",null,"It leverages the Erlang VM, known for running low-latency, distributed, and fault-tolerant systems."),(0,o.kt)("p",null,"Elixir is successfully used in web development, embedded software, data ingestion, and multimedia processing, across a wide range of industries."),(0,o.kt)("p",null,"When we are building P2P systems and Blockchain technologies we need to think about fault-tolerance, low-latency, concurrent/parallelism.\nElixir matches all those requirements."),(0,o.kt)("p",null,"Because all Elixir code runs inside lightweight threads of execution (called processes) that are isolated and exchange information via messages, we can build fast\nprocessing of data which result in a high TPS for a better scalability."),(0,o.kt)("p",null,"The unavoidable truth about software running in production is that things will go wrong."),(0,o.kt)("p",null,"Even more when we take network, file systems, and other third-party resources into account."),(0,o.kt)("p",null,"Elixir provides supervisors which describe how to restart parts of your system when things go awry, going back to a known initial state that is guaranteed to work."),(0,o.kt)("p",null,"This feature ensures in case of failure, the entire system will not be down, and the isolation provided by the processes and their restarting strategy helps us to achieve it."),(0,o.kt)("p",null,"Functional programming promotes a coding style that helps developers write code that is short, concise, and maintainable."),(0,o.kt)("p",null,"Out of the box, Erlang VM provides the capability to hot reload code, which is the best case scenario if we want to provide an on-chain governance without restarting nodes."),(0,o.kt)("h3",{id:"why-c-"},"Why C ?"),(0,o.kt)("p",null,"We need to interact with hardware components and C seems the best candidate, so we are using this language to communicate with TPM for instance."),(0,o.kt)("p",null,"But also, for some intensive task which are really complex in computing, we rely on C to perform those processing."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"Code base is divided into domains (contexts) for better single responsibility principle:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"core structure",src:i(3532).Z,width:"1568",height:"2446"})))}u.isMDXComponent=!0},3532:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/core_structure-e53af1776beef639ac15f67f9344dab0.png"}}]);