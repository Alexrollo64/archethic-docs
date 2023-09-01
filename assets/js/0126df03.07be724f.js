"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return a?r.createElement(b,c(c({ref:t},d),{},{components:a})):r.createElement(b,c({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7822:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=a(7462),n=a(7294),l=a(3905);a(8209);const c={id:"oracle-data",title:"OracleData",hide_table_of_contents:!1},o=void 0,i={unversionedId:"build/api/schema/objects/oracle-data",id:"build/api/schema/objects/oracle-data",title:"OracleData",description:"[OracleData] represents an oracle data.",source:"@site/docs/build/api/schema/objects/oracle-data.mdx",sourceDirName:"build/api/schema/objects",slug:"/build/api/schema/objects/oracle-data",permalink:"/build/api/schema/objects/oracle-data",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557909,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"oracle-data",title:"OracleData",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Node",permalink:"/build/api/schema/objects/node"},next:{title:"OracleServices",permalink:"/build/api/schema/objects/oracle-services"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OracleData.<b>services</b></code><Bullet /><code>OracleServices</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-oracledatabservicesbcodeoracleservices-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OracleData.<b>timestamp</b></code><Bullet /><code>Timestamp</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-oracledatabtimestampbcodetimestamp-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:p,SpecifiedBy:m,Badge:u},f="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"[OracleData]"," represents an oracle data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type OracleData {\n  services: OracleServices\n  timestamp: Timestamp\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-oracledatabservicesbcodeoracleservices-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OracleData.",(0,l.kt)("b",null,"services"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/objects/oracle-services"},(0,l.kt)("inlineCode",{parentName:"a"},"OracleServices"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-oracledatabtimestampbcodetimestamp-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OracleData.",(0,l.kt)("b",null,"timestamp"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/build/api/schema/scalars/timestamp"},(0,l.kt)("inlineCode",{parentName:"a"},"Timestamp"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/queries/oracle-data"},(0,l.kt)("inlineCode",{parentName:"a"},"oracleData")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/build/api/schema/subscriptions/oracle-update"},(0,l.kt)("inlineCode",{parentName:"a"},"oracleUpdate")),"  ",(0,l.kt)(u,{class:"secondary",text:"subscription",mdxType:"Badge"})))}y.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);