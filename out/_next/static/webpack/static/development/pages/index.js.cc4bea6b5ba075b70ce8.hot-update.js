webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/js/rocketloader.js":
/*!***********************************!*\
  !*** ./assets/js/rocketloader.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

!function () {
  "use strict";

  function t() {
    return "cf-marker-" + Math.random().toString().slice(2);
  }

  function e() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    (n = console.warn || console.log).call.apply(n, [console, "[ROCKET LOADER] "].concat(t));
    var n;
  }

  function n(t, e) {
    var n = e.parentNode;
    n && h(t, n, e);
  }

  function r(t, e) {
    h(t, e, e.childNodes[0]);
  }

  function o(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }

  function i(t) {
    var e = t.namespaceURI === E ? "xlink:href" : "src";
    return t.getAttribute(e);
  }

  function a(t, e) {
    var n = t.type.substr(e.length);
    return !(n && !A[n.trim()]) && (!k || !t.hasAttribute("nomodule")) && !(!k && "module" === n);
  }

  function c(t) {
    return a(t, "");
  }

  function s(t, e) {
    return function (n) {
      if (e(), t) return t.call(this, n);
    };
  }

  function u(t, e) {
    t.onload = s(t.onload, e), t.onerror = s(t.onerror, e);
  }

  function p(t) {
    var e = document.createElementNS(t.namespaceURI, "script");
    e.async = t.hasAttribute("async"), e.textContent = t.textContent;

    for (var n = 0; n < t.attributes.length; n++) {
      var r = t.attributes[n];

      try {
        r.namespaceURI ? e.setAttributeNS(r.namespaceURI, r.name, r.value) : e.setAttribute(r.name, r.value);
      } catch (o) {}
    }

    return e;
  }

  function l(t, e) {
    var n = new I(e);
    t.dispatchEvent(n);
  }

  function d(e) {
    var n = e.namespaceURI === E,
        r = t();
    e.setAttribute(r, "");
    var i = n ? "<svg>" + e.outerHTML + "</svg>" : e.outerHTML;
    L.call(document, i);
    var a = document.querySelector("[" + r + "]");

    if (a) {
      a.removeAttribute(r);
      var c = n && a.parentNode;
      c && o(c);
    }

    return a;
  }

  function f(t) {
    if (t && "handleEvent" in t) {
      var e = t.handleEvent;
      return "function" == typeof e ? e.bind(t) : e;
    }

    return t;
  }

  function h(t, e, n) {
    var r = n ? function (t) {
      return e.insertBefore(t, n);
    } : function (t) {
      return e.appendChild(t);
    };
    Array.prototype.slice.call(t).forEach(r);
  }

  function v() {
    return /chrome/i.test(navigator.userAgent) && /google/i.test(navigator.vendor);
  }

  function y(t, e) {
    function n() {
      this.constructor = t;
    }

    H(t, e), t.prototype = null === e ? _Object$create(e) : (n.prototype = e.prototype, new n());
  }

  function m(t) {
    return t instanceof Window ? ["load"] : t instanceof Document ? ["DOMContentLoaded", "readystatechange"] : [];
  }

  function b(t) {
    var e = t.getAttribute(R);
    if (!e) return null;
    var n = e.split(T);
    return {
      nonce: n[0],
      handlerPrefixLength: +n[1],
      bailout: !t.hasAttribute("defer")
    };
  }

  function g(t) {
    var e = B + t.nonce;
    Array.prototype.forEach.call(document.querySelectorAll("[" + e + "]"), function (n) {
      n.removeAttribute(e), Array.prototype.forEach.call(n.attributes, function (e) {
        /^on/.test(e.name) && "function" != typeof n[e.name] && n.setAttribute(e.name, e.value.substring(t.handlerPrefixLength));
      });
    });
  }

  function S() {
    var t = window;
    "undefined" != typeof _Promise && (t.__cfQR = {
      done: new _Promise(function (t) {
        return U = t;
      })
    });
  }

  function w(t) {
    var e = new N(t),
        n = new C(e);
    e.harvestScriptsInDocument(), new W(e, {
      nonce: t,
      blocking: !0,
      docWriteSimulator: n,
      callback: function callback() {}
    }).run();
  }

  function x(t) {
    var e = new N(t),
        n = new C(e);
    e.harvestScriptsInDocument();
    var r = new W(e, {
      nonce: t,
      blocking: !1,
      docWriteSimulator: n,
      callback: function callback() {
        window.__cfRLUnblockHandlers = !0, r.removePreloadHints(), P(t);
      }
    });
    r.insertPreloadHints(), M.runOnLoad(function () {
      r.run();
    });
  }

  function P(t) {
    var e = new O(t);
    M.simulateStateBeforeDeferScriptsActivation(), e.harvestDeferScriptsInDocument(), new W(e, {
      nonce: t,
      blocking: !1,
      callback: function callback() {
        M.simulateStateAfterDeferScriptsActivation(), U && U();
      }
    }).run();
  }

  var E = "http://www.w3.org/2000/svg",
      A = {
    "application/ecmascript": !0,
    "application/javascript": !0,
    "application/x-ecmascript": !0,
    "application/x-javascript": !0,
    "text/ecmascript": !0,
    "text/javascript": !0,
    "text/javascript1.0": !0,
    "text/javascript1.1": !0,
    "text/javascript1.2": !0,
    "text/javascript1.3": !0,
    "text/javascript1.4": !0,
    "text/javascript1.5": !0,
    "text/jscript": !0,
    "text/livescript": !0,
    "text/x-ecmascript": !0,
    "text/x-javascript": !0,
    module: !0
  },
      k = void 0 !== document.createElement("script").noModule,
      I = function () {
    var t = window;
    return t.__rocketLoaderEventCtor || _Object$defineProperty(t, "__rocketLoaderEventCtor", {
      value: Event
    }), t.__rocketLoaderEventCtor;
  }(),
      L = document.write,
      _ = document.writeln,
      H = _Object$setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }
  },
      D = function () {
    function t(t) {
      this.nonce = t, this.items = [];
    }

    return _Object$defineProperty(t.prototype, "hasItems", {
      get: function get() {
        return this.items.length > 0;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.pop = function () {
      return this.items.pop();
    }, t.prototype.forEach = function (t) {
      this.items.forEach(function (e) {
        var n = e.script;
        return t(n);
      });
    }, t.prototype.harvestScripts = function (t, e) {
      var n = this,
          r = e.filter,
          o = e.mutate;
      Array.prototype.slice.call(t.querySelectorAll("script")).filter(r).reverse().forEach(function (t) {
        o(t), n.pushScriptOnStack(t);
      });
    }, t.prototype.pushScriptOnStack = function (t) {
      var e = t.parentNode,
          n = this.createPlaceholder(t),
          r = !!i(t);
      e.replaceChild(n, t), this.items.push({
        script: t,
        placeholder: n,
        external: r,
        async: r && t.hasAttribute("async"),
        executable: c(t)
      });
    }, t.prototype.hasNonce = function (t) {
      return 0 === t.type.indexOf(this.nonce);
    }, t.prototype.removeNonce = function (t) {
      t.type = t.type.substr(this.nonce.length);
    }, t.prototype.makeNonExecutable = function (t) {
      t.type = this.nonce + t.type;
    }, t.prototype.isPendingDeferScript = function (t) {
      return t.hasAttribute("defer") || t.type === this.nonce + "module" && !t.hasAttribute("async");
    }, t;
  }(),
      N = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return y(e, t), e.prototype.harvestScriptsInDocument = function () {
      var t = this;
      this.harvestScripts(document, {
        filter: function filter(e) {
          return t.hasNonce(e);
        },
        mutate: function mutate(e) {
          t.isPendingDeferScript(e) || t.removeNonce(e);
        }
      });
    }, e.prototype.harvestScriptsAfterDocWrite = function (t) {
      var e = this;
      this.harvestScripts(t, {
        filter: c,
        mutate: function mutate(t) {
          e.isPendingDeferScript(t) && e.makeNonExecutable(t);
        }
      });
    }, e.prototype.createPlaceholder = function (t) {
      return document.createComment(t.outerHTML);
    }, e;
  }(D),
      O = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return y(e, t), e.prototype.harvestDeferScriptsInDocument = function () {
      var t = this;
      this.harvestScripts(document, {
        filter: function filter(e) {
          return t.hasNonce(e) && t.isPendingDeferScript(e);
        },
        mutate: function mutate(e) {
          return t.removeNonce(e);
        }
      });
    }, e.prototype.createPlaceholder = function (t) {
      var e = p(t);
      return this.makeNonExecutable(e), e;
    }, e;
  }(D),
      C = function () {
    function t(t) {
      this.scriptStack = t;
    }

    return t.prototype.enable = function (t) {
      var e = this;
      this.insertionPointMarker = t, this.buffer = "", document.write = function () {
        for (var t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n];
        }

        return e.write(t, !1);
      }, document.writeln = function () {
        for (var t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n];
        }

        return e.write(t, !0);
      };
    }, t.prototype.flushWrittenContentAndDisable = function () {
      document.write = L, document.writeln = _, this.buffer.length && (document.contains(this.insertionPointMarker) ? this.insertionPointMarker.parentNode === document.head ? this.insertContentInHead() : this.insertContentInBody() : e("Insertion point marker for document.write was detached from document:", "Markup will not be inserted"));
    }, t.prototype.insertContentInHead = function () {
      var t = new DOMParser(),
          e = "<!DOCTYPE html><head>" + this.buffer + "</head>",
          o = t.parseFromString(e, "text/html");

      if (this.scriptStack.harvestScriptsAfterDocWrite(o), n(o.head.childNodes, this.insertionPointMarker), o.body.childNodes.length) {
        for (var i = Array.prototype.slice.call(o.body.childNodes), a = this.insertionPointMarker.nextSibling; a;) {
          i.push(a), a = a.nextSibling;
        }

        document.body || L.call(document, "<body>"), r(i, document.body);
      }
    }, t.prototype.insertContentInBody = function () {
      var t = this.insertionPointMarker.parentElement,
          e = document.createElement(t.tagName);
      e.innerHTML = this.buffer, this.scriptStack.harvestScriptsAfterDocWrite(e), n(e.childNodes, this.insertionPointMarker);
    }, t.prototype.write = function (t, e) {
      var n = document.currentScript;
      n && i(n) && n.hasAttribute("async") ? (r = e ? _ : L).call.apply(r, [document].concat(t)) : this.buffer += t.map(String).join(e ? "\n" : "");
      var r;
    }, t;
  }(),
      j = function () {
    function t() {
      var t = this;
      this.simulatedReadyState = "loading", this.bypassEventsInProxies = !1, this.nativeWindowAddEventListener = window.addEventListener;

      try {
        _Object$defineProperty(document, "readyState", {
          get: function get() {
            return t.simulatedReadyState;
          }
        });
      } catch (e) {}

      this.setupEventListenerProxy(), this.updateInlineHandlers();
    }

    return t.prototype.runOnLoad = function (t) {
      var e = this;
      this.nativeWindowAddEventListener.call(window, "load", function (n) {
        if (!e.bypassEventsInProxies) return t(n);
      });
    }, t.prototype.updateInlineHandlers = function () {
      this.proxyInlineHandler(document, "onreadystatechange"), this.proxyInlineHandler(window, "onload"), document.body && this.proxyInlineHandler(document.body, "onload");
    }, t.prototype.simulateStateBeforeDeferScriptsActivation = function () {
      this.bypassEventsInProxies = !0, this.simulatedReadyState = "interactive", l(document, "readystatechange"), this.bypassEventsInProxies = !1;
    }, t.prototype.simulateStateAfterDeferScriptsActivation = function () {
      var t = this;
      this.bypassEventsInProxies = !0, l(document, "DOMContentLoaded"), this.simulatedReadyState = "complete", l(document, "readystatechange"), l(window, "load"), this.bypassEventsInProxies = !1, window.setTimeout(function () {
        return t.bypassEventsInProxies = !0;
      }, 0);
    }, t.prototype.setupEventListenerProxy = function () {
      var t = this;
      ("undefined" != typeof EventTarget ? [EventTarget.prototype] : [Node.prototype, Window.prototype]).forEach(function (e) {
        return t.patchEventTargetMethods(e);
      });
    }, t.prototype.patchEventTargetMethods = function (t) {
      var e = this,
          n = t.addEventListener,
          r = t.removeEventListener;
      t.addEventListener = function (t, r) {
        for (var o = [], i = 2; i < arguments.length; i++) {
          o[i - 2] = arguments[i];
        }

        var a = m(this),
            c = r && r.__rocketLoaderProxiedHandler;

        if (!c) {
          var s = f(r);
          "function" == typeof s ? (c = function c(n) {
            if (e.bypassEventsInProxies || a.indexOf(t) < 0) return s.call(this, n);
          }, _Object$defineProperty(r, "__rocketLoaderProxiedHandler", {
            value: c
          })) : c = r;
        }

        n.call.apply(n, [this, t, c].concat(o));
      }, t.removeEventListener = function (t, e) {
        for (var n = [], o = 2; o < arguments.length; o++) {
          n[o - 2] = arguments[o];
        }

        var i = e && e.__rocketLoaderProxiedHandler || e;
        r.call.apply(r, [this, t, i].concat(n));
      };
    }, t.prototype.proxyInlineHandler = function (t, e) {
      try {
        var n = t[e];

        if (n && !n.__rocketLoaderInlineHandlerProxy) {
          var r = this;
          t[e] = function (t) {
            if (r.bypassEventsInProxies) return n.call(this, t);
          }, _Object$defineProperty(t[e], "__rocketLoaderInlineHandlerProxy", {
            value: !0
          });
        }
      } catch (o) {
        return void console.warn("encountered an error when accessing " + e + " handler:", o.message);
      }
    }, t;
  }(),
      M = function () {
    var t = window;
    return t.__rocketLoaderLoadProgressSimulator || _Object$defineProperty(t, "__rocketLoaderLoadProgressSimulator", {
      value: new j()
    }), t.__rocketLoaderLoadProgressSimulator;
  }(),
      W = function () {
    function t(t, e) {
      this.scriptStack = t, this.settings = e, this.preloadHints = [];
    }

    return t.prototype.insertPreloadHints = function () {
      var t = this;
      this.scriptStack.forEach(function (e) {
        if (a(e, t.settings.nonce)) {
          var n = i(e),
              r = v() && e.hasAttribute("integrity");

          if (n && !r) {
            var o = document.createElement("link");
            o.setAttribute("rel", "preload"), o.setAttribute("as", "script"), o.setAttribute("href", n), e.crossOrigin && o.setAttribute("crossorigin", e.crossOrigin), document.head.appendChild(o), t.preloadHints.push(o);
          }
        }
      });
    }, t.prototype.removePreloadHints = function () {
      this.preloadHints.forEach(function (t) {
        return o(t);
      });
    }, t.prototype.run = function () {
      for (var t = this, e = this; this.scriptStack.hasItems;) {
        var n = function () {
          var n = e.settings.docWriteSimulator,
              r = e.scriptStack.pop();
          n && !r.async && n.enable(r.placeholder);
          var o = e.activateScript(r);
          return o ? r.external && r.executable && !r.async ? (u(o, function () {
            t.finalizeActivation(r), t.run();
          }), {
            value: void 0
          }) : void e.finalizeActivation(r) : (n && n.flushWrittenContentAndDisable(), "continue");
        }();

        if ("object" == typeof n) return n.value;
      }

      this.scriptStack.hasItems || this.settings.callback();
    }, t.prototype.finalizeActivation = function (t) {
      this.settings.docWriteSimulator && !t.async && this.settings.docWriteSimulator.flushWrittenContentAndDisable(), M.updateInlineHandlers(), o(t.placeholder);
    }, t.prototype.activateScript = function (t) {
      var n = t.script,
          r = t.placeholder,
          o = t.external,
          i = t.async,
          a = r.parentNode;
      if (!document.contains(r)) return e("Placeholder for script \n" + n.outerHTML + "\n was detached from document.", "Script will not be executed."), null;
      var c = this.settings.blocking && o && !i ? d(n) : p(n);
      return c ? (a.insertBefore(c, r), c) : (e("Failed to create activatable copy of script \n" + n.outerHTML + "\n", "Script will not be executed."), null);
    }, t;
  }(),
      R = "data-cf-settings",
      T = "|",
      B = "data-cf-modified-",
      U = void 0;

  !function () {
    var t = document.currentScript;

    if (t) {
      var n = b(t);
      n ? (o(t), g(n), M.updateInlineHandlers(), n.bailout ? w(n.nonce) : (S(), x(n.nonce))) : e("Activator script doesn't have settings. No scripts will be executed.");
    } else e("Can't obtain activator script. No scripts will be executed.");
  }();
}();

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
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/js/fontawesome.js */ "./assets/js/fontawesome.js");
/* harmony import */ var _assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_js_fontawesome_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/js/mixpanel.js */ "./assets/js/mixpanel.js");
/* harmony import */ var _assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mixpanel_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/js/quantcast.js */ "./assets/js/quantcast.js");
/* harmony import */ var _assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_js_quantcast_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_js_tawkto_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/js/tawkto.js */ "./assets/js/tawkto.js");
/* harmony import */ var _assets_js_tawkto_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_js_tawkto_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/js/mailchimp.js */ "./assets/js/mailchimp.js");
/* harmony import */ var _assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_js_mailchimp_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/js/onesignal.js */ "./assets/js/onesignal.js");
/* harmony import */ var _assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_js_onesignal_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-messenger-customer-chat */ "./node_modules/react-messenger-customer-chat/lib/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // Assets






 // Javascript







 // Other


 // Google Analytics

react_ga__WEBPACK_IMPORTED_MODULE_21__["default"].initialize("UA-146229442-1");


var Push = __webpack_require__(/*! push.js */ "./node_modules/push.js/bin/push.min.js");

if (true) {
  Push.Permission.request();
} // Render on client side


if (true) {
  react_ga__WEBPACK_IMPORTED_MODULE_21__["default"].initialize("UA-146229442-1", {
    debug: true,
    alwaysSendToDefaultTracker: false,
    titleCase: false,
    gaOptions: {
      userId: 123
    }
  });
  react_ga__WEBPACK_IMPORTED_MODULE_21__["default"].pageview(window.location.pathname + window.location.search);
}

var Fragment = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;
_sentry_browser__WEBPACK_IMPORTED_MODULE_23__["init"]({
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
//# sourceMappingURL=index.js.cc4bea6b5ba075b70ce8.hot-update.js.map