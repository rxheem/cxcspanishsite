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

/***/ "./common/PDFFile.js":
/*!***************************!*\
  !*** ./common/PDFFile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PDFFile = props => __jsx("a", {
  href: props.href,
  download: true
}, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: "file-pdf",
  style: {
    color: "#f00"
  }
}), __jsx("span", {
  className: "",
  style: {
    paddingLeft: "10px"
  }
}, props.title));

/* harmony default export */ __webpack_exports__["default"] = (PDFFile);

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




const Footer = props => __jsx("footer", null, __jsx("br", null), __jsx("div", {
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
  href: "https://www.dropbox.com/s/h76ga6bxhdeex94/CSEC%C2%AE%20Spanish%20Past%20Papers-2_nodrm%20%281%29.pdf?dl=0"
}, "CSEC"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "https://www.dropbox.com/s/bjz288n93t2kein/CAPE%20Spanish%20Past%20Papers.pdf?dl=0"
}, "CAPE"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "https://www.dropbox.com/sh/0iwksvyxx6hnx8u/AADS2oBLhV7Ouofp9d0fc593a?dl=0"
}, "View Archives")), __jsx("br", null), __jsx("h6", null, __jsx("a", {
  style: {
    color: "black"
  },
  href: "/mailing-list"
}, "Mailing List")), __jsx("p", null, "Subscribe to our mailing list and get free weelkly emails, past papers and exercise booklets."), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["FormInput"], {
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
  href: "https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii"
}, __jsx("i", {
  style: {
    color: " #3b5998"
  },
  className: "fab fa-facebook fa-2x"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "https://www.instagram.com/cxcspanish/"
}, __jsx("i", {
  style: {
    color: "#8a3ab9"
  },
  className: "fab fa-instagram fa-2x"
})), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  target: "_blank",
  href: "https://www.twitter.com/cxcspanish"
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
}, "Privacy"), " \xB7 ", __jsx("a", {
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
}), __jsx("link", {
  type: "image/jpg",
  rel: "icon",
  href: "https://i.imgur.com/stMN66u.jpg"
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
  name: "language",
  content: "EN"
}), __jsx("meta", {
  name: "fb:page_id",
  content: "105703077445673"
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
  content: "CXC Spanish Online"
}), __jsx("meta", {
  name: "HandheldFriendly",
  content: "True"
}), __jsx("meta", {
  name: "MSThemeCompatible",
  content: "no"
}), __jsx("meta", {
  name: "apple-mobile-web-app-capable",
  content: "yes"
}), __jsx("meta", {
  name: "apple-mobile-web-app-status-bar-style",
  content: "translucent black"
}), __jsx("meta", {
  name: "msapplication-navbutton-color",
  content: "translucent black"
}), __jsx("meta", {
  name: "mssmarttagspreventparsing",
  content: "true"
}), __jsx("meta", {
  name: "theme-color",
  content: "#b1cff4"
}), __jsx("meta", {
  "http-equiv": "Page-Enter",
  content: "RevealTrans(Duration=1.0,Transition=1)"
}), __jsx("meta", {
  "http-equiv": "Page-Exit",
  content: "RevealTrans(Duration=1.0,Transition=1)"
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

if (false) {}

const Layout = props => __jsx(Fragment, null, __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15___default.a, {
  pageId: "105703077445673",
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
    this.toggleDropdown2 = this.toggleDropdown2.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      title: "CXC Spanish Online",
      dropdownOpen: false,
      dropdownOpen2: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState(_objectSpread({}, this.state, {}, {
      dropdownOpen: !this.state.dropdownOpen
    }));
  }

  toggleDropdown2() {
    this.setState(_objectSpread({}, this.state, {}, {
      dropdownOpen2: !this.state.dropdownOpen2
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
      open: this.state.dropdownOpen2,
      toggle: this.toggleDropdown2
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
      className: "text-white",
      nav: true,
      caret: true
    }, "Essentials"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/listening"
    }, "Listening Exercises"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/reading"
    }, "Reading Exercises"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/writing/"
    }, "Writing Exercises"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/speaking"
    }, "Speaking Exercises"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/verb-tenses"
    }, "Verb Tenses")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
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
      href: "/resources"
    }, "Resources")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/whatsapp-groups"
    }, "Chat"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
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

/***/ "./orals-components/OralsLayout.js":
/*!*****************************************!*\
  !*** ./orals-components/OralsLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-collapsible */ "react-collapsible");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/PDFFile */ "./common/PDFFile.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Style for the onft icons

const liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};
const oLiStyles = {
  display: "inline"
};
const ulStyles = {
  listStyleType: "none",
  paddingTop: "15px"
};

const OralsLayout = props => __jsx("div", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8
}, props.children, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], null, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("span", {
  className: "border border-light"
}, __jsx("ul", {
  style: ulStyles
}, __jsx("li", {
  style: oLiStyles
}, __jsx("i", {
  style: {
    color: "#8a3ab9"
  },
  className: "fab fa-instagram"
}), __jsx("a", {
  className: "text-muted",
  style: {
    paddingLeft: "10px"
  },
  href: "https://www.instagram.com/cxcspanish/",
  target: "_blank"
}, "cxcspanish")), __jsx("li", {
  style: liStyles
}, __jsx("i", {
  style: {
    color: " #3b5998"
  },
  className: "fab fa-facebook"
}), __jsx("a", {
  className: "text-muted",
  style: {
    paddingLeft: "10px"
  },
  href: "https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii",
  target: "_blank"
}, "CXC Spanish Gude")), __jsx("li", {
  style: liStyles
}, __jsx("i", {
  style: {
    color: "#00acee"
  },
  className: "fab fa-twitter"
}), __jsx("a", {
  className: "text-muted",
  style: {
    paddingLeft: "10px"
  },
  href: "https://www.twitter.com/cxcspanish",
  target: "_blank"
}, "cxcspanish"))))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx("br", {
  className: "d-sm-none"
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
  className: ""
}, "Essentials"), __jsx("br", null), __jsx("ul", {
  style: {
    marginLeft: "-30px",
    listStyleType: "none"
  }
}, __jsx("li", null, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
  title: "Spanish For Dummies",
  href: "https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"
})), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
  title: "Modern Spanish Grammar",
  href: "https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"
})), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_4__["default"], {
  title: "Spanish Basics",
  href: "https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"
}))))))));

/* harmony default export */ __webpack_exports__["default"] = (OralsLayout);

/***/ }),

/***/ "./pages/orals.js":
/*!************************!*\
  !*** ./pages/orals.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-seo-component */ "react-seo-component");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _orals_components_OralsLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../orals-components/OralsLayout */ "./orals-components/OralsLayout.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-collapsible */ "react-collapsible");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Layout





var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
console.log(today);

