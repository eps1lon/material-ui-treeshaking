import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
// @inheritedComponent FormGroup
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import FormGroup from '../FormGroup';
import { createChainedFunction, find } from '../utils/helpers';

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadioGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.radios = [];

    _this.focus = function () {
      if (!_this.radios || !_this.radios.length) {
        return;
      }

      var focusRadios = _this.radios.filter(function (n) {
        return !n.disabled;
      });

      if (!focusRadios.length) {
        return;
      }

      var selectedRadio = find(focusRadios, function (n) {
        return n.checked;
      });

      if (selectedRadio) {
        selectedRadio.focus();
        return;
      }

      focusRadios[0].focus();
    };

    _this.handleRadioChange = function (event, checked) {
      if (checked && _this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    };

    return _this;
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          name = _this$props.name,
          value = _this$props.value,
          onChange = _this$props.onChange,
          other = _objectWithoutProperties(_this$props, ["children", "name", "value", "onChange"]);

      this.radios = [];
      return React.createElement(FormGroup, _extends({
        role: "radiogroup"
      }, other), React.Children.map(children, function (child) {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(child.type !== React.Fragment, ["Material-UI: the RadioGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
        return React.cloneElement(child, {
          name: name,
          inputRef: function inputRef(node) {
            if (node) {
              _this2.radios.push(node);
            }
          },
          checked: value === child.props.value,
          onChange: createChainedFunction(child.props.onChange, _this2.handleRadioChange)
        });
      }));
    }
  }]);

  return RadioGroup;
}(React.Component);

RadioGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The name used to reference the value of the control.
   */
  name: PropTypes.string,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {string} value The `value` of the selected radio button
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,

  /**
   * Value of the selected radio button.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
};
export default RadioGroup;