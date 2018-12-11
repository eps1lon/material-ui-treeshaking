import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import Tablelvl2Context from '../Table/Tablelvl2Context';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-footer-group'
  }
};
var contextValue = {
  variant: 'footer'
};

function TableFooter(props) {
  var classes = props.classes,
      className = props.className,
      Component = props.component,
      other = _objectWithoutProperties(props, ["classes", "className", "component"]);

  return React.createElement(Tablelvl2Context.Provider, {
    value: contextValue
  }, React.createElement(Component, _extends({
    className: classNames(classes.root, className)
  }, other)));
}

TableFooter.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
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
  component: componentPropType
};
TableFooter.defaultProps = {
  component: 'tfoot'
};
export default withStyles(styles, {
  name: 'MuiTableFooter'
})(TableFooter);