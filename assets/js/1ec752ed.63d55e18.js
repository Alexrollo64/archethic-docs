"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(8209);const i={id:"language",title:"Smart Contract Language",sidebar_label:"Language"},l=void 0,o={unversionedId:"build/smart-contracts/legacy/language",id:"build/smart-contracts/legacy/language",title:"Smart Contract Language",description:"Archethic Blockchain defines a new smart contract language which was designed to resolve the issue of smart contracts:",source:"@site/docs/build/smart-contracts/legacy/language.md",sourceDirName:"build/smart-contracts/legacy",slug:"/build/smart-contracts/legacy/language",permalink:"/build/smart-contracts/legacy/language",draft:!1,tags:[],version:"current",lastUpdatedAt:1687852490,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{id:"language",title:"Smart Contract Language",sidebar_label:"Language"},sidebar:"docs",previous:{title:"Examples",permalink:"/build/smart-contracts/legacy/examples"},next:{title:"Testnet",permalink:"/build/testnet"}},c={},s=[{value:"Triggers/Actions",id:"triggersactions",level:2},{value:"Conditions",id:"conditions",level:2},{value:"Global variables",id:"global-variables",level:2},{value:"Functions",id:"functions",level:2},{value:"Utilities",id:"utilities",level:3},{value:"Statements",id:"statements",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Archethic Blockchain defines a new smart contract language which was designed to resolve the issue of smart contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Expressiveness"),(0,r.kt)("li",{parentName:"ul"},"Simplify"),(0,r.kt)("li",{parentName:"ul"},"Security")),(0,r.kt)("p",null,"Along with the new features of Archethic Smart Contracts (triggers, conditions, actions), a new custom language is defined"),(0,r.kt)("h2",{id:"triggersactions"},"Triggers/Actions"),(0,r.kt)("p",null,"To define a trigger, we need to specify an action block with its trigger type and the following parameters (if presents)"),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"based on an incoming transaction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"actions triggered_by: transaction do\n  # do something when a receive transaction\nend\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"based on time interval")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'actions triggered_by: interval, at: "0 8 * * *" do\n  # do something each day at 8AM\nend\n')),(0,r.kt)("h2",{id:"conditions"},"Conditions"),(0,r.kt)("p",null,"To define a condition, we need to specify a condition block with its subject and the list conditions by fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authorized_keys")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secrets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uco_transfers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token_transfers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"previous_public_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin_family"))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'expecting the incoming transaction contains the content "hello"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'condition transaction: [\n    content: "Hello"\n]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"expecting all the transaction in the chain should be generated from a biometric device")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"condition inherit: [\n    origin_family: biometric\n]\n")),(0,r.kt)("h2",{id:"global-variables"},"Global variables"),(0,r.kt)("p",null,"Smart Contract can use global variable in the different blocks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract"),": represent the actual contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction"),": incoming transaction"),(0,r.kt)("li",{parentName:"ul"},"(inherit condition only) ",(0,r.kt)("inlineCode",{parentName:"li"},"next"),": next transaction on the chain"),(0,r.kt)("li",{parentName:"ul"},"(inherit condition only) ",(0,r.kt)("inlineCode",{parentName:"li"},"previous"),": previous transaction on the chain")),(0,r.kt)("p",null,"Each of this variables contains the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," (hex)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," (abitraty string)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code")," (abritraty string)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authorized_keys")," (map of public keys)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secrets")," (list of encrypted secrets in hex)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"previous_public_key")," (hex)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recipients")," (list of smart contract recipients addresses in hex)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uco_transfers")," (map of the uco transfers: ",(0,r.kt)("inlineCode",{parentName:"li"},"%{ recipient_address => amount }")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token_transfers")," (map of the token transfers: ",(0,r.kt)("inlineCode",{parentName:"li"},"%{ recipient_address => list(%{ amount: amount, token_address: token_to_transfer, token_id: token_id}}) "))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Archethic Smart Contracts relies on function which can be used on condition or action blocks."),(0,r.kt)("p",null,"There are two categories of functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utilities"),(0,r.kt)("li",{parentName:"ul"},"Statements (for transaction generation)")),(0,r.kt)("h3",{id:"utilities"},"Utilities"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"condition")," block, if no parameter is given, the transaction's field value will be the first one")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hash(data)"),": Perform a cryptographic hash")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"condition transaction: [\n    content: hash(contract.code)\n]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"regex_match?(data, pattern)"),": Verify a regular expression")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'condition transaction: [\n    content: regex_match?("hello")\n]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"regex_extract(data, pattern)"),": Extract data from a regular expression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"json_match?: Verify the data matches a JSONPath expression"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'condition oracle: [\n    content: json_match?("$.uco.usd")\n]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json_extract(data, pattern)"),": Extract data from a JSONPath expression")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'condition oracle: [\n    content: json_extract("$.uco.usd") > 0.2\n]\n')),(0,r.kt)("h3",{id:"statements"},"Statements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_type"),": Set the transaction type")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"actions triggered_by: transaction do\n    set_type transfer\nend\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_uco_transfer"),": Add a new UCO transfer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_uco_transfer to: "F28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C", amount: 1.0\nend\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_token_transfer"),": Add a new token transfer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_token_transfer: to: "AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C", token_address: "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC", amount: 1.0\nend\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_content"),": Set the new content")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    set_content "hello"\nend\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_code"),": Set the new code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    set_code """\n    actions triggered_by: transaction do\n      add_uco_transfer to: "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC", amount: 2.0\n    end\n    """\nend\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_ownership"),": Add a new ownership with a secret and its authorized public keys")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_ownership secret: "...", secret_key: "...", authorized_public_key: ["0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"]\nend\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_recipient"),": Add a contract address to reach")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'actions triggered_by: datetime, at: 1391309030 do\n    add_recipient "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"\nend\n\n')))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);