webpackHotUpdate("static/development/pages/topics/letter-writing.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavbarComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarComponent */ "./components/NavbarComponent.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var _HeaderImports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderImports */ "./components/HeaderImports.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shards-ui/dist/css/shards.css */ "./node_modules/shards-ui/dist/css/shards.css");
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/css/carousel.css */ "./assets/css/carousel.css");
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/css/nf-carousel.css */ "./assets/css/nf-carousel.css");
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/css/master.css */ "./assets/css/master.css");
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_css_master_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/js/fontawesome.js */ "./assets/js/fontawesome.js");
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/js/mixpanel.js */ "./assets/js/mixpanel.js");
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/js/quantcast.js */ "./assets/js/quantcast.js");
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/js/facebook.js */ "./assets/js/facebook.js");
/* harmony import */ var _assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_js_facebook_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-messenger-customer-chat */ "./node_modules/react-messenger-customer-chat/lib/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_17__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Assets





 // Javascript




 // Other



 // Google Analytics

react_ga__WEBPACK_IMPORTED_MODULE_15__["default"].initialize("UA-146229442-1"); // Render on client side

if (true) {
  react_ga__WEBPACK_IMPORTED_MODULE_15__["default"].initialize("UA-146229442-1", {
    debug: true,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });
  react_ga__WEBPACK_IMPORTED_MODULE_15__["default"].pageview(window.location.pathname + window.location.search);
}

var Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;

var Layout = function Layout(props) {
  return __jsx(Fragment, null, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_17__["FacebookProvider"], {
    appId: "669007593616991"
  }, __jsx(react_facebook__WEBPACK_IMPORTED_MODULE_17__["Like"], {
    href: "http://www.facebook.com",
    colorScheme: "dark",
    showFaces: true,
    share: true
  })), __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "CXC Spanish | Guide, Past Papers and Exercises"), __jsx("meta", {
    name: "og:title",
    content: "CXC Spanish | Guide, Past Papers and Exercises"
  }), __jsx("meta", {
    name: "og:site_name",
    content: "CXC Spanish Online"
  }), __jsx("meta", {
    name: "description",
    content: "CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
  })), __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_16___default.a, {
    pageId: "<https://cxcspanish.cxcspanish.now.sh>",
    appId: "669007593616991",
    htmlRef: "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
  }), __jsx("div", {
    "class": "fb-customerchat",
    attribution: "setup_tool",
    page_id: "105703077445673"
  }), __jsx(_HeaderImports__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_NavbarComponent__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("br", null), __jsx(Fragment, null, props.children), __jsx("br", null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/can-use-dom/index.js":
/*!*******************************************!*\
  !*** ./node_modules/can-use-dom/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;

/***/ }),

/***/ "./node_modules/react-facebook/lib/Comments.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-facebook/lib/Comments.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "./node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var Comments =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Comments, _PureComponent);

  function Comments() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Comments.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        colorScheme = _this$props.colorScheme,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        numPosts = _this$props.numPosts,
        orderBy = _this$props.orderBy,
        width = _this$props.width,
        children = _this$props.children,
        mobile = _this$props.mobile;
    return _react.default.createElement("div", {
      className: "fb-comments",
      "data-colorscheme": colorScheme,
      "data-numposts": numPosts,
      "data-href": href,
      "data-order-by": orderBy,
      "data-width": width,
      "data-skin": colorScheme,
      "data-mobile": mobile
    }, children);
  };

  return Comments;
}(_react.PureComponent);

(0, _defineProperty2.default)(Comments, "defaultProps", {
  href: undefined,
  numPosts: undefined,
  orderBy: undefined,
  width: undefined,
  colorScheme: undefined,
  children: undefined,
  mobile: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Comments, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Comments.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/CommentsCount.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-facebook/lib/CommentsCount.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "./node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var CommentsCount =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(CommentsCount, _PureComponent);

  function CommentsCount() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CommentsCount.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        children = _this$props.children;
    return _react.default.createElement("span", {
      className: "fb-comments-count",
      "data-href": href
    }, children);
  };

  return CommentsCount;
}(_react.PureComponent);

