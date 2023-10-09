"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));n(8209);const o={id:"condition",title:"Smart Contracts - Condition block",sidebar_label:"Condition",sidebar_position:2},r=void 0,s={unversionedId:"build/smart-contracts/language/condition",id:"build/smart-contracts/language/condition",title:"Smart Contracts - Condition block",description:"Conditions are blocks which purpose is to check the validity of a transaction.",source:"@site/docs/build/smart-contracts/language/condition.md",sourceDirName:"build/smart-contracts/language",slug:"/build/smart-contracts/language/condition",permalink:"/build/smart-contracts/language/condition",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858857,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:2,frontMatter:{id:"condition",title:"Smart Contracts - Condition block",sidebar_label:"Condition",sidebar_position:2},sidebar:"docs",previous:{title:"Triggers",permalink:"/build/smart-contracts/language/triggers"},next:{title:"Actions",permalink:"/build/smart-contracts/language/actions"}},l={},c=[{value:"Rules",id:"rules",level:2},{value:"Condition inherit",id:"condition-inherit",level:2},{value:"Examples",id:"examples",level:3},{value:"Condition transaction",id:"condition-transaction",level:2},{value:"Examples",id:"examples-1",level:3},{value:"Condition oracle",id:"condition-oracle",level:2},{value:"Examples",id:"examples-2",level:3},{value:"Legacy syntax",id:"legacy-syntax",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Conditions are blocks which purpose is to check the validity of a transaction. "),(0,i.kt)("p",null,"There are 3 types of ",(0,i.kt)("inlineCode",{parentName:"p"},"condition")," block: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#condition-inherit"},"inherit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#condition-transaction"},"transaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#condition-oracle"},"oracle"))),(0,i.kt)("p",null,'The condition blocks are not code block, they are maps of what we call "boolean expressions". '),(0,i.kt)("p",null,"In this map, the keys are the transaction property, and the values are expressions that must return a boolean or a value."),(0,i.kt)("p",null,"Conditions ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"oracle")," are mandatory if the associated trigger is used. Condition ",(0,i.kt)("inlineCode",{parentName:"p"},"inherit")," is optional."),(0,i.kt)("p",null,"Pseudo-code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition triggered_by: <type>, as: [\n    <prop1>: <value>,\n    <prop2>: <boolean>,\n    <prop3>: <expr that returns a value>,\n    <prop4>: <expr that returns a boolean>\n]\n\n# note the syntax is a bit different for the inherit\ncondition inherit: [\n    <prop1>: <value>,\n    <prop2>: <boolean>,\n    <prop3>: <expr that returns a value>,\n    <prop4>: <expr that returns a boolean>\n]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," is either ",(0,i.kt)("inlineCode",{parentName:"li"},"transaction")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"oracle"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prop")," is a property of the transaction or ",(0,i.kt)("inlineCode",{parentName:"li"},"origin_family"),". See ",(0,i.kt)("a",{parentName:"li",href:"/build/smart-contracts/language/actions#appendix-1-the-transaction-map"},"Action's Appendix 1")," for the available properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," is a code expression.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you wish use a complex expression for condition property. You can use multi-lines block enclosed by parenthesis"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition transaction: [\n    content: (\n        # Complex logic\n        # ...\n    )\n]\n"))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'condition inherit: [\n    # <value>\n    type: "contract",\n\n    # <boolean>\n    content: true,\n\n    # <expr that returns a value>\n    code:\n        if Time.now() > 1677572714 do\n            "condition inherit: []"\n        else\n            previous.code\n        end,\n\n    # <expr that returns a boolean>\n    uco_transfers: Map.size() > 0\n]\n')),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},'All "boolean expressions" must pass for the transaction to be valid.')),(0,i.kt)("li",{parentName:"ol"},'If the expression returns true, this "boolean expression" passes.'),(0,i.kt)("li",{parentName:"ol"},'If the expression returns false, this "boolean expression" fails.'),(0,i.kt)("li",{parentName:"ol"},'If the expression returns a value, this "boolean expression" passes if the transaction\'s property has the same value.')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In these blocks, there is also some sugar to automatically add the property as an argument of the functions called. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"uco_transfers: Map.size() > 0")," will automatically expand to ",(0,i.kt)("inlineCode",{parentName:"p"},"uco_transfers: Map.size(transaction.uco_transfers) > 0"),".")),(0,i.kt)("h2",{id:"condition-inherit"},"Condition inherit"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"condition inherit")," purpose is to check the next transaction generated by the smart contract after its code execution. It ensures the next transaction respects specific rules so the smart contract chain cannot be compromised."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition inherit: [...]\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If the map is empty ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),", it means the transaction chain is closed: no transaction will be accepted anymore.")),(0,i.kt)("p",null,"There are 2 global variables for this condition block:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"previous")," is the transaction of the current contract."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"next"),' is the "next transaction".')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/build/smart-contracts/language/actions#appendix-1-the-transaction-map"},"Action's Appendix 1")," for the details of the transaction map."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A specific rule is applied for inherit condition, if a field is not specified in the conditions, it assumes that it must have the same value as the previous transaction. ie. ",(0,i.kt)("inlineCode",{parentName:"p"},"code: previous.code == next.code"))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Pass only if it is executed before a timestamp:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition inherit: [\n    timestamp: next.timestamp < 1677598185\n]\n")),(0,i.kt)("p",null,'Pass only if the transaction is type "transfer", without any uco_transfers and at least one token_transfers:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'condition inherit: [\n    type: "transfer",\n    uco_transfers: Map.size() == 0,\n    token_transfers: Map.size() > 0\n]\n')),(0,i.kt)("p",null,"Pass only if chain has been closed (the code part) and there is a 2 UCO transfer to an address depending on the time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'condition inherit: [\n    code: "condition inherit: []",\n    uco_transfers: \n        if Time.now() >= 1674564088 do\n            ["00003bafdfb7a8e66b59de5692b79088063853bbd69a7d555faec906e6215e57ff98": 2]\n        else\n            ["0000ba28ce06631ff2ef4fe3dc89a34be13c0d252f8952bbfa3173b03dbef3c04afd": 2]\n        end\n]\n')),(0,i.kt)("p",null,'Pass only if the key "index" of the content is greater than the previous one:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'# Note that we have to embed a block code inside parenthesis as we create complex code \n# like create/assign variables with multilines conditions statements\ncondition inherit: [\n    content: (\n        json_path = "$.index"\n        if Json.path_match?(next.content, json_path) do\n            previous_index = Json.path_extract(previous.content, json_path)\n            new_index = Json.path_extract(next.content, json_path)\n\n            new_index > previous_index\n        else\n            false\n        end\n    )\n]\n')),(0,i.kt)("h2",{id:"condition-transaction"},"Condition transaction"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"condition transaction")," purpose is to check the transaction that triggered the contract (a transaction with the contract address in the recipients)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition triggered_by: transaction, as: [...]\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If the map is empty ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),", it means any transaction can trigger the contract.")),(0,i.kt)("p",null,"There are 2 global variables for this condition block:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"contract")," is the transaction of the current contract."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction")," is the transaction that triggered the contract.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/build/smart-contracts/language/actions#appendix-1-the-transaction-map"},"Action's Appendix 1")," for the details of the transaction map."),(0,i.kt)("h3",{id:"examples-1"},"Examples"),(0,i.kt)("p",null,"Pass only if the transaction that triggered the contract comes from a specific chain (a chain can be identified by it's genesis address):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition triggered_by: transaction, as: [\n    address: Chain.get_genesis_address() == 0x00001234ab\n]\n")),(0,i.kt)("p",null,"Pass only if the transaction that triggered sent 10 UCOs to this contract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition triggered_by: transaction, as: [\n    uco_transfers: Map.get(contract.address) == 10\n]\n")),(0,i.kt)("p",null,"Pass only if the candidate is in the list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'condition triggered_by: transaction, on: vote(candidate), as: [\n    content: List.in?(["Peter", "Sofia", "Claire"], candidate)\n]\n')),(0,i.kt)("admonition",{title:"Did you notice?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We wrote the expression in the ",(0,i.kt)("inlineCode",{parentName:"p"},"content"),' and we did not use this field. We\'ll soon introduce a new syntax to avoid this "hack".')),(0,i.kt)("h2",{id:"condition-oracle"},"Condition oracle"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"condition oracle")," purpose is to check the oracle transaction that triggered the contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition triggered_by: oracle, as: [...]\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If the map is empty ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),", it means any transaction can trigger the contract.")),(0,i.kt)("p",null,"There are 2 global variables for this condition block:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"contract")," is the transaction of the current contract."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction")," is the oracle transaction that triggered the contract.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/build/smart-contracts/language/actions#appendix-1-the-transaction-map"},"Action's Appendix 1")," for the details of the transaction map."),(0,i.kt)("h3",{id:"examples-2"},"Examples"),(0,i.kt)("p",null,"Pass only if the transaction's content is a JSON string including the UCO price in USD."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'condition triggered_by: oracle, as: [\n    content: Json.path_match?(transaction.content, "$.uco.usd")\n]\n')),(0,i.kt)("h2",{id:"legacy-syntax"},"Legacy syntax"),(0,i.kt)("admonition",{title:"Deprecated",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The syntax still works, but we'd like everyone to use the new syntax.")),(0,i.kt)("p",null,"The condition ",(0,i.kt)("inlineCode",{parentName:"p"},"oracle")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," used to have the same syntax as ",(0,i.kt)("inlineCode",{parentName:"p"},"inherit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"condition transaction: [...]\ncondition oracle: [...]\n")))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);