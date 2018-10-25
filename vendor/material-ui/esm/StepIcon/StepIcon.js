import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircle from '../internal/svg-icons/CheckCircle';
import Warning from '../internal/svg-icons/Warning';
import withStyles from '../styles/withStyles';
import SvgIcon from '../SvgIcon';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      color: theme.palette.text.disabled,
      '&$active': {
        color: theme.palette.primary.main
      },
      '&$completed': {
        color: theme.palette.primary.main
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the SVG text element. */
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    },

    /* Styles applied to the root element if `active={true}`. */
    active: {},

    /* Styles applied to the root element if `completed={true}`. */
    completed: {},

    /* Styles applied to the root element if `error={true}`. */
    error: {}
  };
};

function StepIcon(props) {
  var completed = props.completed,
      icon = props.icon,
      active = props.active,
      error = props.error,
      classes = props.classes;

  if (typeof icon === 'number' || typeof icon === 'string') {
    if (error) {
      return React.createElement(Warning, {
        className: classNames(classes.root, classes.error)
      });
    }

    if (completed) {
      return React.createElement(CheckCircle, {
        className: classNames(classes.root, classes.completed)
      });
    }

    return React.createElement(SvgIcon, {
      className: classNames(classes.root, _defineProperty({}, classes.active, active))
    }, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "12"
    }), React.createElement("text", {
      className: classes.text,
      x: "12",
      y: "16",
      textAnchor: "middle"
    }, icon));
  }

  return icon;
}

StepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,

  /**
   * Mark the step as failed.
   */
  error: PropTypes.bool,

  /**
   * The icon displayed by the step label.
   */
  icon: PropTypes.node.isRequired
};
StepIcon.defaultProps = {
  active: false,
  completed: false,
  error: false
};
export default withStyles(styles, {
  name: 'MuiStepIcon'
})(StepIcon);