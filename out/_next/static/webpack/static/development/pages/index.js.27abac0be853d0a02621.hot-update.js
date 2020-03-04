webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/js/cloudflare.js":
/*!*********************************!*\
  !*** ./assets/js/cloudflare.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (true) {
  /*	cloudflare-badge	52fae43	CloudflareJS is now only used for our badge, if you're seeing this inserted elsewhere please read https://support.cloudflare.com/hc/en-us/articles/115003155971	*/
  !function () {
    "use strict";

    function e() {
      try {
        console.warn(r);
      } catch (e) {}
    }

    function t() {
      for (var e = function e(_e) {
        var t = _e.getAttribute("data-cfbadgetype"),
            i = a[t];

        if (!i) return "continue";

        var r = function (e, t, n) {
          var i = "blue";
          n.layout ? (i = t || i, t = n.skin) : t = t || "gray";
          var r = "https://www.cloudflare.com/static/media/images/web-badges/badges-" + t + ".png",
              a = n.metrics,
              o = n.layout,
              s = n.dynamic,
              c = o ? a[2] * (o[i] || o.icon) : a[0],
              d = a[1],
              u = a[2],
              l = a[3];
          return {
            x: c,
            y: d,
            width: u,
            height: l,
            skinURL: r,
            dynamic: s,
            type: e,
            skin: t
          };
        }(t, _e.getAttribute("data-cfbadgeskin"), i);

        r.dynamic ? function (e) {
          if ("string" == typeof u) return void setTimeout(e, 0, u);
          u === s && (u = c, function (e) {
            try {
              var t = new XMLHttpRequest();
              t.open("HEAD", window.location.href), t.onreadystatechange = function () {
                if (t.readyState === o) {
                  var n = t.getResponseHeader("server"),
                      i = null == n ? "unknown" : /^cloudflare/i.test(n) ? "active" : "inactive";
                  e(i);
                }
              }, t.onerror = function () {
                e("unknown");
              }, t.send();
            } catch (n) {
              setTimeout(e, 0, "unknown");
            }
          }(function (e) {
            u = e;

            for (var t = 0, n = d; t < n.length; t++) {
              (0, n[t])(u);
            }
          }));
          d.push(e);
        }(function (t) {
          return n(_e, r, t);
        }) : n(_e, r, "unknown"), _e.removeAttribute("data-cfbadgetype"), _e.removeAttribute("data-cfbadgeskin");
      }, t = 0, i = [].slice.call(document.getElementsByTagName("script")); t < i.length; t++) {
        e(i[t]);
      }
    }

    function n(e, t, n) {
      var i = document.createElement("div"),
          r = document.createElement("a"),
          a = t.dynamic && "active" === n;
      "b" === t.type && "gray" === t.skin && (a = !a), i.setAttribute("class", "cloudflare-badge cloudflare-badge-type-" + t.type + " cloudflare-badge-skin-" + t.skin);
      var o = t.x,
          s = t.y,
          c = t.width,
          d = t.height,
          u = a ? o + c : o;
      i.setAttribute("style", "display:block; position:relative; width:" + c + "px; height:" + d + "px;background:transparent url(" + t.skinURL + ") no-repeat -" + u + "px -" + s + "px;"), i.appendChild(r), r.setAttribute("href", "//www.cloudflare.com"), r.setAttribute("target", "_blank"), r.setAttribute("style", "display:block;position:absolute;width:100%;height:100%;margin:0;padding:0;top:0;left:0;border:0;font-size:0;color:transparent;line-height:0;cursor:pointer;"), e.parentNode && e.parentNode.insertBefore(i, e);
    }

    var i = ["dkgray", "gray", "blue", "dkblue"],
        r = "CloudflareJS has been deprecated, and we no longer insert it into fresh pages. Please read https://support.cloudflare.com/hc/en-us/articles/115003155971 to determine why it is still being loaded.",
        a = {
      a: {
        dynamic: !0,
        skin: "dkgray",
        skins: i,
        metrics: [0, 0, 241, 52]
      },
      b: {
        dynamic: !0,
        skin: "dkgray",
        skins: i,
        metrics: [0, 52, 249, 53]
      },
      c: {
        dynamic: !0,
        skin: "dkgray",
        skins: i,
        metrics: [0, 105, 270, 50]
      },
      d: {
        dynamic: !0,
        skin: "dkgray",
        skins: i,
        metrics: [0, 155, 270, 50]
      },
      e: {
        metrics: [571, 0, 122, 216],
        skin: "dkgray",
        skins: i
      },
      f: {
        metrics: [0, 0, 80, 15],
        skin: "small",
        skins: ["icon", "orange", "blue", "logo"],
        layout: {
          icon: 0,
          orange: 1,
          blue: 2,
          logo: 3
        }
      },
      g: {
        metrics: [482, 0, 89, 31],
        skin: "dkgray",
        skins: i
      }
    };
    window.CloudFlare = {
      push: function push(t) {
        return function (e) {
          return !("function" == typeof e && -1 !== e.toString().indexOf("cloudflare/badge"));
        }(t) && e(), 1;
      },
      define: e,
      require: e,
      block: e
    };
    var o = 4,
        s = null,
        c = 1,
        d = [],
        u = s;
    t(), window.addEventListener("onload", t);
  }();
}

