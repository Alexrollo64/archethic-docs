"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2058:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=n(7294),s=n(3905);n(8209);const o={id:"transaction-inputs",title:"transactionInputs",hide_table_of_contents:!1},i=void 0,l={unversionedId:"build/api/schema/queries/transaction-inputs",id:"build/api/schema/queries/transaction-inputs",title:"transactionInputs",description:"Query the network to list the transaction inputs from an address",source:"@site/docs/build/api/schema/queries/transaction-inputs.mdx",sourceDirName:"build/api/schema/queries",slug:"/build/api/schema/queries/transaction-inputs",permalink:"/build/api/schema/queries/transaction-inputs",draft:!1,tags:[],version:"current",lastUpdatedAt:1689065377,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{id:"transaction-inputs",title:"transactionInputs",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"transactionChain",permalink:"/build/api/schema/queries/transaction-chain"},next:{title:"transaction",permalink:"/build/api/schema/queries/transaction"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>transactionInputs.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputsbaddressbcodeaddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>transactionInputs.<b>limit</b></code><Bullet /><code>PosInteger</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputsblimitbcodeposinteger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>transactionInputs.<b>pagingOffset</b></code><Bullet /><code>NonNegInteger</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactioninputsbpagingoffsetbcodenonneginteger-",level:4},{value:"Type",id:"type",level:3},{value:'<code>TransactionInput</code> <Badge class="secondary" text="object"/>',id:"transactioninput-",level:4}],p=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},g="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Query the network to list the transaction inputs from an address"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"transactionInputs(\n  address: Address!\n  limit: PosInteger\n  pagingOffset: NonNegInteger\n): [TransactionInput]\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactioninputsbaddressbcodeaddress--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"transactionInputs.",(0,s.kt)("b",null,"address"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,s.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactioninputsblimitbcodeposinteger-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"transactionInputs.",(0,s.kt)("b",null,"limit"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/pos-integer"},(0,s.kt)("inlineCode",{parentName:"a"},"PosInteger"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-transactioninputsbpagingoffsetbcodenonneginteger-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"transactionInputs.",(0,s.kt)("b",null,"pagingOffset"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/non-neg-integer"},(0,s.kt)("inlineCode",{parentName:"a"},"NonNegInteger"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"transactioninput-"},(0,s.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/transaction-input"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionInput"))," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"[TransactionInput]"," represents the inputs from the transaction\nIt includes:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"From: transaction which send the amount of assets"),(0,s.kt)("li",{parentName:"ul"},"Amount: asset amount"),(0,s.kt)("li",{parentName:"ul"},"Type: UCO/token/Call"),(0,s.kt)("li",{parentName:"ul"},"token address: address of the token if the type is token"),(0,s.kt)("li",{parentName:"ul"},"Spent: determines if the input has been spent"),(0,s.kt)("li",{parentName:"ul"},"Timestamp: Date time when the inputs was generated"),(0,s.kt)("li",{parentName:"ul"},"token id: It is the id for a token which is allocated when the token is minted."))))}h.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);