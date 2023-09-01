"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4875],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>k});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},h=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),l=d(i),u=r,k=l["".concat(o,".").concat(u)]||l[u]||y[u]||c;return i?n.createElement(k,a(a({ref:t},h),{},{components:i})):n.createElement(k,a({ref:t},h))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=i.length,a=new Array(c);a[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<c;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2347:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=i(7462),r=(i(7294),i(3905));i(8209);const c={id:"yubikey",title:"Yubikey implementation"},a=void 0,s={unversionedId:"build/core/cryptography/yubikey",id:"build/core/cryptography/yubikey",title:"Yubikey implementation",description:"This section explains the HRT Yubikey Library implementation.",source:"@site/docs/build/core/cryptography/yubikey.md",sourceDirName:"build/core/cryptography",slug:"/build/core/cryptography/yubikey",permalink:"/build/core/cryptography/yubikey",draft:!1,tags:[],version:"current",lastUpdatedAt:1693557909,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{id:"yubikey",title:"Yubikey implementation"},sidebar:"docs",previous:{title:"TPM Implementation",permalink:"/build/core/cryptography/tpm"},next:{title:"Archethic's database",permalink:"/build/core/database"}},o={},d=[{value:"initializeYK() :",id:"initializeyk-",level:2},{value:"bool checkYK():",id:"bool-checkyk",level:2},{value:"verifyPinYK():",id:"verifypinyk",level:2},{value:"authenticateYK():",id:"authenticateyk",level:2},{value:"fetchKey(keyIndex):",id:"fetchkeykeyindex",level:2},{value:"generateKey(ykIndex):",id:"generatekeyykindex",level:2},{value:"generateCertificate(ykIndex):",id:"generatecertificateykindex",level:2},{value:"getYKIndex():",id:"getykindex",level:2},{value:"saveIndex(ykIndex, archethicIndex):",id:"saveindexykindex-archethicindex",level:2},{value:"signECDSA(hashtoSign, ykIndex):",id:"signecdsahashtosign-ykindex",level:2},{value:"getECDHPoint(ykIndex, euphermerakley) :",id:"getecdhpointykindex-euphermerakley-",level:2},{value:"getArchEthicIndex():",id:"getarchethicindex",level:2},{value:"incrementIndex():",id:"incrementindex",level:2},{value:"getRootKey():",id:"getrootkey",level:2},{value:"getCurrentKey(publicKeySize):",id:"getcurrentkeypublickeysize",level:2},{value:"getNextKey( publicKeySize):",id:"getnextkey-publickeysize",level:2},{value:"getPastKey(archEthicIndex, publicKeySize):",id:"getpastkeyarchethicindex-publickeysize",level:2},{value:"getRootCertificate( certificateSize):",id:"getrootcertificate-certificatesize",level:2},{value:"getCurrentCertificate(certificateSize):",id:"getcurrentcertificatecertificatesize",level:2},{value:"getNextCertificate(certificateSize):",id:"getnextcertificatecertificatesize",level:2},{value:"getPastCertificate(archEthicIndex, certificateSize):",id:"getpastcertificatearchethicindex-certificatesize",level:2},{value:"signCurrentKey(hashToSign, eccSignSize):",id:"signcurrentkeyhashtosign-eccsignsize",level:2},{value:"signPastKey(archEthicIndex, hashToSign, eccSignSize):",id:"signpastkeyarchethicindex-hashtosign-eccsignsize",level:2},{value:"ecdhCurrentKey(euphemeralKey, eccPointSize):",id:"ecdhcurrentkeyeuphemeralkey-eccpointsize",level:2},{value:"ecdhPastKey( archEthicIndex, euphemeralKey, eccPointSize):",id:"ecdhpastkey-archethicindex-euphemeralkey-eccpointsize",level:2}],h={toc:d},l="wrapper";function y(e){let{components:t,...i}=e;return(0,r.kt)(l,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section explains the HRT Yubikey Library implementation."),(0,r.kt)("admonition",{type:"success"},(0,r.kt)("p",{parentName:"admonition"},"Reference Files:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UNIRIS/yubikey-core/blob/main/uniris-yubikey.c"},"uniris-yubikey.c"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UNIRIS/yubikey-core/blob/main/uniris-yubikey.h"},"uniris-yubikey.h"))),(0,r.kt)("h2",{id:"initializeyk-"},"initializeYK() :"),(0,r.kt)("p",null,"Initializes the context of the yubikey application in the variable g_state and connects to the hardware device. If successful, then gets the key index of Archethic as well as key index of the yubikey device."),(0,r.kt)("h2",{id:"bool-checkyk"},"bool checkYK():"),(0,r.kt)("p",null,'displays the model of yubikey device used returns true if the device list contains "Yubico Yubikey".'),(0,r.kt)("h2",{id:"verifypinyk"},"verifyPinYK():"),(0,r.kt)("p",null,"verifies the pin code using ykpiv_verify() required to access PIV interface."),(0,r.kt)("h2",{id:"authenticateyk"},"authenticateYK():"),(0,r.kt)("p",null,"Management key is required to do administrative actions. First it does hex decoding of the management key and authenticates if ykpiv_authenticate() returns 0."),(0,r.kt)("h2",{id:"fetchkeykeyindex"},"fetchKey(keyIndex):"),(0,r.kt)("p",null,"A PIV card contains some interoperable seven mandatory and  twenty optional data objects. These objects are identified with their respective ids. We use these twenty optional data objects to store the  key certificates. fetchKey index takes the yubikey key index ykindex as input and fetches the certificate at the key_certificates","[ykindex]",". This X509 certificate is decoded and public key is extracted from it using X509_get0_pubkey_bitstr and copied to ecc_public_key."),(0,r.kt)("h2",{id:"generatekeyykindex"},"generateKey(ykIndex):"),(0,r.kt)("p",null,"It takes the ykIndex and generates an ECC key using ykpiv_util_generate_key(). It generates key at one of the slots {0x82.. 0x95}  pointed by ykindex - key_slots","[ykIndex]"),(0,r.kt)("h2",{id:"generatecertificateykindex"},"generateCertificate(ykIndex):"),(0,r.kt)("p",null,"The keys in the slot are attested through  ykpiv_attest() by taking the slot on the index as input. It returns attested key and its length which is then saved into an object pointed by ykIndex using ykpiv_save_object()."),(0,r.kt)("h2",{id:"getykindex"},"getYKIndex():"),(0,r.kt)("p",null,"The YKPIV_OBJ_KEY_HISTORY keeps the count of the keys generated in the yubikey. This fucntion fetches the YKPIV_OBJ_KEY_HISTORY using ykpiv_fetch_object() to get the index_yk and returns it."),(0,r.kt)("h2",{id:"saveindexykindex-archethicindex"},"saveIndex(ykIndex, archethicIndex):"),(0,r.kt)("p",null,"It takes  ykindex and archethicIndex as input and generates index by combining ykindex and archethic index and keeps it in YKPIV_OBJ_HISTORY."),(0,r.kt)("h2",{id:"signecdsahashtosign-ykindex"},"signECDSA(hashtoSign, ykIndex):"),(0,r.kt)("p",null,"It uses ykpiv_sign_data() to sign hashToSign using YKPIV_ALGO_ECCP256 through the key pointed by ykindex - key_slots","[ykindex]","."),(0,r.kt)("h2",{id:"getecdhpointykindex-euphermerakley-"},"getECDHPoint(ykIndex, euphermerakley) :"),(0,r.kt)("p",null,"It generated an ecdh point using ykpiv_decipher_data() for the slot pointed by ykindex key_slots","[ykIndex]","."),(0,r.kt)("h2",{id:"getarchethicindex"},"getArchEthicIndex():"),(0,r.kt)("p",null,"Fetches the YKPIV_OBJ_KEY_HISTORY and derives the archethicindex from index_yk saved in key history object."),(0,r.kt)("h2",{id:"incrementindex"},"incrementIndex():"),(0,r.kt)("p",null,"We use the 20 data objects to store 20 keys certificates at once. The 21st key generated on the yubikey is stored in newYKIndex = ykindex % 20. The archethic index is incremented and a new key is generated using newYKindex .A certificate is generated and saved in the slot pointed by newYKindex. Finally it returns true if the current YK index is equal to newYKindex and current archethicindex is equal to newarchethic index ."),(0,r.kt)("h2",{id:"getrootkey"},"getRootKey():"),(0,r.kt)("p",null,"Reads the root key certificate from f9 slot and fetches public key from the certificate. Finally it copies the key into rsa_root_key and returns it."),(0,r.kt)("h2",{id:"getcurrentkeypublickeysize"},"getCurrentKey(publicKeySize):"),(0,r.kt)("p",null,"Generates the previous key index by and fetches the key behind previous key index and returns the ecc key."),(0,r.kt)("h2",{id:"getnextkey-publickeysize"},"getNextKey( publicKeySize):"),(0,r.kt)("p",null,"It fetches the key from the ykIndex and returns the ecc_public_key behind the index."),(0,r.kt)("h2",{id:"getpastkeyarchethicindex-publickeysize"},"getPastKey(archEthicIndex, publicKeySize):"),(0,r.kt)("p",null,"It fetches the keys stored previously in the slot. It first calculates the slot position and then fetches the key at the slot position and return it."),(0,r.kt)("h2",{id:"getrootcertificate-certificatesize"},"getRootCertificate( certificateSize):"),(0,r.kt)("p",null,"Reads the certificate of the rootkey from 0xf9 slot, copies it ykcertificate and returns it."),(0,r.kt)("h2",{id:"getcurrentcertificatecertificatesize"},"getCurrentCertificate(certificateSize):"),(0,r.kt)("p",null,"Calculates the curent key index and fetches the certificate from the object pointed by the current key index."),(0,r.kt)("h2",{id:"getnextcertificatecertificatesize"},"getNextCertificate(certificateSize):"),(0,r.kt)("p",null,"fetches the certificate of the  key pointed by ykindex and returns it."),(0,r.kt)("h2",{id:"getpastcertificatearchethicindex-certificatesize"},"getPastCertificate(archEthicIndex, certificateSize):"),(0,r.kt)("p",null,"calculates the slot posistion according to the offset using archethicindex then fetches the object at the slot position which is a certificate amd returns it."),(0,r.kt)("h2",{id:"signcurrentkeyhashtosign-eccsignsize"},"signCurrentKey(hashToSign, eccSignSize):"),(0,r.kt)("p",null,"Calculates the current key index then verifies the Yubikey pin using verifyPinYK() and then signs hashToSign using signECDSA(). The signECDSA() signs the key at the currentkeyindex."),(0,r.kt)("h2",{id:"signpastkeyarchethicindex-hashtosign-eccsignsize"},"signPastKey(archEthicIndex, hashToSign, eccSignSize):"),(0,r.kt)("p",null,"Calculates the slot position by first calculating the offset by using archethicindex. Then it verifies the yubikey pin and signs the key pointed at the slotPosition."),(0,r.kt)("h2",{id:"ecdhcurrentkeyeuphemeralkey-eccpointsize"},"ecdhCurrentKey(euphemeralKey, eccPointSize):"),(0,r.kt)("p",null,"Calculates the current key index, verifies the yubikey pin to get the ECDH point through getECDHPoint() fucntion and finally returns it."),(0,r.kt)("h2",{id:"ecdhpastkey-archethicindex-euphemeralkey-eccpointsize"},"ecdhPastKey( archEthicIndex, euphemeralKey, eccPointSize):"),(0,r.kt)("p",null,"Calculates the offset and slotPosition using archEthicIndex., verifies Yubikey PIN and gets the ECDH point for the key pointed by slotPosiotion and returns it."))}y.isMDXComponent=!0},8209:(e,t,i)=>{i(7294)}}]);