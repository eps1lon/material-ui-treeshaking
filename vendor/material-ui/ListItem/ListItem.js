"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("@material-ui/utils");

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _reactHelpers = require("../utils/reactHelpers");

var _MergeListContext = _interopRequireDefault(require("./MergeListContext"));

var styles = function styles(theme) {
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

exports.styles = styles;

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
      ContainerProps = (0, _objectWithoutProperties2.default)(_props$ContainerProps, ["className"]),
      denseProp = props.dense,
      disabled = props.disabled,
      disableGutters = props.disableGutters,
      divider = props.divider,
      focusVisibleClassName = props.focusVisibleClassName,
      selected = props.selected,
      other = (0, _objectWithoutProperties2.default)(props, ["alignItems", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);
  return _react.default.createElement(_MergeListContext.default, {
    dense: denseProp,
    alignItems: alignItems
  }, function (_ref) {
    var _classNames;

    var dense = _ref.dense;

    var children = _react.default.Children.toArray(childrenProp);

    var hasAvatar = children.some(function (value) {
      return (0, _reactHelpers.isMuiElement)(value, ['ListItemAvatar']);
    });
    var hasSecondaryAction = children.length && (0, _reactHelpers.isMuiElement)(children[children.length - 1], ['ListItemSecondaryAction']);
    var className = (0, _classnames.default)(classes.root, classes.default, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.dense, dense || hasAvatar), (0, _defineProperty2.default)(_classNames, classes.gutters, !disableGutters), (0, _defineProperty2.default)(_classNames, classes.divider, divider), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.button, button), (0, _defineProperty2.default)(_classNames, classes.alignItemsFlexStart, alignItems === 'flex-start'), (0, _defineProperty2.default)(_classNames, classes.secondaryAction, hasSecondaryAction), (0, _defineProperty2.default)(_classNames, classes.selected, selected), _classNames), classNameProp);
    var componentProps = (0, _extends2.default)({
      className: className,
      disabled: disabled
    }, other);
    var Component = componentProp || 'li';

    if (button) {
      componentProps.component = componentProp || 'div';
      componentProps.focusVisibleClassName = (0, _classnames.default)(classes.focusVisible, focusVisibleClassName);
      Component = _ButtonBase.default;
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

      return _react.default.createElement(ContainerComponent, (0, _extends2.default)({
        className: (0, _classnames.default)(classes.container, ContainerClassName)
      }, ContainerProps), _react.default.createElement(Component, componentProps, children), children.pop());
    }

    return _react.default.createElement(Component, componentProps, children);
  });
}

ListItem.propTypes = {
  /**
   * Defines the `align-items` style property.
   */
  alignItems: _propTypes.default.oneOf(['flex-start', 'center']),

  /**
   * If `true`, the list item will be a button (using `ButtonBase`).
   */
  button: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: _utils.componentPropType,

  /**
   * The container component used when a `ListItemSecondaryAction` is rendered.
   */
  ContainerComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Properties applied to the container element when the component
   * is used to display a `ListItemSecondaryAction`.
   */
  ContainerProps: _propTypes.default.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: _propTypes.default.bool,

  /**
   * If `true`, the list item will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: _propTypes.default.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: _propTypes.default.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * Use to apply selected styling.
   */
  selected: _propTypes.default.bool
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

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItem'
})(ListItem);

exports.default = _default;