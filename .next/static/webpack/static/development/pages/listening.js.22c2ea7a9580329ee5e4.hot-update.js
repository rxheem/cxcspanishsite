webpackHotUpdate("static/development/pages/listening.js",{

/***/ "./common/EssentialBooks.js":
/*!**********************************!*\
  !*** ./common/EssentialBooks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var EssentialBooks = function EssentialBooks(props) {
  return __jsx("div", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    className: ""
  }, "Essentials"), __jsx("br", null), __jsx("ul", {
    style: {
      marginLeft: "-25px",
      listStyleType: "none"
    }
  }, __jsx("li", null, __jsx(PDFFile, {
    title: "Spanish For Dummies",
    href: "https://dl.dropbox.com/s/rjglra0ra4ved1z/Spanish%20Essentials%20For%20Dummies.pdf?dl=0"
  })), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(PDFFile, {
    title: "Modern Spanish Grammar",
    href: "https://dl.dropbox.com/s/fibr4yjdzv4qovn/modern-spanish-grammar.pdf?dl=0"
  })), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(PDFFile, {
    title: "Spanish Basics",
    href: "https://dl.dropbox.com/s/hmime50fn00u7k1/Free%20K.pdf?dl=0"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (EssentialBooks);

/***/ }),

/***/ "./listening-components/ListeningLayout.js":
/*!*************************************************!*\
  !*** ./listening-components/ListeningLayout.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/PDFFile */ "./common/PDFFile.js");
/* harmony import */ var _common_DropboxView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/DropboxView */ "./common/DropboxView.js");
/* harmony import */ var _common_GoogleDriveView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/GoogleDriveView */ "./common/GoogleDriveView.js");
/* harmony import */ var _common_EssentialBooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/EssentialBooks */ "./common/EssentialBooks.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // Style for the onft icons

var liStyles = {
  display: "inline!important",
  paddingLeft: "50px"
};
var oLiStyles = {
  display: "inline"
};
var ulStyles = {
  listStyleType: "none",
  paddingTop: "15px"
};

var ListeningLayout = function ListeningLayout(props) {
  return __jsx("div", null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8,
    xl: 8
  }, props.children, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_2__["BrowserView"], null, __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx("span", {
    className: "border border-light"
  }, __jsx("ul", {
    style: ulStyles
  }, __jsx("li", {
    style: oLiStyles
  }, __jsx("i", {
    style: {
      color: "#8a3ab9"
    },
    className: "fab fa-instagram"
  }), __jsx("a", {
    className: "text-muted",
    style: {
      paddingLeft: "10px"
    },
    href: "https://www.instagram.com/cxcspanish/",
    target: "_blank"
  }, "cxcspanish")), __jsx("li", {
    style: liStyles
  }, __jsx("i", {
    style: {
      color: " #3b5998"
    },
    className: "fab fa-facebook"
  }), __jsx("a", {
    className: "text-muted",
    style: {
      paddingLeft: "10px"
    },
    href: "https://www.facebook.com/cxcspanishguide/?__tn__=%2Cd%2CP-R&eid=ARBp5b8r2d06OFKljjfcKxLq6dNjDPkODENJqB9yAsRgKUQHpmOrhWiLifsxgPnYtt5njC48bXpGjQii",
    target: "_blank"
  }, "CXC Spanish Gude")), __jsx("li", {
    style: liStyles
  }, __jsx("i", {
    style: {
      color: "#00acee"
    },
    className: "fab fa-twitter"
  }), __jsx("a", {
    className: "text-muted",
    style: {
      paddingLeft: "10px"
    },
    href: "https://www.twitter.com/cxcspanish",
    target: "_blank"
  }, "cxcspanish"))))))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4
  }, __jsx("br", {
    className: "d-sm-none"
  }), __jsx(_common_DropboxView__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("br", null), __jsx(_common_GoogleDriveView__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("br", null), __jsx(_common_EssentialBooks__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (ListeningLayout);

/***/ })

})
//# sourceMappingURL=listening.js.22c2ea7a9580329ee5e4.hot-update.js.map