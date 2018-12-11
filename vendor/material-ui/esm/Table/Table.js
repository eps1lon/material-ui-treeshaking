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
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import TableContext from './TableContext';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'table',
      fontFamily: theme.typography.fontFamily,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0
    }
  };
};

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.memoizedContextValue = {};
    return _this;
  }

  _createClass(Table, [{
    key: "useMemo",
    // To replace with the corresponding Hook once Material-UI v4.0.0 is out:
    // https://reactjs.org/docs/hooks-reference.html#usememo
    value: function useMemo(contextValue) {
      var objectKeys = Object.keys(contextValue);

      for (var i = 0; i < objectKeys.length; i += 1) {
        var objectKey = objectKeys[i];

        if (contextValue[objectKey] !== this.memoizedContextValue[objectKey]) {
          this.memoizedContextValue = contextValue;
          break;
        }
      }

      return this.memoizedContextValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          Component = _this$props.component,
          padding = _this$props.padding,
          other = _objectWithoutProperties(_this$props, ["classes", "className", "component", "padding"]);

      return React.createElement(TableContext.Provider, {
        value: this.useMemo({
          padding: padding
        })
      }, React.createElement(Component, _extends({
        className: classNames(classes.root, className)
      }, other)));
    }
  }]);

  return Table;
}(React.Component);

Table.propTypes = {
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
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
  component: componentPropType,

  /**
   * Allows TableCells to inherit padding of the Table.
   */
  padding: PropTypes.oneOf(['default', 'checkbox', 'dense', 'none'])
};
Table.defaultProps = {
  component: 'table',
  padding: 'default'
};
export default withStyles(styles, {
  name: 'MuiTable'
})(Table);