import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
// @inheritedComponent ListItem
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      paddingLeft: 16,
      paddingRight: 16,
      '&$selected': {}
    }),

    /* Styles applied to the root element if `selected={true}`. */
    selected: {}
  };
};

function MenuItem(props) {
  var classes = props.classes,
      className = props.className,
      component = props.component,
      selected = props.selected,
      role = props.role,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "selected", "role"]);

  return React.createElement(ListItem, _extends({
    button: true,
    role: role,
    tabIndex: -1,
    selected: selected,
    className: classNames(classes.root, _defineProperty({}, classes.selected, selected), className),
    component: component
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
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

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
  role: 'menuitem'
};
export default withStyles(styles, {
  name: 'MuiMenuItem'
})(MenuItem);