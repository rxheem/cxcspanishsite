module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/carousel.css":
/*!*********************************!*\
  !*** ./assets/css/carousel.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/css/master.css":
/*!*******************************!*\
  !*** ./assets/css/master.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/css/nf-carousel.css":
/*!************************************!*\
  !*** ./assets/css/nf-carousel.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/js/facebook.js":
/*!*******************************!*\
  !*** ./assets/js/facebook.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {}

/***/ }),

/***/ "./assets/js/fontawesome.js":
/*!**********************************!*\
  !*** ./assets/js/fontawesome.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

if (false) {}

/***/ }),

/***/ "./assets/js/mixpanel.js":
/*!*******************************!*\
  !*** ./assets/js/mixpanel.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {}

/***/ }),

/***/ "./assets/js/quantcast.js":
/*!********************************!*\
  !*** ./assets/js/quantcast.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var _qevents; }

/***/ }),

/***/ "./common/Message.js":
/*!***************************!*\
  !*** ./common/Message.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Message = props => __jsx("div", null, __jsx("br", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Header, null, __jsx("img", {
  src: "https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__info-512.png",
  className: "rounded mr-2",
  alt: "alert icon",
  style: {
    height: "20px"
  }
}), __jsx("strong", {
  className: "mr-auto"
}, props.title), __jsx("small", null, props.time)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Body, null, props.message)), __jsx("br", null));

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Footer = props => __jsx("footer", null, __jsx("br", null), __jsx("br", null), __jsx("div", {
  className: "bg-light"
}, __jsx("br", null), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx("h6", {
  className: "text-dark"
}, "Read Our Short Stories"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
  className: "flex-column"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-dark",
  href: "/stories/garbancito"
}, "Garbancito"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-dark",
  href: "/stories/"
}, "El Amigo Fiel"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-dark",
  href: "/stories/"
}, "La Llorona"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-dark",
  href: "/stories/"
}, "Estrellita de Oro"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-dark",
  href: "/stories/"
}, "La Mu\xF1eca Menor"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  href: "/short-stories"
}, "View all..."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx("br", {
  className: "d-sm-none"
}), __jsx("h6", {
  className: "text-dark"
}, "Past Papers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
  style: {
    marginLeft: "-15px"
  }
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  downloadable: true,
  target: "_blank",
  href: "https://drive.google.com/file/d/19LPNYdP053Ve3WRtHezISV3M3R-susHK/view"
}, "CSEC"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "https://drive.google.com/file/d/1DGTAPLcjmPG21tXmUKa9ZLvLh_IzxAcM/view?usp=sharing"
}, "CAPE"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "https://drive.google.com/drive/u/0/folders/1zPeCEOLnKcTIo5QewZL7YJsm7u9gsTI4"
}, "View Archives")), __jsx("br", null), __jsx("h6", null, "Mailing List"), __jsx("p", null, "Subscribe to our mailing list and get free weelkly emails, past papers and exercise booklets."), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormInput"], {
  placeholder: "Enter email"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx("br", {
  className: "d-sm-none"
}), __jsx("h6", {
  className: "text-dark"
}, "Social Media"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "/"
}, __jsx("i", {
  style: {
    color: " #3b5998"
  },
  className: "fab fa-facebook fa-2x"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "/"
}, __jsx("i", {
  style: {
    color: "#8a3ab9"
  },
  className: "fab fa-instagram fa-2x"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "/"
}, __jsx("i", {
  style: {
    color: "#00acee"
  },
  className: "fab fa-twitter fa-2x"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "/"
}, __jsx("i", {
  style: {
    color: "#c4302b",
    height: "40px"
  },
  className: "fab fa-youtube fa-2x"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "https://chat.whatsapp.com/EWpufXW93Y5G5V9BlOqgRF"
}, __jsx("i", {
  style: {
    color: "#075E54"
  },
  className: "fab fa-whatsapp fa-2x"
}))), __jsx("br", null), __jsx("h6", {
  className: "text-dark"
}, "Contact Us"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
  style: {
    marginLeft: "-15px"
  },
  className: "flex-column"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  href: "mailto:hola@cxcspanish.com"
}, __jsx("i", {
  style: {
    color: "grey"
  },
  className: "fas fa-envelope"
}), __jsx("span", {
  style: {
    paddingLeft: "10px"
  }
}, "hola@cxcspanish.com")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  href: "mailto:holacxcspanish@gmail.com"
}, __jsx("i", {
  style: {
    color: "grey"
  },
  className: "fas fa-envelope"
}), __jsx("span", {
  style: {
    paddingLeft: "10px"
  }
}, "holacxcspanish@gmail.com")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  href: "/"
}, __jsx("i", {
  style: {
    color: "green"
  },
  className: "fas fa-phone"
}), __jsx("span", {
  style: {
    paddingLeft: "10px",
    color: "black"
  }
}, "(876) 565-3942"))))), __jsx("br", null), __jsx("br", null))), __jsx("div", {
  className: "bg-dark"
}, __jsx("br", null), " ", __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx("h6", {
  className: "text-white"
}, "Popular Guides"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
  className: "flex-column"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/guides/study-tips"
}, "Study Tips"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/home"
}, "Pronunciation Tips"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "Adverbs"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "'Ser' vs. 'Estar'"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "Flirting in Spanish"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx("br", {
  className: "d-sm-none"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
  className: "flex-column"
}, __jsx("h6", {
  className: "text-white"
}, "Tools We Use"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "https://www.spanishdict.com",
  target: "_blank"
}, "SpanishDict"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "https://www.cxc.org",
  target: "_blank"
}, "CXC"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "www.cxc-store.com",
  target: "_blank"
}, "CXC Store"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "passmycxc.com",
  target: "_blank"
}, "Pass My CXC"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx("br", {
  className: "d-sm-none"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
  className: "flex-column"
}, __jsx("h6", {
  className: "text-white"
}, "Jump Start"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "Oral Exercise"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/topics/directed-situations"
}, "Directed Situation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/topics/letter-writing"
}, "Letter Writing"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "Contextual Dialogue")))), __jsx("br", null), " ", __jsx("br", null))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("p", {
  className: "float-right"
}, __jsx("a", {
  href: "/sitemap.xml"
}, "Sitemap")), __jsx("p", null, "\xA9 CXC Spanish Online \xB7 ", __jsx("a", {
  href: "about"
}, "About"), " \xB7", __jsx("a", {
  href: "/privacy"
}, " Privacy"), " \xB7 ", __jsx("a", {
  href: "/terms"
}, "Terms"))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/HeaderImports.js":
/*!*************************************!*\
  !*** ./components/HeaderImports.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeaderImports = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  name: "viewport",
  content: "height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui"
}), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("meta", {
  name: "keywords",
  content: "spanish cxc past papers 2019,cxc,csec spanish,spanish jamaica,cxc spanish,cxc spansih jamaica,espanol jamaica, csec spanish past papers, spanish, cape, caribbean examination counsil,caribbean examination counsel, espa\xF1ol, espanol, study guide, study, pass csec spanish exam, caribbean examination counsil,caribbean examination counsel, espa\xF1ol, espanol, study guide, study, directed situations, free response,present tense,imperfect tense,ser vs estar,subjunctive mood,subjunctive tense spanish,reading comprehension,contextual dialogue, contextual announcements, poster,spanish,pass"
}), __jsx("meta", {
  name: "google-site-verification",
  content: "pOpvkLbMYpbgDGKqertoSF1GnBqDsCJM54z7p-JPNYk"
}), __jsx("meta", {
  name: "Classification",
  content: "Education"
}), __jsx("meta", {
  name: "copyright",
  content: "CXC Spanish Online"
}), __jsx("meta", {
  name: "target",
  content: "all"
}), __jsx("meta", {
  name: "audience",
  content: "all"
}), __jsx("meta", {
  name: "coverage",
  content: "Worldwide"
}), __jsx("meta", {
  name: "og:type",
  content: "website"
}), __jsx("meta", {
  name: "author",
  content: "CXC Spanish Online, hola@cxcspanish.com"
}), __jsx("meta", {
  name: "owner",
  content: "CXC Spanish"
}), __jsx("meta", {
  name: "directory",
  content: "submission"
}), __jsx("meta", {
  name: "distribution",
  content: "Global"
}), __jsx("meta", {
  name: "rating",
  content: "General"
}), __jsx("meta", {
  name: "revisit-after",
  content: "1 days"
}), __jsx("meta", {
  "http-equiv": "Expires",
  content: "3\xE5"
}), __jsx("meta", {
  "http-equiv": "Pragma",
  content: "no-cache"
}), __jsx("meta", {
  name: "language",
  content: "EN"
}), __jsx("meta", {
  name: "fb:page_id",
  content: "105703077445673"
}), __jsx("link", {
  rel: "icon",
  content: "../assets/logo.jpg"
}), __jsx("meta", {
  name: "og:site_name",
  content: "CXC Spanish Online"
}), __jsx("meta", {
  name: "robots",
  content: "archive,follow,imageindex,index,odp,snippet,translate"
}), __jsx("meta", {
  name: "fb:page_id",
  content: "105703077445673"
}), __jsx("meta", {
  name: "og:email",
  content: "hola@cxcspanish.com"
}), __jsx("meta", {
  name: "og:locality",
  content: "Kingston"
}), __jsx("meta", {
  name: "og:region",
  content: "JA"
}), __jsx("meta", {
  name: "og:postal-code",
  content: "94304"
}), __jsx("meta", {
  name: "og:country-name",
  content: "Jamaica"
}), __jsx("meta", {
  name: "target",
  content: "all"
}), __jsx("meta", {
  name: "audience",
  content: "all"
}), __jsx("meta", {
  name: "og:type",
  content: "website"
}), __jsx("meta", {
  name: "rating",
  content: "safe for kids"
}), __jsx("meta", {
  name: "og:site_name",
  content: "CSEC Spanish Online"
}));

/* harmony default export */ __webpack_exports__["default"] = (HeaderImports);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarComponent */ "./components/NavbarComponent.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HeaderImports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderImports */ "./components/HeaderImports.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shards-ui/dist/css/shards.css */ "./node_modules/shards-ui/dist/css/shards.css");
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/css/carousel.css */ "./assets/css/carousel.css");
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/css/nf-carousel.css */ "./assets/css/nf-carousel.css");
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/css/master.css */ "./assets/css/master.css");
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_master_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/js/fontawesome.js */ "./assets/js/fontawesome.js");
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/js/mixpanel.js */ "./assets/js/mixpanel.js");
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/js/quantcast.js */ "./assets/js/quantcast.js");
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/js/facebook.js */ "./assets/js/facebook.js");
/* harmony import */ var _assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-messenger-customer-chat */ "react-messenger-customer-chat");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Assets





 // Javascript





 // Other


 // Google Analytics

