import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import Tablelvl2Context from '../Table/Tablelvl2Context';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: 'inherit',
      display: 'table-row',
      height: 48,
      verticalAlign: 'middle',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none',
      '&$selected': {
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.04)' // grey[100]
        : 'rgba(255, 255, 255, 0.08)'
      },
      '&$hover:hover': {
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.07)' // grey[200]
        : 'rgba(255, 255, 255, 0.14)'
      }
    },

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if `hover={true}`. */
    hover: {},

    /* Styles applied to the root element if table variant = 'head'. */
    head: {
      height: 56
    },

    /* Styles applied to the root element if table variant = 'footer'. */
    footer: {
      height: 56
    }
  };
};
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */

function TableRow(props) {
  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      hover = props.hover,
      selected = props.selected,
      other = _objectWithoutProperties(props, ["classes", "className", "component", "hover", "selected"]);

  return React.createElement(Tablelvl2Context.Consumer, null, function (tablelvl2) {
    var _classNames;

    var className = classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.head, tablelvl2 && tablelvl2.variant === 'head'), _defineProperty(_classNames, classes.footer, tablelvl2 && tablelvl2.variant === 'footer'), _defineProperty(_classNames, classes.hover, hover), _defineProperty(_classNames, classes.selected, selected), _classNames), classNameProp);
    return React.createElement(Component, _extends({
      className: className
    }, other));
  });
}

TableRow.propTypes = {
  /**
   * Should be valid <tr> children such as `TableCell`.
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
   * If `true`, the table row will shade on hover.
   */
  hover: PropTypes.bool,

  /**
   * If `true`, the table row will have the selected shading.
   */
  selected: PropTypes.bool
};
TableRow.defaultProps = {
  component: 'tr',
  hover: false,
  selected: false
};
export default withStyles(styles, {
  name: 'MuiTableRow'
})(TableRow);