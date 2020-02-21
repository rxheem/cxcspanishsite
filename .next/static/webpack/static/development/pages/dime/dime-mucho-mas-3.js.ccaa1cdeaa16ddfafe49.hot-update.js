webpackHotUpdate("static/development/pages/dime/dime-mucho-mas-3.js",{

/***/ "./dime/DimeLayout.js":
/*!****************************!*\
  !*** ./dime/DimeLayout.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/PDFFile */ "./common/PDFFile.js");
/* harmony import */ var _common_DropboxView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/DropboxView */ "./common/DropboxView.js");
/* harmony import */ var _common_GoogleDriveView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/GoogleDriveView */ "./common/GoogleDriveView.js");
/* harmony import */ var _common_EssentialBooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/EssentialBooks */ "./common/EssentialBooks.js");
/* harmony import */ var _common_SocialLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/SocialLinks */ "./common/SocialLinks.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var DimeLayout = function DimeLayout(props) {
  return __jsx("div", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8
  }, props.children, __jsx(_common_SocialLinks__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4
  }, "THis is Dime layout")));
};

/* harmony default export */ __webpack_exports__["default"] = (DimeLayout);

/***/ }),

/***/ "./listening-components/ListeningLayout.js":
false,

/***/ "./pages/dime/dime-mucho-mas-3.js":
/*!****************************************!*\
  !*** ./pages/dime/dime-mucho-mas-3.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dime_DimeLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dime/DimeLayout */ "./dime/DimeLayout.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-seo-component */ "./node_modules/react-seo-component/index.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // Layout




var DMM3 = function DMM3(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: "Dime Mucho Más - Book 3 | CXC Spanish Online",
    description: "Practice your Spanish listening skills with Nick. Pass your CXC Spanish exam with our free online study guide.",
    twitterUsername: "_rxhem",
    author: "Raheem McDonald",
    article: true,
    publishedDate: new Date(),
    modifiedDate: new Date()
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/listening"
  }, "Dime Series")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "Dime Mucho M\xE1s")), __jsx(ListeningLayout, null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Dime Mucho M\xE1s Book 3"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DMM3);

/***/ })

})
//# sourceMappingURL=dime-mucho-mas-3.js.ccaa1cdeaa16ddfafe49.hot-update.js.map