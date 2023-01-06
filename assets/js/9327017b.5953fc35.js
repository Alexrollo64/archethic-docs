"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8016],{5085:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var n=a(7462),o=a(7294),l=a(3905);a(1839);const s={id:"data",title:"Data",hide_table_of_contents:!1},d=void 0,r={unversionedId:"build/api/schema/objects/data",id:"build/api/schema/objects/data",title:"Data",description:"[TransactionData] represents the data section for every transaction.",source:"@site/docs/build/api/schema/objects/data.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/data",permalink:"/archethic-docs/build/api/schema/objects/data",draft:!1,tags:[],version:"current",lastUpdatedAt:1672994118,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"data",title:"Data",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"CrossValidationStamp",permalink:"/archethic-docs/build/api/schema/objects/cross-validation-stamp"},next:{title:"Endpoint",permalink:"/archethic-docs/build/api/schema/objects/endpoint"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>code</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-databcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>content</b></code><Bullet /><code>Content</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-databcontentbcodecontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>ledger</b></code><Bullet /><code>Ledger</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-databledgerbcodeledger-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>ownerships</b></code><Bullet /><code>[Ownership]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-databownershipsbcodeownership--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Data.<b>recipients</b></code><Bullet /><code>[Address]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-databrecipientsbcodeaddress--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:p,SpecifiedBy:m,Badge:h};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[TransactionData]"," represents the data section for every transaction.\nIt includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ledger: asset transfers"),(0,l.kt)("li",{parentName:"ul"},"Code: smart contract code (hexadecimal),"),(0,l.kt)("li",{parentName:"ul"},"Content: free zone for data hosting (string or hexadecimal)"),(0,l.kt)("li",{parentName:"ul"},"Ownership: authorization/delegations containing list of secrets and their authorized public keys to proof the ownership"),(0,l.kt)("li",{parentName:"ul"},"Recipients: For non asset transfers, the list of recipients of the transaction (e.g Smart contract interactions)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Data {\n  code: String\n  content: Content\n  ledger: Ledger\n  ownerships: [Ownership]\n  recipients: [Address]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-databcodebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,l.kt)("b",null,"code"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-databcontentbcodecontent-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,l.kt)("b",null,"content"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/content"},(0,l.kt)("inlineCode",{parentName:"a"},"Content"))," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-databledgerbcodeledger-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,l.kt)("b",null,"ledger"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/ledger"},(0,l.kt)("inlineCode",{parentName:"a"},"Ledger"))," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-databownershipsbcodeownership--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,l.kt)("b",null,"ownerships"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/ownership"},(0,l.kt)("inlineCode",{parentName:"a"},"[Ownership]"))," ",(0,l.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-databrecipientsbcodeaddress--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Data.",(0,l.kt)("b",null,"recipients"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/address"},(0,l.kt)("inlineCode",{parentName:"a"},"[Address]"))," ",(0,l.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/objects/transaction"},(0,l.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,l.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);