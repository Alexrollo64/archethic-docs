"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8016],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(a),u=r,b=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(b,l(l({ref:t},d),{},{components:a})):n.createElement(b,l({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5085:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(7462),r=a(7294),o=a(3905);a(8209);const l={id:"data",title:"Data",hide_table_of_contents:!1},s=void 0,c={unversionedId:"build/api/schema/objects/data",id:"build/api/schema/objects/data",title:"Data",description:"[TransactionData] represents the data section for every transaction.",source:"@site/docs/build/api/schema/objects/data.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/data",permalink:"/build/api/schema/objects/data",draft:!1,tags:[],version:"current",lastUpdatedAt:1687852490,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{id:"data",title:"Data",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"CrossValidationStamp",permalink:"/build/api/schema/objects/cross-validation-stamp"},next:{title:"Endpoint",permalink:"/build/api/schema/objects/endpoint"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>code</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-databcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>content</b></code><Bullet /><code>Content</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-databcontentbcodecontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>ledger</b></code><Bullet /><code>Ledger</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-databledgerbcodeledger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>ownerships</b></code><Bullet /><code>[Ownership]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-databownershipsbcodeownership--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>recipients</b></code><Bullet /><code>[Address]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-databrecipientsbcodeaddress--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:p,SpecifiedBy:m,Badge:u},f="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[TransactionData]"," represents the data section for every transaction.\nIt includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ledger: asset transfers"),(0,o.kt)("li",{parentName:"ul"},"Code: smart contract code (hexadecimal),"),(0,o.kt)("li",{parentName:"ul"},"Content: free zone for data hosting (string or hexadecimal)"),(0,o.kt)("li",{parentName:"ul"},"Ownership: authorization/delegations containing list of secrets and their authorized public keys to proof the ownership"),(0,o.kt)("li",{parentName:"ul"},"Recipients: For non asset transfers, the list of recipients of the transaction (e.g Smart contract interactions)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Data {\n  code: String\n  content: Content\n  ledger: Ledger\n  ownerships: [Ownership]\n  recipients: [Address]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-databcodebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,o.kt)("b",null,"code"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-databcontentbcodecontent-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,o.kt)("b",null,"content"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/content"},(0,o.kt)("inlineCode",{parentName:"a"},"Content"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-databledgerbcodeledger-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,o.kt)("b",null,"ledger"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/ledger"},(0,o.kt)("inlineCode",{parentName:"a"},"Ledger"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-databownershipsbcodeownership--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,o.kt)("b",null,"ownerships"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/ownership"},(0,o.kt)("inlineCode",{parentName:"a"},"[Ownership]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-databrecipientsbcodeaddress--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,o.kt)("b",null,"recipients"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,o.kt)("inlineCode",{parentName:"a"},"[Address]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);