(0, _defineProperty2.default)(CommentsCount, "defaultProps", {
  href: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(CommentsCount, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=CommentsCount.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/CustomChat.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-facebook/lib/CustomChat.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var CustomChat =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(CustomChat, _PureComponent);

  function CustomChat() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CustomChat.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        pageId = _this$props.pageId,
        themeColor = _this$props.themeColor,
        loggedInGreeting = _this$props.loggedInGreeting,
        loggedOutGreeting = _this$props.loggedOutGreeting,
        dataRef = _this$props.dataRef,
        greetingDialogDisplay = _this$props.greetingDialogDisplay,
        greetingDialogDelay = _this$props.greetingDialogDelay;
    return _react.default.createElement("div", {
      className: "fb-customerchat",
      page_id: pageId,
      theme_color: themeColor,
      logged_in_greeting: loggedInGreeting,
      logged_out_greeting: loggedOutGreeting,
      greeting_dialog_display: greetingDialogDisplay,
      greeting_dialog_delay: greetingDialogDelay,
      "data-ref": dataRef
    }, children);
  };

  return CustomChat;
}(_react.PureComponent);

(0, _defineProperty2.default)(CustomChat, "defaultProps", {
  children: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  dataRef: undefined,
  greetingDialogDisplay: undefined,
  greetingDialogDelay: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(CustomChat, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=CustomChat.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/EmbeddedPost.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-facebook/lib/EmbeddedPost.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var EmbeddedPost =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(EmbeddedPost, _PureComponent);

  function EmbeddedPost() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = EmbeddedPost.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        href = _this$props.href,
        width = _this$props.width,
        showText = _this$props.showText,
        children = _this$props.children;
    return _react.default.createElement("div", {
      className: "fb-post",
      "data-href": href,
      "data-width": width,
      "data-show-text": showText
    }, children);
  };

  return EmbeddedPost;
}(_react.PureComponent);

(0, _defineProperty2.default)(EmbeddedPost, "defaultProps", {
  width: undefined,
  showText: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(EmbeddedPost, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=EmbeddedPost.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/EmbeddedVideo.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-facebook/lib/EmbeddedVideo.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var EmbeddedVideo =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(EmbeddedVideo, _PureComponent);

  function EmbeddedVideo() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = EmbeddedVideo.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        href = _this$props.href,
        width = _this$props.width,
        showText = _this$props.showText,
        allowFullScreen = _this$props.allowFullScreen,
        autoPlay = _this$props.autoPlay,
        showCaptions = _this$props.showCaptions,
        children = _this$props.children;
    return _react.default.createElement("div", {
      className: "fb-video",
      "data-href": href,
      "data-width": width,
      "data-show-text": showText,
      "data-show-captions": showCaptions,
      "data-autoplay": autoPlay,
      "data-allowfullscreen": allowFullScreen
    }, children);
  };

  return EmbeddedVideo;
}(_react.PureComponent);

(0, _defineProperty2.default)(EmbeddedVideo, "defaultProps", {
  width: undefined,
  showText: undefined,
  allowFullScreen: undefined,
  autoPlay: undefined,
  showCaptions: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(EmbeddedVideo, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=EmbeddedVideo.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Facebook.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-facebook/lib/Facebook.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.Method = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _LoginStatus = _interopRequireDefault(__webpack_require__(/*! ./constants/LoginStatus */ "./node_modules/react-facebook/lib/constants/LoginStatus.js"));

var Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete'
};
exports.Method = Method;

var Facebook =
/*#__PURE__*/
function () {
  function Facebook(options) {
    if (options === void 0) {
      options = {};
    }

    this.options = (0, _extends2.default)({
      domain: 'connect.facebook.net',
      version: 'v3.2',
      cookie: false,
      status: false,
      xfbml: false,
      language: 'en_US',
      frictionlessRequests: false,
      debug: false,
      chatSupport: false
    }, options);

    if (!this.options.appId) {
      throw new Error('You need to set appId');
    }

    if (!this.options.wait) {
      this.init();
    }
  }

  var _proto = Facebook.prototype;

  _proto.getAppId = function getAppId() {
    return this.options.appId;
  };

  _proto.init = function init() {
    var _this = this;

    return _regenerator.default.async(function init$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!this.loadingPromise) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", this.loadingPromise);

          case 2:
            this.loadingPromise = new Promise(function (resolve) {
              var _this$options = _this.options,
                  domain = _this$options.domain,
                  language = _this$options.language,
                  debug = _this$options.debug,
                  chatSupport = _this$options.chatSupport,
                  restOptions = (0, _objectWithoutPropertiesLoose2.default)(_this$options, ["domain", "language", "debug", "chatSupport"]);

              window.fbAsyncInit = function () {
                window.FB.init({
                  appId: restOptions.appId,
                  version: restOptions.version,
                  cookie: restOptions.cookie,
                  status: restOptions.status,
                  xfbml: restOptions.xfbml,
                  frictionlessRequests: _this.frictionlessRequests
                });
                resolve(window.FB);
              };

              if (window.document.getElementById('facebook-jssdk')) {
                return resolve(window.FB);
              }

              var js = window.document.createElement('script');
              js.id = 'facebook-jssdk';
              js.async = true;
              js.defer = true;
              js.src = "https://" + domain + "/" + language + "/sdk" + (chatSupport ? '/xfbml.customerchat' : '') + (debug ? '/debug' : '') + ".js";
              window.document.body.appendChild(js);
            });
            return _context.abrupt("return", this.loadingPromise);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  };

  _proto.process = function process(method, before, after) {
    var fb;
    return _regenerator.default.async(function process$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (before === void 0) {
              before = [];
            }

            if (after === void 0) {
              after = [];
            }

            _context2.next = 4;
            return _regenerator.default.awrap(this.init());

          case 4:
            fb = _context2.sent;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              fb[method].apply(fb, before.concat([function (response) {
                if (!response) {
                  if (method === 'ui') return;
                  reject(new Error('Response is undefined'));
                } else if (response.error) {
                  var _response$error = response.error,
                      code = _response$error.code,
                      type = _response$error.type,
                      message = _response$error.message;
                  var error = new Error(message);
                  error.code = code;
                  error.type = type;
                  reject(error);
                } else {
                  resolve(response);
                }
              }], after));
            }));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  };

  _proto.ui = function ui(options) {
    return _regenerator.default.async(function ui$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", this.process('ui', [options]));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this);
  };

  _proto.api = function api(path, method, params) {
    return _regenerator.default.async(function api$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (method === void 0) {
              method = Method.GET;
            }

            if (params === void 0) {
              params = {};
            }

            return _context4.abrupt("return", this.process('api', [path, method, params]));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, null, this);
  };

  _proto.login = function login(opts) {
    return _regenerator.default.async(function login$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (opts === void 0) {
              opts = null;
            }

            return _context5.abrupt("return", this.process('login', [], [opts]));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, null, this);
  };

  _proto.logout = function logout() {
    return _regenerator.default.async(function logout$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", this.process('logout'));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, null, this);
  };

  _proto.getLoginStatus = function getLoginStatus() {
    return _regenerator.default.async(function getLoginStatus$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", this.process('getLoginStatus'));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, null, this);
  };

  _proto.getAuthResponse = function getAuthResponse() {
    return _regenerator.default.async(function getAuthResponse$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", this.process('getAuthResponse'));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, null, this);
  };

  _proto.getTokenDetail = function getTokenDetail(loginResponse) {
    var response;
    return _regenerator.default.async(function getTokenDetail$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!(loginResponse.status === _LoginStatus.default.CONNECTED && loginResponse.authResponse)) {
              _context9.next = 2;
              break;
            }

            return _context9.abrupt("return", loginResponse.authResponse);

          case 2:
            _context9.next = 4;
            return _regenerator.default.awrap(this.getLoginStatus());

          case 4:
            response = _context9.sent;

            if (!(response.status === _LoginStatus.default.CONNECTED && response.authResponse)) {
              _context9.next = 7;
              break;
            }

            return _context9.abrupt("return", response.authResponse);

          case 7:
            throw new Error('Token is undefined');

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, null, this);
  };

  _proto.getProfile = function getProfile(params) {
    return _regenerator.default.async(function getProfile$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", this.api('/me', Method.GET, params));

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, null, this);
  };

  _proto.getTokenDetailWithProfile = function getTokenDetailWithProfile(params, response) {
    var tokenDetail, profile;
    return _regenerator.default.async(function getTokenDetailWithProfile$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _regenerator.default.awrap(this.getTokenDetail(response));

          case 2:
            tokenDetail = _context11.sent;
            _context11.next = 5;
            return _regenerator.default.awrap(this.getProfile(params));

          case 5:
            profile = _context11.sent;
            return _context11.abrupt("return", {
              profile: profile,
              tokenDetail: tokenDetail
            });

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, null, this);
  };

  _proto.getToken = function getToken() {
    var authResponse;
    return _regenerator.default.async(function getToken$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return _regenerator.default.awrap(this.getTokenDetail());

          case 2:
            authResponse = _context12.sent;
            return _context12.abrupt("return", authResponse.accessToken);

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, null, this);
  };

  _proto.getUserId = function getUserId() {
    var authResponse;
    return _regenerator.default.async(function getUserId$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _regenerator.default.awrap(this.getTokenDetail());

          case 2:
            authResponse = _context13.sent;
            return _context13.abrupt("return", authResponse.userID);

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, null, this);
  };

  _proto.sendInvite = function sendInvite(to, options) {
    return _regenerator.default.async(function sendInvite$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt("return", this.ui((0, _extends2.default)({
              to: to,
              method: 'apprequests'
            }, options)));

          case 1:
          case "end":
            return _context14.stop();
        }
      }
    }, null, this);
  };

  _proto.postAction = function postAction(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory) {
    var url;
    return _regenerator.default.async(function postAction$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            url = "/me/" + ogNamespace + ":" + ogAction + "?" + ogObject + "=" + encodeURIComponent(ogObjectUrl);

            if (noFeedStory === true) {
              url += '&no_feed_story=true';
            }

            return _context15.abrupt("return", this.api(url, Method.POST));

          case 3:
          case "end":
            return _context15.stop();
        }
      }
    }, null, this);
  };

  _proto.getPermissions = function getPermissions() {
    var response;
    return _regenerator.default.async(function getPermissions$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return _regenerator.default.awrap(this.api('/me/permissions'));

          case 2:
            response = _context16.sent;
            return _context16.abrupt("return", response.data);

          case 4:
          case "end":
            return _context16.stop();
        }
      }
    }, null, this);
  };

  _proto.hasPermissions = function hasPermissions(permissions) {
    var usersPermissions, findedPermissions;
    return _regenerator.default.async(function hasPermissions$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return _regenerator.default.awrap(this.getPermissions());

          case 2:
            usersPermissions = _context17.sent;
            findedPermissions = permissions.filter(function (p) {
              var currentPermission = usersPermissions.find(function (row) {
                var permission = row.permission,
                    status = row.status;
                return status === 'granted' && permission === p;
              });
              return !!currentPermission;
            });
            return _context17.abrupt("return", findedPermissions.length === permissions.length);

          case 5:
          case "end":
            return _context17.stop();
        }
      }
    }, null, this);
  };

  _proto.subscribe = function subscribe(eventName, callback) {
    var fb;
    return _regenerator.default.async(function subscribe$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return _regenerator.default.awrap(this.init());

          case 2:
            fb = _context18.sent;
            fb.Event.subscribe(eventName, callback);

          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, null, this);
  };

  _proto.unsubscribe = function unsubscribe(eventName, callback) {
    var fb;
    return _regenerator.default.async(function unsubscribe$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return _regenerator.default.awrap(this.init());

          case 2:
            fb = _context19.sent;
            fb.Event.unsubscribe(eventName, callback);

          case 4:
          case "end":
            return _context19.stop();
        }
      }
    }, null, this);
  };

  _proto.parse = function parse(parentNode) {
    var fb;
    return _regenerator.default.async(function parse$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return _regenerator.default.awrap(this.init());

          case 2:
            fb = _context20.sent;

            if (typeof parentNode === 'undefined') {
              fb.XFBML.parse();
            } else {
              fb.XFBML.parse(parentNode);
            }

          case 4:
          case "end":
            return _context20.stop();
        }
      }
    }, null, this);
  };

  _proto.getRequests = function getRequests() {
    return _regenerator.default.async(function getRequests$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            return _context21.abrupt("return", this.api('/me/apprequests'));

          case 1:
          case "end":
            return _context21.stop();
        }
      }
    }, null, this);
  };

  _proto.removeRequest = function removeRequest(requestID) {
    return _regenerator.default.async(function removeRequest$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            return _context22.abrupt("return", this.api(requestID, Method.DELETE));

          case 1:
          case "end":
            return _context22.stop();
        }
      }
    }, null, this);
  };

  _proto.setAutoGrow = function setAutoGrow() {
    var fb;
    return _regenerator.default.async(function setAutoGrow$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return _regenerator.default.awrap(this.init());

          case 2:
            fb = _context23.sent;
            fb.Canvas.setAutoGrow();

          case 4:
          case "end":
            return _context23.stop();
        }
      }
    }, null, this);
  };

  _proto.paySimple = function paySimple(product, quantity) {
    return _regenerator.default.async(function paySimple$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            if (quantity === void 0) {
              quantity = 1;
            }

            return _context24.abrupt("return", this.ui({
              method: 'pay',
              action: 'purchaseitem',
              product: product,
              quantity: quantity
            }));

          case 2:
          case "end":
            return _context24.stop();
        }
      }
    }, null, this);
  };

  _proto.pay = function pay(product, options) {
    return _regenerator.default.async(function pay$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            return _context25.abrupt("return", this.ui((0, _extends2.default)({
              method: 'pay',
              action: 'purchaseitem',
              product: product
            }, options)));

          case 1:
          case "end":
            return _context25.stop();
        }
      }
    }, null, this);
  };

  return Facebook;
}();
/*
  sendToFriends: function(options, callback) {
    if(!options) {
      options = {};
    }

    options.method = 'send';

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendMessage: function(message, name, caption, description, url, imgUrl, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        method: 'stream.publish',
        message: message,
        attachment: {
          name: name,
          caption: caption,
          description: description,
          href: url,
          media:[{
            type: 'image',
            src:  imgUrl,
            href: url
          }]
        },
        action_links: [{
          text: 'Code',
          href: url
        }],
        user_prompt_message: message
      },
      function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendInviteForm: function(options, callback) {
    if(typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method = options.method || 'apprequests';


      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  checkPageLike: function(pageID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      fbApi.getUserID(function(err, userID) {
        if(err) {
          return callback(err);
        }

        var fqlQuery = `SELECT uid FROM page_fan WHERE page_id = ${pageID} and uid = ${userID}`;
        var query = FB.Data.query(fqlQuery);

        query.wait(function(rows) {
          if (rows.length === 1 && rows[0].uid === userID) {
            callback(null, true, query);
          }
          else {
            callback(null, false, query);
          }
        });
      });
    });
  },

  sendMessageToFriend: function (friendID, link, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        to: friendID,
        method: 'send',
        link: link
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  _prepareUsers: function(data) {
    var users=[];

    for(var index in data) {
      var userData=data[index];

      var user = {
        provider_uid: 'facebook'+'_'+userData.uid,
        provider: 'facebook',
        id: userData.uid,
        name: userData.name,
        first_name: userData.first_name,
        last_name: userData.last_name,
        status: (userData.status!==null) ? userData.status : null,
        image: '//graph.facebook.com/'+userData.uid+'/picture?'
      };

      users.push(user);
    }

    return users;
  },

  getUserList: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('fql', {
        q: `
          SELECT uid, name, first_name, last_name, online_presence, status
          FROM user
          WHERE uid IN
            ( SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY name
        `,
      }, function (response)
      {
        var users = fbApi._prepareUsers(response.data);
        callback(null, users, response);
      });
    });
  },

  postFeed: function(options, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method='feed';

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  createAlbum: function(name, description, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', 'post', {
        name: name,
        description: description
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  addImageToAlbum: function(albumID, imageURL, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', 'post', {
        message: message,
        url: imageURL
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbums: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumPhotos: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumCoverPicture: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/picture', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'publish_stream'
  postPhoto: function(photoUrl, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/photos', 'post', {
        message: message,
        url: photoUrl
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  getPageInfo: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.Canvas.getPageInfo(function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  }
*/


