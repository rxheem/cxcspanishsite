module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./assets/js/fontawesome.js":
/*!**********************************!*\
  !*** ./assets/js/fontawesome.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

if (false) {}

/***/ }),

/***/ "./common/Answer.js":
/*!**************************!*\
  !*** ./common/Answer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Answer = props => __jsx("div", null, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: "text-danger",
  name: "angle-double-right"
}), __jsx("span", {
  className: "text-black",
  style: {
    paddingLeft: "5px"
  }
}, props.text), __jsx("p", {
  style: {
    paddingLeft: "18px"
  },
  className: "text-muted"
}, props.translated, __jsx("a", {
  href: props.href,
  className: props.noIcon ? "is-hidden" : null,
  target: "_blank"
}, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
  style: {
    paddingLeft: "10px"
  },
  name: "external-link-alt"
}))));

/* harmony default export */ __webpack_exports__["default"] = (Answer);

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

/***/ "./common/Quote.js":
/*!*************************!*\
  !*** ./common/Quote.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Quote = props => __jsx("div", null, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: "text-danger",
  name: "quote-left"
}), __jsx("span", {
  style: {
    paddingLeft: "5px"
  }
}, props.text));

/* harmony default export */ __webpack_exports__["default"] = (Quote);

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = props => __jsx("footer", null, __jsx("div", {
  className: "bg-dark"
}, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("br", null), __jsx("br", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  href: "/"
}, "SpanishDict"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "CXC"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "CXC Store"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
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
  href: "/home"
}, "Directed Situation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "Letter Writing"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
  className: "text-white",
  href: "/"
}, "Contextual Dialogue")))), __jsx("br", null), " ", __jsx("br", null))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("p", {
  className: "float-right"
}, __jsx("a", {
  href: "#"
}, "Sitemap")), __jsx("p", null, "\xA9 CXC Spanish Online \xB7 ", __jsx("a", {
  href: "about"
}, "About"), " \xB7", __jsx("a", {
  href: "/privacy"
}, " Privacy"), " \xB7 ", __jsx("a", {
  href: "/terms"
}, "Terms"))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shards-ui/dist/css/shards.css */ "./node_modules/shards-ui/dist/css/shards.css");
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/css/carousel.css */ "./assets/css/carousel.css");
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/css/nf-carousel.css */ "./assets/css/nf-carousel.css");
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/css/master.css */ "./assets/css/master.css");
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_master_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/js/fontawesome.js */ "./assets/js/fontawesome.js");
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_9__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Assets





 // Javascript


const Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;

const Layout = props => __jsx(Fragment, null, __jsx(_NavbarComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("br", null), __jsx(Fragment, null, props.children), __jsx("br", null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));

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
    return __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
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
      href: "/faq"
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
    }), "Contact")))));
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

/***/ "./pages/topics/content/ltr-wri/Exercises.js":
/*!***************************************************!*\
  !*** ./pages/topics/content/ltr-wri/Exercises.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/PDFFile */ "./common/PDFFile.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Fragment

const Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;

const Exercises = props => __jsx(Fragment, null, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Exercises"), __jsx("p", null, "Try these exercises taken from past papers."), __jsx("h6", null, "Easy"), __jsx("ul", {
  style: {
    listStyleType: "none",
    marginLeft: "-20px"
  }
}, __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "May/ June 2013",
  href: ""
})), __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "January 2014",
  href: ""
})), __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "May/ June 2014",
  href: ""
})), __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "January 2015",
  href: ""
})), __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "May/ June 2016",
  href: ""
})), __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "May/ June 2017",
  href: ""
})), __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "January 2018",
  href: ""
})), __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "May/ June 2018",
  href: ""
})), __jsx("li", {
  style: {
    paddingBottom: "8px"
  }
}, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "January 2019",
  href: ""
}))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "View Archives \u2192"))));

/* harmony default export */ __webpack_exports__["default"] = (Exercises);

/***/ }),

