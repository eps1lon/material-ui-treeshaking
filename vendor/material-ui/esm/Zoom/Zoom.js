import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
// @inheritedComponent Transition
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { duration } from '../styles/transitions';
import withTheme from '../styles/withTheme';
import { reflow, getTransitionProps } from '../transitions/utils';
var styles = {
  entering: {
    transform: 'scale(1)'
  },
  entered: {
    transform: 'scale(1)'
  }
};
/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](https://material-ui.com/demos/buttons/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Zoom =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Zoom, _React$Component);

  function Zoom() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Zoom);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Zoom)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleEnter = function (node) {
      var theme = _this.props.theme;
      reflow(node); // So the animation always start from the start.

      var transitionProps = getTransitionProps(_this.props, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
      node.style.transition = theme.transitions.create('transform', transitionProps);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    };

    _this.handleExit = function (node) {
      var theme = _this.props.theme;
      var transitionProps = getTransitionProps(_this.props, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
      node.style.transition = theme.transitions.create('transform', transitionProps);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    return _this;
  }

  _createClass(Zoom, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onEnter = _this$props.onEnter,
          onExit = _this$props.onExit,
          styleProp = _this$props.style,
          theme = _this$props.theme,
          other = _objectWithoutProperties(_this$props, ["children", "onEnter", "onExit", "style", "theme"]);

      var style = _extends({}, styleProp, React.isValidElement(children) ? children.props.style : {});

      return React.createElement(Transition, _extends({
        appear: true,
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), function (state, childProps) {
        return React.cloneElement(children, _extends({
          style: _extends({
            transform: 'scale(0)',
            willChange: 'transform'
          }, styles[state], style)
        }, childProps));
      });
    }
  }]);

  return Zoom;
}(React.Component);

Zoom.propTypes = {
  /**
   * A single child content element.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,

  /**
   * @ignore
   */
  onEnter: PropTypes.func,

  /**
   * @ignore
   */
  onExit: PropTypes.func,

  /**
   * @ignore
   */
  style: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
};
Zoom.defaultProps = {
  timeout: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
};
export default withTheme()(Zoom);