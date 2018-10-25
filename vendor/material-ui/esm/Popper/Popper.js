import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PopperJS from 'popper.js';
import withTheme from '../styles/withTheme';
import Portal from '../Portal';

function flipPlacement(theme, placement) {
  if (theme.direction !== 'rtl') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
/**
 * Poppers rely on the 3rd party library [Popper.js](https://github.com/FezVrasta/popper.js) for positioning.
 */


var Popper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popper, _React$Component);

  function Popper(props) {
    var _this;

    _classCallCheck(this, Popper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popper).call(this));

    _this.handleOpen = function () {
      var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          modifiers = _this$props.modifiers,
          open = _this$props.open,
          placement = _this$props.placement,
          _this$props$popperOpt = _this$props.popperOptions,
          popperOptions = _this$props$popperOpt === void 0 ? {} : _this$props$popperOpt,
          theme = _this$props.theme,
          disablePortal = _this$props.disablePortal;
      var popperNode = ReactDOM.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));

      if (!popperNode || !anchorEl || !open) {
        return;
      }

      if (_this.popper) {
        _this.popper.destroy();

        _this.popper = null;
      }

      _this.popper = new PopperJS(getAnchorEl(anchorEl), popperNode, _extends({
        placement: flipPlacement(theme, placement)
      }, popperOptions, {
        modifiers: _extends({}, disablePortal ? {} : {
          // It's using scrollParent by default, we can use the viewport when using a portal.
          preventOverflow: {
            boundariesElement: 'window'
          }
        }, modifiers, popperOptions.modifiers),
        // We could have been using a custom modifier like react-popper is doing.
        // But it seems this is the best public API for this use case.
        onCreate: _this.handlePopperUpdate,
        onUpdate: _this.handlePopperUpdate
      }));
    };

    _this.handlePopperUpdate = function (data) {
      if (data.placement !== _this.state.placement) {
        _this.setState({
          placement: data.placement
        });
      }
    };

    _this.handleExited = function () {
      _this.setState({
        exited: true
      });

      _this.handleClose();
    };

    _this.handleClose = function () {
      if (!_this.popper) {
        return;
      }

      _this.popper.destroy();

      _this.popper = null;
    };

    _this.state = {
      exited: !props.open
    };
    return _this;
  }

  _createClass(Popper, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open && !this.props.open && !this.props.transition) {
        // Otherwise handleExited will call this.
        this.handleClose();
      } // Let's update the popper position.


      if (prevProps.open !== this.props.open || prevProps.anchorEl !== this.props.anchorEl || prevProps.popperOptions !== this.props.popperOptions || prevProps.modifiers !== this.props.modifiers || prevProps.disablePortal !== this.props.disablePortal || prevProps.placement !== this.props.placement) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          anchorEl = _this$props2.anchorEl,
          children = _this$props2.children,
          container = _this$props2.container,
          disablePortal = _this$props2.disablePortal,
          keepMounted = _this$props2.keepMounted,
          modifiers = _this$props2.modifiers,
          open = _this$props2.open,
          placementProps = _this$props2.placement,
          popperOptions = _this$props2.popperOptions,
          theme = _this$props2.theme,
          transition = _this$props2.transition,
          other = _objectWithoutProperties(_this$props2, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "theme", "transition"]);

      var _this$state = this.state,
          exited = _this$state.exited,
          placement = _this$state.placement;

      if (!keepMounted && !open && (!transition || exited)) {
        return null;
      }

      var childProps = {
        placement: placement || flipPlacement(theme, placementProps)
      };

      if (transition) {
        childProps.TransitionProps = {
          in: open,
          onExited: this.handleExited
        };
      }

      return React.createElement(Portal, {
        onRendered: this.handleOpen,
        disablePortal: disablePortal,
        container: container
      }, React.createElement("div", _extends({
        role: "tooltip",
        style: {
          // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
          position: 'absolute'
        }
      }, other), typeof children === 'function' ? children(childProps) : children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.open) {
        return {
          exited: false
        };
      }

      if (!nextProps.transition) {
        // Otherwise let handleExited take care of marking exited.
        return {
          exited: true
        };
      }

      return null;
    }
  }]);

  return Popper;
}(React.Component);

Popper.propTypes = {
  /**
   * This is the DOM element, or a function that returns the DOM element,
   * that may be used to set the position of the popover.
   * The return value will passed as the reference object of the Popper
   * instance.
   */
  anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Popper render function or node.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: PropTypes.bool,

  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   */
  keepMounted: PropTypes.bool,

  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object).
   */
  modifiers: PropTypes.object,

  /**
   * If `true`, the popper is visible.
   */
  open: PropTypes.bool.isRequired,

  /**
   * Popper placement.
   */
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Options provided to the [`popper.js`](https://github.com/FezVrasta/popper.js) instance.
   */
  popperOptions: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition: PropTypes.bool
};
Popper.defaultProps = {
  disablePortal: false,
  placement: 'bottom',
  transition: false
};
export default withTheme()(Popper);