const Orals = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
  title: "Orals | CXC Spanish Online",
  pathname: "https://www.cxcspnish/mailing-list",
  description: "Practice for your Spanish oral exam with our online study guide. Listen to responses from natives, teachers and other students.",
  siteLanguage: "en",
  twitterUsername: "_rxheem",
  author: "Raheem McDonald",
  article: true,
  publishedDate: "01/13/2020",
  modifiedDate: today
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
  href: "/"
}, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
  active: true
}, "Orals")), __jsx(_orals_components_OralsLayout__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 9,
  lg: 9,
  xl: 9
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Orals"), __jsx("br", null), __jsx("p", null, "Practice for your Spanish oral exam with our oral practice guide. We've taken and listed questions from multiple past papers so you can practice with your friends, in class and in your spare time."), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6
}, __jsx("h6", null, "Responses to Instructions"), __jsx("br", null), __jsx("ul", {
  style: {
    marginLeft: "-20px"
  }
}, __jsx("li", null, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_8___default.a, {
  trigger: __jsx("a", {
    href: ""
  }, "June 2007 Paper")
}, __jsx("div", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("ul", {
  style: {
    marginLeft: "-20px"
  }
}, __jsx("li", null, __jsx("a", {
  className: "text-dark",
  href: "/orals/"
}, "Sample 1")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  className: "text-dark",
  href: "/orals/"
}, "Sample 2")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  className: "text-dark",
  href: "/orals/"
}, "Sample 3")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  className: "text-dark",
  href: "/orals/"
}, "Sample 5")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  className: "text-dark",
  href: "/orals/"
}, "Sample 6")))))), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_8___default.a, {
  trigger: __jsx("a", {
    href: ""
  }, "June 2008 Paper")
}, __jsx("div", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("ul", {
  style: {
    marginLeft: "-20px"
  }
}, __jsx("li", null, __jsx("a", {
  className: "text-dark",
  href: "/orals/situations/2008/sample-1"
}, "Sample 1")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  className: "text-dark",
  href: "/orals/situations/2008/sample-2"
}, "Sample 2")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  className: "text-dark",
  href: "/orals/situations/2008/sample-3"
}, "Sample 3")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  className: "text-dark",
  href: "/orals/situations/2008/sample-4"
}, "Sample 4")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  className: "text-dark",
  href: "/orals/situations/2008/sample-5"
}, "Sample 5")))))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6
}, __jsx("br", {
  className: "d-sm-none"
}), __jsx("h6", null, "Conversation"), __jsx("br", null), __jsx("ul", {
  style: {
    marginLeft: "-20px"
  }
}, __jsx("li", null, __jsx("a", {
  href: "/orals/conversation/school"
}, "School and Career")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: "/orals/conversation/sports"
}, "Sports and Recreational")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: "/orals/conversation/home-and-family"
}, "Home and Family")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: "/orals/conversation/travel"
}, "Travel")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: "/orals/conversation/shopping"
}, "Shopping")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: "/orals/conversation/daily-routine"
}, "Daily Routine")))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 3,
  lg: 3,
  xl: 3
}, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["BrowserView"], null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
  src: ["https://www.pinclipart.com/picdir/big/64-644580_motivational-clipart-public-speaking-public-speaking-speech-icon.png", "https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/2/8/2872.9-person-speaking-icon-iconbunny.jpg", "https://i1.wp.com/rekenekt.org/wp-content/uploads/2017/02/speaking-icon.png?w=1216", "https://images.squarespace-cdn.com/content/v1/5b4cb308e2ccd1c969af029f/1573146099582-MLVKYYRLUU40ABWFPXFI/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/Speaking+Icon+3.png?format=100w", "https://images.squarespace-cdn.com/content/v1/5b4cb308e2ccd1c969af029f/1573145777438-VEB955GCMMXBLNCON65K/ke17ZwdGBToddI8pDm48kPnsf5mMwK3KDy1tisBlUmRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz-e-UqgkMEfcidCGc60YhJxyx2DguYXodNYGkBnakWNjMf4spqvx95de_vD8JxcLk/Employees.jpg?format=300w"],
  alt: "image of listening",
  style: {
    width: "100%"
  },
  className: "rounded-circle"
})))))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 3,
  lg: 3,
  xl: 3
}, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["BrowserView"], null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
  src: ["https://dl.dropbox.com/s/fof45k0wvwe7d84/kindpng_2270355.png?dl=0", "https://cdn1.iconfinder.com/data/icons/education-1-15/151/26-512.png", "http://icons.iconarchive.com/icons/graphicloads/100-flat/128/student-icon.png", "http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Student-3-icon.png", "https://cdn2.iconfinder.com/data/icons/school-flat-circle/512/Boy_child_kid_school_boy_student-512.png", "https://www.pngkit.com/png/detail/126-1268278_faqs-for-students-college-student-students-icon.png"],
  alt: "image of listening",
  style: {
    width: "100%"
  },
  className: "rounded-circle"
}))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 9,
  lg: 9,
  xl: 9
}, __jsx("br", {
  className: "d-sm-none"
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Student Submissions"), __jsx("br", null), __jsx("p", null, "We aked our stuents for their input as well. Let's hear what the common answers are for the top questions asked during your Spanish orals."), __jsx("a", {
  href: "/orals/student-submissions"
}, "View submissions"))))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Reading Comprehension"), __jsx("br", null), __jsx("p", null, "The reading comprehension aspect of your oral exams assesses your ability to read competently in Spanish."), __jsx("ul", {
  style: {
    marginLeft: "-20px"
  }
}, __jsx("li", null, __jsx("a", {
  href: ""
}, "Purchasing Handicraft")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: ""
}, "A Typical Spanish Dish")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: ""
}, "Attractive Features of Cuba")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: ""
}, "The Hispanic Family")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: ""
}, "The Geography of the Hispanic World")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("a", {
  href: ""
}, "An Ecuadorean Writer")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null)))));

/* harmony default export */ __webpack_exports__["default"] = (Orals);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/orals.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheemmcdonald/Desktop/cxcspanish/pages/orals.js */"./pages/orals.js");


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

/***/ "react-collapsible":
/*!************************************!*\
  !*** external "react-collapsible" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-collapsible");

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

/***/ "react-messenger-customer-chat":
/*!************************************************!*\
  !*** external "react-messenger-customer-chat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "react-seo-component":
/*!**************************************!*\
  !*** external "react-seo-component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-seo-component");

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
//# sourceMappingURL=orals.js.map