webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SystemInfo.js":
/*!**********************************!*\
  !*** ./components/SystemInfo.js ***!
  \**********************************/
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
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var _require = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/index.js"),
    detect = _require.detect;

var now = new Date();
var currentBrowser = null;

var SystemInfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SystemInfo, _React$Component);

  function SystemInfo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SystemInfo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SystemInfo).call(this, props));
    _this.state = {
      browser: detect()
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SystemInfo, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("p", null, "Browser: ", __jsx("b", null, this.state.browser))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_7___default.a, {
        interval: 0
      }, now))));
    }
  }]);

  return SystemInfo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SystemInfo);

/***/ })

})
//# sourceMappingURL=index.js.135419e6fcb39947872f.hot-update.js.map