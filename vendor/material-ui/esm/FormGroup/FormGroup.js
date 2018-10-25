import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },

  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: 'row'
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

function FormGroup(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      row = props.row,
      other = _objectWithoutProperties(props, ["classes", "className", "children", "row"]);

  return React.createElement("div", _extends({
    className: classNames(classes.root, _defineProperty({}, classes.row, row), className)
  }, other), children);
}

FormGroup.propTypes = {
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
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool
};
FormGroup.defaultProps = {
  row: false
};
export default withStyles(styles, {
  name: 'MuiFormGroup'
})(FormGroup);