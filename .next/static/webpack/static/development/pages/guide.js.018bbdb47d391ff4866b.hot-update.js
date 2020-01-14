webpackHotUpdate("static/development/pages/guide.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarComponent */ "./components/NavbarComponent.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _HeaderImports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderImports */ "./components/HeaderImports.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shards-ui/dist/css/shards.css */ "./node_modules/shards-ui/dist/css/shards.css");
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/css/carousel.css */ "./assets/css/carousel.css");
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/css/nf-carousel.css */ "./assets/css/nf-carousel.css");
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/css/master.css */ "./assets/css/master.css");
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_master_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/js/fontawesome.js */ "./assets/js/fontawesome.js");
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/js/mixpanel.js */ "./assets/js/mixpanel.js");
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/js/quantcast.js */ "./assets/js/quantcast.js");
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/js/facebook.js */ "./assets/js/facebook.js");
/* harmony import */ var _assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-messenger-customer-chat */ "./node_modules/react-messenger-customer-chat/lib/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Assets





 // Javascript





 // Other


 // Google Analytics

react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].initialize("UA-146229442-1"); // Render on client side

if (true) {
  react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].initialize("UA-146229442-1", {
    debug: true,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });
  react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].pageview(window.location.pathname + window.location.search);
}

var Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;

var Layout = function Layout(props) {
  return __jsx(Fragment, null, __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_15___default.a, {
    pageId: "<https://cxcspanish.cxcspanish.now.sh>",
    appId: "669007593616991",
    htmlRef: "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
  }), __jsx("div", {
    "class": "fb-customerchat",
    attribution: "setup_tool",
    page_id: "105703077445673"
  }), __jsx(_NavbarComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("br", null), __jsx(Fragment, null, props.children), __jsx("br", null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_HeaderImports__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=guide.js.018bbdb47d391ff4866b.hot-update.js.map