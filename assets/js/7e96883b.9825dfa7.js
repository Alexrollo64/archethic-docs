"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,b=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));n(8209);const r={id:"how-it-works",title:"AEWeb - How it works",sidebar_label:"How it works",sidebar_position:1},s=void 0,o={unversionedId:"participate/aeweb/how-it-works",id:"participate/aeweb/how-it-works",title:"AEWeb - How it works",description:"Archethic Web (AEWeb) is using transaction chains to host any website on Archethic Blockchain.",source:"@site/docs/participate/aeweb/how-it-works.md",sourceDirName:"participate/aeweb",slug:"/participate/aeweb/how-it-works",permalink:"/participate/aeweb/how-it-works",draft:!1,tags:[],version:"current",lastUpdatedAt:1694426346,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:1,frontMatter:{id:"how-it-works",title:"AEWeb - How it works",sidebar_label:"How it works",sidebar_position:1},sidebar:"docs",previous:{title:"Archethic Web (AEWeb)",permalink:"/participate/aeweb/"},next:{title:"Domain Names",permalink:"/participate/aeweb/dns"}},l={},c=[{value:"Transaction building",id:"transaction-building",level:2},{value:"Content delivery",id:"content-delivery",level:2},{value:"Website updates",id:"website-updates",level:2},{value:"Website unpublication",id:"website-unpublication",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Archethic Web (AEWeb) is using transaction chains to host any website on Archethic Blockchain."),(0,i.kt)("p",null,"We will describe the following process from the building until the delivery to the browser."),(0,i.kt)("h2",{id:"transaction-building"},"Transaction building"),(0,i.kt)("p",null,"On the beginning of any hosting, there is a website composed of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTML pages"),(0,i.kt)("li",{parentName:"ul"},"CSS files"),(0,i.kt)("li",{parentName:"ul"},"Javascript files"),(0,i.kt)("li",{parentName:"ul"},"Images"),(0,i.kt)("li",{parentName:"ul"},"Videos")),(0,i.kt)("p",null,"When the folder of the website is passed to the AEWeb CLI, the files are analyzed and packaged into blob of 3MB (current limitation of transaction's content)."),(0,i.kt)("mermaid",{value:"graph TD\n\n  HTML --\x3e AEWeb\n  CSS --\x3e AEWeb\n  Javascript --\x3e AEWeb\n  Images --\x3e AEWeb\n\n  AEWeb --\x3e Transaction#1\n  AEWeb --\x3e Transaction#2\n  AEWeb --\x3e Transaction#3\n"}),(0,i.kt)("p",null,"One of this transaction is called the ",(0,i.kt)("inlineCode",{parentName:"p"},"reference"),". Its goals is to act as a pointer to other transactions. This will help the retrieval of the files and makes upgrades seamless and transparent for end users."),(0,i.kt)("p",null,"The reference transaction's address will become the address of the website managing its lifecycle."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "aewebVersion": 1,\n  "hashFunction": "sha-1",\n  "metaData": {\n    "index.html": {\n      "size": 68420,\n      "hash": "ABC123F...",\n      "encoding": "gzip",\n      "addresses": ["0FB27DAC...."]\n    },\n    "scripts/main.js": {\n      "size": 255121,\n      "hash": "01AB2CD...",\n      "encoding": "gzip",\n      "addresses": ["0AC1BFA9..."]\n    } \n  }\n}\n')),(0,i.kt)("p",null,"The other transactions (called ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),") will contain the content of the files encoded in base64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "index.html": "b298kJKFS98dj7Xdnsq....", \n  "scripts/main.js": "aGVsbG8gd29ybGQ=" \n}\n')),(0,i.kt)("p",null,"To leverage the maximum of the transaction size, all the content are grouped into the smallest amount of transaction possible.\nFor example, you could have a website which contains: 5 files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTML page"),(0,i.kt)("li",{parentName:"ul"},"Image"),(0,i.kt)("li",{parentName:"ul"},"CSS")),(0,i.kt)("p",null,"3 transactions could be generated:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reference:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "aewebVersion": 1,\n  "hashFunction": "sha-1",\n  "metaData": {\n    "index.html": {\n      ...\n      "addresses": ["0ac7fj..."]\n    },\n    "assets/app.css": {\n      ...\n      "addresses": ["0ac7fj..."]\n    },\n    "assets/image.jpg": {\n      ...\n      // image.jpg is too big to fit in a single data transaction\n      "addresses": ["0ac7fj...", "1fb2ha..."] \n  }\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"HTML + CSS + Image (chunked by 30%)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'// data transaction: "0ac7fj..."\n{\n    "index.html": "...",\n    "assets/app.css": "..."\n    "assets/image.jpg": "..."\n}\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Image (remaining chunks)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'// data transaction: "1fb2ha..."\n{\n  "assets/image.jpg": "..."\n}\n')),(0,i.kt)("h2",{id:"content-delivery"},"Content delivery"),(0,i.kt)("p",null,"On the other side, the transactions are validated and stored on the Archethic Blockchain.\nAny Archethic node expose an API dedicated for the web hosting by AEWeb."),(0,i.kt)("p",null,"This API takes a reference address as a parameter, and then proceeds to take the path of the file, just like any web server would do."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"https://mainnet.archethic.net/api/web_hosting/0c19fd13......../image.jpg\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"aeweb_CDN",src:n(4313).Z+"#gh-light-mode-only",width:"274",height:"215"}),"\n",(0,i.kt)("img",{alt:"aeweb_CDN",src:n(1951).Z+"#gh-dark-mode-only",width:"274",height:"215"})),(0,i.kt)("p",null,"The welcome node will request the reference transaction download to its related shard.\nIt will parse the reference content and detect the transactions to download for the requested file."),(0,i.kt)("p",null,"Once the file downloaded, the content will send back to the client and the browser will display the file."),(0,i.kt)("p",null,"Because websites rendering is composed of multiple HTTP requests for each file, the browser will be able to understand the responses and display the website entirely - while leveraging a single reference on-chain."),(0,i.kt)("admonition",{title:"Good to know",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Once the website retrieved, the data will be cached locally. So, the next time the same person will visit the website, no data will be fetched again."),(0,i.kt)("p",{parentName:"admonition"},"This will be true until the website and the reference chain evolves.")),(0,i.kt)("h2",{id:"website-updates"},"Website updates"),(0,i.kt)("p",null,"The first thing a node does when it receives an AEWeb request is to download the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"reference")," transaction from the chain. This behaviour allows a user to update its website and to keep the same URL."),(0,i.kt)("p",null,"This means that updating a website is as simple as sending a new ",(0,i.kt)("inlineCode",{parentName:"p"},"reference")," transaction!"),(0,i.kt)("h2",{id:"website-unpublication"},"Website unpublication"),(0,i.kt)("p",null,"Introduced by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/aeip/blob/main/AEIP-13.md"},"AEIP-13"),", a website can be unpublished by sending the following ",(0,i.kt)("inlineCode",{parentName:"p"},"reference")," transaction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "aeip": [8, 13],\n    "aewebVersion": 1,\n    "publicationStatus": "UNPUBLISHED"\n}\n')),(0,i.kt)("p",null,"As long as this ",(0,i.kt)("inlineCode",{parentName:"p"},"reference")," transaction is the latest, the nodes will not serve the website. An HTTP status code 410 is sent."),(0,i.kt)("admonition",{title:"Data is permanent",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The data from an unpublished website (and all previous version as a matter of fact) always remain in the blockchain. Here, we only disable the endpoint to access it.")))}h.isMDXComponent=!0},1951:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aeweb_CDN-dark-a23984e644c6a6122b47d21df57208e0.svg"},4313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aeweb_CDN-a2976501bd49a6a0049eebd89e41f66c.svg"},8209:(e,t,n)=>{n(7294)}}]);