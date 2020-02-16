webpackHotUpdate("static/development/pages/meetings/12152020.js",{

/***/ "./pages/meetings/12152020.js":
/*!************************************!*\
  !*** ./pages/meetings/12152020.js ***!
  \************************************/
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
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-seo-component */ "./node_modules/react-seo-component/index.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");

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

var renderer = function renderer(_ref) {
  var days = _ref.days,
      hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds,
      completed = _ref.completed;

  if (completed) {
    // Render a completed state
    return __jsx("p", null, "Done");
  } else {
    // Render a countdown
    return __jsx("span", null, days, " days, ", hours, " hours and ", minutes, " minutes to go!");
  }
};

var TwelveFifteen = function TwelveFifteen(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: "Let's Talk Session | CXC Spanish Online",
    description: "Join our Let's Talk session on Zoom, starting on February 15, 2020 at 2:00pm GMT-5.",
    pathname: "",
    siteLanguage: "en",
    twitterUsername: "_rxheem",
    author: "Raheem McDonald",
    article: true,
    publishedDate: today,
    modifiedDate: today
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/meetings"
  }, "Meetings")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "Hosting Feb 15, 2020")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    style: {
      width: "100%"
    },
    src: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/07/zoom-app-hed-796x465.png"
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Let's Talk Session"), __jsx("br", null), __jsx("p", null, "We wil be hosting a 30 minutes", " ", __jsx("span", {
    style: {
      color: "orange"
    }
  }, __jsx("b", null, "Let's Talk")), " ", "talk session will be held via the", " ", __jsx("a", {
    target: "_blank",
    href: "https://zoom.us/"
  }, "Zoom app,"), " ", "on ", __jsx("b", null, "Saturday, February 15, 2020"), " at ", __jsx("b", null, "2:00pm GMT-5"), " . We'll be discussing"), __jsx("ul", {
    style: {
      marginLeft: "-20px"
    }
  }, __jsx("li", null, "Our aims as a group, and what to expect of us"), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, "Our approach going forward"), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, "What we expect of our students"), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, "Tutoring and extra classes"), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, "How we plan to help with other subject areas"), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, "What to do after CSEC")), __jsx("br", null), __jsx("p", null, "As well as to answer any and every question that you may have! We'd love to use this as an opportunity to get to know our students so be present as ask as much as you like.")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], {
    style: {
      color: "skyblue"
    }
  }, __jsx("b", null, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    intervalDelay: 0,
    precision: 3,
    date: new Date("2/15/2020"),
    renderer: renderer
  })))), __jsx("br", null)), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    md: 4,
    lg: 4
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    style: {
      width: "100%"
    },
    src: "https://sheaf1-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Gloria-Sun-Lets-Talk.png"
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx("br", null), __jsx("p", null, __jsx("b", null, " Topic: "), " CXC Spanish Online :: Let's Talk", __jsx("br", null), __jsx("b", null, "Time: "), " Feb 15, 2020 02:00 PM", __jsx("br", null), __jsx("b", null, "Driect Link"), " ", __jsx("a", {
    target: "_blank",
    href: "https://us04web.zoom.us/j/370403487"
  }, "here"), __jsx("br", null), __jsx("b", null, "Meeting ID:"), " 370 403 487")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null, " ", __jsx("b", null, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    intervalDelay: 0,
    precision: 3,
    date: new Date("2/15/2020"),
    renderer: renderer
  })))), __jsx("br", null), __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_5__["default"], {
    opts: opts,
    videoId: "G0VKzkl-W-c"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TwelveFifteen);

/***/ })

})
//# sourceMappingURL=12152020.js.4e7d6a36ab53872c9e07.hot-update.js.map