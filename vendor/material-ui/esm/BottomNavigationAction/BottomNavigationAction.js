import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
// @inheritedComponent ButtonBase
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import unsupportedProp from '../utils/unsupportedProp';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      transition: theme.transitions.create(['color', 'padding-top'], {
        duration: theme.transitions.duration.short
      }),
      padding: '6px 12px 8px',
      minWidth: 80,
      maxWidth: 168,
      color: theme.palette.text.secondary,
      flex: '1',
      '&$iconOnly': {
        paddingTop: 16
      },
      '&$selected': {
        paddingTop: 6,
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the root element if selected. */
    selected: {},

    /* Styles applied to the root element if `showLabel={false}` and not selected. */
    iconOnly: {},

    /* Styles applied to the span element that wraps the icon and label. */
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },

    /* Styles applied to the label's span element. */
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      opacity: 1,
      transition: 'font-size 0.2s, opacity 0.2s',
      transitionDelay: '0.1s',
      '&$iconOnly': {
        opacity: 0,
        transitionDelay: '0s'
      },
      '&$selected': {
        fontSize: theme.typography.pxToRem(14)
      }
    }
  };
};

var BottomNavigationAction =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BottomNavigationAction, _React$Component);

  function BottomNavigationAction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BottomNavigationAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BottomNavigationAction)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onClick = _this$props.onClick;

      if (onChange) {
        onChange(event, value);
      }

      if (onClick) {
        onClick(event);
      }
    };

    return _this;
  }

  _createClass(BottomNavigationAction, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          classNameProp = _this$props2.className,
          icon = _this$props2.icon,
          label = _this$props2.label,
          onChange = _this$props2.onChange,
          onClick = _this$props2.onClick,
          selected = _this$props2.selected,
          showLabelProp = _this$props2.showLabel,
          value = _this$props2.value,
          other = _objectWithoutProperties(_this$props2, ["classes", "className", "icon", "label", "onChange", "onClick", "selected", "showLabel", "value"]);

      var className = classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.selected, selected), _defineProperty(_classNames, classes.iconOnly, !showLabelProp && !selected), _classNames), classNameProp);
      var labelClassName = classNames(classes.label, (_classNames2 = {}, _defineProperty(_classNames2, classes.selected, selected), _defineProperty(_classNames2, classes.iconOnly, !showLabelProp && !selected), _classNames2));
      return React.createElement(ButtonBase, _extends({
        className: className,
        focusRipple: true,
        onClick: this.handleChange
      }, other), React.createElement("span", {
        className: classes.wrapper
      }, icon, React.createElement("span", {
        className: labelClassName
      }, label)));
    }
  }]);

  return BottomNavigationAction;
}(React.Component);

BottomNavigationAction.propTypes = {
  /**
   * This property isn't supported.
   * Use the `component` property if you need to change the children structure.
   */
  children: unsupportedProp,

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
   * The icon element.
   */
  icon: PropTypes.node,

  /**
   * The label element.
   */
  label: PropTypes.node,

  /**
   * @ignore
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onClick: PropTypes.func,

  /**
   * @ignore
   */
  selected: PropTypes.bool,

  /**
   * If `true`, the `BottomNavigationAction` will show its label.
   * By default, only the selected `BottomNavigationAction`
   * inside `BottomNavigation` will show its label.
   */
  showLabel: PropTypes.bool,

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: PropTypes.any
};
export default withStyles(styles, {
  name: 'MuiBottomNavigationAction'
})(BottomNavigationAction);