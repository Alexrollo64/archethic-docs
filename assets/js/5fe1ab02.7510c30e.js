"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2926],{3905:(t,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>u});var a=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var d=a.createContext({}),l=function(t){var n=a.useContext(d),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},c=function(t){var n=l(t.components);return a.createElement(d.Provider,{value:n},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,d=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=l(e),f=i,u=m["".concat(d,".").concat(f)]||m[f]||p[f]||o;return e?a.createElement(u,r(r({ref:n},c),{},{components:e})):a.createElement(u,r({ref:n},c))}));function u(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,r=new Array(o);r[0]=f;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=t,s[m]="string"==typeof t?t:i,r[1]=s;for(var l=2;l<o;l++)r[l]=e[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}f.displayName="MDXCreateElement"},8712:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=e(7462),i=(e(7294),e(3905));e(8209);const o={id:"mining",title:"Mining"},r=void 0,s={unversionedId:"build/core/mining/mining",id:"build/core/mining/mining",title:"Mining",description:"Transaction validation (aka Mining) defines processes and validations algorithms.",source:"@site/docs/build/core/mining/README.md",sourceDirName:"build/core/mining",slug:"/build/core/mining/",permalink:"/build/core/mining/",draft:!1,tags:[],version:"current",lastUpdatedAt:1694426346,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"mining",title:"Mining"},sidebar:"docs",previous:{title:"Code Proposals",permalink:"/build/core/governance/code-proposals"},next:{title:"Pending transaction validation",permalink:"/build/core/mining/transaction-validation"}},d={},l=[{value:"Standalone validation workflow",id:"standalone-validation-workflow",level:2},{value:"Distributed validation",id:"distributed-validation",level:2},{value:"Worflow",id:"worflow",level:3},{value:"FSM",id:"fsm",level:3}],c={toc:l},m="wrapper";function p(t){let{components:n,...e}=t;return(0,i.kt)(m,(0,a.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Transaction validation (aka Mining) defines processes and validations algorithms."),(0,i.kt)("p",null,"Once a transaction is under validation a given process is dedicated to this transaction.\nDepending of the number of validation nodes several validation implementation are defined."),(0,i.kt)("p",null,"Along with validation workflow and processes, this context defines high levels functions to get the validation nodes and to assert their election."),(0,i.kt)("h2",{id:"standalone-validation-workflow"},"Standalone validation workflow"),(0,i.kt)("p",null,"When there is not only a single validation nodes (during the network initialization), a process is spawn to manage the transaction validation as a Task to run it (fire-off)"),(0,i.kt)("mermaid",{value:"stateDiagram-v2\n   direction LR\n    [*] --\x3e Idle\n    Idle --\x3e ValidateTransaction\n    ValidateTransaction: Validate transaction\n    ValidateTransaction --\x3e Replicate\n    Replicate --\x3e Replicate: Wait confirmations\n    Replicate --\x3e NotifyAttestation\n    NotifyAttestation: Notify transaction attestation\n    NotifyAttestation --\x3e [*]\n"}),(0,i.kt)("h2",{id:"distributed-validation"},"Distributed validation"),(0,i.kt)("h3",{id:"worflow"},"Worflow"),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    Client->>+WelcomeNode: Submit new transaction\n   par send transaction\n       WelcomeNode->>+Coordinator: \n   and \n      WelcomeNode->>+CrossValidationNode: \n   end\n   WelcomeNode ->>-Client: Transaction submited\n\n   par build context \n      Coordinator ->>+PreviousStorageNode: Fetch previous transaction\n      Coordinator ->>+PreviousStorageNode: Fetch unspent outputs\n   and\n      CrossValidationNode ->>+PreviousStorageNode: Fetch previous transaction\n      CrossValidationNode ->>+PreviousStorageNode: Fetch unspent outputs\n      CrossValidationNode ->>+Coordinator: Notify context and availability\n   end\n   \n   \n   Coordinator ->>+Coordinator: Build validation stamp\n   Coordinator ->>+CrossValidationNode: Send validation stamp\n\n   par wait validation stamp\n     CrossValidationNode ->>+CrossValidationNode: Cross validate the stamp\n     CrossValidationNode ->>+CrossValidationNode: Notify cross validation stamp\n     CrossValidationNode ->>+Coordinator: Notify cross validation stamp\n   end\n\n   par chain replication \n      Coordinator ->>+ChainStorageNode: Replicate transaction\n      CrossValidationNode ->>+ChainStorageNode: Replicate transaction\n   end\n\n   ChainStorageNode ->>+ChainStorageNode: Validate transaction and store transaction\n   alt transaction valid \n      ChainStorageNode ->>+ CrossValidationNode: Replication confirmation\n      ChainStorageNode ->>+ Coordinator: Replication confirmation\n   end\n\n   par notify replication\n      CrossValidationNode--\x3e+WelcomeNode: Confirm replication\n      Coordinator--\x3e+WelcomeNode: Confirm replication\n      CrossValidationNode--\x3e+PreviousStorageNode: Confirm replication\n      Coordinator--\x3e+PreviousStorageNode: Confirm replication\n      CrossValidationNode--\x3e+BeaconChain: Confirm replication\n      Coordinator--\x3e+BeaconChain: Confirm replication\n   end\n\n   WelcomeNode--\x3eClient: Notify replication confirmations"}),(0,i.kt)("h3",{id:"fsm"},"FSM"),(0,i.kt)("p",null,"When there are multiple validation nodes, a distributed workflow process is spawn as FSM to define the states and evolution of the ARCH consensus algorithm."),(0,i.kt)("p",null,"This FSM process is ran by all the validation nodes."),(0,i.kt)("p",null,"Therefore each validation maintains a ",(0,i.kt)("inlineCode",{parentName:"p"},"Registry")," of all the pending transaction validation processes, to be able to redirect P2P messages to the right process."),(0,i.kt)("mermaid",{value:"stateDiagram-v2\n    state role_state <<fork>>\n    state join_state <<join>>\n\n    [*] --\x3e Idle\n\n    Idle --\x3e Idle: Prevalidate transaction & Build context\n    Idle --\x3e role_state\n\n    role_state --\x3e Coordinator: first of elected validation nodes\n    role_state --\x3e CrossValidationNode: other node\n\n    state Coordinator {\n        state if_state_enough_context <<choice>>\n        [*] --\x3e WaitContext\n\n        WaitContext: Waiting context and confirmations\n        WaitContext --\x3e WaitContext: Add context and node confirmation\n\n        EnoughContextAndConfirmations: Enough context and confirmations ?\n\n        WaitContext --\x3e EnoughContextAndConfirmations\n        EnoughContextAndConfirmations --\x3e if_state_enough_context\n\n        if_state_enough_context --\x3e CreateValidationStamp: yes\n        if_state_enough_context --\x3e WaitContext: no\n\n        CreateValidationStamp: Create validation stamp\n        CreateValidationStamp --\x3e NotifyValidationStamp\n        NotifyValidationStamp: Notify validation stamp \n        NotifyValidationStamp --\x3e [*]\n    }\n\n    CrossValidationNode: Cross Validation Node\n    state CrossValidationNode {\n        [*] --\x3e NotifyContext\n        NotifyContext: Notify transaction context\n\n        NotifyContext --\x3e WaitValidationStamp\n        WaitValidationStamp: Wait validation stamp to validate\n\n        WaitValidationStamp --\x3e ValidateValidationStamp\n        ValidateValidationStamp: Verify validations tamp\n\n        ValidateValidationStamp --\x3e ValidateValidationStamp: create cross validation stamp\n        ValidateValidationStamp --\x3e SendCrossValidationStamp\n        SendCrossValidationStamp: Send the cross validation stamp to all\n        SendCrossValidationStamp --\x3e [*]\n    }\n\n    Coordinator --\x3e join_state\n    CrossValidationNode --\x3e join_state\n\n\n    join_state --\x3e WaitCrossValidationStamps\n\n    WaitCrossValidationStamps: Wait cross validation stamps\n    state WaitCrossValidationStamps {\n        state if_state_enough <<choice>>\n        state if_state_atomic_commitment <<choice>>\n        \n        [*] --\x3e WaitingStamps\n        WaitingStamps: Wait\n\n        WaitingStamps --\x3e WaitingStamps: Add cross validation stamp\n        WaitingStamps --\x3e EnoughStamps\n\n        EnoughStamps: Enough cross validation stamps ?\n\n        EnoughStamps --\x3e if_state_enough\n\n        if_state_enough --\x3e AtomicCommitmentReached: yes                                                                          \n        if_state_enough --\x3e WaitingStamps: no                                                                                     \n                                                                                                                                    \n        AtomicCommitmentReached: Atomic commitment reached ?                                                           \n                                                                                                                                    \n        AtomicCommitmentReached --\x3e if_state_atomic_commitment                                                                    \n                                                                                                                                    \n        if_state_atomic_commitment --\x3e [*]: yes                                                    \n        if_state_atomic_commitment --\x3e [*]: no\n   }\n\n    WaitCrossValidationStamps --\x3e Replication\n\n    state Replication {\n        [*] --\x3e NotifyTransaction\n        NotifyTransaction: Notify transaction\n        WaitAck: Waiting replicas confirmations\n        WaitAck --\x3e WaitAck: Add ack\n\n        NotifyTransaction --\x3e WaitAck\n\n        state if_state_enough_replicas <<choice>>\n        EnoughConfirmations: Enough confirmations ?\n        WaitAck --\x3e EnoughConfirmations\n\n        EnoughConfirmations --\x3e if_state_enough_replicas\n        NotifyAttestation: Notify replication attestation\n        if_state_enough_replicas --\x3e NotifyAttestation: yes\n        if_state_enough_replicas --\x3e WaitAck: no\n        NotifyAttestation --\x3e [*]\n    }\n"}))}p.isMDXComponent=!0},8209:(t,n,e)=>{e(7294)}}]);