import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import classNames from 'classnames';
import RootRef from '../RootRef';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import Grow from '../Grow';
import Popper from '../Popper';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the Popper component. */
    popper: {
      zIndex: theme.zIndex.tooltip,
      opacity: 0.9
    },

    /* Styles applied to the tooltip (label wrapper) element. */
    tooltip: {
      backgroundColor: theme.palette.grey[700],
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      padding: '4px 8px',
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(theme.typography.round(14 / 10), "em"),
      maxWidth: 300
    },

    /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
    touch: {
      padding: '8px 16px',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(theme.typography.round(16 / 14), "em")
    },

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
    tooltipPlacementLeft: _defineProperty({
      transformOrigin: 'right center',
      margin: '0 24px '
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
    tooltipPlacementRight: _defineProperty({
      transformOrigin: 'left center',
      margin: '0 24px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
    tooltipPlacementTop: _defineProperty({
      transformOrigin: 'center bottom',
      margin: '24px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
    tooltipPlacementBottom: _defineProperty({
      transformOrigin: 'center top',
      margin: '24px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    })
  };
};

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this));
    _this.ignoreNonTouchEvents = false;

    _this.onRootRef = function (ref) {
      _this.childrenRef = ref;
    };

    _this.handleFocus = function (event) {
      event.persist(); // The autoFocus of React might trigger the event before the componentDidMount.
      // We need to account for this eventuality.

      _this.focusTimer = setTimeout(function () {
        // We need to make sure the focus hasn't moved since the event was triggered.
        if (_this.childrenRef === document.activeElement) {
          _this.handleEnter(event);
        }
      }, 0);
      var childrenProps = _this.props.children.props;

      if (childrenProps.onFocus) {
        childrenProps.onFocus(event);
      }
    };

    _this.handleEnter = function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          enterDelay = _this$props.enterDelay;
      var childrenProps = children.props;

      if (event.type === 'mouseover' && childrenProps.onMouseOver) {
        childrenProps.onMouseOver(event);
      }

      if (_this.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      } // Remove the title ahead of time.
      // We don't want to wait for the next render commit.
      // We would risk displaying two tooltips at the same time (native + this one).


      _this.childrenRef.setAttribute('title', '');

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);

      if (enterDelay) {
        event.persist();
        _this.enterTimer = setTimeout(function () {
          _this.handleOpen(event);
        }, enterDelay);
      } else {
        _this.handleOpen(event);
      }
    };

    _this.handleOpen = function (event) {
      // The mouseover event will trigger for every nested element in the tooltip.
      // We can skip rerendering when the tooltip is already open.
      // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
      if (!_this.isControlled && !_this.state.open) {
        _this.setState({
          open: true
        });
      }

      if (_this.props.onOpen) {
        _this.props.onOpen(event);
      }
    };

    _this.handleLeave = function (event) {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          leaveDelay = _this$props2.leaveDelay;
      var childrenProps = children.props;

      if (event.type === 'blur' && childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }

      if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);

      if (leaveDelay) {
        event.persist();
        _this.leaveTimer = setTimeout(function () {
          _this.handleClose(event);
        }, leaveDelay);
      } else {
        _this.handleClose(event);
      }
    };

    _this.handleClose = function (event) {
      if (!_this.isControlled) {
        _this.setState({
          open: false
        });
      }

      if (_this.props.onClose) {
        _this.props.onClose(event);
      }

      clearTimeout(_this.closeTimer);
      _this.closeTimer = setTimeout(function () {
        _this.ignoreNonTouchEvents = false;
      }, _this.props.theme.transitions.duration.shortest);
    };

    _this.handleTouchStart = function (event) {
      _this.ignoreNonTouchEvents = true;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          enterTouchDelay = _this$props3.enterTouchDelay;

      if (children.props.onTouchStart) {
        children.props.onTouchStart(event);
      }

      clearTimeout(_this.leaveTimer);
      clearTimeout(_this.closeTimer);
      clearTimeout(_this.touchTimer);
      event.persist();
      _this.touchTimer = setTimeout(function () {
        _this.handleEnter(event);
      }, enterTouchDelay);
    };

    _this.handleTouchEnd = function (event) {
      var _this$props4 = _this.props,
          children = _this$props4.children,
          leaveTouchDelay = _this$props4.leaveTouchDelay;

      if (children.props.onTouchEnd) {
        children.props.onTouchEnd(event);
      }

      clearTimeout(_this.touchTimer);
      clearTimeout(_this.leaveTimer);
      event.persist();
      _this.leaveTimer = setTimeout(function () {
        _this.handleClose(event);
      }, leaveTouchDelay);
    };

    _this.isControlled = props.open != null;
    _this.state = {
      open: null
    };

    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.open = false;
    }

    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      warning(!this.childrenRef.disabled || this.childrenRef.disabled && this.props.title === '' || this.childrenRef.tagName.toLowerCase() !== 'button', ['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Place a `div` container on top of the element.'].join('\n')); // Fallback to this default id when possible.
      // Use the random value for client side rendering only.
      // We can't use it server side.

      this.defaultId = "mui-tooltip-".concat(Math.round(Math.random() * 1e5)); // Rerender with this.defaultId and this.childrenRef.

      if (this.props.open) {
        this.forceUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.closeTimer);
      clearTimeout(this.enterTimer);
      clearTimeout(this.focusTimer);
      clearTimeout(this.leaveTimer);
      clearTimeout(this.touchTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          children = _this$props5.children,
          classes = _this$props5.classes,
          disableFocusListener = _this$props5.disableFocusListener,
          disableHoverListener = _this$props5.disableHoverListener,
          disableTouchListener = _this$props5.disableTouchListener,
          enterDelay = _this$props5.enterDelay,
          enterTouchDelay = _this$props5.enterTouchDelay,
          id = _this$props5.id,
          interactive = _this$props5.interactive,
          leaveDelay = _this$props5.leaveDelay,
          leaveTouchDelay = _this$props5.leaveTouchDelay,
          onClose = _this$props5.onClose,
          onOpen = _this$props5.onOpen,
          openProp = _this$props5.open,
          placement = _this$props5.placement,
          PopperProps = _this$props5.PopperProps,
          theme = _this$props5.theme,
          title = _this$props5.title,
          TransitionComponent = _this$props5.TransitionComponent,
          TransitionProps = _this$props5.TransitionProps,
          other = _objectWithoutProperties(_this$props5, ["children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperProps", "theme", "title", "TransitionComponent", "TransitionProps"]);

      var open = this.isControlled ? openProp : this.state.open; // There is no point in displaying an empty tooltip.

      if (title === '') {
        open = false;
      } // For accessibility and SEO concerns, we render the title to the DOM node when
      // the tooltip is hidden. However, we have made a tradeoff when
      // `disableHoverListener` is set. This title logic is disabled.
      // It's allowing us to keep the implementation size minimal.
      // We are open to change the tradeoff.


      var shouldShowNativeTitle = !open && !disableHoverListener;

      var childrenProps = _extends({
        'aria-describedby': open ? id || this.defaultId : null,
        title: shouldShowNativeTitle && typeof title === 'string' ? title : null
      }, other, children.props, {
        className: classNames(other.className, children.props.className)
      });

      if (!disableTouchListener) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableHoverListener) {
        childrenProps.onMouseOver = this.handleEnter;
        childrenProps.onMouseLeave = this.handleLeave;
      }

      if (!disableFocusListener) {
        childrenProps.onFocus = this.handleFocus;
        childrenProps.onBlur = this.handleLeave;
      }

      var interactiveWrapperListeners = interactive ? {
        onMouseOver: childrenProps.onMouseOver,
        onMouseLeave: childrenProps.onMouseLeave,
        onFocus: childrenProps.onFocus,
        onBlur: childrenProps.onBlur
      } : {};
      warning(!children.props.title, ['Material-UI: you have provided a `title` property to the child of <Tooltip />.', "Remove this title property `".concat(children.props.title, "` or the Tooltip component.")].join('\n'));
      return React.createElement(React.Fragment, null, React.createElement(RootRef, {
        rootRef: this.onRootRef
      }, React.cloneElement(children, childrenProps)), React.createElement(Popper, _extends({
        className: classes.popper,
        placement: placement,
        anchorEl: this.childrenRef,
        open: open,
        id: childrenProps['aria-describedby'],
        transition: true
      }, interactiveWrapperListeners, PopperProps), function (_ref) {
        var placementInner = _ref.placement,
            TransitionPropsInner = _ref.TransitionProps;
        return React.createElement(TransitionComponent, _extends({
          timeout: theme.transitions.duration.shorter
        }, TransitionPropsInner, TransitionProps), React.createElement("div", {
          className: classNames(classes.tooltip, _defineProperty({}, classes.touch, _this2.ignoreNonTouchEvents), classes["tooltipPlacement".concat(capitalize(placementInner.split('-')[0]))])
        }, title));
      }));
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip.propTypes = {
  /**
   * Tooltip reference element.
   */
  children: PropTypes.element.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * Do not respond to focus events.
   */
  disableFocusListener: PropTypes.bool,

  /**
   * Do not respond to hover events.
   */
  disableHoverListener: PropTypes.bool,

  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: PropTypes.bool,

  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: PropTypes.number,

  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: PropTypes.number,

  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * This property is used with aria-describedby to solve the accessibility issue.
   * If you don't provide this property. It falls back to a randomly generated id.
   */
  id: PropTypes.string,

  /**
   * Makes a tooltip interactive, i.e. will not close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   */
  interactive: PropTypes.bool,

  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: PropTypes.number,

  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: PropTypes.number,

  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: PropTypes.func,

  /**
   * If `true`, the tooltip is shown.
   */
  open: PropTypes.bool,

  /**
   * Tooltip placement.
   */
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Properties applied to the [`Popper`](/api/popper/) element.
   */
  PopperProps: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: PropTypes.node.isRequired,

  /**
   * Transition component.
   */
  TransitionComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: PropTypes.object
};
Tooltip.defaultProps = {
  disableFocusListener: false,
  disableHoverListener: false,
  disableTouchListener: false,
  enterDelay: 0,
  enterTouchDelay: 1000,
  interactive: false,
  leaveDelay: 0,
  leaveTouchDelay: 1500,
  placement: 'bottom',
  TransitionComponent: Grow
};
export default withStyles(styles, {
  name: 'MuiTooltip',
  withTheme: true
})(Tooltip);