import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
// @inheritedComponent Paper
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Paper from '../Paper';
import StepConnector from '../StepConnector';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    padding: 24
  },

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: 'column'
  },

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    alignItems: 'flex-start'
  }
};

function Stepper(props) {
  var activeStep = props.activeStep,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      connectorProp = props.connector,
      nonLinear = props.nonLinear,
      orientation = props.orientation,
      other = _objectWithoutProperties(props, ["activeStep", "alternativeLabel", "children", "classes", "className", "connector", "nonLinear", "orientation"]);

  var className = classNames(classes.root, classes[orientation], _defineProperty({}, classes.alternativeLabel, alternativeLabel), classNameProp);
  var connector = React.isValidElement(connectorProp) ? React.cloneElement(connectorProp, {
    orientation: orientation
  }) : null;
  var childrenArray = React.Children.toArray(children);
  var steps = childrenArray.map(function (step, index) {
    var controlProps = {
      alternativeLabel: alternativeLabel,
      connector: connectorProp,
      last: index + 1 === childrenArray.length,
      orientation: orientation
    };
    var state = {
      index: index,
      active: false,
      completed: false,
      disabled: false
    };

    if (activeStep === index) {
      state.active = true;
    } else if (!nonLinear && activeStep > index) {
      state.completed = true;
    } else if (!nonLinear && activeStep < index) {
      state.disabled = true;
    }

    return [!alternativeLabel && connector && index !== 0 && React.cloneElement(connector, _extends({
      key: index
    }, state)), React.cloneElement(step, _extends({}, controlProps, state, step.props))];
  });
  return React.createElement(Paper, _extends({
    square: true,
    elevation: 0,
    className: className
  }, other), steps);
}

Stepper.propTypes = {
  /**
   * Set the active step (zero based index).
   */
  activeStep: PropTypes.number,

  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: PropTypes.bool,

  /**
   * Two or more `<Step />` components.
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
   * A component to be placed between each step.
   */
  connector: PropTypes.element,

  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: PropTypes.bool,

  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};
Stepper.defaultProps = {
  activeStep: 0,
  alternativeLabel: false,
  connector: React.createElement(StepConnector, null),
  nonLinear: false,
  orientation: 'horizontal'
};
Stepper.muiName = 'Stepper';
export default withStyles(styles, {
  name: 'MuiStepper'
})(Stepper);