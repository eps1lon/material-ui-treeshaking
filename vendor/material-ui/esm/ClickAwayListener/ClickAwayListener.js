import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
// @inheritedComponent EventListener
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import ownerDocument from '../utils/ownerDocument';
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */

var ClickAwayListener =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClickAwayListener, _React$Component);

  function ClickAwayListener() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ClickAwayListener);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClickAwayListener)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.mounted = false;

    _this.handleClickAway = function (event) {
      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      } // IE 11 support, which trigger the handleClickAway even after the unbind


      if (!_this.mounted) {
        return;
      } // The child might render null.


      if (!_this.node) {
        return;
      }

      var doc = ownerDocument(_this.node);

      if (doc.documentElement && doc.documentElement.contains(event.target) && !_this.node.contains(event.target)) {
        _this.props.onClickAway(event);
      }
    };

    return _this;
  }

  _createClass(ClickAwayListener, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Finds the first child when a component returns a fragment.
      // https://github.com/facebook/react/blob/036ae3c6e2f056adffc31dfb78d1b6f0c63272f0/packages/react-dom/src/__tests__/ReactDOMFiber-test.js#L105
      this.node = ReactDOM.findDOMNode(this);
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          mouseEvent = _this$props.mouseEvent,
          touchEvent = _this$props.touchEvent,
          onClickAway = _this$props.onClickAway,
          other = _objectWithoutProperties(_this$props, ["children", "mouseEvent", "touchEvent", "onClickAway"]);

      var listenerProps = {};

      if (mouseEvent !== false) {
        listenerProps[mouseEvent] = this.handleClickAway;
      }

      if (touchEvent !== false) {
        listenerProps[touchEvent] = this.handleClickAway;
      }

      return React.createElement(React.Fragment, null, children, React.createElement(EventListener, _extends({
        target: "document"
      }, listenerProps, other)));
    }
  }]);

  return ClickAwayListener;
}(React.Component);

ClickAwayListener.propTypes = {
  /**
   * The wrapped element.
   */
  children: PropTypes.element.isRequired,

  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   */
  mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),

  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: PropTypes.func.isRequired,

  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   */
  touchEvent: PropTypes.oneOf(['onTouchStart', 'onTouchEnd', false])
};
ClickAwayListener.defaultProps = {
  mouseEvent: 'onMouseUp',
  touchEvent: 'onTouchEnd'
};
export default ClickAwayListener;