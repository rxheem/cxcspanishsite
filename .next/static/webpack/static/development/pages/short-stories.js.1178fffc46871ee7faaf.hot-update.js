webpackHotUpdate("static/development/pages/short-stories.js",{

/***/ "./story-components/StoryLayout.js":
/*!*****************************************!*\
  !*** ./story-components/StoryLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _story_components_SubmitStory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story-components/SubmitStory */ "./story-components/SubmitStory.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StoryLayout = function StoryLayout(props) {
  return __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8
  }, props.children), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx("br", {
    className: "d-sm-none"
  }), props.isArticle ? __jsx("div", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Learn More"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx("p", null, __jsx("i", {
    style: {
      color: "#0084cf",
      paddingRight: "7px"
    },
    className: "fas fa-user-edit"
  }), __jsx("b", null, "Author:"), __jsx("span", {
    style: {
      paddingLeft: "7px"
    }
  }, props.author)), __jsx("p", null, __jsx("i", {
    style: {
      color: "orange",
      paddingRight: "7px"
    },
    className: "fas fa-flag-usa"
  }), __jsx("b", null, "Origin:"), __jsx("span", {
    style: {
      paddingLeft: "16px"
    }
  }, props.origin)), __jsx("p", null, __jsx("i", {
    style: {
      color: "green",
      paddingRight: "7px"
    },
    className: "fas fa-check"
  }), __jsx("b", null, "Values:"), __jsx("span", {
    style: {
      paddingLeft: "14px"
    }
  }, props.values))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null, "Read more about this story", " ", __jsx("a", {
    target: "_blank",
    style: {
      color: "#0084cf"
    },
    href: props.href
  }, "here"))), __jsx("br", null)) : null, __jsx(_story_components_SubmitStory__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryLayout);

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var SubmitStory =
/*#__PURE__*/
function (_React$component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SubmitStory, _React$component);

  function SubmitStory(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SubmitStory);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SubmitStory).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SubmitStory, [{
    key: "render",
    value: function render() {
      return __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, "..."));
    }
  }]);

  return SubmitStory;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.component);

/* harmony default export */ __webpack_exports__["default"] = (SubmitStory);

/***/ })

})
//# sourceMappingURL=short-stories.js.1178fffc46871ee7faaf.hot-update.js.map