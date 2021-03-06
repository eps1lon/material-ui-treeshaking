import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.

import { getDisplayName } from '@material-ui/utils';
import hoistNonReactStatics from 'hoist-non-react-statics';
import withTheme from '../styles/withTheme';
import { keys as breakpointKeys } from '../styles/createBreakpoints';
import getThemeProps from '../styles/getThemeProps'; // By default, returns true if screen width is the same or greater than the given breakpoint.

export var isWidthUp = function isWidthUp(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return breakpointKeys.indexOf(breakpoint) <= breakpointKeys.indexOf(width);
  }

  return breakpointKeys.indexOf(breakpoint) < breakpointKeys.indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.

export var isWidthDown = function isWidthDown(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return breakpointKeys.indexOf(width) <= breakpointKeys.indexOf(breakpoint);
  }

  return breakpointKeys.indexOf(width) < breakpointKeys.indexOf(breakpoint);
};

var withWidth = function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withThemeOption = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$noSSR = options.noSSR,
        noSSR = _options$noSSR === void 0 ? false : _options$noSSR,
        initialWidthOption = options.initialWidth,
        _options$resizeInterv = options.resizeInterval,
        resizeInterval = _options$resizeInterv === void 0 ? 166 : _options$resizeInterv;

    var WithWidth =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WithWidth, _React$Component);

      function WithWidth(props) {
        var _this;

        _classCallCheck(this, WithWidth);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithWidth).call(this, props));
        _this.state = {
          width: noSSR ? _this.getWidth() : undefined
        };

        if (typeof window !== 'undefined') {
          _this.handleResize = debounce(function () {
            var width2 = _this.getWidth();

            if (width2 !== _this.state.width) {
              _this.setState({
                width: width2
              });
            }
          }, resizeInterval);
        }

        return _this;
      }

      _createClass(WithWidth, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var width = this.getWidth();

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.handleResize.clear();
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          var innerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.innerWidth;
          var breakpoints = this.props.theme.breakpoints;
          var width = null;
          /**
           * Start with the slowest value as low end devices often have a small screen.
           *
           * innerWidth |xs      sm      md      lg      xl
           *            |-------|-------|-------|-------|------>
           * width      |  xs   |  sm   |  md   |  lg   |  xl
           */

          var index = 1;

          while (width === null && index < breakpointKeys.length) {
            var currentWidth = breakpointKeys[index]; // @media are inclusive, so reproduce the behavior here.

            if (innerWidth < breakpoints.values[currentWidth]) {
              width = breakpointKeys[index - 1];
              break;
            }

            index += 1;
          }

          width = width || 'xl';
          return width;
        }
      }, {
        key: "render",
        value: function render() {
          var _getThemeProps = getThemeProps({
            theme: this.props.theme,
            name: 'MuiWithWidth',
            props: _extends({}, this.props)
          }),
              initialWidth = _getThemeProps.initialWidth,
              theme = _getThemeProps.theme,
              width = _getThemeProps.width,
              other = _objectWithoutProperties(_getThemeProps, ["initialWidth", "theme", "width"]);

          var more = _extends({
            width: width || this.state.width || initialWidth || initialWidthOption
          }, other); // When rendering the component on the server,
          // we have no idea about the client browser screen width.
          // In order to prevent blinks and help the reconciliation of the React tree
          // we are not rendering the child component.
          //
          // An alternative is to use the `initialWidth` property.


          if (more.width === undefined) {
            return null;
          }

          if (withThemeOption) {
            more.theme = theme;
          }

          return React.createElement(React.Fragment, null, React.createElement(Component, more), React.createElement(EventListener, {
            target: "window",
            onResize: this.handleResize
          }));
        }
      }]);

      return WithWidth;
    }(React.Component);

    WithWidth.propTypes = {
      /**
       * As `window.innerWidth` is unavailable on the server,
       * we default to rendering an empty component during the first mount.
       * In some situation, you might want to use an heuristic to approximate
       * the screen width of the client browser screen width.
       *
       * For instance, you could be using the user-agent or the client-hints.
       * https://caniuse.com/#search=client%20hint
       */
      initialWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

      /**
       * @ignore
       */
      theme: PropTypes.object.isRequired,

      /**
       * Bypass the width calculation logic.
       */
      width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    };

    if (process.env.NODE_ENV !== 'production') {
      WithWidth.displayName = "WithWidth(".concat(getDisplayName(Component), ")");
    }

    hoistNonReactStatics(WithWidth, Component);
    return withTheme()(WithWidth);
  };
};

export default withWidth;