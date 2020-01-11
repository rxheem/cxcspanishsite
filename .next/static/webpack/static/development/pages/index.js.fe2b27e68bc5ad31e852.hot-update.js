webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-collapsible/dist/Collapsible.js":
/*!************************************************************!*\
  !*** ./node_modules/react-collapsible/dist/Collapsible.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapsible = function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible(props) {
    _classCallCheck(this, Collapsible);

    var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));

    _this.timeout = undefined;

    // Bind class methods
    _this.handleTriggerClick = _this.handleTriggerClick.bind(_this);
    _this.handleTransitionEnd = _this.handleTransitionEnd.bind(_this);
    _this.continueOpenCollapsible = _this.continueOpenCollapsible.bind(_this);
    _this.setInnerRef = _this.setInnerRef.bind(_this);

    // Defaults the dropdown to be closed
    if (props.open) {
      _this.state = {
        isClosed: false,
        shouldSwitchAutoOnNextCycle: false,
        height: 'auto',
        transition: 'none',
        hasBeenOpened: true,
        overflow: props.overflowWhenOpen,
        inTransition: false
      };
    } else {
      _this.state = {
        isClosed: true,
        shouldSwitchAutoOnNextCycle: false,
        height: 0,
        transition: 'height ' + props.transitionTime + 'ms ' + props.easing,
        hasBeenOpened: false,
        overflow: 'hidden',
        inTransition: false
      };
    }
    return _this;
  }

  _createClass(Collapsible, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.state.shouldOpenOnNextCycle) {
        this.continueOpenCollapsible();
      }

      if (prevState.height === 'auto' && this.state.shouldSwitchAutoOnNextCycle === true) {
        window.clearTimeout(this.timeout);
        this.timeout = window.setTimeout(function () {
          // Set small timeout to ensure a true re-render
          _this2.setState({
            height: 0,
            overflow: 'hidden',
            isClosed: true,
            shouldSwitchAutoOnNextCycle: false
          });
        }, 50);
      }

      // If there has been a change in the open prop (controlled by accordion)
      if (prevProps.open !== this.props.open) {
        if (this.props.open === true) {
          this.openCollapsible();
          this.props.onOpening();
        } else {
          this.closeCollapsible();
          this.props.onClosing();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.clearTimeout(this.timeout);
    }
  }, {
    key: 'closeCollapsible',
    value: function closeCollapsible() {
      this.setState({
        shouldSwitchAutoOnNextCycle: true,
        height: this.innerRef.scrollHeight,
        transition: 'height ' + (this.props.transitionCloseTime ? this.props.transitionCloseTime : this.props.transitionTime) + 'ms ' + this.props.easing,
        inTransition: true
      });
    }
  }, {
    key: 'openCollapsible',
    value: function openCollapsible() {
      this.setState({
        inTransition: true,
        shouldOpenOnNextCycle: true
      });
    }
  }, {
    key: 'continueOpenCollapsible',
    value: function continueOpenCollapsible() {
      this.setState({
        height: this.innerRef.scrollHeight,
        transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing,
        isClosed: false,
        hasBeenOpened: true,
        inTransition: true,
        shouldOpenOnNextCycle: false
      });
    }
  }, {
    key: 'handleTriggerClick',
    value: function handleTriggerClick(event) {
      if (this.props.triggerDisabled) {
        return;
      }

      event.preventDefault();

      if (this.props.handleTriggerClick) {
        this.props.handleTriggerClick(this.props.accordionPosition);
      } else {
        if (this.state.isClosed === true) {
          this.openCollapsible();
          this.props.onOpening();
        } else {
          this.closeCollapsible();
          this.props.onClosing();
        }
      }
    }
  }, {
    key: 'renderNonClickableTriggerElement',
    value: function renderNonClickableTriggerElement() {
      if (this.props.triggerSibling && typeof this.props.triggerSibling === 'string') {
        return _react2.default.createElement(
          'span',
          { className: this.props.classParentString + '__trigger-sibling' },
          this.props.triggerSibling
        );
      } else if (this.props.triggerSibling) {
        return _react2.default.createElement(this.props.triggerSibling, null);
      }

      return null;
    }
  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(e) {
      // only handle transitions that origin from the container of this component
      if (e.target !== this.innerRef) {
        return;
      }
      // Switch to height auto to make the container responsive
      if (!this.state.isClosed) {
        this.setState({ height: 'auto', overflow: this.props.overflowWhenOpen, inTransition: false });
        this.props.onOpen();
      } else {
        this.setState({ inTransition: false });
        this.props.onClose();
      }
    }
  }, {
    key: 'setInnerRef',
    value: function setInnerRef(ref) {
      this.innerRef = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var dropdownStyle = {
        height: this.state.height,
        WebkitTransition: this.state.transition,
        msTransition: this.state.transition,
        transition: this.state.transition,
        overflow: this.state.overflow
      };

      var openClass = this.state.isClosed ? 'is-closed' : 'is-open';
      var disabledClass = this.props.triggerDisabled ? 'is-disabled' : '';

      //If user wants different text when tray is open
      var trigger = this.state.isClosed === false && this.props.triggerWhenOpen !== undefined ? this.props.triggerWhenOpen : this.props.trigger;

      var ContentContainerElement = this.props.contentContainerTagName;

      // If user wants a trigger wrapping element different than 'span'
      var TriggerElement = this.props.triggerTagName;

      // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
      var children = this.props.lazyRender && !this.state.hasBeenOpened && this.state.isClosed && !this.state.inTransition ? null : this.props.children;

      // Construct CSS classes strings
      var triggerClassString = this.props.classParentString + '__trigger ' + openClass + ' ' + disabledClass + ' ' + (this.state.isClosed ? this.props.triggerClassName : this.props.triggerOpenedClassName);
      var parentClassString = this.props.classParentString + ' ' + (this.state.isClosed ? this.props.className : this.props.openedClassName);
      var outerClassString = this.props.classParentString + '__contentOuter ' + this.props.contentOuterClassName;
      var innerClassString = this.props.classParentString + '__contentInner ' + this.props.contentInnerClassName;

      return _react2.default.createElement(
        ContentContainerElement,
        _extends({ className: parentClassString.trim() }, this.props.containerElementProps),
        _react2.default.createElement(
          TriggerElement,
          {
            className: triggerClassString.trim(),
            onClick: this.handleTriggerClick,
            style: this.props.triggerStyle && this.props.triggerStyle,
            onKeyPress: function onKeyPress(event) {
              var key = event.key;

              if (key === ' ' || key === 'Enter') {
                _this3.handleTriggerClick(event);
              }
            },
            tabIndex: this.props.tabIndex && this.props.tabIndex
          },
          trigger
        ),
        this.renderNonClickableTriggerElement(),
        _react2.default.createElement(
          'div',
          {
            className: outerClassString.trim(),
            style: dropdownStyle,
            onTransitionEnd: this.handleTransitionEnd,
            ref: this.setInnerRef
          },
          _react2.default.createElement(
            'div',
            {
              className: innerClassString.trim()
            },
            children
          )
        )
      );
    }
  }]);

  return Collapsible;
}(_react.Component);

Collapsible.propTypes = {
  transitionTime: _propTypes2.default.number,
  transitionCloseTime: _propTypes2.default.number,
  triggerTagName: _propTypes2.default.string,
  easing: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  containerElementProps: _propTypes2.default.object,
  classParentString: _propTypes2.default.string,
  openedClassName: _propTypes2.default.string,
  triggerStyle: _propTypes2.default.object,
  triggerClassName: _propTypes2.default.string,
  triggerOpenedClassName: _propTypes2.default.string,
  contentOuterClassName: _propTypes2.default.string,
  contentInnerClassName: _propTypes2.default.string,
  accordionPosition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  handleTriggerClick: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onOpening: _propTypes2.default.func,
  onClosing: _propTypes2.default.func,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  triggerWhenOpen: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  triggerDisabled: _propTypes2.default.bool,
  lazyRender: _propTypes2.default.bool,
  overflowWhenOpen: _propTypes2.default.oneOf(['hidden', 'visible', 'auto', 'scroll', 'inherit', 'initial', 'unset']),
  triggerSibling: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  tabIndex: _propTypes2.default.number,
  contentContainerTagName: _propTypes2.default.string
};

Collapsible.defaultProps = {
  transitionTime: 400,
  transitionCloseTime: null,
  triggerTagName: 'span',
  easing: 'linear',
  open: false,
  classParentString: 'Collapsible',
  triggerDisabled: false,
  lazyRender: false,
  overflowWhenOpen: 'hidden',
  openedClassName: '',
  triggerStyle: null,
  triggerClassName: '',
  triggerOpenedClassName: '',
  contentOuterClassName: '',
  contentInnerClassName: '',
  className: '',
  triggerSibling: null,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onOpening: function onOpening() {},
  onClosing: function onClosing() {},
  tabIndex: null,
  contentContainerTagName: 'div'
};

exports.default = Collapsible;



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_HomeCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/HomeCarousel */ "./home/HomeCarousel.js");
/* harmony import */ var _home_Marketing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/Marketing */ "./home/Marketing.js");
/* harmony import */ var _home_MailingListSubscribe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/MailingListSubscribe */ "./home/MailingListSubscribe.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Home components



 // Layout



var Index = function Index(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_2___default.a, {
    trigger: "Start here"
  }, __jsx("p", null, "This is the collapsible content. It can be any element or React component you like."), __jsx("p", null, "It can even be another Collapsible component. Check out the next section!")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
    active: true
  }, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  })))), __jsx(_home_HomeCarousel__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("hr", null), __jsx(_home_Marketing__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.fe2b27e68bc5ad31e852.hot-update.js.map