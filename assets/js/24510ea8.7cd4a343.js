"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1340],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=h(r),p=i,f=d["".concat(l,".").concat(p)]||d[p]||s[p]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var h=2;h<a;h++)c[h]=r[h];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48789:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return u},default:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),c=["components"],o={id:"service",title:"Oracle Chain Service"},l=void 0,h={unversionedId:"build/core/oracle-chain/service",id:"build/core/oracle-chain/service",title:"Oracle Chain Service",description:"OracleChain provides a way to extend it and to add more services to the scheduler.",source:"@site/docs/build/core/oracle-chain/service.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/service",permalink:"/archethic-docs/build/core/oracle-chain/service",tags:[],version:"current",lastUpdatedAt:1648066299,formattedLastUpdatedAt:"3/23/2022",frontMatter:{id:"service",title:"Oracle Chain Service"},sidebar:"docs",previous:{title:"OracleChain",permalink:"/archethic-docs/build/core/oracle-chain"},next:{title:"OracleChain Scheduler",permalink:"/archethic-docs/build/core/oracle-chain/scheduler"}},u=[{value:"Behavior",id:"behavior",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OracleChain provides a way to extend it and to add more services to the scheduler."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/oracle_chain/services/impl.ex"},"behavior")," defines functions to extend to support new services"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetch: This will perform the data fetching and will return a map of the data to be serialized by the transaction"),(0,a.kt)("li",{parentName:"ul"},"Verify: This will let validation nodes asserts the information provided in the new oracle transaction"),(0,a.kt)("li",{parentName:"ul"},"Parse data: This will parse the incoming data from the oracle transaction and checks its validatity")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/lib/archethic/oracle_chain/services/uco_price.ex"},"UCO service behavior")," is implemented in such way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetch: it request Coingecko to fetch the USD/EUR pair of the Archethic token"),(0,a.kt)("li",{parentName:"ul"},"Verify: fetch Coingecko again to gather the token price and compare price using a standard deviation function with a threshold of 0.01"),(0,a.kt)("li",{parentName:"ul"},"Parse data: Ensure the data is map with the USD/EUR pair and an amount encoded as float")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Along with the definition of the new service, we need to inform how to add this service to the ",(0,a.kt)("a",{parentName:"p",href:"/build/core/oracle-chain/scheduler"},"scheduler"),".\nFor this we need to add the service in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/archethic-node/blob/master/config/config.exs"},"configuration (config.exs)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-elixir"},"config :archethic, ArchEthic.OracleChain,\n  services: [\n    uco: ArchEthic.OracleChain.Services.UCOPrice,\n    mynewservice: ArchEthic.OracleChain.Service.MyNewService # Added line\n  ]\n")))}d.isMDXComponent=!0}}]);