react_ga__WEBPACK_IMPORTED_MODULE_14___default.a.initialize("UA-146229442-1"); // Render on client side

if (false) {}

const Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;

const Layout = props => __jsx(Fragment, null, __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15___default.a, {
  pageId: "<https://cxcspanish.cxcspanish.now.sh>",
  appId: "669007593616991",
  htmlRef: "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
}), __jsx("div", {
  class: "fb-customerchat",
  attribution: "setup_tool",
  page_id: "105703077445673"
}), __jsx(_NavbarComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("br", null), __jsx("main", {
  role: "main",
  id: "main",
  className: "main"
}, __jsx(Fragment, null, props.children)), __jsx("br", null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_HeaderImports__WEBPACK_IMPORTED_MODULE_4__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavbarComponent.js":
/*!***************************************!*\
  !*** ./components/NavbarComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




class NavbarComponent extends react__WEBPACK_IMPORTED_MODULE_7___default.a.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      title: "CXC Spanish Online",
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState(_objectSpread({}, this.state, {}, {
      dropdownOpen: !this.state.dropdownOpen
    }));
  }

  toggleNavbar() {
    this.setState(_objectSpread({}, this.state, {}, {
      collapseOpen: !this.state.collapseOpen
    }));
  }

  render() {
    return __jsx("header", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
      type: "dark",
      theme: "primary",
      expand: "md"
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavbarBrand"], {
      href: "/"
    }, this.state.title), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavbarToggler"], {
      onClick: this.toggleNavbar
    }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
      open: this.state.collapseOpen,
      navbar: true
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
      navbar: true
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/guide"
    }, "Guides")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
      open: this.state.dropdownOpen,
      toggle: this.toggleDropdown
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
      className: "text-white",
      nav: true,
      caret: true
    }, "Exam Topics"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/topics/directed-situations"
    }, "Directed Situations"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/topics/letter-writing"
    }, "Letter Writing"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/topics/"
    }, "Composition"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/topics/"
    }, "Contextual Announcements"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/topics/"
    }, "Contextual Dialogue"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/topics/"
    }, "Reading Comprehension"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/topics/"
    }, "Directed Situations"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/verb-tenses"
    }, "Verb Tenses")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/resources"
    }, "Resources")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/quiz"
    }, "Quiz")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/forum"
    }, "Forum"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
      navbar: true,
      className: "ml-auto"
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/about-us"
    }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        padding: "7px"
      },
      name: "users"
    }), "About Us")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/tutoring"
    }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        padding: "7px"
      },
      name: "chalkboard-teacher"
    }), "Tutoring")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/FAQ"
    }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        padding: "7px"
      },
      name: "comment"
    }), "FAQ")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/contact"
    }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        padding: "7px"
      },
      name: "id-badge"
    }), "Contact"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);

/***/ }),

