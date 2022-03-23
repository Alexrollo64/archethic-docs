"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1696],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},h),{},{components:r})):o.createElement(f,i({ref:t},h))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2768:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"hardware-root-of-trust",title:"Harware Root of Trust"},s=void 0,l={unversionedId:"learn/cryptography/hardware-root-of-trust",id:"learn/cryptography/hardware-root-of-trust",title:"Harware Root of Trust",description:"What is hardware root of trust?",source:"@site/docs/learn/cryptography/hardware-root-of-trust.md",sourceDirName:"learn/cryptography",slug:"/learn/cryptography/hardware-root-of-trust",permalink:"/archethic-docs/learn/cryptography/hardware-root-of-trust",tags:[],version:"current",lastUpdatedAt:1648066299,formattedLastUpdatedAt:"3/23/2022",frontMatter:{id:"hardware-root-of-trust",title:"Harware Root of Trust"},sidebar:"docs",previous:{title:"Cryptography",permalink:"/archethic-docs/learn/cryptography"},next:{title:"Smart Contracts",permalink:"/archethic-docs/build/smart-contracts"}},h=[{value:"What is hardware root of trust?",id:"what-is-hardware-root-of-trust",children:[],level:2},{value:"Why hardware root of trust for ArchEthic?",id:"why-hardware-root-of-trust-for-archethic",children:[],level:2},{value:"Implementation of Hardware Root of Trust (HRT)",id:"implementation-of-hardware-root-of-trust-hrt",children:[],level:2},{value:"Placement of HRT in ArchEthic Blockchain/Ecosystem",id:"placement-of-hrt-in-archethic-blockchainecosystem",children:[],level:2}],u={toc:h};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-hardware-root-of-trust"},"What is hardware root of trust?"),(0,a.kt)("p",null,"A hardware root of trust is the foundation on which all secure operations of a computing system depend. It contains the keys used for cryptographic functions and enables a secure boot process. It is inherently trusted, and therefore must be secure by design. The most secure implementation of a root of trust is in hardware making it immune from malware attacks. As such, it can be a stand-alone security module or implemented as security module within a processor or system on chip (SoC) (",(0,a.kt)("a",{parentName:"p",href:"https://www.rambus.com/blogs/hardware-root-of-trust/#:~:text=for%20my%20application%3F-,What%20is%20hardware%20root%20of%20trust%3F,must%20be%20secure%20by%20design."},"source"),")."),(0,a.kt)("h2",{id:"why-hardware-root-of-trust-for-archethic"},"Why hardware root of trust for ArchEthic?"),(0,a.kt)("p",null,"The ability to sustain the network even with more than 90% of malicious nodes effectively comes from 2 very important steps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identifying the malcious nodes effectively and preemptively."),(0,a.kt)("li",{parentName:"ul"},"Banish and effectively ban the malicious nodes.")),(0,a.kt)("p",null,"While the first part involves complex alogrithms implemented in the software layer, the second part involves uniquely tying node's identity to its hardware. This way, the malicious node, once identified and banished, cannot rejoin the network by changing its representive identity."),(0,a.kt)("p",null,"This second part can be effectively achieved using the concept of hardware root of trust. With hardware root of trust, a unique keypair is injected in the into the wafer at the time of fabrication, thus tying the identity with this keypair. Once, this keypair is certified, the node cannot effectively use another keypair, once banished, thus eliminating identity forgery. This is, in principle, possible due to fact once a key-pair is injected, it cannot be changed for that particular hardware."),(0,a.kt)("p",null,"Further, with this hardware root of trust, we can also ensure that no two nodes have the same public key tied to their identity. Thus, using hardware root of trust, contributes significantly to the increased miner security and makes the archethic blockchain more resilient against bad actors."),(0,a.kt)("h2",{id:"implementation-of-hardware-root-of-trust-hrt"},"Implementation of Hardware Root of Trust (HRT)"),(0,a.kt)("p",null,"To implement hardware root of Trust, within Archethic ecosystem, two technologies have been used."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trusted Platform Module (TPM 2.O)"),(0,a.kt)("li",{parentName:"ul"},"Yubico Yubikey (PIV)")),(0,a.kt)("p",null,"Both of these technologies are based on Secure Element (SE) which are certified under Common Criteria (CC)."),(0,a.kt)("h2",{id:"placement-of-hrt-in-archethic-blockchainecosystem"},"Placement of HRT in ArchEthic Blockchain/Ecosystem"),(0,a.kt)("p",null,"Along with the initial software crypto library, the HRT is now the de-facto crypto engine for all the cryptographic operations carried out by ArchEthic miners. This includes signature (ECC), verification (ECC), encryption (AES), decryption (AES), hashing (SHA2/SHA3), etc."),(0,a.kt)("p",null,"The archethic node software delegates all the cryptography operations to the HRT libraries of TPM and Yubikey, which are specially developed for this purpose by Uniris."),(0,a.kt)("p",null,"Given the latency constraints, a new hybrid mechanism is under development which involves usage of software crypto library and the HRT libraries (TPM/Yubikey). In this approach, the root of trust - crypto operation will be still HRT based while the stem and branches will be software crypto library based."),(0,a.kt)("p",null,"The advantages of this mechanism over pure HRT based mechanism is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Possiblity of key aggregation"),(0,a.kt)("li",{parentName:"ul"},"Freedom of using newer elliptic curves that are not yet supported by TPM/Yubikey."),(0,a.kt)("li",{parentName:"ul"},"Scalability without impacting security and performance.")))}p.isMDXComponent=!0}}]);