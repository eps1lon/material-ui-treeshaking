import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import formControlState from '../FormControl/formControlState';
import FormControlContext from '../FormControl/FormControlContext';
import withFormControlContext from '../FormControl/withFormControlContext';
import withStyles from '../styles/withStyles';
import { setRef } from '../utils/reactHelpers';
import Textarea from './Textarea';
import { isFilled } from './utils';
export var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: 0
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    /* Styles applied to the root element. */
    root: {
      // Mimics the default input display property used by browsers for an input.
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '1.1875em',
      // Reset (19px), match the native input line-height
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px")
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      margin: 0,
      // Reset for Safari
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type` is not "text"`. */
    inputType: {
      // type="date" or type="time", etc. have specific styles we need to reset.
      height: '1.1875em' // Reset (19px), match the native input line-height

    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {}
  };
};
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputBase, _React$Component);

  _createClass(InputBase, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.
      if (props.disabled && state.focused) {
        return {
          focused: false
        };
      }

      return null;
    }
  }]);

  function InputBase(props) {
    var _this;

    _classCallCheck(this, InputBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputBase).call(this, props));
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (event) {
      var muiFormControl = _this.props.muiFormControl; // Fix a bug with IE 11 where the focus/blur events are triggered
      // while the input is disabled.

      if (formControlState({
        props: _this.props,
        muiFormControl: muiFormControl,
        states: ['disabled']
      }).disabled) {
        event.stopPropagation();
        return;
      }

      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };

    _this.handleBlur = function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      var muiFormControl = _this.props.muiFormControl;

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };

    _this.handleChange = function () {
      if (!_this.isControlled) {
        _this.checkDirty(_this.inputRef);
      } // Perform in the willUpdate


      if (_this.props.onChange) {
        var _this$props;

        (_this$props = _this.props).onChange.apply(_this$props, arguments);
      }
    };

    _this.handleRefInput = function (ref) {
      _this.inputRef = ref;
      var refProp;

      if (_this.props.inputRef) {
        refProp = _this.props.inputRef;
      } else if (_this.props.inputProps && _this.props.inputProps.ref) {
        refProp = _this.props.inputProps.ref;
      }

      setRef(refProp, ref);
    };

    _this.handleClick = function (event) {
      if (_this.inputRef && event.currentTarget === event.target) {
        _this.inputRef.focus();
      }

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    };

    _this.isControlled = props.value != null;

    if (_this.isControlled) {
      _this.checkDirty(props);
    }

    return _this;
  }

  _createClass(InputBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.isControlled) {
        this.checkDirty(this.inputRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Book keep the focused state.
      if (!prevProps.disabled && this.props.disabled) {
        var muiFormControl = this.props.muiFormControl;

        if (muiFormControl && muiFormControl.onBlur) {
          muiFormControl.onBlur();
        }
      }

      if (this.isControlled) {
        this.checkDirty(this.props);
      } // else performed in the onChange

    }
  }, {
    key: "checkDirty",
    value: function checkDirty(obj) {
      var muiFormControl = this.props.muiFormControl;

      if (isFilled(obj)) {
        if (muiFormControl && muiFormControl.onFilled) {
          muiFormControl.onFilled();
        }

        if (this.props.onFilled) {
          this.props.onFilled();
        }

        return;
      }

      if (muiFormControl && muiFormControl.onEmpty) {
        muiFormControl.onEmpty();
      }

      if (this.props.onEmpty) {
        this.props.onEmpty();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props2 = this.props,
          autoComplete = _this$props2.autoComplete,
          autoFocus = _this$props2.autoFocus,
          classes = _this$props2.classes,
          classNameProp = _this$props2.className,
          defaultValue = _this$props2.defaultValue,
          disabled = _this$props2.disabled,
          endAdornment = _this$props2.endAdornment,
          error = _this$props2.error,
          fullWidth = _this$props2.fullWidth,
          id = _this$props2.id,
          inputComponent = _this$props2.inputComponent,
          _this$props2$inputPro = _this$props2.inputProps;
      _this$props2$inputPro = _this$props2$inputPro === void 0 ? {} : _this$props2$inputPro;

      var inputPropsClassName = _this$props2$inputPro.className,
          inputPropsProp = _objectWithoutProperties(_this$props2$inputPro, ["className"]),
          inputRef = _this$props2.inputRef,
          margin = _this$props2.margin,
          muiFormControl = _this$props2.muiFormControl,
          multiline = _this$props2.multiline,
          name = _this$props2.name,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onClick = _this$props2.onClick,
          onEmpty = _this$props2.onEmpty,
          onFilled = _this$props2.onFilled,
          onFocus = _this$props2.onFocus,
          onKeyDown = _this$props2.onKeyDown,
          onKeyUp = _this$props2.onKeyUp,
          placeholder = _this$props2.placeholder,
          readOnly = _this$props2.readOnly,
          renderPrefix = _this$props2.renderPrefix,
          rows = _this$props2.rows,
          rowsMax = _this$props2.rowsMax,
          startAdornment = _this$props2.startAdornment,
          type = _this$props2.type,
          value = _this$props2.value,
          other = _objectWithoutProperties(_this$props2, ["autoComplete", "autoFocus", "classes", "className", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "muiFormControl", "multiline", "name", "onBlur", "onChange", "onClick", "onEmpty", "onFilled", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderPrefix", "rows", "rowsMax", "startAdornment", "type", "value"]);

      var fcs = formControlState({
        props: this.props,
        muiFormControl: muiFormControl,
        states: ['disabled', 'error', 'margin', 'required', 'filled']
      });
      var focused = muiFormControl ? muiFormControl.focused : this.state.focused;
      var className = classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.disabled, fcs.disabled), _defineProperty(_classNames, classes.error, fcs.error), _defineProperty(_classNames, classes.fullWidth, fullWidth), _defineProperty(_classNames, classes.focused, focused), _defineProperty(_classNames, classes.formControl, muiFormControl), _defineProperty(_classNames, classes.marginDense, fcs.margin === 'dense'), _defineProperty(_classNames, classes.multiline, multiline), _defineProperty(_classNames, classes.adornedStart, startAdornment), _defineProperty(_classNames, classes.adornedEnd, endAdornment), _classNames), classNameProp);
      var inputClassName = classNames(classes.input, (_classNames2 = {}, _defineProperty(_classNames2, classes.disabled, fcs.disabled), _defineProperty(_classNames2, classes.inputType, type !== 'text'), _defineProperty(_classNames2, classes.inputTypeSearch, type === 'search'), _defineProperty(_classNames2, classes.inputMultiline, multiline), _defineProperty(_classNames2, classes.inputMarginDense, fcs.margin === 'dense'), _defineProperty(_classNames2, classes.inputAdornedStart, startAdornment), _defineProperty(_classNames2, classes.inputAdornedEnd, endAdornment), _classNames2), inputPropsClassName);
      var InputComponent = inputComponent;

      var inputProps = _extends({}, inputPropsProp, {
        ref: this.handleRefInput
      });

      if (typeof InputComponent !== 'string') {
        inputProps = _extends({
          // Rename ref to inputRef as we don't know the
          // provided `inputComponent` structure.
          inputRef: this.handleRefInput,
          type: type
        }, inputProps, {
          ref: null
        });
      } else if (multiline) {
        if (rows && !rowsMax) {
          InputComponent = 'textarea';
        } else {
          inputProps = _extends({
            rowsMax: rowsMax,
            textareaRef: this.handleRefInput
          }, inputProps, {
            ref: null
          });
          InputComponent = Textarea;
        }
      } else {
        inputProps = _extends({
          type: type
        }, inputProps);
      }

      return React.createElement(FormControlContext.Provider, {
        value: null
      }, React.createElement("div", _extends({
        className: className,
        onClick: this.handleClick
      }, other), renderPrefix ? renderPrefix(_extends({}, fcs, {
        startAdornment: startAdornment,
        focused: focused
      })) : null, startAdornment, React.createElement(InputComponent, _extends({
        "aria-invalid": fcs.error,
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        className: inputClassName,
        defaultValue: defaultValue,
        disabled: fcs.disabled,
        id: id,
        name: name,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        placeholder: placeholder,
        readOnly: readOnly,
        required: fcs.required,
        rows: rows,
        value: value
      }, inputProps)), endAdornment));
    }
  }]);

  return InputBase;
}(React.Component);

InputBase.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: PropTypes.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: PropTypes.string,

  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object]))]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,

  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: PropTypes.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense', 'none']),

  /**
   * @ignore
   */
  muiFormControl: PropTypes.object,

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: PropTypes.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onEmpty: PropTypes.func,

  /**
   * @ignore
   */
  onFilled: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,

  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,

  /**
   * @ignore
   */
  renderPrefix: PropTypes.func,

  /**
   * If `true`, the input will be required.
   */
  required: PropTypes.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,

  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: PropTypes.string,

  /**
   * The input value, required for a controlled component.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object]))])
};
InputBase.defaultProps = {
  fullWidth: false,
  inputComponent: 'input',
  multiline: false,
  type: 'text'
};
export default withStyles(styles, {
  name: 'MuiInputBase'
})(withFormControlContext(InputBase));