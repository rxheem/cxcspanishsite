webpackHotUpdate("static/development/pages/topics/letter-writing.js",{

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


var PDFFIle = function PDFFIle(props) {
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

/* harmony default export */ __webpack_exports__["default"] = (PDFFIle);

/***/ }),

/***/ "./pages/topics/content/ltr-wri/UsefulEssentials.js":
/*!**********************************************************!*\
  !*** ./pages/topics/content/ltr-wri/UsefulEssentials.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_PDFFile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/PDFFile.js */ "./common/PDFFile.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var UsefulEssentials = function UsefulEssentials(props) {
  return __jsx("div", {
    className: "box"
  }, __jsx("h1", {
    className: "title is-6"
  }, "Useful Essentials"), __jsx("p", null, "These phrases and vocabulary really come in handy when composing you letters. Take a read!"), __jsx("br", null), __jsx("ul", {
    className: "list-ul"
  }, __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "",
    title: "Common Spanish Phrases"
  })), __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "",
    title: "Spanish Adjectives"
  })), __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Spanish Prepositions"
  })), __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Common Spanish Adverbs"
  })), __jsx("li", null, __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Verb Conjugation Refresher"
  }))), __jsx("style", null, "\n      .list-ul {\n        padding-left: 20px;\n        margin-top: -10px;\n      }\n\n      .list-ul li {\n        padding-bottom: 10px;\n      }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (UsefulEssentials);

/***/ }),

/***/ "./pages/topics/letter-writing.js":
/*!****************************************!*\
  !*** ./pages/topics/letter-writing.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _content_ltr_wri_Guidelines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/ltr-wri/Guidelines */ "./pages/topics/content/ltr-wri/Guidelines.js");
/* harmony import */ var _content_ltr_wri_Overview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/ltr-wri/Overview */ "./pages/topics/content/ltr-wri/Overview.js");
/* harmony import */ var _content_ltr_wri_UsefulEssentials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/ltr-wri/UsefulEssentials */ "./pages/topics/content/ltr-wri/UsefulEssentials.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Layout

 // Components





var LetterWriting = function LetterWriting(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/exam-topics"
  }, "Exam Topics")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "Letter Writing")), __jsx("h4", null, "Letter Writing"), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    defaultActiveKey: "overview",
    id: uuid__WEBPACK_IMPORTED_MODULE_3___default()()
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    eventKey: "overview",
    title: "Overview"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, __jsx(_content_ltr_wri_Overview__WEBPACK_IMPORTED_MODULE_6__["default"], null))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    eventKey: "guidelines",
    title: "Guidelines"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, __jsx(_content_ltr_wri_Guidelines__WEBPACK_IMPORTED_MODULE_5__["default"], null))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    eventKey: "sample1",
    title: "Sample 1"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    eventKey: "sample2",
    title: "Sample 2"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null)))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx(_content_ltr_wri_UsefulEssentials__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (LetterWriting);

/***/ })

})
//# sourceMappingURL=letter-writing.js.9460a496f1e275236b3d.hot-update.js.map