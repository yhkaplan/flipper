(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{109:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),i=(r(0),r(144)),a={id:"error-handling",title:"Error Handling"},l={unversionedId:"extending/error-handling",id:"extending/error-handling",isDocsHomePage:!1,title:"Error Handling",description:"Errors in Flipper plugins should be hidden from the user while providing actionable data to the plugin developer.",source:"@site/../docs/extending/error-handling.mdx",slug:"/extending/error-handling",permalink:"/docs/extending/error-handling",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/error-handling.mdx",version:"current",sidebar:"extending",previous:{title:"Client Plugin API",permalink:"/docs/extending/create-plugin"},next:{title:"Architecture",permalink:"/docs/extending/arch"}},p=[{value:"Android",id:"android",children:[]},{value:"C++",id:"c",children:[]}],c={rightToc:p};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Errors in Flipper plugins should be hidden from the user while providing actionable data to the plugin developer."),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("p",null,"To gracefully handle errors in Flipper we provide the ",Object(i.b)("inlineCode",{parentName:"p"},"ErrorReportingRunnable")," and ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperResponder")," classes."),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperResponder")," instance is provided to the client plugin on every method call, and allows for it to return results. When an error occurs during a Flipper method call that can't be handled, pass the error to the responder. This will let the desktop plugin handle it, and if it doesn't, the error will be displayed in the DevTools console."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ErrorReportingRunnable")," is a custom ",Object(i.b)("inlineCode",{parentName:"p"},"Runnable")," which catches all exceptions, stopping them from crashing the application and reports them to Flipper. These error messages will show up in the DevTools console."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"new ErrorReportingRunnable(mConnection) {\n  @Override\n  public void runOrThrow() throws Exception {\n    mightThrowException();\n  }\n}.run();\n")),Object(i.b)("p",null,"Executing this block of code will always finish without error but may transfer any silent errors to the Flipper desktop app. During plugin development these java stack traces are surfaced in the chrome dev console."),Object(i.b)("p",null,"Always use ",Object(i.b)("inlineCode",{parentName:"p"},"ErrorReportingRunnable")," for error handling instead of ",Object(i.b)("inlineCode",{parentName:"p"},"try"),"/",Object(i.b)("inlineCode",{parentName:"p"},"catch")," or even worse letting errors crash the app. With ErrorReportingRunnable you won't block anyone and you won't hide any stack traces."),Object(i.b)("h2",{id:"c"},"C++"),Object(i.b)("p",null,"To gracefully handle errors in Flipper we perform all transactions inside of a try block which catches all exceptions, stopping them from crashing the application and reporting them to the plugin developer. This includes your own customs implementations of ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperPlugin::didConnect()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperConnection::send()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"::receive()"),"!"),Object(i.b)("p",null,"That means you can safely throw exceptions in your plugin code. The exception messages will be sent to the Flipper desktop app. During plugin development the exception messages are surfaced in the Chrome dev console."),Object(i.b)("p",null,"If your plugin performs asynchronous work in which exceptions are thrown, these exceptions will not be caught by the Flipper infrastructure. You should handle them appropriately."))}s.isMDXComponent=!0},144:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return h}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var n=o.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=s(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),b=t,h=d["".concat(a,".").concat(b)]||d[b]||u[b]||i;return r?o.a.createElement(h,l(l({ref:n},c),{},{components:r})):o.a.createElement(h,l({ref:n},c))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);