/***/ }),

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
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shards-ui/dist/css/shards.css */ "./node_modules/shards-ui/dist/css/shards.css");
/* harmony import */ var shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(shards_ui_dist_css_shards_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/css/carousel.css */ "./assets/css/carousel.css");
/* harmony import */ var _assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_css_carousel_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/css/nf-carousel.css */ "./assets/css/nf-carousel.css");
/* harmony import */ var _assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_css_nf_carousel_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/css/animate.css */ "./assets/css/animate.css");
/* harmony import */ var _assets_css_animate_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/css/master.css */ "./assets/css/master.css");
/* harmony import */ var _assets_css_master_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_css_master_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/js/rocketloader.js */ "./assets/js/rocketloader.js");
/* harmony import */ var _assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_js_rocketloader_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/js/cloudflare.js */ "./assets/js/cloudflare.js");
/* harmony import */ var _assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_js_cloudflare_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/js/fontawesome.js */ "./assets/js/fontawesome.js");
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/js/mixpanel.js */ "./assets/js/mixpanel.js");
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/js/quantcast.js */ "./assets/js/quantcast.js");
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_js_tawkto_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/js/tawkto.js */ "./assets/js/tawkto.js");
/* harmony import */ var _assets_js_tawkto_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_js_tawkto_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/js/mailchimp.js */ "./assets/js/mailchimp.js");
/* harmony import */ var _assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/js/onesignal.js */ "./assets/js/onesignal.js");
/* harmony import */ var _assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-messenger-customer-chat */ "./node_modules/react-messenger-customer-chat/lib/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // Assets






 // Javascript








 // Other


 // Google Analytics

react_ga__WEBPACK_IMPORTED_MODULE_22__["default"].initialize("UA-146229442-1");


var Push = __webpack_require__(/*! push.js */ "./node_modules/push.js/bin/push.min.js");

if (true) {
  Push.Permission.request();
} // Render on client side


if (true) {
  react_ga__WEBPACK_IMPORTED_MODULE_22__["default"].initialize("UA-146229442-1", {
    debug: true,
    alwaysSendToDefaultTracker: false,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });
  react_ga__WEBPACK_IMPORTED_MODULE_22__["default"].pageview(window.location.pathname + window.location.search);
}

var Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;
_sentry_browser__WEBPACK_IMPORTED_MODULE_24__["init"]({
  dsn: "https://1ccf463850ed401c9dbbe2a620cb62e4@sentry.io/2633175"
});

var Layout = function Layout(props) {
  return __jsx(Fragment, null, __jsx("div", {
    "class": "fb-customerchat",
    attribution: "setup_tool",
    page_id: "105703077445673"
  }), __jsx(_NavbarComponent__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_MiniNav__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("br", null), __jsx("main", {
    role: "main",
    id: "main",
    className: "main"
  }, __jsx(Fragment, null, props.children)), __jsx("br", null), __jsx(_MiniNav__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_SystemInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hide: true
  }), __jsx(_HeaderImports__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.27abac0be853d0a02621.hot-update.js.map