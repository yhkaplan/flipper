(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return t?i.a.createElement(f,l(l({ref:n},c),{},{components:t})):i.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},145:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(20);n.default=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},148:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i})),t.d(n,"useAllPluginInstancesData",(function(){return o})),t.d(n,"usePluginData",(function(){return a}));var r=t(145);function i(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var n=i()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function a(e,n){void 0===n&&(n="default");var t=o(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},151:function(e,n,t){(function(n){const r=["internal","external"];let i;try{i=t(148).usePluginData}catch(u){i=null}function o(e){return function(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${r}. Instead got ${e}`);if(!Object.keys(e).find((e=>r.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${r}`);const n=Object.keys(e).filter((e=>!r.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${r}`)}(e),l()?"internal"in e?a(e.internal):[]:"external"in e?a(e.external):[]}function a(e){return"function"==typeof e?e():e}function l(){return n.env.FB_INTERNAL||i&&i("internaldocs-fb").FB_INTERNAL}e.exports={fbContent:o,fbInternalOnly:function(e){return o({internal:e})},isInternal:l,FbInternalOnly:function(e){return l()?e.children:null},OssOnly:function(e){return l()?null:e.children}}}).call(this,t(152))},152:function(e,n){var t,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],s=!1,p=-1;function d(){s&&u&&(s=!1,u.length?c=u.concat(c):p=-1,c.length&&b())}function b(){if(!s){var e=l(d);s=!0;for(var n=c.length;n;){for(u=c,c=[];++p<n;)u&&u[p].run();p=-1,n=c.length}u=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function m(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];c.push(new f(e,n)),1!==c.length||s||l(b)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),o=(t(0),t(144)),a=t(151),l={id:"dev-setup",title:"Development Setup"},u={unversionedId:"extending/dev-setup",id:"extending/dev-setup",isDocsHomePage:!1,title:"Development Setup",description:"IDE",source:"@site/../docs/extending/dev-setup.mdx",slug:"/extending/dev-setup",permalink:"/docs/extending/dev-setup",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/dev-setup.mdx",version:"current",sidebar:"extending",previous:{title:"Publishing your Plugin",permalink:"/docs/tutorial/js-publishing"},next:{title:"Dynamically Loading Plugins",permalink:"/docs/extending/loading-custom-plugins"}},c=[{value:"IDE",id:"ide",children:[{value:"TypeScript",id:"typescript",children:[]},{value:"Android (Java)",id:"android-java",children:[]}]},{value:"Running Flipper from source (recommended)",id:"running-flipper-from-source-recommended",children:[{value:"Startup options",id:"startup-options",children:[]}]},{value:"Guidelines for writing TypeScript",id:"guidelines-for-writing-typescript",children:[]},{value:"Submitting a diff / PR",id:"submitting-a-diff--pr",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ide"},"IDE"),Object(o.b)(a.OssOnly,{mdxType:"OssOnly"},Object(o.b)("p",null,"When developing Flipper plugins we recommend the following IDEs:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"TypeScript (for Flipper Desktop (plugins)): Visual Studio Code"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},'Install the "ESLint" (dbaeumer.vscode-eslint) extension from marketplace to enable linting'),Object(o.b)("li",{parentName:"ol"},'Install the "Prettier" (esbenp.prettier-vscode) extension to enable automatic code-formatting'),Object(o.b)("li",{parentName:"ol"},"If for some reason it is not working, the builtin TypeScript extension might be disabled. To enable it, to go to extensions, search for \u201c@builtin typescript\u201d and enable it."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Android Studio (for Android plugins)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"XCode (for iOS plugins)")))),Object(o.b)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("h3",{id:"typescript"},"TypeScript"),Object(o.b)("p",null,'Flipper Desktop is written in TypeScript.\nUsing our internal "VSCode @ FB" as IDE is strongly recommended (',Object(o.b)("inlineCode",{parentName:"p"},"code-fb"),")."),Object(o.b)("p",null,"Make sure to install the ",Object(o.b)("inlineCode",{parentName:"p"},"[FB-Internal]"),' "ESLint" and "Pretter" extensions are enabled.'),Object(o.b)("p",null,"If for some reason it is not working, the builtin TypeScript extension might be disabled. To enable it, to go to extensions, search for \u201c@builtin typescript\u201d and enable it."),Object(o.b)("h3",{id:"android-java"},"Android (Java)"),Object(o.b)("p",null,"IntelliJ is the recommended platform. Focussing on a flipper-enabled app should include the flipper modules as expected."),Object(o.b)("p",null,"If you don't have an fbsource checkout (e.g. Whatsapp Team), you can open Android Studio and import project: ",Object(o.b)("inlineCode",{parentName:"p"},"fbsource/xplat/sonar")),Object(o.b)("p",null,"If you're having gradle (or other) problems, make sure you're on the latest Android Studio version.")),Object(o.b)("h2",{id:"running-flipper-from-source-recommended"},"Running Flipper from source (recommended)"),Object(o.b)("p",null,"When developing Flipper plugins we strongly recommend to run from Flipper itself from source as well, as this yields several benefits:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Automatic transpilation and bundling of loaded plugins: ES6, TypeScript, JSX."),Object(o.b)("li",{parentName:"ul"},"Automatic refresh after code changes."),Object(o.b)("li",{parentName:"ul"},"React and Redux Dev Tools."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"debugging"}),"Debugging")," using Chrome Dev Tools or Visual Studio Code."),Object(o.b)("li",{parentName:"ul"},"Additional debug information like React warnings and performance metrics. ")),Object(o.b)("p",null,"Prerequisites for Flipper development build:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"node \u2265 14"),Object(o.b)("li",{parentName:"ul"},"yarn \u2265 1.5"),Object(o.b)("li",{parentName:"ul"},"git"),Object(o.b)("li",{parentName:"ul"},"watchman")),Object(o.b)("p",null,"To run Flipper Desktop from source:"),Object(o.b)(a.OssOnly,{mdxType:"OssOnly"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/facebook/flipper.git\ncd flipper/desktop\nyarn\nyarn start\n")),Object(o.b)("p",null,"Tip: start with ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start --fast-refresh")," for experimental fast refresh.")),Object(o.b)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"fbclone fbsource\ncd ~/fbsource/xplat/sonar/desktop\nyarn\nyarn start\n")),Object(o.b)("p",null,"Tip: start with ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start --fast-refresh")," for experimental fast refresh."),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"code-fb .")," in the same directory to open an IDE to hack on Flipper.")),Object(o.b)("h3",{id:"startup-options"},"Startup options"),Object(o.b)("p",null,"You can use several options to customise development build instance. They can be provided as command-line args or environment variables.\nYou can check all of them by executing ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start --help"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'yarn start [args]\n\nOptions:\n  --embedded-plugins    Enables embedding of plugins into Flipper bundle. If it\n                        disabled then only installed plugins are loaded. The\n                        flag is enabled by default. Env var\n                        FLIPPER_NO_EMBEDDED_PLUGINS is equivalent to the\n                        command-line option "--no-embedded-plugins".   [boolean]\n  --fast-refresh        Enable Fast Refresh - quick reload of UI component\n                        changes without restarting Flipper. The flag is disabled\n                        by default. Env var FLIPPER_FAST_REFRESH is equivalent\n                        to the command-line option "--fast-refresh".   [boolean]\n  --plugin-auto-update  [FB-internal only] Enable plugin auto-updates. The flag\n                        is disabled by default in dev mode. Env var\n                        FLIPPER_NO_PLUGIN_AUTO_UPDATE is equivalent to the\n                        command-line option "--no-plugin-auto-update"  [boolean]\n  --enabled-plugins     Load only specified plugins and skip loading rest. This\n                        is useful when you are developing only one or few\n                        plugins. Plugins to load can be specified as a\n                        comma-separated list with either plugin id or name used\n                        as identifier, e.g. "--enabled-plugins\n                        network,inspector". The flag is not provided by default\n                        which means that all plugins loaded.             [array]\n  --open-dev-tools      Open Dev Tools window on startup. The flag is disabled\n                        by default. Env var FLIPPER_OPEN_DEV_TOOLS is equivalent\n                        to the command-line option "--open-dev-tools". [boolean]\n  --dev-server-port     Dev server port. 3000 by default. Env var "PORT=3001" is\n                        equivalent to the command-line option "--dev-server-port\n                        3001".                          [number] [default: 3000]\n  --version             Show version number                            [boolean]\n  --help                Show help                                      [boolean]\n')),Object(o.b)("p",null,"You can also create file ",Object(o.b)("inlineCode",{parentName:"p"},".env")," in ",Object(o.b)("inlineCode",{parentName:"p"},"desktop")," subfolder and specify any environment variables to load them automatically on ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," so you don't need to pass command-line args every time, e.g.:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"FLIPPER_FAST_REFRESH=true\nFLIPPER_OPEN_DEV_TOOLS=true\nFLIPPER_ENABLED_PLUGINS=flipper-messages,network,inspector\n")),Object(o.b)("h2",{id:"guidelines-for-writing-typescript"},"Guidelines for writing TypeScript"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Important:")," Use ",Object(o.b)("inlineCode",{parentName:"li"},".tsx")," file extension for all TypeScript files (instead of ",Object(o.b)("inlineCode",{parentName:"li"},".ts"),")"),Object(o.b)("li",{parentName:"ul"},"Prefer ",Object(o.b)("inlineCode",{parentName:"li"},"type")," for React props and state over interfaces"),Object(o.b)("li",{parentName:"ul"},"Don\u2019t prefix interfaces with ",Object(o.b)("inlineCode",{parentName:"li"},"I")),Object(o.b)("li",{parentName:"ul"},"Enums, Types and Interfaces use PascalCase (uppercase first letter)"),Object(o.b)("li",{parentName:"ul"},"Install 3rd party type definitions as dev dependency (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"yarn add @types/lodash --dev"),")")),Object(o.b)("h2",{id:"submitting-a-diff--pr"},"Submitting a diff / PR"),Object(o.b)("p",null,"Make sure your new functionality is covered with tests, and run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test --watch")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"desktop/")," directory to verify that they pass. "),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"testing"}),"testing")," page for more details on writing and running test."),Object(o.b)("p",null,"To make sure you don't get any lint/formatting errors, run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn lint")," before submitting your diff. Some errors (especially formatting errors can be auto-fixed by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn fix")))}p.isMDXComponent=!0}}]);