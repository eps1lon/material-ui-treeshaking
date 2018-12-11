import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
export var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return _extends({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    }
  }, elevations);
};

function Paper(props) {
  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      square = props.square,
      elevation = props.elevation,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation"]);

  warning(elevation >= 0 && elevation < 25, "Material-UI: this elevation `".concat(elevation, "` is not implemented."));
  var className = classNames(classes.root, classes["elevation".concat(elevation)], _defineProperty({}, classes.rounded, !square), classNameProp);
  return React.createElement(Component, _extends({
    className: className
  }, other));
}

Paper.propTypes = {
  /**
   * The content of the component.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: PropTypes.number,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool
};
Paper.defaultProps = {
  component: 'div',
  elevation: 2,
  square: false
};
export default withStyles(styles, {
  name: 'MuiPaper'
})(Paper);