import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import { exactProp } from '@material-ui/utils';
/**
 * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
 *
 * This component can be useful in a variety of situations:
 * - Escape hatch for broken dependencies not supporting SSR.
 * - Improve the time-to-first paint on the client by only rendering above the fold.
 * - Reduce the rendering time on the server.
 * - Under too heavy server load, you can turn on service degradation.
 */

var NoSsr =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NoSsr, _React$Component);

  function NoSsr() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NoSsr);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NoSsr)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.mounted = false;
    _this.state = {
      mounted: false
    };
    return _this;
  }

  _createClass(NoSsr, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.mounted = true;

      if (this.props.defer) {
        // Wondering why we use two RAFs? Check this video out:
        // https://www.youtube.com/watch?v=cCOL7MC4Pl0
        requestAnimationFrame(function () {
          // The browser should be about to render the DOM that React commited at this point.
          // We don't want to interrupt. Let's wait the next raf.
          requestAnimationFrame(function () {
            if (_this2.mounted) {
              _this2.setState({
                mounted: true
              });
            }
          });
        });
      } else {
        this.setState({
          mounted: true
        });
      }
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
          fallback = _this$props.fallback;
      return this.state.mounted ? children : fallback;
    }
  }]);

  return NoSsr;
}(React.Component);

NoSsr.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * If `true`, the component will not only prevent server side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   */
  defer: PropTypes.bool,

  /**
   * The fallback content to display.
   */
  fallback: PropTypes.node
};

if (process.env.NODE_ENV !== 'production') {
  NoSsr.propTypes = exactProp(NoSsr.propTypes);
}

NoSsr.defaultProps = {
  defer: false,
  fallback: null
};
export default NoSsr;