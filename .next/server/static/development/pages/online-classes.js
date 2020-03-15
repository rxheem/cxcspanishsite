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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/animate.css":
/*!********************************!*\
  !*** ./assets/css/animate.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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

/***/ "./assets/js/cloudflare.js":
/*!*********************************!*\
  !*** ./assets/js/cloudflare.js ***!
  \*********************************/
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

/***/ "./assets/js/mailchimp.js":
/*!********************************!*\
  !*** ./assets/js/mailchimp.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./assets/js/onesignal.js":
/*!********************************!*\
  !*** ./assets/js/onesignal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var OneSignal; }

/***/ }),

/***/ "./assets/js/quantcast.js":
/*!********************************!*\
  !*** ./assets/js/quantcast.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var _qevents; }

/***/ }),

/***/ "./assets/js/rocketloader.js":
/*!***********************************!*\
  !*** ./assets/js/rocketloader.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

if (false) {}

/***/ }),

/***/ "./common/SocialLinks.js":
/*!*******************************!*\
  !*** ./common/SocialLinks.js ***!
  \*******************************/
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

const SocialLinks = props => __jsx("div", null, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["BrowserView"], null, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("span", {
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
    color: "red"
  },
  className: "fab fa-youtube"
}), __jsx("a", {
  className: "text-muted",
  style: {
    paddingLeft: "10px"
  },
  href: "https://www.youtube.com/channel/UC0eO_ApReknTjj50B7_LQyw",
  target: "_blank"
}, "CXC Spanish Online")))))));

/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

/***/ }),

/***/ "./components/CoronaVirusTip.js":
/*!**************************************!*\
  !*** ./components/CoronaVirusTip.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CoronaVirusTip = props => __jsx("div", {
  className: "text-center"
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
  theme: "danger"
}, "Coronavirus: Safety and Readiness Tips for You.", " ", __jsx("a", {
  className: "alert-link",
  target: "_blank",
  href: "https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html"
}, "Learn more.")));

/* harmony default export */ __webpack_exports__["default"] = (CoronaVirusTip);

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
/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-obfuscate */ "react-obfuscate");
/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_obfuscate__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Footer = props => __jsx("footer", null, __jsx("div", {
  className: "bg-light"
}, __jsx("br", null), __jsx("br", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  href: "/stories/el-amigo-fiel"
}, "El Amigo Fiel"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-dark",
  href: "/stories/la-llorona"
}, "La Llorona"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-dark",
  href: "/stories/estrellita-de-oro"
}, "Estrellita de Oro"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-dark",
  href: "/stories/la-muneca-menor"
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
}, __jsx(react_obfuscate__WEBPACK_IMPORTED_MODULE_4___default.a, {
  tel: "876-565-3942"
})))))), __jsx("br", null), __jsx("br", null))), __jsx("div", {
  className: "bg-dark"
}, __jsx("br", null), " ", __jsx("br", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  href: "www.passmycxc.com",
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
  href: "/online-classes"
}, "Online Classes"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/past-papers"
}, "CSEC Past Papers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/cape-papers"
}, "CAPE Past Papers"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/meetings"
}, "Online Meetings"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/orals"
}, "Oral Exercise"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/topics/directed-situations"
}, "Directed Situation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/topics/letter-writing"
}, "Letter Writing")))), __jsx("br", null), " ", __jsx("br", null))), __jsx("br", null), __jsx("div", {
  className: "container-fluid"
}, __jsx("p", {
  className: "float-right"
}, __jsx("a", {
  href: "/sitemap.xml"
}, "Sitemap")), __jsx("p", null, "\xA9 Raheem McDonald \xB7 ", __jsx("a", {
  href: "/privacy"
}, "Privacy"), " \xB7", " ", __jsx("a", {
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
}), __jsx("script", {
  "data-ad-client": "ca-pub-3324704295062750",
  async: true,
  src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
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
}), __jsx("script", {
  src: "https://cdn.onesignal.com/sdks/OneSignalSDK.js",
  async: ""
}), __jsx("script", {
  type: "text/javascript",
  src: "//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js",
  "data-dojo-config": "usePlainJson: true, isDebug: false"
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
/* harmony import */ var _MiniNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniNav */ "./components/MiniNav.js");
/* harmony import */ var _SlideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SlideMenu */ "./components/SlideMenu.js");
/* harmony import */ var _SystemInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SystemInfo */ "./components/SystemInfo.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HeaderImports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeaderImports */ "./components/HeaderImports.js");
/* harmony import */ var _CoronaVirusTip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CoronaVirusTip */ "./components/CoronaVirusTip.js");
/* harmony import */ var _OverheadAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OverheadAlert */ "./components/OverheadAlert.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shards-ui/dist/css/shards.css */ "./node_modules/shards-ui/dist/css/shards.css");
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/css/carousel.css */ "./assets/css/carousel.css");
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/css/nf-carousel.css */ "./assets/css/nf-carousel.css");
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/css/animate.css */ "./assets/css/animate.css");
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/css/master.css */ "./assets/css/master.css");
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_css_master_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/js/rocketloader.js */ "./assets/js/rocketloader.js");
/* harmony import */ var _assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/js/cloudflare.js */ "./assets/js/cloudflare.js");
/* harmony import */ var _assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/js/fontawesome.js */ "./assets/js/fontawesome.js");
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/js/mixpanel.js */ "./assets/js/mixpanel.js");
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/js/quantcast.js */ "./assets/js/quantcast.js");
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/js/mailchimp.js */ "./assets/js/mailchimp.js");
/* harmony import */ var _assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/js/onesignal.js */ "./assets/js/onesignal.js");
/* harmony import */ var _assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-messenger-customer-chat */ "react-messenger-customer-chat");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @sentry/browser */ "@sentry/browser");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_sentry_browser__WEBPACK_IMPORTED_MODULE_25__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // Assets






 // Javascript





 // import "../assets/js/tawkto.js";


 // Other


 // Google Analytics