/***/ "./home/HomeCarousel.js":
/*!******************************!*\
  !*** ./home/HomeCarousel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const HomeCarousel = props => __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_5__["MobileView"], null, __jsx("br", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
  className: "d-block w-100",
  src: ["https://images.unsplash.com/photo-1532768641073-503a250f9754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", "https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=724&q=80", "https://images.unsplash.com/photo-1500315331616-db4f707c24d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", "https://images.unsplash.com/photo-1546241126-da278b8ec3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"],
  alt: "image of food"
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, __jsx("h3", {
  style: {
    color: "white"
  }
}, __jsx("b", null, "Ordering Food")), __jsx("p", {
  style: {
    color: "white"
  }
}, "Learn how to order food and take-out at restaurants in Spanish"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
  className: "d-block w-100",
  src: ["https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", "https://images.unsplash.com/photo-1495305379050-64540d6ee95d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],
  alt: ""
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, __jsx("h3", {
  style: {
    color: "white"
  }
}, "Express Yourself"), __jsx("p", {
  style: {
    color: "white"
  }
}, "Build confidence and express yourself in Spanish", " "))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Item, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
  className: "d-block w-100",
  src: ["https://images.unsplash.com/photo-1548393488-ae8f117cbc1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80", "", ""],
  alt: ""
}), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"].Caption, null, __jsx("h3", {
  style: {
    color: "white"
  }
}, "Studying late at nights?"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
  href: "/guides/study-tips",
  theme: "light"
}, "Read our Study Guide")))));

/* harmony default export */ __webpack_exports__["default"] = (HomeCarousel);

