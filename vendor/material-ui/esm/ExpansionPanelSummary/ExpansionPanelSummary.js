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
import ButtonBase from '../ButtonBase';
import IconButton from '../IconButton';
import withStyles from '../styles/withStyles';
export var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      minHeight: 8 * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: '0 24px 0 24px',
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      },
      '&$expanded': {
        minHeight: 64
      },
      '&$focused': {
        backgroundColor: theme.palette.grey[300]
      },
      '&$disabled': {
        opacity: 0.38
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root and children wrapper elements when focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: 32
      },
      '&$expanded': {
        margin: '20px 0'
      }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
      position: 'absolute',
      top: '50%',
      right: 8,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&:hover': {
        // Disable the hover effect for the IconButton,
        // because a hover effect should apply to the entire Expand button and
        // not only to the IconButton.
        backgroundColor: 'transparent'
      },
      '&$expanded': {
        transform: 'translateY(-50%) rotate(180deg)'
      }
    }
  };
};

var ExpansionPanelSummary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpansionPanelSummary, _React$Component);

  function ExpansionPanelSummary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExpansionPanelSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExpansionPanelSummary)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      focused: false
    };

    _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    };

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick;

      if (onChange) {
        onChange(event);
      }

      if (onClick) {
        onClick(event);
      }
    };

    return _this;
  }

  _createClass(ExpansionPanelSummary, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          children = _this$props2.children,
          classes = _this$props2.classes,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          expanded = _this$props2.expanded,
          expandIcon = _this$props2.expandIcon,
          IconButtonProps = _this$props2.IconButtonProps,
          onChange = _this$props2.onChange,
          other = _objectWithoutProperties(_this$props2, ["children", "classes", "className", "disabled", "expanded", "expandIcon", "IconButtonProps", "onChange"]);

      var focused = this.state.focused;
      return React.createElement(ButtonBase, _extends({
        focusRipple: false,
        disableRipple: true,
        disabled: disabled,
        component: "div",
        "aria-expanded": expanded,
        className: classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.expanded, expanded), _defineProperty(_classNames, classes.focused, focused), _classNames), className)
      }, other, {
        onFocusVisible: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleChange
      }), React.createElement("div", {
        className: classNames(classes.content, _defineProperty({}, classes.expanded, expanded))
      }, children), expandIcon && React.createElement(IconButton, _extends({
        disabled: disabled,
        className: classNames(classes.expandIcon, _defineProperty({}, classes.expanded, expanded)),
        component: "div",
        tabIndex: -1,
        "aria-hidden": "true"
      }, IconButtonProps), expandIcon));
    }
  }]);

  return ExpansionPanelSummary;
}(React.Component);

ExpansionPanelSummary.propTypes = {
  /**
   * The content of the expansion panel summary.
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
   * @ignore
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: PropTypes.bool,

  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: PropTypes.node,

  /**
   * Properties applied to the `TouchRipple` element wrapping the expand icon.
   */
  IconButtonProps: PropTypes.object,

  /**
   * @ignore
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onClick: PropTypes.func
};
ExpansionPanelSummary.defaultProps = {
  disabled: false
};
ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
export default withStyles(styles, {
  name: 'MuiExpansionPanelSummary'
})(ExpansionPanelSummary);