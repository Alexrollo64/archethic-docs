"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4230],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7985:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=a(7294),l=a(3905);a(8209);const o={id:"balance",title:"Balance",hide_table_of_contents:!1},c=void 0,i={unversionedId:"build/api/schema/objects/balance",id:"build/api/schema/objects/balance",title:"Balance",description:"[Balance] represents a ledger balance.",source:"@site/docs/build/api/schema/objects/balance.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/balance",permalink:"/build/api/schema/objects/balance",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858857,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"balance",title:"Balance",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"AuthorizedKey",permalink:"/build/api/schema/objects/authorized-key"},next:{title:"BeaconChainSummary",permalink:"/build/api/schema/objects/beacon-chain-summary"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Balance.<b>token</b></code><Bullet /><code>[TokenBalance]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-balancebtokenbcodetokenbalance--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Balance.<b>uco</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-balancebucobcodeint-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:p,Badge:b},f="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[Balance]"," represents a ledger balance.\nIt includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UCO: uco balance"),(0,l.kt)("li",{parentName:"ul"},"token: token balances")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Balance {\n  token: [TokenBalance]\n  uco: Int\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-balancebtokenbcodetokenbalance--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Balance.",(0,l.kt)("b",null,"token"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/token-balance"},(0,l.kt)("inlineCode",{parentName:"a"},"[TokenBalance]"))," ",(0,l.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-balancebucobcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Balance.",(0,l.kt)("b",null,"uco"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/balance"},(0,l.kt)("inlineCode",{parentName:"a"},"balance")),"  ",(0,l.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,l.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);