/***/ }),

/***/ "./home/MailingListSubscribe.js":
/*!**************************************!*\
  !*** ./home/MailingListSubscribe.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class MailingListSubscribe extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
      style: {
        maxHeight: "200px"
      },
      src: "https://webuildsites.com.au/wp-content/uploads/2019/02/how-to-setup-gmail-forwarding-1080x675.jpg"
    }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Joing Our Mailing List"), __jsx("p", null, "Join our mailing list to get free weekly booklets, study notes and exercises right in your email."), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, __jsx("label", {
      htmlFor: "name"
    }, "Full Name"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormInput"], {
      type: "text",
      id: "name",
      placeholder: "Enter name"
    })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, __jsx("label", {
      htmlFor: "#password"
    }, "Email"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormInput"], {
      type: "email",
      id: "email",
      placeholder: "Enter email"
    }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Subscribe \u2192")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MailingListSubscribe);

/***/ }),

/***/ "./home/Marketing.js":
/*!***************************!*\
  !*** ./home/Marketing.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Fragment

const Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;

const Marketing = props => __jsx("div", {
  className: "marketing"
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
  src: ["https://png2.cleanpng.com/sh/83284134f4a955c5a44b2e0333fc81ce/L0KzQYm3VsE4N6ZvepH0aYP2gLBuTgBmdqRuh9C2cnX3ecPsjfVvfF54ed5ucz3lhcTwjvV0e153feZqaXywdbL5Tflkd58yTdQ7NkK6RoW5WfE3QWYzTKsDN0G3QIS4VcI6OmM8SaIDMUezRnB3jvc=/kisspng-pension-retirement-sales-business-retail-ear-icon-5b26276429a695.4987140315292271081706.png", "https://www.colourbox.com/preview/22111544-the-ear-icon-listen-symbol-flat.jpg", "https://comps.gograph.com/ear-icon-in-flat-style-isolated-on-white-background-part-of-body-symbol-stock-vector-illustration_gg88742647.jpg"],
  alt: "image",
  style: {
    height: "180px"
  },
  className: "rounded-circle"
})), __jsx("br", null), __jsx("br", null), __jsx("h2", null, "Listening"), __jsx("p", null, "Improve your Spanish listening skills with audio recordings from native Spanish-speakers, and listen recorded extracts from CXC past papers questions."), __jsx("p", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  theme: "warning",
  href: "#",
  role: "button"
}, "Start Learning \xBB"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
  src: ["https://icons-for-free.com/iconfiles/png/512/equipment+pen+pencil+tool+write+writing+icon-1320165901782992167.png", "https://www.pikpng.com/pngl/m/97-978365_writing-icon-hd-png-download.png", "https://st2.depositphotos.com/4060975/9113/v/950/depositphotos_91131614-stock-illustration-writing-colored-vector-icon.jpg"],
  alt: "",
  style: {
    height: "180px"
  },
  className: "rounded-circle"
})), __jsx("br", null), __jsx("br", null), __jsx("h2", null, "Writing"), __jsx("p", null, "Practice writing for composing your", " ", __jsx("a", {
  href: "/topics/letter-writing"
}, "letter"), " and", " ", __jsx("a", {
  href: "topics/letter-writing"
}, "compositions"), ". Write on a wide range on past-paper topics including crime, drug abuse and contemporary social issues."), __jsx("p", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  theme: "info",
  href: "#",
  role: "button"
}, "Start Learning \xBB"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
  src: ["https://image.flaticon.com/icons/svg/426/426426.svg", "https://previews.123rf.com/images/pandavector/pandavector1701/pandavector170103700/69812068-speaking-mouth-icon-in-flat-style-isolated-on-white-background-interpreter-and-translator-symbol-sto.jpg", "https://assets.dryicons.com/uploads/icon/svg/8859/cdf7ad61-0549-4442-a349-d17717288163.svg"],
  alt: "",
  style: {
    height: "180px"
  },
  className: "rounded-circle"
})), __jsx("br", null), __jsx("br", null), __jsx("h2", null, "Speaking"), __jsx("p", null, "Imporve your ability to speak Spanish fluenty with our accent training exercises, daily paragraph readings and more! Find out how below."), __jsx("p", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  theme: "dark",
  href: "#",
  role: "button"
}, "Start Learning \xBB")))), __jsx("hr", null));

/* harmony default export */ __webpack_exports__["default"] = (Marketing);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/shards-ui/dist/css/shards.css":
/*!****************************************************!*\
  !*** ./node_modules/shards-ui/dist/css/shards.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_HomeCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/HomeCarousel */ "./home/HomeCarousel.js");
