webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HomeCarousel.js":
false,

/***/ "./home/HomeCarousel.js":
/*!******************************!*\
  !*** ./home/HomeCarousel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_7__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var HomeCarousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomeCarousel, _React$Component);

  function HomeCarousel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeCarousel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomeCarousel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeCarousel, [{
    key: "render",
    value: function render() {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "d-block w-100",
        src: ["", "", ""],
        alt: ""
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, null, __jsx("h3", null, "First slide label"), __jsx("p", null, "Nulla vitae elit libero, a pharetra augue mollis interdum."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "d-block w-100",
        src: ["", "", ""],
        alt: ""
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, null, __jsx("h3", null, "Second slide label"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "d-block w-100",
        src: ["", "", ""],
        alt: ""
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Caption, null, __jsx("h3", null, "Third slide label"), __jsx("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur."))));
    }
  }]);

  return HomeCarousel;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HomeCarousel);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _home_HomeCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/HomeCarousel */ "./home/HomeCarousel.js");
/* harmony import */ var _components_MailingListSubscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MailingListSubscribe */ "./components/MailingListSubscribe.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // components




var Index = function Index(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(_home_HomeCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9ed7bab31eea2216841f.hot-update.js.map