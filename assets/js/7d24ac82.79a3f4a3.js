"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6691],{3387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));n(1839);const r={id:"tpm",title:"TPM Implementation"},o=void 0,s={unversionedId:"build/core/cryptography/tpm",id:"build/core/cryptography/tpm",title:"TPM Implementation",description:"This section explains the HRT TPM Library implementation.",source:"@site/docs/build/core/cryptography/tpm.md",sourceDirName:"build/core/cryptography",slug:"/build/core/cryptography/tpm",permalink:"/build/core/cryptography/tpm",draft:!1,tags:[],version:"current",lastUpdatedAt:1680857167,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{id:"tpm",title:"TPM Implementation"},sidebar:"docs",previous:{title:"Cryptography",permalink:"/build/core/cryptography/"},next:{title:"Yubikey implementation",permalink:"/build/core/cryptography/yubikey"}},d={},l=[{value:"Global Variables",id:"global-variables",level:2},{value:"void keyToASN():",id:"void-keytoasn",level:2},{value:"void signToASN(BYTE <em>r, INT sizeR, BYTE </em>s, INT sizeS, INT *asnSignSize)",id:"void-signtoasnbyte-r-int-sizer-byte-s-int-sizes-int-asnsignsize",level:2},{value:"void generatePublicKey(INT keyIndex)",id:"void-generatepublickeyint-keyindex",level:2},{value:"setRootKey()",id:"setrootkey",level:2},{value:"updateHandlesIndexes()",id:"updatehandlesindexes",level:2},{value:"initializeTPM(INT keyIndex):",id:"initializetpmint-keyindex",level:2},{value:"getKeyIndex():",id:"getkeyindex",level:2},{value:"setKeyIndex(INT keyIndex):",id:"setkeyindexint-keyindex",level:2},{value:"getPublicKey(INT keyIndex, INT *publicKeySize):",id:"getpublickeyint-keyindex-int-publickeysize",level:2},{value:"signECDSA(INT keyIndex, BYTE <em>hashToSign, INT </em>eccSignSize, bool increment):",id:"signecdsaint-keyindex-byte-hashtosign-int-eccsignsize-bool-increment",level:2},{value:"getECDHPoint(INT keyIndex, BYTE *euphemeralKey):",id:"getecdhpointint-keyindex-byte-euphemeralkey",level:2}],h={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section explains the HRT TPM Library implementation. "),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Reference Files:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/UNIRIS/tpm-core/blob/main/uniris-tpm.c"},"uniris-tpm.c"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/UNIRIS/tpm-core/blob/main/uniris-tpm.h"},"uniris-tpm.h"))),(0,a.kt)("h2",{id:"global-variables"},"Global Variables"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The global variables are defined as static to maintain the static lifecycle of the global variable, to prevent data leak and external access of the variables.")),(0,a.kt)("h2",{id:"void-keytoasn"},"void keyToASN():"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This function converts raw elliptical public key generated by TPM   to ASN1 DER encoding. ")),(0,a.kt)("p",null,"TPM generated uncompressed public key does not include the curve information required for elliptic key cryptography. keyToASN() encodes the raw public key by appending curve information to it."),(0,a.kt)("p",null,"The ASN DER Public Key is an outer structure which contains 2 inner structures. First inner structure having key type and curve type and second inner structure containning the raw key. The structure containning public key is a header containing ","[0x00 0x04 x coordinate y coordinate]","."),(0,a.kt)("p",null,"The following structure  is the format of ASN DER: "),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"ASN DER Public Key = [ ","[ [keytype] [curvetype] ][publickey]"," ]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Logic Flow:"),"\nThe function adds the headers squentially and then the raw x coordinate of public key and then the y coordinate finally the size is updated."),(0,a.kt)("h2",{id:"void-signtoasnbyte-r-int-sizer-byte-s-int-sizes-int-asnsignsize"},"void signToASN(BYTE ",(0,a.kt)("em",{parentName:"h2"},"r, INT sizeR, BYTE "),"s, INT sizeS, INT *asnSignSize)"),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Converts uncompressed signature values to ASN DER format.")),(0,a.kt)("p",null,"TPM generates the raw signature in form of integer values : R & S. signToASN() converts these raw values  into ASN DER format. It first prepends the ASN sequence then checks the MSB of R .  If it is 1 then it prepends a byte (0) to R otherwise it move on to increase the index pointed to the asn by the size of R.\nSimilarly, it does the above for S."),(0,a.kt)("h2",{id:"void-generatepublickeyint-keyindex"},"void generatePublicKey(INT keyIndex)"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Generates public key on the endorsement key hierarchy of TPM by taking one byte key index as input.")),(0,a.kt)("p",null,"Firstly, the template of the public key is defined in the inPublicECC which contains the endorsement key template such that certificate on the keys can be generated except modifying the endorsement key object attributes.\nThe inPublicECC structure defines the following sub-structure:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"publicArea : defines the attributes of the public key to be generated. For endorsement key the signing operation is restricted due to privacy concern, defined under this structure.  In this case we are generating key in the endordement hierarchy by using the template of the endorsement key.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The object attributes of generating key are as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'* TPMA_OBJECT_USERWITHAUTH: Signifies the approval of "USER" actions with associated with the public key with a password.\n* TPMA_OBJECT_ADMINWITHPOLICY: Signifies the Approval of "ADMIN" role actions with this object may only be done with a policy session.\n* TPMA_OBJECT_SIGN_ENCRYPT: For a symmetric cipher object, the private portion of the key be used to encrypt. For other objects, the private portion of the key can be used to sign.\n* TPMA_OBJECT_DECRYPT:The private portion of the key can be used to decrypt\n* TPMA_OBJECT_FIXEDTPM: Indicates that the hierarchy of the key genrated cannot be changed.\n* TPMA_OBJECT_FIXEDPARENT:Indicates that the parent of the object cannot be changed.\n* TPMA_OBJECT_SENSITIVEDATAORIGIN: Indicates that the sensitive data is generated by the TPM on the key generation except the authvalue.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".objectAttributes = (TPMA_OBJECT_USERWITHAUTH |\n                                 TPMA_OBJECT_ADMINWITHPOLICY |\n                                 TPMA_OBJECT_SIGN_ENCRYPT |\n                                 TPMA_OBJECT_DECRYPT |\n                                 TPMA_OBJECT_FIXEDTPM |\n                                 TPMA_OBJECT_FIXEDPARENT |\n                                 TPMA_OBJECT_SENSITIVEDATAORIGIN),\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Object attributes for generating under Endorsement key hierarchy:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"TPMA_OBJECT_RESTRICTED:  Key usage is restricted to manipulate structures of known format.")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Endorsement key has same template except that there is no SIGN_ENCRYPT FLAG in the object attribute.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".objectAttributes = (TPMA_OBJECT_RESTRICTED |\n                                 TPMA_OBJECT_ADMINWITHPOLICY |\n                                 TPMA_OBJECT_DECRYPT |\n                                 TPMA_OBJECT_FIXEDTPM |\n                                 TPMA_OBJECT_FIXEDPARENT |\n                                 TPMA_OBJECT_SENSITIVEDATAORIGIN),\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"authPolicy: this substructure contains a 32 byte buffer with values exactly same  as endorsement key attributes. This parameter associates the generated key template to the TPM hence during certificate generation the CA is able to return the certificate for the public key generated under Endorsement key hierarchy.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".authPolicy = {\n                .size = 32,\n                .buffer = {0x83, 0x71, 0x97, 0x67, 0x44, 0x84, 0xB3, 0xF8, 0x1A, 0x90, 0xCC,\n                           0x8D, 0x46, 0xA5, 0xD7, 0x24, 0xFD, 0x52, 0xD7, 0x6E, 0x06, 0x52,\n                           0x0B, 0x64, 0xF2, 0xA1, 0xDA, 0x1B, 0x33, 0x14, 0x69, 0xAA}},\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"parameters: In the parameter structure we define the algorithm to be used for private key cryptography and public key cryptography operations.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," .parameters.eccDetail = {.symmetric = {\n                                         .algorithm = TPM2_ALG_AES,\n                                         .keyBits.aes = 128,\n                                         .mode.sym = TPM2_ALG_CFB,\n                                     },\n                                     .scheme = {.scheme = TPM2_ALG_NULL, .details = {.ecdsa = {.hashAlg = TPM2_ALG_SHA256}}},\n                                     .curveID = TPM2_ECC_NIST_P256,\n                                     .kdf = {.scheme = TPM2_ALG_NULL, .details = {}}},\n")),(0,a.kt)("p",null," After definning the template of the public key, a unique data is passed to each key in the unique structure of inPublicEC which is root key hash and key index. For the root key the root key hash is 0 and key index is 0. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".unique.ecc = {.x = {.size = 32, .buffer = {0}}, .y = {.size = 32, .buffer = {0}}},\n")),(0,a.kt)("p",null,"The primary key is created by using Esys_CreatePrimary() function with the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ESYS_TR_RH_ENDORSEMENT: To generate key in the endorsement hierarchy6."),(0,a.kt)("li",{parentName:"ul"},"ESYS_TR_PASSWORD: indicates a password authorization"),(0,a.kt)("li",{parentName:"ul"},"inPublicECC: the public key template defined is passed.")),(0,a.kt)("p",null,"Finally the created key is converted to ASN DER format."),(0,a.kt)("h2",{id:"setrootkey"},"setRootKey()"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Initializes root key by calling generatePublicKey(0) since 0 is the index of root key.")),(0,a.kt)("p",null,"It also sets the root key hash. It is calculated by concatenating the raw x and y part of the root key and then hashing it."),(0,a.kt)("p",null,"The rootkey hash is stored statically and is important for every new primary key generation since it is passed as parameter to the unique structure of inPublicEC.X part. The key index is passed as parameter to the inpublicEc.y."),(0,a.kt)("h2",{id:"updatehandlesindexes"},"updateHandlesIndexes()"),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Increments the current index value by 1 and also updates all the corresponding keys.")),(0,a.kt)("p",null,"Flushes the previous key handles index and points it to the nextKeyHandle  then increments NEXT index by 1 to store it in the nextkeyindex. Then generates a new public key by sending nextkeyIndex as the parameter. Finally it assigns the currentKeyhandle to the nextkey handle ."),(0,a.kt)("h2",{id:"initializetpmint-keyindex"},"initializeTPM(INT keyIndex):"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Initializes TPM  context by calling Esys_Initialize() function and sets the previous key handle and nextkey handle as null. Then it sets the root key and key index.")),(0,a.kt)("h2",{id:"getkeyindex"},"getKeyIndex():"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Returns previous key index because that is the "current" key index used for performing signature.')),(0,a.kt)("h2",{id:"setkeyindexint-keyindex"},"setKeyIndex(INT keyIndex):"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Sets the previous key index (which is our current key) to the key index passed as parameter.")),(0,a.kt)("p",null,"Also sets keyIndex+1 as the nextKey index."),(0,a.kt)("p",null,"For the key generated at after first  initialization it flushes the previous key handle and generates the key with keyIndex then points then populates the previous key handle with the current key handle value.\nNext it generates the public key with keyIndex+1 and stores it in the nextkey handle. "),(0,a.kt)("h2",{id:"getpublickeyint-keyindex-int-publickeysize"},"getPublicKey(INT keyIndex, INT *publicKeySize):"),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Returns the public key for the given index.")),(0,a.kt)("p",null,"Takes keyIndex and returns root key if the keyINDEX is 0, next key if the keyindex matches with the nextKey index,  previous key if the keyINdex matches with the previous Key index. "),(0,a.kt)("p",null,"If it matches with none of these indexes, then it flushes the root key from the tpm (due to the limit of max 3 transient handles), generates the key for the corresponding keyIndex and copies it into temp key then flushes it from the TPM. Finally, it regenerates the root key and then returns temp key."),(0,a.kt)("h2",{id:"signecdsaint-keyindex-byte-hashtosign-int-eccsignsize-bool-increment"},"signECDSA(INT keyIndex, BYTE ",(0,a.kt)("em",{parentName:"h2"},"hashToSign, INT "),"eccSignSize, bool increment):"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Signs the given hash using the key referred by the key index.")),(0,a.kt)("p",null,"Converts the byte  hash to TPM2B_hash object and then checks the key index . If it is root key or previous key then assigns it to the signing key handle otherwise; "),(0,a.kt)("p",null,"Sets the previous key index to the given keyindex  by calling setkeyindex() function and assigns it to the signing handle. It signs the hash using Esys_Sign() function. Finally the signature is converted to ASN DER format which is returned by signECDSA()."),(0,a.kt)("h2",{id:"getecdhpointint-keyindex-byte-euphemeralkey"},"getECDHPoint(INT keyIndex, BYTE *euphemeralKey):"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Performs Elliptic Curve Diffe Hellmen Key Exchange using the private part of the key referred by the Key Index and public euphemeral key. Returns the derived shared secret uncompressed point.")),(0,a.kt)("p",null,"Takes the key index and checks whether it's previous key, next key or root key. If it's one of these then it assigns it to the  ECDH key handle  else it removes the root key and generates a new key for the given key index and use it in the ECDH handle. "),(0,a.kt)("p",null,"Next, it re-structures the euphemeral key with the format 04 x y and generates an ECDH point using the Esys_ECDH_ZGen() function and stores it 04 x y format in zPoint which is then returned by the function."))}p.isMDXComponent=!0}}]);