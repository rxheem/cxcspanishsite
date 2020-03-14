webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OverheadAlert.js":
/*!*************************************!*\
  !*** ./components/OverheadAlert.js ***!
  \*************************************/
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
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var number = Math.floor(Math.random() * 3 + 1);

var OverheadAlert =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OverheadAlert, _React$Component);

  function OverheadAlert() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OverheadAlert);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OverheadAlert).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OverheadAlert, [{
    key: "render",
    value: function render() {
      if (number == 1) {
        return __jsx("div", {
          className: "text-center"
        }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
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
        }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
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
        }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          style: {
            margin: "auto"
          },
          theme: "danger"
        }, "Coronavirus COVID-19 safety tips:", " ", __jsx("a", {
          target: "_blank",
          className: "alert-link",
          href: "https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html"
        }, "Download now")));
      }
    }
  }]);

  return OverheadAlert;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OverheadAlert);

/***/ })

})
//# sourceMappingURL=index.js.63b39afaa3db56a01d6c.hot-update.js.map