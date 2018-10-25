import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: theme.mixins.gutters(),

    /* Styles applied to the root element if `variant="regular"`. */
    regular: theme.mixins.toolbar,

    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
      minHeight: 48
    }
  };
};

function Toolbar(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableGutters = props.disableGutters,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "disableGutters", "variant"]);

  var className = classNames(classes.root, classes[variant], _defineProperty({}, classes.gutters, !disableGutters), classNameProp);
  return React.createElement("div", _extends({
    className: className
  }, other), children);
}

Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
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
   * If `true`, disables gutter padding.
   */
  disableGutters: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['regular', 'dense'])
};
Toolbar.defaultProps = {
  disableGutters: false,
  variant: 'regular'
};
export default withStyles(styles, {
  name: 'MuiToolbar'
})(Toolbar);