webpackHotUpdate("static/development/pages/listening.js",{

/***/ "./pages/listening.js":
/*!****************************!*\
  !*** ./pages/listening.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-seo-component */ "./node_modules/react-seo-component/index.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _common_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Message */ "./common/Message.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Layout




function Listening(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Listening Exercises | CXC Spanish Online",
    description: "Practice listening with recordings of conversations with native Spanish speaker for your CXC Spanish exam.",
    pathname: "https://www.cxcspanish.com/listening",
    siteLanguage: "en",
    siteLocale: "",
    twitterUsername: "_rxheem"
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "Listening Exercises")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4
  }))));
}

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Listening);

/***/ })

})
//# sourceMappingURL=listening.js.b51bf432ba8ddaf349a8.hot-update.js.map