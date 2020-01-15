webpackHotUpdate("static/development/pages/short-stories.js",{

/***/ "./pages/stories/StoryLayout.js":
/*!**************************************!*\
  !*** ./pages/stories/StoryLayout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");

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
  }), props.isArticle ? __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Learn More"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx("p", null, __jsx("i", {
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
  }, "here"))) : null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Short Stories"), "Nunc quis nisl ac justo elementum sagittis in quis justo."), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Learn More"))));
};

/* harmony default export */ __webpack_exports__["default"] = (StoryLayout);

/***/ })

})
//# sourceMappingURL=short-stories.js.f3304f38bf30ad994e0d.hot-update.js.map