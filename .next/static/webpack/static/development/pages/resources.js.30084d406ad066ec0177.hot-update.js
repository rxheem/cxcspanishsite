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
        title: "Get Free CXC Past Papers | CXC Spanish Online",
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
      }, "Resources")), __jsx(_resources_components_ResourcesLayout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("a", {
        href: "https://dl.dropbox.com/s/2mfr0aiatvd6ok2/CSEC%20French%20Past%20Papers2005-2016.pdf?dl=0"
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481930_3.jpg", ""]
      })), __jsx("h6", {
        style: {
          paddingTop: "5px"
        }
      }, "French")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", {
        className: "d-sm-none"
      }), __jsx("a", {
        href: "https://dl.dropbox.com/s/x8mb5ttahb96cdm/CSEC%20Human%20and%20Social%20Biology%20Past%20Papers%202005-2016.pdf?dl=0"
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482340_3.jpg", ""]
      })), __jsx("h6", {
        style: {
          paddingTop: "5px"
        }
      }, "HS. Biology")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", {
        className: "d-sm-none"
      }), __jsx("a", {
        href: "https://dl.dropbox.com/s/ua9y9p9qzoj0uom/CSEC%20Mathematics%20Past%20Papers%202002-2016.pdf?dl=0"
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482784_5.jpg", "https://cxc-store.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482784_5.jpg"]
      })), __jsx("h6", {
        style: {
          paddingTop: "5px"
        }
      }, "Mathematics")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", {
        className: "d-sm-none"
      }), __jsx("a", {
        href: "https://dl.dropbox.com/s/lah9uv8qmfnt5d5/CSEC%20Information%20Technology%20Past%20Papers%202005-2016.pdf?dl=0"
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482586_3.jpg", ""]
      })), __jsx("h6", {
        style: {
          paddingTop: "5px"
        }
      }, "Info Tech")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: "https://dl.dropbox.com/s/1yjzpsrvstln7ef/CSEC%20Additional%20Mathematics%20Past%20Papers%202012-2016.pdf?dl=0"
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482357_25.jpg", ""]
      })), __jsx("h6", {
        style: {
          paddingTop: "5px"
        }
      }, "Add Maths")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482630_4.jpg", ""]
      })), __jsx("p", null, "Spanish CSEC")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: "https://dl.dropbox.com/s/roab9y8tla4omwn/CSEC%C2%AE%20Electronic%20Document%20Preparation%20and%20Management%20Past%20Papers.pdf?dl=0"
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482593_23.jpg"]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      }))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: 6,
        md: 3,
        lg: 3,
        xl: 3
      }, __jsx("br", null), __jsx("a", {
        href: ""
      }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: "100%"
        },
        src: ["", ""]
      })))), __jsx("br", null), __jsx("br", null), __jsx("p", null, "Don't see your subject here? Send us an email a", " ", __jsx("a", {
        href: "mailto:hola@cxcspanish.com"
      }, "hola@cxcspnish.com"), " and we'll source them for you.")))));
    }
  }]);

  return Resources;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ })

})
//# sourceMappingURL=resources.js.30084d406ad066ec0177.hot-update.js.map