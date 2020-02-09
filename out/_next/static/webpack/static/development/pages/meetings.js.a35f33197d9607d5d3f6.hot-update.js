webpackHotUpdate("static/development/pages/meetings.js",{

/***/ "./pages/meetings.js":
/*!***************************!*\
  !*** ./pages/meetings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/es/YouTube.js");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var _common_BetaMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/BetaMessage */ "./common/BetaMessage.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-seo-component */ "./node_modules/react-seo-component/index.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy; // Common



 // Layout


var opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    autoplay: 0
  }
};

var Meetings = function Meetings(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: "Online Group Meetings | CXC Spanish Online",
    description: "Join our online group meetings, where we discuss any and everything related to your CXC exams.",
    pathname: "",
    siteLanguage: "en",
    twitterUsername: "_rxheem",
    author: "Raheem McDonald",
    article: true,
    publishedDate: today,
    modifiedDate: today
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "Meetings")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8
  }, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    style: {
      width: "100%"
    },
    src: "http://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2016/06/The-future-of-video-conferencing-1-1.png"
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Online Group Meetings"), __jsx("br", null), __jsx("p", null, "Join our online group meetings, where we discuss any and everything related to your CXC exams.")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null)), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Upcoming Meetings"), __jsx("br", null), __jsx("p", null)), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null)), __jsx("br", null)), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    md: 4,
    lg: 4
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Latest Meetings"), __jsx("p", null, __jsx("i", null, "Nothing here yet")))), __jsx("br", null), __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_5__["default"], {
    opts: opts,
    videoId: "vFhAEoCF7jg"
  }), __jsx("br", null), __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_5__["default"], {
    opts: opts,
    videoId: "HqncX7RE0wM"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Meetings);

/***/ })

})
//# sourceMappingURL=meetings.js.a35f33197d9607d5d3f6.hot-update.js.map