/***/ "./pages/topics/content/ltr-wri/Guidelines.js":
/*!****************************************************!*\
  !*** ./pages/topics/content/ltr-wri/Guidelines.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Guidelines = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx("h6", null, "Guidelines"), __jsx("p", null, "These are a few guidelines to take in mind when writing your letters"), __jsx("ul", {
  style: {
    marginLeft: "-20px"
  }
}, __jsx("li", {
  style: {
    paddingBottom: "15px"
  }
}, __jsx("b", null, "DO NOT"), " write your real name and address. Include the date in Spanish."), __jsx("li", {
  style: {
    paddingBottom: "15px"
  }
}, "The greeting must be appropriate and agree with the pronoun it proceeds. Some common greetings are:", __jsx("ul", {
  style: {
    paddingTop: "15px"
  }
}, __jsx("li", null, "Querido/a"), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, "Querid\xEDsimo/a"), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, "Mi querid\xEDsima mam\xE1/ t\xEDa"))), __jsx("li", {
  style: {
    paddingBottom: "15px"
  }
}, "The farewell must also be of an appropriate form. One of the following may be used:", __jsx("ul", {
  style: {
    paddingTop: "15px"
  }
}, __jsx("li", null, "Con cari\xF1o"), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, "Un abrazo"), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, "Tu amigo"))), __jsx("li", {
  style: {
    paddingBottom: "15px"
  }
}, "Read through the guidelines carefully adn include all the information required when planning your letter"), __jsx("li", {
  style: {
    paddingBottom: "15px"
  }
}, "Jot down all vocabulary items and expressions that comes to mind"), __jsx("li", {
  style: {
    paddingBottom: "15px"
  }
}, "Use about 30 minutes to write your letter and another 5 - 10 minutes to rea over. Check agreement of nouns and adjectives and ensure that the verbs are conjugated in the correct person, number and tense."), __jsx("li", {
  style: {
    paddingBottom: "15px"
  }
}, "To ensure that you do not exceed your word limit, or write a letter that is far too short, divide your letter into 4 paragraphs using the following format")), __jsx("ul", {
  style: {
    listStyleType: "none",
    marginLeft: "-20px"
  }
}, __jsx("li", null, __jsx("h6", null, "Paragraph 1: ", __jsx("i", null, "(25 words)")), __jsx("p", null, "This paragraph should include enuiries about the person's health and thanks for a previour letter. You should also give a statement of the purpose of the letter.")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("h6", null, "Paragraph 2 and 3: ", __jsx("i", null, "(50 words each)")), __jsx("p", null, "These paragraphs should give the details asked for in the guidelines.", " ")), __jsx("li", {
  style: {
    paddingTop: "10px"
  }
}, __jsx("h6", null, "Paragraph 4: ", __jsx("i", null, "(25 words)")), __jsx("p", null, "This paragraph brings the letter to a close in a manner that is not abrupt and is friendly and polite. You can include statements expressing your wish to receive a reply, and extend your greetings to the rest of the family or friends."))))));

/* harmony default export */ __webpack_exports__["default"] = (Guidelines);

/***/ }),

/***/ "./pages/topics/content/ltr-wri/LetterLayout.js":
/*!******************************************************!*\
  !*** ./pages/topics/content/ltr-wri/LetterLayout.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LetterLayout = props => __jsx("div", null, __jsx("h5", null, "Layout of a Letter"), __jsx("br", null), __jsx("br", null), __jsx("div", {
  style: {
    align: "right"
  }
}, "la fecha"));

/* harmony default export */ __webpack_exports__["default"] = (LetterLayout);

/***/ }),

/***/ "./pages/topics/content/ltr-wri/Message.js":
/*!*************************************************!*\
  !*** ./pages/topics/content/ltr-wri/Message.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Message = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Header, null, __jsx("img", {
  src: "holder.js/20x20?text=%20",
  className: "rounded mr-2",
  alt: ""
}), __jsx("strong", {
  className: "mr-auto"
}, props.title), __jsx("small", null, props.time)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Body, null, props.message)));

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./pages/topics/content/ltr-wri/Overview.js":
/*!**************************************************!*\
  !*** ./pages/topics/content/ltr-wri/Overview.js ***!
  \**************************************************/
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
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Quote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/Quote */ "./common/Quote.js");
/* harmony import */ var _common_Answer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/Answer */ "./common/Answer.js");
/* harmony import */ var _LetterLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LetterLayout */ "./pages/topics/content/ltr-wri/LetterLayout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Components





