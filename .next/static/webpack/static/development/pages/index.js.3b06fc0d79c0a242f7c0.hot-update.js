webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SystemInfo.js":
/*!**********************************!*\
  !*** ./components/SystemInfo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var _require = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/index.js"),
    detect = _require.detect;

var now = new Date();
var browser = null;

if (true) {
  browser = detect(); // alert(browser.name);
}

var SystemInfo = function SystemInfo(props) {
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
  }, __jsx("p", null, "Browser ", __jsx("b", null, {
    browser: browser
  }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 3,
    md: 3,
    lg: 3,
    xl: 3
  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
    interval: 0
  }, now))));
};

/* harmony default export */ __webpack_exports__["default"] = (SystemInfo);

/***/ })

})
//# sourceMappingURL=index.js.3b06fc0d79c0a242f7c0.hot-update.js.map