react_ga__WEBPACK_IMPORTED_MODULE_23___default.a.initialize("UA-146229442-1");


const Push = __webpack_require__(/*! push.js */ "push.js");

if (false) {} // Render on client side


if (false) {}

const Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;
_sentry_browser__WEBPACK_IMPORTED_MODULE_25__["init"]({
  dsn: "https://1ccf463850ed401c9dbbe2a620cb62e4@sentry.io/2633175"
});

const Layout = props => __jsx(Fragment, null, __jsx("div", {
  class: "fb-customerchat",
  attribution: "setup_tool",
  page_id: "105703077445673"
}), __jsx(_NavbarComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_OverheadAlert__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_MiniNav__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("br", null), __jsx("main", {
  role: "main",
  id: "main",
  className: "main"
}, __jsx(Fragment, null, props.children)), __jsx("br", null), __jsx(_MiniNav__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_SystemInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
  hide: true
}), __jsx(_HeaderImports__WEBPACK_IMPORTED_MODULE_7__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/MiniNav.js":
/*!*******************************!*\
  !*** ./components/MiniNav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MiniNav() {
  return __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    fill: true,
    className: "bg-white d-md-none"
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "animated pulse",
    style: {
      animationIterationCount: "infinite"
    },
    active: true,
    href: "/cape-papers"
  }, "CAPE Papers")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/whatsapp-groups"
  }, "Study Groups")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/past-papers"
  }, "CSEC Papers")));
}

/* harmony default export */ __webpack_exports__["default"] = (MiniNav);

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
/* harmony import */ var _SlideMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SlideMenu */ "./components/SlideMenu.js");








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
    return __jsx("header", null, __jsx(_SlideMenu__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
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
    }, "Directed Situations"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
      hidden: true
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/verb-tenses"
    }, "Verb Tenses")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
      open: this.state.dropdownOpen2,
      toggle: this.toggleDropdown2
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
      className: "text-white",
      nav: true,
      caret: true
    }, "Essentials"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/dime"
    }, "Dime Series"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/listening"
    }, "Listening Exercises"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/reading"
    }, "Reading Exercises"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/writing/"
    }, "Writing Exercises"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
      href: "/orals"
    }, "Speaking Exercises"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/past-papers"
    }, "Past Papers")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/cape-papers"
    }, "CAPE")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/study-groups"
    }, "Study Groups"))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
      navbar: true,
      className: "ml-auto"
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/online-classes"
    }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        padding: "7px"
      },
      name: "book"
    }), "Online Classes")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
      className: "text-white",
      href: "/about-us"
    }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default.a, {
      style: {
        padding: "7px"
      },
      name: "users"
    }), "About Us")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
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
    }), "Contact"))))), __jsx("a", {
      href: "/feed"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);

/***/ }),

