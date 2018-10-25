import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'table-header-group'
  }
};

var TableHead =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableHead, _React$Component);

  function TableHead() {
    _classCallCheck(this, TableHead);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableHead).apply(this, arguments));
  }

  _createClass(TableHead, [{
    key: "getChildContext",
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        tablelvl2: {
          variant: 'head'
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          Component = _this$props.component,
          other = _objectWithoutProperties(_this$props, ["classes", "className", "component"]);

      return React.createElement(Component, _extends({
        className: classNames(classes.root, className)
      }, other));
    }
  }]);

  return TableHead;
}(React.Component);

TableHead.propTypes = {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node.isRequired,

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
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object])
};
TableHead.defaultProps = {
  component: 'thead'
};
TableHead.childContextTypes = {
  tablelvl2: PropTypes.object
};
export default withStyles(styles, {
  name: 'MuiTableHead'
})(TableHead);