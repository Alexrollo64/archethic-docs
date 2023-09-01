"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));n(8209);const i={id:"scheduler",title:"OracleChain Scheduler",sidebar_label:"Scheduler"},o=void 0,s={unversionedId:"build/core/oracle-chain/scheduler",id:"build/core/oracle-chain/scheduler",title:"OracleChain Scheduler",description:"The OracleChain module contains a process in charge of scheduling the data fetching and transaction submitting.",source:"@site/docs/build/core/oracle-chain/scheduler.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/scheduler",permalink:"/build/core/oracle-chain/scheduler",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557909,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"scheduler",title:"OracleChain Scheduler",sidebar_label:"Scheduler"},sidebar:"docs",previous:{title:"Memory database",permalink:"/build/core/oracle-chain/memory-table"},next:{title:"Service",permalink:"/build/core/oracle-chain/service"}},l={},c=[],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The OracleChain module contains a process in charge of scheduling the data fetching and transaction submitting."),(0,r.kt)("p",null,"It's modeled as finite state machine."),(0,r.kt)("p",null,"Three main state are represented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDLE"),": When the process is waiting a new tick to be triggered based on some interval"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Polling"),": When the process must fetch data from external sources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Summary"),": When the process must aggregate the entire polling transactions for a given interval")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mainnet and Testnet can have different values based on environment variables."),(0,r.kt)("p",{parentName:"admonition"},"This is due to simulate quicker events and summary."),(0,r.kt)("p",{parentName:"admonition"},"For example,"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"on Mainnet: each polling is triggered each minute and the summary each day at 00:00 UTC."),(0,r.kt)("li",{parentName:"ul"},"on Testnet: each polling is triggered each 10s and the summary each minute.\n:::")),(0,r.kt)("p",{parentName:"admonition"},"For each actionable state, the process determines if the current running node is in charge to fetch or emit the transaction, based on the election algorithm."),(0,r.kt)("p",{parentName:"admonition"},"Also to avoid any useless transactions, the process identifies if a new transaction must be emitted regarding the freshness of the information retrieved from the Oracle services."),(0,r.kt)("p",{parentName:"admonition"},"You can find below a schema representing this finite state machine and its related events.")),(0,r.kt)("mermaid",{value:'stateDiagram-v2\n    [*] --\x3e Idle\n    Idle --\x3e Idle: "tick\n\n    state "Is summary time ?" as Is_Summary_Time\n\n    state if_state <<choice>>\n    Idle --\x3e Is_Summary_Time\n    Is_Summary_Time --\x3e if_state\n    if_state --\x3e Summary: "Yes"\n    if_state --\x3e Polling: "No"\n\n\n    state Polling {\n        state if_state_polling <<choice>>\n        state "Is polling trigger node ?" as IsPollingTriggerNode\n        state "Fetching data" as FetchData\n        state if_state_polling_new_data <<choice>>\n        state "Is new data ?" as IsNewData\n        state "Send oracle transaction" as SendOracleTransaction\n\n        [*] --\x3e IsPollingTriggerNode\n        IsPollingTriggerNode --\x3e if_state_polling\n        if_state_polling --\x3e [*]: "No"\n        if_state_polling --\x3e FetchData: "Yes"\n        FetchData --\x3e IsNewData\n\n        IsNewData --\x3e if_state_polling_new_data\n        if_state_polling_new_data --\x3e [*]: "No"\n        if_state_polling_new_data --\x3e SendOracleTransaction: "Yes"\n        SendOracleTransaction --\x3e [*]\n    }\n\n    Polling --\x3e Idle\n\n\n    state Summary {\n        state if_state_summary <<choice>>\n        state "Is summary trigger node ?" as IsSummaryTriggerNode\n        state "Send summary transaction" as SendSummaryTransaction\n\n        [*] --\x3e IsSummaryTriggerNode\n        IsSummaryTriggerNode --\x3e if_state_summary\n        if_state_summary --\x3e [*]: "No"\n        if_state_summary --\x3e SendSummaryTransaction: "Yes"\n        SendSummaryTransaction --\x3e [*]\n    }\n\n    Summary --\x3e Idle'}),(0,r.kt)("p",null,":::note"))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);