/***/ "./components/OverheadAlert.js":
/*!*************************************!*\
  !*** ./components/OverheadAlert.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const number = Math.floor(Math.random() * 5 + 1);

class OverheadAlert extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (number == 1 || number == 4 || number == 5) {
      return __jsx("div", {
        className: "text-center"
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
        style: {
          margin: "auto"
        },
        theme: "info"
      }, "School closed due to Coronvirus COVID-19? Join our free online classes", " ", __jsx("a", {
        className: "alert-link",
        href: "/online-classes"
      }, "here")));
    } else if (number == 2) {
      return __jsx("div", {
        className: "text-center"
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
        style: {
          margin: "auto"
        },
        theme: "info"
      }, "Get the January 2020 paper.", " ", __jsx("a", {
        className: "alert-link",
        href: "https://dl.dropbox.com/s/vw2x48f3ctchz4p/Spanish%20Jan%202020%20P2.pdf.pdf?dl=0"
      }, "Download now")));
    } else if (number == 3) {
      return __jsx("div", {
        className: "text-center"
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
        style: {
          margin: "auto"
        },
        theme: "danger"
      }, "Coronavirus COVID-19 safety tips:", " ", __jsx("a", {
        target: "_blank",
        className: "alert-link",
        href: "https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html"
      }, "Learn more")));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OverheadAlert);

/***/ }),

/***/ "./components/SlideMenu.js":
/*!*********************************!*\
  !*** ./components/SlideMenu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class SlideMenu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["BrowserView"], null, __jsx("div", {
      style: {
        display: "none"
      }
    }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_1__["slide"], null, __jsx("br", null), __jsx("br", null), __jsx("a", {
      style: {
        color: "white"
      }
    }, "Guides"), __jsx("br", null), __jsx("a", {
      className: "menu-item",
      href: "/"
    }), __jsx("a", {
      className: "menu-item",
      href: "/about"
    }), __jsx("a", {
      className: "menu-item",
      href: "/contact"
    }), __jsx("br", null), __jsx("br", null), __jsx("a", {
      style: {
        color: "white"
      }
    }, "Guides"), __jsx("br", null), __jsx("a", {
      id: "home",
      className: "menu-item",
      href: "/listening-exercises/spanish-curse-words"
    }, "Spanish Curse Words"), __jsx("a", {
      target: "_blank",
      className: "menu-item",
      href: "https://mydailyspanish.com/spanish-curse-words/"
    }, "NSFW Words"), __jsx("a", {
      target: "_blank",
      className: "menu-item",
      href: "https://www.hookupspanish.com/spanish-sex-phrases/"
    }, "Spanish Sex Talk"), __jsx("a", {
      target: "_blank",
      className: "menu-item--small",
      href: "https://www.fluentu.com/blog/spanish/flirting-in-spanish/"
    }, "Flirting in Spanish"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SlideMenu);

/***/ }),

/***/ "./components/SystemInfo.js":
/*!**********************************!*\
  !*** ./components/SystemInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  detect
} = __webpack_require__(/*! detect-browser */ "detect-browser");

let now = new Date();
let currentBrowser = null;

class SystemInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      browser: ""
    };
  }

  componentDidMount() {
    if (false) {}
  }

  render() {
    if (this.props.hide == true) {
      return null;
    } else {
      return __jsx("div", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("p", null, "Browser: ", __jsx("b", null, this.state.browser))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        interval: 0
      }, now))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SystemInfo);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

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

/***/ "./pages/online-classes.js":
/*!*********************************!*\
  !*** ./pages/online-classes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "react-bootstrap/Table");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-seo-component */ "react-seo-component");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-clipboard.js */ "react-clipboard.js");
