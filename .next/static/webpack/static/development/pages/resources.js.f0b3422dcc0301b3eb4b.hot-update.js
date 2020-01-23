webpackHotUpdate("static/development/pages/resources.js",{

/***/ "./pages/resources.js":
/*!****************************!*\
  !*** ./pages/resources.js ***!
  \****************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-seo-component */ "./node_modules/react-seo-component/index.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _resources_components_ResourcesLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../resources-components/ResourcesLayout */ "./resources-components/ResourcesLayout.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/PDFFile */ "./common/PDFFile.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




 // Layout



 // Common


var liStyle = {
  paddingBottom: "15px"
};
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

var Resources =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Resources, _React$Component);

  function Resources(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Resources);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Resources).call(this, props));
    _this.state = {
      collapse: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Resources, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_9___default.a, {
        title: "Resources | CXC Spanish Online",
        pathname: "https://www.cxcspnish/mailing-list",
        description: "Download CXC past papers for free, for both CSEC and CAPE. Pass your Spansih exam with our free online study guide.",
        siteLanguage: "en",
        twitterUsername: "_rxheem",
        author: "Raheem McDonald",
        article: true,
        publishedDate: today,
        modifiedDate: today
      }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], null, __jsx("a", {
        href: "/"
      }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
        active: true
      }, "Resources")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        md: 8,
        lg: 8,
        xl: 8
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        md: 4,
        lg: 4,
        xl: 4
      }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null)))))));
    }
  }]);

  return Resources;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ })

})
//# sourceMappingURL=resources.js.f0b3422dcc0301b3eb4b.hot-update.js.map