const Overview = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx("p", null, "The letter writing section on your exam is optional and you can instead choose to write a ", __jsx("a", {
  href: "./composition"
}, "Composition"), ". However, if you choose to do this question is is important to know what is required and how your letter is to be structured."), __jsx("p", null, "You will be given a scenario and a set of instructions that serves as a guide to writing your letter. They are normally directed to a friend, penpal or a member of your family."))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
  theme: "warning"
}, "Your word limit is 130 - 150 words. It is important that you you do no exceed or fall below these limits or else you will be penlized."), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(_LetterLayout__WEBPACK_IMPORTED_MODULE_7__["default"], null))));

/* harmony default export */ __webpack_exports__["default"] = (Overview);

/***/ }),

/***/ "./pages/topics/content/ltr-wri/SampleOne.js":
/*!***************************************************!*\
  !*** ./pages/topics/content/ltr-wri/SampleOne.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Quote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Quote */ "./common/Quote.js");
/* harmony import */ var _common_Answer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/Answer */ "./common/Answer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Components




const SampleOne = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx("p", null, "Let's take a look at an example:"), __jsx(_common_Quote__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, " ", "You participated in an annual competition. Write a letter to your Mexican friend about the experience. Be sure to include"), __jsx("br", null), __jsx("br", null), __jsx("ul", null, __jsx("li", null, "what kind of competition you entered"), __jsx("li", {
    style: {
      paddingTop: "15px"
    }
  }, "how participants normally perpare for this competition"), __jsx("li", {
    style: {
      paddingTop: "15px"
    }
  }, "what you learnt from the experience"), __jsx("li", {
    style: {
      paddingTop: "15px"
    }
  }, "what competitions you plan to enter next year and why")))
}))));

/* harmony default export */ __webpack_exports__["default"] = (SampleOne);

/***/ }),

/***/ "./pages/topics/content/ltr-wri/SampleTwo.js":
/*!***************************************************!*\
  !*** ./pages/topics/content/ltr-wri/SampleTwo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Quote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Quote */ "./common/Quote.js");
/* harmony import */ var _common_Answer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/Answer */ "./common/Answer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Components




const SampleTwo = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx("p", null, "Let's take a look at another one:"), __jsx(_common_Quote__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, " ", "You had been studying overseas but for some reason you have to return home indefinitely. Write a letter to your Puerto Rican friend in which you include"), __jsx("br", null), __jsx("br", null), __jsx("ul", null, __jsx("li", null, "information about your studies"), __jsx("li", {
    style: {
      paddingTop: "15px"
    }
  }, "the reason for your returning home"), __jsx("li", {
    style: {
      paddingTop: "15px"
    }
  }, "how your friends at home reacted to your return"), __jsx("li", {
    style: {
      paddingTop: "15px"
    }
  }, "the plans you have made to continue your studies")))
}))));

/* harmony default export */ __webpack_exports__["default"] = (SampleTwo);

/***/ }),

/***/ "./pages/topics/content/ltr-wri/UsefulEssentials.js":
/*!**********************************************************!*\
  !*** ./pages/topics/content/ltr-wri/UsefulEssentials.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "shards-react");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shards_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_PDFFile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/PDFFile.js */ "./common/PDFFile.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;

const UsefulEssentials = props => __jsx(Fragment, null, __jsx("br", {
  className: "d-sm-none"
}), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx("h5", null, "Useful Essentials"), __jsx("p", null, "These phrases and vocabulary really come in handy when composing you letters. Take a read!"), __jsx("ul", {
  style: {
    listStyleType: "none",
    marginLeft: "-15px"
  },
  className: "list-ul"
}, __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "",
  title: "Common Spanish Phrases"
})), __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "",
  title: "Spanish Adjectives"
})), __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "",
  title: "Spanish Prepositions"
})), __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "",
  title: "Common Spanish Adverbs"
})), __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "",
  title: "Verb Conjugation Refresher"
}))), __jsx("style", null, `
      .list-ul {
        padding-left: 20px;
        margin-top: -10px;
      }

      .list-ul li {
        padding-bottom: 10px;
      }
      `))));

