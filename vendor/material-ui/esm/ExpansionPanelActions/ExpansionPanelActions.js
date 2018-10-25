import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { cloneChildrenWithClassName } from '../utils/reactHelpers';
import '../Button'; // So we don't have any override priority issue.

export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '16px 8px'
  },

  /* Styles applied to the children. */
  action: {
    marginLeft: 8
  }
};

function ExpansionPanelActions(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["children", "classes", "className"]);

  return React.createElement("div", _extends({
    className: classNames(classes.root, className)
  }, other), cloneChildrenWithClassName(children, classes.action));
}

ExpansionPanelActions.propTypes = {
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
  className: PropTypes.string
};
export default withStyles(styles, {
  name: 'MuiExpansionPanelActions'
})(ExpansionPanelActions);