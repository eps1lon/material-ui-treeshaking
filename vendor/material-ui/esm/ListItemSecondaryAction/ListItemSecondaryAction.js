import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'absolute',
    right: 4,
    top: '50%',
    transform: 'translateY(-50%)'
  }
};

function ListItemSecondaryAction(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["children", "classes", "className"]);

  return React.createElement("div", _extends({
    className: classNames(classes.root, className)
  }, other), children);
}

ListItemSecondaryAction.propTypes = {
  /**
   * The content of the component, normally an `IconButton` or selection control.
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
  className: PropTypes.string
};
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
export default withStyles(styles, {
  name: 'MuiListItemSecondaryAction'
})(ListItemSecondaryAction);