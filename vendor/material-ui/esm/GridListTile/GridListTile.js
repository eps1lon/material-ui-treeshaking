import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EventListener from 'react-event-listener';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.

import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    boxSizing: 'border-box',
    flexShrink: 0
  },

  /* Styles applied to the `div` element that wraps the children. */
  tile: {
    position: 'relative',
    display: 'block',
    // In case it's not rendered with a div.
    height: '100%',
    overflow: 'hidden'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  },

  /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
  }
};

var GridListTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridListTile, _React$Component);

  function GridListTile() {
    var _this;

    _classCallCheck(this, GridListTile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GridListTile).call(this));

    _this.fit = function () {
      var imgElement = _this.imgElement;

      if (!imgElement || !imgElement.complete) {
        return;
      }

      if (imgElement.width / imgElement.height > imgElement.parentNode.offsetWidth / imgElement.parentNode.offsetHeight) {
        var _imgElement$classList, _imgElement$classList2;

        (_imgElement$classList = imgElement.classList).remove.apply(_imgElement$classList, _toConsumableArray(_this.props.classes.imgFullWidth.split(' ')));

        (_imgElement$classList2 = imgElement.classList).add.apply(_imgElement$classList2, _toConsumableArray(_this.props.classes.imgFullHeight.split(' ')));
      } else {
        var _imgElement$classList3, _imgElement$classList4;

        (_imgElement$classList3 = imgElement.classList).remove.apply(_imgElement$classList3, _toConsumableArray(_this.props.classes.imgFullHeight.split(' ')));

        (_imgElement$classList4 = imgElement.classList).add.apply(_imgElement$classList4, _toConsumableArray(_this.props.classes.imgFullWidth.split(' ')));
      }

      imgElement.removeEventListener('load', _this.fit);
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = debounce(function () {
        _this.fit();
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  _createClass(GridListTile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ensureImageCover();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.ensureImageCover();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
    }
  }, {
    key: "ensureImageCover",
    value: function ensureImageCover() {
      if (!this.imgElement) {
        return;
      }

      if (this.imgElement.complete) {
        this.fit();
      } else {
        this.imgElement.addEventListener('load', this.fit);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          classes = _this$props.classes,
          className = _this$props.className,
          cols = _this$props.cols,
          Component = _this$props.component,
          rows = _this$props.rows,
          other = _objectWithoutProperties(_this$props, ["children", "classes", "className", "cols", "component", "rows"]);

      return React.createElement(Component, _extends({
        className: classNames(classes.root, className)
      }, other), React.createElement(EventListener, {
        target: "window",
        onResize: this.handleResize
      }), React.createElement("div", {
        className: classes.tile
      }, React.Children.map(children, function (child) {
        if (!React.isValidElement(child)) {
          return null;
        }

        if (child.type === 'img') {
          return React.cloneElement(child, {
            ref: function ref(node) {
              _this2.imgElement = node;
            }
          });
        }

        return child;
      })));
    }
  }]);

  return GridListTile;
}(React.Component);

GridListTile.propTypes = {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
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
   * Width of the tile in number of grid cells.
   */
  cols: PropTypes.number,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Height of the tile in number of grid cells.
   */
  rows: PropTypes.number
};
GridListTile.defaultProps = {
  cols: 1,
  component: 'li',
  rows: 1
};
export default withStyles(styles, {
  name: 'MuiGridListTile'
})(GridListTile);