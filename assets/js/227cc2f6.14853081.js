(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[4161],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(n),c=i,m=h["".concat(l,".").concat(c)]||h[c]||p[c]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3234:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={id:"gsoc-ideas",title:"Ideas"},s={unversionedId:"internships/gsoc/gsoc-ideas",id:"internships/gsoc/gsoc-ideas",isDocsHomePage:!1,title:"Ideas",description:"Interesting Ideas",source:"@site/docs/internships/gsoc/ideas.md",sourceDirName:"internships/gsoc",slug:"/internships/gsoc/gsoc-ideas",permalink:"/talawa-docs/docs/internships/gsoc/gsoc-ideas",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/internships/gsoc/ideas.md",version:"current",frontMatter:{id:"gsoc-ideas",title:"Ideas"},sidebar:"someSidebar",previous:{title:"Selection Criteria",permalink:"/talawa-docs/docs/internships/gsoc/gsoc-selection-criteria"}},l=[{value:"Interesting Ideas",id:"interesting-ideas",children:[]},{value:"Primary Areas",id:"primary-areas",children:[{value:"Improved API Installation and Setup",id:"improved-api-installation-and-setup",children:[]},{value:"Multisite",id:"multisite",children:[]},{value:"Admin Portal Plugins",id:"admin-portal-plugins",children:[]},{value:"Improved UI design",id:"improved-ui-design",children:[]},{value:"Multilingual Support",id:"multilingual-support",children:[]},{value:"Operational Considerations",id:"operational-considerations",children:[]},{value:"Membership Management",id:"membership-management",children:[]},{value:"Testing",id:"testing",children:[]}]},{value:"Secondary Areas",id:"secondary-areas",children:[{value:"Group Chats",id:"group-chats",children:[]},{value:"Volunteer and Attendee Checkins for Events",id:"volunteer-and-attendee-checkins-for-events",children:[]},{value:"Event Registrations",id:"event-registrations",children:[]},{value:"Facilities Registrations",id:"facilities-registrations",children:[]},{value:"Donation and Membership Fee Management",id:"donation-and-membership-fee-management",children:[]},{value:"Groups Management",id:"groups-management",children:[]},{value:"Event Planning and Scheduling",id:"event-planning-and-scheduling",children:[]},{value:"Notifications and Reminders",id:"notifications-and-reminders",children:[]}]}],d={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"interesting-ideas"},"Interesting Ideas"),(0,o.kt)("p",null,"There are some well known areas of improvement that we have listed below. It is really important that we complete these over the summer and we would also welcome any other ideas that could use these as a foundation."),(0,o.kt)("p",null,"In general we would like to reduce the learning curve for new sysadmins. Our API documentation needs to be clearer, especially as we hope to launch an alpha version of the software this year. It is important that our online documentation is updated as any part of the project."),(0,o.kt)("p",null,'Please review the "Desired Features" section of this website for ',(0,o.kt)("strong",{parentName:"p"},"even more ideas")," and further necessary information."),(0,o.kt)("h2",{id:"primary-areas"},"Primary Areas"),(0,o.kt)("p",null,"We have many areas in which we need good ideas. This section highlights some primary areas of focus."),(0,o.kt)("h3",{id:"improved-api-installation-and-setup"},"Improved API Installation and Setup"),(0,o.kt)("p",null,"There needs to be a simple way to install the backend API server while prompting for the admin username and password. The installation process should install all prerequisite packages."),(0,o.kt)("p",null,"This a relatively simple idea and will need to be paired with others."),(0,o.kt)("p",null,"GSoC Proposal Tags: talawa-api, documentation"),(0,o.kt)("h3",{id:"multisite"},"Multisite"),(0,o.kt)("p",null,"Talawa has two components. The mobile app and the backend API. After installing the mobile app, the end user needs to enter the API\u2019s main URL to gain access to Talawa\u2019s features. There are no meaningful limits to mobile app users as there is currently no backend management portal. This means that after installing the Talawa API server, anyone with the mobile app installed and the API server\u2019s URL can create organizations. Similarly anyone with the API URL can create user accounts. There needs to be a way to create a management portal to limit the creation of new organizations, and only allow preapproved users to gain access to the apps."),(0,o.kt)("p",null,"This is going require work on the API. Work will also need to be done to modify existing mobile app behavior."),(0,o.kt)("p",null,"GSoC Proposal Tags: multisite, documentation"),(0,o.kt)("h3",{id:"admin-portal-plugins"},"Admin Portal Plugins"),(0,o.kt)("p",null,"We need the ability to control the functionality of the API via plugins. For example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If Talawa were to be launched as a cloud service, then the ability to create a plugin to define and enforce tiers of service with associated billing would be needed."),(0,o.kt)("li",{parentName:"ol"},"A plugin to accept donations or membership fees via the mobile app."),(0,o.kt)("li",{parentName:"ol"},"A plugin to allow organization administrators to create ads from local companies and add it to the news feed")),(0,o.kt)("p",null,"The API would need to detect the existence of a plugin, and automatically query the plugin for authorization to do something, like add a new user, before doing so."),(0,o.kt)("p",null,"GSoC Proposal Tags: talawa-api, plugins"),(0,o.kt)("h3",{id:"improved-ui-design"},"Improved UI design"),(0,o.kt)("p",null,"We need someone to go through and evaluate the UI workflow. In some cases, such as the creation of events, it isn\u2019t easy to see what the next steps are such as assigning persons to roles, responsibilities and target deadlines. The bright yellow color scheme is not attractive, and a dark mode option would be useful. Older people may need the ability to adjust the size of fonts in the settings to be able to see without glasses. An option for larger icons would be useful for similar reasons. If people are not fully literate, then we'll need the ability for them to easily send audio and/or video messages which will need to be incorporated in the UI. The UI/UX will need to be able to support multilingual capabilities which is has a more detailed description in another section. A thorough review needs to be done and the resulting improvements implemented in code."),(0,o.kt)("p",null,"The application will be used in many countries by people from different cultures, religious and political beliefs, and geographic regions. The color scheme will need to be as globally neutral as possible. It will be best to limit the color palette and remember that it must easily blend with the current logo."),(0,o.kt)("p",null,"GSoC Proposal Tags: talawa, documentation"),(0,o.kt)("h3",{id:"multilingual-support"},"Multilingual Support"),(0,o.kt)("p",null,"The mobile app and admin portal only support English at the moment. We will need ways for persons to easily switch between languages at installation, on login, on registration and at any time during the operation of the software. A thorough review of how this and more could be implemented will be required."),(0,o.kt)("h3",{id:"operational-considerations"},"Operational Considerations"),(0,o.kt)("p",null,"Many community hosting their own solution won't have the funds to pay for additional services. They will be using slower, older equipment with limited storage. There will be low technical ability too. In many cases the users may not have completed schooling. Ideas on how to resolve these issues will be helpful."),(0,o.kt)("h3",{id:"membership-management"},"Membership Management"),(0,o.kt)("p",null,"There needs to be a way to add members to a group in a trusted way. Many persons in developing regions don't have access to email services, and the organizations may not have the funds to invest in a text based authentication scheme. Also, person may not be literate enough to read detailed instructions. There needs to be a way, that is universally available on all modern feature and smart phones, to allow persons to authenticate themselves when joining an organization. Some mobile apps use a QR code system for example, there could be other methods too."),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"We only have automated testing implemented for 50% of the code base. This needs to be completed, and all new code needs to be 100% integrated into our Travis-CI system."),(0,o.kt)("p",null,"GSoC Proposal Tags: features"),(0,o.kt)("h2",{id:"secondary-areas"},"Secondary Areas"),(0,o.kt)("p",null,"We have other areas that need good ideas. This section highlights some primary areas of focus."),(0,o.kt)("h3",{id:"group-chats"},"Group Chats"),(0,o.kt)("p",null,"We\u2019ve been trying to find ways to do group chats. The first implementation was to make anyone participating in an event be automatically included in a chat for that event. We thought this would help foster community. We also see a need for people to create chat groups outside of events with anyone in the organization."),(0,o.kt)("p",null,"This will require work on both the mobile app and the API backend."),(0,o.kt)("p",null,"GSoC proposal tag: features, documentation"),(0,o.kt)("h3",{id:"volunteer-and-attendee-checkins-for-events"},"Volunteer and Attendee Checkins for Events"),(0,o.kt)("p",null,"An organization may rely on volunteers for manage events. It would be good to have a simple system for users to be able to let the event coordinators know that they are on site and available."),(0,o.kt)("p",null,"The system could also be used to have attendees confirm that they are actually at the event. This would help with capacity planning."),(0,o.kt)("h3",{id:"event-registrations"},"Event Registrations"),(0,o.kt)("p",null,"There could be a need to limit the number of persons attending an event by setting a maximum number for registrations when they are created. Event organizers would then know who to admit to the event if space were limited."),(0,o.kt)("h3",{id:"facilities-registrations"},"Facilities Registrations"),(0,o.kt)("p",null,"Just like with event registrations, there may be a need to reserve a room, building, hall or field for an event. Reserving these areas would be an interesting feature to consider."),(0,o.kt)("h3",{id:"donation-and-membership-fee-management"},"Donation and Membership Fee Management"),(0,o.kt)("p",null,"Organizations may need simple ways to track donations and membership fees"),(0,o.kt)("h3",{id:"groups-management"},"Groups Management"),(0,o.kt)("p",null,"Groups won't be just for chats and communication. They may also arrange activities and events together. There should be a way to help them do this. For example, automatically inviting all members of a group to a group event. There are many other areas for improvement"),(0,o.kt)("h3",{id:"event-planning-and-scheduling"},"Event Planning and Scheduling"),(0,o.kt)("p",null,"Many organizations may have regular events"),(0,o.kt)("h3",{id:"notifications-and-reminders"},"Notifications and Reminders"),(0,o.kt)("p",null,"It would be good to be able to send notifications and reminders to selected groups of persons such as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"All members of an organization"),(0,o.kt)("li",{parentName:"ol"},"All persons registered for an event"),(0,o.kt)("li",{parentName:"ol"},"All members of a group")),(0,o.kt)("p",null,"These could be sent directly and/or part of their news feed."))}u.isMDXComponent=!0}}]);