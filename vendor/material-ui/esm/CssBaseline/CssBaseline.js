import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";

/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../styles';
import exactProp from '../utils/exactProp';

var styles = function styles(theme) {
  return {
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
        // Antialiasing.
        MozOsxFontSmoothing: 'grayscale',
        // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      body: {
        margin: 0,
        // Remove the margin in all browsers.
        backgroundColor: theme.palette.background.default,
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white
        }
      }
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */


var CssBaseline =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CssBaseline, _React$Component);

  function CssBaseline() {
    _classCallCheck(this, CssBaseline);

    return _possibleConstructorReturn(this, _getPrototypeOf(CssBaseline).apply(this, arguments));
  }

  _createClass(CssBaseline, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return CssBaseline;
}(React.Component);

CssBaseline.propTypes = {
  /**
   * You can wrap a node.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired
};
CssBaseline.propTypes = exactProp(CssBaseline.propTypes);
CssBaseline.defaultProps = {
  children: null
};
export default withStyles(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline);