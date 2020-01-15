webpackHotUpdate("static/development/pages/guide.js",{

/***/ "./pages/guide.js":
/*!************************!*\
  !*** ./pages/guide.js ***!
  \************************/
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
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _guides_GuideLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guides/GuideLayout */ "./pages/guides/GuideLayout.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




 // Layout



var ulStyles = {
  marginLeft: "-30px",
  listStyleType: "none"
};
var liStyle = {
  paddingBottom: "15px"
};

var Guide =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Guide, _React$Component);

  function Guide(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Guide);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Guide).call(this, props));
    _this.state = {
      collapse: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Guide, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("title", null, "Guides | CXC Spanish Guide"), __jsx("meta", {
        name: "og:title",
        content: "Guides |  CXC Spanish Guide"
      }), __jsx("meta", {
        name: "og:site_name",
        content: "CXC Spanish Online"
      }), __jsx("meta", {
        name: "description",
        content: "Take your Spanish to the next level with detailed lesson guides, completed with examples and practice questions."
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], null, __jsx("a", {
        href: "/"
      }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
        active: true
      }, "Guides")), __jsx(_guides_GuideLayout__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], null, "Guides"), __jsx("p", null, "Our guides are designed to help you master a wide range of topics in Spanish. We cover basic topis from numbers and the alphabet, to verb tenses and and fun topics"), __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_8__["MobileView"], null, __jsx(react_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          height: "200px",
          width: "100%"
        },
        src: ["https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", "", ""],
        alt: ""
      })), __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_8__["BrowserView"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 6,
        lg: 6
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          height: "200px",
          width: "100%"
        },
        src: ["https://images.unsplash.com/photo-1568650136602-ded24b86c5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", "", ""],
        alt: ""
      })), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 6,
        lg: 6
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          height: "200px",
          width: "100%"
        },
        src: ["https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", "", ""],
        alt: ""
      })))))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], null, "Essentials"), __jsx("p", null, "These essential guides will help you to master the basics elements of Spanish, and serves as building blocks to help you to build on your fluency.", " "), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6
      }, __jsx("ul", {
        className: "ul-st"
      }, __jsx("li", null, __jsx("a", {
        preload: true,
        href: "/guides/study-tips"
      }, "Study Tips")), __jsx("li", null, __jsx("a", {
        href: "/guides/the-spanish-alphabet"
      }, "The Spanish Alphabet")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Genders in Spanish")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Pronunciation Tips")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Dates in Spanish")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Adjectives in Spanish")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6
      }, __jsx("ul", {
        className: "ul-st"
      }, __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "'Por' vs. 'Para'")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "At the Airport")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Oral Exercises")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Articles in Spanish")))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null, __jsx("small", {
        className: "text-danger"
      }, "Not all articles are completed. We'll let you know when we're done"))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], null, "Verbs and Tenses"), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6
      }, __jsx("ul", {
        className: "ul-st"
      }, __jsx("li", null, __jsx("a", {
        href: "/guides/ser-vs-estar"
      }, "'Ser' vs. 'Estar'")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Preterite vs. Imperfect")), __jsx("li", null, __jsx("a", {
        href: "/guides/how-to-use-gustar"
      }, "How to use 'Gustar'")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6
      }, __jsx("ul", {
        className: "ul-st"
      }, __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Spanish Verb Types")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "'Ser' vs. 'Estar'", " ", __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
        pill: true,
        theme: "success"
      }, "quiz"))), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "The Imperfect Subjunctive")))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null, __jsx("small", {
        className: "text-danger"
      }, "Not all articles are completed. We'll let you know when we're done"))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], null, "How To"), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6
      }, __jsx("ul", {
        className: "ul-st"
      }, __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "How to Order Food in Spanish")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "How to Remember Verb Conjugations")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "How to Ask for Directions in Spanish")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6
      }, __jsx("ul", {
        className: "ul-st"
      }, __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "How to Talk About Locations in Spanish")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "How to Improve Spanish Listening Skills")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "How to Use Online Translators")))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null, __jsx("small", {
        className: "text-danger"
      }, "Not all articles are completed. We'll let you know when we're done"))), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], null, "Fun"), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6
      }, __jsx("ul", {
        className: "ul-st"
      }, __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Texting in Spanish")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Funny Spanish Jokes")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Traditional Spanish Food")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Apps that Teach You Spanish")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 12,
        md: 6,
        lg: 6,
        xl: 6
      }, __jsx("ul", {
        className: "ul-st"
      }, __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Traditional Spanish Food")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Tongue Twisters in Spanish")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Avoid These Top 5 Mistakes")), __jsx("li", null, __jsx("a", {
        href: "/guides/"
      }, "Flirting in Spanish")))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null, __jsx("small", {
        className: "text-danger"
      }, "Not all articles are completed. We'll let you know when we're done"))))), __jsx("style", null, ".ul-st {\n          margin-left: -15px;\n        }\n\n        .ul-st li {\n          padding-bottom: 15px;\n        }\n\n        .ul-st li a {\n          color: #0084cf;\n        }"));
    }
  }]);

  return Guide;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Guide);

/***/ })

})
//# sourceMappingURL=guide.js.79b0e934122b523fc226.hot-update.js.map