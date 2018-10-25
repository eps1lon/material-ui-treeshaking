import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if `dense={true}` & `disablePadding={false}`. */
  dense: {
    paddingTop: 4,
    paddingBottom: 4
  },

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        dense: this.props.dense
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          children = _this$props.children,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          Component = _this$props.component,
          dense = _this$props.dense,
          disablePadding = _this$props.disablePadding,
          subheader = _this$props.subheader,
          other = _objectWithoutProperties(_this$props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

      var className = classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.dense, dense && !disablePadding), _defineProperty(_classNames, classes.padding, !disablePadding), _defineProperty(_classNames, classes.subheader, subheader), _classNames), classNameProp);
      return React.createElement(Component, _extends({
        className: className
      }, other), subheader, children);
    }
  }]);

  return List;
}(React.Component);

List.propTypes = {
  /**
   * The content of the component.
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
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items. The property is available to descendant components as the
   * `dense` context.
   */
  dense: PropTypes.bool,

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: PropTypes.bool,

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: PropTypes.node
};
List.defaultProps = {
  component: 'ul',
  dense: false,
  disablePadding: false
};
List.childContextTypes = {
  dense: PropTypes.bool
};
export default withStyles(styles, {
  name: 'MuiList'
})(List);