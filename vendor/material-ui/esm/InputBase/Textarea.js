import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.

import EventListener from 'react-event-listener';
import withStyles from '../styles/withStyles';
import { setRef } from '../utils/reactHelpers';
var ROWS_HEIGHT = 19;
export var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    // because the shadow has position: 'absolute',
    width: '100%'
  },
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    font: 'inherit',
    padding: 0,
    cursor: 'inherit',
    boxSizing: 'border-box',
    lineHeight: 'inherit',
    border: 'none',
    outline: 'none',
    background: 'transparent'
  },
  shadow: {
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: 'hidden',
    // Visibility needed to hide the extra text area on ipads
    visibility: 'hidden',
    position: 'absolute',
    height: 'auto',
    whiteSpace: 'pre-wrap'
  }
};
/**
 * @ignore - internal component.
 */

var Textarea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea(props) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).call(this));

    _this.handleRefInput = function (ref) {
      _this.inputRef = ref;
      setRef(_this.props.textareaRef, ref);
    };

    _this.handleRefSinglelineShadow = function (ref) {
      _this.singlelineShadowRef = ref;
    };

    _this.handleRefShadow = function (ref) {
      _this.shadowRef = ref;
    };

    _this.handleChange = function (event) {
      _this.value = event.target.value;

      if (!_this.isControlled) {
        // The component is not controlled, we need to update the shallow value.
        _this.shadowRef.value = _this.value;

        _this.syncHeightWithShadow();
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.isControlled = props.value != null; // <Input> expects the components it renders to respond to 'value'
    // so that it can check whether they are filled.

    _this.value = props.value || props.defaultValue || '';
    _this.state = {
      height: Number(props.rows) * ROWS_HEIGHT
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = debounce(function () {
        _this.syncHeightWithShadow();
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  _createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncHeightWithShadow();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncHeightWithShadow();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
    }
  }, {
    key: "syncHeightWithShadow",
    value: function syncHeightWithShadow() {
      var props = this.props; // Guarding for **broken** shallow rendering method that call componentDidMount
      // but doesn't handle refs correctly.
      // To remove once the shallow rendering has been fixed.

      if (!this.shadowRef) {
        return;
      }

      if (this.isControlled) {
        // The component is controlled, we need to update the shallow value.
        this.shadowRef.value = props.value == null ? '' : String(props.value);
      }

      var lineHeight = this.singlelineShadowRef.scrollHeight;
      var newHeight = this.shadowRef.scrollHeight; // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013

      if (newHeight === undefined) {
        return;
      }

      if (Number(props.rowsMax) >= Number(props.rows)) {
        newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
      }

      newHeight = Math.max(newHeight, lineHeight); // Need a large enough different to update the height.
      // This prevents infinite rendering loop.

      if (Math.abs(this.state.height - newHeight) > 1) {
        this.setState({
          height: newHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          rows = _this$props.rows,
          rowsMax = _this$props.rowsMax,
          textareaRef = _this$props.textareaRef,
          value = _this$props.value,
          style = _this$props.style,
          other = _objectWithoutProperties(_this$props, ["classes", "className", "defaultValue", "onChange", "rows", "rowsMax", "textareaRef", "value", "style"]);

      return React.createElement("div", {
        className: classes.root
      }, React.createElement(EventListener, {
        target: "window",
        onResize: this.handleResize
      }), React.createElement("textarea", {
        "aria-hidden": "true",
        className: classnames(classes.textarea, classes.shadow),
        readOnly: true,
        ref: this.handleRefSinglelineShadow,
        rows: "1",
        tabIndex: -1,
        value: ""
      }), React.createElement("textarea", {
        "aria-hidden": "true",
        className: classnames(classes.textarea, classes.shadow),
        defaultValue: defaultValue,
        readOnly: true,
        ref: this.handleRefShadow,
        rows: rows,
        tabIndex: -1,
        value: value
      }), React.createElement("textarea", _extends({
        rows: rows,
        className: classnames(classes.textarea, className),
        defaultValue: defaultValue,
        value: value,
        onChange: this.handleChange,
        ref: this.handleRefInput,
        style: _extends({
          height: this.state.height
        }, style)
      }, other)));
    }
  }]);

  return Textarea;
}(React.Component);

Textarea.propTypes = {
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
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * @ignore
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   */
  onChange: PropTypes.func,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Use that property to pass a ref callback to the native textarea element.
   */
  textareaRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * @ignore
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Textarea.defaultProps = {
  rows: 1
};
export default withStyles(styles, {
  name: 'MuiPrivateTextarea'
})(Textarea);