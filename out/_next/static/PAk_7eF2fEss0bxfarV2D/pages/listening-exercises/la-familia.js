(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+fYp":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),s=n.n(i),l=n("QJSi"),o=n("BtEH"),r=n.n(o),a=(n("EcEN"),n("8Kt/"),n("webf")),p=(n("6ot8"),n("5Yp1")),d=n("HUOD"),u=n.n(d),c=s.a.createElement,h=new Date,f=String(h.getDate()).padStart(2,"0"),g=String(h.getMonth()+1).padStart(2,"0"),m=h.getFullYear();h=g+"/"+f+"/"+m,console.log(h);t.default=function(e){return c(p.a,null,c(u.a,{title:"La Familia - Listening Exercise | CXC Spanish Online",description:"Practice your Spanish listening skills and learn about Kelly and her family. Pass your CXC Spanish exam with our free online study guide.",twitterUsername:"_rxhe3m",author:"Raheem McDonald",article:!0,publishedDate:h,modifiedDate:h}),c(l.n,null,c(l.c,null,c(l.d,null,c("a",{href:"/"},"Home")),c(l.d,null,c("a",{href:"/listening"},"Listening Exercises")),c(l.d,{active:!0},"La Familia")),c(a.a,null,c(l.f,null,c(l.g,null,c(l.k,null,"La Familia"),c("br",null),c("p",null,"Kelly and Ronaldo are talking about what their families are like and some of their traditions. Let's explore."),c("br",null),c(l.C,null,c(l.l,{sm:12,md:6,lg:6,xl:6},c("h6",null,"Normal Speed"),c("div",{className:"audio"},c("audio",{controls:!0},c("source",{src:"https://dl.dropbox.com/s/rfi2g07w90lx9bj/la-familia-normal.mp3?dl=0"})))),c(l.l,{sm:12,md:6,lg:6,xl:6},c("h6",null,"Slow Speed"),c("div",{className:"audio"},c("audio",{controls:!0},c("source",{src:"https://dl.dropbox.com/s/fyvgtx1dkspwsc5/la-familia-slow.mp3?dl=0"}))))),c("br",null),c(r.a,{trigger:c("a",{href:""},"Read transcript")},c("p",{style:{paddingTop:"10px"}}),c("p",null),c("p",null),c("p",null),c("p",null),c("p",null),c("p",null),c("p",null),c("p",null),c("p",null),c("p",null),c("p",null),c("p",null)))))))}},"4fRq":function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);e.exports=function(){return n(i),i}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},BtEH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),o=a(l),r=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeout=void 0,n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.scrollHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.scrollHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){this.props.triggerDisabled||(e.preventDefault(),this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"===typeof this.props.triggerSibling?o.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?o.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(e){e.target===this.innerRef&&(this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen()))}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",s=this.props.triggerDisabled?"is-disabled":"",l=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,r=this.props.contentContainerTagName,a=this.props.triggerTagName,p=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,d=this.props.classParentString+"__trigger "+n+" "+s+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),u=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),c=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,h=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return o.default.createElement(r,i({className:u.trim()},this.props.containerElementProps),o.default.createElement(a,{className:d.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;" "!==n&&"Enter"!==n||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},l),this.renderNonClickableTriggerElement(),o.default.createElement("div",{className:c.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef},o.default.createElement("div",{className:h.trim()},p)))}}]),t}(l.Component);p.propTypes={transitionTime:r.default.number,transitionCloseTime:r.default.number,triggerTagName:r.default.string,easing:r.default.string,open:r.default.bool,containerElementProps:r.default.object,classParentString:r.default.string,openedClassName:r.default.string,triggerStyle:r.default.object,triggerClassName:r.default.string,triggerOpenedClassName:r.default.string,contentOuterClassName:r.default.string,contentInnerClassName:r.default.string,accordionPosition:r.default.oneOfType([r.default.string,r.default.number]),handleTriggerClick:r.default.func,onOpen:r.default.func,onClose:r.default.func,onOpening:r.default.func,onClosing:r.default.func,trigger:r.default.oneOfType([r.default.string,r.default.element]),triggerWhenOpen:r.default.oneOfType([r.default.string,r.default.element]),triggerDisabled:r.default.bool,lazyRender:r.default.bool,overflowWhenOpen:r.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:r.default.oneOfType([r.default.element,r.default.func]),tabIndex:r.default.number,contentContainerTagName:r.default.string},p.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=p},EcEN:function(e,t,n){var i=n("xDdU"),s=n("xk4V"),l=s;l.v1=i,l.v4=s,e.exports=l},I2ZF:function(e,t){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);e.exports=function(e,t){var i=t||0,s=n;return[s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]]].join("")}},hzYZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listening-exercises/la-familia",function(){return n("+fYp")}])},webf:function(e,t,n){"use strict";var i=n("q1tI"),s=n.n(i),l=n("QJSi"),o=n("b6Qr"),r=n("6ot8"),a=s.a.createElement,p={display:"inline!important",paddingLeft:"50px"},d={display:"inline"},u={listStyleType:"none",paddingTop:"15px"};t.a=function(e){return a("div",null,a(l.C,null,a(l.l,{sm:12,md:8,lg:8,xl:8},e.children,a(o.BrowserView,null,a("br",null),a(l.f,null,a("span",{className:"border border-light"},a("ul",{style:u},a("li",{style:d},a("i",{style:{color:"#8a3ab9"},className:"fab fa-instagram"}),a("a",{className:"text-muted",style:{paddingLeft:"10px"},href:"https://www.instagram.com/cxcspanish/",target:"_blank"},"cxcspanish")),a("li",{style:p},a("i",{style:{color:" #3b5998"},className:"fab fa-facebook"}),a("a",{className:"text-muted",style:{paddingLeft:"10px"},href:"https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii",target:"_blank"},"CXC Spanish Gude")),a("li",{style:p},a("i",{style:{color:"#00acee"},className:"fab fa-twitter"}),a("a",{className:"text-muted",style:{paddingLeft:"10px"},href:"https://www.twitter.com/cxcspanish",target:"_blank"},"cxcspanish"))))))),a(l.l,{sm:12,md:4,lg:4,xl:4},a("br",{className:"d-sm-none"}),a(l.f,null,a(l.j,{src:"https://cdn.blog.psafe.com/en/blog/wp-content/uploads/2016/10/BLOG_EN_0610_The-Benefits-of-Dropbox-for-Your-Android.jpg",style:{width:"100%"}}),a(l.g,null,a("p",null,"We've sourced all the past papers so you don't have to. Check out our Dropbox folder to get pass paper for any CSEC or CAPE subject."),a(l.e,{target:"_blank",href:"https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0"},a("i",{style:{paddingRight:"5px"},className:"fab fa-dropbox"}),"View Folder"))),a("br",null),a(l.f,null,a(l.g,null,a(l.k,{className:""},"Essentials"),a("br",null),a("ul",{style:{marginLeft:"-25px",listStyleType:"none"}},a("li",null,a(r.a,{title:"Spanish For Dummies",href:"https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Modern Spanish Grammar",href:"https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Spanish Basics",href:"https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"}))))),a("br",null),a(l.f,null,a(l.j,{src:"https://images.idgesg.net/images/article/2019/04/google-drive-docs-suite-logos-100794638-large.jpg",style:{width:"100%",padding:"20px"}}),a(l.g,null,a("p",null,"You can also see the papers on our Google Drive folder, if you are not able to access Dropbox."),a(l.e,{target:"_blank",theme:"success",href:"https://drive.google.com/open?id=1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4"},a("i",{style:{paddingRight:"5px"},class:"fab fa-google-drive"}),"View Folder"))),a("div",{style:{display:"none"}},a("br",null),a(l.f,null,a(l.g,null,a(l.k,{className:"text-info"},"CSEC Past Papers"),a("br",null),a("ul",{style:{marginLeft:"-25px",listStyleType:"none"}},a("li",null,a(r.a,{title:"Economic",href:"https://dl.dropbox.com/s/jxvrisgi1yzevu3/csec%C2%AE_economics_past_papers.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Principles of Business",href:"https://dl.dropbox.com/s/7nqmtd37s999yj0/csecc2ae-principles-of-business-past-papers-2005-2017.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Principles of Accounts",href:"https://dl.dropbox.com/s/mnaf0jko2lwdm0c/csecc2ae-principles-of-accounts-past-papers-2005-2017.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Physics",href:"https://dl.dropbox.com/s/90g671h3mmosk0z/CSEC%20Physics%20January%202019%20P2.pdf?dl=0"})))))),a("br",null),a(l.f,null,a(l.g,null,a(l.k,{className:"text-info"},"CAPE Past Papers"),a("br",null),a("ul",{style:{marginLeft:"-25px",listStyleType:"none"}},a("li",null,a(r.a,{title:"Spanish",href:""})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Agricultural Science",href:"https://dl.dropbox.com/s/eqc4v3bjrk1yh9j/CAPE%20Agricultural%20Science%20Past%20Papers.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Biology",href:"https://dl.dropbox.com/s/lzugxqjfns8l7ee/CAPE%20Biology%20Past%20Papers%20unit%201_2%202005-2016.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Law",href:"https://dl.dropbox.com/s/0tdxb2o1fx4k3ti/CAPE%C2%AE%20Law%20Past%20Papers%20u%201%20_%202%202005%20-2016.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Food and Nutrition",href:"https://dl.dropbox.com/s/9zzq4eehfvjnsrt/CAPE%20Food%20and%20Nutrition%20Past%20Papers%20Ui%20_U2%202005%20-%202016.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Sociology",href:"https://dl.dropbox.com/s/x1h7tmn4lam6ryn/CAPE%20Sociology%20Past%20Papers%20U1%20_U%202005-2016.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"French",href:"https://dl.dropbox.com/s/5g8gm6h4jcwikex/CAPE%20French%20Past%20Papers%20U1%20_U2%202005-2016.pdf?dl=0"})),a("li",{style:{paddingTop:"10px"}},a(r.a,{title:"Computer Science",href:"https://dl.dropbox.com/s/uifq5ynywxvdga8/CAPE%20Computer%20Science%20Past%20Papers%20u1_U2%202005-2016.pdf?dl=0"}))))))))}},xDdU:function(e,t,n){var i,s,l=n("4fRq"),o=n("I2ZF"),r=0,a=0;e.exports=function(e,t,n){var p=t&&n||0,d=t||[],u=(e=e||{}).node||i,c=void 0!==e.clockseq?e.clockseq:s;if(null==u||null==c){var h=l();null==u&&(u=i=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==c&&(c=s=16383&(h[6]<<8|h[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:a+1,m=f-r+(g-a)/1e4;if(m<0&&void 0===e.clockseq&&(c=c+1&16383),(m<0||f>r)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");r=f,a=g,s=c;var b=(1e4*(268435455&(f+=122192928e5))+g)%4294967296;d[p++]=b>>>24&255,d[p++]=b>>>16&255,d[p++]=b>>>8&255,d[p++]=255&b;var y=f/4294967296*1e4&268435455;d[p++]=y>>>8&255,d[p++]=255&y,d[p++]=y>>>24&15|16,d[p++]=y>>>16&255,d[p++]=c>>>8|128,d[p++]=255&c;for(var C=0;C<6;++C)d[p+C]=u[C];return t||o(d)}},xk4V:function(e,t,n){var i=n("4fRq"),s=n("I2ZF");e.exports=function(e,t,n){var l=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var r=0;r<16;++r)t[l+r]=o[r];return t||s(o)}}},[["hzYZ",1,0]]]);