"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5400],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(i),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return i?n.createElement(f,r(r({ref:t},u),{},{components:i})):n.createElement(f,r({ref:t},u))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2421:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));i(8209);const o={id:"aeweb-front",title:"AEWeb - Application Front End",sidebar_label:"AEWeb Front End",sidebar_position:4},r="AEWeb Front end",c={unversionedId:"participate/aeweb/usage/aeweb-front",id:"participate/aeweb/usage/aeweb-front",title:"AEWeb - Application Front End",description:"Access//aeweb.archethic.net",source:"@site/docs/participate/aeweb/usage/aeweb-front.md",sourceDirName:"participate/aeweb/usage",slug:"/participate/aeweb/usage/aeweb-front",permalink:"/participate/aeweb/usage/aeweb-front",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858857,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:4,frontMatter:{id:"aeweb-front",title:"AEWeb - Application Front End",sidebar_label:"AEWeb Front End",sidebar_position:4},sidebar:"docs",previous:{title:"CLI",permalink:"/participate/aeweb/usage/cli"},next:{title:"Automate deployments",permalink:"/participate/aeweb/automation"}},l={},s=[{value:"Tutorials",id:"tutorials",level:2},{value:"Deploy for the first time my static site",id:"deploy-for-the-first-time-my-static-site",level:3},{value:"Update my static site",id:"update-my-static-site",level:3},{value:"Update the SSL certificate",id:"update-the-ssl-certificate",level:3},{value:"Unpublish my static site",id:"unpublish-my-static-site",level:3},{value:"See my static site&#39;s informations",id:"see-my-static-sites-informations",level:3},{value:"Disconnect AEWeb",id:"disconnect-aeweb",level:3},{value:"Roadmap",id:"roadmap",level:2}],u={toc:s},h="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aeweb-front-end"},"AEWeb Front end"),(0,a.kt)("p",null,"Access: ",(0,a.kt)("a",{parentName:"p",href:"https://aeweb.archethic.net"},"https://aeweb.archethic.net"),(0,a.kt)("br",null),"\nSource code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archethic-foundation/aeweb"},"https://github.com/archethic-foundation/aeweb")),(0,a.kt)("p",null,"This web application, built with Flutter, can be used to deploy and manage static sites to the Archethic Blockchain."),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Before reading the following tutorials, understand ",(0,a.kt)("a",{href:"/participate/aeweb/how-it-works",target:"_blank"},"how AEWeb works"),". ")),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("h3",{id:"deploy-for-the-first-time-my-static-site"},"Deploy for the first time my static site"),(0,a.kt)("p",null,'When you want to deploy a new static website on the Archethic blockchain, simply click on "New static site" in the main menu or the "+" icon in the section reserved for the list of your already deployed sites.'),(0,a.kt)("p",null,"A form will then appear, providing you with the necessary information for deploying your site:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The name of the website. This name will be used to declare the site in your ",(0,a.kt)("a",{href:"/learn/decentralized-id/keychain",target:"_blank"},"decentralized keychain"),". (mandatory)"),(0,a.kt)("li",{parentName:"ul"},"The archive file (with .zip, .7z, or .rar extension) containing the content of your website. (mandatory)"),(0,a.kt)("li",{parentName:"ul"},"You can specify whether you want to include or exclude files listed in a ",(0,a.kt)("a",{href:"/FAQ/aeweb#what-is-the-purpose-of-a-gitignore-file",target:"_blank"},".gitignore file"),". (optional)"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{href:"/participate/aeweb/dns#1-get-the-certificate",target:"_blank"},"public certificate")," for your domain and the private key associated with the certificate. (optional)")),(0,a.kt)("p",null,"Once the required information is provided and the publication rules are accepted, you can initiate the deployment of your site."),(0,a.kt)("p",null,"AEWeb will then prompt you, via your Archethic wallet, to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Confirm the creation of the site in your keychain."),(0,a.kt)("li",{parentName:"ul"},"Sign the transaction(s) that contain the content of your site."),(0,a.kt)("li",{parentName:"ul"},"Sign the reference transaction of your site in the blockchain."),(0,a.kt)("li",{parentName:"ul"},"Then sign the transaction that allows transferring funds from your current account to the transaction chains that enable your site to function.")),(0,a.kt)("p",null,"The associated fees for the creation will be provided, and once accepted, your site will be permanently published on the blockchain."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In the beta version currently being deployed, a limit of 3 MB for a site has been set.")),(0,a.kt)("br",null),(0,a.kt)("video",{controls:!0,width:"90%"},(0,a.kt)("source",{src:"/video/AEWeb-howto-Create static site.mp4"})),(0,a.kt)("h3",{id:"update-my-static-site"},"Update my static site"),(0,a.kt)("p",null,'You can update your site by comparing the latest version hosted on the blockchain with a new archive containing your modifications.\nTo do this, go to the context menu of the currently deployed version (the first row in the site versions table) and click on "Sync from local folder".'),(0,a.kt)("p",null,"After selecting the archive, the application will present you with information about the differences between the blockchain data and your archive. If you are satisfied with the information and agree to the publication rules, you can proceed with the update."),(0,a.kt)("p",null,"The application will then prompt you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sign, using your Archethic Wallet, the transaction(s) that contain the content of your new site version."),(0,a.kt)("li",{parentName:"ul"},"Sign the transaction to update the reference transaction of your site in the blockchain."),(0,a.kt)("li",{parentName:"ul"},"Then sign the transaction that allows transferring funds from your current account to the transaction chains that power your site.")),(0,a.kt)("p",null,"The associated fees for the update will be provided, and once accepted, a new version of your site will be published on the blockchain."),(0,a.kt)("video",{controls:!0,width:"90%"},(0,a.kt)("source",{src:"/video/AEWeb-howto-Update static site.mp4"})),(0,a.kt)("h3",{id:"update-the-ssl-certificate"},"Update the SSL certificate"),(0,a.kt)("p",null,'You can add and update the SSL certificate associated with your site.\nTo do this, go to the context menu of the currently deployed version (the first row in the site versions table) and click on "Update the certificate".'),(0,a.kt)("p",null,"After selecting the public certificate for your domain and the private key associated with the certificate, the application will prompt you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sign, using your Archethic Wallet, the transaction that will update the reference transaction of your site in the blockchain to include the certificate."),(0,a.kt)("li",{parentName:"ul"},"Then sign the transaction that allows transferring funds from your current account to the transaction chain of your site to update the reference transaction.")),(0,a.kt)("p",null,"The associated fees for the update will be provided, and once accepted, the certificate will be published in the content of the reference transaction, and the private key will be stored in a transaction secret."),(0,a.kt)("video",{controls:!0,width:"90%"},(0,a.kt)("source",{src:"/video/AEWeb-howto-Update certificate.mp4"})),(0,a.kt)("h3",{id:"unpublish-my-static-site"},"Unpublish my static site"),(0,a.kt)("p",null,'You can unpublish your static site to make it no longer accessible.\nTo do this, go to the context menu of the currently deployed version (the first row in the site versions table) and click on "Unpublish static site".'),(0,a.kt)("p",null,"After confirming your intention to unpublish your site, the application will prompt you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sign, using your Archethic Wallet, the transaction that will update the reference transaction of your site in the blockchain to declare the unpublishing."),(0,a.kt)("li",{parentName:"ul"},"Then sign the transaction that allows transferring funds from your current account to the transaction chain of your site to update the reference transaction.")),(0,a.kt)("p",null,"The associated fees for unpublishing will be provided, and once accepted, the site will be unpublished."),(0,a.kt)("video",{controls:!0,width:"90%"},(0,a.kt)("source",{src:"/video/AEWeb-howto-Unpublished site.mp4"})),(0,a.kt)("h3",{id:"see-my-static-sites-informations"},"See my static site's informations"),(0,a.kt)("p",null,"For each online version and for each previous version of your website, you can access the following information by clicking on the three dots at the end of each line:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The file structure of your website that has been deployed on the blockchain."),(0,a.kt)("li",{parentName:"ul"},"The transactions containing the content of your files.")),(0,a.kt)("p",null,"Regarding the SSL certificate content, you can view it by clicking on the shield icon if you have deployed one. If the icon is red, it means that no certificate is available."),(0,a.kt)("video",{controls:!0,width:"90%"},(0,a.kt)("source",{src:"/video/AEWeb-howto-Infos site.mp4"})),(0,a.kt)("h3",{id:"disconnect-aeweb"},"Disconnect AEWeb"),(0,a.kt)("p",null,"When you want to disconnect the AEWeb application from your Archethic Wallet, simply click on the red disconnect button in the section describing the connected account and environment, and then confirm to return to the home screen."),(0,a.kt)("video",{controls:!0,width:"90%"},(0,a.kt)("source",{src:"/video/AEWeb-howto-Disconnect.mp4"})),(0,a.kt)("h2",{id:"roadmap"},"Roadmap"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add session management to the wallet to avoid entering the user's authentication for each transaction signature."),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Enable direct management of the site's content from AEWeb instead of uploading an archive with all the contents.")))}p.isMDXComponent=!0},8209:(e,t,i)=>{i(7294)}}]);