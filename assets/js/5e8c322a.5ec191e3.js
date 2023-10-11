"use strict";(self.webpackChunksorosan_sdk_doc=self.webpackChunksorosan_sdk_doc||[]).push([[597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"index",title:"@sorosan-sdk/core",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},s="Sorosan SDK (Currently in development)",l={unversionedId:"api/index",id:"api/index",title:"@sorosan-sdk/core",description:"Introducing the Sorosan SDK, your gateway to a seamless Stellar network development experience. With the Sorosan SDK, we're empowering developers to harness the full potential of Stellar with ease. Keep an eye on our updates for exciting features and releases as we embark on this journey together. Star and watch to stay in the loop!",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/sorosan-doc/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@sorosan-sdk/core",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null}},i={},p=[{value:"Install",id:"install",level:2},{value:"To use as a module in a Node.js project",id:"to-use-as-a-module-in-a-nodejs-project",level:3},{value:"To use as a module locally",id:"to-use-as-a-module-locally",level:3},{value:"Testing",id:"testing",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Others",id:"others",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sorosan-sdk-currently-in-development"},"Sorosan SDK (Currently in development)"),(0,o.kt)("p",null,"Introducing the Sorosan SDK, your gateway to a seamless Stellar network development experience. With the Sorosan SDK, we're empowering developers to harness the full potential of Stellar with ease. Keep an eye on our updates for exciting features and releases as we embark on this journey together. Star and watch to stay in the loop!"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("h3",{id:"to-use-as-a-module-in-a-nodejs-project"},"To use as a module in a Node.js project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install it using npm:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @sorosan-sdk/core\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"require/import it in your JavaScript/Typescript:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { SorosanSDK } from '@sorosan-sdk/core'\n\nconst sdk: SorosanSDK = SorosanSDK(\"futurenet\")     // Currently only support futurenet\nconst contractSDK = sdk.contract;       // To access other SDK\n")),(0,o.kt)("h3",{id:"to-use-as-a-module-locally"},"To use as a module locally"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone this repo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/sorosan/sorosan-sdk\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install packages and build")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd sorosan-sdk\nnpm i\nnpm run build\n")),(0,o.kt)("p",null,"This should generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"dist/")," where  you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"SorosanSDK()")," like in ",(0,o.kt)("strong",{parentName:"p"},"node.js")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test\n")),(0,o.kt)("h2",{id:"documentation"},(0,o.kt)("a",{parentName:"h2",href:"https://sorosan.github.io/sorosan-doc/"},"Documentation")),(0,o.kt)("p",null,"Documentation source for repo can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/tree/master/sorosan-doc"},"here")),(0,o.kt)("h2",{id:"others"},"Others"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sorosan-dapp.vercel.app/sdk"},"Sorosan App")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sorosan.github.io/sorosan-doc"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@sorosan-sdk/react"},"React SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Sorosan/create-sorosan-app"},"Sample App using Sorosan SDK"))))}d.isMDXComponent=!0}}]);