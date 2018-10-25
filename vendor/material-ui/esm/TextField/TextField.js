import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
// @inheritedComponent FormControl
import React from 'react';
import ReactDOM from 'react-dom';
import warning from 'warning';
import PropTypes from 'prop-types';
import Input from '../Input';
import FilledInput from '../FilledInput';
import OutlinedInput from '../OutlinedInput';
import InputLabel from '../InputLabel';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import Select from '../Select';
var variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the properties applied to the native input, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField(props) {
    var _this;

    _classCallCheck(this, TextField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextField).call(this, props));
    _this.labelRef = React.createRef();
    return _this;
  }

  _createClass(TextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.variant === 'outlined') {
        this.labelNode = ReactDOM.findDOMNode(this.labelRef.current);
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          autoFocus = _this$props.autoFocus,
          children = _this$props.children,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue,
          error = _this$props.error,
          FormHelperTextProps = _this$props.FormHelperTextProps,
          fullWidth = _this$props.fullWidth,
          helperText = _this$props.helperText,
          id = _this$props.id,
          InputLabelProps = _this$props.InputLabelProps,
          inputProps = _this$props.inputProps,
          InputProps = _this$props.InputProps,
          inputRef = _this$props.inputRef,
          label = _this$props.label,
          multiline = _this$props.multiline,
          name = _this$props.name,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          placeholder = _this$props.placeholder,
          required = _this$props.required,
          rows = _this$props.rows,
          rowsMax = _this$props.rowsMax,
          select = _this$props.select,
          SelectProps = _this$props.SelectProps,
          type = _this$props.type,
          value = _this$props.value,
          variant = _this$props.variant,
          other = _objectWithoutProperties(_this$props, ["autoComplete", "autoFocus", "children", "className", "defaultValue", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

      warning(!select || Boolean(children), 'Material-UI: `children` must be passed when using the `TextField` component with `select`.');
      var InputMore = {};

      if (variant === 'outlined') {
        if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
          InputMore.notched = InputLabelProps.shrink;
        }

        InputMore.labelWidth = this.labelNode && this.labelNode.offsetWidth || 0;
      }

      var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
      var InputComponent = variantComponent[variant];
      var InputElement = React.createElement(InputComponent, _extends({
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        defaultValue: defaultValue,
        fullWidth: fullWidth,
        multiline: multiline,
        name: name,
        rows: rows,
        rowsMax: rowsMax,
        type: type,
        value: value,
        id: id,
        inputRef: inputRef,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        placeholder: placeholder,
        inputProps: inputProps
      }, InputMore, InputProps));
      return React.createElement(FormControl, _extends({
        "aria-describedby": helperTextId,
        className: className,
        error: error,
        fullWidth: fullWidth,
        required: required,
        variant: variant
      }, other), label && React.createElement(InputLabel, _extends({
        htmlFor: id,
        ref: this.labelRef
      }, InputLabelProps), label), select ? React.createElement(Select, _extends({
        value: value,
        input: InputElement
      }, SelectProps), children) : InputElement, helperText && React.createElement(FormHelperText, _extends({
        id: helperTextId
      }, FormHelperTextProps), helperText));
    }
  }]);

  return TextField;
}(React.Component);

TextField.propTypes = {
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
   * @ignore
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The default value of the `Input` element.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * Properties applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: PropTypes.object,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The helper text content.
   */
  helperText: PropTypes.node,

  /**
   * The id of the `input` element.
   * Use that property to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,

  /**
   * Properties applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: PropTypes.object,

  /**
   * Properties applied to the `Input` element.
   */
  InputProps: PropTypes.object,

  /**
   * Attributes applied to the native `input` element.
   */
  inputProps: PropTypes.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * The label content.
   */
  label: PropTypes.node,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
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
  onFocus: PropTypes.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * If `true`, the label is displayed as required and the input will be required.
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
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: PropTypes.bool,

  /**
   * Properties applied to the [`Select`](/api/select/) element.
   */
  SelectProps: PropTypes.object,

  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: PropTypes.string,

  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))]),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
};
TextField.defaultProps = {
  required: false,
  select: false,
  variant: 'standard'
};
export default TextField;