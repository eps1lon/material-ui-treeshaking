import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { formControlState } from '../InputBase/InputBase';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      textAlign: 'left',
      marginTop: 8,
      lineHeight: '1em',
      minHeight: '1em',
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      margin: '8px 12px 0'
    },

    /* Styles applied to the root element if `focused={true}`. */
    focused: {},

    /* Styles applied to the root element if `filled={true}`. */
    filled: {},

    /* Styles applied to the root element if `required={true}`. */
    required: {}
  };
};

function FormHelperText(props, context) {
  var _classNames;

  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      required = props.required,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  var fcs = formControlState({
    props: props,
    context: context,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return React.createElement(Component, _extends({
    className: classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.contained, fcs.variant === 'filled' || fcs.variant === 'outlined'), _defineProperty(_classNames, classes.marginDense, fcs.margin === 'dense'), _defineProperty(_classNames, classes.disabled, fcs.disabled), _defineProperty(_classNames, classes.error, fcs.error), _defineProperty(_classNames, classes.filled, fcs.filled), _defineProperty(_classNames, classes.focused, fcs.focused), _defineProperty(_classNames, classes.required, fcs.required), _classNames), classNameProp)
  }, other));
}

FormHelperText.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: PropTypes.bool,

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: PropTypes.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense']),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
};
FormHelperText.defaultProps = {
  component: 'p'
};
FormHelperText.contextTypes = {
  muiFormControl: PropTypes.object
};
export default withStyles(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText);