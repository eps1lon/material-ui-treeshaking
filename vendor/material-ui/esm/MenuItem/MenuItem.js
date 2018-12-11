import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
// @inheritedComponent ListItem
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import ListItem from '../ListItem';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.subheading, {
      height: 24,
      boxSizing: 'content-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '&$selected': {}
    }),

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `selected={true}`. */
    selected: {}
  };
};

function MenuItem(props) {
  var _classNames;

  var classes = props.classes,
      className = props.className,
      component = props.component,
      disableGutters = props.disableGutters,
      role = props.role,
      selected = props.selected,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "role", "selected"]);

  return React.createElement(ListItem, _extends({
    button: true,
    role: role,
    tabIndex: -1,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    className: classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.selected, selected), _defineProperty(_classNames, classes.gutters, !disableGutters), _classNames), className)
  }, other));
}

MenuItem.propTypes = {
  /**
   * Menu item contents.
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
  component: componentPropType,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * @ignore
   */
  role: PropTypes.string,

  /**
   * @ignore
   */
  selected: PropTypes.bool
};
MenuItem.defaultProps = {
  component: 'li',
  disableGutters: false,
  role: 'menuitem'
};
export default withStyles(styles, {
  name: 'MuiMenuItem'
})(MenuItem);