import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import wrapDisplayName from 'recompose/wrapDisplayName';
import createMuiTheme from './createMuiTheme';
import themeListener from './themeListener';
var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = createMuiTheme();
  return defaultTheme;
} // Provide the theme object as a property to the input component.


var withTheme = function withTheme() {
  return function (Component) {
    var WithTheme =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WithTheme, _React$Component);

      function WithTheme(props, context) {
        var _this;

        _classCallCheck(this, WithTheme);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithTheme).call(this));
        _this.state = {
          // We use || as the function call is lazy evaluated.
          theme: themeListener.initial(context) || getDefaultTheme()
        };
        return _this;
      }

      _createClass(WithTheme, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribeId = themeListener.subscribe(this.context, function (theme) {
            _this2.setState({
              theme: theme
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.unsubscribeId !== null) {
            themeListener.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              innerRef = _this$props.innerRef,
              other = _objectWithoutProperties(_this$props, ["innerRef"]);

          return React.createElement(Component, _extends({
            theme: this.state.theme,
            ref: innerRef
          }, other));
        }
      }]);

      return WithTheme;
    }(React.Component);

    WithTheme.propTypes = {
      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    };
    WithTheme.contextTypes = themeListener.contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      WithTheme.displayName = wrapDisplayName(Component, 'WithTheme');
    }

    hoistNonReactStatics(WithTheme, Component);

    if (process.env.NODE_ENV !== 'production') {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };
};

export default withTheme;