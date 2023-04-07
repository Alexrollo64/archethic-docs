"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3723],{3686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));n(1839);const s={id:"messaging",title:"Messaging"},r=void 0,o={unversionedId:"build/core/p2p/messaging",id:"build/core/p2p/messaging",title:"Messaging",description:"Archethic Blockchain is used a brand new P2P layer from the Supervised Multicast, but to ensure the best data transmission possible, we are using two modern approaches: Stream Multiplexer and Binary Protocol.",source:"@site/docs/build/core/p2p/messaging.md",sourceDirName:"build/core/p2p",slug:"/build/core/p2p/messaging",permalink:"/build/core/p2p/messaging",draft:!1,tags:[],version:"current",lastUpdatedAt:1680857167,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{id:"messaging",title:"Messaging"},sidebar:"docs",previous:{title:"P2P",permalink:"/build/core/p2p/"},next:{title:"Node",permalink:"/build/core/p2p/node"}},l={},p=[{value:"Stream Multiplexer",id:"stream-multiplexer",level:2},{value:"Binary Protocol",id:"binary-protocol",level:2},{value:"Message envelop",id:"message-envelop",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Archethic Blockchain is used a brand new P2P layer from the ",(0,a.kt)("a",{parentName:"p",href:"/learn/p2p#archethics-way"},"Supervised Multicast"),", but to ensure the best data transmission possible, we are using two modern approaches: ",(0,a.kt)("inlineCode",{parentName:"p"},"Stream Multiplexer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Binary Protocol"),". "),(0,a.kt)("p",null,"Those two features helps to achieve a low latency P2P messaging."),(0,a.kt)("h2",{id:"stream-multiplexer"},"Stream Multiplexer"),(0,a.kt)("p",null,"Stream Multiplexing allows multiple independent logical streams to share a common underlying transport stream and ",(0,a.kt)("br",null),"\nthere are many independent streams of communication between peers."),(0,a.kt)("p",null,"Stream Multiplexing amortizes the overhead of establishing a transport connection and helps to distinguish which messages to handle in a concurrent way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|---------|                           |---------|\n| Service |                           | Service |\n|---------|                           |---------|\n    | Msg ID: 2    |------------|         |\n    |--------------| Connection |---------| Msg ID: 1\n                   |    TCP     |\n    |--------------|------------|---------|\n    | Msg ID: 1                           | Msg ID: 2\n|---------|                           |---------|\n| Service |                           | Service |\n|---------|                           |---------|\n")),(0,a.kt)("p",null,"In the current implementation, each node connection is backed by a GenServer which serializes the call the remote endpoint, through an established connection."),(0,a.kt)("p",null,"Even if the calls are serialized, it leverages a non-blocking messaging, so multiple messages can be sent with several independant clients. However after a certain amount of time(timeout: 5s), the message is dropped to reduce the message queue."),(0,a.kt)("h2",{id:"binary-protocol"},"Binary Protocol"),(0,a.kt)("p",null,"Network latency is very important to reach an unlimited and really scalable network and using binary protocol helps to reduce bandwidth."),(0,a.kt)("p",null,"Different kind of solutions existing for binary protocol: Protobuf, Avro, Thrift, MsgPack, etc."),(0,a.kt)("p",null,"However, to support a custom and efficient binary serialization, Archethic uses it own binary protocol through the transport layer to reduce and to optimize by the message, the data to send."),(0,a.kt)("p",null,"This aspect is important, when we are dealing with bits, to reduce byte size."),(0,a.kt)("p",null,"For example, if we want to serialize this bitstring: 11100000"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With existing solutions, we may end up with a list of 8 bytes"),(0,a.kt)("li",{parentName:"ul"},"With a custom solution, we serialize it with only 1 byte")),(0,a.kt)("h2",{id:"message-envelop"},"Message envelop"),(0,a.kt)("p",null,"To support privacy and security, each message is wrapped in a ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageEnvelop")," struct within:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Message ID: used in the stream multiplexing"),(0,a.kt)("li",{parentName:"ul"},"Message to send"),(0,a.kt)("li",{parentName:"ul"},"Sender public key: used to determine the liveness of the node from the recipient P2P view")),(0,a.kt)("p",null,"The envelop is then encrypted with the recipient public key (known by the network) using ECIES cryptography protocol."))}c.isMDXComponent=!0}}]);