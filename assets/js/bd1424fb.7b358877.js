"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9036],{9145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));a(1839);const l={id:"wallet-spec",title:"Archethic's wallet specification"},r=void 0,p={unversionedId:"build/clients/wallet-spec",id:"build/clients/wallet-spec",title:"Archethic's wallet specification",description:"Onchain wallet (aka Keychain) is a wallet stored on Archethic blockchain in encrypted form.",source:"@site/docs/build/clients/wallet-specification.md",sourceDirName:"build/clients",slug:"/build/clients/wallet-spec",permalink:"/archethic-docs/build/clients/wallet-spec",draft:!1,tags:[],version:"current",lastUpdatedAt:1674388958,formattedLastUpdatedAt:"Jan 22, 2023",frontMatter:{id:"wallet-spec",title:"Archethic's wallet specification"},sidebar:"docs",previous:{title:"Archethic's wallet access",permalink:"/archethic-docs/build/clients/wallet-access"},next:{title:"API",permalink:"/archethic-docs/category/api"}},o={},d=[{value:"Glossary",id:"glossary",level:2},{value:"Cryptography",id:"cryptography",level:2},{value:"Derivation path",id:"derivation-path",level:3},{value:"Key derivation",id:"key-derivation",level:3},{value:"Replace the derivation path index",id:"replace-the-derivation-path-index",level:4},{value:"Hash of the derivation path",id:"hash-of-the-derivation-path",level:4},{value:"Derive private key",id:"derive-private-key",level:4},{value:"Derive public key",id:"derive-public-key",level:4},{value:"Encryption",id:"encryption",level:3},{value:"Encrypting the Onchain Wallet",id:"encrypting-the-onchain-wallet",level:4},{value:"Encoding of Encrypted Wallet",id:"encoding-of-encrypted-wallet",level:4},{value:"Encrypting Wallet Encryption Key",id:"encrypting-wallet-encryption-key",level:4},{value:"Encoding of Encrypted Wallet Key",id:"encoding-of-encrypted-wallet-key",level:4},{value:"Encoding",id:"encoding",level:2},{value:"Encoding of wallet",id:"encoding-of-wallet",level:3},{value:"Encoding of Curve Types",id:"encoding-of-curve-types",level:3},{value:"Encoding of Hash Types",id:"encoding-of-hash-types",level:3},{value:"Transaction representation",id:"transaction-representation",level:2},{value:"Format",id:"format",level:2},{value:"Public Key Format",id:"public-key-format",level:3},{value:"Account Address Format",id:"account-address-format",level:3}],c={toc:d};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Onchain wallet (aka ",(0,i.kt)("strong",{parentName:"p"},"Keychain"),") is a wallet stored on Archethic blockchain in encrypted form. "),(0,i.kt)("p",null,"This keychain aims to support several way to identify a user and its transaction chains.\nIt can also support multichains identification through the use of key derivation and derivation path."),(0,i.kt)("p",null,"A keychain is then a wallet which stores a main master seed, with a list of services (Archethic chains / other crypto identification) encrypted and only accessible by a list of authorized public keys"),(0,i.kt)("h2",{id:"glossary"},"Glossary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"w_{e}")," = Encoded Onchain Archethic Wallet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wk_{aes}")," = AES256 CTR Key used to encrypt w_{e}"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enc(w_{e})")," = AES256 CTR Encryption of ",(0,i.kt)("inlineCode",{parentName:"li"},"w_{e}")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"wk_{aes}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ew_{aes}")," = Encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"enc(w_{e})")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aes_key")," = AES256 CBC Key used to encrypt ",(0,i.kt)("inlineCode",{parentName:"li"},"wk_{aes}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enc(wk_{aes})")," = AES256 CBC Encryption of ",(0,i.kt)("inlineCode",{parentName:"li"},"wk_{aes}")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"aes_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ewk_{aes}")," = Encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"enc(wk_{aes})"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encode(pub_key)")," = Encoded Public Key. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arch_address")," = Encoded Account Address. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"o_{priv}")," = Origin Device Private Key "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"o_{pub}")," = Origin Device Public Key (raw 04xy) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encode(o_{pub})")," = Encoded Origin Device Public Key  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"e_{key}")," = Ephemeral Key Pair "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"e_{pub}")," = Ephemeral Public Key (raw 04xy) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"e_{priv}")," = Ephemeral Private Key ")),(0,i.kt)("h2",{id:"cryptography"},"Cryptography"),(0,i.kt)("h3",{id:"derivation-path"},"Derivation path"),(0,i.kt)("p",null,"Archethic's keychain is using hierarchical derivation key scheme inspired by BIP32 to define a way\nto generate keys and addresses."),(0,i.kt)("p",null,"Because Archethic cryptography and transaction chain paradigm differs from traditional blockchain (used in BIP32/BIP44)\nwe adapted it to use specific derivation scheme (as describe in the BIP43)"),(0,i.kt)("p",null,"The main derivation path of Archethic keychain is: ",(0,i.kt)("strong",{parentName:"p"},"m/650'/account/index")," (where 650 is the Archethic transaction chain purpose - in the BIP43 terminology)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"account")," can be anything, by default ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," is the main uco transaction chain, but it could be customized to create more entropy."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," is the number of transaction in the chain, used to compute the derived keys and addresses"),(0,i.kt)("h3",{id:"key-derivation"},"Key derivation"),(0,i.kt)("p",null,"In order to derive the keys using the derivation path mentioned above, we implemented our own key derivation scheme, which takes inspiration from BIP32 but simplifies it a bit."),(0,i.kt)("h4",{id:"replace-the-derivation-path-index"},"Replace the derivation path index"),(0,i.kt)("p",null,"Given the derivation path: ",(0,i.kt)("inlineCode",{parentName:"p"},"m/650'/0/0"),", we change the last number (the transaction's index in the chain) we some variable provided by the application(ie: ",(0,i.kt)("inlineCode",{parentName:"p"},"m/650'/0/1")," will give the 1st transaction's address on the chain)"),(0,i.kt)("h4",{id:"hash-of-the-derivation-path"},"Hash of the derivation path"),(0,i.kt)("p",null,"Once the derivation path index is replaced we hashed it to give a constant size through ",(0,i.kt)("inlineCode",{parentName:"p"},"SHA256")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hashedPath = SHA256(ReplaceDerivationPath(derivationPath, index))\n")),(0,i.kt)("h4",{id:"derive-private-key"},"Derive private key"),(0,i.kt)("p",null,"Then we have to derive the private key based on the hashedPath and the master seed by using HMAC and extracting the first 32 bytes of the result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"extendedSeed = HMAC-SHA512(Key=MasterSeed, Data=hashedPath)\nextendedPrivateKey = extendedSeed.slice(0, 32)\n")),(0,i.kt)("h4",{id:"derive-public-key"},"Derive public key"),(0,i.kt)("p",null,"Now with the given private key we can easily extract the public key for the given curve specified in the Keychain's service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{ publicKey, private } = generateKeyPair(extendedPrivateKey, curve)\n")),(0,i.kt)("h3",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"The keychain is using a double encryption scheme where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the wallet is encrypted with AES "),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"aes_key")," is encrypted with elliptic curve cryptography using ECIES (Elliptic Curve Integration Encryption Scheme): ",(0,i.kt)("inlineCode",{parentName:"li"},"wk_{aes}")," for the authorized public keys")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Ephemeral key is used to perform ECDH with authorized public key, in order to derive ",(0,i.kt)("inlineCode",{parentName:"p"},"aes_key"),". This ",(0,i.kt)("inlineCode",{parentName:"p"},"aes_key")," is then used to encrypt the ",(0,i.kt)("inlineCode",{parentName:"p"},"wk_{aes}"),". This is called ",(0,i.kt)("inlineCode",{parentName:"p"},"ECIESE"),"(Elliptic Curve Integration Encryption Scheme Ephemeral)")),(0,i.kt)("p",null,"Then to guarantee the security of the wallet, only the authorized public keys are able to decrypt the encrypted aes key(",(0,i.kt)("inlineCode",{parentName:"p"},"enc(aes_key)"),") to be able to decrypt the encrypted wallet (",(0,i.kt)("inlineCode",{parentName:"p"},"wk_{aes}"),")"),(0,i.kt)("h4",{id:"encrypting-the-onchain-wallet"},"Encrypting the Onchain Wallet"),(0,i.kt)("p",null,"The onchain encoded wallet ",(0,i.kt)("inlineCode",{parentName:"p"},"w_{e}")," is encrypted using symmetric encryption AES256 CTR key ",(0,i.kt)("inlineCode",{parentName:"p"},"wk_{aes}")," as follows: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wallet_iv [16 bytes], reserved [16 bytes] = sha256(sha256(wk_{aes})) \nenc(w_{e}) = aes256(mode=ctr, key = wk_{aes}, iv = wallet_iv, data = w_{e}) \n")),(0,i.kt)("h4",{id:"encoding-of-encrypted-wallet"},"Encoding of Encrypted Wallet"),(0,i.kt)("p",null,"The above encrypted wallet ",(0,i.kt)("inlineCode",{parentName:"p"},"enc(w_{e})")," is stored on the Archethic Blockchain with the following format. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"enc(w_{e})  ","[bytes]")))),(0,i.kt)("h4",{id:"encrypting-wallet-encryption-key"},"Encrypting Wallet Encryption Key"),(0,i.kt)("p",null,"The key (",(0,i.kt)("inlineCode",{parentName:"p"},"wk_{aes}"),") which encrypts the wallet (",(0,i.kt)("inlineCode",{parentName:"p"},"w_{e}"),") is subsequently encrypted using Elliptic Curve Integrated Encryption Scheme to support different authorized public keys and to reduce the increased space overhead of the encryptions. "),(0,i.kt)("p",null,"Algorithm$ for encrypting ",(0,i.kt)("inlineCode",{parentName:"p"},"wk_{aes}"),"=  ECIES (ECDH + AES256 CBC) "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ecdh_secret = ecdh_point_x(e_{pub}, o_{priv}) = ecdh_point_x(e_{priv}, o_{pub}) \n \naes_key [32 bytes], iv [16 bytes], auth_seed [16 bytes] = sha512(sha512(ecdh\\_secret))  \n \nenc(wk_{aes}) = aes256(mode=cbc, key = aes\\_key, iv = iv, data = wk_{aes}) \n \nauth_key = sha256(auth_seed) \n \nauth_tag [16 bytes], reserved [16 bytes] = hmac256(key = auth_key, data = enc(wk_{aes}))\n")),(0,i.kt)("h4",{id:"encoding-of-encrypted-wallet-key"},"Encoding of Encrypted Wallet Key"),(0,i.kt)("p",null,"The above encrypted key ",(0,i.kt)("inlineCode",{parentName:"p"},"enc(wk_{aes})")," is stored on the Archethic Blockchain with the following format. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"e_{pub} 04xy ","[bytes]"),(0,i.kt)("th",{parentName:"tr",align:null},"auth_tag ","[16 bytes]"),(0,i.kt)("th",{parentName:"tr",align:null},"enc(wk_{aes}) ","[32 bytes]")))),(0,i.kt)("h2",{id:"encoding"},"Encoding"),(0,i.kt)("p",null,"The wallet before encryption is encoding into a binary format"),(0,i.kt)("h3",{id:"encoding-of-wallet"},"Encoding of wallet"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Seed size"),(0,i.kt)("th",{parentName:"tr",align:null},"Seed"),(0,i.kt)("th",{parentName:"tr",align:null},"Nb services"),(0,i.kt)("th",{parentName:"tr",align:null},"Service name size"),(0,i.kt)("th",{parentName:"tr",align:null},"Service name"),(0,i.kt)("th",{parentName:"tr",align:null},"Derivation path length"),(0,i.kt)("th",{parentName:"tr",align:null},"Derivation path"),(0,i.kt)("th",{parentName:"tr",align:null},"Curve type"),(0,i.kt)("th",{parentName:"tr",align:null},"Hash type"),(0,i.kt)("th",{parentName:"tr",align:null},"..."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"N bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"N bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"N bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"...")))),(0,i.kt)("h3",{id:"encoding-of-curve-types"},"Encoding of Curve Types"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"curve_type")," is a 1 byte long field, hex encoded. Currently, following curves are supported: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0: ED25519 "),(0,i.kt)("li",{parentName:"ul"},"1: NISTP256 "),(0,i.kt)("li",{parentName:"ul"},"2: SECP256K1 ")),(0,i.kt)("h3",{id:"encoding-of-hash-types"},"Encoding of Hash Types"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hash_type")," is a 1 byte long field, hex encoded. Currently, following hashes are supported: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0: SHA256 (sha2) "),(0,i.kt)("li",{parentName:"ul"},"1: SHA512 (sha2) "),(0,i.kt)("li",{parentName:"ul"},"2: SHA3_256 (keccak) "),(0,i.kt)("li",{parentName:"ul"},"3: SHA3_512 (keccak) "),(0,i.kt)("li",{parentName:"ul"},"4: BLAKE2B  ")),(0,i.kt)("h2",{id:"transaction-representation"},"Transaction representation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Transaction \n- Data: \n  - Ownerships: \n         Secret: Encrypted Wallet, \n         Authorized Keys: \n                Public Key: Origin Device / Password Public Key, \n                Encrypted Secret Key: Encrypted AES Key for the authorized public key \n")),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("h3",{id:"public-key-format"},"Public Key Format"),(0,i.kt)("p",null,"When clients have to produce public key, an origin type identification byte have to prepend before the key material as well as the curve type."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Curve ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Origin ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Key material"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"N bytes")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"origin_type")," is a 1 byte long field, hex encoded. Currently, following origins are defined: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0: Onchain Wallet"),(0,i.kt)("li",{parentName:"ul"},"1: Software Wallet (Node, Mobile App, Desktop, etc.)"),(0,i.kt)("li",{parentName:"ul"},"2: TPM (Node) "),(0,i.kt)("li",{parentName:"ul"},"3: Yubikey (Node, Hardware Wallet)"),(0,i.kt)("li",{parentName:"ul"},"4: Ledger (Hardware Wallet) ")),(0,i.kt)("h3",{id:"account-address-format"},"Account Address Format"),(0,i.kt)("p",null,"Archethic addresses following a specific format to version algorithms used helping\nto evolve easily between curves and hash algorithms."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Curve Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Hash algo"),(0,i.kt)("th",{parentName:"tr",align:null},"hash(encode(pub_key))"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"N bytes")))))}s.isMDXComponent=!0}}]);