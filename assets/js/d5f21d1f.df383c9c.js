"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[635],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"js",title:"Javascript SDK"},c=void 0,l={unversionedId:"build/sdk/js",id:"build/sdk/js",title:"Javascript SDK",description:"ARCHEthic Blockchain Official Javascript SDK is available on Github",source:"@site/docs/build/sdk/js.md",sourceDirName:"build/sdk",slug:"/build/sdk/js",permalink:"/archethic-docs/build/sdk/js",tags:[],version:"current",lastUpdatedAt:1643968787,formattedLastUpdatedAt:"2/4/2022",frontMatter:{id:"js",title:"Javascript SDK"},sidebar:"docs",previous:{title:"Smart Contract examples",permalink:"/archethic-docs/build/smart-contracts/examples"},next:{title:"Dart SDK",permalink:"/archethic-docs/build/sdk/dart"}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"Transaction building",id:"transaction-building",children:[],level:2},{value:"Transaction sending",id:"transaction-sending",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ARCHEthic Blockchain Official Javascript SDK is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/libjs"},"Github")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This SDK will help you to generate transaction on top of ARCHEthic Blockchain."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/aeweb-cli"},"AEWeb")," product is using this SDK to build transaction to deploy web hosting assets in the ARCHEthic Blockchain. Please have a look"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The first thing to do is to install and import the package from the npm registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install archethic\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const archethic = require('archethic')\n")),(0,r.kt)("h2",{id:"transaction-building"},"Transaction building"),(0,r.kt)("p",null,"Then you can create a transaction by using the transaction builder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const archethic = require(\'archethic\')\nconst tx = archethic.newTransactionBuilder("transfer")\n  .addUCOTransfer("0000B094E5C0245EB8DF519749CC49EDB545DEBB129A8BAE34D20D3E6118F64880CB", 10000)\n  .build("mysecretseed", 0)\n  .originSign(originPrivateKey)\n')),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will need to have funds allocated to the previous address of the transaction as it's using UTXO model."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will also notice an ",(0,r.kt)("inlineCode",{parentName:"p"},"originPrivateKey")," which is required to assert the transaction was built from an authenticated device. (See ",(0,r.kt)("a",{parentName:"p",href:"/learn/arch-consensus/proof-of-work"},"Proof Of Work")," for more details)"))),(0,r.kt)("h2",{id:"transaction-sending"},"Transaction sending"),(0,r.kt)("p",null,"Once the transaction built, we can send it to the network by passing a given endpoint (i.e ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.archethic.net"},"https://testnet.archethic.net"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"tx = ....\narchethic.sendTransaction(tx, endpoint)\n")),(0,r.kt)("p",null,"This will return you a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", so you can then assert for success or failure."))}u.isMDXComponent=!0}}]);