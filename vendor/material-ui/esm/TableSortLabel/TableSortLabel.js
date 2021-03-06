import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
// @inheritedComponent ButtonBase
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ArrowDownwardIcon from '../internal/svg-icons/ArrowDownward';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      flexDirection: 'inherit',
      alignItems: 'center',
      '&:hover': {
        color: theme.palette.text.primary
      },
      '&:focus': {
        color: theme.palette.text.primary
      }
    },

    /* Styles applied to the root element if `active={true}`. */
    active: {
      color: theme.palette.text.primary,
      '& $icon': {
        opacity: 1
      }
    },

    /* Styles applied to the icon component. */
    icon: {
      height: 16,
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shorter
      }),
      userSelect: 'none',
      width: 16
    },

    /* Styles applied to the icon component if `direction="desc"`. */
    iconDirectionDesc: {
      transform: 'rotate(0deg)'
    },

    /* Styles applied to the icon component if `direction="asc"`. */
    iconDirectionAsc: {
      transform: 'rotate(180deg)'
    }
  };
};
/**
 * A button based label for placing inside `TableCell` for column sorting.
 */

function TableSortLabel(props) {
  var active = props.active,
      children = props.children,
      classes = props.classes,
      className = props.className,
      direction = props.direction,
      hideSortIcon = props.hideSortIcon,
      IconComponent = props.IconComponent,
      other = _objectWithoutProperties(props, ["active", "children", "classes", "className", "direction", "hideSortIcon", "IconComponent"]);

  return React.createElement(ButtonBase, _extends({
    className: classNames(classes.root, _defineProperty({}, classes.active, active), className),
    component: "span",
    disableRipple: true
  }, other), children, hideSortIcon && !active ? null : React.createElement(IconComponent, {
    className: classNames(classes.icon, classes["iconDirection".concat(capitalize(direction))])
  }));
}

TableSortLabel.propTypes = {
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   */
  active: PropTypes.bool,

  /**
   * Label contents, the arrow will be appended automatically.
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
   * The current sort direction.
   */
  direction: PropTypes.oneOf(['asc', 'desc']),

  /**
   * Hide sort icon when active is false.
   */
  hideSortIcon: PropTypes.bool,

  /**
   * Sort icon to use.
   */
  IconComponent: PropTypes.func
};
TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc',
  hideSortIcon: false,
  IconComponent: ArrowDownwardIcon
};
export default withStyles(styles, {
  name: 'MuiTableSortLabel'
})(TableSortLabel);