/* harmony default export */ __webpack_exports__["default"] = (UsefulEssentials);

/***/ }),

/***/ "./pages/topics/letter-writing.js":
/*!****************************************!*\
  !*** ./pages/topics/letter-writing.js ***!
  \****************************************/
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
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image */ "react-image");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _content_ltr_wri_Guidelines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/ltr-wri/Guidelines */ "./pages/topics/content/ltr-wri/Guidelines.js");
/* harmony import */ var _content_ltr_wri_Overview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/ltr-wri/Overview */ "./pages/topics/content/ltr-wri/Overview.js");
/* harmony import */ var _content_ltr_wri_Exercises__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/ltr-wri/Exercises */ "./pages/topics/content/ltr-wri/Exercises.js");
/* harmony import */ var _content_ltr_wri_UsefulEssentials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/ltr-wri/UsefulEssentials */ "./pages/topics/content/ltr-wri/UsefulEssentials.js");
/* harmony import */ var _content_ltr_wri_SampleOne__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/ltr-wri/SampleOne */ "./pages/topics/content/ltr-wri/SampleOne.js");
/* harmony import */ var _content_ltr_wri_SampleTwo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/ltr-wri/SampleTwo */ "./pages/topics/content/ltr-wri/SampleTwo.js");
/* harmony import */ var _content_ltr_wri_Message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/ltr-wri/Message */ "./pages/topics/content/ltr-wri/Message.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Layout

 // Components









const LetterWriting = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
  href: "/"
}, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
  href: "/exam-topics"
}, "Exam Topics")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
  active: true
}, "Letter Writing")), __jsx("h4", null, "Letter Writing"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
  defaultActiveKey: "overview",
  id: uuid__WEBPACK_IMPORTED_MODULE_4___default()()
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
  eventKey: "overview",
  title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      maxHeight: "15px",
      paddingRight: "7px"
    },
    src: ["https://cdn.icon-icons.com/icons2/547/PNG/512/1455554327_line-12_icon-icons.com_53320.png", "https://cdn.icon-icons.com/icons2/196/PNG/128/mail_23797.png", "https://cdn.icon-icons.com/icons2/196/PNG/128/compose_23855.png"],
    alt: "image"
  }), "Overview")
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, __jsx(_content_ltr_wri_Overview__WEBPACK_IMPORTED_MODULE_7__["default"], null))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
  eventKey: "guidelines",
  title: "Guidelines"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, __jsx(_content_ltr_wri_Guidelines__WEBPACK_IMPORTED_MODULE_6__["default"], null))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
  eventKey: "sample1",
  title: "Sample 1"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, __jsx(_content_ltr_wri_SampleOne__WEBPACK_IMPORTED_MODULE_10__["default"], null))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
  eventKey: "sample2",
  title: "Sample 2"
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, __jsx(_content_ltr_wri_SampleTwo__WEBPACK_IMPORTED_MODULE_11__["default"], null))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: 12,
  md: 4,
  lg: 4,
  xl: 4
}, __jsx(_content_ltr_wri_UsefulEssentials__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_content_ltr_wri_Exercises__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_content_ltr_wri_Message__WEBPACK_IMPORTED_MODULE_12__["default"], null)))));

/* harmony default export */ __webpack_exports__["default"] = (LetterWriting);

/***/ }),

/***/ 4:
/*!**********************************************!*\
  !*** multi ./pages/topics/letter-writing.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheemmcdonald/Desktop/cxcspanish/pages/topics/letter-writing.js */"./pages/topics/letter-writing.js");


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

/***/ "react-fontawesome":
/*!************************************!*\
  !*** external "react-fontawesome" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "shards-react":
/*!*******************************!*\
  !*** external "shards-react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shards-react");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=letter-writing.js.map