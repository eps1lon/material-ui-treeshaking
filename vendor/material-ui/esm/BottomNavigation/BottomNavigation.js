import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import withStyles from '../styles/withStyles';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
};

function BottomNavigation(props) {
  var childrenProp = props.children,
      classes = props.classes,
      classNameProp = props.className,
      onChange = props.onChange,
      showLabels = props.showLabels,
      value = props.value,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "onChange", "showLabels", "value"]);

  var className = classNames(classes.root, classNameProp);
  var children = React.Children.map(childrenProp, function (child, childIndex) {
    if (!React.isValidElement(child)) {
      return null;
    }

    warning(child.type !== React.Fragment, ["Material-UI: the BottomNavigation component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    return React.cloneElement(child, {
      selected: childValue === value,
      showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
      value: childValue,
      onChange: onChange
    });
  });
  return React.createElement("div", _extends({
    className: className
  }, other), children);
}

BottomNavigation.propTypes = {
  /**
   * The content of the component.
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
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child
   */
  onChange: PropTypes.func,

  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   */
  showLabels: PropTypes.bool,

  /**
   * The value of the currently selected `BottomNavigationAction`.
   */
  value: PropTypes.any
};
BottomNavigation.defaultProps = {
  showLabels: false
};
export default withStyles(styles, {
  name: 'MuiBottomNavigation'
})(BottomNavigation);