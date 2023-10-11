"use strict";(self.webpackChunksorosan_sdk_doc=self.webpackChunksorosan_sdk_doc||[]).push([[97],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,u=c["".concat(s,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"ContractSDK",title:"Class: ContractSDK",sidebar_label:"ContractSDK",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"api/classes/ContractSDK",id:"api/classes/ContractSDK",title:"Class: ContractSDK",description:"Hierarchy",source:"@site/docs/api/classes/ContractSDK.md",sourceDirName:"api/classes",slug:"/api/classes/ContractSDK",permalink:"/sorosan-doc/docs/api/classes/ContractSDK",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ContractSDK",title:"Class: ContractSDK",sidebar_label:"ContractSDK",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SorosanSDK",permalink:"/sorosan-doc/docs/api/classes/SorosanSDK"},next:{title:"TokenSDK",permalink:"/sorosan-doc/docs/api/classes/TokenSDK"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Accessors",id:"accessors",level:2},{value:"setPublicKey",id:"setpublickey",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"calculateEstimateGas",id:"calculateestimategas",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"deploy",id:"deploy",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"deployWasm",id:"deploywasm",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getContractABI",id:"getcontractabi",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getContractCode",id:"getcontractcode",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getContractData",id:"getcontractdata",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getContractDataByContractHash",id:"getcontractdatabycontracthash",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"initialise",id:"initialise",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"isContractHash",id:"iscontracthash",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-10",level:4}],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Soroban")),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ContractSDK"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ContractSDK"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"selectedNetwork"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"activePublicKey?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selectedNetwork")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NetworkDetails"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"activePublicKey?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,"Soroban.constructor"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L19"},"contract-sdk.ts:19")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"setpublickey"},"setPublicKey"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," ",(0,r.kt)("strong",{parentName:"p"},"setPublicKey"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,"Soroban.setPublicKey"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/soroban.ts#L100"},"soroban.ts:100")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"calculateestimategas"},"calculateEstimateGas"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"calculateEstimateGas"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"contractAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Helper function to estimate the gas cost of a contract call. This estimation is done by creating a\ntransaction builder and simulating the transaction using the Soroban network. The gas cost is\ncalculated as the sum of the base fee and the fee obtained from the simulated transaction."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The contract address to estimate gas for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the method to be called on the contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ScVal"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of ScVal arguments to pass to the method.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"A promise that resolves to a string representation of the estimated gas\ncost for the contract call."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const gasEstimation = await sdk.estimateGas(\n   "CCV3ODCHRVCUQTWJZ7F7SLKHGT3JLYWUVHAWMKIYQVSCKMGSOCOJ3AUO",\n   "init",\n   [xdr.scVal.scvString("Hello World"), new Address("GB...").toScAddress(), ...]\n);\n\nconst gasCostInStroops: number = parseInt(gasEstimation);   // Convert to a number if needed.\n')),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,"Soroban.calculateEstimateGas"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/soroban.ts#L81"},"soroban.ts:81")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deploy"},"deploy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deploy"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"wasmId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Deploys a smart contract with a specified Wasm ID to the blockchain."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"wasmId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier (Wasm ID) of the contract's WebAssembly code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The public key of the contract deployer.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The unique identifier (Contract ID) of the deployed contract.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"If the deployment process encounters an error."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Deploy a contract using a Wasm ID and the contract deployer's public key.\nconst wasmId = '706ac9480880242cd030a5efeb060d86f51627fb8488f5e78660a7f175b85fe1'; // Replace with the actual Wasm ID.\nconst publicKey = 'GC5S4C6LMT6BCCARUCK5MOMAS4H7OABFSZG2SPYOGUN2KIHN5HNNMCGL'; // Replace with the actual public key.\n\ntry {\n  const contractId = await sdk.contract.deploy(wasmId, publicKey);\n  console.log(`Contract deployed successfully. Contract ID: ${contractId}`);\n} catch (error) {\n  console.error(`Contract deployment failed: ${error.message}`);\n}\n")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L84"},"contract-sdk.ts:84")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"deploywasm"},"deployWasm"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"deployWasm"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"wasm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Deploys a WebAssembly (Wasm) smart contract to the blockchain."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"wasm")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Blob")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The WebAssembly code as a Blob.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The public key of the contract deployer.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A promise that resolves to the unique identifier (Wasm ID) of the deployed contract.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"If the deployment process encounters an error or if ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey")," is falsy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Deploy a Wasm contract using a Blob containing the contract code.\nconst wasmBlob = new Blob([wasmBytes], { type: 'application/wasm' });\nconst publicKey = 'GC5S4C6LMT6BCCARUCK5MOMAS4H7OABFSZG2SPYOGUN2KIHN5HNNMCGL'; // Replace with the actual public key.\n\ntry {\n  const wasmId = await sdk.contract.deployWasm(wasmBlob, publicKey);\n  console.log(`Contract deployed successfully. Wasm ID: ${wasmId}`);\n} catch (error) {\n  console.error(`Contract deployment failed: ${error.message}`);\n}\n")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L44"},"contract-sdk.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcontractabi"},"getContractABI"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getContractABI"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"contractAddress"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"[]",">"),(0,r.kt)("p",null,"Retrieves the ABI (Application Binary Interface) of a smart contract by its contract address."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the smart contract.")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"[]",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A promise that resolves to an array of contract methods and their details,\nincluding method name, parameters, and outputs.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"If there is an error in retrieving the contract ABI."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Retrieve the ABI of a smart contract by its address.\nconst contractAddress = 'CAZNM4AAQCQPUQGR72MIC7NPWHZBDOQKZBUQ3WTULIDALOWMOG23L6JT'; // Replace with the actual contract address.\n\ntry {\n  const contractABI = await sdk.contract.getContractABI(contractAddress);\n  console.log('Contract ABI:', contractABI);\n} catch (error) {\n  console.error(`Error retrieving contract ABI: ${error.message}`);\n}\n")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L336"},"contract-sdk.ts:336")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcontractcode"},"getContractCode"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getContractCode"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"wasmId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmCode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmCodeLedger"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"  }",">"),(0,r.kt)("p",null,"Retrieves the WebAssembly (Wasm) code of a smart contract by its Wasm ID."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"wasmId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Buffer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier (Wasm ID) of the contract.")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmCode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmCodeLedger"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"  }",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A promise that resolves to an object\ncontaining the Wasm code as a hexadecimal string and the ledger sequence number when the code was last modified.\nReturns ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," if the contract code is not found or if there is an error.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"If there is an error in retrieving the contract code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Retrieve the Wasm code of a contract by its Wasm ID.\nconst wasmId = Buffer.from('abcdef123456', 'hex'); // Replace with the actual Wasm ID.\n\ntry {\n  const contractCode = await sdk.contract.getContractCode(wasmId);\n  if (contractCode) {\n    console.log(`Contract code: ${contractCode.wasmCode}`);\n    console.log(`Last modified ledger: ${contractCode.wasmCodeLedger}`);\n  } else {\n    console.error('Contract code not found or an error occurred.');\n  }\n} catch (error) {\n  console.error(`Error retrieving contract code: ${error.message}`);\n}\n")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L216"},"contract-sdk.ts:216")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcontractdata"},"getContractData"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getContractData"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"contractAddress"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),": readonly ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageElement"),"[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmIdLedger"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"  }",">"),(0,r.kt)("p",null,"Retrieves contract data from Soroban blockchain, including wasmId, wasmIdLedger, and storage.\nUse getContractDataByContractHash(contractId) if you have the contract hash."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),": readonly ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageElement"),"[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmIdLedger"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"  }",">"),(0,r.kt)("p",null,"A Promise that resolves to an object containing wasmId, wasmIdLedger, and storage, or null if no data is found."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"If an error occurs during contract data retrieval."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const contractAddress = 'CAZNM4AAQCQPUQGR72MIC7NPWHZBDOQKZBUQ3WTULIDALOWMOG23L6JT'; // Replace with the actual contract identifier.\n\ntry {\n  const contractData = await sdk.contract.getContractData(contractAddress);\n  if (contractData) {\n    console.log('Contract WASM ID:', contractData.wasmId);\n    console.log('WASM ID Ledger:', contractData.wasmIdLedger);\n    console.log('Contract Storage:', contractData.storage);\n  } else {\n    console.log('Contract data not found.');\n  }\n} catch (error) {\n  console.error('Error:', error.message);\n}\n")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L125"},"contract-sdk.ts:125")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcontractdatabycontracthash"},"getContractDataByContractHash"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getContractDataByContractHash"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"contractId"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),": readonly ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageElement"),"[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmIdLedger"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"  }",">"),(0,r.kt)("p",null,"Retrieves contract data from Soroban blockchain, including wasmId, wasmIdLedger, and storage."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"contractId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The identifier of the contract to retrieve data for.")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),": readonly ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageElement"),"[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmIdLedger"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"  }",">"),(0,r.kt)("p",null,"A Promise that resolves to an object containing wasmId, wasmIdLedger, and storage, or null if no data is found."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"If an error occurs during contract data retrieval."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const contractAddress = 'CAZNM4AAQCQPUQGR72MIC7NPWHZBDOQKZBUQ3WTULIDALOWMOG23L6JT'; // Replace with the actual contract identifier.\nconst contractId = sdk.getContractHash(contractAddress);\n\ntry {\n  const contractData = await sdk.contract.getContractDataByContractHash(contractId);\n  if (contractData) {\n    console.log('Contract WASM ID:', contractData.wasmId);\n    console.log('WASM ID Ledger:', contractData.wasmIdLedger);\n    console.log('Contract Storage:', contractData.storage);\n  } else {\n    console.log('Contract data not found.');\n  }\n} catch (error) {\n  console.error('Error:', error.message);\n}\n")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L185"},"contract-sdk.ts:185")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"initialise"},"initialise"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"initialise"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"contractAddress"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("p",null,"Initializes a contract call, calculates gas estimate, and submits the transaction."),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"contractAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the smart contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the contract method to call.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ScVal"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of arguments to pass to the contract method.")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A promise that resolves to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if the transaction succeeds,\nor ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," if it fails or is canceled.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"If there is an error in the initialization or submission process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This function initiates a contract call by calculating the gas estimate, preparing the transaction,\nand submitting it to the blockchain. It returns a boolean value indicating the success of the transaction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Initialize a contract call, calculate gas estimate, and submit the transaction.\nconst contractAddress = 'CDDKJMTAENCOVJPUWTISOQ23JYSMCLEOKXT7VEVZJWLYZ3PKLNRBXJ5C';\nconst method = 'initialise'; // Replace with the name of the contract method.\nconst args = [\n  sdk.nativeToScVal(\"GC5S4C6LMT6BCCARUCK5MOMAS4H7OABFSZG2SPYOGUN2KIHN5HNNMCGL\", 'address')\n  sdk.nativeToScVal(\"Token SS\")\n  sdk.nativeToScVal(\"SS\")\n  sdk.nativeToScVal(18, 'i32'),\n];\n\ntry {\n  const isSuccess = await sdk.contract.initialize(contractAddress, method, args);\n  if (isSuccess) {\n    console.log('Contract call successful.');\n  } else {\n    console.error('Contract call failed or was canceled.');\n  }\n} catch (error) {\n  console.error(`Error initializing contract call: ${error.message}`);\n}\n")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L278"},"contract-sdk.ts:278")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"iscontracthash"},"isContractHash"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isContractHash"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Checks if a string is a valid contract hash."),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"val")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The string to check.")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true")," if the input is a valid contract hash, otherwise ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Check if a string is a valid contract hash.\nconst hash = '854702b2ee78e509edafc09482c823301b23e3e3417d69e468e488ff7e592bd6'; // Replace with the string to check.\nconst isValid = sdk.contract.isContractHash(hash);\nconsole.log(`Is valid contract hash: ${isValid}`);\n")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sorosan/sorosan-sdk/blob/28d63d1/src/sdk/contract-sdk.ts#L374"},"contract-sdk.ts:374")))}m.isMDXComponent=!0}}]);