webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fraheemmcdonald%2FDesktop%2Fcxcspanish%2Fpages%2F_error.js!./":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fraheemmcdonald%2FDesktop%2Fcxcspanish%2Fpages%2F_error.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_HomeCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/HomeCarousel */ "./home/HomeCarousel.js");
/* harmony import */ var _home_Marketing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/Marketing */ "./home/Marketing.js");
/* harmony import */ var _home_MailingListSubscribe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/MailingListSubscribe */ "./home/MailingListSubscribe.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _common_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Message */ "./common/Message.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Home components



 // Layout




function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "404 Page Not Found | CXC Spanish Guide"), __jsx("meta", {
    name: "og:title",
    content: "404 Page Not Found | CXC Spanish Guide"
  }), __jsx("meta", {
    name: "og:site_name",
    content: "CXC Spanish Online"
  }), __jsx("meta", {
    name: "description",
    content: "We couldn't find the page you were lookign for. Let us help you."
  })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "404 - Page Not Found"))), __jsx(react_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      maxWidth: "100%",
      maxHeight: "100%"
    },
    src: ["https://cdn.shopify.com/s/files/1/0322/6897/files/404-ermalink.png?432866230176278629", "https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/25-Outstanding-404-Page-Examples-You-Have-to-See.webp", "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/404-not-found-t.jpg", "https://www.hover.com/blog/wp-content/uploads/2015/08/404-page-error.png", "https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg", "https://www.cdgi.com/wp-content/uploads/2019/05/404-Pages.jpg", "https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg", "http://smileforevernyc.com/wp-content/uploads/2018/06/404-Error.png", "https://www.jco.fi/wp-content/uploads/2019/10/app.png", "https://cashkaro.com/blog/wp-content/uploads/sites/5/2018/01/404-Status-Checker-Power-Query.png", "https://cdn.searchenginejournal.com/wp-content/uploads/2017/08/3.-dogstudio404.png"],
    alt: "404 image"
  }));
}

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fraheemmcdonald%2FDesktop%2Fcxcspanish%2Fpages%2F_error.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fraheemmcdonald%2FDesktop%2Fcxcspanish%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fraheemmcdonald%2FDesktop%2Fcxcspanish%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.b93cc40c3c4db6ec1991.hot-update.js.map