import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';
/**
 * @ignore - internal component.
 */

var Ripple =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Ripple, _React$Component);

  function Ripple() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Ripple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Ripple)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      visible: false,
      leaving: false
    };

    _this.handleEnter = function () {
      _this.setState({
        visible: true
      });
    };

    _this.handleExit = function () {
      _this.setState({
        leaving: true
      });
    };

    return _this;
  }

  _createClass(Ripple, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          pulsate = _this$props.pulsate,
          rippleX = _this$props.rippleX,
          rippleY = _this$props.rippleY,
          rippleSize = _this$props.rippleSize,
          other = _objectWithoutProperties(_this$props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);

      var _this$state = this.state,
          visible = _this$state.visible,
          leaving = _this$state.leaving;
      var rippleClassName = classNames(classes.ripple, (_classNames = {}, _defineProperty(_classNames, classes.rippleVisible, visible), _defineProperty(_classNames, classes.ripplePulsate, pulsate), _classNames), classNameProp);
      var rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };
      var childClassName = classNames(classes.child, (_classNames2 = {}, _defineProperty(_classNames2, classes.childLeaving, leaving), _defineProperty(_classNames2, classes.childPulsate, pulsate), _classNames2));
      return React.createElement(Transition, _extends({
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), React.createElement("span", {
        className: rippleClassName,
        style: rippleStyles
      }, React.createElement("span", {
        className: childClassName
      })));
    }
  }]);

  return Ripple;
}(React.Component);

Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes.number
};
Ripple.defaultProps = {
  pulsate: false
};
export default Ripple;