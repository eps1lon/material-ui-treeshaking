import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      listStyle: 'none',
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit'
    }
  };
};

function ListSubheader(props) {
  var _classNames;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      Component = props.component,
      disableGutters = props.disableGutters,
      disableSticky = props.disableSticky,
      inset = props.inset,
      other = _objectWithoutProperties(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);

  return React.createElement(Component, _extends({
    className: classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes["color".concat(capitalize(color))], color !== 'default'), _defineProperty(_classNames, classes.inset, inset), _defineProperty(_classNames, classes.sticky, !disableSticky), _defineProperty(_classNames, classes.gutters, !disableGutters), _classNames), className)
  }, other));
}

ListSubheader.propTypes = {
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'inherit']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,

  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: PropTypes.bool,

  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: PropTypes.bool,

  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: PropTypes.bool
};
ListSubheader.defaultProps = {
  color: 'default',
  component: 'li',
  disableGutters: false,
  disableSticky: false,
  inset: false
};
ListSubheader.muiName = 'ListSubheader';
export default withStyles(styles, {
  name: 'MuiListSubheader'
})(ListSubheader);