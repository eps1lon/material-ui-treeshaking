import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import deprecatedPropType from '../utils/deprecatedPropType';
import { darken, fade, lighten } from '../styles/colorManipulator';
import TableContext from '../Table/TableContext';
import Tablelvl2Context from '../Table/Tablelvl2Context';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'table-cell',
      verticalAlign: 'inherit',
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: "1px solid\n    ".concat(theme.palette.type === 'light' ? lighten(fade(theme.palette.divider, 1), 0.88) : darken(fade(theme.palette.divider, 1), 0.68)),
      textAlign: 'left',
      padding: '4px 56px 4px 24px',
      '&:last-child': {
        paddingRight: 24
      }
    },

    /* Styles applied to the root element if `variant="head"` or `context.table.head`. */
    head: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the root element if `variant="body"` or `context.table.body`. */
    body: {
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(13),
      fontWeight: theme.typography.fontWeightRegular
    },

    /* Styles applied to the root element if `variant="footer"` or `context.table.footer`. */
    footer: {
      borderBottom: 0,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12)
    },

    /* Styles applied to the root element if `numeric={true}`. */
    numeric: {
      textAlign: 'right',
      flexDirection: 'row-reverse' // can be dynamically inherited at runtime by contents

    },

    /* Styles applied to the root element if `padding="dense"`. */
    paddingDense: {
      paddingRight: 24
    },

    /* Styles applied to the root element if `padding="checkbox"`. */
    paddingCheckbox: {
      padding: '0 12px',
      '&:last-child': {
        paddingRight: 12
      }
    },

    /* Styles applied to the root element if `padding="none"`. */
    paddingNone: {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    }
  };
};

function TableCell(props) {
  var align = props.align,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      component = props.component,
      sortDirection = props.sortDirection,
      _props$numeric = props.numeric,
      numeric = _props$numeric === void 0 ? false : _props$numeric,
      paddingProp = props.padding,
      scopeProp = props.scope,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["align", "children", "classes", "className", "component", "sortDirection", "numeric", "padding", "scope", "variant"]);

  return React.createElement(TableContext.Consumer, null, function (table) {
    return React.createElement(Tablelvl2Context.Consumer, null, function (tablelvl2) {
      var _classNames;

      var Component;

      if (component) {
        Component = component;
      } else {
        Component = tablelvl2 && tablelvl2.variant === 'head' ? 'th' : 'td';
      }

      var scope = scopeProp;

      if (!scope && tablelvl2 && tablelvl2.variant === 'head') {
        scope = 'col';
      }

      var padding = paddingProp || (table && table.padding ? table.padding : 'default');
      var className = classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.head, variant ? variant === 'head' : tablelvl2 && tablelvl2.variant === 'head'), _defineProperty(_classNames, classes.body, variant ? variant === 'body' : tablelvl2 && tablelvl2.variant === 'body'), _defineProperty(_classNames, classes.footer, variant ? variant === 'footer' : tablelvl2 && tablelvl2.variant === 'footer'), _defineProperty(_classNames, classes["align".concat(capitalize(align))], align !== 'inherit'), _defineProperty(_classNames, classes.numeric, numeric), _defineProperty(_classNames, classes["padding".concat(capitalize(padding))], padding !== 'default'), _classNames), classNameProp);
      var ariaSort = null;

      if (sortDirection) {
        ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
      }

      return React.createElement(Component, _extends({
        className: className,
        "aria-sort": ariaSort,
        scope: scope
      }, other), children);
    });
  });
}

TableCell.propTypes = {
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The table cell contents.
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
   * If `true`, content will align to the right.
   */
  numeric: deprecatedPropType(PropTypes.bool, 'Instead, use the `align` property.'),

  /**
   * Sets the padding applied to the cell.
   * By default, the Table parent component set the value.
   */
  padding: PropTypes.oneOf(['default', 'checkbox', 'dense', 'none']),

  /**
   * Set scope attribute.
   */
  scope: PropTypes.string,

  /**
   * Set aria-sort direction.
   */
  sortDirection: PropTypes.oneOf(['asc', 'desc', false]),

  /**
   * Specify the cell type.
   * By default, the TableHead, TableBody or TableFooter parent component set the value.
   */
  variant: PropTypes.oneOf(['head', 'body', 'footer'])
};
TableCell.defaultProps = {
  align: 'inherit'
};
export default withStyles(styles, {
  name: 'MuiTableCell'
})(TableCell);