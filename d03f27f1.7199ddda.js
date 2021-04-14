(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,s=b["".concat(o,".").concat(d)]||b[d]||m[d]||l;return t?r.a.createElement(s,i(i({ref:n},u),{},{components:t})):r.a.createElement(s,i({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),l=(t(0),t(106)),o={},i={unversionedId:"help/manualbuild",id:"help/manualbuild",isDocsHomePage:!1,title:"manualbuild",description:"Manual package",source:"@site/docs/help/manualbuild.md",slug:"/help/manualbuild",permalink:"/docs/help/manualbuild",version:"current"},c=[{value:"Manual package",id:"manual-package",children:[{value:"Manual Build Notes",id:"manual-build-notes",children:[]}]}],u={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"manual-package"},"Manual package"),Object(l.b)("p",null,"Recommend reading the note at the bottom if you're using a mac."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Install ",Object(l.b)("a",{parentName:"li",href:"https://fpm.readthedocs.io/en/latest/installing.html"},"FPM")),Object(l.b)("li",{parentName:"ol"},"Install ",Object(l.b)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go")),Object(l.b)("li",{parentName:"ol"},"Clone this repo and change your working directory to the checkout.",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/unifi-poller/unifi-poller.git\ncd unifi-poller\n"))),Object(l.b)("li",{parentName:"ol"},"Install local Golang dependencies:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Build a package (or two!):",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"make deb")," will build a Debian package"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"make rpm")," builds a RHEL package."))),Object(l.b)("li",{parentName:"ul"},"Install it:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sudo dpkg -i *.deb || sudo rpm -Uvh *.rpm"))))),Object(l.b)("h3",{id:"manual-build-notes"},"Manual Build Notes"),Object(l.b)("p",null,"If you're building linux packages on a mac you can run ",Object(l.b)("inlineCode",{parentName:"p"},"brew install rpmbuild gnu-tar"),"\nto get the additional tools you need. That means you're going to need Homebrew.\nAnd if you're going to install Homebrew, or already have, you can simply\ndo something like this to get your Go environment up and build the packages:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"brew install rpmbuild gnu-tar go dep\nsudo gem install --no-document fpm\nmkdir ~/go/{src,mod}\nexport GOPATH=~/go\ncd ~go/src\ngit clone https://github.com/unifi-poller/unifi-poller.git\ncd unifi-poller\nmake rpm deb\n")))}p.isMDXComponent=!0}}]);