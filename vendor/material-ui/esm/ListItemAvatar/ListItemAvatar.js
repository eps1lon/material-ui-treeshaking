import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import ListContext from '../List/ListContext';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      width: 36,
      height: 36,
      fontSize: theme.typography.pxToRem(18),
      marginRight: 4
    },

    /* Styles applied to the root element when. */
    alignItemsFlexStart: {
      marginTop: 4
    },

    /* Styles applied to the children – typically the `Avatar` component. */
    icon: {
      width: 20,
      height: 20,
      fontSize: theme.typography.pxToRem(20)
    }
  };
};
/**
 * This is a simple wrapper to apply the `dense`
 * and `align-items="flex-start"` mode styles to `Avatar`.
 */

function ListItemAvatar(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["children", "classes", "className"]);

  return React.createElement(ListContext.Consumer, null, function (context) {
    var _classNames;

    return React.cloneElement(children, _extends({
      className: classNames((_classNames = {}, _defineProperty(_classNames, classes.root, context.dense), _defineProperty(_classNames, classes.alignItemsFlexStart, context.alignItems === 'flex-start'), _classNames), className, children.props.className),
      childrenClassName: classNames(_defineProperty({}, classes.icon, context.dense), children.props.childrenClassName)
    }, other));
  });
}

ListItemAvatar.propTypes = {
  /**
   * The content of the component – normally `Avatar`.
   */
  children: PropTypes.element.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string
};
ListItemAvatar.muiName = 'ListItemAvatar';
export default withStyles(styles, {
  name: 'MuiListItemAvatar'
})(ListItemAvatar);