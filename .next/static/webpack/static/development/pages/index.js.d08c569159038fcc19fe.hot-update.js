webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/js/onesignal1.js":
/*!*********************************!*\
  !*** ./assets/js/onesignal1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");

var _Array$isArray = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

var _Date$now = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");

var _parseInt = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");

var _get = __webpack_require__(/*! @babel/runtime-corejs2/helpers/get */ "./node_modules/@babel/runtime-corejs2/helpers/get.js");

var _wrapNativeSuper = __webpack_require__(/*! @babel/runtime-corejs2/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime-corejs2/helpers/wrapNativeSuper.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _getIterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

var _JSON$stringify = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _Object$keys2 = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _Object$setPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

if (true) {
  !function (e) {
    var t = {};

    function i(n) {
      if (t[n]) return t[n].exports;
      var r = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
    }

    i.m = e, i.c = t, i.d = function (e, t, n) {
      i.o(e, t) || _Object$defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: n
      });
    }, i.r = function (e) {
      _Object$defineProperty(e, "__esModule", {
        value: !0
      });
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "", i(i.s = 35);
  }([function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return n;
    });
    _Object$setPrototypeOf || Array;
    _Object$assign;

    function n(e, t, i, n) {
      return new (i || (i = _Promise))(function (r, o) {
        function s(e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        }

        function a(e) {
          try {
            c(n["throw"](e));
          } catch (e) {
            o(e);
          }
        }

        function c(e) {
          e.done ? r(e.value) : new i(function (t) {
            t(e.value);
          }).then(s, a);
        }

        c((n = n.apply(e, t || [])).next());
      });
    }
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return n;
    });

    var n =
    /*#__PURE__*/
    function () {
      function n() {
        _classCallCheck(this, n);
      }

      _createClass(n, null, [{
        key: "shouldLog",
        value: function shouldLog() {
          try {
            if ( false || void 0 === window.localStorage) return !1;

            var _e = window.localStorage.getItem("loglevel");

            return !(!_e || "trace" !== _e.toLowerCase());
          } catch (e) {
            return !1;
          }
        }
      }, {
        key: "setLevel",
        value: function setLevel(e) {
          if ( true && void 0 !== window.localStorage) try {
            window.localStorage.setItem("loglevel", e), n.proxyMethodsCreated = void 0, n.createProxyMethods();
          } catch (e) {
            return;
          }
        }
      }, {
        key: "createProxyMethods",
        value: function createProxyMethods() {
          if (void 0 !== n.proxyMethodsCreated) return;
          n.proxyMethodsCreated = !0;
          var e = {
            log: "debug",
            trace: "trace",
            info: "info",
            warn: "warn",
            error: "error"
          };

          for (var _i = 0, _Object$keys = _Object$keys2(e); _i < _Object$keys.length; _i++) {
            var _t = _Object$keys[_i];

            var _i2 = void 0 !== console[_t],
                r = e[_t],
                o = _i2 && (n.shouldLog() || "error" === r);

            n[r] = o ? console[_t].bind(console) : function () {};
          }
        }
      }]);

      return n;
    }();

    n.createProxyMethods();
  }, function (e, t, i) {
    "use strict";

    var n = i(13);

    var r =
    /*#__PURE__*/
    function (_n$a) {
      _inherits(r, _n$a);

      function r() {
        var _this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "The asynchronous operation has timed out.";

        _classCallCheck(this, r);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(r).call(this, e)), _this.message = e, _Object$setPrototypeOf(_assertThisInitialized(_this), r.prototype);
        return _this;
      }

      return r;
    }(n.a);

    i.d(t, "a", function () {
      return o;
    });

    var o =
    /*#__PURE__*/
    function () {
      function o() {
        _classCallCheck(this, o);
      }

      _createClass(o, null, [{
        key: "contains",
        value: function contains(e, t) {
          return !!e && -1 !== e.indexOf(t);
        }
      }, {
        key: "getConsoleStyle",
        value: function getConsoleStyle(e) {
          return "code" == e ? 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;' : "bold" == e ? "font-weight: 600;color: rgb(51, 51, 51);" : "alert" == e ? "font-weight: 600;color: red;" : "event" == e ? "color: green;" : "postmessage" == e ? "color: orange;" : "serviceworkermessage" == e ? "color: purple;" : "";
        }
      }, {
        key: "trimUndefined",
        value: function trimUndefined(e) {
          for (var t in e) {
            e.hasOwnProperty(t) && void 0 === e[t] && delete e[t];
          }

          return e;
        }
      }, {
        key: "capitalize",
        value: function capitalize(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
      }, {
        key: "stringify",
        value: function stringify(e) {
          return _JSON$stringify(e, function (e, t) {
            return "function" == typeof t ? "[Function]" : t;
          }, 4);
        }
      }, {
        key: "encodeHashAsUriComponent",
        value: function encodeHashAsUriComponent(e) {
          var t = "";

          var i = _Object$keys2(e);

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _getIterator(i), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var n = _step.value;
              var _i3 = e[n];
              t += "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(_i3));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return t;
        }
      }, {
        key: "timeoutPromise",
        value: function timeoutPromise(e, t) {
          var i = new _Promise(function (e, i) {
            setTimeout(function () {
              i(new r());
            }, t);
          });
          return _Promise.race([e, i]);
        }
      }, {
        key: "getValueOrDefault",
        value: function getValueOrDefault(e, t) {
          return void 0 !== e && null !== e ? e : t;
        }
      }, {
        key: "padStart",
        value: function padStart(e, t, i) {
          var n = e;

          for (; n.length < t;) {
            n = i + n;
          }

          return n;
        }
      }, {
        key: "parseVersionString",
        value: function parseVersionString(e) {
          var t = e.toString().split("."),
              i = o.padStart(t[0], 2, "0");
          var n;
          return n = t[1] ? o.padStart(t[1], 2, "0") : "00", Number("".concat(i, ".").concat(n));
        }
      }, {
        key: "isVersionAtLeast",
        value: function isVersionAtLeast(e, t) {
          return this.parseVersionString(e) >= t;
        }
      }, {
        key: "enforceAppId",
        value: function enforceAppId(e) {
          if (!e) throw new Error("App id cannot be empty");
        }
      }, {
        key: "enforcePlayerId",
        value: function enforcePlayerId(e) {
          if (!e) throw new Error("Player id cannot be empty");
        }
      }]);

      return o;
    }();

    t.b = o;
  }, function (e, t, i) {
    "use strict";

    var n,
        r = i(0);
    !function (e) {
      e.Development = "Development", e.Staging = "Staging", e.Production = "Production";
    }(n || (n = {}));
    var o = i(25),
        s = i(4),
        InvalidArgumentError = i(14),
        a = i(15),
        c = i(6),
        d = i(10),
        u = i(8);
    i.d(t, "a", function () {
      return g;
    });
    var l = 4e3,
        p = 3001;

    var g =
    /*#__PURE__*/
    function () {
      function g() {
        _classCallCheck(this, g);
      }

      _createClass(g, null, [{
        key: "getBuildEnv",
        value: function getBuildEnv() {
          return n.Production;
        }
      }, {
        key: "getApiEnv",
        value: function getApiEnv() {
          return n.Production;
        }
      }, {
        key: "getIntegration",
        value: function getIntegration(e) {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee() {
            var t, i;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!d.a.isSafari()) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return", a.a.Secure);

                  case 2:
                    t = window === window.top, i = "https:" === window.location.protocol;

                    if (!(void 0 === e)) {
                      _context.next = 7;
                      break;
                    }

                    if (!("undefined" == typeof OneSignal || !OneSignal.context || !OneSignal.context.appConfig)) {
                      _context.next = 6;
                      break;
                    }

                    throw new InvalidArgumentError.a("usingProxyOrigin", InvalidArgumentError.b.Empty);

                  case 6:
                    e = !!OneSignal.context.appConfig.subdomain;

                  case 7:
                    if (!t) {
                      _context.next = 9;
                      break;
                    }

                    return _context.abrupt("return", i ? e ? a.a.SecureProxy : a.a.Secure : !u.b.isLocalhostAllowedAsSecureOrigin() || "localhost" !== location.hostname && "127.0.0.1" !== location.hostname ? a.a.InsecureProxy : a.a.Secure);

                  case 9:
                    if (!i) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 12;
                    return g.isFrameContextInsecure();

                  case 12:
                    if (!_context.sent) {
                      _context.next = 16;
                      break;
                    }

                    _context.t0 = a.a.InsecureProxy;
                    _context.next = 17;
                    break;

                  case 16:
                    _context.t0 = e ? a.a.SecureProxy : a.a.Secure;

                  case 17:
                    return _context.abrupt("return", _context.t0);

                  case 18:
                    return _context.abrupt("return", a.a.InsecureProxy);

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "isFrameContextInsecure",
        value: function isFrameContextInsecure() {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee2() {
            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(window === window.top || !("serviceWorker" in navigator) || void 0 === navigator.serviceWorker.getRegistration)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return", !1);

                  case 2:
                    _context2.next = 4;
                    return c.b.getRegistration();

                  case 4:
                    return _context2.abrupt("return", !_context2.sent);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "isInsecureOrigin",
        value: function isInsecureOrigin() {
          return "http:" === window.location.protocol;
        }
      }, {
        key: "getWindowEnv",
        value: function getWindowEnv() {
          return false ? undefined : window === window.top ? -1 !== location.href.indexOf("initOneSignal") || "/subscribe" === location.pathname && "" === location.search && (location.hostname.endsWith(".onesignal.com") || location.hostname.endsWith(".os.tc") || -1 !== location.hostname.indexOf(".localhost") && g.getBuildEnv() === n.Development) ? s.a.OneSignalSubscriptionPopup : s.a.Host : "/webPushIframe" === location.pathname ? s.a.OneSignalProxyFrame : "/webPushModal" === location.pathname ? s.a.OneSignalSubscriptionModal : s.a.CustomIframe;
        }
      }, {
        key: "getTestEnv",
        value: function getTestEnv() {
          return o.a.None;
        }
      }, {
        key: "getBuildEnvPrefix",
        value: function getBuildEnvPrefix() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : g.getBuildEnv();

          switch (e) {
            case n.Development:
              return "Dev-";

            case n.Staging:
              return "Staging-";

            case n.Production:
              return "";

            default:
              throw new InvalidArgumentError.a("buildEnv", InvalidArgumentError.b.EnumOutOfRange);
          }
        }
      }, {
        key: "getOneSignalApiUrl",
        value: function getOneSignalApiUrl() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : g.getApiEnv();

          switch (e) {
            case n.Development:
              return new URL("https://localhost:".concat(p, "/api/v1"));

            case n.Staging:
              return new URL("https://".concat(window.location.host, "/api/v1"));

            case n.Production:
              return new URL("https://onesignal.com/api/v1");

            default:
              throw new InvalidArgumentError.a("buildEnv", InvalidArgumentError.b.EnumOutOfRange);
          }
        }
      }, {
        key: "getOneSignalResourceUrlPath",
        value: function getOneSignalResourceUrlPath() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : g.getBuildEnv();
          var t;
          var i = l;

          switch (e) {
            case n.Development:
              t = "http://localhost:".concat(i);
              break;

            case n.Staging:
              t = "https://".concat(window.location.host);
              break;

            case n.Production:
              t = "https://onesignal.com";
              break;

            default:
              throw new InvalidArgumentError.a("buildEnv", InvalidArgumentError.b.EnumOutOfRange);
          }

          return new URL("".concat(t, "/sdks"));
        }
      }, {
        key: "getOneSignalCssFileName",
        value: function getOneSignalCssFileName() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : g.getBuildEnv();

          switch (e) {
            case n.Development:
              return "Dev-OneSignalSDKStyles.css";

            case n.Staging:
              return "Staging-OneSignalSDKStyles.css";

            case n.Production:
              return "OneSignalSDKStyles.css";

            default:
              throw new InvalidArgumentError.a("buildEnv", InvalidArgumentError.b.EnumOutOfRange);
          }
        }
      }]);

      return g;
    }();
  }, function (e, t, i) {
    "use strict";

    var n;
    i.d(t, "a", function () {
      return n;
    }), function (e) {
      e.ServiceWorker = "ServiceWorker", e.Host = "Host", e.OneSignalSubscriptionPopup = "Popup", e.OneSignalSubscriptionModal = "Modal", e.OneSignalProxyFrame = "ProxyFrame", e.CustomIframe = "CustomFrame", e.Unknown = "Unknown";
    }(n || (n = {}));
  }, function (e, t, i) {
    "use strict";

    var n = i(0);

    var r =
    /*#__PURE__*/
    function () {
      function r() {
        _classCallCheck(this, r);

        this._events = {};
      }

      _createClass(r, [{
        key: "on",
        value: function on(e, t) {
          return this._events[e] = this._events[e] || [], this._events[e].push(t), this;
        }
      }, {
        key: "once",
        value: function once(e, t) {
          var i = this;

          function n() {
            i.off(e, n), t.apply(this, arguments);
          }

          return n.listener = t, this.on(e, n), this;
        }
      }, {
        key: "off",
        value: function off(e, t) {
          var i = this._events[e];

          if (void 0 !== i) {
            for (var _e2 = 0; _e2 < i.length; _e2 += 1) {
              if (i[_e2] === t || i[_e2].listener === t) {
                i.splice(_e2, 1);
                break;
              }
            }

            0 === i.length && this.removeAllListeners(e);
          }

          return this;
        }
      }, {
        key: "removeAllListeners",
        value: function removeAllListeners(e) {
          try {
            e ? delete this._events[e] : this._events = {};
          } catch (e) {}

          return this;
        }
      }, {
        key: "listeners",
        value: function listeners(e) {
          try {
            return this._events[e];
          } catch (e) {
            return;
          }
        }
      }, {
        key: "numberOfListeners",
        value: function numberOfListeners(e) {
          var t = this.listeners(e);
          return t ? t.length : 0;
        }
      }, {
        key: "emit",
        value: function emit() {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee3() {
            var t, i, _t2, _n;

            return _regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    t = e.shift();
                    i = this._events[t];

                    if (!(void 0 !== i)) {
                      _context3.next = 11;
                      break;
                    }

                    _t2 = (i = i.slice(0)).length;
                    _n = 0;

                  case 5:
                    if (!(_n < _t2)) {
                      _context3.next = 11;
                      break;
                    }

                    _context3.next = 8;
                    return i[_n].apply(this, e);

                  case 8:
                    _n += 1;
                    _context3.next = 5;
                    break;

                  case 11:
                    return _context3.abrupt("return", this);

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return r;
    }();

    var o = i(1),
        s = i(2);

    var a =
    /*#__PURE__*/
    function () {
      function a(e) {
        _classCallCheck(this, a);

        this.databaseName = e, this.emitter = new r();
      }

      _createClass(a, [{
        key: "open",
        value: function open(e) {
          var _this2 = this;

          return new _Promise(function (t) {
            try {
              var i = indexedDB.open(e, 1);
            } catch (e) {}

            if (!i) return null;
            i.onerror = _this2.onDatabaseOpenError, i.onblocked = _this2.onDatabaseOpenBlocked, i.onupgradeneeded = _this2.onDatabaseUpgradeNeeded, i.onsuccess = function () {
              _this2.database = i.result, _this2.database.onerror = _this2.onDatabaseError, _this2.database.onversionchange = _this2.onDatabaseVersionChange, t(_this2.database);
            };
          });
        }
      }, {
        key: "ensureDatabaseOpen",
        value: function ensureDatabaseOpen() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee4() {
            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.openLock || (this.openLock = this.open(this.databaseName));
                    _context4.next = 3;
                    return this.openLock;

                  case 3:
                    return _context4.abrupt("return", this.database);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onDatabaseOpenError",
        value: function onDatabaseOpenError(e) {
          e.preventDefault();
          var t = e.target.error;
          s.b.contains(t.message, "The operation failed for reasons unrelated to the database itself and not covered by any other error code") || s.b.contains(t.message, "A mutation operation was attempted on a database that did not allow mutations") ? o.a.warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6") : o.a.warn("OneSignal: Fatal error opening IndexedDb database:", t);
        }
      }, {
        key: "onDatabaseError",
        value: function onDatabaseError(e) {
          o.a.debug("IndexedDb: Generic database error", e.target.errorCode);
        }
      }, {
        key: "onDatabaseOpenBlocked",
        value: function onDatabaseOpenBlocked() {
          o.a.debug("IndexedDb: Blocked event");
        }
      }, {
        key: "onDatabaseVersionChange",
        value: function onDatabaseVersionChange(e) {
          o.a.debug("IndexedDb: versionchange event");
        }
      }, {
        key: "onDatabaseUpgradeNeeded",
        value: function onDatabaseUpgradeNeeded(e) {
          o.a.debug("IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event).");
          var t = e.target.result;
          t.createObjectStore("Ids", {
            keyPath: "type"
          }), t.createObjectStore("NotificationOpened", {
            keyPath: "url"
          }), t.createObjectStore("Options", {
            keyPath: "key"
          }), "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0);
        }
      }, {
        key: "get",
        value: function get(e, t) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            return _regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.ensureDatabaseOpen();

                  case 2:
                    if (!t) {
                      _context5.next = 8;
                      break;
                    }

                    _context5.next = 5;
                    return new _Promise(function (i, n) {
                      var r = _this3.database.transaction(e).objectStore(e).get(t);

                      r.onsuccess = function () {
                        i(r.result);
                      }, r.onerror = function () {
                        n(r.error);
                      };
                    });

                  case 5:
                    _context5.t0 = _context5.sent;
                    _context5.next = 11;
                    break;

                  case 8:
                    _context5.next = 10;
                    return new _Promise(function (t, i) {
                      var n = {},
                          r = _this3.database.transaction(e).objectStore(e).openCursor();

                      r.onsuccess = function (e) {
                        var i = e.target.result;

                        if (i) {
                          var _e3 = i.key;
                          n[_e3] = i.value, i["continue"]();
                        } else t(n);
                      }, r.onerror = function () {
                        i(r.error);
                      };
                    });

                  case 10:
                    _context5.t0 = _context5.sent;

                  case 11:
                    return _context5.abrupt("return", _context5.t0);

                  case 12:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "put",
        value: function put(e, t) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            return _regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.ensureDatabaseOpen();

                  case 2:
                    _context6.next = 4;
                    return new _Promise(function (i, n) {
                      try {
                        var _r = _this4.database.transaction([e], "readwrite").objectStore(e).put(t);

                        _r.onsuccess = function () {
                          i(t);
                        }, _r.onerror = function (e) {
                          o.a.error("Database PUT Transaction Error:", e), n(e);
                        };
                      } catch (e) {
                        o.a.error("Database PUT Error:", e), n(e);
                      }
                    });

                  case 4:
                    return _context6.abrupt("return", _context6.sent);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "remove",
        value: function remove(e, t) {
          var _this5 = this;

          if (t) var i = "delete";else i = "clear";
          return new _Promise(function (n, r) {
            try {
              var _s = _this5.database.transaction([e], "readwrite").objectStore(e)[i](t);

              _s.onsuccess = function () {
                n(t);
              }, _s.onerror = function (e) {
                o.a.error("Database REMOVE Transaction Error:", e), r(e);
              };
            } catch (e) {
              o.a.error("Database REMOVE Error:", e), r(e);
            }
          });
        }
      }]);

      return a;
    }();

    var c = function c() {
      _classCallCheck(this, c);
    };

    var d = function d() {
      _classCallCheck(this, d);
    };

    var u =
    /*#__PURE__*/
    function () {
      function u() {
        _classCallCheck(this, u);
      }

      _createClass(u, [{
        key: "serialize",
        value: function serialize() {
          return {
            deviceId: this.deviceId,
            subscriptionToken: this.subscriptionToken,
            optedOut: this.optedOut,
            createdAt: this.createdAt,
            expirationTime: this.expirationTime
          };
        }
      }], [{
        key: "deserialize",
        value: function deserialize(e) {
          var t = new u();
          return t.deviceId = e.deviceId, t.subscriptionToken = e.subscriptionToken, t.optedOut = e.optedOut, t.createdAt = e.createdAt, t.expirationTime = e.expirationTime, t;
        }
      }]);

      return u;
    }();

    var l = i(25),
        p = i(4);

    var g =
    /*#__PURE__*/
    function () {
      function g(e, t, i) {
        _classCallCheck(this, g);

        this.emailId = e, this.emailAddress = t, this.emailAuthHash = i;
      }

      _createClass(g, [{
        key: "serialize",
        value: function serialize() {
          return {
            emailAddress: this.emailAddress,
            emailAuthHash: this.emailAuthHash,
            emailId: this.emailId
          };
        }
      }], [{
        key: "deserialize",
        value: function deserialize(e) {
          return new g(e.emailId, e.emailAddress, e.emailAuthHash);
        }
      }]);

      return g;
    }();

    var f,
        h,
        b = i(3),
        m = i(8);
    i.d(t, "a", function () {
      return v;
    }), (h = f || (f = {}))[h.SET = 0] = "SET";

    var v =
    /*#__PURE__*/
    function () {
      function v(e) {
        _classCallCheck(this, v);

        this.databaseName = e, this.emitter = new r(), this.database = new a(this.databaseName);
      }

      _createClass(v, [{
        key: "get",
        value: function get(e, t) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee8() {
            var _this6 = this;

            var _i4;

            return _regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(b.a.getWindowEnv() !== p.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && b.a.getTestEnv() === l.a.None)) {
                      _context8.next = 4;
                      break;
                    }

                    _context8.next = 3;
                    return new _Promise(function (i) {
                      return n.a(_this6, void 0, void 0,
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee7() {
                        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                                  table: e,
                                  key: t
                                }], function (e) {
                                  var t = e.data[0];
                                  i(t);
                                });

                              case 1:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7);
                      }));
                    });

                  case 3:
                    return _context8.abrupt("return", _context8.sent);

                  case 4:
                    _context8.next = 6;
                    return this.database.get(e, t);

                  case 6:
                    _i4 = _context8.sent;
                    return _context8.abrupt("return", v.applyDbResultFilter(e, t, _i4));

                  case 8:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "put",
        value: function put(e, t) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee10() {
            var _this7 = this;

            return _regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return new _Promise(function (i, r) {
                      return n.a(_this7, void 0, void 0,
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee9() {
                        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                if (!(b.a.getWindowEnv() !== p.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && b.a.getTestEnv() === l.a.None)) {
                                  _context9.next = 4;
                                  break;
                                }

                                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                                  table: e,
                                  keypath: t
                                }], function (n) {
                                  n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : r("(Database) Attempted remote IndexedDB put(".concat(e, ", ").concat(t, "), but did not get success response."));
                                });
                                _context9.next = 7;
                                break;

                              case 4:
                                _context9.next = 6;
                                return this.database.put(e, t);

                              case 6:
                                i();

                              case 7:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });

                  case 2:
                    this.emitter.emit(v.EVENTS.SET, t);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "remove",
        value: function remove(e, t) {
          return b.a.getWindowEnv() !== p.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && b.a.getTestEnv() === l.a.None ? new _Promise(function (i, n) {
            OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{
              table: e,
              keypath: t
            }], function (r) {
              r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : n("(Database) Attempted remote IndexedDB remove(".concat(e, ", ").concat(t, "), but did not get success response."));
            });
          }) : this.database.remove(e, t);
        }
      }, {
        key: "getAppConfig",
        value: function getAppConfig() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee11() {
            var e, t;
            return _regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    e = {};
                    _context11.next = 3;
                    return this.get("Ids", "appId");

                  case 3:
                    t = _context11.sent;
                    e.appId = t;
                    _context11.next = 7;
                    return this.get("Options", "subdomain");

                  case 7:
                    e.subdomain = _context11.sent;
                    _context11.next = 10;
                    return this.get("Options", "vapidPublicKey");

                  case 10:
                    e.vapidPublicKey = _context11.sent;
                    _context11.next = 13;
                    return this.get("Options", "emailAuthRequired");

                  case 13:
                    e.emailAuthRequired = _context11.sent;
                    return _context11.abrupt("return", e);

                  case 15:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "getExternalUserId",
        value: function getExternalUserId() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee12() {
            return _regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.get("Ids", "externalUserId");

                  case 2:
                    return _context12.abrupt("return", _context12.sent);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "setExternalUserId",
        value: function setExternalUserId(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee13() {
            var t;
            return _regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    t = s.b.getValueOrDefault(e, "");

                    if (!("" === t)) {
                      _context13.next = 6;
                      break;
                    }

                    _context13.next = 4;
                    return this.remove("Ids", "externalUserId");

                  case 4:
                    _context13.next = 8;
                    break;

                  case 6:
                    _context13.next = 8;
                    return this.put("Ids", {
                      type: "externalUserId",
                      id: t
                    });

                  case 8:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "setAppConfig",
        value: function setAppConfig(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee14() {
            return _regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.t0 = e.appId;

                    if (!_context14.t0) {
                      _context14.next = 4;
                      break;
                    }

                    _context14.next = 4;
                    return this.put("Ids", {
                      type: "appId",
                      id: e.appId
                    });

                  case 4:
                    _context14.t1 = e.subdomain;

                    if (!_context14.t1) {
                      _context14.next = 8;
                      break;
                    }

                    _context14.next = 8;
                    return this.put("Options", {
                      key: "subdomain",
                      value: e.subdomain
                    });

                  case 8:
                    if (!(!0 === e.httpUseOneSignalCom)) {
                      _context14.next = 13;
                      break;
                    }

                    _context14.next = 11;
                    return this.put("Options", {
                      key: "httpUseOneSignalCom",
                      value: !0
                    });

                  case 11:
                    _context14.next = 17;
                    break;

                  case 13:
                    _context14.t2 = !1 === e.httpUseOneSignalCom;

                    if (!_context14.t2) {
                      _context14.next = 17;
                      break;
                    }

                    _context14.next = 17;
                    return this.put("Options", {
                      key: "httpUseOneSignalCom",
                      value: !1
                    });

                  case 17:
                    if (!(!0 === e.emailAuthRequired)) {
                      _context14.next = 22;
                      break;
                    }

                    _context14.next = 20;
                    return this.put("Options", {
                      key: "emailAuthRequired",
                      value: !0
                    });

                  case 20:
                    _context14.next = 26;
                    break;

                  case 22:
                    _context14.t3 = !1 === e.emailAuthRequired;

                    if (!_context14.t3) {
                      _context14.next = 26;
                      break;
                    }

                    _context14.next = 26;
                    return this.put("Options", {
                      key: "emailAuthRequired",
                      value: !1
                    });

                  case 26:
                    _context14.t4 = e.vapidPublicKey;

                    if (!_context14.t4) {
                      _context14.next = 30;
                      break;
                    }

                    _context14.next = 30;
                    return this.put("Options", {
                      key: "vapidPublicKey",
                      value: e.vapidPublicKey
                    });

                  case 30:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "getAppState",
        value: function getAppState() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee15() {
            var e;
            return _regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    e = new c();
                    _context15.next = 3;
                    return this.get("Options", "defaultUrl");

                  case 3:
                    e.defaultNotificationUrl = _context15.sent;
                    _context15.next = 6;
                    return this.get("Options", "defaultTitle");

                  case 6:
                    e.defaultNotificationTitle = _context15.sent;
                    _context15.next = 9;
                    return this.get("Options", "isPushEnabled");

                  case 9:
                    e.lastKnownPushEnabled = _context15.sent;
                    _context15.next = 12;
                    return this.get("NotificationOpened");

                  case 12:
                    e.clickedNotifications = _context15.sent;
                    return _context15.abrupt("return", e);

                  case 14:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "setAppState",
        value: function setAppState(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee16() {
            var _t3, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _i5, _t4;

            return _regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.t0 = e.defaultNotificationUrl;

                    if (!_context16.t0) {
                      _context16.next = 4;
                      break;
                    }

                    _context16.next = 4;
                    return this.put("Options", {
                      key: "defaultUrl",
                      value: e.defaultNotificationUrl
                    });

                  case 4:
                    _context16.t1 = e.defaultNotificationTitle || "" === e.defaultNotificationTitle;

                    if (!_context16.t1) {
                      _context16.next = 8;
                      break;
                    }

                    _context16.next = 8;
                    return this.put("Options", {
                      key: "defaultTitle",
                      value: e.defaultNotificationTitle
                    });

                  case 8:
                    _context16.t2 = null != e.lastKnownPushEnabled;

                    if (!_context16.t2) {
                      _context16.next = 12;
                      break;
                    }

                    _context16.next = 12;
                    return this.put("Options", {
                      key: "isPushEnabled",
                      value: e.lastKnownPushEnabled
                    });

                  case 12:
                    if (!e.clickedNotifications) {
                      _context16.next = 48;
                      break;
                    }

                    _t3 = _Object$keys2(e.clickedNotifications);
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context16.prev = 17;
                    _iterator2 = _getIterator(_t3);

                  case 19:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context16.next = 34;
                      break;
                    }

                    _i5 = _step2.value;
                    _t4 = e.clickedNotifications[_i5];

                    if (!_t4) {
                      _context16.next = 27;
                      break;
                    }

                    _context16.next = 25;
                    return this.put("NotificationOpened", {
                      url: _i5,
                      data: _t4.data,
                      timestamp: _t4.timestamp
                    });

                  case 25:
                    _context16.next = 31;
                    break;

                  case 27:
                    _context16.t3 = null === _t4;

                    if (!_context16.t3) {
                      _context16.next = 31;
                      break;
                    }

                    _context16.next = 31;
                    return this.remove("NotificationOpened", _i5);

                  case 31:
                    _iteratorNormalCompletion2 = true;
                    _context16.next = 19;
                    break;

                  case 34:
                    _context16.next = 40;
                    break;

                  case 36:
                    _context16.prev = 36;
                    _context16.t4 = _context16["catch"](17);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context16.t4;

                  case 40:
                    _context16.prev = 40;
                    _context16.prev = 41;

                    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                      _iterator2["return"]();
                    }

                  case 43:
                    _context16.prev = 43;

                    if (!_didIteratorError2) {
                      _context16.next = 46;
                      break;
                    }

                    throw _iteratorError2;

                  case 46:
                    return _context16.finish(43);

                  case 47:
                    return _context16.finish(40);

                  case 48:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this, [[17, 36, 40, 48], [41,, 43, 47]]);
          }));
        }
      }, {
        key: "getServiceWorkerState",
        value: function getServiceWorkerState() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee17() {
            var e;
            return _regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    e = new d();
                    _context17.next = 3;
                    return this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION");

                  case 3:
                    e.workerVersion = _context17.sent;
                    _context17.next = 6;
                    return this.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION");

                  case 6:
                    e.updaterWorkerVersion = _context17.sent;
                    return _context17.abrupt("return", e);

                  case 8:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "setServiceWorkerState",
        value: function setServiceWorkerState(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee18() {
            return _regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.t0 = e.workerVersion;

                    if (!_context18.t0) {
                      _context18.next = 4;
                      break;
                    }

                    _context18.next = 4;
                    return this.put("Ids", {
                      type: "WORKER1_ONE_SIGNAL_SW_VERSION",
                      id: e.workerVersion
                    });

                  case 4:
                    _context18.t1 = e.updaterWorkerVersion;

                    if (!_context18.t1) {
                      _context18.next = 8;
                      break;
                    }

                    _context18.next = 8;
                    return this.put("Ids", {
                      type: "WORKER2_ONE_SIGNAL_SW_VERSION",
                      id: e.updaterWorkerVersion
                    });

                  case 8:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "getSubscription",
        value: function getSubscription() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee19() {
            var e, t, i, n, r;
            return _regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    e = new u();
                    _context19.next = 3;
                    return this.get("Ids", "userId");

                  case 3:
                    e.deviceId = _context19.sent;
                    _context19.next = 6;
                    return this.get("Ids", "registrationId");

                  case 6:
                    e.subscriptionToken = _context19.sent;
                    _context19.next = 9;
                    return this.get("Options", "optedOut");

                  case 9:
                    t = _context19.sent;
                    _context19.next = 12;
                    return this.get("Options", "subscription");

                  case 12:
                    i = _context19.sent;
                    _context19.next = 15;
                    return this.get("Options", "subscriptionCreatedAt");

                  case 15:
                    n = _context19.sent;
                    _context19.next = 18;
                    return this.get("Options", "subscriptionExpirationTime");

                  case 18:
                    r = _context19.sent;
                    return _context19.abrupt("return", (e.optedOut = null != t ? t : null != i && !i, e.createdAt = n, e.expirationTime = r, e));

                  case 20:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "setSubscription",
        value: function setSubscription(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee20() {
            return _regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.t0 = e.deviceId;

                    if (!_context20.t0) {
                      _context20.next = 4;
                      break;
                    }

                    _context20.next = 4;
                    return this.put("Ids", {
                      type: "userId",
                      id: e.deviceId
                    });

                  case 4:
                    _context20.t1 = void 0 !== e.subscriptionToken;

                    if (!_context20.t1) {
                      _context20.next = 8;
                      break;
                    }

                    _context20.next = 8;
                    return this.put("Ids", {
                      type: "registrationId",
                      id: e.subscriptionToken
                    });

                  case 8:
                    _context20.t2 = null != e.optedOut;

                    if (!_context20.t2) {
                      _context20.next = 12;
                      break;
                    }

                    _context20.next = 12;
                    return this.put("Options", {
                      key: "optedOut",
                      value: e.optedOut
                    });

                  case 12:
                    _context20.t3 = null != e.createdAt;

                    if (!_context20.t3) {
                      _context20.next = 16;
                      break;
                    }

                    _context20.next = 16;
                    return this.put("Options", {
                      key: "subscriptionCreatedAt",
                      value: e.createdAt
                    });

                  case 16:
                    if (!(null != e.expirationTime)) {
                      _context20.next = 21;
                      break;
                    }

                    _context20.next = 19;
                    return this.put("Options", {
                      key: "subscriptionExpirationTime",
                      value: e.expirationTime
                    });

                  case 19:
                    _context20.next = 23;
                    break;

                  case 21:
                    _context20.next = 23;
                    return this.remove("Options", "subscriptionExpirationTime");

                  case 23:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "getEmailProfile",
        value: function getEmailProfile() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee21() {
            var e;
            return _regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.get("Ids", "emailProfile");

                  case 2:
                    e = _context21.sent;
                    return _context21.abrupt("return", e ? g.deserialize(e) : new g());

                  case 4:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "setEmailProfile",
        value: function setEmailProfile(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee22() {
            return _regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.t0 = e;

                    if (!_context22.t0) {
                      _context22.next = 4;
                      break;
                    }

                    _context22.next = 4;
                    return this.put("Ids", {
                      type: "emailProfile",
                      id: e.serialize()
                    });

                  case 4:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "setProvideUserConsent",
        value: function setProvideUserConsent(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee23() {
            return _regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.put("Options", {
                      key: "userConsent",
                      value: e
                    });

                  case 2:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "getProvideUserConsent",
        value: function getProvideUserConsent() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee24() {
            return _regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.get("Options", "userConsent");

                  case 2:
                    return _context24.abrupt("return", _context24.sent);

                  case 3:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }], [{
        key: "resetInstance",
        value: function resetInstance() {
          v.databaseInstance = null;
        }
      }, {
        key: "applyDbResultFilter",
        value: function applyDbResultFilter(e, t, i) {
          switch (e) {
            case "Options":
              return i && t ? i.value : i && !t ? i : null;

            case "Ids":
              return i && t ? i.id : i && !t ? i : null;

            case "NotificationOpened":
              return i && t ? {
                data: i.data,
                timestamp: i.timestamp
              } : i && !t ? i : null;

            default:
              return i || null;
          }
        }
      }, {
        key: "rebuild",
        value: function rebuild() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee25() {
            return _regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    return _context25.abrupt("return", _Promise.all([v.singletonInstance.remove("Ids"), v.singletonInstance.remove("NotificationOpened"), v.singletonInstance.remove("Options")]));

                  case 1:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25);
          }));
        }
      }, {
        key: "on",
        value: function on() {
          for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            e[_key2] = arguments[_key2];
          }

          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee26() {
            return _regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    return _context26.abrupt("return", v.singletonInstance.emitter.on.apply(v.singletonInstance.emitter, e));

                  case 1:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26);
          }));
        }
      }, {
        key: "setEmailProfile",
        value: function setEmailProfile(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee27() {
            return _regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return v.singletonInstance.setEmailProfile(e);

                  case 2:
                    return _context27.abrupt("return", _context27.sent);

                  case 3:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27);
          }));
        }
      }, {
        key: "getEmailProfile",
        value: function getEmailProfile() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee28() {
            return _regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return v.singletonInstance.getEmailProfile();

                  case 2:
                    return _context28.abrupt("return", _context28.sent);

                  case 3:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28);
          }));
        }
      }, {
        key: "setSubscription",
        value: function setSubscription(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee29() {
            return _regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.next = 2;
                    return v.singletonInstance.setSubscription(e);

                  case 2:
                    return _context29.abrupt("return", _context29.sent);

                  case 3:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29);
          }));
        }
      }, {
        key: "getSubscription",
        value: function getSubscription() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee30() {
            return _regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return v.singletonInstance.getSubscription();

                  case 2:
                    return _context30.abrupt("return", _context30.sent);

                  case 3:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30);
          }));
        }
      }, {
        key: "setProvideUserConsent",
        value: function setProvideUserConsent(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee31() {
            return _regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    _context31.next = 2;
                    return v.singletonInstance.setProvideUserConsent(e);

                  case 2:
                    return _context31.abrupt("return", _context31.sent);

                  case 3:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31);
          }));
        }
      }, {
        key: "getProvideUserConsent",
        value: function getProvideUserConsent() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee32() {
            return _regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.next = 2;
                    return v.singletonInstance.getProvideUserConsent();

                  case 2:
                    return _context32.abrupt("return", _context32.sent);

                  case 3:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32);
          }));
        }
      }, {
        key: "setServiceWorkerState",
        value: function setServiceWorkerState(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee33() {
            return _regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    _context33.next = 2;
                    return v.singletonInstance.setServiceWorkerState(e);

                  case 2:
                    return _context33.abrupt("return", _context33.sent);

                  case 3:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33);
          }));
        }
      }, {
        key: "getServiceWorkerState",
        value: function getServiceWorkerState() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee34() {
            return _regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.next = 2;
                    return v.singletonInstance.getServiceWorkerState();

                  case 2:
                    return _context34.abrupt("return", _context34.sent);

                  case 3:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34);
          }));
        }
      }, {
        key: "setAppState",
        value: function setAppState(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee35() {
            return _regeneratorRuntime.wrap(function _callee35$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    _context35.next = 2;
                    return v.singletonInstance.setAppState(e);

                  case 2:
                    return _context35.abrupt("return", _context35.sent);

                  case 3:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee35);
          }));
        }
      }, {
        key: "getAppState",
        value: function getAppState() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee36() {
            return _regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    _context36.next = 2;
                    return v.singletonInstance.getAppState();

                  case 2:
                    return _context36.abrupt("return", _context36.sent);

                  case 3:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36);
          }));
        }
      }, {
        key: "setAppConfig",
        value: function setAppConfig(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee37() {
            return _regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    _context37.next = 2;
                    return v.singletonInstance.setAppConfig(e);

                  case 2:
                    return _context37.abrupt("return", _context37.sent);

                  case 3:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37);
          }));
        }
      }, {
        key: "getAppConfig",
        value: function getAppConfig() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee38() {
            return _regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    _context38.next = 2;
                    return v.singletonInstance.getAppConfig();

                  case 2:
                    return _context38.abrupt("return", _context38.sent);

                  case 3:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38);
          }));
        }
      }, {
        key: "getExternalUserId",
        value: function getExternalUserId() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee39() {
            return _regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    _context39.next = 2;
                    return v.singletonInstance.getExternalUserId();

                  case 2:
                    return _context39.abrupt("return", _context39.sent);

                  case 3:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39);
          }));
        }
      }, {
        key: "setExternalUserId",
        value: function setExternalUserId(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee40() {
            return _regeneratorRuntime.wrap(function _callee40$(_context40) {
              while (1) {
                switch (_context40.prev = _context40.next) {
                  case 0:
                    _context40.next = 2;
                    return v.singletonInstance.setExternalUserId(e);

                  case 2:
                  case "end":
                    return _context40.stop();
                }
              }
            }, _callee40);
          }));
        }
      }, {
        key: "remove",
        value: function remove(e, t) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee41() {
            return _regeneratorRuntime.wrap(function _callee41$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    _context41.next = 2;
                    return v.singletonInstance.remove(e, t);

                  case 2:
                    return _context41.abrupt("return", _context41.sent);

                  case 3:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee41);
          }));
        }
      }, {
        key: "put",
        value: function put(e, t) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee42() {
            return _regeneratorRuntime.wrap(function _callee42$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    _context42.next = 2;
                    return v.singletonInstance.put(e, t);

                  case 2:
                    return _context42.abrupt("return", _context42.sent);

                  case 3:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee42);
          }));
        }
      }, {
        key: "get",
        value: function get(e, t) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee43() {
            return _regeneratorRuntime.wrap(function _callee43$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    _context43.next = 2;
                    return v.singletonInstance.get(e, t);

                  case 2:
                    return _context43.abrupt("return", _context43.sent);

                  case 3:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee43);
          }));
        }
      }, {
        key: "singletonInstance",
        get: function get() {
          return v.databaseInstanceName || (v.databaseInstanceName = "ONE_SIGNAL_SDK_DB"), v.databaseInstance || (v.databaseInstance = new v(v.databaseInstanceName)), v.databaseInstance;
        }
      }]);

      return v;
    }();

    v.EVENTS = f;
  }, function (e, t, i) {
    "use strict";

    i.d(t, "b", function () {
      return c;
    }), i.d(t, "a", function () {
      return n;
    });
    var n,
        r = i(0),
        o = i(1),
        s = i(16),
        a = i(8);

    var c =
    /*#__PURE__*/
    function () {
      function c() {
        _classCallCheck(this, c);
      }

      _createClass(c, null, [{
        key: "getRegistration",
        value: function getRegistration() {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee44() {
            return _regeneratorRuntime.wrap(function _callee44$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    _context44.prev = 0;
                    _context44.next = 3;
                    return navigator.serviceWorker.getRegistration(location.href);

                  case 3:
                    return _context44.abrupt("return", _context44.sent);

                  case 6:
                    _context44.prev = 6;
                    _context44.t0 = _context44["catch"](0);
                    return _context44.abrupt("return", (o.a.warn("[Service Worker Status] Error Checking service worker registration", location.href, _context44.t0), null));

                  case 9:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee44, null, [[0, 6]]);
          }));
        }
      }, {
        key: "getServiceWorkerHref",
        value: function getServiceWorkerHref(e, t) {
          var i = "";
          if (e === n.WorkerA) i = t.workerBPath.getFullPath();else if (e === n.WorkerB || e === n.ThirdParty || e === n.None) i = t.workerAPath.getFullPath();else if (e === n.Bypassed) throw new s.a(s.b.UnsupportedEnvironment);
          return new URL(i, a.a.getBaseUrl()).href;
        }
      }]);

      return c;
    }();

    !function (e) {
      e.WorkerA = "Worker A (Main)", e.WorkerB = "Worker B (Updater)", e.ThirdParty = "3rd Party", e.Installing = "Installing", e.None = "None", e.Bypassed = "Bypassed", e.Indeterminate = "Indeterminate";
    }(n || (n = {}));
  }, function (e, t, i) {
    "use strict";

    i.d(t, "b", function () {
      return n;
    }), i.d(t, "a", function () {
      return p;
    });
    var n,
        r = i(0),
        o = i(14),
        s = i(3),
        a = i(6),
        c = i(4),
        d = i(10),
        u = i(1);
    !function (e) {
      e.WorkerVersion = "GetWorkerVersion", e.Subscribe = "Subscribe", e.SubscribeNew = "SubscribeNew", e.AmpSubscriptionState = "amp-web-push-subscription-state", e.AmpSubscribe = "amp-web-push-subscribe", e.AmpUnsubscribe = "amp-web-push-unsubscribe", e.NotificationDisplayed = "notification.displayed", e.NotificationClicked = "notification.clicked", e.NotificationDismissed = "notification.dismissed", e.RedirectPage = "command.redirect";
    }(n || (n = {}));

    var l =
    /*#__PURE__*/
    function () {
      function l() {
        _classCallCheck(this, l);

        this.replies = {};
      }

      _createClass(l, [{
        key: "addListener",
        value: function addListener(e, t, i) {
          var n = {
            callback: t,
            onceListenerOnly: i
          },
              r = this.replies[e.toString()];
          r ? r.push(n) : this.replies[e.toString()] = [n];
        }
      }, {
        key: "findListenersForMessage",
        value: function findListenersForMessage(e) {
          return this.replies[e.toString()] || [];
        }
      }, {
        key: "deleteListenerRecords",
        value: function deleteListenerRecords(e) {
          this.replies[e.toString()] = null;
        }
      }, {
        key: "deleteAllListenerRecords",
        value: function deleteAllListenerRecords() {
          this.replies = {};
        }
      }, {
        key: "deleteListenerRecord",
        value: function deleteListenerRecord(e, t) {
          var i = this.replies[e.toString()];
          if (null != i) for (var _e4 = i.length - 1; _e4 >= 0; _e4--) {
            i[_e4] === t && i.splice(_e4, 1);
          }
        }
      }]);

      return l;
    }();

    var p =
    /*#__PURE__*/
    function () {
      function p(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new l();

        _classCallCheck(this, p);

        this.context = e, this.replies = t;
      }

      _createClass(p, [{
        key: "broadcast",
        value: function broadcast(e, t) {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee45() {
            var i, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _n2;

            return _regeneratorRuntime.wrap(function _callee45$(_context45) {
              while (1) {
                switch (_context45.prev = _context45.next) {
                  case 0:
                    if (!(s.a.getWindowEnv() !== c.a.ServiceWorker)) {
                      _context45.next = 2;
                      break;
                    }

                    return _context45.abrupt("return");

                  case 2:
                    _context45.next = 4;
                    return self.clients.matchAll({
                      type: "window",
                      includeUncontrolled: !0
                    });

                  case 4:
                    i = _context45.sent;
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    _context45.prev = 8;

                    for (_iterator3 = _getIterator(i); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      _n2 = _step3.value;
                      u.a.debug("[Worker Messenger] [SW -> Page] Broadcasting '".concat(e.toString(), "' to window client ").concat(_n2.url, ".")), _n2.postMessage({
                        command: e,
                        payload: t
                      });
                    }

                    _context45.next = 16;
                    break;

                  case 12:
                    _context45.prev = 12;
                    _context45.t0 = _context45["catch"](8);
                    _didIteratorError3 = true;
                    _iteratorError3 = _context45.t0;

                  case 16:
                    _context45.prev = 16;
                    _context45.prev = 17;

                    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                      _iterator3["return"]();
                    }

                  case 19:
                    _context45.prev = 19;

                    if (!_didIteratorError3) {
                      _context45.next = 22;
                      break;
                    }

                    throw _iteratorError3;

                  case 22:
                    return _context45.finish(19);

                  case 23:
                    return _context45.finish(16);

                  case 24:
                  case "end":
                    return _context45.stop();
                }
              }
            }, _callee45, null, [[8, 12, 16, 24], [17,, 19, 23]]);
          }));
        }
      }, {
        key: "unicast",
        value: function unicast(e, t, i) {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee46() {
            return _regeneratorRuntime.wrap(function _callee46$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    if (!(s.a.getWindowEnv() === c.a.ServiceWorker)) {
                      _context46.next = 6;
                      break;
                    }

                    if (i) {
                      _context46.next = 3;
                      break;
                    }

                    throw new o.a("windowClient", o.b.Empty);

                  case 3:
                    u.a.debug("[Worker Messenger] [SW -> Page] Unicasting '".concat(e.toString(), "' to window client ").concat(i.url, ".")), i.postMessage({
                      command: e,
                      payload: t
                    });
                    _context46.next = 15;
                    break;

                  case 6:
                    _context46.next = 8;
                    return this.isWorkerControllingPage();

                  case 8:
                    _context46.t0 = _context46.sent;

                    if (_context46.t0) {
                      _context46.next = 11;
                      break;
                    }

                    u.a.debug("[Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration);

                  case 11:
                    _context46.next = 13;
                    return this.waitUntilWorkerControlsPage();

                  case 13:
                    u.a.debug("[Worker Messenger] [Page -> SW] Unicasting '".concat(e.toString(), "' to service worker."));
                    navigator.serviceWorker.controller.postMessage({
                      command: e,
                      payload: t
                    });

                  case 15:
                  case "end":
                    return _context46.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "listen",
        value: function listen(e) {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee47() {
            return _regeneratorRuntime.wrap(function _callee47$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    if (d.a.supportsServiceWorkers()) {
                      _context47.next = 2;
                      break;
                    }

                    return _context47.abrupt("return");

                  case 2:
                    if (!(s.a.getWindowEnv() === c.a.ServiceWorker)) {
                      _context47.next = 6;
                      break;
                    }

                    self.addEventListener("message", this.onWorkerMessageReceivedFromPage.bind(this)), u.a.debug("[Worker Messenger] Service worker is now listening for messages.");
                    _context47.next = 8;
                    break;

                  case 6:
                    _context47.next = 8;
                    return this.listenForPage(e);

                  case 8:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee47, this);
          }));
        }
      }, {
        key: "listenForPage",
        value: function listenForPage(e) {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee48() {
            return _regeneratorRuntime.wrap(function _callee48$(_context48) {
              while (1) {
                switch (_context48.prev = _context48.next) {
                  case 0:
                    _context48.t0 = e;

                    if (_context48.t0) {
                      _context48.next = 10;
                      break;
                    }

                    _context48.next = 4;
                    return this.isWorkerControllingPage();

                  case 4:
                    _context48.t1 = _context48.sent;

                    if (_context48.t1) {
                      _context48.next = 7;
                      break;
                    }

                    u.a.debug("(".concat(location.origin, ") [Worker Messenger] The page is not controlled by the service worker yet. Waiting..."), self.registration);

                  case 7:
                    _context48.next = 9;
                    return this.waitUntilWorkerControlsPage();

                  case 9:
                    u.a.debug("(".concat(location.origin, ") [Worker Messenger] The page is now controlled by the service worker."));

                  case 10:
                    navigator.serviceWorker.addEventListener("message", this.onPageMessageReceivedFromServiceWorker.bind(this));
                    u.a.debug("(".concat(location.origin, ") [Worker Messenger] Page is now listening for messages."));

                  case 12:
                  case "end":
                    return _context48.stop();
                }
              }
            }, _callee48, this);
          }));
        }
      }, {
        key: "onWorkerMessageReceivedFromPage",
        value: function onWorkerMessageReceivedFromPage(e) {
          var t = e.data;
          if (!t || !t.command) return;
          var i = this.replies.findListenersForMessage(t.command),
              n = [],
              r = [];
          u.a.debug("[Worker Messenger] Service worker received message:", e.data);
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = _getIterator(i), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _e6 = _step4.value;
              _e6.onceListenerOnly && n.push(_e6), r.push(_e6);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          for (var _e5 = n.length - 1; _e5 >= 0; _e5--) {
            var _i6 = n[_e5];
            this.replies.deleteListenerRecord(t.command, _i6);
          }

          for (var _i7 = 0, _r2 = r; _i7 < _r2.length; _i7++) {
            var _e7 = _r2[_i7];

            _e7.callback.apply(null, [t.payload]);
          }
        }
      }, {
        key: "onPageMessageReceivedFromServiceWorker",
        value: function onPageMessageReceivedFromServiceWorker(e) {
          var t = e.data;
          if (!t || !t.command) return;
          var i = this.replies.findListenersForMessage(t.command),
              n = [],
              r = [];
          u.a.debug("[Worker Messenger] Page received message:", e.data);
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _getIterator(i), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _e9 = _step5.value;
              _e9.onceListenerOnly && n.push(_e9), r.push(_e9);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          for (var _e8 = n.length - 1; _e8 >= 0; _e8--) {
            var _i8 = n[_e8];
            this.replies.deleteListenerRecord(t.command, _i8);
          }

          for (var _i9 = 0, _r3 = r; _i9 < _r3.length; _i9++) {
            var _e10 = _r3[_i9];

            _e10.callback.apply(null, [t.payload]);
          }
        }
      }, {
        key: "on",
        value: function on(e, t) {
          this.replies.addListener(e, t, !1);
        }
      }, {
        key: "once",
        value: function once(e, t) {
          this.replies.addListener(e, t, !0);
        }
      }, {
        key: "off",
        value: function off(e) {
          e ? this.replies.deleteListenerRecords(e) : this.replies.deleteAllListenerRecords();
        }
      }, {
        key: "isWorkerControllingPage",
        value: function isWorkerControllingPage() {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee49() {
            var _e11;

            return _regeneratorRuntime.wrap(function _callee49$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    if (!(s.a.getWindowEnv() === c.a.ServiceWorker)) {
                      _context49.next = 2;
                      break;
                    }

                    return _context49.abrupt("return", !!self.registration.active);

                  case 2:
                    _context49.next = 4;
                    return this.context.serviceWorkerManager.getActiveState();

                  case 4:
                    _e11 = _context49.sent;
                    return _context49.abrupt("return", _e11 === a.a.WorkerA || _e11 === a.a.WorkerB);

                  case 6:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee49, this);
          }));
        }
      }, {
        key: "waitUntilWorkerControlsPage",
        value: function waitUntilWorkerControlsPage() {
          return r.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee53() {
            var _this8 = this;

            return _regeneratorRuntime.wrap(function _callee53$(_context53) {
              while (1) {
                switch (_context53.prev = _context53.next) {
                  case 0:
                    return _context53.abrupt("return", new _Promise(function (e) {
                      return r.a(_this8, void 0, void 0,
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee52() {
                        var _this9 = this;

                        return _regeneratorRuntime.wrap(function _callee52$(_context52) {
                          while (1) {
                            switch (_context52.prev = _context52.next) {
                              case 0:
                                _context52.next = 2;
                                return this.isWorkerControllingPage();

                              case 2:
                                if (!_context52.sent) {
                                  _context52.next = 6;
                                  break;
                                }

                                e();
                                _context52.next = 7;
                                break;

                              case 6:
                                s.a.getWindowEnv() === c.a.ServiceWorker ? self.addEventListener("activate", function (t) {
                                  return r.a(_this9, void 0, void 0,
                                  /*#__PURE__*/
                                  _regeneratorRuntime.mark(function _callee50() {
                                    return _regeneratorRuntime.wrap(function _callee50$(_context50) {
                                      while (1) {
                                        switch (_context50.prev = _context50.next) {
                                          case 0:
                                            _context50.next = 2;
                                            return this.isWorkerControllingPage();

                                          case 2:
                                            _context50.t0 = _context50.sent;

                                            if (!_context50.t0) {
                                              _context50.next = 5;
                                              break;
                                            }

                                            e();

                                          case 5:
                                          case "end":
                                            return _context50.stop();
                                        }
                                      }
                                    }, _callee50, this);
                                  }));
                                }) : navigator.serviceWorker.addEventListener("controllerchange", function (t) {
                                  return r.a(_this9, void 0, void 0,
                                  /*#__PURE__*/
                                  _regeneratorRuntime.mark(function _callee51() {
                                    return _regeneratorRuntime.wrap(function _callee51$(_context51) {
                                      while (1) {
                                        switch (_context51.prev = _context51.next) {
                                          case 0:
                                            _context51.next = 2;
                                            return this.isWorkerControllingPage();

                                          case 2:
                                            _context51.t0 = _context51.sent;

                                            if (!_context51.t0) {
                                              _context51.next = 5;
                                              break;
                                            }

                                            e();

                                          case 5:
                                          case "end":
                                            return _context51.stop();
                                        }
                                      }
                                    }, _callee51, this);
                                  }));
                                });

                              case 7:
                              case "end":
                                return _context52.stop();
                            }
                          }
                        }, _callee52, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context53.stop();
                }
              }
            }, _callee53);
          }));
        }
      }]);

      return p;
    }();
  }, function (e, t, i) {
    "use strict";

    (function (e) {
      i.d(t, "a", function () {
        return d;
      });
      var n = i(11),
          r = i.n(n),
          o = i(3),
          s = i(4),
          a = i(1),
          c = i(2);

      var d =
      /*#__PURE__*/
      function () {
        function d() {
          _classCallCheck(this, d);
        }

        _createClass(d, null, [{
          key: "getBaseUrl",
          value: function getBaseUrl() {
            return location.origin;
          }
        }, {
          key: "isLocalhostAllowedAsSecureOrigin",
          value: function isLocalhostAllowedAsSecureOrigin() {
            return OneSignal.config && OneSignal.config.userConfig && !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin;
          }
        }, {
          key: "isUsingSubscriptionWorkaround",
          value: function isUsingSubscriptionWorkaround() {
            var e = o.a.getWindowEnv();
            if (!OneSignal.config) throw new Error("(".concat(e.toString(), ") isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists."));
            if (r.a.safari) return !1;
            var t = this.isLocalhostAllowedAsSecureOrigin();
            return d.internalIsUsingSubscriptionWorkaround(OneSignal.config.subdomain, t);
          }
        }, {
          key: "internalIsUsingSubscriptionWorkaround",
          value: function internalIsUsingSubscriptionWorkaround(e, t) {
            if (r.a.safari) return !1;
            if (!0 === t && ("localhost" === location.hostname || "127.0.0.1" === location.hostname)) return !1;
            var i = o.a.getWindowEnv();
            return !(i !== s.a.Host && i !== s.a.CustomIframe || !e && "http:" !== location.protocol);
          }
        }, {
          key: "redetectBrowserUserAgent",
          value: function redetectBrowserUserAgent() {
            return "" === r.a.name && "" === r.a.version ? r.a._detect(navigator.userAgent) : r.a;
          }
        }, {
          key: "isValidUuid",
          value: function isValidUuid(e) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e);
          }
        }, {
          key: "getRandomUuid",
          value: function getRandomUuid() {
            var t = "";
            var i = false ? undefined : window.crypto || window.msCrypto;
            return t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, i ? function (e) {
              var t = i.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
              return ("x" == e ? t : 3 & t | 8).toString(16);
            } : function (e) {
              var t = 16 * Math.random() | 0;
              return ("x" == e ? t : 3 & t | 8).toString(16);
            });
          }
        }, {
          key: "logMethodCall",
          value: function logMethodCall(e) {
            for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              t[_key3 - 1] = arguments[_key3];
            }

            return a.a.debug("Called %c".concat(e, "(").concat(t.map(c.a.stringify).join(", "), ")"), c.a.getConsoleStyle("code"), ".");
          }
        }]);

        return d;
      }();

      t.b = d;
    }).call(this, i(32));
  }, function (e, t, i) {
    "use strict";

    var n;
    i.d(t, "a", function () {
      return n;
    }), function (e) {
      e[e.Default = 0] = "Default", e[e.Subscribed = 1] = "Subscribed", e[e.MutedByApi = -2] = "MutedByApi", e[e.NotSubscribed = -10] = "NotSubscribed", e[e.TemporaryWebRecord = -20] = "TemporaryWebRecord", e[e.PermissionRevoked = -21] = "PermissionRevoked", e[e.PushSubscriptionRevoked = -22] = "PushSubscriptionRevoked", e[e.ServiceWorkerStatus403 = -23] = "ServiceWorkerStatus403", e[e.ServiceWorkerStatus404 = -24] = "ServiceWorkerStatus404";
    }(n || (n = {}));
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return a;
    });
    var n = i(3),
        r = i(4),
        o = i(11),
        s = i.n(o);

    var a =
    /*#__PURE__*/
    function () {
      function a() {
        _classCallCheck(this, a);
      }

      _createClass(a, null, [{
        key: "isBrowser",
        value: function isBrowser() {
          return true;
        }
      }, {
        key: "isSafari",
        value: function isSafari() {
          return a.isBrowser() && s.a.safari;
        }
      }, {
        key: "version",
        value: function version() {
          return Number(150801);
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          var e = navigator.language;

          if (e) {
            var _t5 = (e = e.toLowerCase()).split("-");

            if ("zh" == _t5[0]) {
              var _iteratorNormalCompletion6 = true;
              var _didIteratorError6 = false;
              var _iteratorError6 = undefined;

              try {
                for (var _iterator6 = _getIterator(a.TRADITIONAL_CHINESE_LANGUAGE_TAG), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  var _e12 = _step6.value;
                  if (-1 !== _t5.indexOf(_e12)) return "zh-Hant";
                }
              } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                    _iterator6["return"]();
                  }
                } finally {
                  if (_didIteratorError6) {
                    throw _iteratorError6;
                  }
                }
              }

              var _iteratorNormalCompletion7 = true;
              var _didIteratorError7 = false;
              var _iteratorError7 = undefined;

              try {
                for (var _iterator7 = _getIterator(a.SIMPLIFIED_CHINESE_LANGUAGE_TAG), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                  var _e13 = _step7.value;
                  if (-1 !== _t5.indexOf(_e13)) return "zh-Hans";
                }
              } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                    _iterator7["return"]();
                  }
                } finally {
                  if (_didIteratorError7) {
                    throw _iteratorError7;
                  }
                }
              }

              return "zh-Hant";
            }

            return _t5[0].substring(0, 2);
          }

          return "en";
        }
      }, {
        key: "supportsServiceWorkers",
        value: function supportsServiceWorkers() {
          switch (n.a.getWindowEnv()) {
            case r.a.ServiceWorker:
              return !0;

            default:
              return "undefined" != typeof navigator && "serviceWorker" in navigator;
          }
        }
      }, {
        key: "getSdkStylesVersionHash",
        value: function getSdkStylesVersionHash() {
          return "undefined" == typeof __SRC_STYLESHEETS_MD5_HASH__ ? "1" : __SRC_STYLESHEETS_MD5_HASH__;
        }
      }, {
        key: "TRADITIONAL_CHINESE_LANGUAGE_TAG",
        get: function get() {
          return ["tw", "hant"];
        }
      }, {
        key: "SIMPLIFIED_CHINESE_LANGUAGE_TAG",
        get: function get() {
          return ["cn", "hans"];
        }
      }]);

      return a;
    }();
  }, function (e, t, i) {
    var n;
    n = function n() {
      var e = !0;

      function t(t) {
        function i(e) {
          var i = t.match(e);
          return i && i.length > 1 && i[1] || "";
        }

        var n,
            r,
            o,
            s = i(/(ipod|iphone|ipad)/i).toLowerCase(),
            a = !/like android/i.test(t) && /android/i.test(t),
            c = /nexus\s*[0-6]\s*/i.test(t),
            d = !c && /nexus\s*[0-9]+/i.test(t),
            u = /CrOS/.test(t),
            l = /silk/i.test(t),
            p = /sailfish/i.test(t),
            g = /tizen/i.test(t),
            f = /(web|hpw)os/i.test(t),
            h = /windows phone/i.test(t),
            b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
            m = !s && !l && /macintosh/i.test(t),
            v = !a && !p && !g && !f && /linux/i.test(t),
            S = i(/edge\/(\d+(\.\d+)?)/i),
            y = i(/version\/(\d+(\.\d+)?)/i),
            w = /tablet/i.test(t) && !/tablet pc/i.test(t),
            P = !w && /[^-]mobi/i.test(t),
            O = /xbox/i.test(t);
        /opera/i.test(t) ? n = {
          name: "Opera",
          opera: e,
          version: y || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
        } : /opr\/|opios/i.test(t) ? n = {
          name: "Opera",
          opera: e,
          version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
        } : /SamsungBrowser/i.test(t) ? n = {
          name: "Samsung Internet for Android",
          samsungBrowser: e,
          version: y || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /coast/i.test(t) ? n = {
          name: "Opera Coast",
          coast: e,
          version: y || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
        } : /yabrowser/i.test(t) ? n = {
          name: "Yandex Browser",
          yandexbrowser: e,
          version: y || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /ucbrowser/i.test(t) ? n = {
          name: "UC Browser",
          ucbrowser: e,
          version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
        } : /mxios/i.test(t) ? n = {
          name: "Maxthon",
          maxthon: e,
          version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
        } : /epiphany/i.test(t) ? n = {
          name: "Epiphany",
          epiphany: e,
          version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
        } : /puffin/i.test(t) ? n = {
          name: "Puffin",
          puffin: e,
          version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
        } : /sleipnir/i.test(t) ? n = {
          name: "Sleipnir",
          sleipnir: e,
          version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
        } : /k-meleon/i.test(t) ? n = {
          name: "K-Meleon",
          kMeleon: e,
          version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
        } : h ? (n = {
          name: "Windows Phone",
          windowsphone: e
        }, S ? (n.msedge = e, n.version = S) : (n.msie = e, n.version = i(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
          name: "Internet Explorer",
          msie: e,
          version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        } : u ? n = {
          name: "Chrome",
          chromeos: e,
          chromeBook: e,
          chrome: e,
          version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : /chrome.+? edge/i.test(t) ? n = {
          name: "Microsoft Edge",
          msedge: e,
          version: S
        } : /vivaldi/i.test(t) ? n = {
          name: "Vivaldi",
          vivaldi: e,
          version: i(/vivaldi\/(\d+(\.\d+)?)/i) || y
        } : p ? n = {
          name: "Sailfish",
          sailfish: e,
          version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        } : /seamonkey\//i.test(t) ? n = {
          name: "SeaMonkey",
          seamonkey: e,
          version: i(/seamonkey\/(\d+(\.\d+)?)/i)
        } : /firefox|iceweasel|fxios/i.test(t) ? (n = {
          name: "Firefox",
          firefox: e,
          version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
        }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e)) : l ? n = {
          name: "Amazon Silk",
          silk: e,
          version: i(/silk\/(\d+(\.\d+)?)/i)
        } : /phantom/i.test(t) ? n = {
          name: "PhantomJS",
          phantom: e,
          version: i(/phantomjs\/(\d+(\.\d+)?)/i)
        } : /slimerjs/i.test(t) ? n = {
          name: "SlimerJS",
          slimer: e,
          version: i(/slimerjs\/(\d+(\.\d+)?)/i)
        } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
          name: "BlackBerry",
          blackberry: e,
          version: y || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        } : f ? (n = {
          name: "WebOS",
          webos: e,
          version: y || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        }, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
          name: "Bada",
          bada: e,
          version: i(/dolfin\/(\d+(\.\d+)?)/i)
        } : g ? n = {
          name: "Tizen",
          tizen: e,
          version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
        } : /qupzilla/i.test(t) ? n = {
          name: "QupZilla",
          qupzilla: e,
          version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
        } : /chromium/i.test(t) ? n = {
          name: "Chromium",
          chromium: e,
          version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
        } : /chrome|crios|crmo/i.test(t) ? n = {
          name: "Chrome",
          chrome: e,
          version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : a ? n = {
          name: "Android",
          version: y
        } : /safari|applewebkit/i.test(t) ? (n = {
          name: "Safari",
          safari: e
        }, y && (n.version = y)) : s ? (n = {
          name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
        }, y && (n.version = y)) : n = /googlebot/i.test(t) ? {
          name: "Googlebot",
          googlebot: e,
          version: i(/googlebot\/(\d+(\.\d+))/i) || y
        } : {
          name: i(/^(.*)\/(.*) /),
          version: (r = /^(.*)\/(.*) /, o = t.match(r), o && o.length > 1 && o[2] || "")
        }, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && y && (n.version = y)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || n.msedge || !a && !n.silk ? n.windowsphone || n.msedge || !s ? m ? n.mac = e : O ? n.xbox = e : b ? n.windows = e : v && (n.linux = e) : (n[s] = e, n.ios = e) : n.android = e;
        var k = "";
        n.windows ? k = function (e) {
          switch (e) {
            case "NT":
              return "NT";

            case "XP":
              return "XP";

            case "NT 5.0":
              return "2000";

            case "NT 5.1":
              return "XP";

            case "NT 5.2":
              return "2003";

            case "NT 6.0":
              return "Vista";

            case "NT 6.1":
              return "7";

            case "NT 6.2":
              return "8";

            case "NT 6.3":
              return "8.1";

            case "NT 10.0":
              return "10";

            default:
              return;
          }
        }(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? k = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? k = (k = i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? k = (k = i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? k = i(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? k = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? k = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? k = i(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (k = i(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (n.osversion = k);
        var I = !n.windows && k.split(".")[0];
        return w || d || "ipad" == s || a && (3 == I || I >= 4 && !P) || n.silk ? n.tablet = e : (P || "iphone" == s || "ipod" == s || a || c || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n;
      }

      var i = t("undefined" != typeof navigator && navigator.userAgent || "");

      function n(e) {
        return e.split(".").length;
      }

      function r(e, t) {
        var i,
            n = [];
        if (Array.prototype.map) return Array.prototype.map.call(e, t);

        for (i = 0; i < e.length; i++) {
          n.push(t(e[i]));
        }

        return n;
      }

      function o(e) {
        for (var t = Math.max(n(e[0]), n(e[1])), i = r(e, function (e) {
          var i = t - n(e);
          return r((e += new Array(i + 1).join(".0")).split("."), function (e) {
            return new Array(20 - e.length).join("0") + e;
          }).reverse();
        }); --t >= 0;) {
          if (i[0][t] > i[1][t]) return 1;
          if (i[0][t] !== i[1][t]) return -1;
          if (0 === t) return 0;
        }
      }

      function s(e, n, r) {
        var s = i;
        "string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (s = t(r));
        var a = "" + s.version;

        for (var c in e) {
          if (e.hasOwnProperty(c) && s[c]) {
            if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
            return o([a, e[c]]) < 0;
          }
        }

        return n;
      }

      return i.test = function (e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          if ("string" == typeof n && n in i) return !0;
        }

        return !1;
      }, i.isUnsupportedBrowser = s, i.compareVersions = o, i.check = function (e, t, i) {
        return !s(e, t, i);
      }, i._detect = t, i;
    }, void 0 !== e && e.exports ? e.exports = n() : i(34)("bowser", n);
  }, function (e, t, i) {
    "use strict";

    var n;
    i.d(t, "a", function () {
      return n;
    }), function (e) {
      e.Default = "default", e.Granted = "granted", e.Denied = "denied";
    }(n || (n = {}));
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return n;
    });

    var n =
    /*#__PURE__*/
    function (_Error) {
      _inherits(n, _Error);

      function n() {
        var _this10;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, n);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, e)), _Object$defineProperty(_assertThisInitialized(_this10), "message", {
          configurable: !0,
          enumerable: !1,
          value: e,
          writable: !0
        }), _Object$defineProperty(_assertThisInitialized(_this10), "name", {
          configurable: !0,
          enumerable: !1,
          value: _this10.constructor.name,
          writable: !0
        }), Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(_assertThisInitialized(_this10), _this10.constructor) : (_Object$defineProperty(_assertThisInitialized(_this10), "stack", {
          configurable: !0,
          enumerable: !1,
          value: new Error(e).stack,
          writable: !0
        }), _Object$setPrototypeOf(_assertThisInitialized(_this10), n.prototype));
        return _this10;
      }

      return n;
    }(_wrapNativeSuper(Error));
  }, function (e, t, i) {
    "use strict";

    i.d(t, "b", function () {
      return n;
    }), i.d(t, "a", function () {
      return InvalidArgumentError;
    });
    var n,
        r = i(13);
    !function (e) {
      e[e.Empty = 0] = "Empty", e[e.Malformed = 1] = "Malformed", e[e.EnumOutOfRange = 2] = "EnumOutOfRange";
    }(n || (n = {}));

    var InvalidArgumentError =
    /*#__PURE__*/
    function (_r$a) {
      _inherits(InvalidArgumentError, _r$a);

      function InvalidArgumentError(e, t) {
        var _this11;

        _classCallCheck(this, InvalidArgumentError);

        switch (t) {
          case n.Empty:
            _this11 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgumentError).call(this, "Supply a non-empty value to '".concat(e, "'.")));
            break;

          case n.Malformed:
            _this11 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgumentError).call(this, "The value for '".concat(e, "' was malformed.")));
            break;

          case n.EnumOutOfRange:
            _this11 = _possibleConstructorReturn(this, _getPrototypeOf(InvalidArgumentError).call(this, "The value for '".concat(e, "' was out of range of the expected input enum.")));
        }

        _this11.argument = e, _this11.reason = n[t], _Object$setPrototypeOf(_assertThisInitialized(_this11), InvalidArgumentError.prototype);
        return _this11;
      }

      return InvalidArgumentError;
    }(r.a);
  }, function (e, t, i) {
    "use strict";

    var n;
    i.d(t, "a", function () {
      return n;
    }), function (e) {
      e.Secure = "Secure", e.SecureProxy = "Secure Proxy", e.InsecureProxy = "Insecure Proxy";
    }(n || (n = {}));
  }, function (e, t, i) {
    "use strict";

    var n,
        r,
        o,
        s = i(13);
    !function (e) {
      e[e.HttpsPermissionRequest = "HTTPS permission request"] = "HttpsPermissionRequest", e[e.FullscreenHttpPermissionMessage = "fullscreen HTTP permission message"] = "FullscreenHttpPermissionMessage", e[e.FullscreenHttpsPermissionMessage = "fullscreen HTTPS permission message"] = "FullscreenHttpsPermissionMessage", e[e.SlidedownPermissionMessage = "slidedown permission message"] = "SlidedownPermissionMessage", e[e.SubscriptionBell = "subscription bell"] = "SubscriptionBell";
    }(n || (n = {})), i.d(t, "b", function () {
      return r;
    }), i.d(t, "a", function () {
      return a;
    }), (o = r || (r = {}))[o.MissingAppId = 0] = "MissingAppId", o[o.RedundantPermissionMessage = 1] = "RedundantPermissionMessage", o[o.PushPermissionAlreadyGranted = 2] = "PushPermissionAlreadyGranted", o[o.UnsupportedEnvironment = 3] = "UnsupportedEnvironment", o[o.MissingDomElement = 4] = "MissingDomElement", o[o.ServiceWorkerNotActivated = 5] = "ServiceWorkerNotActivated", o[o.NoProxyFrame = 6] = "NoProxyFrame";

    var a =
    /*#__PURE__*/
    function (_s$a) {
      _inherits(a, _s$a);

      function a(e, t) {
        var _this12;

        _classCallCheck(this, a);

        switch (e) {
          case r.MissingAppId:
            _this12 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, "Missing required app ID."));
            break;

          case r.RedundantPermissionMessage:
            var _i10 = "";
            t && t.permissionPromptType && (_i10 = "(".concat(n[t.permissionPromptType], ")")), _this12 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, "Another permission message ".concat(_i10, " is being displayed.")));
            break;

          case r.PushPermissionAlreadyGranted:
            _this12 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, "Push permission has already been granted."));
            break;

          case r.UnsupportedEnvironment:
            _this12 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, "The current environment does not support this operation."));
            break;

          case r.ServiceWorkerNotActivated:
            _this12 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, "The service worker must be activated first."));
            break;

          case r.NoProxyFrame:
            _this12 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this, "No proxy frame."));
        }

        _this12.description = r[e], _this12.reason = e, _Object$setPrototypeOf(_assertThisInitialized(_this12), a.prototype);
        return _this12;
      }

      return a;
    }(s.a);
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return a;
    });
    var n = i(10),
        r = i(3),
        o = i(2),
        s = i(22);

    var a =
    /*#__PURE__*/
    function () {
      function a() {
        _classCallCheck(this, a);
      }

      _createClass(a, null, [{
        key: "get",
        value: function get(e, t, i) {
          return a.call("GET", e, t, i);
        }
      }, {
        key: "post",
        value: function post(e, t, i) {
          return a.call("POST", e, t, i);
        }
      }, {
        key: "put",
        value: function put(e, t, i) {
          return a.call("PUT", e, t, i);
        }
      }, {
        key: "delete",
        value: function _delete(e, t, i) {
          return a.call("DELETE", e, t, i);
        }
      }, {
        key: "call",
        value: function call(e, t, i, o) {
          if ("GET" === e) {
            if (t.indexOf("players") > -1 && -1 === t.indexOf("app_id=")) return console.error("Calls to player api are not permitted without app_id"), _Promise.reject(new s.a(s.b.MissingAppId));
          } else if (t.indexOf("players") > -1 && (!i || !i.app_id)) return console.error("Calls to player api are not permitted without app_id"), _Promise.reject(new s.a(s.b.MissingAppId));

          var c = new Headers();

          if (c.append("SDK-Version", "onesignal/web/".concat(n.a.version())), c.append("Content-Type", "application/json;charset=UTF-8"), o) {
            for (var _i11 = 0, _Object$keys3 = _Object$keys2(o); _i11 < _Object$keys3.length; _i11++) {
              var _e14 = _Object$keys3[_i11];
              c.append(_e14, o[_e14]);
            }
          }

          var d = {
            method: e || "NO_METHOD_SPECIFIED",
            headers: c,
            cache: "no-cache"
          };
          var u;
          return i && (d.body = _JSON$stringify(i)), fetch(r.a.getOneSignalApiUrl().toString() + "/" + t, d).then(function (e) {
            return u = e.status, e.json();
          }).then(function (e) {
            if (u >= 200 && u < 300) return e;
            if ("no-user-id-error" !== a.identifyError(e)) return _Promise.reject(e);
          });
        }
      }, {
        key: "identifyError",
        value: function identifyError(e) {
          if (!e || !e.errors) return "no-error";
          var t = e.errors;
          return o.a.contains(t, "No user with this id found") || o.a.contains(t, "Could not find app_id for given player id.") ? "no-user-id-error" : "unknown-error";
        }
      }]);

      return a;
    }();

    t.b = a;
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return r;
    });
    var n = i(13);

    var r =
    /*#__PURE__*/
    function (_n$a2) {
      _inherits(r, _n$a2);

      function r() {
        var _this13;

        _classCallCheck(this, r);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(r).call(this, "This code is not implemented yet.")), _Object$setPrototypeOf(_assertThisInitialized(_this13), r.prototype);
        return _this13;
      }

      return r;
    }(n.a);
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return p;
    });
    var n = i(0),
        r = i(10),
        o = i(3),
        s = i(4),
        a = i(1),
        c = i(2);
    var d = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "animatedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet", "testEvent"],
        u = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "notificationClick", "permissionPromptDisplay", "testWouldDisplay", "testInitOptionDisabled", "popupWindowTimeout"],
        l = {
      notificationPermissionChange: "onesignal.prompt.native.permissionchanged",
      subscriptionChange: "onesignal.subscription.changed",
      customPromptClick: "onesignal.prompt.custom.clicked"
    };

    var p =
    /*#__PURE__*/
    function () {
      function p() {
        _classCallCheck(this, p);
      }

      _createClass(p, null, [{
        key: "trigger",
        value: function trigger(e, t) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee54() {
            var _n3, _r4, _i12;

            return _regeneratorRuntime.wrap(function _callee54$(_context54) {
              while (1) {
                switch (_context54.prev = _context54.next) {
                  case 0:
                    if (!c.b.contains(d, e)) {
                      _n3 = t, _r4 = c.b.capitalize(o.a.getWindowEnv().toString());
                      i && (_r4 = "".concat(_r4, " \xE2\xAC\xB8 ").concat(c.b.capitalize(i))), _n3 || !1 === _n3 ? a.a.debug("(".concat(_r4, ") \xC2\xBB %c").concat(e, ":"), c.b.getConsoleStyle("event"), _n3) : a.a.debug("(".concat(_r4, ") \xC2\xBB %c").concat(e), c.b.getConsoleStyle("event"));
                    }

                    if (!r.a.isBrowser()) {
                      _context54.next = 8;
                      break;
                    }

                    if (!(e === OneSignal.EVENTS.SDK_INITIALIZED)) {
                      _context54.next = 6;
                      break;
                    }

                    if (!OneSignal.initialized) {
                      _context54.next = 5;
                      break;
                    }

                    return _context54.abrupt("return");

                  case 5:
                    OneSignal.initialized = !0;

                  case 6:
                    _context54.next = 8;
                    return OneSignal.emitter.emit(e, t);

                  case 8:
                    if (l.hasOwnProperty(e)) {
                      _i12 = l[e];

                      p._triggerLegacy(_i12, t);
                    }

                    if (r.a.isBrowser() && (o.a.getWindowEnv() === s.a.OneSignalSubscriptionPopup || o.a.getWindowEnv() === s.a.OneSignalProxyFrame)) {
                      opener || parent ? c.b.contains(u, e) && (o.a.getWindowEnv() === s.a.OneSignalSubscriptionPopup ? OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                        eventName: e,
                        eventData: t
                      }) : OneSignal.proxyFrame.retriggerRemoteEvent(e, t)) : a.a.error("Could not send event '".concat(e, "' back to host page because no creator (opener or parent) found!"));
                    }

                  case 10:
                  case "end":
                    return _context54.stop();
                }
              }
            }, _callee54);
          }));
        }
      }, {
        key: "_triggerLegacy",
        value: function _triggerLegacy(e, t) {
          var i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: t
          });
          window.dispatchEvent(i);
        }
      }]);

      return p;
    }();
  }, function (e, t, i) {
    "use strict";

    i.d(t, "b", function () {
      return n;
    }), i.d(t, "a", function () {
      return SdkInitError;
    });
    var n,
        r = i(13);
    !function (e) {
      e[e.InvalidAppId = 0] = "InvalidAppId", e[e.AppNotConfiguredForWebPush = 1] = "AppNotConfiguredForWebPush", e[e.MissingSubdomain = 2] = "MissingSubdomain", e[e.WrongSiteUrl = 3] = "WrongSiteUrl", e[e.MultipleInitialization = 4] = "MultipleInitialization", e[e.MissingSafariWebId = 5] = "MissingSafariWebId", e[e.Unknown = 6] = "Unknown";
    }(n || (n = {}));

    var SdkInitError =
    /*#__PURE__*/
    function (_r$a2) {
      _inherits(SdkInitError, _r$a2);

      function SdkInitError(e, t) {
        var _this14;

        _classCallCheck(this, SdkInitError);

        switch (e) {
          case n.InvalidAppId:
            _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SdkInitError).call(this, "OneSignal: This app ID does not match any existing app. Double check your app ID."));
            break;

          case n.AppNotConfiguredForWebPush:
            _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SdkInitError).call(this, "OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://goo.gl/01h7fZ)."));
            break;

          case n.MissingSubdomain:
            _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SdkInitError).call(this, "OneSignal: Non-HTTPS pages require a subdomain of OneSignal to be chosen on your dashboard. See step 1.4 on our setup guide (https://goo.gl/xip6JB)."));
            break;

          case n.WrongSiteUrl:
            t && t.siteUrl ? _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SdkInitError).call(this, "OneSignal: This web push config can only be used on ".concat(new URL(t.siteUrl).origin, ". Your current origin is ").concat(location.origin, "."))) : _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SdkInitError).call(this, "OneSignal: This web push config can not be used on the current site."));
            break;

          case n.MultipleInitialization:
            _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SdkInitError).call(this, "OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once."));
            break;

          case n.MissingSafariWebId:
            _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SdkInitError).call(this, "OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide."));
            break;

          case n.Unknown:
            _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SdkInitError).call(this, "OneSignal: An unknown initialization error occurred."));
        }

        _this14.reason = n[e], _Object$setPrototypeOf(_assertThisInitialized(_this14), SdkInitError.prototype);
        return _possibleConstructorReturn(_this14);
      }

      return SdkInitError;
    }(r.a);
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return n;
    });

    var n =
    /*#__PURE__*/
    function () {
      function n() {
        _classCallCheck(this, n);
      }

      _createClass(n, [{
        key: "isNewSubscription",
        value: function isNewSubscription() {
          return this.existingW3cPushSubscription ? !!this.existingW3cPushSubscription.w3cEndpoint != !!this.w3cEndpoint || !(!this.existingW3cPushSubscription.w3cEndpoint || !this.w3cEndpoint || this.existingW3cPushSubscription.w3cEndpoint.toString() === this.w3cEndpoint.toString()) || this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh || this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth : !this.existingSafariDeviceToken || this.existingSafariDeviceToken !== this.safariDeviceToken;
        }
      }, {
        key: "setFromSafariSubscription",
        value: function setFromSafariSubscription(e) {
          this.safariDeviceToken = e;
        }
      }, {
        key: "serialize",
        value: function serialize() {
          return {
            w3cEndpoint: this.w3cEndpoint ? this.w3cEndpoint.toString() : null,
            w3cP256dh: this.w3cP256dh,
            w3cAuth: this.w3cAuth,
            safariDeviceToken: this.safariDeviceToken,
            existingPushSubscription: this.existingW3cPushSubscription ? this.existingW3cPushSubscription.serialize() : null,
            existingSafariDeviceToken: this.existingSafariDeviceToken
          };
        }
      }], [{
        key: "setFromW3cSubscription",
        value: function setFromW3cSubscription(e) {
          var t = new n();

          if (e && (t.w3cEndpoint = new URL(e.endpoint), e.getKey)) {
            var _i13 = null;

            try {
              _i13 = e.getKey("p256dh");
            } catch (e) {}

            var _n4 = null;

            try {
              _n4 = e.getKey("auth");
            } catch (e) {}

            if (_i13) {
              var _e15 = btoa(String.fromCharCode.apply(null, new Uint8Array(_i13)));

              t.w3cP256dh = _e15;
            }

            if (_n4) {
              var _e16 = btoa(String.fromCharCode.apply(null, new Uint8Array(_n4)));

              t.w3cAuth = _e16;
            }
          }

          return t;
        }
      }, {
        key: "deserialize",
        value: function deserialize(e) {
          var t = new n();
          if (!e) return t;

          try {
            t.w3cEndpoint = new URL(e.w3cEndpoint);
          } catch (e) {}

          return t.w3cP256dh = e.w3cP256dh, t.w3cAuth = e.w3cAuth, t.existingW3cPushSubscription = void 0, e.existingW3cPushSubscription ? t.existingW3cPushSubscription = n.deserialize(e.existingW3cPushSubscription) : e.existingPushSubscription && (t.existingW3cPushSubscription = n.deserialize(e.existingPushSubscription)), t.safariDeviceToken = e.safariDeviceToken, t.existingSafariDeviceToken = e.existingSafariDeviceToken, t;
        }
      }]);

      return n;
    }();
  }, function (e, t, i) {
    "use strict";

    i.d(t, "b", function () {
      return n;
    }), i.d(t, "a", function () {
      return o;
    });
    var n,
        r = i(13);
    !function (e) {
      e[e.MissingAppId = 0] = "MissingAppId";
    }(n || (n = {}));

    var o =
    /*#__PURE__*/
    function (_r$a3) {
      _inherits(o, _r$a3);

      function o(e) {
        var _this15;

        _classCallCheck(this, o);

        switch (e) {
          case n.MissingAppId:
            _this15 = _possibleConstructorReturn(this, _getPrototypeOf(o).call(this, "The API call is missing an app ID."));
        }

        _Object$setPrototypeOf(_assertThisInitialized(_this15), o.prototype);

        return _this15;
      }

      return o;
    }(r.a);
  }, function (e, t, i) {
    "use strict";

    var n;
    i.d(t, "a", function () {
      return n;
    }), function (e) {
      e[e.ChromeLike = 5] = "ChromeLike", e[e.Safari = 7] = "Safari", e[e.Firefox = 8] = "Firefox", e[e.Edge = 12] = "Edge", e[e.Email = 11] = "Email";
    }(n || (n = {}));
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return c;
    });
    var n = i(11),
        r = i.n(n),
        o = i(18),
        s = i(9),
        a = i(30);

    var c =
    /*#__PURE__*/
    function (_a$a) {
      _inherits(c, _a$a);

      function c(e) {
        var _this16;

        _classCallCheck(this, c);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(c).call(this)), _this16.subscription = e;
        return _this16;
      }

      _createClass(c, [{
        key: "serialize",
        value: function serialize() {
          var e = _get(_getPrototypeOf(c.prototype), "serialize", this).call(this);

          return this.subscription && (e.identifier = r.a.safari ? this.subscription.safariDeviceToken : this.subscription.w3cEndpoint ? this.subscription.w3cEndpoint.toString() : null, e.web_auth = this.subscription.w3cAuth, e.web_p256 = this.subscription.w3cP256dh), e;
        }
      }, {
        key: "deserialize",
        value: function deserialize(e) {
          throw new o.a();
        }
      }], [{
        key: "createFromPushSubscription",
        value: function createFromPushSubscription(e, t, i) {
          var n = new c(t);
          return n.appId = e, n.subscriptionState = t ? s.a.Subscribed : s.a.NotSubscribed, i && (n.subscriptionState = i), n;
        }
      }]);

      return c;
    }(a.a);
  }, function (e, t, i) {
    "use strict";

    var n;
    i.d(t, "a", function () {
      return n;
    }), function (e) {
      e.None = "None", e.UnitTesting = "Unit Testing";
    }(n || (n = {}));
  }, function (e, t, i) {
    "use strict";

    var n = i(7),
        r = i(3),
        o = i(4),
        s = i(1);

    var a =
    /*#__PURE__*/
    function () {
      function a() {
        _classCallCheck(this, a);

        this.incrementedPageViewCount = !1;
      }

      _createClass(a, [{
        key: "getPageViewCount",
        value: function getPageViewCount() {
          try {
            var _e17 = sessionStorage.getItem(a.SESSION_STORAGE_KEY_NAME),
                _t6 = _e17 ? _parseInt(_e17) : 0;

            return isNaN(_t6) ? 0 : _t6;
          } catch (e) {
            return 0;
          }
        }
      }, {
        key: "setPageViewCount",
        value: function setPageViewCount(e) {
          try {
            sessionStorage.setItem(a.SESSION_STORAGE_KEY_NAME, e.toString()), r.a.getWindowEnv() === o.a.OneSignalSubscriptionPopup && OneSignal.subscriptionPopup && OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT);
          } catch (e) {}
        }
      }, {
        key: "incrementPageViewCount",
        value: function incrementPageViewCount() {
          if (this.incrementedPageViewCount) return;
          var e = this.getPageViewCount() + 1;
          this.setPageViewCount(e), s.a.debug("Incremented page view count to ".concat(e, ".")), this.incrementedPageViewCount = !0;
        }
      }, {
        key: "simulatePageNavigationOrRefresh",
        value: function simulatePageNavigationOrRefresh() {
          this.incrementedPageViewCount = !1;
        }
      }, {
        key: "isFirstPageView",
        value: function isFirstPageView() {
          return 1 === this.getPageViewCount();
        }
      }]);

      return a;
    }();

    a.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count";
    var c = i(0),
        d = i(8),
        u = i(11),
        l = i.n(u),
        InvalidArgumentError = i(14),
        p = i(12);
    var g = "isOptedOut",
        f = "isPushNotificationsEnabled";

    var h =
    /*#__PURE__*/
    function () {
      function h() {
        _classCallCheck(this, h);
      }

      _createClass(h, null, [{
        key: "getIsOptedOut",
        value: function getIsOptedOut() {
          return "true" === localStorage.getItem(g);
        }
      }, {
        key: "getIsPushNotificationsEnabled",
        value: function getIsPushNotificationsEnabled() {
          return "true" === localStorage.getItem(f);
        }
      }, {
        key: "setIsOptedOut",
        value: function setIsOptedOut(e) {
          localStorage.setItem(g, e.toString());
        }
      }, {
        key: "setIsPushNotificationsEnabled",
        value: function setIsPushNotificationsEnabled(e) {
          localStorage.setItem(f, e.toString());
        }
      }, {
        key: "setStoredPermission",
        value: function setStoredPermission(e) {
          localStorage.setItem(b.STORED_PERMISSION_KEY, e);
        }
      }, {
        key: "getStoredPermission",
        value: function getStoredPermission() {
          switch (localStorage.getItem(b.STORED_PERMISSION_KEY) || "default") {
            case "granted":
              return p.a.Granted;

            case "denied":
              return p.a.Denied;

            default:
              return p.a.Default;
          }
        }
      }]);

      return h;
    }();

    var b =
    /*#__PURE__*/
    function () {
      function b() {
        _classCallCheck(this, b);
      }

      _createClass(b, [{
        key: "getNotificationPermission",
        value: function getNotificationPermission(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee55() {
            var t;
            return _regeneratorRuntime.wrap(function _callee55$(_context55) {
              while (1) {
                switch (_context55.prev = _context55.next) {
                  case 0:
                    _context55.next = 2;
                    return this.getReportedNotificationPermission(e);

                  case 2:
                    t = _context55.sent;
                    _context55.next = 5;
                    return this.isPermissionEnvironmentAmbiguous(t);

                  case 5:
                    if (!_context55.sent) {
                      _context55.next = 11;
                      break;
                    }

                    _context55.next = 8;
                    return this.getInterpretedAmbiguousPermission(t);

                  case 8:
                    _context55.t0 = _context55.sent;
                    _context55.next = 12;
                    break;

                  case 11:
                    _context55.t0 = t;

                  case 12:
                    return _context55.abrupt("return", _context55.t0);

                  case 13:
                  case "end":
                    return _context55.stop();
                }
              }
            }, _callee55, this);
          }));
        }
      }, {
        key: "getReportedNotificationPermission",
        value: function getReportedNotificationPermission(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee56() {
            return _regeneratorRuntime.wrap(function _callee56$(_context56) {
              while (1) {
                switch (_context56.prev = _context56.next) {
                  case 0:
                    if (!l.a.safari) {
                      _context56.next = 4;
                      break;
                    }

                    _context56.t0 = b.getSafariNotificationPermission(e);
                    _context56.next = 12;
                    break;

                  case 4:
                    if (!d.b.isUsingSubscriptionWorkaround()) {
                      _context56.next = 10;
                      break;
                    }

                    _context56.next = 7;
                    return this.getOneSignalSubdomainNotificationPermission(e);

                  case 7:
                    _context56.t1 = _context56.sent;
                    _context56.next = 11;
                    break;

                  case 10:
                    _context56.t1 = this.getW3cNotificationPermission();

                  case 11:
                    _context56.t0 = _context56.t1;

                  case 12:
                    return _context56.abrupt("return", _context56.t0);

                  case 13:
                  case "end":
                    return _context56.stop();
                }
              }
            }, _callee56, this);
          }));
        }
      }, {
        key: "getW3cNotificationPermission",
        value: function getW3cNotificationPermission() {
          return window.Notification.permission;
        }
      }, {
        key: "getOneSignalSubdomainNotificationPermission",
        value: function getOneSignalSubdomainNotificationPermission(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee57() {
            return _regeneratorRuntime.wrap(function _callee57$(_context57) {
              while (1) {
                switch (_context57.prev = _context57.next) {
                  case 0:
                    return _context57.abrupt("return", new _Promise(function (t) {
                      OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, {
                        safariWebId: e
                      }, function (e) {
                        var i = e.data;
                        t(i);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context57.stop();
                }
              }
            }, _callee57);
          }));
        }
      }, {
        key: "isPermissionEnvironmentAmbiguous",
        value: function isPermissionEnvironmentAmbiguous(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee58() {
            var t;
            return _regeneratorRuntime.wrap(function _callee58$(_context58) {
              while (1) {
                switch (_context58.prev = _context58.next) {
                  case 0:
                    t = d.b.redetectBrowserUserAgent();
                    _context58.t0 = !t.safari && !t.firefox && e === p.a.Denied;

                    if (!_context58.t0) {
                      _context58.next = 15;
                      break;
                    }

                    _context58.t3 = this.isCurrentFrameContextCrossOrigin();

                    if (_context58.t3) {
                      _context58.next = 8;
                      break;
                    }

                    _context58.next = 7;
                    return r.a.isFrameContextInsecure();

                  case 7:
                    _context58.t3 = _context58.sent;

                  case 8:
                    _context58.t2 = _context58.t3;

                    if (_context58.t2) {
                      _context58.next = 11;
                      break;
                    }

                    _context58.t2 = d.b.isUsingSubscriptionWorkaround();

                  case 11:
                    _context58.t1 = _context58.t2;

                    if (_context58.t1) {
                      _context58.next = 14;
                      break;
                    }

                    _context58.t1 = r.a.isInsecureOrigin();

                  case 14:
                    _context58.t0 = _context58.t1;

                  case 15:
                    return _context58.abrupt("return", _context58.t0);

                  case 16:
                  case "end":
                    return _context58.stop();
                }
              }
            }, _callee58, this);
          }));
        }
      }, {
        key: "isCurrentFrameContextCrossOrigin",
        value: function isCurrentFrameContextCrossOrigin() {
          var e;

          try {
            e = window.top.location.origin;
          } catch (e) {
            return !0;
          }

          return window.top !== window && e !== window.location.origin;
        }
      }, {
        key: "getInterpretedAmbiguousPermission",
        value: function getInterpretedAmbiguousPermission(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee59() {
            var _t7;

            return _regeneratorRuntime.wrap(function _callee59$(_context59) {
              while (1) {
                switch (_context59.prev = _context59.next) {
                  case 0:
                    _context59.t0 = e;
                    _context59.next = _context59.t0 === p.a.Denied ? 3 : 5;
                    break;

                  case 3:
                    _t7 = this.getStoredPermission();
                    return _context59.abrupt("return", _t7 || p.a.Default);

                  case 5:
                    return _context59.abrupt("return", e);

                  case 6:
                  case "end":
                    return _context59.stop();
                }
              }
            }, _callee59, this);
          }));
        }
      }, {
        key: "getStoredPermission",
        value: function getStoredPermission() {
          return h.getStoredPermission();
        }
      }, {
        key: "setStoredPermission",
        value: function setStoredPermission(e) {
          h.setStoredPermission(e);
        }
      }, {
        key: "updateStoredPermission",
        value: function updateStoredPermission() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee60() {
            var e;
            return _regeneratorRuntime.wrap(function _callee60$(_context60) {
              while (1) {
                switch (_context60.prev = _context60.next) {
                  case 0:
                    _context60.next = 2;
                    return this.getNotificationPermission();

                  case 2:
                    e = _context60.sent;
                    return _context60.abrupt("return", this.setStoredPermission(e));

                  case 4:
                  case "end":
                    return _context60.stop();
                }
              }
            }, _callee60, this);
          }));
        }
      }], [{
        key: "getSafariNotificationPermission",
        value: function getSafariNotificationPermission(e) {
          if (e) return window.safari.pushNotification.permission(e).permission;
          throw new InvalidArgumentError.a("safariWebId", InvalidArgumentError.b.Empty);
        }
      }, {
        key: "STORED_PERMISSION_KEY",
        get: function get() {
          return "storedNotificationPermission";
        }
      }]);

      return b;
    }();

    var m = i(10);

    var v =
    /*#__PURE__*/
    function () {
      function v(e) {
        _classCallCheck(this, v);

        if (!e) throw new InvalidArgumentError.a("path", InvalidArgumentError.b.Empty);
        this.path = e.trim();
      }

      _createClass(v, [{
        key: "getQueryString",
        value: function getQueryString() {
          var e = this.path.indexOf("?");
          return -1 === e ? null : this.path.length > e ? this.path.substring(e + 1) : null;
        }
      }, {
        key: "getWithoutQueryString",
        value: function getWithoutQueryString() {
          return this.path.split(v.QUERY_STRING)[0];
        }
      }, {
        key: "getFileName",
        value: function getFileName() {
          return this.getWithoutQueryString().split("\\").pop().split("/").pop();
        }
      }, {
        key: "getFileNameWithQuery",
        value: function getFileNameWithQuery() {
          return this.path.split("\\").pop().split("/").pop();
        }
      }, {
        key: "getFullPath",
        value: function getFullPath() {
          return this.path;
        }
      }, {
        key: "getPathWithoutFileName",
        value: function getPathWithoutFileName() {
          var e = this.getWithoutQueryString(),
              t = e.lastIndexOf(this.getFileName());
          var i = e.substring(0, t);
          return i = i.replace(/[\\\/]$/, "");
        }
      }]);

      return v;
    }();

    v.QUERY_STRING = "?";
    var S = i(5),
        y = i(15),
        w = i(18),
        P = i(19),
        O = i(13);

    var k =
    /*#__PURE__*/
    function (_O$a) {
      _inherits(k, _O$a);

      function k(e, t) {
        var _this17;

        _classCallCheck(this, k);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(k).call(this, "Registration of a Service Worker failed.")), _this17.status = e, _this17.statusText = t, _Object$setPrototypeOf(_assertThisInitialized(_this17), k.prototype);
        return _this17;
      }

      return k;
    }(O.a);

    var I = k,
        E = i(6),
        x = i(2);

    var A =
    /*#__PURE__*/
    function () {
      function A(e, t) {
        _classCallCheck(this, A);

        this.context = e, this.config = t;
      }

      _createClass(A, [{
        key: "getActiveState",
        value: function getActiveState() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee61() {
            var e, _e18, t, i, n;

            return _regeneratorRuntime.wrap(function _callee61$(_context61) {
              while (1) {
                switch (_context61.prev = _context61.next) {
                  case 0:
                    _context61.next = 2;
                    return r.a.getIntegration();

                  case 2:
                    e = _context61.sent;

                    if (!(e === y.a.InsecureProxy)) {
                      _context61.next = 5;
                      break;
                    }

                    return _context61.abrupt("return", E.a.Indeterminate);

                  case 5:
                    if (!(e === y.a.SecureProxy)) {
                      _context61.next = 20;
                      break;
                    }

                    _context61.t0 = r.a.getWindowEnv();
                    _context61.next = _context61.t0 === o.a.Host ? 9 : _context61.t0 === o.a.CustomIframe ? 9 : _context61.t0 === o.a.OneSignalSubscriptionPopup ? 18 : _context61.t0 === o.a.OneSignalSubscriptionModal ? 19 : 20;
                    break;

                  case 9:
                    _e18 = OneSignal.proxyFrameHost;

                    if (!_e18) {
                      _context61.next = 16;
                      break;
                    }

                    _context61.next = 13;
                    return _e18.runCommand(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE);

                  case 13:
                    _context61.t1 = _context61.sent;
                    _context61.next = 17;
                    break;

                  case 16:
                    _context61.t1 = E.a.Indeterminate;

                  case 17:
                    return _context61.abrupt("return", _context61.t1);

                  case 18:
                    return _context61.abrupt("break", 20);

                  case 19:
                    throw new w.a();

                  case 20:
                    _context61.next = 22;
                    return A.getRegistration();

                  case 22:
                    t = _context61.sent;

                    if (t) {
                      _context61.next = 25;
                      break;
                    }

                    return _context61.abrupt("return", E.a.None);

                  case 25:
                    if (!t.installing) {
                      _context61.next = 27;
                      break;
                    }

                    return _context61.abrupt("return", E.a.Installing);

                  case 27:
                    if (t.active) {
                      _context61.next = 29;
                      break;
                    }

                    return _context61.abrupt("return", E.a.ThirdParty);

                  case 29:
                    i = A.activeSwFileName(t), n = this.swActiveStateByFileName(i);
                    return _context61.abrupt("return", navigator.serviceWorker.controller || n !== E.a.WorkerA && n !== E.a.WorkerB ? n : E.a.Bypassed);

                  case 31:
                  case "end":
                    return _context61.stop();
                }
              }
            }, _callee61, this);
          }));
        }
      }, {
        key: "swActiveStateByFileName",
        value: function swActiveStateByFileName(e) {
          return e ? e == this.config.workerAPath.getFileName() ? E.a.WorkerA : e == this.config.workerBPath.getFileName() ? E.a.WorkerB : E.a.ThirdParty : E.a.None;
        }
      }, {
        key: "getWorkerVersion",
        value: function getWorkerVersion() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee63() {
            var _this18 = this;

            return _regeneratorRuntime.wrap(function _callee63$(_context63) {
              while (1) {
                switch (_context63.prev = _context63.next) {
                  case 0:
                    return _context63.abrupt("return", new _Promise(function (e) {
                      return c.a(_this18, void 0, void 0,
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee62() {
                        var _t8, _i14;

                        return _regeneratorRuntime.wrap(function _callee62$(_context62) {
                          while (1) {
                            switch (_context62.prev = _context62.next) {
                              case 0:
                                if (!d.b.isUsingSubscriptionWorkaround()) {
                                  _context62.next = 12;
                                  break;
                                }

                                _t8 = OneSignal.proxyFrameHost;

                                if (!_t8) {
                                  _context62.next = 9;
                                  break;
                                }

                                _context62.next = 5;
                                return _t8.runCommand(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION);

                              case 5:
                                _i14 = _context62.sent;
                                e(_i14);
                                _context62.next = 10;
                                break;

                              case 9:
                                e(NaN);

                              case 10:
                                _context62.next = 13;
                                break;

                              case 12:
                                this.context.workerMessenger.once(n.b.WorkerVersion, function (t) {
                                  e(t);
                                }), this.context.workerMessenger.unicast(n.b.WorkerVersion);

                              case 13:
                              case "end":
                                return _context62.stop();
                            }
                          }
                        }, _callee62, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context63.stop();
                }
              }
            }, _callee63);
          }));
        }
      }, {
        key: "shouldInstallWorker",
        value: function shouldInstallWorker() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee64() {
            var e;
            return _regeneratorRuntime.wrap(function _callee64$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    if (m.a.supportsServiceWorkers()) {
                      _context64.next = 2;
                      break;
                    }

                    return _context64.abrupt("return", !1);

                  case 2:
                    if (OneSignal.config) {
                      _context64.next = 4;
                      break;
                    }

                    return _context64.abrupt("return", !1);

                  case 4:
                    if (!(OneSignal.config.subdomain && r.a.getWindowEnv() == o.a.Host)) {
                      _context64.next = 6;
                      break;
                    }

                    return _context64.abrupt("return", !1);

                  case 6:
                    _context64.next = 8;
                    return this.getActiveState();

                  case 8:
                    e = _context64.sent;

                    if (!(e === E.a.None || e === E.a.ThirdParty)) {
                      _context64.next = 14;
                      break;
                    }

                    _context64.next = 12;
                    return OneSignal.context.permissionManager.getNotificationPermission(OneSignal.config.safariWebId);

                  case 12:
                    _context64.t0 = _context64.sent;
                    return _context64.abrupt("return", "granted" === _context64.t0);

                  case 14:
                    return _context64.abrupt("return", this.workerNeedsUpdate());

                  case 15:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee64, this);
          }));
        }
      }, {
        key: "workerNeedsUpdate",
        value: function workerNeedsUpdate() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee65() {
            var e;
            return _regeneratorRuntime.wrap(function _callee65$(_context65) {
              while (1) {
                switch (_context65.prev = _context65.next) {
                  case 0:
                    s.a.info("[Service Worker Update] Checking service worker version...");
                    _context65.prev = 1;
                    _context65.next = 4;
                    return x.a.timeoutPromise(this.getWorkerVersion(), 2e3);

                  case 4:
                    e = _context65.sent;
                    _context65.next = 10;
                    break;

                  case 7:
                    _context65.prev = 7;
                    _context65.t0 = _context65["catch"](1);
                    return _context65.abrupt("return", (s.a.info("[Service Worker Update] Worker did not reply to version query; assuming older version and updating."), !0));

                  case 10:
                    return _context65.abrupt("return", e !== m.a.version() ? (s.a.info("[Service Worker Update] Updating service worker from ".concat(e, " --> ").concat(m.a.version(), ".")), !0) : (s.a.info("[Service Worker Update] Service worker version is current at ".concat(e, " (no update required).")), !1));

                  case 11:
                  case "end":
                    return _context65.stop();
                }
              }
            }, _callee65, this, [[1, 7]]);
          }));
        }
      }, {
        key: "installWorker",
        value: function installWorker() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee68() {
            var _this19 = this;

            var e;
            return _regeneratorRuntime.wrap(function _callee68$(_context68) {
              while (1) {
                switch (_context68.prev = _context68.next) {
                  case 0:
                    _context68.next = 2;
                    return this.shouldInstallWorker();

                  case 2:
                    if (_context68.sent) {
                      _context68.next = 4;
                      break;
                    }

                    return _context68.abrupt("return");

                  case 4:
                    _context68.next = 6;
                    return this.getActiveState();

                  case 6:
                    e = _context68.sent;
                    _context68.next = 9;
                    return this.installAlternatingWorker();

                  case 9:
                    _context68.next = 11;
                    return new _Promise(function (t) {
                      return c.a(_this19, void 0, void 0,
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee67() {
                        var _this20 = this;

                        var i;
                        return _regeneratorRuntime.wrap(function _callee67$(_context67) {
                          while (1) {
                            switch (_context67.prev = _context67.next) {
                              case 0:
                                _context67.next = 2;
                                return this.getActiveState();

                              case 2:
                                i = _context67.sent;
                                s.a.debug("installWorker - Comparing pre and post states", e, i), e !== i && i !== E.a.Installing ? t() : (s.a.debug("installWorker - Awaiting on navigator.serviceWorker's 'controllerchange' event"), navigator.serviceWorker.addEventListener("controllerchange", function (i) {
                                  return c.a(_this20, void 0, void 0,
                                  /*#__PURE__*/
                                  _regeneratorRuntime.mark(function _callee66() {
                                    var i;
                                    return _regeneratorRuntime.wrap(function _callee66$(_context66) {
                                      while (1) {
                                        switch (_context66.prev = _context66.next) {
                                          case 0:
                                            _context66.next = 2;
                                            return this.getActiveState();

                                          case 2:
                                            i = _context66.sent;
                                            i !== e && i !== E.a.Installing ? t() : s.a.error("installWorker - SW's 'controllerchange' fired but no state change!");

                                          case 4:
                                          case "end":
                                            return _context66.stop();
                                        }
                                      }
                                    }, _callee66, this);
                                  }));
                                }));

                              case 4:
                              case "end":
                                return _context67.stop();
                            }
                          }
                        }, _callee67, this);
                      }));
                    });

                  case 11:
                    _context68.next = 13;
                    return this.getActiveState();

                  case 13:
                    _context68.t0 = _context68.sent;
                    _context68.t1 = E.a.WorkerB;
                    _context68.t2 = _context68.t0 === _context68.t1;

                    if (!_context68.t2) {
                      _context68.next = 19;
                      break;
                    }

                    _context68.next = 19;
                    return this.installAlternatingWorker();

                  case 19:
                    _context68.next = 21;
                    return this.establishServiceWorkerChannel();

                  case 21:
                  case "end":
                    return _context68.stop();
                }
              }
            }, _callee68, this);
          }));
        }
      }, {
        key: "establishServiceWorkerChannel",
        value: function establishServiceWorkerChannel() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee70() {
            var _this21 = this;

            var e;
            return _regeneratorRuntime.wrap(function _callee70$(_context70) {
              while (1) {
                switch (_context70.prev = _context70.next) {
                  case 0:
                    e = this.context.workerMessenger;
                    e.off(), e.on(n.b.NotificationDisplayed, function (e) {
                      s.a.debug(location.origin, "Received notification display event from service worker."), P.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, e);
                    }), e.on(n.b.NotificationClicked, function (e) {
                      return c.a(_this21, void 0, void 0,
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee69() {
                        var t, _t9;

                        return _regeneratorRuntime.wrap(function _callee69$(_context69) {
                          while (1) {
                            switch (_context69.prev = _context69.next) {
                              case 0:
                                if (!(r.a.getWindowEnv() === o.a.OneSignalProxyFrame)) {
                                  _context69.next = 6;
                                  break;
                                }

                                _context69.next = 3;
                                return new _Promise(function (e) {
                                  var t = OneSignal.proxyFrame;
                                  t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, OneSignal.EVENTS.NOTIFICATION_CLICKED, function (t) {
                                    var i = t.data;
                                    e(i);
                                  });
                                });

                              case 3:
                                _context69.t0 = _context69.sent;
                                _context69.next = 7;
                                break;

                              case 6:
                                _context69.t0 = OneSignal.emitter.numberOfListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED);

                              case 7:
                                _context69.t1 = t = _context69.t0;

                                if (!(0 === _context69.t1)) {
                                  _context69.next = 16;
                                  break;
                                }

                                s.a.debug("notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval.");
                                _t9 = e.url;
                                e.url || (_t9 = location.href);
                                _context69.next = 14;
                                return S.a.put("NotificationOpened", {
                                  url: _t9,
                                  data: e,
                                  timestamp: _Date$now()
                                });

                              case 14:
                                _context69.next = 17;
                                break;

                              case 16:
                                P.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, e);

                              case 17:
                              case "end":
                                return _context69.stop();
                            }
                          }
                        }, _callee69);
                      }));
                    }), e.on(n.b.RedirectPage, function (e) {
                      s.a.debug("".concat(r.a.getWindowEnv().toString(), " Picked up command.redirect to ").concat(e, ", forwarding to host page."));
                      var t = OneSignal.proxyFrame;
                      t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, e);
                    }), e.on(n.b.NotificationDismissed, function (e) {
                      P.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, e);
                    });

                  case 2:
                  case "end":
                    return _context70.stop();
                }
              }
            }, _callee70, this);
          }));
        }
      }, {
        key: "installAlternatingWorker",
        value: function installAlternatingWorker() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee71() {
            var e, t, _i15;

            return _regeneratorRuntime.wrap(function _callee71$(_context71) {
              while (1) {
                switch (_context71.prev = _context71.next) {
                  case 0:
                    _context71.next = 2;
                    return this.getActiveState();

                  case 2:
                    e = _context71.sent;
                    e === E.a.ThirdParty && s.a.info("[Service Worker Installation] 3rd party service worker detected.");
                    t = "".concat(E.b.getServiceWorkerHref(e, this.config), "?").concat(x.a.encodeHashAsUriComponent({
                      appId: this.context.appConfig.appId
                    }));
                    s.a.info("[Service Worker Installation] Installing service worker ".concat(t, "."));
                    _context71.prev = 6;
                    _context71.next = 9;
                    return navigator.serviceWorker.register(t, {
                      scope: "".concat(d.b.getBaseUrl()).concat(this.config.registrationOptions.scope)
                    });

                  case 9:
                    _context71.next = 21;
                    break;

                  case 11:
                    _context71.prev = 11;
                    _context71.t0 = _context71["catch"](6);

                    if (!(s.a.error("[Service Worker Installation] Installing service worker failed ".concat(_context71.t0)), r.a.getWindowEnv() === o.a.OneSignalSubscriptionPopup)) {
                      _context71.next = 15;
                      break;
                    }

                    throw _context71.t0;

                  case 15:
                    _context71.next = 17;
                    return fetch(t);

                  case 17:
                    _i15 = _context71.sent;

                    if (!(403 === _i15.status || 404 === _i15.status)) {
                      _context71.next = 20;
                      break;
                    }

                    throw new I(_i15.status, _i15.statusText);

                  case 20:
                    throw _context71.t0;

                  case 21:
                    s.a.debug("[Service Worker Installation] Service worker installed.");

                  case 22:
                  case "end":
                    return _context71.stop();
                }
              }
            }, _callee71, this, [[6, 11]]);
          }));
        }
      }], [{
        key: "getRegistration",
        value: function getRegistration() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee72() {
            return _regeneratorRuntime.wrap(function _callee72$(_context72) {
              while (1) {
                switch (_context72.prev = _context72.next) {
                  case 0:
                    _context72.next = 2;
                    return E.b.getRegistration();

                  case 2:
                    return _context72.abrupt("return", _context72.sent);

                  case 3:
                  case "end":
                    return _context72.stop();
                }
              }
            }, _callee72);
          }));
        }
      }, {
        key: "activeSwFileName",
        value: function activeSwFileName(e) {
          if (!e.active) return null;
          var t = new URL(e.active.scriptURL).pathname,
              i = new v(t).getFileName();

          if ("akam-sw.js" == i) {
            var _t10 = new URLSearchParams(new URL(e.active.scriptURL).search).get("othersw");

            if (_t10) return s.a.debug("Found a ServiceWorker under Akamai's akam-sw.js?othersw=", _t10), new v(new URL(_t10).pathname).getFileName();
          }

          return i;
        }
      }]);

      return A;
    }();

    var N = i(22),
        W = i(23),
        T = i(30);

    var C =
    /*#__PURE__*/
    function (_T$a) {
      _inherits(C, _T$a);

      function C(e, t, i) {
        var _this22;

        _classCallCheck(this, C);

        _this22 = _possibleConstructorReturn(this, _getPrototypeOf(C).call(this)), _this22.email = e, _this22.emailAuthHash = t, _this22.pushDeviceRecordId = i, _this22.deliveryPlatform = W.a.Email;
        return _this22;
      }

      _createClass(C, [{
        key: "serialize",
        value: function serialize() {
          var e = _get(_getPrototypeOf(C.prototype), "serialize", this).call(this);

          return this.email && (e.identifier = this.email), this.emailAuthHash && (e.email_auth_hash = this.emailAuthHash), this.pushDeviceRecordId && (e.device_player_id = this.pushDeviceRecordId), e;
        }
      }, {
        key: "deserialize",
        value: function deserialize(e) {
          throw new w.a();
        }
      }]);

      return C;
    }(T.a);

    var M = i(17);

    var _ =
    /*#__PURE__*/
    function () {
      function _() {
        _classCallCheck(this, _);
      }

      _createClass(_, null, [{
        key: "getPlayer",
        value: function getPlayer(e, t) {
          return x.b.enforceAppId(e), x.b.enforcePlayerId(t), M.b.get("players/".concat(t, "?app_id=").concat(e));
        }
      }, {
        key: "updatePlayer",
        value: function updatePlayer(e, t, i) {
          return x.b.enforceAppId(e), x.b.enforcePlayerId(t), M.b.put("players/".concat(t), _Object$assign({
            app_id: e
          }, i));
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(e, t, i, n, r, o, s, a) {
          var c = {
            app_id: e,
            contents: n,
            include_player_ids: t,
            isAnyWeb: !0,
            data: s,
            web_buttons: a
          };
          return i && (c.headings = i), r && (c.url = r), o && (c.chrome_web_icon = o, c.firefox_icon = o), x.b.trimUndefined(c), M.b.post("notifications", c);
        }
      }, {
        key: "createUser",
        value: function createUser(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee73() {
            var t, i;
            return _regeneratorRuntime.wrap(function _callee73$(_context73) {
              while (1) {
                switch (_context73.prev = _context73.next) {
                  case 0:
                    t = e.serialize();
                    x.b.enforceAppId(t.app_id);
                    _context73.next = 4;
                    return M.b.post("players", t);

                  case 4:
                    i = _context73.sent;
                    return _context73.abrupt("return", i && i.success ? i.id : null);

                  case 6:
                  case "end":
                    return _context73.stop();
                }
              }
            }, _callee73);
          }));
        }
      }, {
        key: "createEmailRecord",
        value: function createEmailRecord(e, t, i) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee74() {
            var n, r;
            return _regeneratorRuntime.wrap(function _callee74$(_context74) {
              while (1) {
                switch (_context74.prev = _context74.next) {
                  case 0:
                    x.b.enforceAppId(e.appId);
                    n = new C(t.emailAddress, t.emailAuthHash, i);
                    n.appId = e.appId;
                    _context74.next = 5;
                    return M.b.post("players", n.serialize());

                  case 5:
                    r = _context74.sent;
                    return _context74.abrupt("return", r && r.success ? r.id : null);

                  case 7:
                  case "end":
                    return _context74.stop();
                }
              }
            }, _callee74);
          }));
        }
      }, {
        key: "updateEmailRecord",
        value: function updateEmailRecord(e, t, i) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee75() {
            var n, r;
            return _regeneratorRuntime.wrap(function _callee75$(_context75) {
              while (1) {
                switch (_context75.prev = _context75.next) {
                  case 0:
                    x.b.enforceAppId(e.appId), x.b.enforcePlayerId(t.emailId);
                    n = new C(t.emailAddress, t.emailAuthHash, i);
                    n.appId = e.appId;
                    _context75.next = 5;
                    return M.b.put("players/".concat(t.emailId), n.serialize());

                  case 5:
                    r = _context75.sent;
                    return _context75.abrupt("return", r && r.success ? r.id : null);

                  case 7:
                  case "end":
                    return _context75.stop();
                }
              }
            }, _callee75);
          }));
        }
      }, {
        key: "logoutEmail",
        value: function logoutEmail(e, t, i) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee76() {
            var n;
            return _regeneratorRuntime.wrap(function _callee76$(_context76) {
              while (1) {
                switch (_context76.prev = _context76.next) {
                  case 0:
                    x.b.enforceAppId(e.appId), x.b.enforcePlayerId(i);
                    _context76.next = 3;
                    return M.b.post("players/".concat(i, "/email_logout"), {
                      app_id: e.appId,
                      parent_player_id: t.emailId,
                      email_auth_hash: t.emailAuthHash ? t.emailAuthHash : void 0
                    });

                  case 3:
                    n = _context76.sent;
                    return _context76.abrupt("return", !(!n || !n.success));

                  case 5:
                  case "end":
                    return _context76.stop();
                }
              }
            }, _callee76);
          }));
        }
      }, {
        key: "updateUserSession",
        value: function updateUserSession(e, t) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee77() {
            var _i16, _n5;

            return _regeneratorRuntime.wrap(function _callee77$(_context77) {
              while (1) {
                switch (_context77.prev = _context77.next) {
                  case 0:
                    _context77.prev = 0;
                    _i16 = t.serialize();
                    x.b.enforceAppId(_i16.app_id), x.b.enforcePlayerId(e);
                    _context77.next = 5;
                    return M.b.post("players/".concat(e, "/on_session"), _i16);

                  case 5:
                    _n5 = _context77.sent;
                    return _context77.abrupt("return", _n5.id ? _n5.id : e);

                  case 9:
                    _context77.prev = 9;
                    _context77.t0 = _context77["catch"](0);
                    throw _context77.t0 && _Array$isArray(_context77.t0.errors) && _context77.t0.errors.length > 0 && x.b.contains(_context77.t0.errors[0], "app_id not found") ? new N.a(N.b.MissingAppId) : _context77.t0;

                  case 12:
                  case "end":
                    return _context77.stop();
                }
              }
            }, _callee77, null, [[0, 9]]);
          }));
        }
      }]);

      return _;
    }();

    var D,
        R,
        U = i(21),
        F = i(9),
        B = i(24),
        InvalidStateError = i(16);
    (R = D || (D = {}))[R.Blocked = 0] = "Blocked", R[R.Dismissed = 1] = "Dismissed", R[R.Default = 2] = "Default";

    var L =
    /*#__PURE__*/
    function (_O$a2) {
      _inherits(L, _O$a2);

      function L(e) {
        var _this23;

        _classCallCheck(this, L);

        switch (e) {
          case D.Dismissed:
            _this23 = _possibleConstructorReturn(this, _getPrototypeOf(L).call(this, "The user dismissed the permission prompt."));
            break;

          case D.Blocked:
            _this23 = _possibleConstructorReturn(this, _getPrototypeOf(L).call(this, "Notification permissions are blocked."));
            break;

          case D.Default:
            _this23 = _possibleConstructorReturn(this, _getPrototypeOf(L).call(this, "Notification permissions have not been granted yet."));
        }

        _this23.reason = e, _Object$setPrototypeOf(_assertThisInitialized(_this23), L.prototype);
        return _this23;
      }

      return L;
    }(O.a);

    var V,
        $,
        SdkInitError = i(20);
    ($ = V || (V = {}))[$.InvalidSafariSetup = 0] = "InvalidSafariSetup", $[$.Blocked = 1] = "Blocked", $[$.Dismissed = 2] = "Dismissed";

    var H =
    /*#__PURE__*/
    function (_O$a3) {
      _inherits(H, _O$a3);

      function H(e) {
        var _this24;

        _classCallCheck(this, H);

        switch (e) {
          case V.InvalidSafariSetup:
            _this24 = _possibleConstructorReturn(this, _getPrototypeOf(H).call(this, "The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session."));
            break;

          case V.Blocked:
            _this24 = _possibleConstructorReturn(this, _getPrototypeOf(H).call(this, "Notification permissions are blocked."));
            break;

          case V.Dismissed:
            _this24 = _possibleConstructorReturn(this, _getPrototypeOf(H).call(this, "The notification permission prompt was dismissed."));
        }

        _Object$setPrototypeOf(_assertThisInitialized(_this24), H.prototype);

        return _this24;
      }

      return H;
    }(O.a);

    var j = i(27);

    var z =
    /*#__PURE__*/
    function () {
      function z(e, t) {
        _classCallCheck(this, z);

        this.context = e, this.config = t;
      }

      _createClass(z, [{
        key: "subscribe",
        value: function subscribe(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee78() {
            var t, i;
            return _regeneratorRuntime.wrap(function _callee78$(_context78) {
              while (1) {
                switch (_context78.prev = _context78.next) {
                  case 0:
                    t = r.a.getWindowEnv();
                    _context78.t0 = t;
                    _context78.next = _context78.t0 === o.a.CustomIframe ? 4 : _context78.t0 === o.a.Unknown ? 4 : _context78.t0 === o.a.OneSignalProxyFrame ? 4 : 5;
                    break;

                  case 4:
                    throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment);

                  case 5:
                    _context78.t1 = t;
                    _context78.next = _context78.t1 === o.a.ServiceWorker ? 8 : _context78.t1 === o.a.Host ? 12 : _context78.t1 === o.a.OneSignalSubscriptionModal ? 12 : _context78.t1 === o.a.OneSignalSubscriptionPopup ? 12 : 29;
                    break;

                  case 8:
                    _context78.next = 10;
                    return this.subscribeFcmFromWorker(e);

                  case 10:
                    i = _context78.sent;
                    return _context78.abrupt("break", 30);

                  case 12:
                    _context78.next = 14;
                    return OneSignal.privateGetNotificationPermission();

                  case 14:
                    _context78.t2 = _context78.sent;
                    _context78.t3 = p.a.Denied;

                    if (!(_context78.t2 === _context78.t3)) {
                      _context78.next = 18;
                      break;
                    }

                    throw new L(D.Blocked);

                  case 18:
                    if (!z.isSafari()) {
                      _context78.next = 24;
                      break;
                    }

                    _context78.next = 21;
                    return this.subscribeSafari();

                  case 21:
                    _context78.t4 = _context78.sent;
                    _context78.next = 27;
                    break;

                  case 24:
                    _context78.next = 26;
                    return this.subscribeFcmFromPage(e);

                  case 26:
                    _context78.t4 = _context78.sent;

                  case 27:
                    i = _context78.t4;
                    return _context78.abrupt("break", 30);

                  case 29:
                    throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment);

                  case 30:
                    return _context78.abrupt("return", i);

                  case 31:
                  case "end":
                    return _context78.stop();
                }
              }
            }, _callee78, this);
          }));
        }
      }, {
        key: "registerSubscription",
        value: function registerSubscription(e, t) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee79() {
            var i, n, s;
            return _regeneratorRuntime.wrap(function _callee79$(_context79) {
              while (1) {
                switch (_context79.prev = _context79.next) {
                  case 0:
                    e && (e = U.a.deserialize(e));
                    i = B.a.createFromPushSubscription(this.config.appId, e, t);
                    n = void 0;
                    _context79.next = 5;
                    return this.isAlreadyRegisteredWithOneSignal();

                  case 5:
                    if (!_context79.sent) {
                      _context79.next = 10;
                      break;
                    }

                    _context79.next = 8;
                    return this.context.updateManager.sendPlayerUpdate(i);

                  case 8:
                    _context79.next = 16;
                    break;

                  case 10:
                    _context79.next = 12;
                    return this.context.updateManager.sendPlayerCreate(i);

                  case 12:
                    _context79.t0 = n = _context79.sent;

                    if (!_context79.t0) {
                      _context79.next = 16;
                      break;
                    }

                    _context79.next = 16;
                    return this.associateSubscriptionWithEmail(n);

                  case 16:
                    _context79.next = 18;
                    return S.a.getSubscription();

                  case 18:
                    s = _context79.sent;
                    s.deviceId = n;
                    s.optedOut = !1;
                    e ? z.isSafari() ? s.subscriptionToken = e.safariDeviceToken : s.subscriptionToken = e.w3cEndpoint ? e.w3cEndpoint.toString() : null : s.subscriptionToken = null;
                    _context79.next = 24;
                    return S.a.setSubscription(s);

                  case 24:
                    r.a.getWindowEnv() !== o.a.ServiceWorker && P.a.trigger(OneSignal.EVENTS.REGISTERED);
                    "undefined" != typeof OneSignal && (OneSignal._sessionInitAlreadyRunning = !1);
                    return _context79.abrupt("return", s);

                  case 27:
                  case "end":
                    return _context79.stop();
                }
              }
            }, _callee79, this);
          }));
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee80() {
            var _ref, _e19;

            return _regeneratorRuntime.wrap(function _callee80$(_context80) {
              while (1) {
                switch (_context80.prev = _context80.next) {
                  case 0:
                    if (!(0 === e)) {
                      _context80.next = 2;
                      break;
                    }

                    throw new w.a();

                  case 2:
                    if (!(1 !== e)) {
                      _context80.next = 4;
                      break;
                    }

                    throw new w.a();

                  case 4:
                    if (!(r.a.getWindowEnv() !== o.a.ServiceWorker)) {
                      _context80.next = 6;
                      break;
                    }

                    throw new w.a();

                  case 6:
                    _context80.next = 8;
                    return S.a.getSubscription();

                  case 8:
                    _ref = _context80.sent;
                    _e19 = _ref.deviceId;
                    _context80.next = 12;
                    return _.updatePlayer(this.context.appConfig.appId, _e19, {
                      notification_types: F.a.MutedByApi
                    });

                  case 12:
                    _context80.next = 14;
                    return S.a.put("Options", {
                      key: "optedOut",
                      value: !0
                    });

                  case 14:
                  case "end":
                    return _context80.stop();
                }
              }
            }, _callee80, this);
          }));
        }
      }, {
        key: "associateSubscriptionWithEmail",
        value: function associateSubscriptionWithEmail(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee81() {
            var t;
            return _regeneratorRuntime.wrap(function _callee81$(_context81) {
              while (1) {
                switch (_context81.prev = _context81.next) {
                  case 0:
                    _context81.next = 2;
                    return S.a.getEmailProfile();

                  case 2:
                    t = _context81.sent;
                    _context81.t0 = t.emailId;

                    if (!_context81.t0) {
                      _context81.next = 7;
                      break;
                    }

                    _context81.next = 7;
                    return _.updatePlayer(this.config.appId, e, {
                      parent_player_id: t.emailId,
                      email: t.emailAddress
                    });

                  case 7:
                  case "end":
                    return _context81.stop();
                }
              }
            }, _callee81, this);
          }));
        }
      }, {
        key: "isAlreadyRegisteredWithOneSignal",
        value: function isAlreadyRegisteredWithOneSignal() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee82() {
            var _ref2, e;

            return _regeneratorRuntime.wrap(function _callee82$(_context82) {
              while (1) {
                switch (_context82.prev = _context82.next) {
                  case 0:
                    _context82.next = 2;
                    return S.a.getSubscription();

                  case 2:
                    _ref2 = _context82.sent;
                    e = _ref2.deviceId;
                    return _context82.abrupt("return", !!e);

                  case 5:
                  case "end":
                    return _context82.stop();
                }
              }
            }, _callee82);
          }));
        }
      }, {
        key: "subscribeSafariPromptPermission",
        value: function subscribeSafariPromptPermission() {
          var _this25 = this;

          return new _Promise(function (e) {
            window.safari.pushNotification.requestPermission("".concat(r.a.getOneSignalApiUrl().toString(), "/safari"), _this25.config.safariWebId, {
              app_id: _this25.config.appId
            }, function (t) {
              t.deviceToken ? e(t.deviceToken.toLowerCase()) : e(null);
            });
          });
        }
      }, {
        key: "subscribeSafari",
        value: function subscribeSafari() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee83() {
            var e, _window$safari$pushNo, t, i;

            return _regeneratorRuntime.wrap(function _callee83$(_context83) {
              while (1) {
                switch (_context83.prev = _context83.next) {
                  case 0:
                    e = new U.a();

                    if (this.config.safariWebId) {
                      _context83.next = 3;
                      break;
                    }

                    throw new SdkInitError.a(SdkInitError.b.MissingSafariWebId);

                  case 3:
                    _window$safari$pushNo = window.safari.pushNotification.permission(this.config.safariWebId), t = _window$safari$pushNo.deviceToken;
                    e.existingSafariDeviceToken = t, t || P.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                    _context83.next = 7;
                    return this.subscribeSafariPromptPermission();

                  case 7:
                    i = _context83.sent;

                    if (!(j.a.triggerNotificationPermissionChanged(), !i)) {
                      _context83.next = 10;
                      break;
                    }

                    throw new H(V.InvalidSafariSetup);

                  case 10:
                    return _context83.abrupt("return", (e.setFromSafariSubscription(i), e));

                  case 11:
                  case "end":
                    return _context83.stop();
                }
              }
            }, _callee83, this);
          }));
        }
      }, {
        key: "subscribeFcmFromPage",
        value: function subscribeFcmFromPage(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee84() {
            var _e20, t;

            return _regeneratorRuntime.wrap(function _callee84$(_context84) {
              while (1) {
                switch (_context84.prev = _context84.next) {
                  case 0:
                    if (!(r.a.getWindowEnv() !== o.a.ServiceWorker && window.Notification.permission === p.a.Default)) {
                      _context84.next = 15;
                      break;
                    }

                    _context84.next = 3;
                    return P.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);

                  case 3:
                    _context84.next = 5;
                    return z.requestPresubscribeNotificationPermission();

                  case 5:
                    _e20 = _context84.sent;
                    _context84.t1 = _e20 === p.a.Default;

                    if (!_context84.t1) {
                      _context84.next = 10;
                      break;
                    }

                    _context84.next = 10;
                    return j.a.triggerNotificationPermissionChanged(!0);

                  case 10:
                    _context84.t0 = _e20;
                    _context84.next = _context84.t0 === p.a.Default ? 13 : _context84.t0 === p.a.Denied ? 14 : 15;
                    break;

                  case 13:
                    throw s.a.debug("Exiting subscription and not registering worker because the permission was dismissed."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new L(D.Dismissed);

                  case 14:
                    throw s.a.debug("Exiting subscription and not registering worker because the permission was blocked."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new L(D.Blocked);

                  case 15:
                    _context84.prev = 15;
                    _context84.next = 18;
                    return this.context.serviceWorkerManager.installWorker();

                  case 18:
                    _context84.next = 34;
                    break;

                  case 20:
                    _context84.prev = 20;
                    _context84.t2 = _context84["catch"](15);
                    _context84.t3 = _context84.t2 instanceof I;

                    if (!_context84.t3) {
                      _context84.next = 33;
                      break;
                    }

                    if (!(403 === _context84.t2.status)) {
                      _context84.next = 29;
                      break;
                    }

                    _context84.next = 27;
                    return this.context.subscriptionManager.registerFailedSubscription(F.a.ServiceWorkerStatus403, this.context);

                  case 27:
                    _context84.next = 33;
                    break;

                  case 29:
                    _context84.t4 = 404 === _context84.t2.status;

                    if (!_context84.t4) {
                      _context84.next = 33;
                      break;
                    }

                    _context84.next = 33;
                    return this.context.subscriptionManager.registerFailedSubscription(F.a.ServiceWorkerStatus404, this.context);

                  case 33:
                    throw _context84.t2;

                  case 34:
                    s.a.debug("Waiting for the service worker to activate...");
                    _context84.next = 37;
                    return navigator.serviceWorker.ready;

                  case 37:
                    t = _context84.sent;
                    s.a.debug("Service worker is ready to continue subscribing.");
                    _context84.next = 41;
                    return this.subscribeWithVapidKey(t.pushManager, e);

                  case 41:
                    return _context84.abrupt("return", _context84.sent);

                  case 42:
                  case "end":
                    return _context84.stop();
                }
              }
            }, _callee84, this, [[15, 20]]);
          }));
        }
      }, {
        key: "subscribeFcmFromWorker",
        value: function subscribeFcmFromWorker(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee85() {
            var t, i;
            return _regeneratorRuntime.wrap(function _callee85$(_context85) {
              while (1) {
                switch (_context85.prev = _context85.next) {
                  case 0:
                    t = self.registration;

                    if (!(!t.active && !l.a.firefox)) {
                      _context85.next = 3;
                      break;
                    }

                    throw new InvalidStateError.a(InvalidStateError.b.ServiceWorkerNotActivated);

                  case 3:
                    _context85.next = 5;
                    return t.pushManager.permissionState({
                      userVisibleOnly: !0
                    });

                  case 5:
                    i = _context85.sent;

                    if (!("denied" === i)) {
                      _context85.next = 8;
                      break;
                    }

                    throw new L(D.Blocked);

                  case 8:
                    if (!("prompt" === i)) {
                      _context85.next = 10;
                      break;
                    }

                    throw new L(D.Default);

                  case 10:
                    _context85.next = 12;
                    return this.subscribeWithVapidKey(t.pushManager, e);

                  case 12:
                    return _context85.abrupt("return", _context85.sent);

                  case 13:
                  case "end":
                    return _context85.stop();
                }
              }
            }, _callee85, this);
          }));
        }
      }, {
        key: "getVapidKeyForBrowser",
        value: function getVapidKeyForBrowser() {
          var e = void 0;
          return (e = l.a.firefox ? this.config.onesignalVapidPublicKey : this.config.vapidPublicKey) ? function (e) {
            var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
                i = atob(t),
                n = new Uint8Array(i.length);

            for (var _e21 = 0; _e21 < i.length; ++_e21) {
              n[_e21] = i.charCodeAt(_e21);
            }

            return n;
          }(e).buffer : void 0;
        }
      }, {
        key: "subscribeWithVapidKey",
        value: function subscribeWithVapidKey(e, t) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee86() {
            var i, _ref3, _ref4, n, r, o;

            return _regeneratorRuntime.wrap(function _callee86$(_context86) {
              while (1) {
                switch (_context86.prev = _context86.next) {
                  case 0:
                    _context86.next = 2;
                    return e.getSubscription();

                  case 2:
                    i = _context86.sent;
                    _context86.t0 = t;
                    _context86.next = _context86.t0 === 0 ? 6 : _context86.t0 === 1 ? 16 : 20;
                    break;

                  case 6:
                    if (i) {
                      _context86.next = 8;
                      break;
                    }

                    return _context86.abrupt("break", 20);

                  case 8:
                    if (!i.options) {
                      _context86.next = 12;
                      break;
                    }

                    s.a.debug("[Subscription Manager] An existing push subscription exists and it's options is not null.");
                    _context86.next = 15;
                    break;

                  case 12:
                    s.a.debug("[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now.");
                    _context86.next = 15;
                    return z.doPushUnsubscribe(i);

                  case 15:
                    return _context86.abrupt("break", 20);

                  case 16:
                    _context86.t1 = i;

                    if (!_context86.t1) {
                      _context86.next = 20;
                      break;
                    }

                    _context86.next = 20;
                    return z.doPushUnsubscribe(i);

                  case 20:
                    _context86.next = 22;
                    return z.doPushSubscribe(e, this.getVapidKeyForBrowser());

                  case 22:
                    _ref3 = _context86.sent;
                    _ref4 = _slicedToArray(_ref3, 2);
                    n = _ref4[0];
                    r = _ref4[1];
                    _context86.next = 28;
                    return z.updateSubscriptionTime(r, n.expirationTime);

                  case 28:
                    o = U.a.setFromW3cSubscription(n);
                    return _context86.abrupt("return", (i && (o.existingW3cPushSubscription = U.a.setFromW3cSubscription(i)), o));

                  case 30:
                  case "end":
                    return _context86.stop();
                }
              }
            }, _callee86, this);
          }));
        }
      }, {
        key: "isSubscriptionExpiring",
        value: function isSubscriptionExpiring() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee87() {
            var e, t, _e22, _ref5, i;

            return _regeneratorRuntime.wrap(function _callee87$(_context87) {
              while (1) {
                switch (_context87.prev = _context87.next) {
                  case 0:
                    _context87.next = 2;
                    return r.a.getIntegration();

                  case 2:
                    e = _context87.sent;
                    t = r.a.getWindowEnv();
                    _context87.t0 = e;
                    _context87.next = _context87.t0 === y.a.Secure ? 7 : _context87.t0 === y.a.SecureProxy ? 10 : _context87.t0 === y.a.InsecureProxy ? 20 : 25;
                    break;

                  case 7:
                    _context87.next = 9;
                    return this.isSubscriptionExpiringForSecureIntegration();

                  case 9:
                    return _context87.abrupt("return", _context87.sent);

                  case 10:
                    if (!(t === o.a.Host)) {
                      _context87.next = 17;
                      break;
                    }

                    _e22 = OneSignal.proxyFrameHost;

                    if (!_e22) {
                      _context87.next = 16;
                      break;
                    }

                    _context87.next = 15;
                    return _e22.runCommand(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE);

                  case 15:
                    return _context87.abrupt("return", _context87.sent);

                  case 16:
                    throw new InvalidStateError.a(InvalidStateError.b.NoProxyFrame);

                  case 17:
                    _context87.next = 19;
                    return this.isSubscriptionExpiringForSecureIntegration();

                  case 19:
                    return _context87.abrupt("return", _context87.sent);

                  case 20:
                    _context87.next = 22;
                    return S.a.getSubscription();

                  case 22:
                    _ref5 = _context87.sent;
                    i = _ref5.expirationTime;
                    return _context87.abrupt("return", !!i && new Date().getTime() >= i);

                  case 25:
                  case "end":
                    return _context87.stop();
                }
              }
            }, _callee87, this);
          }));
        }
      }, {
        key: "isSubscriptionExpiringForSecureIntegration",
        value: function isSubscriptionExpiringForSecureIntegration() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee88() {
            var e, t, i, _ref6, n, _e23, r;

            return _regeneratorRuntime.wrap(function _callee88$(_context88) {
              while (1) {
                switch (_context88.prev = _context88.next) {
                  case 0:
                    _context88.next = 2;
                    return this.context.serviceWorkerManager.getActiveState();

                  case 2:
                    e = _context88.sent;

                    if (!(e !== E.a.WorkerA && e !== E.a.WorkerB)) {
                      _context88.next = 5;
                      break;
                    }

                    return _context88.abrupt("return", !1);

                  case 5:
                    _context88.next = 7;
                    return A.getRegistration();

                  case 7:
                    t = _context88.sent;

                    if (t) {
                      _context88.next = 10;
                      break;
                    }

                    return _context88.abrupt("return", !1);

                  case 10:
                    if (t.pushManager) {
                      _context88.next = 12;
                      break;
                    }

                    return _context88.abrupt("return", !1);

                  case 12:
                    _context88.next = 14;
                    return t.pushManager.getSubscription();

                  case 14:
                    i = _context88.sent;

                    if (i) {
                      _context88.next = 17;
                      break;
                    }

                    return _context88.abrupt("return", !1);

                  case 17:
                    if (i.expirationTime) {
                      _context88.next = 19;
                      break;
                    }

                    return _context88.abrupt("return", !1);

                  case 19:
                    _context88.next = 21;
                    return S.a.getSubscription();

                  case 21:
                    _ref6 = _context88.sent;
                    n = _ref6.createdAt;

                    if (!n) {
                      _e23 = 31536e6;
                      n = new Date().getTime() + _e23;
                    }

                    r = n + (i.expirationTime - n) / 2;
                    return _context88.abrupt("return", !!i.expirationTime && (new Date().getTime() >= i.expirationTime || new Date().getTime() >= r));

                  case 26:
                  case "end":
                    return _context88.stop();
                }
              }
            }, _callee88, this);
          }));
        }
      }, {
        key: "getSubscriptionState",
        value: function getSubscriptionState() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee89() {
            var e, t, _ref7, i;

            return _regeneratorRuntime.wrap(function _callee89$(_context89) {
              while (1) {
                switch (_context89.prev = _context89.next) {
                  case 0:
                    if (!z.isSafari()) {
                      _context89.next = 2;
                      break;
                    }

                    return _context89.abrupt("return", this.getSubscriptionStateForSecure());

                  case 2:
                    e = r.a.getWindowEnv();
                    _context89.t0 = e;
                    _context89.next = _context89.t0 === o.a.ServiceWorker ? 6 : 14;
                    break;

                  case 6:
                    _context89.next = 8;
                    return self.registration.pushManager.getSubscription();

                  case 8:
                    t = _context89.sent;
                    _context89.next = 11;
                    return S.a.getSubscription();

                  case 11:
                    _ref7 = _context89.sent;
                    i = _ref7.optedOut;
                    return _context89.abrupt("return", {
                      subscribed: !!t,
                      optedOut: !!i
                    });

                  case 14:
                    _context89.next = 16;
                    return r.a.getIntegration();

                  case 16:
                    _context89.t1 = _context89.sent;
                    _context89.next = _context89.t1 === y.a.Secure ? 19 : _context89.t1 === y.a.SecureProxy ? 20 : _context89.t1 === y.a.InsecureProxy ? 27 : 30;
                    break;

                  case 19:
                    return _context89.abrupt("return", this.getSubscriptionStateForSecure());

                  case 20:
                    _context89.t2 = e;
                    _context89.next = _context89.t2 === o.a.OneSignalProxyFrame ? 23 : _context89.t2 === o.a.OneSignalSubscriptionPopup ? 23 : _context89.t2 === o.a.OneSignalSubscriptionModal ? 23 : 24;
                    break;

                  case 23:
                    return _context89.abrupt("return", this.getSubscriptionStateForSecure());

                  case 24:
                    _context89.next = 26;
                    return OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE);

                  case 26:
                    return _context89.abrupt("return", _context89.sent);

                  case 27:
                    _context89.next = 29;
                    return this.getSubscriptionStateForInsecure();

                  case 29:
                    return _context89.abrupt("return", _context89.sent);

                  case 30:
                    throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment);

                  case 31:
                  case "end":
                    return _context89.stop();
                }
              }
            }, _callee89, this);
          }));
        }
      }, {
        key: "getSubscriptionStateForSecure",
        value: function getSubscriptionStateForSecure() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee90() {
            var _ref8, e, t, _i17, i, n, r, o;

            return _regeneratorRuntime.wrap(function _callee90$(_context90) {
              while (1) {
                switch (_context90.prev = _context90.next) {
                  case 0:
                    _context90.next = 2;
                    return S.a.getSubscription();

                  case 2:
                    _ref8 = _context90.sent;
                    e = _ref8.deviceId;
                    t = _ref8.optedOut;

                    if (!z.isSafari()) {
                      _context90.next = 8;
                      break;
                    }

                    _i17 = window.safari.pushNotification.permission(this.config.safariWebId);
                    return _context90.abrupt("return", {
                      subscribed: !("granted" !== _i17.permission || !_i17.deviceToken || !e),
                      optedOut: !!t
                    });

                  case 8:
                    _context90.next = 10;
                    return this.context.serviceWorkerManager.getActiveState();

                  case 10:
                    i = _context90.sent;
                    _context90.next = 13;
                    return A.getRegistration();

                  case 13:
                    n = _context90.sent;
                    _context90.next = 16;
                    return this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId);

                  case 16:
                    r = _context90.sent;
                    o = i === E.a.WorkerA || i === E.a.WorkerB;
                    return _context90.abrupt("return", n ? {
                      subscribed: !(!e || r !== p.a.Granted || !o),
                      optedOut: !!t
                    } : {
                      subscribed: !1,
                      optedOut: !!t
                    });

                  case 19:
                  case "end":
                    return _context90.stop();
                }
              }
            }, _callee90, this);
          }));
        }
      }, {
        key: "getSubscriptionStateForInsecure",
        value: function getSubscriptionStateForInsecure() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee91() {
            var _ref9, e, t, i, n;

            return _regeneratorRuntime.wrap(function _callee91$(_context91) {
              while (1) {
                switch (_context91.prev = _context91.next) {
                  case 0:
                    _context91.next = 2;
                    return S.a.getSubscription();

                  case 2:
                    _ref9 = _context91.sent;
                    e = _ref9.deviceId;
                    t = _ref9.subscriptionToken;
                    i = _ref9.optedOut;
                    _context91.next = 8;
                    return this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId);

                  case 8:
                    n = _context91.sent;
                    return _context91.abrupt("return", {
                      subscribed: !(!e || !t || n !== p.a.Granted),
                      optedOut: !!i
                    });

                  case 10:
                  case "end":
                    return _context91.stop();
                }
              }
            }, _callee91, this);
          }));
        }
      }, {
        key: "registerFailedSubscription",
        value: function registerFailedSubscription(e, t) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee92() {
            return _regeneratorRuntime.wrap(function _callee92$(_context92) {
              while (1) {
                switch (_context92.prev = _context92.next) {
                  case 0:
                    t.sessionManager.isFirstPageView() && (t.subscriptionManager.registerSubscription(new U.a(), e), t.sessionManager.incrementPageViewCount());

                  case 1:
                  case "end":
                    return _context92.stop();
                }
              }
            }, _callee92);
          }));
        }
      }], [{
        key: "isSafari",
        value: function isSafari() {
          return m.a.isSafari();
        }
      }, {
        key: "requestPresubscribeNotificationPermission",
        value: function requestPresubscribeNotificationPermission() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee93() {
            return _regeneratorRuntime.wrap(function _callee93$(_context93) {
              while (1) {
                switch (_context93.prev = _context93.next) {
                  case 0:
                    _context93.next = 2;
                    return z.requestNotificationPermission();

                  case 2:
                    return _context93.abrupt("return", _context93.sent);

                  case 3:
                  case "end":
                    return _context93.stop();
                }
              }
            }, _callee93);
          }));
        }
      }, {
        key: "requestNotificationPermission",
        value: function requestNotificationPermission() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee94() {
            var e;
            return _regeneratorRuntime.wrap(function _callee94$(_context94) {
              while (1) {
                switch (_context94.prev = _context94.next) {
                  case 0:
                    _context94.next = 2;
                    return window.Notification.requestPermission();

                  case 2:
                    e = _context94.sent;
                    return _context94.abrupt("return", p.a[e]);

                  case 4:
                  case "end":
                    return _context94.stop();
                }
              }
            }, _callee94);
          }));
        }
      }, {
        key: "updateSubscriptionTime",
        value: function updateSubscriptionTime(e, t) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee95() {
            var i;
            return _regeneratorRuntime.wrap(function _callee95$(_context95) {
              while (1) {
                switch (_context95.prev = _context95.next) {
                  case 0:
                    _context95.next = 2;
                    return S.a.getSubscription();

                  case 2:
                    i = _context95.sent;
                    e && (i.createdAt = new Date().getTime());
                    i.expirationTime = t;
                    _context95.next = 7;
                    return S.a.setSubscription(i);

                  case 7:
                  case "end":
                    return _context95.stop();
                }
              }
            }, _callee95);
          }));
        }
      }, {
        key: "doPushUnsubscribe",
        value: function doPushUnsubscribe(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee96() {
            var t;
            return _regeneratorRuntime.wrap(function _callee96$(_context96) {
              while (1) {
                switch (_context96.prev = _context96.next) {
                  case 0:
                    s.a.debug("[Subscription Manager] Unsubscribing existing push subscription.");
                    _context96.next = 3;
                    return e.unsubscribe();

                  case 3:
                    t = _context96.sent;
                    return _context96.abrupt("return", (s.a.debug("[Subscription Manager] Unsubscribing existing push subscription result: ".concat(t)), t));

                  case 5:
                  case "end":
                    return _context96.stop();
                }
              }
            }, _callee96);
          }));
        }
      }, {
        key: "doPushSubscribe",
        value: function doPushSubscribe(e, t) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee97() {
            var i, _t11;

            return _regeneratorRuntime.wrap(function _callee97$(_context97) {
              while (1) {
                switch (_context97.prev = _context97.next) {
                  case 0:
                    if (t) {
                      _context97.next = 2;
                      break;
                    }

                    throw new Error("Missing required 'applicationServerKey' to subscribe for push notifications!");

                  case 2:
                    i = {
                      userVisibleOnly: !0,
                      applicationServerKey: t
                    };
                    s.a.debug("[Subscription Manager] Subscribing to web push with these options:", i);
                    _context97.prev = 4;
                    _context97.next = 7;
                    return e.getSubscription();

                  case 7:
                    _t11 = _context97.sent;
                    _context97.next = 10;
                    return e.subscribe(i);

                  case 10:
                    _context97.t0 = _context97.sent;
                    _context97.t1 = !_t11;
                    return _context97.abrupt("return", [_context97.t0, _context97.t1]);

                  case 15:
                    _context97.prev = 15;
                    _context97.t2 = _context97["catch"](4);

                    if (!("InvalidStateError" == _context97.t2.name)) {
                      _context97.next = 30;
                      break;
                    }

                    s.a.warn("[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, unsubscribe and attempting to subscribe with new key.", _context97.t2);
                    _context97.t3 = z;
                    _context97.next = 22;
                    return e.getSubscription();

                  case 22:
                    _context97.t4 = _context97.sent;
                    _context97.next = 25;
                    return _context97.t3.doPushUnsubscribe.call(_context97.t3, _context97.t4);

                  case 25:
                    _context97.next = 27;
                    return e.subscribe(i);

                  case 27:
                    _context97.t5 = _context97.sent;
                    _context97.t6 = !0;
                    return _context97.abrupt("return", [_context97.t5, _context97.t6]);

                  case 30:
                    throw _context97.t2;

                  case 31:
                  case "end":
                    return _context97.stop();
                }
              }
            }, _callee97, null, [[4, 15]]);
          }));
        }
      }]);

      return z;
    }();

    var K,
        G,
        q =
    /*#__PURE__*/
    function () {
      function q() {
        _classCallCheck(this, q);
      }

      _createClass(q, null, [{
        key: "getServiceWorkerManager",
        value: function getServiceWorkerManager(e) {
          var t = e.appConfig,
              i = r.a.getBuildEnvPrefix(),
              n = {
            workerAPath: new v("/".concat(i, "OneSignalSDKWorker.js")),
            workerBPath: new v("/".concat(i, "OneSignalSDKUpdaterWorker.js")),
            registrationOptions: {
              scope: "/"
            }
          };
          return t.userConfig && (t.userConfig.path && (n.workerAPath = new v("".concat(t.userConfig.path).concat(i).concat(t.userConfig.serviceWorkerPath)), n.workerBPath = new v("".concat(t.userConfig.path).concat(i).concat(t.userConfig.serviceWorkerUpdaterPath))), t.userConfig.serviceWorkerParam && (n.registrationOptions = t.userConfig.serviceWorkerParam)), new A(e, n);
        }
      }, {
        key: "getSubscriptionManager",
        value: function getSubscriptionManager(e) {
          var t = e.appConfig,
              i = {
            safariWebId: t.safariWebId,
            appId: t.appId,
            vapidPublicKey: t.vapidPublicKey,
            onesignalVapidPublicKey: t.onesignalVapidPublicKey
          };
          return new z(e, i);
        }
      }]);

      return q;
    }();

    (G = K || (K = {}))[G.Unknown = 0] = "Unknown", G[G.NoDeviceId = 1] = "NoDeviceId", G[G.NoEmailSet = 2] = "NoEmailSet", G[G.OptedOut = 3] = "OptedOut";

    var J =
    /*#__PURE__*/
    function (_O$a4) {
      _inherits(J, _O$a4);

      function J(e) {
        var _this26;

        _classCallCheck(this, J);

        switch (e) {
          case K.Unknown || K.NoDeviceId:
            _this26 = _possibleConstructorReturn(this, _getPrototypeOf(J).call(this, "This operation can only be performed after the user is subscribed."));
            break;

          case K.NoEmailSet:
            _this26 = _possibleConstructorReturn(this, _getPrototypeOf(J).call(this, "No email is currently set."));
            break;

          case K.OptedOut:
            _this26 = _possibleConstructorReturn(this, _getPrototypeOf(J).call(this, "The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed."));
        }

        _this26.reason = K[e], _Object$setPrototypeOf(_assertThisInitialized(_this26), J.prototype);
        return _this26;
      }

      return J;
    }(O.a);

    var Y = i(29);

    var Q =
    /*#__PURE__*/
    function () {
      function Q(e) {
        _classCallCheck(this, Q);

        this.context = e, this.onSessionSent = e.sessionManager.getPageViewCount() > 1;
      }

      _createClass(Q, [{
        key: "getDeviceId",
        value: function getDeviceId() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee98() {
            var _ref10, e;

            return _regeneratorRuntime.wrap(function _callee98$(_context98) {
              while (1) {
                switch (_context98.prev = _context98.next) {
                  case 0:
                    _context98.next = 2;
                    return S.a.getSubscription();

                  case 2:
                    _ref10 = _context98.sent;
                    e = _ref10.deviceId;

                    if (e) {
                      _context98.next = 6;
                      break;
                    }

                    throw new J(K.NoDeviceId);

                  case 6:
                    return _context98.abrupt("return", e);

                  case 7:
                  case "end":
                    return _context98.stop();
                }
              }
            }, _callee98);
          }));
        }
      }, {
        key: "createDeviceRecord",
        value: function createDeviceRecord() {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee99() {
            var e;
            return _regeneratorRuntime.wrap(function _callee99$(_context99) {
              while (1) {
                switch (_context99.prev = _context99.next) {
                  case 0:
                    e = new B.a();
                    e.appId = this.context.appConfig.appId;
                    _context99.next = 4;
                    return Y.a.getCurrentNotificationType();

                  case 4:
                    e.subscriptionState = _context99.sent;
                    return _context99.abrupt("return", e);

                  case 6:
                  case "end":
                    return _context99.stop();
                }
              }
            }, _callee99, this);
          }));
        }
      }, {
        key: "sendPlayerUpdate",
        value: function sendPlayerUpdate(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee100() {
            var t;
            return _regeneratorRuntime.wrap(function _callee100$(_context100) {
              while (1) {
                switch (_context100.prev = _context100.next) {
                  case 0:
                    _context100.next = 2;
                    return this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();

                  case 2:
                    if (_context100.sent) {
                      _context100.next = 4;
                      break;
                    }

                    return _context100.abrupt("return", void s.a.debug("Not sending the update because user is not registered with OneSignal (no device id)"));

                  case 4:
                    _context100.next = 6;
                    return this.getDeviceId();

                  case 6:
                    t = _context100.sent;
                    _context100.t0 = e;

                    if (_context100.t0) {
                      _context100.next = 12;
                      break;
                    }

                    _context100.next = 11;
                    return this.createDeviceRecord();

                  case 11:
                    e = _context100.sent;

                  case 12:
                    if (!this.onSessionSent) {
                      _context100.next = 17;
                      break;
                    }

                    _context100.next = 15;
                    return _.updatePlayer(this.context.appConfig.appId, t, _Object$assign({
                      notification_types: F.a.Subscribed
                    }, e.serialize()));

                  case 15:
                    _context100.next = 19;
                    break;

                  case 17:
                    _context100.next = 19;
                    return this.sendOnSessionUpdate(e);

                  case 19:
                  case "end":
                    return _context100.stop();
                }
              }
            }, _callee100, this);
          }));
        }
      }, {
        key: "sendOnSessionUpdate",
        value: function sendOnSessionUpdate(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee101() {
            var t, i, _e24;

            return _regeneratorRuntime.wrap(function _callee101$(_context101) {
              while (1) {
                switch (_context101.prev = _context101.next) {
                  case 0:
                    if (!this.onSessionSent) {
                      _context101.next = 2;
                      break;
                    }

                    return _context101.abrupt("return");

                  case 2:
                    if (this.context.sessionManager.isFirstPageView()) {
                      _context101.next = 4;
                      break;
                    }

                    return _context101.abrupt("return");

                  case 4:
                    _context101.next = 6;
                    return this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();

                  case 6:
                    if (_context101.sent) {
                      _context101.next = 8;
                      break;
                    }

                    return _context101.abrupt("return", void s.a.debug("Not sending the on session because user is not registered with OneSignal (no device id)"));

                  case 8:
                    _context101.next = 10;
                    return this.getDeviceId();

                  case 10:
                    t = _context101.sent;
                    _context101.t0 = e;

                    if (_context101.t0) {
                      _context101.next = 16;
                      break;
                    }

                    _context101.next = 15;
                    return this.createDeviceRecord();

                  case 15:
                    e = _context101.sent;

                  case 16:
                    if (!(e.subscriptionState === F.a.Subscribed || !0 === OneSignal.config.enableOnSession)) {
                      _context101.next = 33;
                      break;
                    }

                    _context101.prev = 17;
                    _context101.next = 20;
                    return _.updateUserSession(t, e);

                  case 20:
                    i = _context101.sent;

                    if (!(this.onSessionSent = !0, i !== t)) {
                      _context101.next = 28;
                      break;
                    }

                    _context101.next = 24;
                    return S.a.getSubscription();

                  case 24:
                    _e24 = _context101.sent;
                    _e24.deviceId = i;
                    _context101.next = 28;
                    return S.a.setSubscription(_e24);

                  case 28:
                    _context101.next = 33;
                    break;

                  case 30:
                    _context101.prev = 30;
                    _context101.t1 = _context101["catch"](17);
                    s.a.error("Failed to update user session. Error \"".concat(_context101.t1.message, "\" ").concat(_context101.t1.stack));

                  case 33:
                  case "end":
                    return _context101.stop();
                }
              }
            }, _callee101, this, [[17, 30]]);
          }));
        }
      }, {
        key: "sendPlayerCreate",
        value: function sendPlayerCreate(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee102() {
            var t;
            return _regeneratorRuntime.wrap(function _callee102$(_context102) {
              while (1) {
                switch (_context102.prev = _context102.next) {
                  case 0:
                    _context102.prev = 0;
                    _context102.next = 3;
                    return _.createUser(e);

                  case 3:
                    t = _context102.sent;
                    return _context102.abrupt("return", t ? (s.a.info("Subscribed to web push and registered with OneSignal", e, t), this.onSessionSent = !0, t) : void s.a.error("Failed to create user."));

                  case 7:
                    _context102.prev = 7;
                    _context102.t0 = _context102["catch"](0);
                    return _context102.abrupt("return", void s.a.error("Failed to create user. Error \"".concat(_context102.t0.message, "\" ").concat(_context102.t0.stack)));

                  case 10:
                  case "end":
                    return _context102.stop();
                }
              }
            }, _callee102, this, [[0, 7]]);
          }));
        }
      }, {
        key: "onSessionAlreadyCalled",
        value: function onSessionAlreadyCalled() {
          return this.onSessionSent;
        }
      }, {
        key: "sendExternalUserIdUpdate",
        value: function sendExternalUserIdUpdate(e) {
          return c.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee103() {
            var t;
            return _regeneratorRuntime.wrap(function _callee103$(_context103) {
              while (1) {
                switch (_context103.prev = _context103.next) {
                  case 0:
                    _context103.next = 2;
                    return this.getDeviceId();

                  case 2:
                    t = _context103.sent;
                    _context103.next = 5;
                    return _.updatePlayer(this.context.appConfig.appId, t, {
                      external_user_id: x.b.getValueOrDefault(e, "")
                    });

                  case 5:
                  case "end":
                    return _context103.stop();
                }
              }
            }, _callee103, this);
          }));
        }
      }]);

      return Q;
    }();

    i.d(t, "a", function () {
      return X;
    });

    var X = function X(e) {
      _classCallCheck(this, X);

      this.appConfig = e, this.subscriptionManager = q.getSubscriptionManager(this), this.serviceWorkerManager = q.getServiceWorkerManager(this), this.sessionManager = new a(), this.permissionManager = new b(), this.workerMessenger = new n.a(this), this.updateManager = new Q(this);
    };
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return s;
    });
    var n = i(0),
        r = i(5),
        o = i(19);

    var s =
    /*#__PURE__*/
    function () {
      function s() {
        _classCallCheck(this, s);
      }

      _createClass(s, null, [{
        key: "triggerNotificationPermissionChanged",
        value: function triggerNotificationPermissionChanged() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee104() {
            var t;
            return _regeneratorRuntime.wrap(function _callee104$(_context104) {
              while (1) {
                switch (_context104.prev = _context104.next) {
                  case 0:
                    _context104.next = 2;
                    return OneSignal.privateGetNotificationPermission();

                  case 2:
                    t = _context104.sent;
                    _context104.t1 = t;
                    _context104.next = 6;
                    return r.a.get("Options", "notificationPermission");

                  case 6:
                    _context104.t2 = _context104.sent;
                    _context104.t0 = _context104.t1 !== _context104.t2;

                    if (_context104.t0) {
                      _context104.next = 10;
                      break;
                    }

                    _context104.t0 = e;

                  case 10:
                    _context104.t3 = _context104.t0;

                    if (!_context104.t3) {
                      _context104.next = 15;
                      break;
                    }

                    _context104.next = 14;
                    return r.a.put("Options", {
                      key: "notificationPermission",
                      value: t
                    });

                  case 14:
                    o.a.trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {
                      to: t
                    });

                  case 15:
                  case "end":
                    return _context104.stop();
                }
              }
            }, _callee104);
          }));
        }
      }]);

      return s;
    }();
  }, function (e, t, i) {
    "use strict";

    var n = i(0),
        r = i(17),
        o = i(9),
        s = i(1),
        a = i(2);

    t.a =
    /*#__PURE__*/
    function () {
      function _class() {
        _classCallCheck(this, _class);
      }

      _createClass(_class, null, [{
        key: "downloadServerAppConfig",
        value: function downloadServerAppConfig(e) {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee105() {
            return _regeneratorRuntime.wrap(function _callee105$(_context105) {
              while (1) {
                switch (_context105.prev = _context105.next) {
                  case 0:
                    a.a.enforceAppId(e);
                    _context105.next = 3;
                    return new _Promise(function (t, i) {
                      t(r.a.get("sync/".concat(e, "/web"), null));
                    });

                  case 3:
                    return _context105.abrupt("return", _context105.sent);

                  case 4:
                  case "end":
                    return _context105.stop();
                }
              }
            }, _callee105);
          }));
        }
      }, {
        key: "getUserIdFromSubscriptionIdentifier",
        value: function getUserIdFromSubscriptionIdentifier(e, t, i) {
          return a.a.enforceAppId(e), r.a.post("players", {
            app_id: e,
            device_type: t,
            identifier: i,
            notification_types: o.a.TemporaryWebRecord
          }).then(function (e) {
            return e && e.id ? e.id : null;
          })["catch"](function (e) {
            return s.a.debug("Error getting user ID from subscription identifier:", e), null;
          });
        }
      }, {
        key: "updatePlayer",
        value: function updatePlayer(e, t, i) {
          return a.a.enforceAppId(e), a.a.enforcePlayerId(t), r.a.put("players/".concat(t), _Object$assign({
            app_id: e
          }, i));
        }
      }]);

      return _class;
    }();
  }, function (e, t, i) {
    "use strict";

    var n = i(0),
        InvalidStateError = i(16),
        r = i(19),
        o = i(3),
        s = i(5);

    var a =
    /*#__PURE__*/
    function () {
      function a() {
        _classCallCheck(this, a);
      }

      _createClass(a, null, [{
        key: "isLocalStorageSupported",
        value: function isLocalStorageSupported() {
          try {
            return "undefined" != typeof localStorage && (localStorage.getItem("test"), !0);
          } catch (e) {
            return !1;
          }
        }
      }, {
        key: "setItem",
        value: function setItem(e, t, i) {
          if (!a.isLocalStorageSupported()) return;
          var n = void 0 !== i ? 60 * i * 1e3 : 0,
              r = {
            value: _JSON$stringify(t),
            timestamp: void 0 !== i ? new Date().getTime() + n : void 0
          };
          localStorage.setItem(e, _JSON$stringify(r));
        }
      }, {
        key: "getItem",
        value: function getItem(e) {
          if (!a.isLocalStorageSupported()) return null;
          var t = localStorage.getItem(e);
          var i;

          try {
            i = JSON.parse(t);
          } catch (e) {
            return null;
          }

          if (null === i) return null;
          if (i.timestamp && new Date().getTime() >= i.timestamp) return localStorage.removeItem(e), null;
          var n = i.value;

          try {
            n = JSON.parse(i.value);
          } catch (e) {
            return n;
          }

          return n;
        }
      }, {
        key: "removeItem",
        value: function removeItem(e) {
          if (!a.isLocalStorageSupported()) return null;
          localStorage.removeItem(e);
        }
      }]);

      return a;
    }();

    var c = i(1),
        d = i(9),
        u = i(12),
        l = i(8),
        p = i(27),
        g = i(2);
    i.d(t, "a", function () {
      return f;
    });

    var f =
    /*#__PURE__*/
    function () {
      function f() {
        _classCallCheck(this, f);
      }

      _createClass(f, null, [{
        key: "getCurrentNotificationType",
        value: function getCurrentNotificationType() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee106() {
            var e, t;
            return _regeneratorRuntime.wrap(function _callee106$(_context106) {
              while (1) {
                switch (_context106.prev = _context106.next) {
                  case 0:
                    _context106.next = 2;
                    return OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId);

                  case 2:
                    e = _context106.sent;

                    if (!(e === u.a.Default)) {
                      _context106.next = 5;
                      break;
                    }

                    return _context106.abrupt("return", d.a.Default);

                  case 5:
                    if (!(e === u.a.Denied)) {
                      _context106.next = 7;
                      break;
                    }

                    return _context106.abrupt("return", l.a.isUsingSubscriptionWorkaround() ? d.a.Default : d.a.NotSubscribed);

                  case 7:
                    _context106.next = 9;
                    return OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();

                  case 9:
                    t = _context106.sent;

                    if (!(e === u.a.Granted && t)) {
                      _context106.next = 19;
                      break;
                    }

                    _context106.next = 13;
                    return OneSignal.privateIsPushNotificationsEnabled();

                  case 13:
                    if (!_context106.sent) {
                      _context106.next = 17;
                      break;
                    }

                    _context106.t0 = d.a.Subscribed;
                    _context106.next = 18;
                    break;

                  case 17:
                    _context106.t0 = d.a.MutedByApi;

                  case 18:
                    return _context106.abrupt("return", _context106.t0);

                  case 19:
                    return _context106.abrupt("return", d.a.Default);

                  case 20:
                  case "end":
                    return _context106.stop();
                }
              }
            }, _callee106);
          }));
        }
      }, {
        key: "getNotificationTypeFromOptIn",
        value: function getNotificationTypeFromOptIn(e) {
          return 1 == e || null == e ? d.a.Subscribed : d.a.MutedByApi;
        }
      }, {
        key: "wasHttpsNativePromptDismissed",
        value: function wasHttpsNativePromptDismissed() {
          return "dismissed" === a.getItem("onesignal-notification-prompt");
        }
      }, {
        key: "markHttpPopoverShown",
        value: function markHttpPopoverShown() {
          sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true");
        }
      }, {
        key: "isHttpPromptAlreadyShown",
        value: function isHttpPromptAlreadyShown() {
          return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN");
        }
      }, {
        key: "checkAndTriggerNotificationPermissionChanged",
        value: function checkAndTriggerNotificationPermissionChanged() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee107() {
            var e, t;
            return _regeneratorRuntime.wrap(function _callee107$(_context107) {
              while (1) {
                switch (_context107.prev = _context107.next) {
                  case 0:
                    _context107.next = 2;
                    return s.a.get("Options", "notificationPermission");

                  case 2:
                    e = _context107.sent;
                    _context107.next = 5;
                    return OneSignal.getNotificationPermission();

                  case 5:
                    t = _context107.sent;
                    _context107.t0 = e !== t;

                    if (!_context107.t0) {
                      _context107.next = 12;
                      break;
                    }

                    _context107.next = 10;
                    return p.a.triggerNotificationPermissionChanged();

                  case 10:
                    _context107.next = 12;
                    return s.a.put("Options", {
                      key: "notificationPermission",
                      value: t
                    });

                  case 12:
                  case "end":
                    return _context107.stop();
                }
              }
            }, _callee107);
          }));
        }
      }, {
        key: "getNotificationIcons",
        value: function getNotificationIcons() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee108() {
            var e, t, i;
            return _regeneratorRuntime.wrap(function _callee108$(_context108) {
              while (1) {
                switch (_context108.prev = _context108.next) {
                  case 0:
                    _context108.next = 2;
                    return f.getAppId();

                  case 2:
                    e = _context108.sent;

                    if (e) {
                      _context108.next = 5;
                      break;
                    }

                    throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);

                  case 5:
                    t = "".concat(o.a.getOneSignalApiUrl().toString(), "/apps/").concat(e, "/icon");
                    _context108.next = 8;
                    return fetch(t);

                  case 8:
                    _context108.next = 10;
                    return _context108.sent.json();

                  case 10:
                    i = _context108.sent;

                    if (!i.errors) {
                      _context108.next = 13;
                      break;
                    }

                    throw c.a.error("API call %c".concat(t), g.a.getConsoleStyle("code"), "failed with:", i.errors), new Error("Failed to get notification icons.");

                  case 13:
                    return _context108.abrupt("return", i);

                  case 14:
                  case "end":
                    return _context108.stop();
                }
              }
            }, _callee108);
          }));
        }
      }, {
        key: "getSlidedownPermissionMessageOptions",
        value: function getSlidedownPermissionMessageOptions(e) {
          var t = "We'd like to show you notifications for the latest news and updates.";
          return e ? e.slidedown ? {
            enabled: e.slidedown.enabled,
            autoPrompt: e.slidedown.autoPrompt,
            actionMessage: e.slidedown.actionMessage || t,
            acceptButtonText: e.slidedown.acceptButtonText || "Allow",
            cancelButtonText: e.slidedown.cancelButtonText || "No Thanks"
          } : {
            enabled: !1,
            autoPrompt: !1,
            actionMessage: e.actionMessage || t,
            acceptButtonText: e.acceptButtonText || "Allow",
            cancelButtonText: e.cancelButtonText || "No Thanks"
          } : {
            enabled: !1,
            autoPrompt: !1,
            actionMessage: t,
            acceptButtonText: "Allow",
            cancelButtonText: "No Thanks"
          };
        }
      }, {
        key: "getFullscreenPermissionMessageOptions",
        value: function getFullscreenPermissionMessageOptions(e) {
          return e ? e.fullscreen ? {
            autoAcceptTitle: e.fullscreen.autoAcceptTitle,
            actionMessage: e.fullscreen.actionMessage,
            exampleNotificationTitleDesktop: e.fullscreen.title,
            exampleNotificationTitleMobile: e.fullscreen.title,
            exampleNotificationMessageDesktop: e.fullscreen.message,
            exampleNotificationMessageMobile: e.fullscreen.message,
            exampleNotificationCaption: e.fullscreen.caption,
            acceptButtonText: e.fullscreen.acceptButton,
            cancelButtonText: e.fullscreen.cancelButton
          } : e : null;
        }
      }, {
        key: "getPromptOptionsQueryString",
        value: function getPromptOptionsQueryString() {
          var e = "";

          if (f.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions)) {
            var _t12 = f.getPromptOptionsPostHash();

            for (var _i18 = 0, _Object$keys4 = _Object$keys2(_t12); _i18 < _Object$keys4.length; _i18++) {
              var _i19 = _Object$keys4[_i18];
              e += "&" + _i19 + "=" + _t12[_i19];
            }
          }

          return e;
        }
      }, {
        key: "getPromptOptionsPostHash",
        value: function getPromptOptionsPostHash() {
          var e = f.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);

          if (e) {
            var t = {
              exampleNotificationTitleDesktop: "exampleNotificationTitle",
              exampleNotificationMessageDesktop: "exampleNotificationMessage",
              exampleNotificationTitleMobile: "exampleNotificationTitle",
              exampleNotificationMessageMobile: "exampleNotificationMessage"
            };

            for (var _i20 = 0, _Object$keys5 = _Object$keys2(t); _i20 < _Object$keys5.length; _i20++) {
              var _i21 = _Object$keys5[_i20];
              var _n6 = t[_i21];
              e[_i21] && (e[_n6] = e[_i21]);
            }

            for (var i = ["autoAcceptTitle", "siteName", "autoAcceptTitle", "subscribeText", "showGraphic", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButtonText", "cancelButtonText", "timeout"], n = {}, r = 0; r < i.length; r++) {
              var o = i[r],
                  s = e[o],
                  a = encodeURIComponent(s);
              (s || !1 === s || "" === s) && (n[o] = a);
            }
          }

          return n;
        }
      }, {
        key: "triggerCustomPromptClicked",
        value: function triggerCustomPromptClicked(e) {
          r.a.trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, {
            result: e
          });
        }
      }, {
        key: "getAppId",
        value: function getAppId() {
          return n.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee109() {
            return _regeneratorRuntime.wrap(function _callee109$(_context109) {
              while (1) {
                switch (_context109.prev = _context109.next) {
                  case 0:
                    if (!OneSignal.config.appId) {
                      _context109.next = 2;
                      break;
                    }

                    return _context109.abrupt("return", _Promise.resolve(OneSignal.config.appId));

                  case 2:
                    _context109.next = 4;
                    return s.a.get("Ids", "appId");

                  case 4:
                    return _context109.abrupt("return", _context109.sent);

                  case 5:
                  case "end":
                    return _context109.stop();
                }
              }
            }, _callee109);
          }));
        }
      }]);

      return f;
    }();
  }, function (e, t, i) {
    "use strict";

    i.d(t, "a", function () {
      return d;
    });
    var n = i(11),
        r = i.n(n),
        o = i(10),
        s = i(18),
        a = i(23),
        c = i(8);

    var d =
    /*#__PURE__*/
    function () {
      function d() {
        _classCallCheck(this, d);

        this.language = o.a.getLanguage(), this.timezone = -60 * new Date().getTimezoneOffset();

        var e = _parseInt(String(r.a.version), 10);

        this.browserVersion = isNaN(e) ? -1 : e, this.deviceModel = navigator.platform, this.sdkVersion = o.a.version().toString(), this.deliveryPlatform = this.getDeliveryPlatform();
      }

      _createClass(d, [{
        key: "isSafari",
        value: function isSafari() {
          return r.a.safari && void 0 !== window.safari && void 0 !== window.safari.pushNotification;
        }
      }, {
        key: "getDeliveryPlatform",
        value: function getDeliveryPlatform() {
          var e = c.a.redetectBrowserUserAgent();
          return this.isSafari() ? a.a.Safari : e.firefox ? a.a.Firefox : e.msedge ? a.a.Edge : a.a.ChromeLike;
        }
      }, {
        key: "serialize",
        value: function serialize() {
          var e = {
            device_type: this.deliveryPlatform,
            language: this.language,
            timezone: this.timezone,
            device_os: this.browserVersion,
            device_model: this.deviceModel,
            sdk: this.sdkVersion,
            notification_types: this.subscriptionState
          };
          return this.appId && (e.app_id = this.appId), e;
        }
      }, {
        key: "deserialize",
        value: function deserialize(e) {
          throw new s.a();
        }
      }]);

      return d;
    }();
  }, function (e, t, i) {
    "use strict";

    var n,
        r,
        o,
        s = i(0);
    !function (e) {
      e.TypicalSite = "typical", e.WordPress = "wordpress", e.Shopify = "shopify", e.Blogger = "blogger", e.Magento = "magento", e.Drupal = "drupal", e.SquareSpace = "squarespace", e.Joomla = "joomla", e.Weebly = "weebly", e.Wix = "wix", e.Custom = "custom";
    }(n || (n = {})), function (e) {
      e.Exact = "exact", e.Origin = "origin";
    }(r || (r = {})), function (e) {
      e.Navigate = "navigate", e.Focus = "focus";
    }(o || (o = {}));
    var a,
        c,
        d = i(4),
        SdkInitError = i(20),
        u = i(3),
        l = i(8),
        p = i(2),
        g = i(29);
    i.d(t, "a", function () {
      return f;
    }), (c = a || (a = {}))[c.Dashboard = 0] = "Dashboard", c[c.JavaScript = 1] = "JavaScript";

    var f =
    /*#__PURE__*/
    function () {
      function f() {
        _classCallCheck(this, f);
      }

      _createClass(f, null, [{
        key: "getAppConfig",
        value: function getAppConfig(e, t) {
          return s.a(this, void 0, void 0,
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee110() {
            var _i22, _n7;

            return _regeneratorRuntime.wrap(function _callee110$(_context110) {
              while (1) {
                switch (_context110.prev = _context110.next) {
                  case 0:
                    _context110.prev = 0;

                    if (!(!e || !e.appId || !l.b.isValidUuid(e.appId))) {
                      _context110.next = 3;
                      break;
                    }

                    throw new SdkInitError.a(SdkInitError.b.InvalidAppId);

                  case 3:
                    _context110.next = 5;
                    return t(e.appId);

                  case 5:
                    _i22 = _context110.sent;
                    _n7 = this.getMergedConfig(e, _i22);
                    return _context110.abrupt("return", (this.checkRestrictedOrigin(_n7), _n7));

                  case 10:
                    _context110.prev = 10;
                    _context110.t0 = _context110["catch"](0);

                    if (!_context110.t0) {
                      _context110.next = 17;
                      break;
                    }

                    if (!(1 === _context110.t0.code)) {
                      _context110.next = 15;
                      break;
                    }

                    throw new SdkInitError.a(SdkInitError.b.InvalidAppId);

                  case 15:
                    if (!(2 === _context110.t0.code)) {
                      _context110.next = 17;
                      break;
                    }

                    throw new SdkInitError.a(SdkInitError.b.AppNotConfiguredForWebPush);

                  case 17:
                    throw _context110.t0;

                  case 18:
                  case "end":
                    return _context110.stop();
                }
              }
            }, _callee110, this, [[0, 10]]);
          }));
        }
      }, {
        key: "checkRestrictedOrigin",
        value: function checkRestrictedOrigin(e) {
          if (e.restrictedOriginEnabled && u.a.getWindowEnv() !== d.a.ServiceWorker && window.top === window && !p.b.contains(window.location.hostname, ".os.tc") && !p.b.contains(window.location.hostname, ".onesignal.com") && !this.doesCurrentOriginMatchConfigOrigin(e.origin)) throw new SdkInitError.a(SdkInitError.b.WrongSiteUrl, {
            siteUrl: e.origin
          });
        }
      }, {
        key: "doesCurrentOriginMatchConfigOrigin",
        value: function doesCurrentOriginMatchConfigOrigin(e) {
          try {
            return location.origin === new URL(e).origin;
          } catch (e) {
            return !1;
          }
        }
      }, {
        key: "getIntegrationCapabilities",
        value: function getIntegrationCapabilities(e) {
          switch (e) {
            case n.Custom:
            case n.WordPress:
              return {
                configuration: a.JavaScript
              };

            default:
              return {
                configuration: a.Dashboard
              };
          }
        }
      }, {
        key: "getMergedConfig",
        value: function getMergedConfig(e, t) {
          var i = this.getConfigIntegrationKind(t),
              n = this.getSubdomainForConfigIntegrationKind(i, e, t),
              r = t.config.setupBehavior ? t.config.setupBehavior.allowLocalhostAsSecureOrigin : e.allowLocalhostAsSecureOrigin,
              o = l.b.internalIsUsingSubscriptionWorkaround(n, r),
              s = this.getUserConfigForConfigIntegrationKind(i, e, t, o);
          return {
            appId: t.app_id,
            subdomain: n,
            origin: t.config.origin,
            httpUseOneSignalCom: t.config.http_use_onesignal_com,
            cookieSyncEnabled: t.features.cookie_sync.enable,
            restrictedOriginEnabled: t.features.restrict_origin && t.features.restrict_origin.enable,
            metrics: {
              enable: t.features.metrics.enable,
              mixpanelReportingToken: t.features.metrics.mixpanel_reporting_token
            },
            safariWebId: t.config.safari_web_id,
            vapidPublicKey: t.config.vapid_public_key,
            onesignalVapidPublicKey: t.config.onesignal_vapid_public_key,
            emailAuthRequired: t.features.email && t.features.email.require_auth,
            userConfig: s,
            enableOnSession: t.features.enable_on_session || !1,
            receiveReceiptsEnable: t.features.receive_receipts_enable || !1
          };
        }
      }, {
        key: "getConfigIntegrationKind",
        value: function getConfigIntegrationKind(e) {
          return e.config.integration ? e.config.integration.kind : n.Custom;
        }
      }, {
        key: "getCustomLinkConfig",
        value: function getCustomLinkConfig(e) {
          var t = {
            enabled: !1,
            style: "button",
            size: "medium",
            unsubscribeEnabled: !1,
            text: {
              explanation: "",
              subscribe: "",
              unsubscribe: ""
            },
            color: {
              button: "",
              text: ""
            }
          };
          if (!(e && e.config && e.config.staticPrompts && e.config.staticPrompts.customlink && e.config.staticPrompts.customlink.enabled)) return t;
          var i = e.config.staticPrompts.customlink;
          return {
            enabled: i.enabled,
            style: i.style,
            size: i.size,
            unsubscribeEnabled: i.unsubscribeEnabled,
            text: i.text ? {
              subscribe: i.text.subscribe,
              unsubscribe: i.text.unsubscribe,
              explanation: i.text.explanation
            } : t.text,
            color: i.color ? {
              button: i.color.button,
              text: i.color.text
            } : t.color
          };
        }
      }, {
        key: "injectDefaultsIntoPromptOptions",
        value: function injectDefaultsIntoPromptOptions(e, t, i) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
          var r = {
            enabled: !1
          };
          e && e.customlink && (r = e.customlink);

          var o = t.customlink,
              s = _Object$assign({}, e, {
            customlink: {
              enabled: p.b.getValueOrDefault(r.enabled, o.enabled),
              style: p.b.getValueOrDefault(r.style, o.style),
              size: p.b.getValueOrDefault(r.size, o.size),
              unsubscribeEnabled: p.b.getValueOrDefault(r.unsubscribeEnabled, o.unsubscribeEnabled),
              text: {
                subscribe: p.b.getValueOrDefault(r.text ? r.text.subscribe : void 0, o.text.subscribe),
                unsubscribe: p.b.getValueOrDefault(r.text ? r.text.unsubscribe : void 0, o.text.unsubscribe),
                explanation: p.b.getValueOrDefault(r.text ? r.text.explanation : void 0, o.text.explanation)
              },
              color: {
                button: p.b.getValueOrDefault(r.color ? r.color.button : void 0, o.color.button),
                text: p.b.getValueOrDefault(r.color ? r.color.text : void 0, o.color.text)
              }
            }
          });

          return s.slidedown ? (s.slidedown.enabled = !!s.slidedown.enabled, s.slidedown.autoPrompt = s.slidedown.hasOwnProperty("autoPrompt") ? !!s.slidedown.enabled && !!s.slidedown.autoPrompt : !!s.slidedown.enabled) : (s.slidedown = g.a.getSlidedownPermissionMessageOptions(s), s.slidedown.enabled = !1, s.slidedown.autoPrompt = !1), s["native"] ? (s["native"].enabled = !!s["native"].enabled, s["native"].autoPrompt = s["native"].hasOwnProperty("autoPrompt") ? !!s["native"].enabled && !!s["native"].autoPrompt : !!s["native"].enabled) : s["native"] = {
            enabled: !1,
            autoPrompt: !1
          }, !0 === i.autoRegister && (n ? (s["native"].enabled = !1, s["native"].autoPrompt = !1, s.slidedown.enabled = !0, s.slidedown.autoPrompt = !0) : (s["native"].enabled = !0, s["native"].autoPrompt = !0)), s.autoPrompt = s["native"].autoPrompt || s.slidedown.autoPrompt, s;
        }
      }, {
        key: "getPromptOptionsForDashboardConfiguration",
        value: function getPromptOptionsForDashboardConfiguration(e) {
          var t = e.config.staticPrompts,
              i = t["native"] ? {
            enabled: t["native"].enabled,
            autoPrompt: t["native"].enabled && !1 !== t["native"].autoPrompt
          } : {
            enabled: !1,
            autoPrompt: !1
          },
              n = {
            enabled: t.slidedown.enabled,
            autoPrompt: t.slidedown.enabled && !1 !== t.slidedown.autoPrompt,
            actionMessage: t.slidedown.actionMessage,
            acceptButtonText: t.slidedown.acceptButton,
            cancelButtonText: t.slidedown.cancelButton
          };
          return {
            autoPrompt: i.autoPrompt || n.autoPrompt,
            "native": i,
            slidedown: n,
            fullscreen: {
              enabled: t.fullscreen.enabled,
              actionMessage: t.fullscreen.actionMessage,
              acceptButton: t.fullscreen.acceptButton,
              cancelButton: t.fullscreen.cancelButton,
              title: t.fullscreen.title,
              message: t.fullscreen.message,
              caption: t.fullscreen.caption,
              autoAcceptTitle: t.fullscreen.autoAcceptTitle
            },
            customlink: this.getCustomLinkConfig(e)
          };
        }
      }, {
        key: "getUserConfigForConfigIntegrationKind",
        value: function getUserConfigForConfigIntegrationKind(e, t, i) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

          switch (this.getIntegrationCapabilities(e).configuration) {
            case a.Dashboard:
              return {
                appId: i.app_id,
                autoRegister: !1,
                autoResubscribe: i.config.autoResubscribe,
                path: i.config.serviceWorker.path,
                serviceWorkerPath: i.config.serviceWorker.workerName,
                serviceWorkerUpdaterPath: i.config.serviceWorker.updaterWorkerName,
                serviceWorkerParam: {
                  scope: i.config.serviceWorker.registrationScope
                },
                subdomainName: i.config.siteInfo.proxyOrigin,
                promptOptions: this.getPromptOptionsForDashboardConfiguration(i),
                welcomeNotification: {
                  disable: !i.config.welcomeNotification.enable,
                  title: i.config.welcomeNotification.title,
                  message: i.config.welcomeNotification.message,
                  url: i.config.welcomeNotification.url
                },
                notifyButton: {
                  enable: i.config.staticPrompts.bell.enabled,
                  displayPredicate: i.config.staticPrompts.bell.hideWhenSubscribed ? function () {
                    return OneSignal.isPushNotificationsEnabled().then(function (e) {
                      return !e;
                    });
                  } : null,
                  size: i.config.staticPrompts.bell.size,
                  position: i.config.staticPrompts.bell.location,
                  showCredit: !1,
                  offset: {
                    bottom: i.config.staticPrompts.bell.offset.bottom + "px",
                    left: i.config.staticPrompts.bell.offset.left + "px",
                    right: i.config.staticPrompts.bell.offset.right + "px"
                  },
                  colors: {
                    "circle.background": i.config.staticPrompts.bell.color.main,
                    "circle.foreground": i.config.staticPrompts.bell.color.accent,
                    "badge.background": "black",
                    "badge.foreground": "white",
                    "badge.bordercolor": "black",
                    "pulse.color": i.config.staticPrompts.bell.color.accent,
                    "dialog.button.background.hovering": i.config.staticPrompts.bell.color.main,
                    "dialog.button.background.active": i.config.staticPrompts.bell.color.main,
                    "dialog.button.background": i.config.staticPrompts.bell.color.main,
                    "dialog.button.foreground": "white"
                  },
                  text: {
                    "tip.state.unsubscribed": i.config.staticPrompts.bell.tooltip.unsubscribed,
                    "tip.state.subscribed": i.config.staticPrompts.bell.tooltip.subscribed,
                    "tip.state.blocked": i.config.staticPrompts.bell.tooltip.blocked,
                    "message.prenotify": i.config.staticPrompts.bell.tooltip.unsubscribed,
                    "message.action.subscribing": i.config.staticPrompts.bell.message.subscribing,
                    "message.action.subscribed": i.config.staticPrompts.bell.message.subscribing,
                    "message.action.resubscribed": i.config.staticPrompts.bell.message.subscribing,
                    "message.action.unsubscribed": i.config.staticPrompts.bell.message.unsubscribing,
                    "dialog.main.title": i.config.staticPrompts.bell.dialog.main.title,
                    "dialog.main.button.subscribe": i.config.staticPrompts.bell.dialog.main.subscribeButton,
                    "dialog.main.button.unsubscribe": i.config.staticPrompts.bell.dialog.main.unsubscribeButton,
                    "dialog.blocked.title": i.config.staticPrompts.bell.dialog.blocked.title,
                    "dialog.blocked.message": i.config.staticPrompts.bell.dialog.blocked.message
                  }
                },
                persistNotification: i.config.notificationBehavior ? i.config.notificationBehavior.display.persist : void 0,
                webhooks: {
                  cors: i.config.webhooks.corsEnable,
                  "notification.displayed": i.config.webhooks.notificationDisplayedHook,
                  "notification.clicked": i.config.webhooks.notificationClickedHook,
                  "notification.dismissed": i.config.webhooks.notificationDismissedHook
                },
                notificationClickHandlerMatch: i.config.notificationBehavior ? i.config.notificationBehavior.click.match : void 0,
                notificationClickHandlerAction: i.config.notificationBehavior ? i.config.notificationBehavior.click.action : void 0,
                allowLocalhostAsSecureOrigin: i.config.setupBehavior ? i.config.setupBehavior.allowLocalhostAsSecureOrigin : void 0,
                requiresUserPrivacyConsent: t.requiresUserPrivacyConsent
              };

            case a.JavaScript:
              var _r5 = _Object$assign({}, t, {
                promptOptions: this.injectDefaultsIntoPromptOptions(t.promptOptions, i.config.staticPrompts, t, n)
              }, {
                serviceWorkerParam: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PARAM ? OneSignal.SERVICE_WORKER_PARAM : {
                  scope: "/"
                },
                serviceWorkerPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PATH ? OneSignal.SERVICE_WORKER_PATH : "OneSignalSDKWorker.js",
                serviceWorkerUpdaterPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_UPDATER_PATH ? OneSignal.SERVICE_WORKER_UPDATER_PATH : "OneSignalSDUpdaterKWorker.js",
                path: t.path ? t.path : "/"
              });

              return t.hasOwnProperty("autoResubscribe") ? _r5.autoResubscribe = !!t.autoResubscribe : t.hasOwnProperty("autoRegister") ? _r5.autoResubscribe = !!t.autoRegister : _r5.autoResubscribe = !!i.config.autoResubscribe, _r5;
          }
        }
      }, {
        key: "getSubdomainForConfigIntegrationKind",
        value: function getSubdomainForConfigIntegrationKind(e, t, i) {
          var n = this.getIntegrationCapabilities(e);
          var r = t.subdomainName,
              o = "";

          switch (n.configuration) {
            case a.Dashboard:
              o = i.config.siteInfo.proxyOriginEnabled ? i.config.siteInfo.proxyOrigin : void 0;
              break;

            case a.JavaScript:
              o = i.config.subdomain;
          }

          return o && !this.shouldUseServerConfigSubdomain(r, n) ? void 0 : o;
        }
      }, {
        key: "shouldUseServerConfigSubdomain",
        value: function shouldUseServerConfigSubdomain(e, t) {
          switch (t.configuration) {
            case a.Dashboard:
              return !0;

            case a.JavaScript:
              switch (location.protocol) {
                case "https:":
                  return !!e;

                case "http:":
                  return !0;

                default:
                  return !1;
              }

          }
        }
      }]);

      return f;
    }();
  }, function (e, t) {
    var i;

    i = function () {
      return this;
    }();

    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (e) {
       true && (i = window);
    }

    e.exports = i;
  }, function (e, t, i) {
    "use strict";

    (function (e) {
      i.d(t, "a", function () {
        return y;
      });
      var n = i(0),
          r = i(11),
          o = i.n(r),
          s = i(10),
          a = i(7),
          c = i(3),
          d = i(26),
          u = i(17),
          l = i(28),
          p = i(5),
          g = i(21),
          f = i(9),
          h = i(24),
          b = i(1),
          m = i(31),
          v = i(8),
          S = i(2);

      var y =
      /*#__PURE__*/
      function () {
        function y() {
          _classCallCheck(this, y);
        }

        _createClass(y, null, [{
          key: "run",
          value: function run() {
            self.addEventListener("push", y.onPushReceived), self.addEventListener("notificationclose", y.onNotificationClosed), self.addEventListener("notificationclick", function (e) {
              return e.waitUntil(y.onNotificationClicked(e));
            }), self.addEventListener("install", y.onServiceWorkerInstalled), self.addEventListener("activate", y.onServiceWorkerActivated), self.addEventListener("pushsubscriptionchange", function (e) {
              e.waitUntil(y.onPushSubscriptionChange(e));
            }), b.a.debug("Setting up message listeners."), y.workerMessenger.listen(), y.setupMessageListeners();
          }
        }, {
          key: "getAppId",
          value: function getAppId() {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee111() {
              var _e25, _ref11, e;

              return _regeneratorRuntime.wrap(function _callee111$(_context111) {
                while (1) {
                  switch (_context111.prev = _context111.next) {
                    case 0:
                      if (!self.location.search) {
                        _context111.next = 4;
                        break;
                      }

                      _e25 = self.location.search.match(/appId=([0-9a-z-]+)&?/i);

                      if (!(_e25 && _e25.length > 1)) {
                        _context111.next = 4;
                        break;
                      }

                      return _context111.abrupt("return", _e25[1]);

                    case 4:
                      _context111.next = 6;
                      return p.a.getAppConfig();

                    case 6:
                      _ref11 = _context111.sent;
                      e = _ref11.appId;
                      return _context111.abrupt("return", e);

                    case 9:
                    case "end":
                      return _context111.stop();
                  }
                }
              }, _callee111);
            }));
          }
        }, {
          key: "setupMessageListeners",
          value: function setupMessageListeners() {
            var _this27 = this;

            y.workerMessenger.on(a.b.WorkerVersion, function (e) {
              b.a.debug("[Service Worker] Received worker version message."), y.workerMessenger.broadcast(a.b.WorkerVersion, s.a.version());
            }), y.workerMessenger.on(a.b.Subscribe, function (e) {
              return n.a(_this27, void 0, void 0,
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee112() {
                var t, i, n, r;
                return _regeneratorRuntime.wrap(function _callee112$(_context112) {
                  while (1) {
                    switch (_context112.prev = _context112.next) {
                      case 0:
                        t = e;
                        b.a.debug("[Service Worker] Received subscribe message.");
                        i = new d.a(t);
                        _context112.next = 5;
                        return i.subscriptionManager.subscribe(0);

                      case 5:
                        n = _context112.sent;
                        _context112.next = 8;
                        return i.subscriptionManager.registerSubscription(n);

                      case 8:
                        r = _context112.sent;
                        y.workerMessenger.broadcast(a.b.Subscribe, r.serialize());

                      case 10:
                      case "end":
                        return _context112.stop();
                    }
                  }
                }, _callee112);
              }));
            }), y.workerMessenger.on(a.b.SubscribeNew, function (e) {
              return n.a(_this27, void 0, void 0,
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee113() {
                var t, i, n, r;
                return _regeneratorRuntime.wrap(function _callee113$(_context113) {
                  while (1) {
                    switch (_context113.prev = _context113.next) {
                      case 0:
                        t = e;
                        b.a.debug("[Service Worker] Received subscribe new message.");
                        i = new d.a(t);
                        _context113.next = 5;
                        return i.subscriptionManager.subscribe(1);

                      case 5:
                        n = _context113.sent;
                        _context113.next = 8;
                        return i.subscriptionManager.registerSubscription(n);

                      case 8:
                        r = _context113.sent;
                        y.workerMessenger.broadcast(a.b.SubscribeNew, r.serialize());

                      case 10:
                      case "end":
                        return _context113.stop();
                    }
                  }
                }, _callee113);
              }));
            }), y.workerMessenger.on(a.b.AmpSubscriptionState, function (e) {
              return n.a(_this27, void 0, void 0,
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee114() {
                var e, _t13, _ref12, _i23, _n8;

                return _regeneratorRuntime.wrap(function _callee114$(_context114) {
                  while (1) {
                    switch (_context114.prev = _context114.next) {
                      case 0:
                        b.a.debug("[Service Worker] Received AMP subscription state message.");
                        _context114.next = 3;
                        return self.registration.pushManager.getSubscription();

                      case 3:
                        e = _context114.sent;

                        if (!e) {
                          _context114.next = 16;
                          break;
                        }

                        _context114.next = 7;
                        return self.registration.pushManager.permissionState(e.options);

                      case 7:
                        _t13 = _context114.sent;
                        _context114.next = 10;
                        return p.a.getSubscription();

                      case 10:
                        _ref12 = _context114.sent;
                        _i23 = _ref12.optedOut;
                        _n8 = !!e && "granted" === _t13 && !0 !== _i23;
                        y.workerMessenger.broadcast(a.b.AmpSubscriptionState, _n8);
                        _context114.next = 17;
                        break;

                      case 16:
                        y.workerMessenger.broadcast(a.b.AmpSubscriptionState, !1);

                      case 17:
                      case "end":
                        return _context114.stop();
                    }
                  }
                }, _callee114);
              }));
            }), y.workerMessenger.on(a.b.AmpSubscribe, function () {
              return n.a(_this27, void 0, void 0,
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee115() {
                var e, t, i, n, r;
                return _regeneratorRuntime.wrap(function _callee115$(_context115) {
                  while (1) {
                    switch (_context115.prev = _context115.next) {
                      case 0:
                        b.a.debug("[Service Worker] Received AMP subscribe message.");
                        _context115.next = 3;
                        return y.getAppId();

                      case 3:
                        e = _context115.sent;
                        _context115.next = 6;
                        return m.a.getAppConfig({
                          appId: e
                        }, l.a.downloadServerAppConfig);

                      case 6:
                        t = _context115.sent;
                        i = new d.a(t);
                        _context115.next = 10;
                        return i.subscriptionManager.subscribe(0);

                      case 10:
                        n = _context115.sent;
                        _context115.next = 13;
                        return i.subscriptionManager.registerSubscription(n);

                      case 13:
                        r = _context115.sent;
                        y.workerMessenger.broadcast(a.b.AmpSubscribe, r.deviceId);

                      case 15:
                      case "end":
                        return _context115.stop();
                    }
                  }
                }, _callee115);
              }));
            }), y.workerMessenger.on(a.b.AmpUnsubscribe, function () {
              return n.a(_this27, void 0, void 0,
              /*#__PURE__*/
              _regeneratorRuntime.mark(function _callee116() {
                var e, t;
                return _regeneratorRuntime.wrap(function _callee116$(_context116) {
                  while (1) {
                    switch (_context116.prev = _context116.next) {
                      case 0:
                        b.a.debug("[Service Worker] Received AMP unsubscribe message.");
                        _context116.next = 3;
                        return y.getAppId();

                      case 3:
                        e = _context116.sent;
                        _context116.next = 6;
                        return m.a.getAppConfig({
                          appId: e
                        }, l.a.downloadServerAppConfig);

                      case 6:
                        t = _context116.sent;
                        _context116.next = 9;
                        return new d.a(t).subscriptionManager.unsubscribe(1);

                      case 9:
                        y.workerMessenger.broadcast(a.b.AmpUnsubscribe, null);

                      case 10:
                      case "end":
                        return _context116.stop();
                    }
                  }
                }, _callee116);
              }));
            });
          }
        }, {
          key: "onPushReceived",
          value: function onPushReceived(e) {
            b.a.debug("Called %conPushReceived(".concat(_JSON$stringify(e, null, 4), "):"), S.a.getConsoleStyle("code"), e), e.waitUntil(y.parseOrFetchNotifications(e).then(function (e) {
              var t = [];
              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = undefined;

              try {
                for (var _iterator8 = _getIterator(e), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                  var _i24 = _step8.value;
                  b.a.debug("Raw Notification from OneSignal:", _i24);

                  var _e26 = y.buildStructuredNotificationObject(_i24);

                  t.push(function (e) {
                    return y.displayNotification(e).then(function () {
                      return y.workerMessenger.broadcast(a.b.NotificationDisplayed, e)["catch"](function (e) {
                        return b.a.error(e);
                      });
                    }).then(function () {
                      return y.executeWebhooks("notification.displayed", e).then(function () {
                        return y.sendConfirmedDelivery(e);
                      })["catch"](function (e) {
                        return b.a.error(e);
                      });
                    });
                  }.bind(null, _e26));
                }
              } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                    _iterator8["return"]();
                  }
                } finally {
                  if (_didIteratorError8) {
                    throw _iteratorError8;
                  }
                }
              }

              return t.reduce(function (e, t) {
                return e.then(t);
              }, _Promise.resolve());
            })["catch"](function (e) {
              b.a.debug("Failed to display a notification:", e), y.UNSUBSCRIBED_FROM_NOTIFICATIONS && b.a.debug("Because we have just unsubscribed from notifications, we will not show anything.");
            }));
          }
        }, {
          key: "executeWebhooks",
          value: function executeWebhooks(e, t) {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee117() {
              var i, _ref13, n, r, o, s;

              return _regeneratorRuntime.wrap(function _callee117$(_context117) {
                while (1) {
                  switch (_context117.prev = _context117.next) {
                    case 0:
                      _context117.next = 2;
                      return p.a.get("Options", "webhooks.".concat(e));

                    case 2:
                      i = _context117.sent;

                      if (i) {
                        _context117.next = 5;
                        break;
                      }

                      return _context117.abrupt("return", null);

                    case 5:
                      _context117.next = 7;
                      return p.a.getSubscription();

                    case 7:
                      _ref13 = _context117.sent;
                      n = _ref13.deviceId;
                      _context117.next = 11;
                      return p.a.get("Options", "webhooks.cors");

                    case 11:
                      r = _context117.sent;
                      o = {
                        event: e,
                        id: t.id,
                        userId: n,
                        action: t.action,
                        buttons: t.buttons,
                        heading: t.heading,
                        content: t.content,
                        url: t.url,
                        icon: t.icon,
                        data: t.data
                      };
                      s = {
                        method: "post",
                        mode: "no-cors",
                        body: _JSON$stringify(o)
                      };
                      r && (s.mode = "cors", s.headers = {
                        "X-OneSignal-Event": e,
                        "Content-Type": "application/json"
                      });
                      b.a.debug("Executing ".concat(e, " webhook ").concat(r ? "with" : "without", " CORS %cPOST ").concat(i), S.a.getConsoleStyle("code"), ":", o);
                      _context117.next = 18;
                      return fetch(i, s);

                    case 18:
                      return _context117.abrupt("return", _context117.sent);

                    case 19:
                    case "end":
                      return _context117.stop();
                  }
                }
              }, _callee117);
            }));
          }
        }, {
          key: "sendConfirmedDelivery",
          value: function sendConfirmedDelivery(e) {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee118() {
              var t, _ref14, i, n;

              return _regeneratorRuntime.wrap(function _callee118$(_context118) {
                while (1) {
                  switch (_context118.prev = _context118.next) {
                    case 0:
                      if (e) {
                        _context118.next = 2;
                        break;
                      }

                      return _context118.abrupt("return", null);

                    case 2:
                      if (!("y" !== e.rr)) {
                        _context118.next = 4;
                        break;
                      }

                      return _context118.abrupt("return", null);

                    case 4:
                      _context118.next = 6;
                      return y.getAppId();

                    case 6:
                      t = _context118.sent;
                      _context118.next = 9;
                      return p.a.getSubscription();

                    case 9:
                      _ref14 = _context118.sent;
                      i = _ref14.deviceId;

                      if (!(!t || !e.id)) {
                        _context118.next = 13;
                        break;
                      }

                      return _context118.abrupt("return", null);

                    case 13:
                      n = {
                        player_id: i,
                        app_id: t
                      };
                      b.a.debug("Called %csendConfirmedDelivery(".concat(_JSON$stringify(e, null, 4), ")"), S.a.getConsoleStyle("code"));
                      _context118.next = 17;
                      return u.b.put("notifications/".concat(e.id, "/report_received"), n);

                    case 17:
                      return _context118.abrupt("return", _context118.sent);

                    case 18:
                    case "end":
                      return _context118.stop();
                  }
                }
              }, _callee118);
            }));
          }
        }, {
          key: "getActiveClients",
          value: function getActiveClients() {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee119() {
              var e, t, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _i25;

              return _regeneratorRuntime.wrap(function _callee119$(_context119) {
                while (1) {
                  switch (_context119.prev = _context119.next) {
                    case 0:
                      _context119.next = 2;
                      return self.clients.matchAll({
                        type: "window",
                        includeUncontrolled: !0
                      });

                    case 2:
                      e = _context119.sent;
                      t = [];
                      _iteratorNormalCompletion9 = true;
                      _didIteratorError9 = false;
                      _iteratorError9 = undefined;
                      _context119.prev = 7;
                      _iterator9 = _getIterator(e);

                    case 9:
                      if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
                        _context119.next = 19;
                        break;
                      }

                      _i25 = _step9.value;

                      if (!(_i25.frameType && "nested" === _i25.frameType)) {
                        _context119.next = 15;
                        break;
                      }

                      if (!(!S.a.contains(_i25.url, c.a.getOneSignalApiUrl().host) && !S.a.contains(_i25.url, ".os.tc"))) {
                        _context119.next = 14;
                        break;
                      }

                      return _context119.abrupt("continue", 16);

                    case 14:
                      _i25.isSubdomainIframe = !0;

                    case 15:
                      t.push(_i25);

                    case 16:
                      _iteratorNormalCompletion9 = true;
                      _context119.next = 9;
                      break;

                    case 19:
                      _context119.next = 25;
                      break;

                    case 21:
                      _context119.prev = 21;
                      _context119.t0 = _context119["catch"](7);
                      _didIteratorError9 = true;
                      _iteratorError9 = _context119.t0;

                    case 25:
                      _context119.prev = 25;
                      _context119.prev = 26;

                      if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                        _iterator9["return"]();
                      }

                    case 28:
                      _context119.prev = 28;

                      if (!_didIteratorError9) {
                        _context119.next = 31;
                        break;
                      }

                      throw _iteratorError9;

                    case 31:
                      return _context119.finish(28);

                    case 32:
                      return _context119.finish(25);

                    case 33:
                      return _context119.abrupt("return", t);

                    case 34:
                    case "end":
                      return _context119.stop();
                  }
                }
              }, _callee119, null, [[7, 21, 25, 33], [26,, 28, 32]]);
            }));
          }
        }, {
          key: "buildStructuredNotificationObject",
          value: function buildStructuredNotificationObject(e) {
            var t = {
              id: e.custom.i,
              heading: e.title,
              content: e.alert,
              data: e.custom.a,
              url: e.custom.u,
              rr: e.custom.rr,
              icon: e.icon,
              image: e.image,
              tag: e.tag,
              badge: e.badge,
              vibrate: e.vibrate
            };

            if (e.o) {
              t.buttons = [];
              var _iteratorNormalCompletion10 = true;
              var _didIteratorError10 = false;
              var _iteratorError10 = undefined;

              try {
                for (var _iterator10 = _getIterator(e.o), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                  var _i26 = _step10.value;
                  t.buttons.push({
                    action: _i26.i,
                    title: _i26.n,
                    icon: _i26.p,
                    url: _i26.u
                  });
                }
              } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                    _iterator10["return"]();
                  }
                } finally {
                  if (_didIteratorError10) {
                    throw _iteratorError10;
                  }
                }
              }
            }

            return S.a.trimUndefined(t);
          }
        }, {
          key: "ensureImageResourceHttps",
          value: function ensureImageResourceHttps(e) {
            if (!e) return null;

            try {
              var _t14 = new URL(e);

              return "localhost" === _t14.hostname || -1 !== _t14.hostname.indexOf("192.168") || "127.0.0.1" === _t14.hostname || "https:" === _t14.protocol ? e : "i0.wp.com" === _t14.hostname || "i1.wp.com" === _t14.hostname || "i2.wp.com" === _t14.hostname || "i3.wp.com" === _t14.hostname ? "https://".concat(_t14.hostname).concat(_t14.pathname) : "https://i0.wp.com/".concat(_t14.host + _t14.pathname);
            } catch (e) {}
          }
        }, {
          key: "ensureNotificationResourcesHttps",
          value: function ensureNotificationResourcesHttps(e) {
            if (e && (e.icon && (e.icon = y.ensureImageResourceHttps(e.icon)), e.image && (e.image = y.ensureImageResourceHttps(e.image)), e.buttons && e.buttons.length > 0)) {
              var _iteratorNormalCompletion11 = true;
              var _didIteratorError11 = false;
              var _iteratorError11 = undefined;

              try {
                for (var _iterator11 = _getIterator(e.buttons), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                  var _t15 = _step11.value;
                  _t15.icon && (_t15.icon = y.ensureImageResourceHttps(_t15.icon));
                }
              } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                    _iterator11["return"]();
                  }
                } finally {
                  if (_didIteratorError11) {
                    throw _iteratorError11;
                  }
                }
              }
            }
          }
        }, {
          key: "displayNotification",
          value: function displayNotification(e, t) {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee120() {
              var i, n, r, o, s, a;
              return _regeneratorRuntime.wrap(function _callee120$(_context120) {
                while (1) {
                  switch (_context120.prev = _context120.next) {
                    case 0:
                      b.a.debug("Called %cdisplayNotification(".concat(_JSON$stringify(e, null, 4), "):"), S.a.getConsoleStyle("code"), e);
                      _context120.next = 3;
                      return y._getTitle();

                    case 3:
                      i = _context120.sent;
                      _context120.next = 6;
                      return p.a.get("Options", "defaultIcon");

                    case 6:
                      n = _context120.sent;
                      _context120.next = 9;
                      return p.a.get("Options", "persistNotification");

                    case 9:
                      r = _context120.sent;
                      _context120.next = 12;
                      return y.getAppId();

                    case 12:
                      o = _context120.sent;
                      e.heading = e.heading ? e.heading : i, e.icon = e.icon ? e.icon : n || void 0;
                      s = {};
                      s.tag = e.tag || o, s.persistNotification = !1 !== r, t || (t = {}), e = _Object$assign({}, e, t), y.ensureNotificationResourcesHttps(e);
                      a = {
                        body: e.content,
                        icon: e.icon,
                        image: e.image,
                        data: e,
                        actions: e.buttons,
                        tag: s.tag,
                        requireInteraction: s.persistNotification,
                        renotify: !0,
                        badge: e.badge,
                        vibrate: e.vibrate
                      };
                      return _context120.abrupt("return", (a = y.fixPlatformSpecificDisplayIssues(a), self.registration.showNotification(e.heading, a)));

                    case 18:
                    case "end":
                      return _context120.stop();
                  }
                }
              }, _callee120);
            }));
          }
        }, {
          key: "fixPlatformSpecificDisplayIssues",
          value: function fixPlatformSpecificDisplayIssues(e) {
            var t = _Object$assign({}, e),
                i = v.a.redetectBrowserUserAgent();

            return i.chrome && i.mac && S.a.isVersionAtLeast(i.osversion, 10.15) ? t.requireInteraction = !1 : i.opera && i.mac && S.a.isVersionAtLeast(i.osversion, 10.14) && (t.requireInteraction = !1), t;
          }
        }, {
          key: "shouldOpenNotificationUrl",
          value: function shouldOpenNotificationUrl(e) {
            return "javascript:void(0);" !== e && "do_not_open" !== e && !S.a.contains(e, "_osp=do_not_open");
          }
        }, {
          key: "onNotificationClosed",
          value: function onNotificationClosed(e) {
            b.a.debug("Called %conNotificationClosed(".concat(_JSON$stringify(e, null, 4), "):"), S.a.getConsoleStyle("code"), e);
            var t = e.notification.data;
            y.workerMessenger.broadcast(a.b.NotificationDismissed, t)["catch"](function (e) {
              return b.a.error(e);
            }), e.waitUntil(y.executeWebhooks("notification.dismissed", t));
          }
        }, {
          key: "getNotificationUrlToOpen",
          value: function getNotificationUrlToOpen(e) {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee121() {
              var t, _ref15, i, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _i27;

              return _regeneratorRuntime.wrap(function _callee121$(_context121) {
                while (1) {
                  switch (_context121.prev = _context121.next) {
                    case 0:
                      t = self.registration.scope;
                      _context121.next = 3;
                      return p.a.getAppState();

                    case 3:
                      _ref15 = _context121.sent;
                      i = _ref15.defaultNotificationUrl;

                      if (!(i && (t = i), e.action)) {
                        _context121.next = 27;
                        break;
                      }

                      _iteratorNormalCompletion12 = true;
                      _didIteratorError12 = false;
                      _iteratorError12 = undefined;
                      _context121.prev = 9;

                      for (_iterator12 = _getIterator(e.buttons); !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                        _i27 = _step12.value;
                        _i27.action === e.action && _i27.url && "" !== _i27.url && (t = _i27.url);
                      }

                      _context121.next = 17;
                      break;

                    case 13:
                      _context121.prev = 13;
                      _context121.t0 = _context121["catch"](9);
                      _didIteratorError12 = true;
                      _iteratorError12 = _context121.t0;

                    case 17:
                      _context121.prev = 17;
                      _context121.prev = 18;

                      if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                        _iterator12["return"]();
                      }

                    case 20:
                      _context121.prev = 20;

                      if (!_didIteratorError12) {
                        _context121.next = 23;
                        break;
                      }

                      throw _iteratorError12;

                    case 23:
                      return _context121.finish(20);

                    case 24:
                      return _context121.finish(17);

                    case 25:
                      _context121.next = 28;
                      break;

                    case 27:
                      e.url && "" !== e.url && (t = e.url);

                    case 28:
                      return _context121.abrupt("return", t);

                    case 29:
                    case "end":
                      return _context121.stop();
                  }
                }
              }, _callee121, null, [[9, 13, 17, 25], [18,, 20, 24]]);
            }));
          }
        }, {
          key: "onNotificationClicked",
          value: function onNotificationClicked(e) {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee122() {
              var t, i, n, r, o, s, c, d, _ref16, u, _ref17, l, g, f, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, _e27, _r6, _e28, _o, _s2;

              return _regeneratorRuntime.wrap(function _callee122$(_context122) {
                while (1) {
                  switch (_context122.prev = _context122.next) {
                    case 0:
                      b.a.debug("Called %conNotificationClicked(".concat(_JSON$stringify(e, null, 4), "):"), S.a.getConsoleStyle("code"), e), e.notification.close();
                      t = e.notification.data;
                      e.action && (t.action = e.action);
                      i = "exact", n = "navigate";
                      _context122.next = 6;
                      return p.a.get("Options", "notificationClickHandlerMatch");

                    case 6:
                      r = _context122.sent;
                      r && (i = r);
                      _context122.next = 10;
                      return this.database.get("Options", "notificationClickHandlerAction");

                    case 10:
                      o = _context122.sent;
                      o && (n = o);
                      _context122.next = 14;
                      return y.getActiveClients();

                    case 14:
                      s = _context122.sent;
                      _context122.next = 17;
                      return y.getNotificationUrlToOpen(t);

                    case 17:
                      c = _context122.sent;
                      d = y.shouldOpenNotificationUrl(c);
                      _context122.next = 21;
                      return p.a.getAppConfig();

                    case 21:
                      _ref16 = _context122.sent;
                      u = _ref16.appId;
                      _context122.next = 25;
                      return p.a.getSubscription();

                    case 25:
                      _ref17 = _context122.sent;
                      l = _ref17.deviceId;
                      g = y.sendConvertedAPIRequests(u, l, t);
                      f = !1;
                      _iteratorNormalCompletion13 = true;
                      _didIteratorError13 = false;
                      _iteratorError13 = undefined;
                      _context122.prev = 32;
                      _iterator13 = _getIterator(s);

                    case 34:
                      if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
                        _context122.next = 126;
                        break;
                      }

                      _e27 = _step13.value;
                      _r6 = _e27.url;

                      if (!_e27.isSubdomainIframe) {
                        _context122.next = 47;
                        break;
                      }

                      _context122.next = 40;
                      return p.a.get("Options", "lastKnownHostUrl");

                    case 40:
                      _e28 = _context122.sent;
                      _r6 = _e28;
                      _context122.t0 = _e28;

                      if (_context122.t0) {
                        _context122.next = 47;
                        break;
                      }

                      _context122.next = 46;
                      return p.a.get("Options", "defaultUrl");

                    case 46:
                      _r6 = _context122.sent;

                    case 47:
                      _o = "";

                      try {
                        _o = new URL(_r6).origin;
                      } catch (e) {
                        b.a.error("Failed to get the HTTP site's actual origin:", e);
                      }

                      _s2 = null;

                      try {
                        _s2 = new URL(c).origin;
                      } catch (e) {}

                      if (!("exact" === i && _r6 === c || "origin" === i && _o === _s2)) {
                        _context122.next = 123;
                        break;
                      }

                      if (!(_e27.isSubdomainIframe && _r6 === c || !_e27.isSubdomainIframe && _e27.url === c || "focus" === n && _o === _s2)) {
                        _context122.next = 66;
                        break;
                      }

                      y.workerMessenger.unicast(a.b.NotificationClicked, t, _e27);
                      _context122.prev = 54;
                      _context122.t1 = _e27 instanceof WindowClient;

                      if (!_context122.t1) {
                        _context122.next = 59;
                        break;
                      }

                      _context122.next = 59;
                      return _e27.focus();

                    case 59:
                      _context122.next = 64;
                      break;

                    case 61:
                      _context122.prev = 61;
                      _context122.t2 = _context122["catch"](54);
                      b.a.error("Failed to focus:", _e27, _context122.t2);

                    case 64:
                      _context122.next = 121;
                      break;

                    case 66:
                      if (!_e27.isSubdomainIframe) {
                        _context122.next = 88;
                        break;
                      }

                      _context122.prev = 67;
                      b.a.debug("Client is subdomain iFrame. Attempting to focus() client.");
                      _context122.t3 = _e27 instanceof WindowClient;

                      if (!_context122.t3) {
                        _context122.next = 73;
                        break;
                      }

                      _context122.next = 73;
                      return _e27.focus();

                    case 73:
                      _context122.next = 78;
                      break;

                    case 75:
                      _context122.prev = 75;
                      _context122.t4 = _context122["catch"](67);
                      b.a.error("Failed to focus:", _e27, _context122.t4);

                    case 78:
                      if (!d) {
                        _context122.next = 85;
                        break;
                      }

                      b.a.debug("Redirecting HTTP site to ".concat(c, "."));
                      _context122.next = 82;
                      return p.a.put("NotificationOpened", {
                        url: c,
                        data: t,
                        timestamp: _Date$now()
                      });

                    case 82:
                      y.workerMessenger.unicast(a.b.RedirectPage, c, _e27);
                      _context122.next = 86;
                      break;

                    case 85:
                      b.a.debug("Not navigating because link is special.");

                    case 86:
                      _context122.next = 121;
                      break;

                    case 88:
                      if (!(_e27 instanceof WindowClient && _e27.navigate)) {
                        _context122.next = 117;
                        break;
                      }

                      _context122.prev = 89;
                      b.a.debug("Client is standard HTTPS site. Attempting to focus() client.");
                      _context122.t5 = _e27 instanceof WindowClient;

                      if (!_context122.t5) {
                        _context122.next = 95;
                        break;
                      }

                      _context122.next = 95;
                      return _e27.focus();

                    case 95:
                      _context122.next = 100;
                      break;

                    case 97:
                      _context122.prev = 97;
                      _context122.t6 = _context122["catch"](89);
                      b.a.error("Failed to focus:", _e27, _context122.t6);

                    case 100:
                      _context122.prev = 100;

                      if (!d) {
                        _context122.next = 109;
                        break;
                      }

                      b.a.debug("Redirecting HTTPS site to (".concat(c, ")."));
                      _context122.next = 105;
                      return p.a.put("NotificationOpened", {
                        url: c,
                        data: t,
                        timestamp: _Date$now()
                      });

                    case 105:
                      _context122.next = 107;
                      return _e27.navigate(c);

                    case 107:
                      _context122.next = 110;
                      break;

                    case 109:
                      b.a.debug("Not navigating because link is special.");

                    case 110:
                      _context122.next = 115;
                      break;

                    case 112:
                      _context122.prev = 112;
                      _context122.t7 = _context122["catch"](100);
                      b.a.error("Failed to navigate:", _e27, c, _context122.t7);

                    case 115:
                      _context122.next = 121;
                      break;

                    case 117:
                      _context122.next = 119;
                      return p.a.put("NotificationOpened", {
                        url: c,
                        data: t,
                        timestamp: _Date$now()
                      });

                    case 119:
                      _context122.next = 121;
                      return y.openUrl(c);

                    case 121:
                      f = !0;
                      return _context122.abrupt("break", 126);

                    case 123:
                      _iteratorNormalCompletion13 = true;
                      _context122.next = 34;
                      break;

                    case 126:
                      _context122.next = 132;
                      break;

                    case 128:
                      _context122.prev = 128;
                      _context122.t8 = _context122["catch"](32);
                      _didIteratorError13 = true;
                      _iteratorError13 = _context122.t8;

                    case 132:
                      _context122.prev = 132;
                      _context122.prev = 133;

                      if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                        _iterator13["return"]();
                      }

                    case 135:
                      _context122.prev = 135;

                      if (!_didIteratorError13) {
                        _context122.next = 138;
                        break;
                      }

                      throw _iteratorError13;

                    case 138:
                      return _context122.finish(135);

                    case 139:
                      return _context122.finish(132);

                    case 140:
                      _context122.t9 = d && !f;

                      if (!_context122.t9) {
                        _context122.next = 146;
                        break;
                      }

                      _context122.next = 144;
                      return p.a.put("NotificationOpened", {
                        url: c,
                        data: t,
                        timestamp: _Date$now()
                      });

                    case 144:
                      _context122.next = 146;
                      return y.openUrl(c);

                    case 146:
                      _context122.next = 148;
                      return g;

                    case 148:
                      return _context122.abrupt("return", _context122.sent);

                    case 149:
                    case "end":
                      return _context122.stop();
                  }
                }
              }, _callee122, this, [[32, 128, 132, 140], [54, 61], [67, 75], [89, 97], [100, 112], [133,, 135, 139]]);
            }));
          }
        }, {
          key: "sendConvertedAPIRequests",
          value: function sendConvertedAPIRequests(e, t, i) {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee123() {
              var n;
              return _regeneratorRuntime.wrap(function _callee123$(_context123) {
                while (1) {
                  switch (_context123.prev = _context123.next) {
                    case 0:
                      if (i.id) {
                        _context123.next = 2;
                        break;
                      }

                      return _context123.abrupt("return", void console.error("No notification id, skipping networks calls to report open!"));

                    case 2:
                      e ? n = u.b.put("notifications/".concat(i.id), {
                        app_id: e,
                        player_id: t,
                        opened: !0
                      }) : console.error("No app Id, skipping OneSignal API call for notification open!");
                      _context123.next = 5;
                      return y.executeWebhooks("notification.clicked", i);

                    case 5:
                      _context123.t0 = n;

                      if (!_context123.t0) {
                        _context123.next = 9;
                        break;
                      }

                      _context123.next = 9;
                      return n;

                    case 9:
                    case "end":
                      return _context123.stop();
                  }
                }
              }, _callee123);
            }));
          }
        }, {
          key: "openUrl",
          value: function openUrl(e) {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee124() {
              return _regeneratorRuntime.wrap(function _callee124$(_context124) {
                while (1) {
                  switch (_context124.prev = _context124.next) {
                    case 0:
                      b.a.debug("Opening notification URL:", e);
                      _context124.prev = 1;
                      _context124.next = 4;
                      return self.clients.openWindow(e);

                    case 4:
                      return _context124.abrupt("return", _context124.sent);

                    case 7:
                      _context124.prev = 7;
                      _context124.t0 = _context124["catch"](1);
                      return _context124.abrupt("return", (b.a.warn("Failed to open the URL '".concat(e, "':"), _context124.t0), null));

                    case 10:
                    case "end":
                      return _context124.stop();
                  }
                }
              }, _callee124, null, [[1, 7]]);
            }));
          }
        }, {
          key: "onServiceWorkerInstalled",
          value: function onServiceWorkerInstalled(e) {
            e.waitUntil(self.skipWaiting());
          }
        }, {
          key: "onServiceWorkerActivated",
          value: function onServiceWorkerActivated(e) {
            b.a.info("%cOneSignal Service Worker activated (version ".concat(s.a.version(), ", ").concat(c.a.getWindowEnv().toString(), " environment)."), S.a.getConsoleStyle("bold")), e.waitUntil(self.clients.claim());
          }
        }, {
          key: "onPushSubscriptionChange",
          value: function onPushSubscriptionChange(e) {
            return n.a(this, void 0, void 0,
            /*#__PURE__*/
            _regeneratorRuntime.mark(function _callee125() {
              var t, i, n, r, o, _ref18, _i28, _n9, s, _e29;

              return _regeneratorRuntime.wrap(function _callee125$(_context125) {
                while (1) {
                  switch (_context125.prev = _context125.next) {
                    case 0:
                      b.a.debug("Called %conPushSubscriptionChange(".concat(_JSON$stringify(e, null, 4), "):"), S.a.getConsoleStyle("code"), e);
                      _context125.next = 3;
                      return y.getAppId();

                    case 3:
                      t = _context125.sent;

                      if (t) {
                        _context125.next = 6;
                        break;
                      }

                      return _context125.abrupt("return");

                    case 6:
                      _context125.next = 8;
                      return m.a.getAppConfig({
                        appId: t
                      }, l.a.downloadServerAppConfig);

                    case 8:
                      i = _context125.sent;

                      if (i) {
                        _context125.next = 11;
                        break;
                      }

                      return _context125.abrupt("return");

                    case 11:
                      n = new d.a(i);
                      _context125.next = 14;
                      return p.a.getSubscription();

                    case 14:
                      _ref18 = _context125.sent;
                      _i28 = _ref18.deviceId;

                      if (!(!(r = !!_i28) && e.oldSubscription)) {
                        _context125.next = 26;
                        break;
                      }

                      _context125.next = 19;
                      return l.a.getUserIdFromSubscriptionIdentifier(t, h.a.prototype.getDeliveryPlatform(), e.oldSubscription.endpoint);

                    case 19:
                      _i28 = _context125.sent;
                      _context125.next = 22;
                      return p.a.getSubscription();

                    case 22:
                      _n9 = _context125.sent;
                      _n9.deviceId = _i28;
                      _context125.next = 26;
                      return p.a.setSubscription(_n9);

                    case 26:
                      r = !!_i28;
                      s = e.newSubscription;

                      if (!s) {
                        _context125.next = 32;
                        break;
                      }

                      o = g.a.setFromW3cSubscription(s);
                      _context125.next = 40;
                      break;

                    case 32:
                      _context125.prev = 32;
                      _context125.next = 35;
                      return n.subscriptionManager.subscribe(1);

                    case 35:
                      o = _context125.sent;
                      _context125.next = 40;
                      break;

                    case 38:
                      _context125.prev = 38;
                      _context125.t0 = _context125["catch"](32);

                    case 40:
                      if (!(r || !!o)) {
                        _context125.next = 47;
                        break;
                      }

                      _e29 = null;
                      "granted" !== Notification.permission ? _e29 = f.a.PermissionRevoked : o || (_e29 = f.a.PushSubscriptionRevoked);
                      _context125.next = 45;
                      return n.subscriptionManager.registerSubscription(o, _e29);

                    case 45:
                      _context125.next = 51;
                      break;

                    case 47:
                      _context125.next = 49;
                      return p.a.remove("Ids", "userId");

                    case 49:
                      _context125.next = 51;
                      return p.a.remove("Ids", "registrationId");

                    case 51:
                    case "end":
                      return _context125.stop();
                  }
                }
              }, _callee125, null, [[32, 38]]);
            }));
          }
        }, {
          key: "_getTitle",
          value: function _getTitle() {
            return new _Promise(function (e) {
              _Promise.all([p.a.get("Options", "defaultTitle"), p.a.get("Options", "pageTitle")]).then(function (_ref19) {
                var _ref20 = _slicedToArray(_ref19, 2),
                    t = _ref20[0],
                    i = _ref20[1];

                e(null !== t ? t : null != i ? i : "");
              });
            });
          }
        }, {
          key: "parseOrFetchNotifications",
          value: function parseOrFetchNotifications(e) {
            if (!e || !e.data) return _Promise.reject("Missing event.data on push payload!");
            return y.isValidPushPayload(e.data) ? (b.a.debug("Received a valid encrypted push payload."), _Promise.resolve([e.data.json()])) : _Promise.reject("Unexpected push message payload received: ".concat(e.data));
          }
        }, {
          key: "isValidPushPayload",
          value: function isValidPushPayload(e) {
            try {
              var _t16 = e.json();

              return !!(_t16 && _t16.custom && _t16.custom.i && v.a.isValidUuid(_t16.custom.i)) || (b.a.debug("isValidPushPayload: Valid JSON but missing notification UUID:", _t16), !1);
            } catch (e) {
              return b.a.debug("isValidPushPayload: Parsing to JSON failed with:", e), !1;
            }
          }
        }, {
          key: "VERSION",
          get: function get() {
            return s.a.version();
          }
        }, {
          key: "environment",
          get: function get() {
            return s.a;
          }
        }, {
          key: "log",
          get: function get() {
            return b.a;
          }
        }, {
          key: "database",
          get: function get() {
            return p.a;
          }
        }, {
          key: "browser",
          get: function get() {
            return o.a;
          }
        }, {
          key: "workerMessenger",
          get: function get() {
            return self.workerMessenger || (self.workerMessenger = new a.a(null)), self.workerMessenger;
          }
        }]);

        return y;
      }();

      "undefined" == typeof self && void 0 !== e ? e.OneSignalWorker = y : self.OneSignalWorker = y, "undefined" != typeof self && y.run();
    }).call(this, i(32));
  }, function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  }, function (e, t, i) {
    "use strict";

    i.r(t);
    var n = i(33);
    self.OneSignal = n.a;
  }]);
}

/***/ })

})
//# sourceMappingURL=index.js.d08c569159038fcc19fe.hot-update.js.map