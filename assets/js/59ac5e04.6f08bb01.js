"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(8209);const l={id:"commands",title:"ADPU commands"},i=void 0,c={unversionedId:"build/clients/ledger-wallet/commands",id:"build/clients/ledger-wallet/commands",title:"ADPU commands",description:"APDU commands",source:"@site/docs/build/clients/ledger-wallet/commands.md",sourceDirName:"build/clients/ledger-wallet",slug:"/build/clients/ledger-wallet/commands",permalink:"/build/clients/ledger-wallet/commands",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557909,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"commands",title:"ADPU commands"},sidebar:"docs",previous:{title:"Ledger Application API",permalink:"/build/clients/ledger-wallet/api"},next:{title:"Archethic's wallet access",permalink:"/build/clients/wallet-access"}},o={},s=[{value:"APDU commands",id:"apdu-commands",level:2},{value:"Get Origin Public Key",id:"get-origin-public-key",level:3},{value:"Get Archethic Account Address",id:"get-archethic-account-address",level:3},{value:"Get Signature",id:"get-signature",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"apdu-commands"},"APDU commands"),(0,a.kt)("h3",{id:"get-origin-public-key"},"Get Origin Public Key"),(0,a.kt)("p",null,"APDU Command ","[bytes]",":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,a.kt)("th",{parentName:"tr",align:null},"INS = 02"),(0,a.kt)("th",{parentName:"tr",align:null},"P1 = 00"),(0,a.kt)("th",{parentName:"tr",align:null},"P2 = 00"),(0,a.kt)("th",{parentName:"tr",align:null},"Lc = 00")))),(0,a.kt)("p",null,"APDU Response = Encoded Origin Public Key i.e., encode(o_{pub}) "),(0,a.kt)("h3",{id:"get-archethic-account-address"},"Get Archethic Account Address"),(0,a.kt)("p",null,"APDU Command ","[bytes]"," = "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,a.kt)("th",{parentName:"tr",align:null},"INS = 04"),(0,a.kt)("th",{parentName:"tr",align:null},"P1 = hash_type (for addr) ","[1 byte]"),(0,a.kt)("th",{parentName:"tr",align:null},"P2 = address_index (for bip44) ","[4 bytes]"),(0,a.kt)("th",{parentName:"tr",align:null},"Lc = len(ewk",(0,a.kt)("em",{parentName:"th"},"{aes}+ew"),"{aes}) ","[1 byte]"),(0,a.kt)("th",{parentName:"tr",align:null},"ewk_{aes} ","[bytes]"),(0,a.kt)("th",{parentName:"tr",align:null},"ew_{aes} ","[bytes]")))),(0,a.kt)("p",null,"APDU Response = Encoded Archethic Account Address i.e., arch_address "),(0,a.kt)("h3",{id:"get-signature"},"Get Signature"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,a.kt)("th",{parentName:"tr",align:null},"INS = 08"),(0,a.kt)("th",{parentName:"tr",align:null},"P1 = hash_type (of tx_hash) ","[1 byte]"),(0,a.kt)("th",{parentName:"tr",align:null},"P2 = address_index (for bip44) ","[4 bytes]"),(0,a.kt)("th",{parentName:"tr",align:null},"Lc = len(tx",(0,a.kt)("em",{parentName:"th"},"hash+ewk"),"{aes}+ew_{aes}) ","[1 byte]"),(0,a.kt)("th",{parentName:"tr",align:null},"tx_hash ","[bytes]"),(0,a.kt)("th",{parentName:"tr",align:null},"ewk_{aes} ","[bytes]"),(0,a.kt)("th",{parentName:"tr",align:null},"ew_{aes} ","[bytes]")))),(0,a.kt)("p",null,"APDU Response = ASN DER Signature || Corresponding public key from whose private key the signature was made, i.e., encode(pub_key)"))}p.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);