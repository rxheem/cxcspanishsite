webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_HomeCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/HomeCarousel */ "./home/HomeCarousel.js");
/* harmony import */ var _home_Marketing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/Marketing */ "./home/Marketing.js");
/* harmony import */ var _home_MailingListSubscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/MailingListSubscribe */ "./home/MailingListSubscribe.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _common_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Message */ "./common/Message.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Home components



 // Layout




function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "404 Page Not Found | CXC Spanish Guide"), __jsx("meta", {
    name: "og:title",
    content: "404 Page Not Found | CXC Spanish Guide"
  }), __jsx("meta", {
    name: "og:site_name",
    content: "CXC Spanish Online"
  }), __jsx("meta", {
    name: "description",
    content: "We couldn't finf the page you were lookign for. Let us help you."
  })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "404 - Page Not Found")), __jsx(react_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: ["https://cdn.shopify.com/s/files/1/0322/6897/files/404-permalink.png?432866230176278629", "", ""],
    alt: "404 image"
  })));
}

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ })

})
//# sourceMappingURL=_error.js.a9145e0890ddc17373d9.hot-update.js.map