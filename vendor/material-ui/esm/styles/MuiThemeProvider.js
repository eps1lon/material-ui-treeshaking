import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import createBroadcast from 'brcast';
import { exactProp, ponyfillGlobal } from '@material-ui/utils';
import themeListener, { CHANNEL } from './themeListener';
/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */

export var MuiThemeProviderOld =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MuiThemeProviderOld, _React$Component);

  // We are not using the React state in order to avoid unnecessary rerender.
  function MuiThemeProviderOld(props, context) {
    var _this;

    _classCallCheck(this, MuiThemeProviderOld);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MuiThemeProviderOld).call(this)); // Get the outer theme from the context, can be null

    _this.broadcast = createBroadcast();
    _this.outerTheme = themeListener.initial(context); // Propagate the theme so it can be accessed by the children

    _this.broadcast.setState(_this.mergeOuterLocalTheme(props.theme));

    return _this;
  }

  _createClass(MuiThemeProviderOld, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _ref;

      var _this$props = this.props,
          disableStylesGeneration = _this$props.disableStylesGeneration,
          sheetsCache = _this$props.sheetsCache,
          sheetsManager = _this$props.sheetsManager;
      var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

      if (disableStylesGeneration !== undefined) {
        muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
      }

      if (sheetsCache !== undefined) {
        muiThemeProviderOptions.sheetsCache = sheetsCache;
      }

      if (sheetsManager !== undefined) {
        muiThemeProviderOptions.sheetsManager = sheetsManager;
      }

      return _ref = {}, _defineProperty(_ref, CHANNEL, this.broadcast), _defineProperty(_ref, "muiThemeProviderOptions", muiThemeProviderOptions), _ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Subscribe on the outer theme, if present
      this.unsubscribeId = themeListener.subscribe(this.context, function (outerTheme) {
        _this2.outerTheme = outerTheme; // Forward the parent theme update to the children

        _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Propagate a local theme update
      if (this.props.theme !== prevProps.theme) {
        this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        themeListener.unsubscribe(this.context, this.unsubscribeId);
      }
    } // Simple merge between the outer theme and the local theme

  }, {
    key: "mergeOuterLocalTheme",
    value: function mergeOuterLocalTheme(localTheme) {
      // To support composition of theme.
      if (typeof localTheme === 'function') {
        warning(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
        return localTheme(this.outerTheme);
      }

      if (!this.outerTheme) {
        return localTheme;
      }

      return _extends({}, this.outerTheme, localTheme);
    }
  }, {
    key: "render",
    value: function render() {
      // TODO move the sheetsManager property to a different component.
      // warning(
      //   typeof window !== 'undefined' || this.props.sheetsManager,
      //   [
      //     'Material-UI: you need to provide a sheetsManager to the MuiThemeProvider ' +
      //       'when rendering on the server.',
      //     'If you do not, you might experience a memory leak',
      //   ].join('\n'),
      // );
      return this.props.children;
    }
  }]);

  return MuiThemeProviderOld;
}(React.Component);
MuiThemeProviderOld.propTypes = {
  /**
   * You can wrap a node.
   */
  children: PropTypes.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server side.
   * You can significantly speed up the traversal with this property.
   */
  disableStylesGeneration: PropTypes.bool,

  /**
   * @ignore
   *
   * In beta.
   */
  sheetsCache: PropTypes.object,

  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: PropTypes.object,

  /**
   * A theme object.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
};

if (process.env.NODE_ENV !== 'production') {
  MuiThemeProviderOld.propTypes = exactProp(MuiThemeProviderOld.propTypes);
}

MuiThemeProviderOld.childContextTypes = _extends({}, themeListener.contextTypes, {
  muiThemeProviderOptions: PropTypes.object
});
MuiThemeProviderOld.contextTypes = _extends({}, themeListener.contextTypes, {
  muiThemeProviderOptions: PropTypes.object
});
/* istanbul ignore if */

if (!ponyfillGlobal.__MUI_STYLES__) {
  ponyfillGlobal.__MUI_STYLES__ = {};
}

if (!ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider) {
  ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider = MuiThemeProviderOld;
}

export default ponyfillGlobal.__MUI_STYLES__.MuiThemeProvider;