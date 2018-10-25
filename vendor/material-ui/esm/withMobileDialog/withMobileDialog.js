import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import withWidth, { isWidthDown } from '../withWidth';
/**
 * Dialog will responsively be full screen *at or below* the given breakpoint
 * (defaults to 'sm' for mobile devices).
 * Notice that this Higher-order Component is incompatible with server side rendering.
 */

var withMobileDialog = function withMobileDialog() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$breakpoint = options.breakpoint,
        breakpoint = _options$breakpoint === void 0 ? 'sm' : _options$breakpoint;

    function WithMobileDialog(props) {
      return React.createElement(Component, _extends({
        fullScreen: isWidthDown(breakpoint, props.width)
      }, props));
    }

    WithMobileDialog.propTypes = {
      width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
    };
    return withWidth()(WithMobileDialog);
  };
};

export default withMobileDialog;