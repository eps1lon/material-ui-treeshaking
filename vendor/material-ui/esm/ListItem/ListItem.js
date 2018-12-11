import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import { isMuiElement } from '../utils/reactHelpers';
import MergeListContext from './MergeListContext';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 11,
      // To use 10px in v4.0.0
      paddingBottom: 11,
      // To use 10px in v4.0.0
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },
    // TODO: Sanity check this - why is focusVisibleClassName prop apparently applied to a div?

    /* Styles applied to the `component`'s `focusVisibleClassName` property if `button={true}`. */
    focusVisible: {
      backgroundColor: theme.palette.action.hover
    },

    /* Legacy styles applied to the root element. Use `root` instead. */
    default: {},

    /* Styles applied to the `component` element if `dense={true}` or `children` includes `Avatar`. */
    dense: {
      paddingTop: 8,
      paddingBottom: 8
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Styles applied to the inner `component` element if `disabled={true}`. */
    disabled: {
      opacity: 0.5
    },

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positionned.
      paddingRight: 32
    },

    /* Styles applied to the root element if `selected={true}`. */
    selected: {}
  };
};

function ListItem(props) {
  var alignItems = props.alignItems,
      button = props.button,
      childrenProp = props.children,
      classes = props.classes,
      classNameProp = props.className,
      componentProp = props.component,
      ContainerComponent = props.ContainerComponent,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = _objectWithoutProperties(_props$ContainerProps, ["className"]),
      denseProp = props.dense,
      disabled = props.disabled,
      disableGutters = props.disableGutters,
      divider = props.divider,
      focusVisibleClassName = props.focusVisibleClassName,
      selected = props.selected,
      other = _objectWithoutProperties(props, ["alignItems", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  return React.createElement(MergeListContext, {
    dense: denseProp,
    alignItems: alignItems
  }, function (_ref) {
    var _classNames;

    var dense = _ref.dense;
    var children = React.Children.toArray(childrenProp);
    var hasAvatar = children.some(function (value) {
      return isMuiElement(value, ['ListItemAvatar']);
    });
    var hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);
    var className = classNames(classes.root, classes.default, (_classNames = {}, _defineProperty(_classNames, classes.dense, dense || hasAvatar), _defineProperty(_classNames, classes.gutters, !disableGutters), _defineProperty(_classNames, classes.divider, divider), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.button, button), _defineProperty(_classNames, classes.alignItemsFlexStart, alignItems === 'flex-start'), _defineProperty(_classNames, classes.secondaryAction, hasSecondaryAction), _defineProperty(_classNames, classes.selected, selected), _classNames), classNameProp);

    var componentProps = _extends({
      className: className,
      disabled: disabled
    }, other);

    var Component = componentProp || 'li';

    if (button) {
      componentProps.component = componentProp || 'div';
      componentProps.focusVisibleClassName = classNames(classes.focusVisible, focusVisibleClassName);
      Component = ButtonBase;
    }

    if (hasSecondaryAction) {
      // Use div by default.
      Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

      if (ContainerComponent === 'li') {
        if (Component === 'li') {
          Component = 'div';
        } else if (componentProps.component === 'li') {
          componentProps.component = 'div';
        }
      }

      return React.createElement(ContainerComponent, _extends({
        className: classNames(classes.container, ContainerClassName)
      }, ContainerProps), React.createElement(Component, componentProps, children), children.pop());
    }

    return React.createElement(Component, componentProps, children);
  });
}

ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: PropTypes.oneOf(['flex-start', 'center']),

  /**
   * If `true`, the list item will be a button (using `ButtonBase`).
   */
  button: PropTypes.bool,

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
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: componentPropType,

  /**
   * The container component used when a `ListItemSecondaryAction` is rendered.
   */
  ContainerComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Properties applied to the container element when the component
   * is used to display a `ListItemSecondaryAction`.
   */
  ContainerProps: PropTypes.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,

  /**
   * If `true`, the list item will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: PropTypes.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,

  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool
};
ListItem.defaultProps = {
  alignItems: 'center',
  button: false,
  ContainerComponent: 'li',
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false,
  selected: false
};
export default withStyles(styles, {
  name: 'MuiListItem'
})(ListItem);