(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UDM_user-318c3fb11a9240fdba65e66d552da9d7.png"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(104)),i={id:"gettingstarted",title:"Getting Started"},l={unversionedId:"install/gettingstarted",id:"install/gettingstarted",isDocsHomePage:!1,title:"Getting Started",description:"Where to begin?",source:"@site/docs/install/gettingstarted.md",slug:"/install/gettingstarted",permalink:"/docs/install/gettingstarted",version:"current",sidebar:"someSidebar",previous:{title:"Contributors",permalink:"/docs/poller/thx1"},next:{title:"Docker",permalink:"/docs/install/docker"}},c=[{value:"Where to begin?",id:"where-to-begin",children:[]},{value:"Configuring the controller",id:"configuring-the-controller",children:[]},{value:"Next steps",id:"next-steps",children:[]}],s={toc:c};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"where-to-begin"},"Where to begin?"),Object(o.b)("p",null,"The first decision to be made is Docker or not. Many users have chosen to go the Docker route."),Object(o.b)("h4",{id:"advantages-of-docker"},"Advantages of Docker"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Easy to configure, as you can rely on pre-existing work."),Object(o.b)("li",{parentName:"ul"},"Easy to update."),Object(o.b)("li",{parentName:"ul"},"Reliable and well-supported.")),Object(o.b)("h4",{id:"disadvantages-of-docker"},"Disadvantages of Docker"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Some performance impact (though not likely to impact UniFi Poller, there is an overhead)."),Object(o.b)("li",{parentName:"ul"},"Relies on a base system for persistence of data."),Object(o.b)("li",{parentName:"ul"},"May not be implemented on some useful platforms (eg NAS).")),Object(o.b)("p",null,"In the sections below we will first discuss Docker implementation, and then go on to look at implementing the components directly. In both cases, though, there will be some common configuration steps. The first of these is to set up the controller correctly."),Object(o.b)("h2",{id:"configuring-the-controller"},"Configuring the controller"),Object(o.b)("p",null,"The only requirement of the controller is that UniFi Poller can log in to it and extract data. For this purpose go ahead and create a new user now. Make a note of the username and password you have chosen."),Object(o.b)("p",null,"If your controller is on a UDM or UDM-Pro or UCK running UnifiOS then it is recommended that a Limited Admin user is created with Read-Only rights to the UniFi Network app. Other access\nlevels may not work correctly."),Object(o.b)("p",null,"For example,the screenshot below show the username chosen as ",Object(o.b)("inlineCode",{parentName:"p"},"unifipoller"),". This is the default, will be used throughout these docs."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(146).default}),"  "),Object(o.b)("p",null,"If you are using another controller type (eg. Cloudkey or Virtual) then create a read-only user."),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("p",null,"At this point you need to decide whether to use"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../install/dockercompose"},"Docker")," - using ",Object(o.b)("inlineCode",{parentName:"li"},"docker-compose"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../install/docker"},"Docker")," - using command line (this assumes that you have access to Grafana and InfluxDB/Prometheus)."),Object(o.b)("li",{parentName:"ul"},"Bare metal or a NAS - see the appropriate page (this assumes that you have access to Grafana and InfluxDB/Prometheus)."),Object(o.b)("li",{parentName:"ul"},"An unRAID Template is also available in the Community Applications.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Although it is a matter of choice, new users may find ",Object(o.b)("inlineCode",{parentName:"p"},"docker_compose")," easiest to use."))),Object(o.b)("p",null,"Finish up by following the ",Object(o.b)("a",{parentName:"p",href:"../install/finish"},"Final Steps")," page."))}u.isMDXComponent=!0}}]);