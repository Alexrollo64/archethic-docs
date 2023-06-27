"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,y=p["".concat(o,".").concat(u)]||p[u]||h[u]||i;return n?r.createElement(y,c(c({ref:t},d),{},{components:n})):r.createElement(y,c({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(8209);const i={id:"wallet-access",title:"Archethic's wallet access"},c=void 0,l={unversionedId:"build/clients/wallet-access",id:"build/clients/wallet-access",title:"Archethic's wallet access",description:"Onchain wallet (aka Keychain) is a wallet stored on Archethic blockchain in encrypted form, to allow only the authorized access to read it and build transaction from it.",source:"@site/docs/build/clients/wallet-access.md",sourceDirName:"build/clients",slug:"/build/clients/wallet-access",permalink:"/build/clients/wallet-access",draft:!1,tags:[],version:"current",lastUpdatedAt:1687852490,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{id:"wallet-access",title:"Archethic's wallet access"},sidebar:"docs",previous:{title:"ADPU commands",permalink:"/build/clients/ledger-wallet/commands"},next:{title:"Archethic's wallet specification",permalink:"/build/clients/wallet-spec"}},o={},s=[{value:"Access enrollment",id:"access-enrollment",level:2},{value:"Keychain retrieval",id:"keychain-retrieval",level:2}],d={toc:s},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Onchain wallet (aka ",(0,a.kt)("strong",{parentName:"p"},"Keychain"),") is a wallet stored on Archethic blockchain in encrypted form, to allow only the authorized access to read it and build transaction from it."),(0,a.kt)("p",null,"Also to avoid disclosure of information, access and keychain are using end to end encryption with elliptic curve cryptography to secure it."),(0,a.kt)("p",null,"Hence any client which would like to support wallet access and transaction building will have to be authorized."),(0,a.kt)("h2",{id:"access-enrollment"},"Access enrollment"),(0,a.kt)("p",null,"When a device or application want to become an access to the wallet, it first have to create a transaction where the keychain transaction's address is encrypted into it.\nThis data is stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/ownerships")," section of the transaction., where the authorized public key is the ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction's public key")," and the secret is an aes encryption of the keychain's address."),(0,a.kt)("p",null,"Then the keychain will create a new transaction on its chain by encrypting the wallet with a new AES key itself encrypted for the list of authorized access public keys wanted. (For instance the new device or application)"),(0,a.kt)("h2",{id:"keychain-retrieval"},"Keychain retrieval"),(0,a.kt)("p",null,"In order to retrieve the keychain from a device or application perspective, the access transaction's will be generated to be retrieved from the network."),(0,a.kt)("p",null,"Then the device or application will decrypt the encrypted keychain address to be able to download the keychain transaction."),(0,a.kt)("p",null,"Once received, the device or application - as being authorized by the keychain - will be able to decrypt the AES key to decrypt the wallet and perform any key derivation and transaction building from it."),(0,a.kt)("p",null,"Then, because the key have been generated on the fly, the client will forget about the private keys and seeds decrypted."))}h.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);