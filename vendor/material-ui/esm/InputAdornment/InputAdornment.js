import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import Typography from '../Typography';
import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `variant="filled"` */
  filled: {
    '&$positionStart': {
      marginTop: 16
    }
  },

  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },

  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  }
};

function InputAdornment(props) {
  var _classNames;

  var children = props.children,
      Component = props.component,
      classes = props.classes,
      className = props.className,
      disableTypography = props.disableTypography,
      position = props.position,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["children", "component", "classes", "className", "disableTypography", "position", "variant"]);

  return React.createElement(Component, _extends({
    className: classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.filled, variant === 'filled'), _defineProperty(_classNames, classes.positionStart, position === 'start'), _defineProperty(_classNames, classes.positionEnd, position === 'end'), _classNames), className)
  }, other), typeof children === 'string' && !disableTypography ? React.createElement(Typography, {
    color: "textSecondary"
  }, children) : children);
}

InputAdornment.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: PropTypes.node.isRequired,

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
  component: componentPropType,

  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: PropTypes.bool,

  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: PropTypes.oneOf(['start', 'end']),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
};
InputAdornment.defaultProps = {
  component: 'div',
  disableTypography: false
};
export default withStyles(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment);