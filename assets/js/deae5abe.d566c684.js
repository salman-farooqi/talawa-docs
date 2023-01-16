"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,v=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(3117),a=(r(7294),r(3905));const o={id:"admin-role-overview",title:"Overview"},i=void 0,l={unversionedId:"features/admin-role/admin-role-overview",id:"features/admin-role/admin-role-overview",title:"Overview",description:"This section is a work in progress.",source:"@site/docs/features/admin-role/overview.md",sourceDirName:"features/admin-role",slug:"/features/admin-role/admin-role-overview",permalink:"/docs/features/admin-role/admin-role-overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/admin-role/overview.md",tags:[],version:"current",frontMatter:{id:"admin-role-overview",title:"Overview"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/features/admin-portal/admin-portal-overview"},next:{title:"Global Messaging",permalink:"/docs/features/admin-role/admin-messaging"}},s={},m=[{value:"Overall Guidance",id:"overall-guidance",level:2},{value:"Functions from App",id:"functions-from-app",level:3},{value:"Functions from Admin Portal",id:"functions-from-admin-portal",level:3}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,a.kt)("h2",{id:"overall-guidance"},"Overall Guidance"),(0,a.kt)("p",null,"We will assume that at least one person in the organization has access to a traditional computer device with a non-mobile size screen to help them do administrative tasks via the portal."),(0,a.kt)("h3",{id:"functions-from-app"},"Functions from App"),(0,a.kt)("p",null,"Administrators will also need to be able to do some portal tasks from their phones such as:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add/ remove members"),(0,a.kt)("li",{parentName:"ol"},"Set Organisation status public or private"),(0,a.kt)("li",{parentName:"ol"},"Create/Update/Delete group chats"),(0,a.kt)("li",{parentName:"ol"},"Create/Update/Delete events"),(0,a.kt)("li",{parentName:"ol"},"Add/ Remove Admins",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Only the organization's creator can remove admins"))),(0,a.kt)("li",{parentName:"ol"},"Manage and switch between multiple organization   "),(0,a.kt)("li",{parentName:"ol"},"Sending organization wide messages"),(0,a.kt)("li",{parentName:"ol"},"Elevating members to coordinators"),(0,a.kt)("li",{parentName:"ol"},"Moderating Newsfeed",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Mute people"),(0,a.kt)("li",{parentName:"ol"},"Enable/ disable commenting on posts"),(0,a.kt)("li",{parentName:"ol"},"Thumbs up/down")))),(0,a.kt)("h3",{id:"functions-from-admin-portal"},"Functions from Admin Portal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Determine whether membership to the organization is public or private"),(0,a.kt)("li",{parentName:"ol"},"Add or remove members"),(0,a.kt)("li",{parentName:"ol"},"Add or remove other organizational admins"),(0,a.kt)("li",{parentName:"ol"},"Add or remove group chats"),(0,a.kt)("li",{parentName:"ol"},"Add, remove or edit events"),(0,a.kt)("li",{parentName:"ol"},"Add or remove posts")))}c.isMDXComponent=!0}}]);