import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
// @inheritedComponent List
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import keycode from 'keycode';
import warning from 'warning';
import ownerDocument from '../utils/ownerDocument';
import List from '../List';

var MenuList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuList, _React$Component);

  function MenuList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      currentTabIndex: null
    };

    _this.handleBlur = function (event) {
      _this.blurTimer = setTimeout(function () {
        if (_this.listRef) {
          var list = _this.listRef;
          var currentFocus = ownerDocument(list).activeElement;

          if (!list.contains(currentFocus)) {
            _this.resetTabIndex();
          }
        }
      }, 30);

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    };

    _this.handleKeyDown = function (event) {
      var list = _this.listRef;
      var key = keycode(event);
      var currentFocus = ownerDocument(list).activeElement;

      if ((key === 'up' || key === 'down') && (!currentFocus || currentFocus && !list.contains(currentFocus))) {
        if (_this.selectedItemRef) {
          _this.selectedItemRef.focus();
        } else {
          list.firstChild.focus();
        }
      } else if (key === 'down') {
        event.preventDefault();

        if (currentFocus.nextElementSibling) {
          currentFocus.nextElementSibling.focus();
        }
      } else if (key === 'up') {
        event.preventDefault();

        if (currentFocus.previousElementSibling) {
          currentFocus.previousElementSibling.focus();
        }
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event, key);
      }
    };

    _this.handleItemFocus = function (event) {
      var list = _this.listRef;

      if (list) {
        for (var i = 0; i < list.children.length; i += 1) {
          if (list.children[i] === event.currentTarget) {
            _this.setTabIndex(i);

            break;
          }
        }
      }
    };

    return _this;
  }

  _createClass(MenuList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetTabIndex();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.blurTimer);
    }
  }, {
    key: "setTabIndex",
    value: function setTabIndex(index) {
      this.setState({
        currentTabIndex: index
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      var currentTabIndex = this.state.currentTabIndex;
      var list = this.listRef;

      if (!list || !list.children || !list.firstChild) {
        return;
      }

      if (currentTabIndex && currentTabIndex >= 0) {
        list.children[currentTabIndex].focus();
      } else {
        list.firstChild.focus();
      }
    }
  }, {
    key: "resetTabIndex",
    value: function resetTabIndex() {
      var list = this.listRef;
      var currentFocus = ownerDocument(list).activeElement;
      var items = [];

      for (var i = 0; i < list.children.length; i += 1) {
        items.push(list.children[i]);
      }

      var currentFocusIndex = items.indexOf(currentFocus);

      if (currentFocusIndex !== -1) {
        return this.setTabIndex(currentFocusIndex);
      }

      if (this.selectedItemRef) {
        return this.setTabIndex(items.indexOf(this.selectedItemRef));
      }

      return this.setTabIndex(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          onBlur = _this$props.onBlur,
          onKeyDown = _this$props.onKeyDown,
          other = _objectWithoutProperties(_this$props, ["children", "className", "onBlur", "onKeyDown"]);

      return React.createElement(List, _extends({
        role: "menu",
        ref: function ref(_ref) {
          _this2.listRef = ReactDOM.findDOMNode(_ref);
        },
        className: className,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur
      }, other), React.Children.map(children, function (child, index) {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(child.type !== React.Fragment, ["Material-UI: the MenuList component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
        return React.cloneElement(child, {
          tabIndex: index === _this2.state.currentTabIndex ? 0 : -1,
          ref: child.props.selected ? function (ref) {
            _this2.selectedItemRef = ReactDOM.findDOMNode(ref);
          } : undefined,
          onFocus: _this2.handleItemFocus
        });
      }));
    }
  }]);

  return MenuList;
}(React.Component);

MenuList.propTypes = {
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func
};
export default MenuList;