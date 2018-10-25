import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
// @inheritedComponent ButtonBase
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';
import unsupportedProp from '../utils/unsupportedProp';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, _defineProperty({
      maxWidth: 264,
      position: 'relative',
      minWidth: 72,
      padding: 0,
      minHeight: 48,
      flexShrink: 0,
      overflow: 'hidden',
      whiteSpace: 'normal',
      textAlign: 'center'
    }, theme.breakpoints.up('md'), {
      fontSize: theme.typography.pxToRem(13),
      minWidth: 160
    })),

    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72
    },

    /* Styles applied to the root element if `textColor="inherit"`. */
    textColorInherit: {
      color: 'inherit',
      opacity: 0.7,
      '&$selected': {
        opacity: 1
      },
      '&$disabled': {
        opacity: 0.4
      }
    },

    /* Styles applied to the root element if `textColor="primary"`. */
    textColorPrimary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Styles applied to the root element if `textColor="secondary"`. */
    textColorSecondary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.secondary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Styles applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},

    /* Styles applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
      flexShrink: 1,
      flexGrow: 1,
      maxWidth: 'none'
    },

    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },

    /* Styles applied to the label container element if `label` is provided. */
    labelContainer: _defineProperty({
      width: '100%',
      // Fix an IE 11 issue
      boxSizing: 'border-box',
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12
    }, theme.breakpoints.up('md'), {
      paddingLeft: 24,
      paddingRight: 24
    }),

    /* Styles applied to the label wrapper element if `label` is provided. */
    label: {},

    /* Styles applied to the label wrapper element if `label` is provided and the text is wrapped. */
    labelWrapped: _defineProperty({}, theme.breakpoints.down('sm'), {
      fontSize: theme.typography.pxToRem(12)
    })
  };
};

var Tab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      labelWrapped: false
    };

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

    _this.checkTextWrap = function () {
      if (_this.labelRef) {
        var labelWrapped = _this.labelRef.getClientRects().length > 1;

        if (_this.state.labelWrapped !== labelWrapped) {
          _this.setState({
            labelWrapped: labelWrapped
          });
        }
      }
    };

    return _this;
  }

  _createClass(Tab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkTextWrap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.labelWrapped === prevState.labelWrapped) {
        /**
         * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
         * font size still only requires one line.  This check will prevent an infinite render loop
         * fron occurring in that scenario.
         */
        this.checkTextWrap();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames2;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          classNameProp = _this$props2.className,
          disabled = _this$props2.disabled,
          fullWidth = _this$props2.fullWidth,
          icon = _this$props2.icon,
          indicator = _this$props2.indicator,
          labelProp = _this$props2.label,
          onChange = _this$props2.onChange,
          selected = _this$props2.selected,
          textColor = _this$props2.textColor,
          value = _this$props2.value,
          other = _objectWithoutProperties(_this$props2, ["classes", "className", "disabled", "fullWidth", "icon", "indicator", "label", "onChange", "selected", "textColor", "value"]);

      var label;

      if (labelProp !== undefined) {
        label = React.createElement("span", {
          className: classes.labelContainer
        }, React.createElement("span", {
          className: classNames(classes.label, _defineProperty({}, classes.labelWrapped, this.state.labelWrapped)),
          ref: function ref(_ref) {
            _this2.labelRef = _ref;
          }
        }, labelProp));
      }

      var className = classNames(classes.root, classes["textColor".concat(capitalize(textColor))], (_classNames2 = {}, _defineProperty(_classNames2, classes.disabled, disabled), _defineProperty(_classNames2, classes.selected, selected), _defineProperty(_classNames2, classes.labelIcon, icon && label), _defineProperty(_classNames2, classes.fullWidth, fullWidth), _classNames2), classNameProp);
      return React.createElement(ButtonBase, _extends({
        focusRipple: true,
        className: className,
        role: "tab",
        "aria-selected": selected,
        disabled: disabled
      }, other, {
        onClick: this.handleChange
      }), React.createElement("span", {
        className: classes.wrapper
      }, icon, label), indicator);
    }
  }]);

  return Tab;
}(React.Component);

Tab.propTypes = {
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
   * If `true`, the tab will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   */
  fullWidth: PropTypes.bool,

  /**
   * The icon element.
   */
  icon: PropTypes.node,

  /**
   * @ignore
   * For server side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: PropTypes.node,

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
   * @ignore
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: PropTypes.any
};
Tab.defaultProps = {
  disabled: false,
  textColor: 'inherit'
};
export default withStyles(styles, {
  name: 'MuiTab'
})(Tab);