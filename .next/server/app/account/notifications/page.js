(()=>{var e={};e.id=413,e.ids=[413],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6823:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>n.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>l}),a(8321),a(3826),a(5866);var t=a(3191),r=a(8716),i=a(7922),n=a.n(i),c=a(5231),o={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>c[e]);a.d(s,o);let l=["",{children:["account",{children:["notifications",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,8321)),"C:\\Users\\bardj\\Documents\\GitHub\\ecu-jsbackend-silicone\\silicon-client\\app\\account\\notifications\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,3826)),"C:\\Users\\bardj\\Documents\\GitHub\\ecu-jsbackend-silicone\\silicon-client\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\bardj\\Documents\\GitHub\\ecu-jsbackend-silicone\\silicon-client\\app\\account\\notifications\\page.tsx"],u="/account/notifications/page",f={require:a,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/account/notifications/page",pathname:"/account/notifications",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4294:(e,s,a)=>{let t={"21e81ab65a42d3716f4dc4e7db29c471b17be668":()=>Promise.resolve().then(a.bind(a,5650)).then(e=>e.getUserId),"4e362e43dff8e524368d1a1613c2b9250fc2996c":()=>Promise.resolve().then(a.bind(a,5650)).then(e=>e.getUserProfile),d99845cae1f6221b5e7c913ff6e550dd539f4a58:()=>Promise.resolve().then(a.bind(a,5650)).then(e=>e.getAuthToken),ef07bf254b6eaf275130c77d0ae2bbad25e8a71e:()=>Promise.resolve().then(a.bind(a,4702)).then(e=>e.getUserSubscription)};async function r(e,...s){return(await t[e]()).apply(null,s)}e.exports={"21e81ab65a42d3716f4dc4e7db29c471b17be668":r.bind(null,"21e81ab65a42d3716f4dc4e7db29c471b17be668"),"4e362e43dff8e524368d1a1613c2b9250fc2996c":r.bind(null,"4e362e43dff8e524368d1a1613c2b9250fc2996c"),d99845cae1f6221b5e7c913ff6e550dd539f4a58:r.bind(null,"d99845cae1f6221b5e7c913ff6e550dd539f4a58"),ef07bf254b6eaf275130c77d0ae2bbad25e8a71e:r.bind(null,"ef07bf254b6eaf275130c77d0ae2bbad25e8a71e")}},4855:(e,s,a)=>{Promise.resolve().then(a.bind(a,3944))},2728:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,9404,23))},2632:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},3944:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});var t=a(326),r=a(7798),i=a(883),n=a.n(i),c=a(7577);function o(){let[e,s]=(0,c.useState)(!0),[a,i]=(0,c.useState)(""),[o,l]=(0,c.useState)({id:0,email:"",isActive:!0}),d=e=>{"checkbox"==e.target.type?e.target.checked?l({...o,[e.target.name]:!0}):l({...o,[e.target.name]:!1}):l({...o,[e.target.name]:e.target.value})},u=async e=>{try{e.preventDefault(),console.log(o);let s=await fetch("https://jb-silicon-subscriberprovider.azurewebsites.net/api/UpdateSubscriber?code=swb24lddQ0WaIa_tuy_3vt3n4diYG8HFZHJrFuHvW1bNAzFuxB1e-Q%3D%3D",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(o)});200===s.status?console.log("Success"):(i("Server Error"),console.error("Server Error"))}catch{i("Client Error"),console.error("Client Error")}};return e?t.jsx("main",{className:`w-full d-flex column center ${n().main}`,children:t.jsx("section",{className:"w-max",children:t.jsx("div",{className:"container d-flex center",children:t.jsx("p",{children:"Loading..."})})})}):o?t.jsx("main",{className:`w-full d-flex column center ${n().main}`,children:t.jsx("section",{className:"account-notifications w-max",children:(0,t.jsxs)("div",{className:"container",children:[t.jsx(r.Z,{}),(0,t.jsxs)("div",{className:"notifications",children:[t.jsx("h1",{children:"Notifications"}),t.jsx("form",{onSubmit:u,id:"notifications-form",noValidate:!0,children:(0,t.jsxs)("fieldset",{children:[(0,t.jsxs)("div",{className:"main-box",children:[t.jsx("div",{className:"box",children:(0,t.jsxs)("div",{id:"notifications-email",className:"input-box",children:[t.jsx("label",{className:"label",children:"Preferred email for notifications"}),t.jsx("span",{}),t.jsx("input",{type:"text",name:"email",value:o.email,placeholder:"Enter your preferred email",onChange:d})]})}),(0,t.jsxs)("div",{className:"switch-box",children:[t.jsx("div",{className:"btn-switch",children:(0,t.jsxs)("label",{className:"switch",children:[t.jsx("input",{type:"checkbox",name:"isActive",defaultChecked:o.isActive,onChange:d}),t.jsx("span",{className:"slider round green light"})]})}),(0,t.jsxs)("div",{className:"text-box",children:[t.jsx("div",{className:"form-label",children:"Subscribe to Newsletter"}),t.jsx("p",{className:"text-s",children:"Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper."})]})]})]}),(0,t.jsxs)("div",{className:"buttons-box",children:[t.jsx("button",{type:"reset",className:"btn-gray",children:"Cancel"}),t.jsx("button",{type:"submit",className:"btn-theme",children:"Save changes"})]})]})})]})]})})}):t.jsx("main",{className:`w-full d-flex column center ${n().main}`,children:t.jsx("section",{className:"w-max",children:t.jsx("div",{className:"container d-flex center",children:t.jsx("p",{children:"No profile data"})})})})}a(5424),(0,a(6242).$)("ef07bf254b6eaf275130c77d0ae2bbad25e8a71e")},7427:(e,s,a)=>{"use strict";a.d(s,{n5:()=>r}),a(5424);var t=a(6242),r=(0,t.$)("21e81ab65a42d3716f4dc4e7db29c471b17be668");(0,t.$)("d99845cae1f6221b5e7c913ff6e550dd539f4a58"),(0,t.$)("4e362e43dff8e524368d1a1613c2b9250fc2996c")},7798:(e,s,a)=>{"use strict";a.d(s,{Z:()=>c});var t=a(326),r=a(434),i=a(5047);a(7427);var n=a(7577);function c(){let e=(0,i.usePathname)(),[s,a]=(0,n.useState)({userId:"",profileImg:"",firstName:"",lastName:"",email:"",phone:"",bio:""});return(0,t.jsxs)("aside",{className:"accountaside",children:[(0,t.jsxs)("div",{className:"avatar-box",children:[t.jsx("img",{className:"avatar-img",src:"/img/avatars/"+s.profileImg,alt:""}),t.jsx("div",{className:"change-avatar",children:t.jsx("i",{className:"fa-solid fa-arrows-rotate"})})]}),(0,t.jsxs)("div",{className:"short-info-box",children:[t.jsx("p",{className:"h5",children:s.firstName+" "+s.lastName}),t.jsx("p",{className:"text-m",children:s.email})]}),(0,t.jsxs)("div",{className:"buttons-box",children:[(0,t.jsxs)(r.default,{href:"/account/details",className:`btn ${"/account/details"===e?"btn-theme":"btn-white"}`,children:[t.jsx("i",{className:"fa-regular fa-cog"}),t.jsx("p",{children:"Account Details"})]}),(0,t.jsxs)(r.default,{href:"/account/security",className:`btn ${"/account/security"===e?"btn-theme":"btn-white"}`,children:[t.jsx("i",{className:"fa-regular fa-lock"}),t.jsx("p",{children:"Security"})]}),(0,t.jsxs)(r.default,{href:"/account/notifications",className:`btn ${"/account/notifications"===e?"btn-theme":"btn-white"}`,children:[t.jsx("i",{className:"fa-regular fa-bell"}),t.jsx("p",{children:"Notifications"})]}),(0,t.jsxs)(r.default,{href:"/auth/signout",className:"btn btn-white",children:[t.jsx("i",{className:"fa-regular fa-arrow-left-from-bracket"}),t.jsx("p",{children:"Sign Out"})]})]})]})}},434:(e,s,a)=>{"use strict";a.d(s,{default:()=>r.a});var t=a(9404),r=a.n(t)},883:e=>{e.exports={main:"page_main__pkvmn",section:"page_section__oF_pN",container:"page_container__gf7b8",span:"page_span__jfPfZ"}},4702:(e,s,a)=>{"use strict";a.r(s),a.d(s,{getUserSubscription:()=>i});var t=a(7745);a(6461);var r=a(5650);async function i(){let e,s;let a='{"id":"'+await (0,r.getUserId)()+'"}';return await fetch("https://jb-silicon-profileprovider.azurewebsites.net/api/GetUserSubscriberId?code=A63BOej-CFmRvM8ycODJ-YUPt4Kmfa11Z1WkM-vyRZE1AzFubnUJpg%3D%3D",{method:"post",headers:{"content-type":"application/json"},body:a}).then(e=>e.json()).then(s=>{e=s.id}).catch(e=>console.error("Error:",e)),a='{"id":'+e+"}",await fetch("https://jb-silicon-subscriberprovider.azurewebsites.net/api/GetSubscriber?code=4_-Ydj6fJPuOGVMAlQr2FG2EoqQ_oClo2gcvjSN7UnlIAzFu8sDSpQ%3D%3D",{method:"post",headers:{"content-type":"application/json"},body:a}).then(e=>e.json()).then(e=>{s=e}).catch(e=>console.error("Error:",e)),s}(0,a(5723).ensureServerEntryExports)([i]),(0,t.registerServerReference)("ef07bf254b6eaf275130c77d0ae2bbad25e8a71e",i)},8321:(e,s,a)=>{"use strict";a.r(s),a.d(s,{$$typeof:()=>n,__esModule:()=>i,default:()=>c});var t=a(8570);let r=(0,t.createProxy)(String.raw`C:\Users\bardj\Documents\GitHub\ecu-jsbackend-silicone\silicon-client\app\account\notifications\page.tsx`),{__esModule:i,$$typeof:n}=r;r.default;let c=(0,t.createProxy)(String.raw`C:\Users\bardj\Documents\GitHub\ecu-jsbackend-silicone\silicon-client\app\account\notifications\page.tsx#default`)},5650:(e,s,a)=>{"use strict";a.r(s),a.d(s,{getAuthToken:()=>i,getUserId:()=>c,getUserProfile:()=>n});var t=a(7745);a(6461);var r=a(3973);async function i(){return await r.cookies().get("Authorization")?.value}async function n(){let e,s=await c();return await fetch("https://jb-silicon-profileprovider.azurewebsites.net/api/GetProfile?code=F1agisL-rVQd_ldnt2LDHm5xWcnhGKf2mzc9DOO-FcdzAzFucUYB-g%3D%3D",{method:"post",headers:{"content-type":"application/json"},body:'{"userId":"'+s+'"}'}).then(e=>e.json()).then(s=>{e=s}).catch(e=>console.error("Error:",e)),e}async function c(){let e=await i(),s="";return await fetch("https://jb-silicon-tokenprovider.azurewebsites.net/api/GetUserFromToken?code=8JsrEIvrhRXOPR5tGL7ZguZAl4I2RSuIOQvHNPwhe43WAzFuxlqSoA%3D%3D",{method:"post",headers:{Authorization:`bearer ${e}`}}).then(e=>e.json()).then(e=>{s=e.userId}).catch(e=>console.error("Error:",e)),s}(0,a(5723).ensureServerEntryExports)([i,n,c]),(0,t.registerServerReference)("d99845cae1f6221b5e7c913ff6e550dd539f4a58",i),(0,t.registerServerReference)("4e362e43dff8e524368d1a1613c2b9250fc2996c",n),(0,t.registerServerReference)("21e81ab65a42d3716f4dc4e7db29c471b17be668",c)},3826:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l,metadata:()=>o});var t=a(9510);a(2076),a(5656);var r=a(7371),i=a(1615);function n(){let e=(0,i.cookies)().get("Authorization");return t.jsx("header",{className:"w-full d-flex center header",children:(0,t.jsxs)("div",{className:"container w-max",children:[t.jsx(r.default,{href:"/",id:"logo",children:t.jsx("img",{src:"",alt:"Silicon Logo"})}),(0,t.jsxs)("div",{id:"menu",children:[(0,t.jsxs)("nav",{className:"nav",children:[t.jsx(r.default,{href:"/",className:"menu-link",children:"Overview"}),t.jsx(r.default,{href:"/",className:"menu-link",children:"Features"}),e?t.jsx(r.default,{href:"/portfolio/courses",className:"menu-link",children:"Courses"}):t.jsx(t.Fragment,{}),t.jsx(r.default,{href:"/",className:"menu-link",children:"Contact"})]}),(0,t.jsxs)("div",{className:"btn-switch",children:[t.jsx("div",{className:"",children:"Light"}),(0,t.jsxs)("label",{className:"switch",children:[t.jsx("input",{type:"checkbox",name:"lightdarkcheckbox"}),t.jsx("span",{className:"slider round"})]}),t.jsx("div",{className:"",children:"Dark"})]}),e?t.jsx(r.default,{href:"/account/details",className:"header-profile",children:t.jsx("img",{src:"/img/avatars/avatar.png",alt:"Profile image"})}):(0,t.jsxs)("div",{className:"account-buttons",children:[(0,t.jsxs)(r.default,{href:"/auth/signin",className:"btn-gray",children:[t.jsx("i",{className:"fa-solid fa-arrow-right-to-bracket"}),t.jsx("span",{children:"Sign in"})]}),(0,t.jsxs)(r.default,{href:"/auth/signup",className:"btn-theme",children:[t.jsx("i",{className:"fa-regular fa-user"}),t.jsx("span",{children:"Sign up"})]})]})]}),t.jsx("div",{className:"btn-mobile",children:t.jsx("i",{className:"fa-solid fa-bars"})})]})})}function c(){return t.jsx("footer",{className:"w-full d-flex center",children:(0,t.jsxs)("div",{className:"container w-max",children:[(0,t.jsxs)("div",{className:"social-media",children:[t.jsx("a",{href:"",className:"btn-social",children:t.jsx("i",{className:"fa-brands fa-square-facebook"})}),t.jsx("a",{href:"",className:"btn-social",children:t.jsx("i",{className:"fa-brands fa-x-twitter"})}),t.jsx("a",{href:"",className:"btn-social",children:t.jsx("i",{className:"fa-brands fa-square-instagram"})}),t.jsx("a",{href:"",className:"btn-social",children:t.jsx("i",{className:"fa-brands fa-youtube"})})]}),t.jsx("div",{className:"copyright",children:"\xa9 2024 Silicon. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur."})]})})}let o={title:"Silicon",description:"Inl\xe4mningsuppgift - ECU - WIN23 - JavaScript Backend"};function l({children:e}){return(0,t.jsxs)("html",{className:"html",lang:"en",children:[t.jsx("head",{children:t.jsx("script",{defer:!0,src:"https://kit.fontawesome.com/41c8b474e2.js",crossOrigin:"anonymous"})}),(0,t.jsxs)("body",{className:"body-wrapper",children:[t.jsx(n,{}),e,t.jsx(c,{})]})]})}},7481:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var t=a(6621);let r=e=>[{type:"image/x-icon",sizes:"48x48",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5656:()=>{},2076:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),t=s.X(0,[948,572,621,362,630],()=>a(6823));module.exports=t})();