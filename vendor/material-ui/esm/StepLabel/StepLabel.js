import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';
import StepIcon from '../StepIcon';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      '&$alternativeLabel': {
        flexDirection: 'column'
      },
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `orientation="horiizontal". */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical". */
    vertical: {},

    /* Styles applied to the `Typography` component which wraps `children`. */
    label: {
      color: theme.palette.text.secondary,
      '&$active': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$completed': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$alternativeLabel': {
        textAlign: 'center',
        marginTop: 16
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the `Typography` component if `active={true}`. */
    active: {},

    /* Styles applied to the `Typography` component if `completed={true}`. */
    completed: {},

    /* Styles applied to the root element and `Typography` component if `error={true}`. */
    error: {},

    /* Styles applied to the root element and `Typography` component if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the `icon` container element. */
    iconContainer: {
      display: 'flex',
      paddingRight: 8,
      '&$alternativeLabel': {
        paddingRight: 0
      }
    },

    /* Styles applied to the root & icon container and `Typography` if `alternativeLabel={true}`. */
    alternativeLabel: {},

    /* Styles applied to the container element which wraps `Typography` and `optional`. */
    labelContainer: {
      width: '100%'
    }
  };
};

function StepLabel(props) {
  var _classNames, _classNames3;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      StepIconComponentProp = props.StepIconComponent,
      StepIconProps = props.StepIconProps,
      other = _objectWithoutProperties(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "error", "icon", "last", "optional", "orientation", "StepIconComponent", "StepIconProps"]);

  var StepIconComponent = StepIconComponentProp;

  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon;
  }

  return React.createElement("span", _extends({
    className: classNames(classes.root, classes[orientation], (_classNames = {}, _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.alternativeLabel, alternativeLabel), _defineProperty(_classNames, classes.error, error), _classNames), classNameProp)
  }, other), icon || StepIconComponent ? React.createElement("span", {
    className: classNames(classes.iconContainer, _defineProperty({}, classes.alternativeLabel, alternativeLabel))
  }, React.createElement(StepIconComponent, _extends({
    completed: completed,
    active: active,
    error: error,
    icon: icon
  }, StepIconProps))) : null, React.createElement("span", {
    className: classes.labelContainer
  }, React.createElement(Typography, {
    component: "span",
    className: classNames(classes.label, (_classNames3 = {}, _defineProperty(_classNames3, classes.alternativeLabel, alternativeLabel), _defineProperty(_classNames3, classes.completed, completed), _defineProperty(_classNames3, classes.active, active), _defineProperty(_classNames3, classes.error, error), _classNames3))
  }, children), optional));
}

StepLabel.propTypes = {
  /**
   * @ignore
   * Sets the step as active. Is passed to child components.
   */
  active: PropTypes.bool,

  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: PropTypes.bool,

  /**
   * In most cases will simply be a string containing a title for the label.
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
   * @ignore
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
   */
  disabled: PropTypes.bool,

  /**
   * Mark the step as failed.
   */
  error: PropTypes.bool,

  /**
   * Override the default icon.
   */
  icon: PropTypes.node,

  /**
   * @ignore
   */
  last: PropTypes.bool,

  /**
   * The optional node to display.
   */
  optional: PropTypes.node,

  /**
   * @ignore
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * The component to render in place of the [`StepIcon`](/api/step-icon/).
   */
  StepIconComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Properties applied to the [`StepIcon`](/api/step-icon/) element.
   */
  StepIconProps: PropTypes.object
};
StepLabel.defaultProps = {
  active: false,
  alternativeLabel: false,
  completed: false,
  disabled: false,
  error: false,
  last: false,
  orientation: 'horizontal'
};
StepLabel.muiName = 'StepLabel';
export default withStyles(styles, {
  name: 'MuiStepLabel'
})(StepLabel);