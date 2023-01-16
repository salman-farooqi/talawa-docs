"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),v=o,m=d["".concat(s,".").concat(v)]||d[v]||c[v]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(3117),o=(n(7294),n(3905));const a={id:"event-grouping",title:"Event Grouping"},l=void 0,i={unversionedId:"features/events/event-grouping",id:"features/events/event-grouping",title:"Event Grouping",description:"This section is a work in progress.",source:"@site/docs/features/events/grouping.md",sourceDirName:"features/events",slug:"/features/events/event-grouping",permalink:"/docs/features/events/event-grouping",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/features/events/grouping.md",tags:[],version:"current",frontMatter:{id:"event-grouping",title:"Event Grouping"},sidebar:"someSidebar",previous:{title:"Signup and Subscription",permalink:"/docs/features/events/event-signup"},next:{title:"Assign Event Roles",permalink:"/docs/features/events/event-roles"}},s={},p=[{value:"Code: EVT-002",id:"code-evt-002",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,o.kt)("h2",{id:"code-evt-002"},"Code: EVT-002"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Authored by",(0,o.kt)("strong",{parentName:"em"}," ",(0,o.kt)("strong",{parentName:"strong"},"Shannika Jackson")," "),"Last updated on")," ",(0,o.kt)("em",{parentName:"p"}," ",(0,o.kt)("strong",{parentName:"em"},"March 13, 2021")," ")),(0,o.kt)("p",null,"This feature aims to",(0,o.kt)("em",{parentName:"p"}," ",(0,o.kt)("strong",{parentName:"em"},"improve the event viewing options")," ")," by ",(0,o.kt)("em",{parentName:"p"}," ",(0,o.kt)("strong",{parentName:"em"},"allowing users to group different types of events")," "),"."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("h3",{id:"problem"},"Problem"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"All events in the organisation is currently displayed ungrouped :")," Ideally, the user should be able to toggle between their subscribed events or all events in the organization")),(0,o.kt)("h3",{id:"goals"},"Goals"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Provide a more streamlined event display :")," This should allow modularity for feature development in event management")),(0,o.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,o.kt)("p",null,"The following are aspects of this feature which have been considered but are outside of the scope for the current project:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Tag events :")," This will eventually allow a user to subscribe to, toggle display of and get notifications for specific types of events"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Toggle personal event view, co-ordinator, organization and all views on calendar :")," This will allow the user to switch between the different views based on their roles.")),(0,o.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,o.kt)("p",null,"The following are the primary roles foreseen in the development of this feature"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Feature Lead")," : will review proposed solutions, acceptance and close feature .")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"NA"),(0,o.kt)("h3",{id:"use-cases"},"Use Cases"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Members want to:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Toggle the view of their events")," between their subscribed events and all events in the organisation for which they have permission to view (public events and private ones they have been accepted to)."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Admins want to:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Toggle view of all events")," between public or private"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"View all members","'"," personal events")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Coordinators want to:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Toggle view of their events:")," between their coordinated events and all organization","'","s events.")))),(0,o.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,o.kt)("h3",{id:"user-experience"},"User Experience"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the home screen users should be presented with a button to view events."),(0,o.kt)("li",{parentName:"ol"},"This view defaults to display all events for which the user is subscribed."),(0,o.kt)("li",{parentName:"ol"},"The user should be presented with the option to toggle between viewing all events, only their subscribed events and only their coordinated events.")),(0,o.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,o.kt)("p",null,"NA"),(0,o.kt)("h3",{id:"future-work"},"Future Work"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Items mentioned in the Out of scope section will form the basis for future work to be done on this feature")),(0,o.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,o.kt)("p",null,"TBD"))}c.isMDXComponent=!0}}]);