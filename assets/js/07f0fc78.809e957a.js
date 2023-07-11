"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2491],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return a?o.createElement(f,l(l({ref:t},c),{},{components:a})):o.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6944:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=a(7462),n=a(7294),r=a(3905);a(8209);const l={id:"validation-stamp",title:"ValidationStamp",hide_table_of_contents:!1},i=void 0,s={unversionedId:"build/api/schema/objects/validation-stamp",id:"build/api/schema/objects/validation-stamp",title:"ValidationStamp",description:"[ValidationStamp] represents the validation performs by the coordinator",source:"@site/docs/build/api/schema/objects/validation-stamp.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/validation-stamp",permalink:"/build/api/schema/objects/validation-stamp",draft:!1,tags:[],version:"current",lastUpdatedAt:1689065377,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{id:"validation-stamp",title:"ValidationStamp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"UnspentOutput",permalink:"/build/api/schema/objects/unspent-output"},next:{title:"Version",permalink:"/build/api/schema/objects/version"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>ledgerOperations</b></code><Bullet /><code>LedgerOperations</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-validationstampbledgeroperationsbcodeledgeroperations-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>proofOfIntegrity</b></code><Bullet /><code>Hash</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbproofofintegritybcodehash-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>proofOfWork</b></code><Bullet /><code>PublicKey</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbproofofworkbcodepublickey-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>protocolVersion</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbprotocolversionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>signature</b></code><Bullet /><code>Hex</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbsignaturebcodehex-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationStamp.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationstampbtimestampbcodetimestamp-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:p,SpecifiedBy:m,Badge:u},b="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[ValidationStamp]"," represents the validation performs by the coordinator\nIt includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proof of work: Public key matching the origin signature"),(0,r.kt)("li",{parentName:"ul"},"Proof of integrity: Hash of the previous proof of integrity and the transaction"),(0,r.kt)("li",{parentName:"ul"},"Ledger operations: All the operations performed by the transaction"),(0,r.kt)("li",{parentName:"ul"},"Signature: Coordinator signature of the stamp"),(0,r.kt)("li",{parentName:"ul"},"Protocol version: Version of the transaction validation protocol")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ValidationStamp {\n  ledgerOperations: LedgerOperations\n  proofOfIntegrity: Hash\n  proofOfWork: PublicKey\n  protocolVersion: Int\n  signature: Hex\n  timestamp: Timestamp\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-validationstampbledgeroperationsbcodeledgeroperations-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,r.kt)("b",null,"ledgerOperations"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/ledger-operations"},(0,r.kt)("inlineCode",{parentName:"a"},"LedgerOperations"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-validationstampbproofofintegritybcodehash-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,r.kt)("b",null,"proofOfIntegrity"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/hash"},(0,r.kt)("inlineCode",{parentName:"a"},"Hash"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-validationstampbproofofworkbcodepublickey-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,r.kt)("b",null,"proofOfWork"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/public-key"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-validationstampbprotocolversionbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,r.kt)("b",null,"protocolVersion"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-validationstampbsignaturebcodehex-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,r.kt)("b",null,"signature"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/hex"},(0,r.kt)("inlineCode",{parentName:"a"},"Hex"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-validationstampbtimestampbcodetimestamp-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ValidationStamp.",(0,r.kt)("b",null,"timestamp"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);