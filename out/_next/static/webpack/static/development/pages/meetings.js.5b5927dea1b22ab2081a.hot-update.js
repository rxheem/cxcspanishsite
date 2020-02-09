webpackHotUpdate("static/development/pages/meetings.js",{

/***/ "./node_modules/react-countdown/dist/index.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-countdown/dist/index.es.js ***!
  \*******************************************************/
/*! exports provided: default, calcTimeDelta, formatTimeDelta, zeroPad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTimeDelta", function() { return calcTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeDelta", function() { return formatTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroPad", function() { return zeroPad; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function zeroPad(value) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var strValue = String(value);
  if (length === 0) return strValue;
  var match = strValue.match(/(.*?)([0-9]+)(.*)/);
  var prefix = match ? match[1] : '';
  var suffix = match ? match[3] : '';
  var strNo = match ? match[2] : strValue;
  var paddedNo = strNo.length >= length ? strNo : (_toConsumableArray(Array(length)).map(function () {
    return '0';
  }).join('') + strNo).slice(length * -1);
  return "".concat(prefix).concat(paddedNo).concat(suffix);
}
var timeDeltaFormatOptionsDefaults = {
  daysInHours: false,
  zeroPadTime: 2
};
function calcTimeDelta(date) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$now = _ref.now,
      now = _ref$now === void 0 ? Date.now : _ref$now,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? 0 : _ref$precision,
      _ref$controlled = _ref.controlled,
      controlled = _ref$controlled === void 0 ? false : _ref$controlled,
      _ref$offsetTime = _ref.offsetTime,
      offsetTime = _ref$offsetTime === void 0 ? 0 : _ref$offsetTime;

  var startTimestamp;

  if (typeof date === 'string') {
    startTimestamp = new Date(date).getTime();
  } else if (date instanceof Date) {
    startTimestamp = date.getTime();
  } else {
    startTimestamp = date;
  }

  if (!controlled) {
    startTimestamp += offsetTime;
  }

  var total = Math.round(parseFloat((Math.max(0, controlled ? startTimestamp : startTimestamp - now()) / 1000).toFixed(Math.max(0, Math.min(20, precision)))) * 1000);
  var seconds = total / 1000;
  return {
    total: total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor(seconds / 3600 % 24),
    minutes: Math.floor(seconds / 60 % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number((seconds % 1 * 1000).toFixed()),
    completed: total <= 0
  };
}
function formatTimeDelta(delta, options) {
  var days = delta.days,
      hours = delta.hours,
      minutes = delta.minutes,
      seconds = delta.seconds;

  var _Object$assign = Object.assign({}, timeDeltaFormatOptionsDefaults, options),
      daysInHours = _Object$assign.daysInHours,
      zeroPadTime = _Object$assign.zeroPadTime,
      _Object$assign$zeroPa = _Object$assign.zeroPadDays,
      zeroPadDays = _Object$assign$zeroPa === void 0 ? zeroPadTime : _Object$assign$zeroPa;

  var formattedHours = daysInHours ? zeroPad(hours + days * 24, zeroPadTime) : zeroPad(hours, Math.min(2, zeroPadTime));
  return {
    days: daysInHours ? '' : zeroPad(days, zeroPadDays),
    hours: formattedHours,
    minutes: zeroPad(minutes, Math.min(2, zeroPadTime)),
    seconds: zeroPad(seconds, Math.min(2, zeroPadTime))
  };
}

var Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  function Countdown() {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown).apply(this, arguments));
    _this.state = {
      count: _this.props.count || 3
    };

    _this.startCountdown = function () {
      _this.interval = window.setInterval(function () {
        var count = _this.state.count - 1;

        if (count === 0) {
          _this.stopCountdown();

          _this.props.onComplete && _this.props.onComplete();
        } else {
          _this.setState(function (prevState) {
            return {
              count: prevState.count - 1
            };
          });
        }
      }, 1000);
    };

    _this.stopCountdown = function () {
      clearInterval(_this.interval);
    };

    _this.addTime = function (seconds) {
      _this.stopCountdown();

      _this.setState(function (prevState) {
        return {
          count: prevState.count + seconds
        };
      }, _this.startCountdown);
    };

    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCountdown();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(this.props.children, {
        count: this.state.count
      }) : null;
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
Countdown.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var Countdown$1 = function (_React$Component) {
  _inherits(Countdown$1, _React$Component);

  function Countdown$1(props) {
    var _this;

    _classCallCheck(this, Countdown$1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown$1).call(this, props));
    _this.mounted = false;
    _this.legacyMode = false;
    _this.legacyCountdownRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

    _this.tick = function () {
      var onTick = _this.props.onTick;

      var timeDelta = _this.calcTimeDelta();

      _this.setTimeDeltaState(timeDelta);

      if (onTick && timeDelta.total > 0) {
        onTick(timeDelta);
      }
    };

    _this.start = function () {
      _this.setState(function (_ref) {
        var offsetStart = _ref.offsetStart,
            offsetTime = _ref.offsetTime;
        return {
          offsetStart: 0,
          offsetTime: offsetTime + (offsetStart ? Date.now() - offsetStart : 0)
        };
      }, function () {
        var timeDelta = _this.calcTimeDelta();

        _this.setTimeDeltaState(timeDelta);

        _this.props.onStart && _this.props.onStart(timeDelta);

        if (!_this.props.controlled) {
          _this.clearInterval();

          _this.interval = window.setInterval(_this.tick, _this.props.intervalDelay);
        }
      });
    };

    _this.pause = function () {
      _this.clearInterval();

      _this.setState({
        offsetStart: _this.calcOffsetStart()
      }, function () {
        var timeDelta = _this.calcTimeDelta();

        _this.setTimeDeltaState(timeDelta);

        _this.props.onPause && _this.props.onPause(timeDelta);
      });
    };

    _this.isPaused = function () {
      return _this.state.offsetStart > 0;
    };

    _this.isCompleted = function () {
      return _this.state.timeDelta.completed;
    };

    if (props.date) {
      _this.state = {
        timeDelta: _this.calcTimeDelta(),
        offsetStart: props.autoStart ? 0 : _this.calcOffsetStart(),
        offsetTime: 0
      };
    } else {
      _this.legacyMode = true;
    }

    return _this;
  }

  _createClass(Countdown$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = true;
      this.props.autoStart && this.start();
      this.props.onMount && this.props.onMount(this.calcTimeDelta());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.legacyMode) {
        return;
      }

      if (!this.shallowCompareProps(this.props, prevProps)) {
        this.setTimeDeltaState(this.calcTimeDelta());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = false;
      this.clearInterval();
    }
  }, {
    key: "calcTimeDelta",
    value: function calcTimeDelta$1() {
      var _this$props = this.props,
          date = _this$props.date,
          now = _this$props.now,
          precision = _this$props.precision,
          controlled = _this$props.controlled;
      return calcTimeDelta(date, {
        now: now,
        precision: precision,
        controlled: controlled,
        offsetTime: this.state ? this.state.offsetTime : 0
      });
    }
  }, {
    key: "calcOffsetStart",
    value: function calcOffsetStart() {
      return Date.now();
    }
  }, {
    key: "addTime",
    value: function addTime(seconds) {
      this.legacyCountdownRef.current.addTime(seconds);
    }
  }, {
    key: "clearInterval",
    value: function clearInterval() {
      window.clearInterval(this.interval);
    }
  }, {
    key: "shallowCompareProps",
    value: function shallowCompareProps(propsA, propsB) {
      var keysA = Object.keys(propsA);
      return keysA.length === Object.keys(propsB).length && !keysA.some(function (keyA) {
        var valueA = propsA[keyA];
        var valueB = propsB[keyA];
        return !propsB.hasOwnProperty(keyA) || !(valueA === valueB || valueA !== valueA && valueB !== valueB);
      });
    }
  }, {
    key: "setTimeDeltaState",
    value: function setTimeDeltaState(timeDelta) {
      var _this2 = this;

      var callback;

      if (!this.state.timeDelta.completed && timeDelta.completed) {
        this.clearInterval();

        callback = function callback() {
          return _this2.props.onComplete && _this2.props.onComplete(timeDelta);
        };
      }

      if (this.mounted) {
        return this.setState({
          timeDelta: timeDelta
        }, callback);
      }
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return this.api = this.api || {
        start: this.start,
        pause: this.pause,
        isPaused: this.isPaused,
        isCompleted: this.isCompleted
      };
    }
  }, {
    key: "getRenderProps",
    value: function getRenderProps() {
      var _this$props2 = this.props,
          daysInHours = _this$props2.daysInHours,
          zeroPadTime = _this$props2.zeroPadTime,
          zeroPadDays = _this$props2.zeroPadDays;
      var timeDelta = this.state.timeDelta;
      return Object.assign({}, timeDelta, {
        api: this.getApi(),
        props: this.props,
        formatted: formatTimeDelta(timeDelta, {
          daysInHours: daysInHours,
          zeroPadTime: zeroPadTime,
          zeroPadDays: zeroPadDays
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.legacyMode) {
        var _this$props3 = this.props,
            count = _this$props3.count,
            _children = _this$props3.children,
            onComplete = _this$props3.onComplete;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Countdown, {
          ref: this.legacyCountdownRef,
          count: count,
          onComplete: onComplete
        }, _children);
      }

      var _this$props4 = this.props,
          children = _this$props4.children,
          renderer = _this$props4.renderer;
      var renderProps = this.getRenderProps();

      if (renderer) {
        return renderer(renderProps);
      }

      if (children && this.state.timeDelta.completed) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
          countdown: renderProps
        });
      }

      var _renderProps$formatte = renderProps.formatted,
          days = _renderProps$formatte.days,
          hours = _renderProps$formatte.hours,
          minutes = _renderProps$formatte.minutes,
          seconds = _renderProps$formatte.seconds;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, days, days ? ':' : '', hours, ":", minutes, ":", seconds);
    }
  }]);

  return Countdown$1;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
Countdown$1.defaultProps = Object.assign({}, timeDeltaFormatOptionsDefaults, {
  controlled: false,
  intervalDelay: 1000,
  precision: 0,
  autoStart: true
});
Countdown$1.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  daysInHours: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  zeroPadTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  zeroPadDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  controlled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  autoStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  renderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  now: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown$1);



/***/ }),

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // Common


 // Layout


var opts = {
  height: "300px",
  width: "100%",
  playerVars: {
    autoplay: 0
  }
};

var Meetings = function Meetings(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, "Meetings")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 12,
    md: 8,
    lg: 8
  }, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    style: {
      width: "100%"
    },
    src: "http://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2016/06/The-future-of-video-conferencing-1-1.png"
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Online Group Meetings"), __jsx("br", null), __jsx("p", null)), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null)), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Upcoming Meetings"), __jsx("br", null), __jsx("p", null)), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["CardFooter"], null)), __jsx("br", null)), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    md: 4,
    lg: 4
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
//# sourceMappingURL=meetings.js.5b5927dea1b22ab2081a.hot-update.js.map