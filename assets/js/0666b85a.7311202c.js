"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[633],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7726:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={id:"testnet",title:"Testnet"},c=void 0,u={unversionedId:"build/testnet",id:"build/testnet",title:"Testnet",description:"Local",source:"@site/docs/build/testnet.md",sourceDirName:"build",slug:"/build/testnet",permalink:"/archethic-docs/build/testnet",tags:[],version:"current",lastUpdatedAt:1643892115,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"testnet",title:"Testnet"},sidebar:"docs",previous:{title:"Dart SDK",permalink:"/archethic-docs/build/sdk/dart"},next:{title:"Core development",permalink:"/archethic-docs/build/core"}},p=[{value:"Local",id:"local",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Get some funds",id:"get-some-funds",children:[],level:3}],level:2},{value:"Public",id:"public",children:[{value:"Get some funds",id:"get-some-funds-1",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"local"},"Local"),(0,a.kt)("p",null,"To test and build on top of ARCHEthic network, we encourage people to test with a local instance."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone the repository: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/archethic-foundation/archethic-node.git\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Setup the dev environment:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://elixir-lang.org/install.html"},"Install Elixir")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Install NodeJS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gmplib.org"},"Install GMP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.scylladb.com/download/#server"},"Install ScyllaDB")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fetch the dependencies"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mix deps.get\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build web assets")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd assets ; npm install; cd -\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start instance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"iex -S mix\n")),(0,a.kt)("h3",{id:"get-some-funds"},"Get some funds"),(0,a.kt)("p",null,"To be able to fund some addresses, the development mode of the running enable the testnet faucet."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Funding"),(0,a.kt)("p",{parentName:"li"},"Browse to the http://localhost:4000/faucet and enter any address to send funds to. "),(0,a.kt)("p",{parentName:"li"},"It should transfer 100 UCO to the given address.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the balance"),(0,a.kt)("p",{parentName:"li"},"Go to http://localhost:4000/explorer/transaction/{TYPE_YOUR_ADDRESS_IN_HEXADECIMAL}"),(0,a.kt)("p",{parentName:"li"},'It should display 100 unspent outputs (in the "Ledger inputs" section)'))),(0,a.kt)("h2",{id:"public"},"Public"),(0,a.kt)("p",null,"Public testnet is available at ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.archethic.net"},"https://testnet.archethic.net")),(0,a.kt)("h3",{id:"get-some-funds-1"},"Get some funds"),(0,a.kt)("p",null,"You can then go the ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.archethic.net/faucet"},"faucet")," to get free UCOs to experiment the ARCHEthic network"))}d.isMDXComponent=!0}}]);