/* harmony import */ var _home_Marketing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/Marketing */ "./home/Marketing.js");
/* harmony import */ var _home_MailingListSubscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/MailingListSubscribe */ "./home/MailingListSubscribe.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _common_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Message */ "./common/Message.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Home components



 // Layout




function Error({
  statusCode
}) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "404 Page Not Found | CXC Spanish Guide"), __jsx("meta", {
    name: "og:title",
    content: "404 Page Not Found | CXC Spanish Guide"
  }), __jsx("meta", {
    name: "og:site_name",
    content: "CXC Spanish Online"
  }), __jsx("meta", {
    name: "description",
    content: "We couldn't find the page you were lookign for. Let us help you."
  })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "404 - Page Not Found"))), __jsx(react_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      maxWidth: "100%",
      maxHeight: "100%"
    },
    src: ["https://cdn.shopify.com/s/files/1/0322/6897/files/404-ermalink.png?432866230176278629", "https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/25-Outstanding-404-Page-Examples-You-Have-to-See.webp", "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/404-not-found-t.jpg", "https://www.hover.com/blog/wp-content/uploads/2015/08/404-page-error.png", "https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg", "https://www.cdgi.com/wp-content/uploads/2019/05/404-Pages.jpg", "https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg", "http://smileforevernyc.com/wp-content/uploads/2018/06/404-Error.png", "https://www.jco.fi/wp-content/uploads/2019/10/app.png", "https://cashkaro.com/blog/wp-content/uploads/sites/5/2018/01/404-Status-Checker-Power-Query.png", "https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/3.-dogstudio404.png"],
    alt: "404 image"
  }));
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheemmcdonald/Desktop/cxcspanish/pages/_error.js */"./pages/_error.js");


/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-fontawesome":
/*!************************************!*\
  !*** external "react-fontawesome" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-messenger-customer-chat":
/*!************************************************!*\
  !*** external "react-messenger-customer-chat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "shards-react":
/*!*******************************!*\
  !*** external "shards-react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shards-react");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map