/* harmony import */ var react_clipboard_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_clipboard_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_SocialLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/SocialLinks */ "./common/SocialLinks.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class OnlineClasses extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
      title: "Free Online CSEC Classes | Guide, Past Papers and Exercises",
      description: "Are you or others impacted by school closures? We've put together online classes to help you pass your CXC exams with CXC Spanish Online 2020.",
      image: "",
      pathname: "https://www.cxcspanish.com/online-classes",
      siteLanguage: "en",
      siteLocale: "en",
      twitterUsername: "_rxheem"
    }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
      href: "/"
    }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
      active: true
    }, "Online Classes")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 12,
      md: 8
    }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
      style: {
        width: "100%"
      },
      src: "https://www.edtechteam.com/wp-content/uploads/2019/11/Google-Classroom-Hero-V2.png"
    })), __jsx("br", null), __jsx("br", null), __jsx("p", null, "Are you or others impacted by school closures? We've created a series of free online classes to study at home to help you pass your CSEC and CAPE exams. Online classes will include:"), __jsx("ul", {
      className: "ul-st"
    }, __jsx("li", null, "Access to past papers and worked papst paper solutions"), __jsx("li", null, "Live classes and interactive discussions"), __jsx("li", null, "Classwork and assignemnts with feedback"), __jsx("li", null, "Working with other students from across the Caribbean on projects"), __jsx("li", null, "Please note that we also have the", " ", __jsx("a", {
      href: "/past-papers"
    }, "CSEC"), " and", " ", __jsx("a", {
      href: "/cape-papers"
    }, "CAPE"), " past papers online.", " ")), __jsx("p", null, "Classes will be held via", " ", __jsx("a", {
      href: "https://classroom.google.com/",
      target: "_blank"
    }, "Google Classroom"), ". Download the official Google Classroom app", " ", __jsx("a", {
      href: "https://play.google.com/store/apps/details?id=com.google.android.apps.classroom&hl=en",
      target: "_blank"
    }, "here for iOS"), " ", "or", " ", __jsx("a", {
      href: "https://apps.apple.com/us/app/google-classroom/id924620788",
      target: "_blank"
    }, "here for Android."), " "), __jsx(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2___default.a, {
      striped: true,
      bordered: true,
      hover: true
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Subject"), __jsx("th", null, "Classroom Code"), __jsx("th", null, "Tutorial Time"))), __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, "English A "), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "hmsl6a4")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Spanish"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "52e37y6")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Information Technology"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "5n77ikb")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "CAPE Computer Science"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "qrjafhq")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Mathematics"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "yi2dazw")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Geography"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "gaoy4ms")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Chemistry"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "5l7akds")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Physics"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "sc5m3jg")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Biology"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "77s7fou")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Principles of Accounts"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "hkvl6jq")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))), __jsx("tr", null, __jsx("td", null, "Principles of Business"), __jsx("td", null, __jsx("a", {
      href: "#"
    }, "o3bcgp4")), __jsx("td", null, __jsx("span", {
      style: {
        color: "red",
        fontWeight: "bold"
      }
    }, "TBA"))))), __jsx("br", null), __jsx("p", null, "Would you like to contribute to our initiative? Are you a teacer or studied any one of the above referenced subjects recently? Send us an email at", " ", __jsx("a", {
      href: "mailto:holacxcspanish@gmail.com"
    }, "holacxcspanish@gmail.com"), " ", "with your available times along with any study notes, videos and resoucres!"), __jsx(_common_SocialLinks__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 12,
      md: 4
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OnlineClasses);

/***/ }),

/***/ 5:
/*!***************************************!*\
  !*** multi ./pages/online-classes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheemmcdonald/Desktop/cxcspanish/pages/online-classes.js */"./pages/online-classes.js");


/***/ }),

/***/ "@sentry/browser":
/*!**********************************!*\
  !*** external "@sentry/browser" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sentry/browser");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "detect-browser":
/*!*********************************!*\
  !*** external "detect-browser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("detect-browser");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "push.js":
/*!**************************!*\
  !*** external "push.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("push.js");

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

/***/ "react-bootstrap/Table":
/*!****************************************!*\
  !*** external "react-bootstrap/Table" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-clipboard.js":
/*!*************************************!*\
  !*** external "react-clipboard.js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-clipboard.js");

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

/***/ "react-messenger-customer-chat":
/*!************************************************!*\
  !*** external "react-messenger-customer-chat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "react-obfuscate":
/*!**********************************!*\
  !*** external "react-obfuscate" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-obfuscate");

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
//# sourceMappingURL=online-classes.js.map