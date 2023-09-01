"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1248],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=i,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7577:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));a(8209);const r={id:"archethic-cli",title:"Archethic's CLI"},o=void 0,s={unversionedId:"participate/cli/archethic-cli",id:"participate/cli/archethic-cli",title:"Archethic's CLI",description:"Developers like to use terminal applications to speed up their productivity, therefore Archethic have also",source:"@site/docs/participate/cli/README.md",sourceDirName:"participate/cli",slug:"/participate/cli/",permalink:"/participate/cli/",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557909,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"archethic-cli",title:"Archethic's CLI"},sidebar:"docs",previous:{title:"Automate deployments",permalink:"/participate/aeweb/automation"},next:{title:"Archethic Wallet",permalink:"/participate/wallet/"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Generate address",id:"generate-address",level:2},{value:"Build and send transaction",id:"build-and-send-transaction",level:2},{value:"UCO transfers",id:"uco-transfers",level:3},{value:"Token transfers",id:"token-transfers",level:3},{value:"Recipients",id:"recipients",level:3},{value:"Ownerships",id:"ownerships",level:4},{value:"Content",id:"content",level:3},{value:"Smart contract",id:"smart-contract",level:3},{value:"Sending the transaction",id:"sending-the-transaction",level:3},{value:"Keychain management",id:"keychain-management",level:2},{value:"Creating a keychain",id:"creating-a-keychain",level:3},{value:"Accessing a keychain",id:"accessing-a-keychain",level:3},{value:"Adding / removing a service",id:"adding--removing-a-service",level:3},{value:"Create a transaction for a service",id:"create-a-transaction-for-a-service",level:3},{value:"CLI - Archethic Command Line Interpreter",id:"cli---archethic-command-line-interpreter",level:2},{value:"Contribution",id:"contribution",level:2}],d={toc:l},h="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Developers like to use terminal applications to speed up their productivity, therefore Archethic have also\nits own command line interpreter is available to make interaction with the Blockchain easier for power users."),(0,i.kt)("p",null,"This tool helps you to connect to your decentralized wallet (keychain), manage it, send transactions, etc."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Download a pre-compiled binary or package from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-cli/releases"},"releases")," page."),(0,i.kt)("p",null,"Or install it with go:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/archethic-foundation/archethic-cli@latest\n")),(0,i.kt)("p",null,"Or just build it yourself (requires Go 1.18+):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/archethic-foundation/archethic-cli.git\ncd archethic-cli\ngo build .\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"By default the CLI works as TUI (terminal user interface) application allowing the application to be interactive. "),(0,i.kt)("p",null,"When launching the Archethic CLI you will access to the main menu that allows you to select an action. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate an address"),(0,i.kt)("li",{parentName:"ul"},"Build and send a transaction"),(0,i.kt)("li",{parentName:"ul"},"Manage keychains (and send transaction keychains)")),(0,i.kt)("h2",{id:"generate-address"},"Generate address"),(0,i.kt)("p",null,"This generate address page allows you to get the address for a given seed, a specific index and with a given elliptic curve and hash algorithm. The default values are probably fine for elliptic curve and hash algorithm."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generate address",src:a(7848).Z,width:"1334",height:"698"})),(0,i.kt)("h2",{id:"build-and-send-transaction"},"Build and send transaction"),(0,i.kt)("p",null,"This menu allows you to create a transaction. There are 7 tabs you can navigate to, by using the left and right arrows of your keyboard in order to configure your transaction."),(0,i.kt)("p",null,"This is where you set the main info (like the endpoint, the seed, the transaction type\u2026) and send the transaction. By selecting one of the default node endpoint you will have the URL to send your transaction automatically set. You will need to enter your seed. "),(0,i.kt)("p",null,"The index of the transaction will be set automatically (based on the index of the last transaction). Select one of the transaction type, regarding the type you select, you might have specific information to provide to your transaction (for example a transaction of type  ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," needs a UCO transfer or a token transfer. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," buttons sends the transaction and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset")," button clears the form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Main tab",src:a(3288).Z,width:"2224",height:"1418"})),(0,i.kt)("h3",{id:"uco-transfers"},"UCO transfers"),(0,i.kt)("p",null,"This tab allows you to create UCO transfers in your transaction. Type a valid address and an amount and press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button.\n",(0,i.kt)("img",{alt:"UCO transfer tab",src:a(3040).Z,width:"2224",height:"544"})),(0,i.kt)("p",null,"You will then have a list of configured UCO transfers. Using the up and down keys, you can highlight a configured transfer and delete it by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"d"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"UCO transfer tab 2",src:a(5436).Z,width:"2226",height:"620"})),(0,i.kt)("h3",{id:"token-transfers"},"Token transfers"),(0,i.kt)("p",null,"The same logic applies to the token transfers tab. But you need to specify a token address and an token id."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Token transfers tab",src:a(6753).Z,width:"2212",height:"654"})),(0,i.kt)("h3",{id:"recipients"},"Recipients"),(0,i.kt)("p",null,"The same logic also applies to the recipients tab which targets smart contract executions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Recipients tab",src:a(1699).Z,width:"2214",height:"518"})),(0,i.kt)("h4",{id:"ownerships"},"Ownerships"),(0,i.kt)("p",null,"The ownership tab contains the information about the access you give to execute your transaction. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This will be needed if you want to create a smart contract.")),(0,i.kt)("p",null,"You can define several ownerships.\nEach ownership has"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a secret"),(0,i.kt)("li",{parentName:"ul"},"a list of authorization keys that get access to the secret. ")),(0,i.kt)("p",null,"At least one of the ownership must have the seed as a secret and the storage nouce public key as an authorization key. "),(0,i.kt)("p",null,"You can press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Load Storage Nounce Public Key")," to automatically set the authorization key with the value of the storage nonce public key. (ie. for smart contract's creation key delegation) "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You must have selected an endpoint in the main tab in order to load the storage nounce public key of the network you target.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ownerships tab",src:a(771).Z,width:"2216",height:"644"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ownerhips tab 2",src:a(4786).Z,width:"2222",height:"764"})),(0,i.kt)("p",null,"Pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add authorization key")," allows you to add a new authorization key that will get access to the secret. Once added to the list of autorized keys, you can highlight a key and press ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," to delete it. "),(0,i.kt)("p",null,"Once you\u2019re done with the configuration, you can press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button to add the ownership configuration to the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ownerships tab 3",src:a(1100).Z,width:"2216",height:"708"})),(0,i.kt)("p",null,"And here also, if you want to delete a configured ownership, you can highlight it and press ",(0,i.kt)("inlineCode",{parentName:"p"},"d"),"."),(0,i.kt)("h3",{id:"content"},"Content"),(0,i.kt)("p",null,"The content tab allows you to set the content of the transaction. Start typing to enter the edit mode of this tab and press ",(0,i.kt)("inlineCode",{parentName:"p"},"esc")," if you want to exit the edit mode and navigate to another tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Content tab",src:a(8914).Z,width:"2214",height:"450"})),(0,i.kt)("h3",{id:"smart-contract"},"Smart contract"),(0,i.kt)("p",null,"The smart contract tab allows you to set the smart contract of the transaction. Start typing to enter the edit mode of this tab and press ",(0,i.kt)("inlineCode",{parentName:"p"},"esc")," if you want to exit the edit mode and navigate to another tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Smart contract tab",src:a(4241).Z,width:"2226",height:"446"})),(0,i.kt)("h3",{id:"sending-the-transaction"},"Sending the transaction"),(0,i.kt)("p",null,"When you\u2019re done configuring the transaction, go back to the main tab and press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sending transaction",src:a(7722).Z,width:"2216",height:"1340"})),(0,i.kt)("h2",{id:"keychain-management"},"Keychain management"),(0,i.kt)("p",null,"The keychain management menu allows you to "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a keychain with a given seed"),(0,i.kt)("li",{parentName:"ul"},"access a keychain"),(0,i.kt)("li",{parentName:"ul"},"add and remove services from a keychain"),(0,i.kt)("li",{parentName:"ul"},"send a keychain transaction for a specific service")),(0,i.kt)("p",null,"In any cases you will need to start by selecting the endpoint you want, that will automatically feed the URL of the endpoint.\nThen specify your access seed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keychain management",src:a(2603).Z,width:"356",height:"538"})),(0,i.kt)("h3",{id:"creating-a-keychain"},"Creating a keychain"),(0,i.kt)("p",null,"If you press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create keychain")," button, a new keychain will be created. And the seed you provided will be used to access it. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a keychain",src:a(7995).Z,width:"1982",height:"814"})),(0,i.kt)("h3",{id:"accessing-a-keychain"},"Accessing a keychain"),(0,i.kt)("p",null,"Pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Access keychain")," button will give you access to the list of services associated with your keychain (one default ",(0,i.kt)("inlineCode",{parentName:"p"},"uco")," service has been created).\n",(0,i.kt)("img",{alt:"Access a keychain",src:a(8634).Z,width:"912",height:"1162"})),(0,i.kt)("h3",{id:"adding--removing-a-service"},"Adding / removing a service"),(0,i.kt)("p",null,"If you go down to the ",(0,i.kt)("inlineCode",{parentName:"p"},"service name")," field you can type a new service name and a default derivation path will be created. If you then press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Service"),", your new service will be displayed in the list of services."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add a service",src:a(3061).Z,width:"898",height:"1212"})),(0,i.kt)("p",null,"If you highlight a service and press ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," the service will be deleted."),(0,i.kt)("h3",{id:"create-a-transaction-for-a-service"},"Create a transaction for a service"),(0,i.kt)("p",null,"If you highlight a specific service and press ",(0,i.kt)("inlineCode",{parentName:"p"},"enter")," the highlighted will be selected."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a transaction for a service",src:a(2029).Z,width:"898",height:"1208"})),(0,i.kt)("p",null,"If you then press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Transaction for Service")," button, you will get a new menu to create a transaction for the selected service."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Main tab of create keychain transaction",src:a(9294).Z,width:"2212",height:"870"})),(0,i.kt)("p",null,"The mechanism to configure a keychain transaction for a service is the same as the one for a transaction (described above). Only a few configuration are not possible (like the endpoint, the seed, the index and the elliptic curve)."),(0,i.kt)("h2",{id:"cli---archethic-command-line-interpreter"},"CLI - Archethic Command Line Interpreter"),(0,i.kt)("p",null,"It is also possible to call the archethic cli tool using the command line."),(0,i.kt)("p",null,"For details of available commands, you can"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consult the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archethic-foundation/archethic-cli#cli"},"readme")," of the corresponding github project."),(0,i.kt)("li",{parentName:"ul"},"display help with the command ",(0,i.kt)("inlineCode",{parentName:"li"},"--help"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Help command",src:a(2941).Z,width:"1526",height:"810"})),(0,i.kt)("h2",{id:"contribution"},"Contribution"),(0,i.kt)("p",null,"If you like this product and wish to contribute to its development, please visit our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-cli"},"Github Page")),(0,i.kt)("p",null,"We are welcoming contributions in any forms (code, issues, documentation, ideas, question, etc.)"))}p.isMDXComponent=!0},8634:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/access_keychain-9f933a8d669d6ed955e30dd1aa169bbb.png"},3061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_service-0678042a796e4c8290090dc5ecfae0d2.png"},8914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/content-ab19f634acaad0b5246fe5983d98f129.png"},7995:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_keychain-8addb948180651745f730122e7bce878.png"},2029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_keychain_transaction-cedc8bbccf4171fbb0dd5eda74b3736e.png"},7848:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/generate_address-ba70791dfe6de72c28139e89d1584039.png"},2941:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/help-command-a79b629216cd48d2acca13cf35714ee5.png"},2603:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keychain_management-c8b7e23b91a14f3f555ae8a054eb7bae.png"},9294:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/main_keychain_transaction-03d95c68a9a99ad66b7321d291387d22.png"},3288:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/main_tab-5783418ecc8dd832b65d81a6579b7d19.png"},771:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ownerships-559b27b31d1a636f3fcb406889868258.png"},4786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ownerships_2-3ef9c28939b2def4fb31695668e0fa15.png"},1100:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ownerships_3-b1e74fd7bb29438106163db16673b731.png"},1699:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/recipients-b1436cd932b7a6402cd47a8f1a1860ca.png"},7722:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sending_transaction-970c825476f166398dededfcc355d705.png"},4241:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/smart_contract-2d09068ad09c2a03858e8463b4176964.png"},6753:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/token_transfers-7387b1e8c1f1049818261970230af678.png"},3040:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uco_transfers-c67df50fb05e1d0062ad690ce2609f34.png"},5436:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uco_transfers_2-2f1a38a418f288087aae516f1b9e11c4.png"},8209:(e,t,a)=>{a(7294)}}]);