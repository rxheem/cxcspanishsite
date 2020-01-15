webpackHotUpdate("static/development/pages/stories/garbancito.js",{

/***/ "./story-components/SubmitStory.js":
/*!*****************************************!*\
  !*** ./story-components/SubmitStory.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var SubmitStory =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SubmitStory, _React$Component);

  function SubmitStory(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubmitStory);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubmitStory).call(this, props)); // Bind change

    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {};
    return _this;
  } // Handle change


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubmitStory, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(shards_react__WEBPACK_IMPORTED_MODULE_7__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], null, "Submit Your Story"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_7__["Form"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], null, __jsx("label", {
        htmlFor: "#username"
      }, "Username"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_7__["FormInput"], {
        id: "#username",
        placeholder: "Username"
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_7__["FormGroup"], null, __jsx("label", {
        htmlFor: "#password"
      }, "Paste Your Story"), __jsx(FormTextarea, {
        onChange: this.handleChange
      })))));
    }
  }]);

  return SubmitStory;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SubmitStory);

/***/ })

})
//# sourceMappingURL=garbancito.js.d7b104bb1230bfb3cb83.hot-update.js.map