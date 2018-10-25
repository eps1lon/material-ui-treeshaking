import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
// @inheritedComponent Paper
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};

function Card(props) {
  var classes = props.classes,
      className = props.className,
      raised = props.raised,
      other = _objectWithoutProperties(props, ["classes", "className", "raised"]);

  return React.createElement(Paper, _extends({
    className: classNames(classes.root, className),
    elevation: raised ? 8 : 1
  }, other));
}

Card.propTypes = {
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
   * If `true`, the card will use raised styling.
   */
  raised: PropTypes.bool
};
Card.defaultProps = {
  raised: false
};
export default withStyles(styles, {
  name: 'MuiCard'
})(Card);