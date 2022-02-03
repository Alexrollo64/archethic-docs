"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[607],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,u=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2503:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={id:"wallet-spec",title:"ARCHEthic Wallet Specification"},o=void 0,c={unversionedId:"build/clients/wallet-spec",id:"build/clients/wallet-spec",title:"ARCHEthic Wallet Specification",description:"Onchain wallet is a wallet stored on ArchEthic blockchain in encrypted form.",source:"@site/docs/build/clients/wallet-spec.md",sourceDirName:"build/clients",slug:"/build/clients/wallet-spec",permalink:"/archethic-docs/build/clients/wallet-spec",tags:[],version:"current",lastUpdatedAt:1643892115,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"wallet-spec",title:"ARCHEthic Wallet Specification"},sidebar:"docs",previous:{title:"Yubikey implementation",permalink:"/archethic-docs/build/core/yubikey"},next:{title:"Ledger Application",permalink:"/archethic-docs/build/clients/ledger-app"}},d=[{value:"Encoding",id:"encoding",children:[{value:"Encoding of BIP44 Path",id:"encoding-of-bip44-path",children:[],level:3},{value:"Encoding of Curve Types",id:"encoding-of-curve-types",children:[],level:3},{value:"Encoding of Hash Types",id:"encoding-of-hash-types",children:[],level:3},{value:"Encoding of Origin Types",id:"encoding-of-origin-types",children:[],level:3},{value:"Encoding of Wallet",id:"encoding-of-wallet",children:[],level:3}],level:2},{value:"Onchain Wallet Encryption",id:"onchain-wallet-encryption",children:[{value:"Encrypting the Onchain Wallet",id:"encrypting-the-onchain-wallet",children:[],level:3},{value:"Encoding of Encrypted Wallet",id:"encoding-of-encrypted-wallet",children:[],level:3},{value:"Encrypting Wallet Encryption Key",id:"encrypting-wallet-encryption-key",children:[],level:3},{value:"Encoding of Encrypted Wallet Key",id:"encoding-of-encrypted-wallet-key",children:[],level:3},{value:"Final Onchain Complete Wallet",id:"final-onchain-complete-wallet",children:[],level:3}],level:2},{value:"Format",id:"format",children:[{value:"Public Key Format",id:"public-key-format",children:[],level:3},{value:"Account Address Format",id:"account-address-format",children:[],level:3}],level:2},{value:"APDU (for Ledger)",id:"apdu-for-ledger",children:[{value:"Get Origin Public Key",id:"get-origin-public-key",children:[],level:3},{value:"Get ArchEthic Account Address",id:"get-archethic-account-address",children:[],level:3},{value:"Get Signature",id:"get-signature",children:[],level:3},{value:"Transaction Encoding",id:"transaction-encoding",children:[],level:3},{value:"Example of encoding",id:"example-of-encoding",children:[],level:3}],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Onchain wallet is a wallet stored on ArchEthic blockchain in encrypted form. "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"w_{e} = Encoded Onchain ArchEthic Wallet. \n \nwk_{aes} = AES256 CTR Key used to encrypt w_{e}. \nenc(w_{e}) = AES256 CTR Encryption of w_{e} using wk_{aes}. \new_{aes} = Encoded enc(w_{e}). \n \naes_key = AES256 CBC Key used to encrypt wk_{aes}. \nenc(wk_{aes}) = AES256 CBC Encryption of wk_{aes} using aes_key. \newk_{aes} = Encoded enc(wk_{aes}). \n \nencode(pub_key) = Encoded Public Key. \narch_address = Encoded Account Address. \n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Origin can be a Software Wallet (Android/iOS/Desktop) or a Hardware wallet (Ledger/Yubikey). "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"o_{priv} = Origin Device Private Key \no_{pub} = Origin Device Public Key (raw 04xy) \nencode(o_{pub}) = Encoded Origin Device Public Key  \n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Ephemeral key is used to perform ECDH with Origin Device Key, in order to derive ",(0,l.kt)("inlineCode",{parentName:"p"},"aes_key"),". This ",(0,l.kt)("inlineCode",{parentName:"p"},"aes_key")," is then used to encrypt the ",(0,l.kt)("inlineCode",{parentName:"p"},"wk_{aes}"),". "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"e_{key} = Ephemeral Key Pair \ne_{pub} = Ephemeral Public Key (raw 04xy) \ne_{priv} = Ephemeral Private Key \n")),(0,l.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"BIP Path is used for derivation of various keys.\nIt is of the form (BIP44):\npath = m / purpose'/ coin_type' / account'/ change\u2019/ address_index\u2019 "))),(0,l.kt)("p",null,"For the ArchEthic blockchain, following constants have been fixed. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"purpose = 44' (BIP44) \ncoin\\_type = 650' (UCO of ArchEthic Blockchain) \n \naccount = Depends on the intended use of the key.  \nCurrently fixed values: 0xFFFF for o_{key}, 0x0000 for a simple w_{key}) \n \nchange = 0 (0 for external, 1 for internal\\ \naddress_index = variable (0,1,2,...) \n \npath = m/44'/650'/0'/0'/0' \n")),(0,l.kt)("h2",{id:"encoding"},"Encoding"),(0,l.kt)("h3",{id:"encoding-of-bip44-path"},"Encoding of BIP44 Path"),(0,l.kt)("p",null,"Within the Onchain Wallet, only ",(0,l.kt)("inlineCode",{parentName:"p"},"coin_type")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"account")," values are stored as follows (binary, hex encoded): "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"coin type ","[2 bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"account ","[2 bytes]")))),(0,l.kt)("p",null,"::: "),(0,l.kt)("h3",{id:"encoding-of-curve-types"},"Encoding of Curve Types"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"curve_type")," is a 1 byte long field, hex encoded. Currently, following curves are supported: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0: ED25519 "),(0,l.kt)("li",{parentName:"ul"},"1: NISTP256 "),(0,l.kt)("li",{parentName:"ul"},"2: SECP256K1 ")),(0,l.kt)("h3",{id:"encoding-of-hash-types"},"Encoding of Hash Types"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"hash_type")," is a 1 byte long field, hex encoded. Currently, following hashes are supported: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0: SHA256 (sha2) "),(0,l.kt)("li",{parentName:"ul"},"1: SHA512 (sha2) "),(0,l.kt)("li",{parentName:"ul"},"2: SHA3_256 (keccak) "),(0,l.kt)("li",{parentName:"ul"},"3: SHA3_512 (keccak) "),(0,l.kt)("li",{parentName:"ul"},"4: BLAKE2B  ")),(0,l.kt)("h3",{id:"encoding-of-origin-types"},"Encoding of Origin Types"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"origin_type")," is a 1 byte long field, hex encoded. Currently, following origins are defined: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0: Onchain Wallet"),(0,l.kt)("li",{parentName:"ul"},"1: Software Wallet (Node, Mobile App, Desktop, etc.)"),(0,l.kt)("li",{parentName:"ul"},"2: TPM (Node) "),(0,l.kt)("li",{parentName:"ul"},"3: Yubikey (Node, Hardware Wallet)"),(0,l.kt)("li",{parentName:"ul"},"4: Ledger (Hardware Wallet) ")),(0,l.kt)("h3",{id:"encoding-of-wallet"},"Encoding of Wallet"),(0,l.kt)("p",null,"The onchain wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"w_{e}")," is a byte stream, containing the ",(0,l.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"master_seed"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"total_services")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"bip44 path")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"curve_type")," for each service, with the following format: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"version=1 ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"master_seed ","[32 bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"total_services = n ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"bip44 1 ","[4 bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"curve_type 1 ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},".."),(0,l.kt)("th",{parentName:"tr",align:null},"bip44 n ","[4 bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"curve_type n ","[1 byte]")))),(0,l.kt)("h2",{id:"onchain-wallet-encryption"},"Onchain Wallet Encryption"),(0,l.kt)("h3",{id:"encrypting-the-onchain-wallet"},"Encrypting the Onchain Wallet"),(0,l.kt)("p",null,"The onchain encoded wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"w_{e}")," is encrypted using symmetric encryption AES256 CTR key ",(0,l.kt)("inlineCode",{parentName:"p"},"wk_{aes}")," as follows: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wallet_iv [16 bytes], reserved [16 bytes] = sha256(sha256(wk_{aes})) \nenc(w_{e}) = aes256(mode=ctr, key = wk_{aes}, iv = wallet_iv, data = w_{e}) \n")),(0,l.kt)("h3",{id:"encoding-of-encrypted-wallet"},"Encoding of Encrypted Wallet"),(0,l.kt)("p",null,"The above encrypted wallet ",(0,l.kt)("inlineCode",{parentName:"p"},"enc(w_{e})")," is stored on the ArchEthic Blockchain with the following format. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"enc(w_{e})  ","[bytes]")))),(0,l.kt)("h3",{id:"encrypting-wallet-encryption-key"},"Encrypting Wallet Encryption Key"),(0,l.kt)("p",null,"The key (",(0,l.kt)("inlineCode",{parentName:"p"},"wk_{aes}"),") which encrypts the wallet (",(0,l.kt)("inlineCode",{parentName:"p"},"w_{e}"),") is subsequently encrypted using Elliptic Curve Integrated Encryption Scheme to support different authorized public keys and to reduce the increased space overhead of the encryptions. "),(0,l.kt)("p",null,"Algorithm$ for encrypting ",(0,l.kt)("inlineCode",{parentName:"p"},"wk_{aes}"),"=  ECIES (ECDH + AES256 CBC) "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ecdh_secret = ecdh_point_x(e_{pub}, o_{priv}) = ecdh_point_x(e_{priv}, o_{pub}) \n \naes_key [32 bytes], iv [16 bytes], auth_seed [16 bytes] = sha512(sha512(ecdh\\_secret))  \n \nenc(wk_{aes}) = aes256(mode=cbc, key = aes\\_key, iv = iv, data = wk_{aes}) \n \nauth_key = sha256(auth_seed) \n \nauth_tag [16 bytes], reserved [16 bytes] = hmac256(key = auth_key, data = enc(wk_{aes}))\n")),(0,l.kt)("h3",{id:"encoding-of-encrypted-wallet-key"},"Encoding of Encrypted Wallet Key"),(0,l.kt)("p",null,"The above encrypted key ",(0,l.kt)("inlineCode",{parentName:"p"},"enc(wk_{aes})")," is stored on the ArchEthic Blockchain with the following format. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"e_{pub} 04xy ","[bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"auth_tag ","[16 bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"enc(wk_{aes}) ","[32 bytes]")))),(0,l.kt)("h3",{id:"final-onchain-complete-wallet"},"Final Onchain Complete Wallet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Transaction \n- Data: \n  - Ownerships: \n         Secret: Encrypted Wallet, \n         Authorized Keys: \n                Public Key: Origin Device Public Key, \n                Encrypted Secret Key: Encrypted AES Key for the Origin Device Public Key \n")),(0,l.kt)("h2",{id:"format"},"Format"),(0,l.kt)("h3",{id:"public-key-format"},"Public Key Format"),(0,l.kt)("p",null,"encode(pub_key):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"curve_type ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"origin_type ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"raw_key 04xy ","[bytes]")))),(0,l.kt)("h3",{id:"account-address-format"},"Account Address Format"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"curve_type ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"hash_type ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"hash(encode(pub_key)) ","[bytes]")))),(0,l.kt)("h2",{id:"apdu-for-ledger"},"APDU (for Ledger)"),(0,l.kt)("h3",{id:"get-origin-public-key"},"Get Origin Public Key"),(0,l.kt)("p",null,"APDU Command ","[bytes]",":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,l.kt)("th",{parentName:"tr",align:null},"INS = 02"),(0,l.kt)("th",{parentName:"tr",align:null},"P1 = 00"),(0,l.kt)("th",{parentName:"tr",align:null},"P2 = 00"),(0,l.kt)("th",{parentName:"tr",align:null},"Lc = 00")))),(0,l.kt)("p",null,"APDU Response = Encoded Origin Public Key i.e., encode(o_{pub}) "),(0,l.kt)("h3",{id:"get-archethic-account-address"},"Get ArchEthic Account Address"),(0,l.kt)("p",null,"APDU Command ","[bytes]"," = "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,l.kt)("th",{parentName:"tr",align:null},"INS = 04"),(0,l.kt)("th",{parentName:"tr",align:null},"P1 = hash_type (for addr) ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"P2 = address_index (for bip44) ","[4 bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"Lc = len(ewk",(0,l.kt)("em",{parentName:"th"},"{aes}+ew"),"{aes}) ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"ewk_{aes} ","[bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"ew_{aes} ","[bytes]")))),(0,l.kt)("p",null,"APDU Response = Encoded ArchEthic Account Address i.e., arch_address "),(0,l.kt)("h3",{id:"get-signature"},"Get Signature"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CLA = E0"),(0,l.kt)("th",{parentName:"tr",align:null},"INS = 08"),(0,l.kt)("th",{parentName:"tr",align:null},"P1 = hash_type (of tx_hash) ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"P2 = address_index (for bip44) ","[4 bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"Lc = len(tx",(0,l.kt)("em",{parentName:"th"},"hash+ewk"),"{aes}+ew_{aes}) ","[1 byte]"),(0,l.kt)("th",{parentName:"tr",align:null},"tx_hash ","[bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"ewk_{aes} ","[bytes]"),(0,l.kt)("th",{parentName:"tr",align:null},"ew_{aes} ","[bytes]")))),(0,l.kt)("p",null,"APDU Response = ASN DER Signature || Corresponding public key from whose private key the signature was made, i.e., encode(pub_key) "),(0,l.kt)("h3",{id:"transaction-encoding"},"Transaction Encoding"),(0,l.kt)("p",null,"Version: 4 bytes "),(0,l.kt)("p",null,"Address: ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"See address"))," "),(0,l.kt)("p",null,"Transaction type: ","[1 byte]"," "),(0,l.kt)("p",null,"Transaction data: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Smart contract size: 4 bytes ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Smart contract code: X bytes ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Content size: 4 bytes ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Content: X bytes ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ownerships length: 1 byte ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ownerships: "),(0,l.kt)("p",{parentName:"li"}," Ownership: "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Secret size: 4 bytes ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Secret: bytes ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Authorized keys length: 1 byte ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Authorized keys (list of public key + encrypted secret key) "),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"authorized_public_key   ",(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("em",{parentName:"strong"},"See public key"))),(0,l.kt)("th",{parentName:"tr",align:null},"encrypted_key  ","[bytes]"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ledger:  "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"UCO Ledger ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Transfers length: 1 byte "),(0,l.kt)("li",{parentName:"ul"},"Transfers:\n| recipient   ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"see Address"))," | amount ","[8 bytes]"," |\n|-|-| "))),(0,l.kt)("li",{parentName:"ul"},"NFT Ledger ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Transfers length: 1 byte "),(0,l.kt)("li",{parentName:"ul"},"Transfers ",(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"nft_address see Address"),(0,l.kt)("th",{parentName:"tr",align:null},"recipient  ",(0,l.kt)("strong",{parentName:"th"},(0,l.kt)("em",{parentName:"strong"},"See address"))),(0,l.kt)("th",{parentName:"tr",align:null},"amount  ","[8 bytes]"))))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Recipients (size): 1 byte ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Recipients: bytes ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Previous public key: ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"See public key"))," ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Previous signature: bytes "))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This signature is computed from ","[version, address, type, data]"," "))),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"May be computed by the host"))," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Origin signature: bytes ",(0,l.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This signature is computed from ","[version, address, type, data, previous public key, previous signature]"," "))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"example-of-encoding"},"Example of encoding"),(0,l.kt)("p",null,"Version | ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Sender Address"))," | Tx Type | 0000 (code size) | 0000 (content size) | 0 (ownerships length) | ",(0,l.kt)("em",{parentName:"p"},"1 (uco transfers length)")," |  "),(0,l.kt)("p",null,"00000001 | Sender address | 000000FD |\xa000000000 | 00000000 | 00000000 |  00000001 | "),(0,l.kt)("hr",null),(0,l.kt)("p",null,"| ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"recipient address"))," | ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"amount ")," 10^8*")," | "),(0,l.kt)("hr",null),(0,l.kt)("p",null,"0 (nft transfers length) | 0 (recipients) "),(0,l.kt)("p",null,"00000000 |\xa000000000"))}m.isMDXComponent=!0}}]);