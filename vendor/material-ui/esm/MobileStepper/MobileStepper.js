import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
// @inheritedComponent Paper
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Paper from '../Paper';
import { capitalize } from '../utils/helpers';
import LinearProgress from '../LinearProgress';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.background.default,
      padding: 8
    },

    /* Styles applied to the root element if `position="bottom"`. */
    positionBottom: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },

    /* Styles applied to the root element if `position="top"`. */
    positionTop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {},

    /* Styles applied to the dots container if `variant="dots"`. */
    dots: {
      display: 'flex',
      flexDirection: 'row'
    },

    /* Styles applied to each dot if `variant="dots"`. */
    dot: {
      backgroundColor: theme.palette.action.disabled,
      borderRadius: '50%',
      width: 8,
      height: 8,
      margin: '0 2px'
    },

    /* Styles applied to a dot if `variant="dots"` and this is the active step. */
    dotActive: {
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the Linear Progress component if `variant="progress"`. */
    progress: {
      width: '50%'
    }
  };
};

function MobileStepper(props) {
  var activeStep = props.activeStep,
      backButton = props.backButton,
      classes = props.classes,
      classNameProp = props.className,
      LinearProgressProps = props.LinearProgressProps,
      nextButton = props.nextButton,
      position = props.position,
      steps = props.steps,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["activeStep", "backButton", "classes", "className", "LinearProgressProps", "nextButton", "position", "steps", "variant"]);

  var className = classNames(classes.root, classes["position".concat(capitalize(position))], classNameProp);
  return React.createElement(Paper, _extends({
    square: true,
    elevation: 0,
    className: className
  }, other), backButton, variant === 'dots' && React.createElement("div", {
    className: classes.dots
  }, _toConsumableArray(new Array(steps)).map(function (_, step) {
    var dotClassName = classNames(classes.dot, _defineProperty({}, classes.dotActive, step === activeStep)); // eslint-disable-next-line react/no-array-index-key

    return React.createElement("div", {
      key: step,
      className: dotClassName
    });
  })), variant === 'progress' && React.createElement(LinearProgress, _extends({
    className: classes.progress,
    variant: "determinate",
    value: Math.ceil(activeStep / (steps - 1) * 100)
  }, LinearProgressProps)), nextButton);
}

MobileStepper.propTypes = {
  /**
   * Set the active step (zero based index).
   * Defines which dot is highlighted when the variant is 'dots'.
   */
  activeStep: PropTypes.number,

  /**
   * A back button element. For instance, it can be be a `Button` or a `IconButton`.
   */
  backButton: PropTypes.node,

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
   * Properties applied to the `LinearProgress` element.
   */
  LinearProgressProps: PropTypes.object,

  /**
   * A next button element. For instance, it can be be a `Button` or a `IconButton`.
   */
  nextButton: PropTypes.node,

  /**
   * Set the positioning type.
   */
  position: PropTypes.oneOf(['bottom', 'top', 'static']),

  /**
   * The total steps.
   */
  steps: PropTypes.number.isRequired,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['text', 'dots', 'progress'])
};
MobileStepper.defaultProps = {
  activeStep: 0,
  position: 'bottom',
  variant: 'dots'
};
export default withStyles(styles, {
  name: 'MuiMobileStepper'
})(MobileStepper);