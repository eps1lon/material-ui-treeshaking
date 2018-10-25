import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '../styles';
import { capitalize } from '../utils/helpers';
export var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var align = theme.direction === 'rtl' ? 'right' : 'left';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      pointerEvents: 'none',
      borderRadius: theme.shape.borderRadius,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: light ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
      // Match the Input Label
      transition: theme.transitions.create(["padding-".concat(align), 'border-color', 'border-width'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legend: {
      textAlign: 'left',
      padding: 0,
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      // Firefox workaround. Firefox will only obscure the
      // rendered height of the legend and, unlike other browsers,
      // will not push fieldset contents.
      '@supports (-moz-appearance:none)': {
        height: 2
      }
    },

    /* Styles applied to the root element if the control is focused. */
    focused: {
      borderColor: theme.palette.primary.main,
      borderWidth: 2
    },

    /* Styles applied to the root element if `error={true}`. */
    error: {
      borderColor: theme.palette.error.main
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
      borderColor: theme.palette.action.disabled
    }
  };
};
/**
 * @ignore - internal component.
 */

function NotchedOutline(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      focused = props.focused,
      labelWidthProp = props.labelWidth,
      notched = props.notched,
      style = props.style,
      theme = props.theme,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "disabled", "error", "focused", "labelWidth", "notched", "style", "theme"]);

  var align = theme.direction === 'rtl' ? 'right' : 'left';
  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0;
  return React.createElement("fieldset", _extends({
    "aria-hidden": true,
    style: _extends(_defineProperty({}, "padding".concat(capitalize(align)), 8 + (notched ? 0 : labelWidth / 2)), style),
    className: classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.focused, focused), _defineProperty(_classNames, classes.error, error), _defineProperty(_classNames, classes.disabled, disabled), _classNames), className)
  }, other), React.createElement("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }));
}

NotchedOutline.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the outline should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the outline should be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the outline should be displayed in a focused state.
   */
  focused: PropTypes.bool,

  /**
   * The width of the legend.
   */
  labelWidth: PropTypes.number.isRequired,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: PropTypes.bool.isRequired,

  /**
   * @ignore
   */
  style: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object
};
export default withStyles(styles, {
  name: 'MuiNotchedOutline',
  withTheme: true
})(NotchedOutline);