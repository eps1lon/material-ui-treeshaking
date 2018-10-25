import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8,
    '&:first-child': {
      paddingLeft: 0
    },
    '&:last-child': {
      paddingRight: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: 'relative'
  },

  /* Styles applied to the root element if `completed={true}`. */
  completed: {}
};

function Step(props) {
  var _classNames;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      connector = props.connector,
      disabled = props.disabled,
      index = props.index,
      last = props.last,
      orientation = props.orientation,
      other = _objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "connector", "disabled", "index", "last", "orientation"]);

  var className = classNames(classes.root, classes[orientation], (_classNames = {}, _defineProperty(_classNames, classes.alternativeLabel, alternativeLabel), _defineProperty(_classNames, classes.completed, completed), _classNames), classNameProp);
  return React.createElement("div", _extends({
    className: className
  }, other), connector && alternativeLabel && index !== 0 && React.cloneElement(connector, {
    orientation: orientation,
    alternativeLabel: alternativeLabel,
    index: index,
    active: active,
    completed: completed,
    disabled: disabled
  }), React.Children.map(children, function (child) {
    if (!React.isValidElement(child)) {
      return null;
    }

    warning(child.type !== React.Fragment, ["Material-UI: the Step component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
    return React.cloneElement(child, _extends({
      active: active,
      alternativeLabel: alternativeLabel,
      completed: completed,
      disabled: disabled,
      last: last,
      icon: index + 1,
      orientation: orientation
    }, child.props));
  }));
}

Step.propTypes = {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: PropTypes.bool,

  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: PropTypes.bool,

  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
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
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,

  /**
   * @ignore
   * Passed down from Stepper if alternativeLabel is also set.
   */
  connector: PropTypes.element,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   * Used internally for numbering.
   */
  index: PropTypes.number,

  /**
   * @ignore
   */
  last: PropTypes.bool,

  /**
   * @ignore
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};
Step.defaultProps = {
  active: false,
  completed: false,
  disabled: false
};
export default withStyles(styles, {
  name: 'MuiStep'
})(Step);