exports.default = Facebook;
//# sourceMappingURL=Facebook.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/FacebookContext.js":
/*!************************************************************!*\
  !*** ./node_modules/react-facebook/lib/FacebookContext.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _default = (0, _react.createContext)();

exports.default = _default;
//# sourceMappingURL=FacebookContext.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/FacebookProvider.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-facebook/lib/FacebookProvider.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _canUseDom = _interopRequireDefault(__webpack_require__(/*! can-use-dom */ "./node_modules/can-use-dom/index.js"));

var _Facebook = _interopRequireDefault(__webpack_require__(/*! ./Facebook */ "./node_modules/react-facebook/lib/Facebook.js"));

var _FacebookContext = _interopRequireDefault(__webpack_require__(/*! ./FacebookContext */ "./node_modules/react-facebook/lib/FacebookContext.js"));

var api = null;

var Facebook =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Facebook, _Component);

  function Facebook() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isReady: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleInit", function _callee() {
      var isReady, _this$props, domain, version, appId, cookie, status, xfbml, language, frictionlessRequests, wait, debug, chatSupport;

      return _regenerator.default.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_canUseDom.default) {
                _context.next = 2;
                break;
              }

              throw new Error('You can not use Facebook without DOM');

            case 2:
              isReady = _this.state.isReady;

              if (!isReady) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", api);

            case 5:
              if (!api) {
                _this$props = _this.props, domain = _this$props.domain, version = _this$props.version, appId = _this$props.appId, cookie = _this$props.cookie, status = _this$props.status, xfbml = _this$props.xfbml, language = _this$props.language, frictionlessRequests = _this$props.frictionlessRequests, wait = _this$props.wait, debug = _this$props.debug, chatSupport = _this$props.chatSupport;
                api = new _Facebook.default({
                  domain: domain,
                  appId: appId,
                  version: version,
                  cookie: cookie,
                  status: status,
                  xfbml: xfbml,
                  language: language,
                  frictionlessRequests: frictionlessRequests,
                  wait: wait,
                  debug: debug,
                  chatSupport: chatSupport
                });
              }

              _context.next = 8;
              return _regenerator.default.awrap(api.init());

            case 8:
              if (!_this.state.isReady) {
                _this.setState({
                  isReady: true
                });
              }

              return _context.abrupt("return", api);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    return _this;
  }

  var _proto = Facebook.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var wait = this.props.wait;

    if (!wait) {
      this.handleInit();
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        isReady = _this$state.isReady,
        error = _this$state.error;
    var handleInit = this.handleInit;
    var value = {
      isReady: isReady,
      error: error,
      handleInit: handleInit,
      api: api
    };
    return _react.default.createElement(_FacebookContext.default.Provider, {
      value: value
    }, children);
  };

  return Facebook;
}(_react.Component);

exports.default = Facebook;
(0, _defineProperty2.default)(Facebook, "defaultProps", {
  version: 'v3.1',
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  domain: 'connect.facebook.net',
  children: undefined,
  wait: false,
  debug: false,
  chatSupport: false
});
//# sourceMappingURL=FacebookProvider.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Feed.js":
/*!*************************************************!*\
  !*** ./node_modules/react-facebook/lib/Feed.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "./node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var _clearUndefinedProperties = _interopRequireDefault(__webpack_require__(/*! ./utils/clearUndefinedProperties */ "./node_modules/react-facebook/lib/utils/clearUndefinedProperties.js"));

var _Process = _interopRequireDefault(__webpack_require__(/*! ./Process */ "./node_modules/react-facebook/lib/Process.js"));

var Feed =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Feed, _Component);

  function Feed() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function _callee2(evn) {
      var handleProcess;
      return _regenerator.default.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evn.preventDefault();
              handleProcess = _this.props.handleProcess;
              return _context2.abrupt("return", handleProcess(function _callee(api) {
                var _this$props, _this$props$link, link, display, _this$props$appId, appId, redirectURI, from, to, picture, source, name, caption, description, dataRef;

                return _regenerator.default.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this$props = _this.props, _this$props$link = _this$props.link, link = _this$props$link === void 0 ? (0, _getCurrentHref.default)() : _this$props$link, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === void 0 ? api.getAppId() : _this$props$appId, redirectURI = _this$props.redirectURI, from = _this$props.from, to = _this$props.to, picture = _this$props.picture, source = _this$props.source, name = _this$props.name, caption = _this$props.caption, description = _this$props.description, dataRef = _this$props.dataRef;
                        return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)({
                          method: 'feed',
                          link: link,
                          display: display,
                          app_id: appId,
                          redirect_uri: redirectURI,
                          from: from,
                          to: to,
                          picture: picture,
                          source: source,
                          name: name,
                          caption: caption,
                          description: description,
                          ref: dataRef
                        })));

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
    return _this;
  }

  var _proto = Feed.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        loading = _this$props2.loading,
        error = _this$props2.error,
        data = _this$props2.data;
    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Feed;
}(_react.Component);

(0, _defineProperty2.default)(Feed, "defaultProps", {
  link: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined,
  from: undefined,
  to: undefined,
  source: undefined,
  picture: undefined,
  name: undefined,
  caption: undefined,
  description: undefined,
  dataRef: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref) {
    var loading = _ref.loading,
        handleProcess = _ref.handleProcess,
        error = _ref.error,
        data = _ref.data;
    return _react.default.createElement(Feed, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      data: data,
      error: error,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Feed.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Group.js":
/*!**************************************************!*\
  !*** ./node_modules/react-facebook/lib/Group.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "./node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var Group =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Group, _PureComponent);

  function Group() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Group.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        width = _this$props.width,
        showSocialContext = _this$props.showSocialContext,
        showMetaData = _this$props.showMetaData,
        children = _this$props.children,
        skin = _this$props.skin;
    return _react.default.createElement("div", {
      className: "fb-group",
      style: style,
      "data-href": href,
      "data-width": width,
      "data-show-social-context": showSocialContext,
      "data-show-metadata": showMetaData,
      "data-skin": skin
    }, children);
  };

  return Group;
}(_react.PureComponent);

(0, _defineProperty2.default)(Group, "defaultProps", {
  showSocialContext: undefined,
  showMetaData: undefined,
  width: undefined,
  children: undefined,
  style: undefined,
  href: undefined,
  skin: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Group, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Group.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Initialize.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-facebook/lib/Initialize.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _FacebookContext = _interopRequireDefault(__webpack_require__(/*! ./FacebookContext */ "./node_modules/react-facebook/lib/FacebookContext.js"));

var Initialize =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Initialize, _Component);

  function Initialize() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Initialize.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.$isMounted = true;
    this.prepare();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.$isMounted = false;
  };

  _proto.prepare = function prepare() {
    var _this$props, onReady, handleInit, api;

    return _regenerator.default.async(function prepare$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _this$props = this.props, onReady = _this$props.onReady, handleInit = _this$props.handleInit;
            _context.next = 3;
            return _regenerator.default.awrap(handleInit());

          case 3:
            api = _context.sent;

            if (onReady && this.$isMounted) {
              onReady(api);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        isReady = _this$props2.isReady,
        api = _this$props2.api;
    var childrenProps = {
      isReady: isReady,
      api: api
    };

    if (typeof children === 'function') {
      return children(childrenProps);
    }

    return children;
  };

  return Initialize;
}(_react.Component);

(0, _defineProperty2.default)(Initialize, "defaultProps", {
  onReady: undefined,
  api: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_FacebookContext.default.Consumer, null, function (_ref) {
    var handleInit = _ref.handleInit,
        isReady = _ref.isReady,
        api = _ref.api;
    return _react.default.createElement(Initialize, (0, _extends2.default)({}, props, {
      handleInit: handleInit,
      isReady: isReady,
      api: api,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Initialize.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Like.js":
/*!*************************************************!*\
  !*** ./node_modules/react-facebook/lib/Like.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "./node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var Like =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Like, _PureComponent);

  function Like() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Like.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        layout = _this$props.layout,
        colorScheme = _this$props.colorScheme,
        action = _this$props.action,
        showFaces = _this$props.showFaces,
        share = _this$props.share,
        children = _this$props.children,
        width = _this$props.width,
        size = _this$props.size,
        kidDirectedSite = _this$props.kidDirectedSite,
        referral = _this$props.referral;
    return _react.default.createElement("div", {
      className: "fb-like",
      "data-ref": referral,
      "data-href": href,
      "data-layout": layout,
      "data-colorscheme": colorScheme,
      "data-action": action,
      "data-show-faces": showFaces,
      "data-share": share,
      "data-width": width,
      "data-size": size,
      "data-kid-directed-site": kidDirectedSite
    }, children);
  };

  return Like;
}(_react.PureComponent);

(0, _defineProperty2.default)(Like, "defaultProps", {
  layout: undefined,
  showFaces: undefined,
  colorScheme: undefined,
  action: undefined,
  share: undefined,
  size: undefined,
  kidDirectedSite: undefined,
  children: undefined,
  href: undefined,
  referral: undefined,
  width: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Like, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Like.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Login.js":
/*!**************************************************!*\
  !*** ./node_modules/react-facebook/lib/Login.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Process = _interopRequireDefault(__webpack_require__(/*! ./Process */ "./node_modules/react-facebook/lib/Process.js"));

var _Fields = _interopRequireDefault(__webpack_require__(/*! ./constants/Fields */ "./node_modules/react-facebook/lib/constants/Fields.js"));

var Login =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Login, _Component);

  function Login() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function _callee2(evn) {
      var _this$props, handleProcess, onCompleted, onError, onSuccess;

      return _regenerator.default.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evn.preventDefault();
              _this$props = _this.props, handleProcess = _this$props.handleProcess, onCompleted = _this$props.onCompleted, onError = _this$props.onError, onSuccess = _this$props.onSuccess;
              _context2.prev = 2;
              _context2.next = 5;
              return _regenerator.default.awrap(handleProcess(function _callee(api) {
                var _this$props2, scope, fields, returnScopes, rerequest, reauthorize, eventKey, loginQpts, authType, loginResponse, data;

                return _regenerator.default.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this$props2 = _this.props, scope = _this$props2.scope, fields = _this$props2.fields, returnScopes = _this$props2.returnScopes, rerequest = _this$props2.rerequest, reauthorize = _this$props2.reauthorize, eventKey = _this$props2.eventKey;
                        loginQpts = {
                          scope: scope
                        };
                        authType = [];

                        if (returnScopes) {
                          loginQpts.return_scopes = true;
                        }

                        if (rerequest) {
                          authType.push('rerequest');
                        }

                        if (reauthorize) {
                          authType.push('reauthenticate');
                        }

                        if (authType.length) {
                          loginQpts.auth_type = authType.join(',');
                        }

                        _context.next = 9;
                        return _regenerator.default.awrap(api.login(loginQpts));

                      case 9:
                        loginResponse = _context.sent;

                        if (!(loginResponse.status !== 'connected')) {
                          _context.next = 12;
                          break;
                        }

                        throw new Error('Unauthorized user');

                      case 12:
                        _context.next = 14;
                        return _regenerator.default.awrap(api.getTokenDetailWithProfile({
                          fields: fields
                        }, loginResponse));

                      case 14:
                        data = _context.sent;

                        if (!onCompleted) {
                          _context.next = 18;
                          break;
                        }

                        _context.next = 18;
                        return _regenerator.default.awrap(onCompleted((0, _extends2.default)({}, data, {
                          eventKey: eventKey
                        })));

                      case 18:
                        return _context.abrupt("return", data);

                      case 19:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }, onSuccess));

            case 5:
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);

              if (onError) {
                onError(_context2.t0);
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[2, 7]]);
    });
    return _this;
  }

  var _proto = Login.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        children = _this$props3.children,
        loading = _this$props3.loading,
        error = _this$props3.error,
        data = _this$props3.data;
    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Login;
}(_react.Component);

(0, _defineProperty2.default)(Login, "defaultProps", {
  scope: '',
  fields: _Fields.default,
  returnScopes: false,
  rerequest: false,
  reauthorize: false,
  onCompleted: undefined,
  onError: undefined,
  eventKey: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref) {
    var loading = _ref.loading,
        handleProcess = _ref.handleProcess,
        data = _ref.data,
        error = _ref.error;
    return _react.default.createElement(Login, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      data: data,
      error: error,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Login.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/LoginButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-facebook/lib/LoginButton.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = LoginButton;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactSpinnerChildren = _interopRequireDefault(__webpack_require__(/*! react-spinner-children */ "./node_modules/react-spinner-children/dist/index.js"));

var _Login = _interopRequireDefault(__webpack_require__(/*! ./Login */ "./node_modules/react-facebook/lib/Login.js"));

function LoginButton(props) {
  var children = props.children,
      className = props.className,
      spinner = props.spinner,
      spinnerConfig = props.spinnerConfig,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "className", "spinner", "spinnerConfig"]);
  return _react.default.createElement(_Login.default, rest, function (_ref) {
    var loading = _ref.loading,
        handleClick = _ref.handleClick;
    return _react.default.createElement("button", {
      type: "button",
      className: className,
      onClick: handleClick,
      disabled: loading
    }, children, spinner && loading && _react.default.createElement(_reactSpinnerChildren.default, {
      config: spinnerConfig
    }));
  });
}

LoginButton.defaultProps = (0, _extends2.default)({}, _Login.default.defaultProps, {
  className: undefined,
  spinnerConfig: {},
  spinner: true
});
//# sourceMappingURL=LoginButton.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/MessageUs.js":
/*!******************************************************!*\
  !*** ./node_modules/react-facebook/lib/MessageUs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var MessageUs =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(MessageUs, _PureComponent);

  function MessageUs() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MessageUs.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        messengerAppId = _this$props.messengerAppId,
        pageId = _this$props.pageId,
        children = _this$props.children,
        size = _this$props.size;
    return _react.default.createElement("div", {
      className: "fb-messengermessageus",
      messenger_app_id: messengerAppId,
      page_id: pageId,
      "data-color": color,
      "data-size": size
    }, children);
  };

  return MessageUs;
}(_react.PureComponent);

(0, _defineProperty2.default)(MessageUs, "defaultProps", {
  color: undefined,
  size: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(MessageUs, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=MessageUs.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/MessengerCheckbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-facebook/lib/MessengerCheckbox.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var MessengerCheckbox =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(MessengerCheckbox, _PureComponent);

  function MessengerCheckbox() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MessengerCheckbox.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        origin = _this$props.origin,
        prechecked = _this$props.prechecked,
        allowLogin = _this$props.allowLogin,
        userRef = _this$props.userRef,
        messengerAppId = _this$props.messengerAppId,
        pageId = _this$props.pageId,
        children = _this$props.children,
        size = _this$props.size,
        centerAlign = _this$props.centerAlign,
        skin = _this$props.skin;
    return _react.default.createElement("div", {
      className: "fb-messenger-checkbox",
      messenger_app_id: messengerAppId,
      page_id: pageId,
      size: size,
      origin: origin,
      user_ref: userRef,
      prechecked: prechecked,
      allow_login: allowLogin,
      skin: skin,
      center_align: centerAlign
    }, children);
  };

  return MessengerCheckbox;
}(_react.PureComponent);

(0, _defineProperty2.default)(MessengerCheckbox, "defaultProps", {
  size: undefined,
  allowLogin: undefined,
  prechecked: undefined,
  userRef: undefined,
  children: undefined,
  origin: undefined,
  skin: undefined,
  centerAlign: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(MessengerCheckbox, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=MessengerCheckbox.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Page.js":
/*!*************************************************!*\
  !*** ./node_modules/react-facebook/lib/Page.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "./node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var Page =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(Page, _PureComponent);

  function Page() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Page.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        _this$props$href = _this$props.href,
        href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href,
        tabs = _this$props.tabs,
        hideCover = _this$props.hideCover,
        width = _this$props.width,
        height = _this$props.height,
        showFacepile = _this$props.showFacepile,
        hideCTA = _this$props.hideCTA,
        smallHeader = _this$props.smallHeader,
        adaptContainerWidth = _this$props.adaptContainerWidth,
        children = _this$props.children;
    return _react.default.createElement("div", {
      className: "fb-page",
      style: style,
      "data-tabs": tabs,
      "data-hide-cover": hideCover,
      "data-show-facepile": showFacepile,
      "data-hide-cta": hideCTA,
      "data-href": href,
      "data-small-header": smallHeader,
      "data-adapt-container-width": adaptContainerWidth,
      "data-height": height,
      "data-width": width
    }, children);
  };

  return Page;
}(_react.PureComponent);

(0, _defineProperty2.default)(Page, "defaultProps", {
  width: undefined,
  height: undefined,
  tabs: undefined,
  hideCover: undefined,
  showFacepile: undefined,
  hideCTA: undefined,
  smallHeader: undefined,
  adaptContainerWidth: undefined,
  children: undefined,
  style: undefined,
  href: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(Page, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Page.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Parser.js":
/*!***************************************************!*\
  !*** ./node_modules/react-facebook/lib/Parser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "./node_modules/react-facebook/lib/Initialize.js"));

var Parser =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Parser, _Component);

  function Parser() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function (api) {
      _this.setState({
        api: api
      }, _this.handleParse);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleContainer", function (container) {
      _this.setState({
        container: container
      }, _this.handleParse);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleParse", function () {
      var _this$state = _this.state,
          api = _this$state.api,
          container = _this$state.container;

      if (!api || !container) {
        return;
      }

      api.parse(container);
    });
    return _this;
  }

  var _proto = Parser.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children;
    return _react.default.createElement("div", {
      className: className,
      ref: this.handleContainer
    }, _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children({
      handleParse: this.handleParse
    })));
  };

  return Parser;
}(_react.Component);

exports.default = Parser;
(0, _defineProperty2.default)(Parser, "defaultProps", {
  className: undefined
});
//# sourceMappingURL=Parser.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Process.js":
/*!****************************************************!*\
  !*** ./node_modules/react-facebook/lib/Process.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "./node_modules/react-facebook/lib/Initialize.js"));

var Process =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Process, _Component);

  function Process() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      api: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleProcess", function _callee(fn, handleSuccess) {
      var api, data;
      return _regenerator.default.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (handleSuccess === void 0) {
                handleSuccess = function handleSuccess() {};
              }

              _this.setState({
                data: undefined,
                error: undefined,
                loading: true
              });

              _context.prev = 2;
              api = _this.state.api;

              if (api) {
                _context.next = 6;
                break;
              }

              throw new Error('Facebook is not initialized. Wait for isReady');

            case 6:
              _context.next = 8;
              return _regenerator.default.awrap(fn(api));

            case 8:
              data = _context.sent;

              _this.setState({
                data: data,
                loading: false
              }, handleSuccess);

              return _context.abrupt("return", data);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);

              _this.setState({
                error: _context.t0,
                loading: false
              });

              throw _context.t0;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 13]]);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function (api) {
      _this.setState({
        api: api
      });
    });
    return _this;
  }

  var _proto = Process.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        api = _this$state.api,
        loading = _this$state.loading,
        data = _this$state.data,
        error = _this$state.error;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children({
      loading: !api || loading,
      handleProcess: this.handleProcess,
      data: data,
      error: error
    }));
  };

  return Process;
}(_react.Component);

exports.default = Process;
//# sourceMappingURL=Process.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Profile.js":
/*!****************************************************!*\
  !*** ./node_modules/react-facebook/lib/Profile.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "./node_modules/react-facebook/lib/Initialize.js"));

var _Subscribe = _interopRequireDefault(__webpack_require__(/*! ./Subscribe */ "./node_modules/react-facebook/lib/Subscribe.js"));

var _Fields = _interopRequireDefault(__webpack_require__(/*! ./constants/Fields */ "./node_modules/react-facebook/lib/constants/Fields.js"));

var _LoginStatus = _interopRequireDefault(__webpack_require__(/*! ./constants/LoginStatus */ "./node_modules/react-facebook/lib/constants/LoginStatus.js"));

var Profile =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Profile, _Component);

  function Profile() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      loading: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function _callee(api) {
      return _regenerator.default.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.api = api;

              _this.updateProfile();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleStatusChange", function () {
      _this.updateProfile();
    });
    return _this;
  }

  var _proto = Profile.prototype;

  _proto.updateProfile = function updateProfile() {
    var api, fields, response, profile;
    return _regenerator.default.async(function updateProfile$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            api = this.api, fields = this.props.fields;

            if (api) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return _regenerator.default.awrap(api.getLoginStatus());

          case 6:
            response = _context2.sent;

            if (!(response.status !== _LoginStatus.default.CONNECTED)) {
              _context2.next = 10;
              break;
            }

            this.setState({
              profile: undefined,
              loading: false,
              error: undefined
            });
            return _context2.abrupt("return");

          case 10:
            _context2.next = 12;
            return _regenerator.default.awrap(api.getProfile({
              fields: fields
            }));

          case 12:
            profile = _context2.sent;
            this.setState({
              profile: profile,
              loading: false,
              error: undefined
            });
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](3);
            this.setState({
              profile: undefined,
              loading: false,
              error: _context2.t0
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this, [[3, 16]]);
  };

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        profile = _this$state.profile,
        loading = _this$state.loading,
        error = _this$state.error;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, _react.default.createElement(_Subscribe.default, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      profile: profile,
      loading: loading,
      error: error
    })));
  };

  return Profile;
}(_react.Component);

exports.default = Profile;
(0, _defineProperty2.default)(Profile, "defaultProps", {
  fields: _Fields.default
});
//# sourceMappingURL=Profile.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Send.js":
/*!*************************************************!*\
  !*** ./node_modules/react-facebook/lib/Send.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "./node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var _clearUndefinedProperties = _interopRequireDefault(__webpack_require__(/*! ./utils/clearUndefinedProperties */ "./node_modules/react-facebook/lib/utils/clearUndefinedProperties.js"));

var _Process = _interopRequireDefault(__webpack_require__(/*! ./Process */ "./node_modules/react-facebook/lib/Process.js"));

var Send =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Send, _Component);

  function Send() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function _callee2(evn) {
      var handleProcess;
      return _regenerator.default.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evn.preventDefault();
              handleProcess = _this.props.handleProcess;
              return _context2.abrupt("return", handleProcess(function _callee(api) {
                var _this$props, _this$props$link, link, display, _this$props$appId, appId, to, redirectURI;

                return _regenerator.default.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this$props = _this.props, _this$props$link = _this$props.link, link = _this$props$link === void 0 ? (0, _getCurrentHref.default)() : _this$props$link, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === void 0 ? api.getAppId() : _this$props$appId, to = _this$props.to, redirectURI = _this$props.redirectURI;
                        return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)({
                          method: 'send',
                          link: link,
                          display: display,
                          app_id: appId,
                          to: to,
                          redirect_uri: redirectURI
                        })));

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
    return _this;
  }

  var _proto = Send.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        loading = _this$props2.loading;
    return children({
      loading: loading,
      handleClick: this.handleClick
    });
  };

  return Send;
}(_react.Component);

(0, _defineProperty2.default)(Send, "defaultProps", {
  to: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref) {
    var loading = _ref.loading,
        handleProcess = _ref.handleProcess;
    return _react.default.createElement(Send, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Send.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/SendToMessenger.js":
/*!************************************************************!*\
  !*** ./node_modules/react-facebook/lib/SendToMessenger.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Parser = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

var SendToMessenger =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2.default)(SendToMessenger, _PureComponent);

  function SendToMessenger() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = SendToMessenger.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var handleParse = this.props.handleParse;
    handleParse();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        color = _this$props.color,
        messengerAppId = _this$props.messengerAppId,
        pageId = _this$props.pageId,
        children = _this$props.children,
        dataRef = _this$props.dataRef,
        size = _this$props.size;
    return _react.default.createElement("div", {
      className: "fb-send-to-messenger",
      messenger_app_id: messengerAppId,
      page_id: pageId,
      "data-color": color,
      "data-size": size,
      "data-ref": dataRef
    }, children);
  };

  return SendToMessenger;
}(_react.PureComponent);

(0, _defineProperty2.default)(SendToMessenger, "defaultProps", {
  color: undefined,
  size: undefined,
  dataRef: undefined,
  children: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Parser.default, null, function (_ref) {
    var handleParse = _ref.handleParse;
    return _react.default.createElement(SendToMessenger, (0, _extends2.default)({}, props, {
      handleParse: handleParse,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=SendToMessenger.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Share.js":
/*!**************************************************!*\
  !*** ./node_modules/react-facebook/lib/Share.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _getCurrentHref = _interopRequireDefault(__webpack_require__(/*! ./utils/getCurrentHref */ "./node_modules/react-facebook/lib/utils/getCurrentHref.js"));

var _clearUndefinedProperties = _interopRequireDefault(__webpack_require__(/*! ./utils/clearUndefinedProperties */ "./node_modules/react-facebook/lib/utils/clearUndefinedProperties.js"));

var _Process = _interopRequireDefault(__webpack_require__(/*! ./Process */ "./node_modules/react-facebook/lib/Process.js"));

var Share =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Share, _Component);

  function Share() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function _callee2(evn) {
      var handleProcess;
      return _regenerator.default.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              evn.preventDefault();
              handleProcess = _this.props.handleProcess;
              return _context2.abrupt("return", handleProcess(function _callee(api) {
                var _this$props, _this$props$href, href, display, _this$props$appId, appId, hashtag, redirectURI, quote, mobileIframe;

                return _regenerator.default.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this$props = _this.props, _this$props$href = _this$props.href, href = _this$props$href === void 0 ? (0, _getCurrentHref.default)() : _this$props$href, display = _this$props.display, _this$props$appId = _this$props.appId, appId = _this$props$appId === void 0 ? api.getAppId() : _this$props$appId, hashtag = _this$props.hashtag, redirectURI = _this$props.redirectURI, quote = _this$props.quote, mobileIframe = _this$props.mobileIframe;
                        return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)({
                          method: 'share',
                          href: href,
                          display: display,
                          app_id: appId,
                          hashtag: hashtag,
                          redirect_uri: redirectURI,
                          quote: quote,
                          mobile_iframe: mobileIframe
                        })));

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
    return _this;
  }

  var _proto = Share.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        loading = _this$props2.loading,
        error = _this$props2.error,
        data = _this$props2.data;
    return children({
      loading: loading,
      handleClick: this.handleClick,
      error: error,
      data: data
    });
  };

  return Share;
}(_react.Component);

(0, _defineProperty2.default)(Share, "defaultProps", {
  href: undefined,
  hashtag: undefined,
  quote: undefined,
  mobileIframe: undefined,
  display: undefined,
  appId: undefined,
  redirectURI: undefined
});

var _default = (0, _react.forwardRef)(function (props, ref) {
  return _react.default.createElement(_Process.default, null, function (_ref) {
    var loading = _ref.loading,
        handleProcess = _ref.handleProcess,
        data = _ref.data,
        error = _ref.error;
    return _react.default.createElement(Share, (0, _extends2.default)({}, props, {
      loading: loading,
      handleProcess: handleProcess,
      data: data,
      error: error,
      ref: ref
    }));
  });
});

exports.default = _default;
//# sourceMappingURL=Share.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/ShareButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-facebook/lib/ShareButton.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = ShareButton;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Share = _interopRequireDefault(__webpack_require__(/*! ./Share */ "./node_modules/react-facebook/lib/Share.js"));

function ShareButton(props) {
  var className = props.className,
      children = props.children,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "children"]);
  return _react.default.createElement(_Share.default, rest, function (_ref) {
    var loading = _ref.loading,
        handleClick = _ref.handleClick;
    return _react.default.createElement("button", {
      type: "button",
      disabled: loading,
      className: className,
      onClick: handleClick
    }, children);
  });
}

ShareButton.defaultProps = (0, _extends2.default)({}, _Share.default.defaultProps, {
  className: undefined
});
//# sourceMappingURL=ShareButton.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Status.js":
/*!***************************************************!*\
  !*** ./node_modules/react-facebook/lib/Status.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "./node_modules/react-facebook/lib/Initialize.js"));

var _Subscribe = _interopRequireDefault(__webpack_require__(/*! ./Subscribe */ "./node_modules/react-facebook/lib/Subscribe.js"));

function getLoginStatus(api) {
  var response;
  return _regenerator.default.async(function getLoginStatus$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator.default.awrap(api.getLoginStatus());

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.status);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

var Status =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Status, _Component);

  function Status() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      loading: true
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function _callee(api) {
      return _regenerator.default.async(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = _this;
              _context2.next = 3;
              return _regenerator.default.awrap(getLoginStatus(api));

            case 3:
              _context2.t1 = _context2.sent;
              _context2.t2 = {
                status: _context2.t1,
                loading: false
              };

              _context2.t0.setState.call(_context2.t0, _context2.t2);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleStatusChange", function (response) {
      _this.setState({
        status: response.status,
        loading: false
      });
    });
    return _this;
  }

  var _proto = Status.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    var _this$state = this.state,
        status = _this$state.status,
        loading = _this$state.loading;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, _react.default.createElement(_Subscribe.default, {
      event: "auth.statusChange",
      onChange: this.handleStatusChange
    }, children({
      status: status,
      loading: loading
    })));
  };

  return Status;
}(_react.Component);

exports.default = Status;
//# sourceMappingURL=Status.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/Subscribe.js":
/*!******************************************************!*\
  !*** ./node_modules/react-facebook/lib/Subscribe.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Initialize = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "./node_modules/react-facebook/lib/Initialize.js"));

var LoginStatus =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(LoginStatus, _Component);

  function LoginStatus() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleReady", function _callee(api) {
      var event;
      return _regenerator.default.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event = _this.props.event;

              _this.setState({
                api: api
              });

              _context.next = 4;
              return _regenerator.default.awrap(api.subscribe(event, _this.handleChange));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function () {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange.apply(void 0, arguments);
      }
    });
    return _this;
  }

  var _proto = LoginStatus.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    var api = this.state.api,
        event = this.props.event;

    if (api) {
      api.unsubscribe(event, this.handleChange);
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return _react.default.createElement(_Initialize.default, {
      onReady: this.handleReady
    }, children);
  };

  return LoginStatus;
}(_react.Component);

exports.default = LoginStatus;
(0, _defineProperty2.default)(LoginStatus, "defaultProps", {
  onChange: undefined
});
//# sourceMappingURL=Subscribe.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/ColorScheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/ColorScheme.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  LIGHT: 'light',
  DARK: 'dark'
};
exports.default = _default;
//# sourceMappingURL=ColorScheme.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/CommentsOrderBy.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/CommentsOrderBy.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  SOCIAL: 'social',
  REVERSE_TIME: 'reverse_time',
  TIME: 'time'
};
exports.default = _default;
//# sourceMappingURL=CommentsOrderBy.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/Fields.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/Fields.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
// 3.0 fields without app review https://developers.facebook.com/docs/facebook-login/permissions/?locale=en_US#reference-default
var _default = ['id', 'first_name', 'last_name', 'middle_name', 'name', 'name_format', 'picture', 'short_name', 'email'];
exports.default = _default;
//# sourceMappingURL=Fields.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/LikeAction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/LikeAction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  LIKE: 'like',
  RECOMMEND: 'recommend'
};
exports.default = _default;
//# sourceMappingURL=LikeAction.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/LikeLayout.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/LikeLayout.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  STANDARD: 'standard',
  BUTTON_COUNT: 'button_count',
  BUTTON: 'button',
  BOX_COUNT: 'box_count'
};
exports.default = _default;
//# sourceMappingURL=LikeLayout.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/LikeSize.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/LikeSize.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  SMALL: 'small',
  LARGE: 'large'
};
exports.default = _default;
//# sourceMappingURL=LikeSize.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/LoginStatus.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/LoginStatus.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  CONNECTED: 'connected',
  AUTHORIZATION_EXPIRED: 'authorization_expired',
  NOT_AUTHORIZED: 'not_authorized',
  UNKNOWN: 'unknown'
};
exports.default = _default;
//# sourceMappingURL=LoginStatus.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/MessengerColor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/MessengerColor.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  BLUE: 'blue',
  WHITE: 'white'
};
exports.default = _default;
//# sourceMappingURL=MessengerColor.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/constants/MessengerSize.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-facebook/lib/constants/MessengerSize.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = {
  SMALL: 'small',
  MEDIUM: 'medium',
  STANDARD: 'standard',
  LARGE: 'large',
  XLARGE: 'xlarge'
};
exports.default = _default;
//# sourceMappingURL=MessengerSize.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/hooks/useApi.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-facebook/lib/hooks/useApi.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _canUseDom = _interopRequireDefault(__webpack_require__(/*! can-use-dom */ "./node_modules/can-use-dom/index.js"));

var _FacebookContext = _interopRequireDefault(__webpack_require__(/*! ../FacebookContext */ "./node_modules/react-facebook/lib/FacebookContext.js"));

