import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.

var styles = {
  width: 90,
  height: 90,
  position: 'absolute',
  top: -9000,
  overflow: 'scroll',
  // Support IE 11
  msOverflowStyle: 'scrollbar'
};
/**
 * @ignore - internal component.
 * The component is originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

var ScrollbarSize =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollbarSize, _React$Component);

  function ScrollbarSize() {
    var _this;

    _classCallCheck(this, ScrollbarSize);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollbarSize).call(this));

    _this.handleRef = function (ref) {
      _this.nodeRef = ref;
    };

    _this.setMeasurements = function () {
      var nodeRef = _this.nodeRef;

      if (!nodeRef) {
        return;
      }

      _this.scrollbarHeight = nodeRef.offsetHeight - nodeRef.clientHeight;
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = debounce(function () {
        var prevHeight = _this.scrollbarHeight;

        _this.setMeasurements();

        if (prevHeight !== _this.scrollbarHeight) {
          _this.props.onChange(_this.scrollbarHeight);
        }
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  _createClass(ScrollbarSize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMeasurements();
      this.props.onChange(this.scrollbarHeight);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(EventListener, {
        target: "window",
        onResize: this.handleResize
      }), React.createElement("div", {
        style: styles,
        ref: this.handleRef
      }));
    }
  }]);

  return ScrollbarSize;
}(React.Component);

ScrollbarSize.propTypes = {
  onChange: PropTypes.func.isRequired
};
export default ScrollbarSize;