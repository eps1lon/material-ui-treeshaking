import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto'
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      marginLeft: 12,
      // half icon
      padding: '0 0 8px'
    },

    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
      position: 'absolute',
      top: 8 + 4,
      left: 'calc(-50% + 20px)',
      right: 'calc(50% + 20px)'
    },

    /* Styles applied to the root element if `active={true}`. */
    active: {},

    /* Styles applied to the root element if `completed={true}`. */
    completed: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the line element. */
    line: {
      display: 'block',
      borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: 24
    }
  };
};

function StepConnector(props) {
  var _classNames, _classNames2;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      index = props.index,
      orientation = props.orientation,
      other = _objectWithoutProperties(props, ["active", "alternativeLabel", "classes", "className", "completed", "disabled", "index", "orientation"]);

  return React.createElement("div", _extends({
    className: classNames(classes.root, classes[orientation], (_classNames = {}, _defineProperty(_classNames, classes.alternativeLabel, alternativeLabel), _defineProperty(_classNames, classes.active, active), _defineProperty(_classNames, classes.completed, completed), _defineProperty(_classNames, classes.disabled, disabled), _classNames), classNameProp)
  }, other), React.createElement("span", {
    className: classNames(classes.line, (_classNames2 = {}, _defineProperty(_classNames2, classes.lineHorizontal, orientation === 'horizontal'), _defineProperty(_classNames2, classes.lineVertical, orientation === 'vertical'), _classNames2))
  }));
}

StepConnector.propTypes = {
  /**
   * @ignore
   */
  active: PropTypes.bool,

  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: PropTypes.bool,

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
   */
  completed: PropTypes.bool,

  /**
   * @ignore
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   */
  index: PropTypes.number,

  /**
   * @ignore
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};
StepConnector.defaultProps = {
  alternativeLabel: false,
  orientation: 'horizontal'
};
export default withStyles(styles, {
  name: 'MuiStepConnector'
})(StepConnector);