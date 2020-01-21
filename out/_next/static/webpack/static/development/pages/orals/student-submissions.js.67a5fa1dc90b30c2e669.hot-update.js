webpackHotUpdate("static/development/pages/orals/student-submissions.js",{

/***/ "./pages/orals/student-submissions.js":
/*!********************************************!*\
  !*** ./pages/orals/student-submissions.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-seo-component */ "./node_modules/react-seo-component/index.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _orals_components_OralsLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../orals-components/OralsLayout */ "./orals-components/OralsLayout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Layout



var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
console.log(today);

var StudentSubmissions = function StudentSubmissions(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Student Submissions | CXC Spanish Online",
    pathname: "https://www.cxcspnish/mailing-list",
    description: "",
    siteLanguage: "en",
    twitterUsername: "_rxheem",
    author: "Raheem McDonald",
    article: true,
    publishedDate: "01/13/2020",
    modifiedDate: today
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/orals"
  }, "Orals")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "Student Submissions")), __jsx(_orals_components_OralsLayout__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Student Submissions"), __jsx("br", null), __jsx("p", null, "Our student submissions - where we listen and learn from each other. Listen to our students as they answer some of the most common questions from each category."), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "/orals/student-/submissions/"
  }, "Daily Routine")), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx("a", {
    href: "/orals/student-/submissions/"
  }, "Sports and Recreational")), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx("a", {
    href: "/orals/student-/submissions/"
  }, "Home and Family")), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx("a", {
    href: "/orals/student-/submissions/"
  }, "Travel")), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx("a", {
    href: "/orals/student-/submissions/"
  }, "School and Career")), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx("a", {
    href: "/orals/student-/submissions/"
  }, "Shopping")))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    style: {
      height: "100%"
    },
    src: "http://misiones.minrex.gob.cu/sites/default/files/styles/750_ancho/public/imagenes/editorjamaica/articulos/img-20171117-wa0016.jpg?itok=hgUvspp9"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (StudentSubmissions);

/***/ })

})
//# sourceMappingURL=student-submissions.js.67a5fa1dc90b30c2e669.hot-update.js.map