var _default = function _default(onReady) {
  var _useContext = (0, _react.useContext)(_FacebookContext.default),
      handleInit = _useContext.handleInit,
      api = _useContext.api;

  (0, _react.useState)(function _callee() {
    var api2;
    return _regenerator.default.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!_canUseDom.default) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return _regenerator.default.awrap(handleInit());

          case 3:
            api2 = _context.sent;

            if (onReady) {
              onReady(api2);
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  return [api, handleInit];
};

exports.default = _default;
//# sourceMappingURL=useApi.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/hooks/useShare.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-facebook/lib/hooks/useShare.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _clearUndefinedProperties = _interopRequireDefault(__webpack_require__(/*! ../utils/clearUndefinedProperties */ "./node_modules/react-facebook/lib/utils/clearUndefinedProperties.js"));

var _useApi2 = _interopRequireDefault(__webpack_require__(/*! ./useApi */ "./node_modules/react-facebook/lib/hooks/useApi.js"));

var _default = function _default() {
  var _useApi = (0, _useApi2.default)(),
      prepareApi = _useApi[1];

  function handleShare(options) {
    var href, display, hashtag, redirectUri, quote, mobileIframe, rest, api;
    return _regenerator.default.async(function handleShare$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            href = options.href, display = options.display, hashtag = options.hashtag, redirectUri = options.redirectUri, quote = options.quote, mobileIframe = options.mobileIframe, rest = (0, _objectWithoutPropertiesLoose2.default)(options, ["href", "display", "hashtag", "redirectUri", "quote", "mobileIframe"]);
            _context.next = 3;
            return _regenerator.default.awrap(prepareApi());

          case 3:
            api = _context.sent;
            return _context.abrupt("return", api.ui((0, _clearUndefinedProperties.default)((0, _extends2.default)({
              method: 'share',
              href: href,
              display: display,
              app_id: api.getAppId(),
              hashtag: hashtag,
              redirect_uri: redirectUri,
              quote: quote,
              mobile_iframe: mobileIframe
            }, rest))));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  return handleShare;
};

exports.default = _default;
//# sourceMappingURL=useShare.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-facebook/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;

var _FacebookProvider2 = _interopRequireDefault(__webpack_require__(/*! ./FacebookProvider */ "./node_modules/react-facebook/lib/FacebookProvider.js"));

exports.FacebookProvider = _FacebookProvider2.default;

var _Parser2 = _interopRequireDefault(__webpack_require__(/*! ./Parser */ "./node_modules/react-facebook/lib/Parser.js"));

exports.Parser = _Parser2.default;

var _Initialize2 = _interopRequireDefault(__webpack_require__(/*! ./Initialize */ "./node_modules/react-facebook/lib/Initialize.js"));

exports.Initialize = _Initialize2.default;

var _Like2 = _interopRequireDefault(__webpack_require__(/*! ./Like */ "./node_modules/react-facebook/lib/Like.js"));

exports.Like = _Like2.default;

var _Send2 = _interopRequireDefault(__webpack_require__(/*! ./Send */ "./node_modules/react-facebook/lib/Send.js"));

exports.Send = _Send2.default;

var _Share2 = _interopRequireDefault(__webpack_require__(/*! ./Share */ "./node_modules/react-facebook/lib/Share.js"));

exports.Share = _Share2.default;

var _ShareButton2 = _interopRequireDefault(__webpack_require__(/*! ./ShareButton */ "./node_modules/react-facebook/lib/ShareButton.js"));

exports.ShareButton = _ShareButton2.default;

var _Page2 = _interopRequireDefault(__webpack_require__(/*! ./Page */ "./node_modules/react-facebook/lib/Page.js"));

exports.Page = _Page2.default;

var _Login2 = _interopRequireDefault(__webpack_require__(/*! ./Login */ "./node_modules/react-facebook/lib/Login.js"));

exports.Login = _Login2.default;

var _LoginButton2 = _interopRequireDefault(__webpack_require__(/*! ./LoginButton */ "./node_modules/react-facebook/lib/LoginButton.js"));

exports.LoginButton = _LoginButton2.default;

var _EmbeddedPost2 = _interopRequireDefault(__webpack_require__(/*! ./EmbeddedPost */ "./node_modules/react-facebook/lib/EmbeddedPost.js"));

exports.EmbeddedPost = _EmbeddedPost2.default;

var _EmbeddedVideo2 = _interopRequireDefault(__webpack_require__(/*! ./EmbeddedVideo */ "./node_modules/react-facebook/lib/EmbeddedVideo.js"));

exports.EmbeddedVideo = _EmbeddedVideo2.default;

var _Comments2 = _interopRequireDefault(__webpack_require__(/*! ./Comments */ "./node_modules/react-facebook/lib/Comments.js"));

exports.Comments = _Comments2.default;

var _CommentsCount2 = _interopRequireDefault(__webpack_require__(/*! ./CommentsCount */ "./node_modules/react-facebook/lib/CommentsCount.js"));

exports.CommentsCount = _CommentsCount2.default;

var _Feed2 = _interopRequireDefault(__webpack_require__(/*! ./Feed */ "./node_modules/react-facebook/lib/Feed.js"));

exports.Feed = _Feed2.default;

var _Group2 = _interopRequireDefault(__webpack_require__(/*! ./Group */ "./node_modules/react-facebook/lib/Group.js"));

exports.Group = _Group2.default;

var _Subscribe2 = _interopRequireDefault(__webpack_require__(/*! ./Subscribe */ "./node_modules/react-facebook/lib/Subscribe.js"));

exports.Subscribe = _Subscribe2.default;

var _Status2 = _interopRequireDefault(__webpack_require__(/*! ./Status */ "./node_modules/react-facebook/lib/Status.js"));

exports.Status = _Status2.default;

var _Profile2 = _interopRequireDefault(__webpack_require__(/*! ./Profile */ "./node_modules/react-facebook/lib/Profile.js"));

exports.Profile = _Profile2.default;

var _CustomChat2 = _interopRequireDefault(__webpack_require__(/*! ./CustomChat */ "./node_modules/react-facebook/lib/CustomChat.js"));

exports.CustomChat = _CustomChat2.default;

var _MessageUs2 = _interopRequireDefault(__webpack_require__(/*! ./MessageUs */ "./node_modules/react-facebook/lib/MessageUs.js"));

exports.MessageUs = _MessageUs2.default;

var _MessengerCheckbox2 = _interopRequireDefault(__webpack_require__(/*! ./MessengerCheckbox */ "./node_modules/react-facebook/lib/MessengerCheckbox.js"));

exports.MessengerCheckbox = _MessengerCheckbox2.default;

var _SendToMessenger2 = _interopRequireDefault(__webpack_require__(/*! ./SendToMessenger */ "./node_modules/react-facebook/lib/SendToMessenger.js"));

exports.SendToMessenger = _SendToMessenger2.default;

var _LikeSize2 = _interopRequireDefault(__webpack_require__(/*! ./constants/LikeSize */ "./node_modules/react-facebook/lib/constants/LikeSize.js"));

exports.LikeSize = _LikeSize2.default;

var _LikeLayout2 = _interopRequireDefault(__webpack_require__(/*! ./constants/LikeLayout */ "./node_modules/react-facebook/lib/constants/LikeLayout.js"));

exports.LikeLayout = _LikeLayout2.default;

var _ColorScheme2 = _interopRequireDefault(__webpack_require__(/*! ./constants/ColorScheme */ "./node_modules/react-facebook/lib/constants/ColorScheme.js"));

exports.ColorScheme = _ColorScheme2.default;

var _LikeAction2 = _interopRequireDefault(__webpack_require__(/*! ./constants/LikeAction */ "./node_modules/react-facebook/lib/constants/LikeAction.js"));

exports.LikeAction = _LikeAction2.default;

var _CommentsOrderBy2 = _interopRequireDefault(__webpack_require__(/*! ./constants/CommentsOrderBy */ "./node_modules/react-facebook/lib/constants/CommentsOrderBy.js"));

exports.CommentsOrderBy = _CommentsOrderBy2.default;

var _MessengerSize2 = _interopRequireDefault(__webpack_require__(/*! ./constants/MessengerSize */ "./node_modules/react-facebook/lib/constants/MessengerSize.js"));

exports.MessengerSize = _MessengerSize2.default;

var _MessengerColor2 = _interopRequireDefault(__webpack_require__(/*! ./constants/MessengerColor */ "./node_modules/react-facebook/lib/constants/MessengerColor.js"));

exports.MessengerColor = _MessengerColor2.default;

var _LoginStatus2 = _interopRequireDefault(__webpack_require__(/*! ./constants/LoginStatus */ "./node_modules/react-facebook/lib/constants/LoginStatus.js"));

exports.LoginStatus = _LoginStatus2.default;

var _Fields2 = _interopRequireDefault(__webpack_require__(/*! ./constants/Fields */ "./node_modules/react-facebook/lib/constants/Fields.js"));

exports.Fields = _Fields2.default;

var _FacebookContext2 = _interopRequireDefault(__webpack_require__(/*! ./FacebookContext */ "./node_modules/react-facebook/lib/FacebookContext.js"));

exports.FacebookContext = _FacebookContext2.default;

var _useShare2 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useShare */ "./node_modules/react-facebook/lib/hooks/useShare.js"));

exports.useShare = _useShare2.default;

var _useApi2 = _interopRequireDefault(__webpack_require__(/*! ./hooks/useApi */ "./node_modules/react-facebook/lib/hooks/useApi.js"));

exports.useApi = _useApi2.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/utils/clearUndefinedProperties.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-facebook/lib/utils/clearUndefinedProperties.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = clearUndefinedProperties;

function clearUndefinedProperties(obj) {
  if (!obj) {
    return obj;
  }

  var newObj = {};
  Object.keys(obj).forEach(function (propertyName) {
    var value = obj[propertyName];

    if (value !== undefined) {
      newObj[propertyName] = value;
    }
  });
  return newObj;
}
//# sourceMappingURL=clearUndefinedProperties.js.map

/***/ }),

/***/ "./node_modules/react-facebook/lib/utils/getCurrentHref.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-facebook/lib/utils/getCurrentHref.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = getCurrentHref;

var _canUseDom = _interopRequireDefault(__webpack_require__(/*! can-use-dom */ "./node_modules/can-use-dom/index.js"));

function getCurrentHref() {
  if (!_canUseDom.default) {
    return 'https://www.facebook.com';
  }

  return window.location.href;
}
//# sourceMappingURL=getCurrentHref.js.map

/***/ }),

/***/ "./node_modules/react-spinner-children/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-spinner-children/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spin = __webpack_require__(/*! spin.js */ "./node_modules/spin.js/spin.js");

var _spin2 = _interopRequireDefault(_spin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateSpinner();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateSpinner();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.spinner) {
        this.spinner.stop();
        this.spinner = null;
      }
    }
  }, {
    key: 'updateSpinner',
    value: function updateSpinner() {
      var loaded = this.props.loaded;

      if (!loaded && !this.spinner) {
        this.spinner = new _spin2.default(this.props.config);
        this.spinner.spin(this.refs.loader);
      } else if (loaded && this.spinner) {
        this.spinner.stop();
        this.spinner = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loaded = _props.loaded,
          className = _props.className;


      if (loaded) {
        return this.props.children ? _react.Children.only(this.props.children) : null;
      }

      return _react2.default.createElement('div', { className: className, ref: 'loader' });
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.propTypes = {
  className: _propTypes2.default.string,
  config: _propTypes2.default.object.isRequired,
  loaded: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node
};
Spinner.defaultProps = {
  config: {},
  loaded: false,
  className: 'loader'
};
exports.default = Spinner;

/***/ }),

/***/ "./node_modules/spin.js/spin.js":
/*!**************************************!*\
  !*** ./node_modules/spin.js/spin.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if ( true && module.exports) module.exports = factory()

  /* AMD module */
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

  /* Browser global */
  else {}
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));


/***/ })

})
//# sourceMappingURL=letter-writing.js.05dc7d9b8d68233ac2db.hot-update.js.map