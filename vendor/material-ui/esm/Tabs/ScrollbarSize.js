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
  width: 100,
  height: 100,
  position: 'absolute',
  top: -10000,
  overflow: 'scroll',
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

    _this.setMeasurements = function () {
      var nodeRef = _this.nodeRef;

      if (!nodeRef) {
        return;
      }

      _this.scrollbarHeight = nodeRef.offsetHeight - nodeRef.clientHeight;
      _this.scrollbarWidth = nodeRef.offsetWidth - nodeRef.clientWidth;
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = debounce(function () {
        var onChange = _this.props.onChange;
        var prevHeight = _this.scrollbarHeight;
        var prevWidth = _this.scrollbarWidth;

        _this.setMeasurements();

        if (prevHeight !== _this.scrollbarHeight || prevWidth !== _this.scrollbarWidth) {
          onChange({
            scrollbarHeight: _this.scrollbarHeight,
            scrollbarWidth: _this.scrollbarWidth
          });
        }
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  _createClass(ScrollbarSize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMeasurements();
      this.props.onLoad({
        scrollbarHeight: this.scrollbarHeight,
        scrollbarWidth: this.scrollbarWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onChange = this.props.onChange;
      return React.createElement("div", null, onChange ? React.createElement(EventListener, {
        target: "window",
        onResize: this.handleResize
      }) : null, React.createElement("div", {
        style: styles,
        ref: function ref(_ref) {
          _this2.nodeRef = _ref;
        }
      }));
    }
  }]);

  return ScrollbarSize;
}(React.Component);

ScrollbarSize.propTypes = {
  onChange: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired
};
export default ScrollbarSize;