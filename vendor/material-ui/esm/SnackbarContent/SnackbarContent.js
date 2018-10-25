import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
// @inheritedComponent Paper
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Paper from '../Paper';
import Typography from '../Typography';
import { emphasize } from '../styles/colorManipulator';
export var styles = function styles(theme) {
  var _root;

  var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  var backgroundColor = emphasize(theme.palette.background.default, emphasis);
  return {
    /* Styles applied to the root element. */
    root: (_root = {
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px 24px'
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      minWidth: 288,
      maxWidth: 568,
      borderRadius: theme.shape.borderRadius
    }), _defineProperty(_root, theme.breakpoints.down('sm'), {
      flexGrow: 1
    }), _root),

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 24,
      marginRight: -8
    }
  };
};

function SnackbarContent(props) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      other = _objectWithoutProperties(props, ["action", "classes", "className", "message"]);

  return React.createElement(Paper, _extends({
    component: Typography,
    headlineMapping: {
      body1: 'div',
      body2: 'div'
    },
    role: "alertdialog",
    square: true,
    elevation: 6,
    className: classNames(classes.root, className)
  }, other), React.createElement("div", {
    className: classes.message
  }, message), action ? React.createElement("div", {
    className: classes.action
  }, action) : null);
}

SnackbarContent.propTypes = {
  /**
   * The action to display.
   */
  action: PropTypes.node,

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
   * The message to display.
   */
  message: PropTypes.node
};
export default withStyles(styles, {
  name: 'MuiSnackbarContent'
})(SnackbarContent);