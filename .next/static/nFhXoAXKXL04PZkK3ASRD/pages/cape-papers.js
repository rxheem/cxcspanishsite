(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{"7W2i":function(e,t,s){var n=s("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},A3CJ:function(e,t,s){e.exports=function(e,t,s,n,a,o,r,i,l,c){"use strict";function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function d(e){for(var t,s=1;s<arguments.length;s++)t=null==arguments[s]?{}:arguments[s],s%2?p(Object(t),!0).forEach((function(s){i(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}));return e}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,s=s&&s.hasOwnProperty("default")?s.default:s,n=n&&n.hasOwnProperty("default")?n.default:n,a=a&&a.hasOwnProperty("default")?a.default:a,o=o&&o.hasOwnProperty("default")?o.default:o,r=r&&r.hasOwnProperty("default")?r.default:r,i=i&&i.hasOwnProperty("default")?i.default:i;var u="default"in l?l.default:l,f={},h=(c.node,c.node,c.bool,c.string,c.oneOfType([c.string,c.array]),c.func,c.func,c.func,function(l){function c(e){var s;t(this,c),s=n(this,a(c).call(this,e)),i(o(s),"srcToArray",(function(e){return(Array.isArray(e)?e:[e]).filter((function(e){return e}))})),i(o(s),"onLoad",(function(){f[s.sourceList[s.state.currentIndex]]=!0,s.i&&s.setState({isLoaded:!0})})),i(o(s),"onError",(function(){if(f[s.sourceList[s.state.currentIndex]]=!1,!s.i)return!1;for(var e,t=s.state.currentIndex+1;t<s.sourceList.length;t++){if(!((e=s.sourceList[t])in f)){s.setState({currentIndex:t});break}if(!0===f[e])return s.setState({currentIndex:t,isLoading:!1,isLoaded:!0}),!0;f[e]}return t===s.sourceList.length?s.setState({isLoading:!1}):void s.loadImg()})),i(o(s),"loadImg",(function(){s.i=new Image,s.i.src=s.sourceList[s.state.currentIndex],s.props.crossorigin&&(s.i.crossOrigin=s.props.crossorigin),s.props.decode&&s.i.decode?s.i.decode().then(s.onLoad).catch(s.onError):(s.i.onload=s.onLoad,s.i.onerror=s.onError)})),i(o(s),"unloadImg",(function(){s.i.onerror=null,s.i.onload=null,s.i.src="";try{delete s.i.src}catch(e){}delete s.i})),s.loaderContainer=e.loaderContainer||e.container,s.unloaderContainer=e.unloaderContainer||e.container,s.sourceList=s.srcToArray(s.props.src);for(var r=0;r<s.sourceList.length&&s.sourceList[r]in f;r++)if(!0===f[s.sourceList[r]])return s.state={currentIndex:r,isLoading:!1,isLoaded:!0},n(s);return s.state=s.sourceList.length?{currentIndex:0,isLoading:!0,isLoaded:!1}:{isLoading:!1,isLoaded:!1},s}return r(c,l),s(c,[{key:"componentDidMount",value:function(){this.state.isLoading&&this.loadImg()}},{key:"componentWillUnmount",value:function(){this.i&&this.unloadImg()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;this.loaderContainer=e.loaderContainer||e.container,this.unloaderContainer=e.unloaderContainer||e.container;var s=this.srcToArray(e.src),n=s.filter((function(e){return-1===t.sourceList.indexOf(e)})),a=this.sourceList.filter((function(e){return-1===s.indexOf(e)}));if(n.length||a.length){if(this.sourceList=s,!s.length)return this.setState({isLoading:!1,isLoaded:!1});this.setState({currentIndex:0,isLoading:!0,isLoaded:!1},this.loadImg)}}},{key:"render",value:function(){var t=this.props,s=t.container,n=t.loader,a=t.unloader,o=(t.src,t.decode,t.loaderContainer,t.unloaderContainer,t.mockImage,e(t,["container","loader","unloader","src","decode","loaderContainer","unloaderContainer","mockImage"]));if(this.state.isLoaded){var r=d({},{src:this.sourceList[this.state.currentIndex]},{},o);return s(u.createElement("img",r))}return!this.state.isLoaded&&this.state.isLoading?n?this.loaderContainer(n):null:this.state.isLoaded||this.state.isLoading?void 0:a?this.unloaderContainer(a):null}}]),c}(l.Component));return i(h,"defaultProps",{loader:!1,unloader:!1,decode:!0,src:[],container:function(e){return e}}),h.propTypes={},h}(s("QILm"),s("lwsE"),s("W8MJ"),s("a1gu"),s("Nsbk"),s("PJYZ"),s("7W2i"),s("lSNA"),s("q1tI"),s("17x9"))},BFar:function(e,t,s){"use strict";var n=s("q1tI"),a=s.n(n),o=s("QJSi"),r=a.a.createElement;t.a=function(e){return r(o.f,null,r(o.j,{src:"https://images.idgesg.net/images/article/2019/04/google-drive-docs-suite-logos-100794638-large.jpg",style:{width:"100%",padding:"20px"}}),r(o.g,null,r("p",null,"You can also see the papers on our Google Drive folder, if you are not able to access Dropbox."),r(o.e,{target:"_blank",theme:"success",href:"https://drive.google.com/open?id=1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4"},r("i",{style:{paddingRight:"5px"},class:"fab fa-google-drive"}),"View Folder")))}},BtEH:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},a=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),o=s("q1tI"),r=l(o),i=l(s("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.timeout=void 0,s.handleTriggerClick=s.handleTriggerClick.bind(s),s.handleTransitionEnd=s.handleTransitionEnd.bind(s),s.continueOpenCollapsible=s.continueOpenCollapsible.bind(s),s.setInnerRef=s.setInnerRef.bind(s),e.open?s.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:s.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},s}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e,t){var s=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){s.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.scrollHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.scrollHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){this.props.triggerDisabled||(e.preventDefault(),this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"===typeof this.props.triggerSibling?r.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling?r.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(e){e.target===this.innerRef&&(this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen()))}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},s=this.state.isClosed?"is-closed":"is-open",a=this.props.triggerDisabled?"is-disabled":"",o=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,i=this.props.contentContainerTagName,l=this.props.triggerTagName,c=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,p=this.props.classParentString+"__trigger "+s+" "+a+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),d=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),u=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,f=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return r.default.createElement(i,n({className:d.trim()},this.props.containerElementProps),r.default.createElement(l,{className:p.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var s=t.key;" "!==s&&"Enter"!==s||e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},o),this.renderNonClickableTriggerElement(),r.default.createElement("div",{className:u.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef},r.default.createElement("div",{className:f.trim()},c)))}}]),t}(o.Component);c.propTypes={transitionTime:i.default.number,transitionCloseTime:i.default.number,triggerTagName:i.default.string,easing:i.default.string,open:i.default.bool,containerElementProps:i.default.object,classParentString:i.default.string,openedClassName:i.default.string,triggerStyle:i.default.object,triggerClassName:i.default.string,triggerOpenedClassName:i.default.string,contentOuterClassName:i.default.string,contentInnerClassName:i.default.string,accordionPosition:i.default.oneOfType([i.default.string,i.default.number]),handleTriggerClick:i.default.func,onOpen:i.default.func,onClose:i.default.func,onOpening:i.default.func,onClosing:i.default.func,trigger:i.default.oneOfType([i.default.string,i.default.element]),triggerWhenOpen:i.default.oneOfType([i.default.string,i.default.element]),triggerDisabled:i.default.bool,lazyRender:i.default.bool,overflowWhenOpen:i.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),triggerSibling:i.default.oneOfType([i.default.element,i.default.func]),tabIndex:i.default.number,contentContainerTagName:i.default.string},c.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=c},GUhU:function(e,t,s){"use strict";s.r(t);var n=s("0iUn"),a=s("sLSF"),o=s("MI3g"),r=s("a7VT"),i=s("Tit0"),l=s("q1tI"),c=s.n(l),p=s("QJSi"),d=(s("8Kt/"),s("b6Qr"),s("HUOD")),u=s.n(d),f=(s("gC8A"),s("VUxj")),h=s("uF4S"),m=s("5Yp1"),g=(s("A3CJ"),s("BtEH"),s("6ot8"),c.a.createElement),b=function(e){function t(e){var s;return Object(n.a)(this,t),(s=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={collapse:!1},s}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return g(c.a.Fragment,null,g(m.a,null,g(u.a,{title:"Free CAPE\xae Past Papers eBooks | CXC Spanish Online",pathname:"https://www.cxcspnish/mailing-list",description:"Get free CAPE\xae past papers ebook in preparation for your CXC exams.",siteLanguage:"en",twitterUsername:"_rxheem",author:"Raheem McDonald",article:!0,publishedDate:new Date,modifiedDate:new Date}),g(p.n,null,g(p.c,null,g(p.d,null,g("a",{href:"/"},"Home")),g(p.d,{active:!0},"CAPE Past Papers")),g(f.a,null,g(h.a,{title:"Communication Studies",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Papers 1 and 032 are also included for both units with ES and CP. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482791_2.jpg",href:"https://dl.dropbox.com/s/c8l9q0ql7mracsb/CAPE%20Communication%20Studies%20Past%20Papers%202005-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-communication-studies-past-papers-ebook.html",standalone:"/resources/cape/communication-studies",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE_Communication_Studies.pdf"}),g(h.a,{title:"Caribbean Studies",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482760_24.jpg",href:"https://dl.dropbox.com/s/dv54g2wvjj9uy9s/CAPE%20Caribbean%20Studies%20Past%20Papers%202006-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-caribbean-studies-past-papers-ebook.html",standalone:"/resources/cape/caribbean-studies",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE%20Caribbean%20Studies%20Syllabus.pdf"}),g(h.a,{title:"Computer Science",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482883_4.jpg",href:"https://dl.dropbox.com/s/uifq5ynywxvdga8/CAPE%20Computer%20Science%20Past%20Papers%20u1_U2%202005-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-computer-science-past-papers-ebook.html",standalone:"/resources/cape/computer-science",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE%20Computer%20Science.pdf"}),g(h.a,{title:"Economics",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482081_4.jpg",href:"https://dl.dropbox.com/s/bf25mxz6l6nrz5x/CAPE%20Economics%20Past%20Papers%20U1%20_U2%202005-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-economics-past-papers-ebook.html",standalone:"/resources/cape/economics",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/Economics.pdf"}),g(h.a,{title:"Management of Business",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482111_23.jpg",href:"https://dl.dropbox.com/s/9l4pzd1e1k2566g/CAPE%20Management%20of%20Business%20Past%20Papers%20u1%20_%20U2%202005-201.pdf?dl=0",purchase:"https://cxc-store.com/cape-management-of-business-past-papers-ebook.html",standalone:"/resources/cape/mob",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE%20Management%20of%20Business.pdf"}),g(h.a,{title:"Spanish",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Papers 1 and 3 are also included for both units.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482418_4.jpg",href:"https://dl.dropbox.com/s/bjz288n93t2kein/CAPE%20Spanish%20Past%20Papers.pdf?dl=0",purchase:"https://cxc-store.com/cape-spanish-past-papers-ebook.html",standalone:"/resources/cape/sociology",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE%20Spanish.pdf"}),g(h.a,{title:"French",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Papers 1 and 3 are also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482166_2.jpg",href:"https://dl.dropbox.com/s/5g8gm6h4jcwikex/CAPE%20French%20Past%20Papers%20U1%20_U2%202005-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-french-past-papers-ebook.html",standalone:"/resources/cape/french",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE%20French.PDF"}),g(h.a,{title:"Sociology",description:"This document includes both Units I and II from May 2005 - May 2016. Papers 1 and 032 are also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482050_24.jpg",href:"https://dl.dropbox.com/s/x1h7tmn4lam6ryn/CAPE%20Sociology%20Past%20Papers%20U1%20_U%202005-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-sociology-past-papers-ebook.html",standalone:"/resources/cape/sociology",syllabus:"https://www.cxc.org/SiteAssets/syllabusses/CAPE/CAPESociologySyllabuswithSpecimenPaperaqndMarkScheme1.pdf"}),g(h.a,{title:"Food and Nutrition",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482524_22.jpg",href:"https://dl.dropbox.com/s/9zzq4eehfvjnsrt/CAPE%20Food%20and%20Nutrition%20Past%20Papers%20Ui%20_U2%202005%20-%202016.pdf?dl=0",purchase:"https://cxc-store.com/cape-food-and-nutrition-past-papers-ebook.html",standalone:"/resources/cape/food-and-nutrition",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE%20Food%20and%20Nutrition.pdf"}),g(h.a,{title:"Law",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482180_23.jpg",href:"https://dl.dropbox.com/s/0tdxb2o1fx4k3ti/CAPE%C2%AE%20Law%20Past%20Papers%20u%201%20_%202%202005%20-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-law-past-papers-ebook.html",standalone:"/resources/cape/law",syllabus:""}),g(h.a,{title:"Biology",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482654_3.jpg",href:"https://dl.dropbox.com/s/lzugxqjfns8l7ee/CAPE%20Biology%20Past%20Papers%20unit%201_2%202005-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-biology-past-papers-ebook.html",standalone:"/resources/cape/biology",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE%20Food%20and%20Nutrition.pdf"}),g(h.a,{title:"Agricultural Science",year:"",description:"This document includes both Unit I and Unit II past papers from May/ June 2015 - May/ June 2016. Paper 1 not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9781786322128.jpg",href:"https://dl.dropbox.com/s/eqc4v3bjrk1yh9j/CAPE%20Agricultural%20Science%20Past%20Papers.pdf?dl=0",purchase:"https://cxc-store.com/cape-agricultural-science-past-papers-ebook.html",standalone:"/resources/cape/agricultural-science",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE_AGRICULTURAL_SCIENCE.pdf"}),g(h.a,{title:"Art and Design",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482128_24.jpg",href:"https://dl.dropbox.com/s/ypiop2ihdajo9hj/CAPE%20Art%20and%20Design%20Past%20Papers%20Unit1_2%202005-2016.pdf?dl=0",purchase:"https://cxc-store.com/cape-art-and-design-past-papers-ebook.html",standalone:"/resources/cape/art-and-design",syllabus:""}),g(h.a,{title:"Environmental Science",year:"",description:"This document includes both Units I and II from May 2005 - May 2016. Paper 1 is also included for both units. January resits are not included.",imgSrc:"https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481978_22.jpg",href:"https://dl.dropbox.com/s/5q7ordpl6wqf8sc/CAPE%20Environmental%20Science%20Past%20Papers%20Unit%201%20_%20%40%202005%20-%202016.pdf?dl=0",purchase:"https://cxc-store.com/cape-environmental-science-past-papers-ebook.html",standalone:"/resources/cape/environmental-science",syllabus:"https://cxc.org/SiteAssets/syllabusses/CAPE/CAPE%20Environmental%20Science.pdf"})))))}}]),t}(c.a.Component);t.default=b},Nsbk:function(e,t){function s(t){return e.exports=s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(t)}e.exports=s},QILm:function(e,t,s){var n=s("8OQS");e.exports=function(e,t){if(null==e)return{};var s,a,o=n(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}},SksO:function(e,t){function s(t,n){return e.exports=s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(t,n)}e.exports=s},VUxj:function(e,t,s){"use strict";var n=s("q1tI"),a=s.n(n),o=s("QJSi"),r=(s("u1ig"),s("WUji")),i=(s("BFar"),s("b6Qr")),l=(s("6ot8"),s("bcyd")),c=a.a.createElement,p={display:"inline!important",paddingLeft:"50px"},d={display:"inline"},u={listStyleType:"none",paddingTop:"15px"};t.a=function(e){return c("div",null,c(o.C,null,c(o.l,{sm:12,md:8,lg:8,xl:8},e.children,c(i.BrowserView,null,c("br",null),c(o.f,null,c("span",{className:"border border-light"},c("ul",{style:u},c("li",{style:d},c("i",{style:{color:"#8a3ab9"},className:"fab fa-instagram"}),c("a",{className:"text-muted",style:{paddingLeft:"10px"},href:"https://www.instagram.com/cxcspanish/",target:"_blank"},"cxcspanish")),c("li",{style:p},c("i",{style:{color:" #3b5998"},className:"fab fa-facebook"}),c("a",{className:"text-muted",style:{paddingLeft:"10px"},href:"https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii",target:"_blank"},"CXC Spanish Gude")),c("li",{style:p},c("i",{style:{color:"#00acee"},className:"fab fa-twitter"}),c("a",{className:"text-muted",style:{paddingLeft:"10px"},href:"https://www.twitter.com/cxcspanish",target:"_blank"},"cxcspanish"))))))),c(o.l,{sm:12,md:4,lg:4,xl:4},c("br",{className:"d-sm-none"}),c(l.a,null),c("br",null),c(r.a,null))))}},W8MJ:function(e,t){function s(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}},WUji:function(e,t,s){"use strict";var n=s("q1tI"),a=s.n(n),o=s("QJSi"),r=a.a.createElement;t.a=function(e){return r(o.f,null,r(o.j,{src:"https://cdn.blog.psafe.com/en/blog/wp-content/uploads/2016/10/BLOG_EN_0610_The-Benefits-of-Dropbox-for-Your-Android.jpg",style:{width:"100%"}}),r(o.g,null,r("p",null,"Need past papers? We have the past papers booklets and solutions for all CXC subjects."),r(o.e,{target:"_blank",href:"https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0"},r("i",{style:{paddingRight:"5px"},className:"fab fa-dropbox"}),"Get them now")))}},a1gu:function(e,t,s){var n=s("cDf5"),a=s("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}},bcyd:function(e,t,s){"use strict";var n=s("q1tI"),a=s.n(n),o=s("QJSi"),r=s("6ot8"),i=a.a.createElement;t.a=function(e){return i("div",null,i(o.f,null,i(o.g,null,i(o.k,{className:""},"Quick Read"),i("br",null),i("ul",{style:{marginLeft:"-25px",listStyleType:"none"}},i("li",null,i(r.a,{title:"Exam Preparation Tips",href:"https://dl.dropbox.com/s/4g3yvg26k5ef4kf/Exam%20Preparation%20%233.pdf?dl=0"})),i("li",{style:{paddingTop:"10px"}},i(r.a,{title:"Study Tips",href:"https://dl.dropbox.com/s/ap42b9b9wqvyy56/Exam%20Preparation%20%232%20%281%29.pdf?dl=0"})),i("li",{style:{paddingTop:"10px"}},i(r.a,{title:"Tips for Parents and Students",href:"https://dl.dropbox.com/s/u11rjf2ez6wkiqq/Tips%20for%20Parents%20and%20Students.pdf?dl=0"})),i("li",{style:{paddingTop:"10px"}},i(r.a,{title:"1st Year Spanish Paper",href:"https://dl.dropbox.com/s/lco1djtd7qeq95n/SPAN1001%201.pdf?dl=0"}))),i("br",null),i("br",null),i(o.k,{className:""},"Essentials"),i("br",null),i("ul",{style:{marginLeft:"-25px",listStyleType:"none"}},i("li",null,i(r.a,{title:"Spanish For Dummies",href:"https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"})),i("li",{style:{paddingTop:"10px"}},i(r.a,{title:"Modern Spanish Grammar",href:"https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"})),i("li",{style:{paddingTop:"10px"}},i(r.a,{title:"Spanish Basics",href:"https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"}))))))}},cDf5:function(e,t){function s(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=s=function(e){return typeof e}:e.exports=s=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(t)}e.exports=s},gC8A:function(e,t,s){"use strict";var n=s("0iUn"),a=s("sLSF"),o=s("MI3g"),r=s("a7VT"),i=s("AT/M"),l=s("Tit0"),c=s("q1tI"),p=s.n(c),d=s("QJSi"),u=s("BtEH"),f=s.n(u),h=p.a.createElement;p.a.Component},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},sej4:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cape-papers",function(){return s("GUhU")}])},uF4S:function(e,t,s){"use strict";var n=s("q1tI"),a=s.n(n),o=s("QJSi"),r=s("yNYL"),i=s.n(r),l=s("A3CJ"),c=s.n(l),p=s("b6Qr"),d=a.a.createElement;t.a=function(e){return d("div",null,d(o.C,null,d(o.l,{sm:12,md:3,lg:3,xl:3},d("a",{href:e.href},d(c.a,{className:"card-img",style:{width:"100%"},src:e.imgSrc})),d("br",{className:"d-sm-none"})),d(o.l,{sm:12,md:9,lg:9,xl:9},d(o.f,null,d(o.g,null,d("h6",null,e.title),d("p",null,e.description),d(p.MobileView,null,d("a",{href:e.href},d(i.a,{name:"file-pdf",style:{color:"#f00",paddingRight:"10px"}}),"PDF Download")),d(p.BrowserView,null,d("br",null),d(o.C,null,d(o.l,{sm:6,md:4,lg:4,xl:4},d("a",{href:e.href},d(i.a,{name:"file-pdf",style:{color:"#f00",paddingRight:"10px"}}),"PDF Download")),d(o.l,{sm:6,md:4,lg:4,xl:4},d("a",{target:"_blank",href:e.purchase},"Purchase",d(i.a,{name:"external-link-alt",style:{color:"skyblue",paddingLeft:"10px"}}))),d(o.l,{sm:6,md:4,lg:4,xl:4},d("a",{target:"_blank",href:e.syllabus},"Syllabus"),d("a",{href:e.standalone})))))))),d("br",null))}}},[["sej4",1,0]]]);