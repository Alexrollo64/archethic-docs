"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6544],{3338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));n(1839);const l={id:"language",title:"Smart Contract Language"},r=void 0,o={unversionedId:"build/smart-contracts/language",id:"build/smart-contracts/language",title:"Smart Contract Language",description:"Archethic Blockchain defines a new smart contract language which was designed to resolve the issue of smart contracts:",source:"@site/docs/build/smart-contracts/language.md",sourceDirName:"build/smart-contracts",slug:"/build/smart-contracts/language",permalink:"/archethic-docs/build/smart-contracts/language",draft:!1,tags:[],version:"current",lastUpdatedAt:1664885482,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{id:"language",title:"Smart Contract Language"},sidebar:"docs",previous:{title:"Smart Contracts",permalink:"/archethic-docs/build/smart-contracts"},next:{title:"Smart Contract examples",permalink:"/archethic-docs/build/smart-contracts/examples"}},s={},c=[{value:"Triggers/Actions",id:"triggersactions",level:2},{value:"Conditions",id:"conditions",level:2},{value:"Global variables",id:"global-variables",level:2},{value:"Functions",id:"functions",level:2},{value:"Utilities",id:"utilities",level:3},{value:"Statements",id:"statements",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic Blockchain defines a new smart contract language which was designed to resolve the issue of smart contracts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Expressiveness"),(0,i.kt)("li",{parentName:"ul"},"Simplify"),(0,i.kt)("li",{parentName:"ul"},"Security")),(0,i.kt)("p",null,"Along with the new features of Archethic Smart Contracts (triggers, conditions, actions), a new custom language is defined"),(0,i.kt)("h2",{id:"triggersactions"},"Triggers/Actions"),(0,i.kt)("p",null,"To define a trigger, we need to specify an action block with its trigger type and the following parameters (if presents)"),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"based on an incoming transaction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"actions triggered_by: transaction do\n  # do something when a receive transaction\nend\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"based on time interval")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: interval, at: "0 8 * * *" do\n  # do something each day at 8AM\nend\n')),(0,i.kt)("h2",{id:"conditions"},"Conditions"),(0,i.kt)("p",null,"To define a condition, we need to specify a condition block with its subject and the list conditions by fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorized_keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secrets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uco_transfers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_transfers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previous_public_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"origin_family"))),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'expecting the incoming transaction contains the content "hello"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'condition transaction: [\n    content: "Hello"\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"expecting all the transaction in the chain should be generated from a biometric device")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"condition inherit: [\n    origin_family: biometric\n]\n")),(0,i.kt)("h2",{id:"global-variables"},"Global variables"),(0,i.kt)("p",null,"Smart Contract can use global variable in the different blocks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract"),": represent the actual contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction"),": incoming transaction"),(0,i.kt)("li",{parentName:"ul"},"(inherit condition only) ",(0,i.kt)("inlineCode",{parentName:"li"},"next"),": next transaction on the chain"),(0,i.kt)("li",{parentName:"ul"},"(inherit condition only) ",(0,i.kt)("inlineCode",{parentName:"li"},"previous"),": previous transaction on the chain ")),(0,i.kt)("p",null,"Each of this variables contains the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," (hex)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")," (abitraty string)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")," (abritraty string)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authorized_keys")," (map of public keys)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secrets")," (list of encrypted secrets in hex)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"previous_public_key")," (hex) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recipients")," (list of smart contract recipients addresses in hex)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uco_transfers")," (map of the uco transfers: ",(0,i.kt)("inlineCode",{parentName:"li"},"%{ recipient_address => amount }")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_transfers")," (map of the token transfers: ",(0,i.kt)("inlineCode",{parentName:"li"},"%{ recipient_address => list(%{ amount: amount, token_address: token_to_transfer, token_id: token_id}}) "))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("p",null,"Archethic Smart Contracts relies on function which can be used on condition or action blocks."),(0,i.kt)("p",null,"There are two categories of functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilities"),(0,i.kt)("li",{parentName:"ul"},"Statements (for transaction generation)")),(0,i.kt)("h3",{id:"utilities"},"Utilities"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"condition")," block, if no parameter is given, the transaction's field value will be the first one ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash(data)"),": Perform a cryptographic hash")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"condition transaction: [\n    content: hash(contract.code)\n]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regex_match?(data, pattern)"),": Verify a regular expression")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'condition transaction: [\n    content: regex_match?("hello")\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"regex_extract(data, pattern)"),": Extract data from a regular expression")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"json_match?: Verify the data matches a JSONPath expression"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'condition oracle: [\n    content: json_match?("$.uco.usd")\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json_extract(data, pattern)"),": Extract data from a JSONPath expression")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'condition oracle: [\n    content: json_extract("$.uco.usd") > 0.2\n]\n')),(0,i.kt)("h3",{id:"statements"},"Statements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_type"),": Set the transaction type")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"actions triggered_by: transaction do\n    set_type transfer\nend\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_uco_transfer"),": Add a new UCO transfer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_uco_transfer to: "F28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C", amount: 1.0\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_token_transfer"),": Add a new token transfer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_token_transfer: to: "AF28C3D5B3828AD3F8682F1B1D14A8507B829F65F7BE6C50427A6019CCB6801C", token_address: "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC", amount: 1.0\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_content"),": Set the new content")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    set_content "hello"\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set_code"),": Set the new code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    set_code """\n    actions triggered_by: transaction do\n      add_uco_transfer to: "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC", amount: 2.0\n    end\n    """\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_ownership"),": Add a new ownership with a secret and its authorized public keys")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: transaction do\n    add_ownership secret: "...", secret_key: "...", authorized_public_key: ["0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"]\nend\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"add_recipient"),": Add a contract address to reach")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'actions triggered_by: datetime, at: 1391309030 do\n    add_recipient "0D574D171A484F8DEAC2D61FC3F7CC984BEB52465D69B3B5F670090742CBF5CC"\nend\n')))}p.isMDXComponent=!0}}]);