webpackHotUpdate("static/development/pages/orals/student-submissions.js",{

/***/ "./common/PDFFile.js":
/*!***************************!*\
  !*** ./common/PDFFile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PDFFile = function PDFFile(props) {
  return __jsx("a", {
    href: props.href,
    download: true
  }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
    name: "file-pdf",
    style: {
      color: "#f00"
    }
  }), __jsx("span", {
    className: "",
    style: {
      paddingLeft: "10px"
    }
  }, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (PDFFile);

/***/ }),

/***/ "./orals-components/OralsLayout.js":
/*!*****************************************!*\
  !*** ./orals-components/OralsLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/PDFFile */ "./common/PDFFile.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var OralsLayout = function OralsLayout(props) {
  return __jsx("div", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
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
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    className: ""
  }, "Essentials"), __jsx("br", null), __jsx("ul", {
    style: {
      marginLeft: "-25px",
      listStyleType: "none"
    }
  }, __jsx("li", null, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Spanish For Dummies",
    href: "https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"
  })), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Modern Spanish Grammar",
    href: "https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"
  })), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(_common_PDFFile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Spanish Basics",
    href: "https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (OralsLayout);

/***/ })

})
//# sourceMappingURL=student-submissions.js.586a5cfc08b3d39348e6.hot-update.js.map