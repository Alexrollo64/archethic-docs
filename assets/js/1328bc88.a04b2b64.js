"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2459],{7704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));a(1839);const r={id:"reference",title:"Reference",sidebar_label:"Reference",sidebar_position:2},l=void 0,o={unversionedId:"build/smart-contracts/reference/reference",id:"build/smart-contracts/reference/reference",title:"Reference",description:"A Smart Contract is defined as followed:",source:"@site/docs/build/smart-contracts/reference/README.md",sourceDirName:"build/smart-contracts/reference",slug:"/build/smart-contracts/reference/",permalink:"/build/smart-contracts/reference/",draft:!1,tags:[],version:"current",lastUpdatedAt:1687180718,formattedLastUpdatedAt:"Jun 19, 2023",sidebarPosition:2,frontMatter:{id:"reference",title:"Reference",sidebar_label:"Reference",sidebar_position:2},sidebar:"docs",previous:{title:"Smart Contracts",permalink:"/build/smart-contracts/"},next:{title:"Triggers",permalink:"/build/smart-contracts/reference/triggers"}},s={},p=[{value:"Version attribute",id:"version-attribute",level:2},{value:"Basic Types",id:"basic-types",level:2},{value:"Comparaison",id:"comparaison",level:2},{value:"Arithmetic",id:"arithmetic",level:2},{value:"Ranges",id:"ranges",level:2},{value:"Loop",id:"loop",level:2},{value:"Variables &amp; Scopes",id:"variables--scopes",level:2},{value:"Lists",id:"lists",level:2},{value:"Maps",id:"maps",level:2},{value:"Library",id:"library",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Smart Contract is defined as followed: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 version attribute"),(0,i.kt)("li",{parentName:"ul"},"1 or many ",(0,i.kt)("a",{parentName:"li",href:"/build/smart-contracts/reference/actions"},"actions")," block (maximum, one per ",(0,i.kt)("a",{parentName:"li",href:"/build/smart-contracts/reference/triggers"},"trigger"),")"),(0,i.kt)("li",{parentName:"ul"},"0 or 1 ",(0,i.kt)("a",{parentName:"li",href:"/build/smart-contracts/reference/condition#inherit"},"condition inherit")," block"),(0,i.kt)("li",{parentName:"ul"},"0 or 1 ",(0,i.kt)("a",{parentName:"li",href:"/build/smart-contracts/reference/condition#transaction"},"condition transaction")," block"),(0,i.kt)("li",{parentName:"ul"},"0 or 1 ",(0,i.kt)("a",{parentName:"li",href:"/build/smart-contracts/reference/condition#oracle"},"condition oracle")," block")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"actions")," blocks contain the code to execute when a specific event is triggered."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"condition inherit")," block is used to check the outgoing transaction (result) of the contract."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"condition transaction")," block is used to check the incoming transaction that triggered the contract."),(0,i.kt)("h2",{id:"version-attribute"},"Version attribute"),(0,i.kt)("p",null,"A version attribute must be specified on the first line of the code. This version is used by the interpreter to have the right behavior in case of breaking changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"@version 1\n# Rest of the code\n")),(0,i.kt)("h2",{id:"basic-types"},"Basic Types"),(0,i.kt)("p",null,"This language is based on a functional language (elixir), but we added some imperative twist to it, to make it friendlier!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Comments are lines that start with a ",(0,i.kt)("inlineCode",{parentName:"li"},"#")),(0,i.kt)("li",{parentName:"ul"},"Strings are double quoted ",(0,i.kt)("inlineCode",{parentName:"li"},'"I am a string"')),(0,i.kt)("li",{parentName:"ul"},"String interpolation ",(0,i.kt)("inlineCode",{parentName:"li"},'"hello #{name}"')),(0,i.kt)("li",{parentName:"ul"},"Integers & Floats can use ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," at your convenience ",(0,i.kt)("inlineCode",{parentName:"li"},"10_000")," ",(0,i.kt)("inlineCode",{parentName:"li"},"10_000.0")),(0,i.kt)("li",{parentName:"ul"},"Floats can use the scientific format: ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0e2 == 100")," "),(0,i.kt)("li",{parentName:"ul"},"Booleans syntax: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"The absence of value: ",(0,i.kt)("inlineCode",{parentName:"li"},"nil"))),(0,i.kt)("h2",{id:"comparaison"},"Comparaison"),(0,i.kt)("p",null,"We compare by value, which means you can pretty much compare anything and it will work as you expect. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 == 1.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[1,2] == [1,2]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'[name: "John"] == [name: "John"]')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true != false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if <expr> do ... end")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"if <expr> do ... else ... end"))),(0,i.kt)("h2",{id:"arithmetic"},"Arithmetic"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 + 2 == 3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2.0 - 1.1 == 0.9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 * 2.0 == 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 / 1 == 1.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 / 0")," contract failure")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The arithmetic is done with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ericmj/decimal"},"Decimal library")," to ensure there is no floating point precision issue.\n",(0,i.kt)("strong",{parentName:"p"},"The only thing to keep in mind is that we truncate at decimal 8."))),(0,i.kt)("h2",{id:"ranges"},"Ranges"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1..5")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"li"},"[1,2,3,4,5]"))),(0,i.kt)("h2",{id:"loop"},"Loop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"for name in names do ... end")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"for i in 1..10 do ... end"))),(0,i.kt)("h2",{id:"variables--scopes"},"Variables & Scopes"),(0,i.kt)("p",null,"Variables are not typed, you can assign any value to them."),(0,i.kt)("p",null,"Variables are mutable, if you update a variable declared in a parent scope, it will also update the value of this variable for the parent scope."),(0,i.kt)("p",null,"A new scope is created every time you enter a new block (",(0,i.kt)("inlineCode",{parentName:"p"},"do .. end"),"). A scope can access (read/write) the variables declared in its parent's scope, but not its child's scope."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'names = ["Tom", "Jerry", ""]       \ntext = ""                           \nfor name in names do                # ENTER SCOPE 1\n    if name != "" do                # ENTER SCOPE 1.1\n        new_line = "\\n"             \n        text = "#{name}#{new_line}" \n    end                             # EXIT SCOPE 1.1\n    # new_line does not exists here\nend                                 # EXIT SCOPE 1\n# test = "Tom\\nJerry\\n"\n# name and new_line does not exists here\n')),(0,i.kt)("p",null,"Here's the tree of scopes and variables for the above example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[SCOPE 0]\n\u251c\u2500\u2500 names\n\u251c\u2500\u2500 text\n\u2514\u2500\u2500 [SCOPE 1]\n    \u251c\u2500\u2500 name\n    \u2514\u2500\u2500 [SCOPE 1.1]\n        \u2514\u2500\u2500 new_line\n")),(0,i.kt)("h2",{id:"lists"},"Lists"),(0,i.kt)("p",null,"The list is the data structure to work with collections. The syntax is: ",(0,i.kt)("inlineCode",{parentName:"p"},"[1, 2]"),". An empty list is: ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),".\nThere is a ",(0,i.kt)("a",{parentName:"p",href:"/build/smart-contracts/reference/library#list"},"List module")," in the library to manipulate lists."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Lists are actually ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linked_list"},"Linked Lists"),".")),(0,i.kt)("h2",{id:"maps"},"Maps"),(0,i.kt)("p",null,"The map is the key-value data structure in the Smart Contract language. The syntax is: ",(0,i.kt)("inlineCode",{parentName:"p"},"[key1: 1, key2: 2]")," or if key starts with a number: ",(0,i.kt)("inlineCode",{parentName:"p"},'["00001abc...": 1]'),". The keys must be strings.\nThere is 3 ways to retrieve a value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map.property")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'map["property"]')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'Map.get(map, "property")'))),(0,i.kt)("p",null,"We suggest to use the 1st syntax as often as possible. Use the 2nd or 3rd when dealing with dynamic properties."),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"/build/smart-contracts/reference/library#map"},"Map module")," module in the library to manipulate maps."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Since the maps and the lists have a very close syntax, it is impossible to differentiate an empty map from an empty list. So, for semantic reasons, to create an empty map, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Map.new()")," function call.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The brackets are mostly optional! ",(0,i.kt)("inlineCode",{parentName:"p"},"key1: 1, key2: 2")," will work as well. But if you have a nested map, you cannot omit them!")),(0,i.kt)("h2",{id:"library"},"Library"),(0,i.kt)("p",null,"You may use any functions from the library. The syntax is ",(0,i.kt)("inlineCode",{parentName:"p"},"Module.function(arg1, arg2)"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The parenthesis are actually optional! ",(0,i.kt)("inlineCode",{parentName:"p"},"Module.function arg1, arg2")," will work as well.")),(0,i.kt)("p",null,"To see the list of functions available in the Smart Contract Language, check the ",(0,i.kt)("a",{parentName:"p",href:"/build/smart-contracts/reference/library"},"Library page"),"."))}c.isMDXComponent=!0}}]);