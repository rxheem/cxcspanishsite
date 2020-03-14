webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _MiniNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniNav */ "./components/MiniNav.js");
/* harmony import */ var _SlideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SlideMenu */ "./components/SlideMenu.js");
/* harmony import */ var _SystemInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SystemInfo */ "./components/SystemInfo.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _HeaderImports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeaderImports */ "./components/HeaderImports.js");
/* harmony import */ var _CoronaVirusTip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CoronaVirusTip */ "./components/CoronaVirusTip.js");
/* harmony import */ var _OverheadAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OverheadAlert */ "./components/OverheadAlert.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shards-ui/dist/css/shards.css */ "./node_modules/shards-ui/dist/css/shards.css");
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/css/carousel.css */ "./assets/css/carousel.css");
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/css/nf-carousel.css */ "./assets/css/nf-carousel.css");
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/css/animate.css */ "./assets/css/animate.css");
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/css/master.css */ "./assets/css/master.css");
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_css_master_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/js/rocketloader.js */ "./assets/js/rocketloader.js");
/* harmony import */ var _assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/js/cloudflare.js */ "./assets/js/cloudflare.js");
/* harmony import */ var _assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/js/fontawesome.js */ "./assets/js/fontawesome.js");
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/js/mixpanel.js */ "./assets/js/mixpanel.js");
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/js/quantcast.js */ "./assets/js/quantcast.js");
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/js/mailchimp.js */ "./assets/js/mailchimp.js");
/* harmony import */ var _assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/js/onesignal.js */ "./assets/js/onesignal.js");
/* harmony import */ var _assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-messenger-customer-chat */ "./node_modules/react-messenger-customer-chat/lib/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // Assets






 // Javascript





 // import "../assets/js/tawkto.js";


 // Other


 // Google Analytics

react_ga__WEBPACK_IMPORTED_MODULE_23__["default"].initialize("UA-146229442-1");


var Push = __webpack_require__(/*! push.js */ "./node_modules/push.js/bin/push.min.js");

if (true) {
  Push.Permission.request();
} // Render on client side


if (true) {
  react_ga__WEBPACK_IMPORTED_MODULE_23__["default"].initialize("UA-146229442-1", {
    debug: false,
    alwaysSendToDefaultTracker: false,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });
  react_ga__WEBPACK_IMPORTED_MODULE_23__["default"].pageview(window.location.pathname + window.location.search);
}

var Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;
_sentry_browser__WEBPACK_IMPORTED_MODULE_25__["init"]({
  dsn: "https://1ccf463850ed401c9dbbe2a620cb62e4@sentry.io/2633175"
});

var Layout = function Layout(props) {
  return __jsx(Fragment, null, __jsx("div", {
    "class": "fb-customerchat",
    attribution: "setup_tool",
    page_id: "105703077445673"
  }), __jsx(_NavbarComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_OverheadAlert__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_MiniNav__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("br", null), __jsx("main", {
    role: "main",
    id: "main",
    className: "main"
  }, __jsx(Fragment, null, props.children)), __jsx("br", null), __jsx(_MiniNav__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_SystemInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hide: true
  }), __jsx(_HeaderImports__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

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
      }

      if (number == 2) {
        __jsx("div", {
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
      }

      if (number == 3) {
        return __jsx("div", {
          className: "text-center"
        }, "lalalalallalalalalalallaaa");
      }
    }
  }]);

  return OverheadAlert;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OverheadAlert);

/***/ })

})
//# sourceMappingURL=index.js.225d0ebce61de5a5e5b1.hot-update.js.map