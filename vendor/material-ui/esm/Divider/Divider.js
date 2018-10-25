import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { fade } from '../styles/colorManipulator';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },

    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      marginLeft: 72
    },

    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: fade(theme.palette.divider, 0.08)
    }
  };
};

function Divider(props) {
  var _classNames;

  var absolute = props.absolute,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      inset = props.inset,
      light = props.light,
      other = _objectWithoutProperties(props, ["absolute", "classes", "className", "component", "inset", "light"]);

  var className = classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.absolute, absolute), _defineProperty(_classNames, classes.inset, inset), _defineProperty(_classNames, classes.light, light), _classNames), classNameProp);
  return React.createElement(Component, _extends({
    className: className
  }, other));
}

Divider.propTypes = {
  absolute: PropTypes.bool,

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
   * If `true`, the divider will be indented.
   */
  inset: PropTypes.bool,

  /**
   * If `true`, the divider will have a lighter color.
   */
  light: PropTypes.bool
};
Divider.defaultProps = {
  absolute: false,
  component: 'hr',
  inset: false,
  light: false
};
export default withStyles(styles, {
  name: 'MuiDivider'
})(Divider);