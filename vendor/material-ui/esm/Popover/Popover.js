import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
// @inheritedComponent Modal
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import warning from 'warning';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.

import EventListener from 'react-event-listener';
import ownerDocument from '../utils/ownerDocument';
import ownerWindow from '../utils/ownerWindow';
import { createChainedFunction } from '../utils/helpers';
import withStyles from '../styles/withStyles';
import Modal from '../Modal';
import Grow from '../Grow';
import Paper from '../Paper';

function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

export var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none'
  }
};

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this));
    _this.handleGetOffsetTop = getOffsetTop;
    _this.handleGetOffsetLeft = getOffsetLeft;

    _this.componentWillUnmount = function () {
      _this.handleResize.clear();
    };

    _this.setPositioningStyles = function (element) {
      var positioning = _this.getPositioningStyle(element);

      if (positioning.top !== null) {
        element.style.top = positioning.top;
      }

      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }

      element.style.transformOrigin = positioning.transformOrigin;
    };

    _this.getPositioningStyle = function (element) {
      var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          anchorReference = _this$props.anchorReference,
          marginThreshold = _this$props.marginThreshold; // Check if the parent has requested anchoring on an inner content node

      var contentAnchorOffset = _this.getContentAnchorOffset(element);

      var elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      }; // Get the transform origin point on the element itself

      var transformOrigin = _this.getTransformOrigin(elemRect, contentAnchorOffset);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(transformOrigin)
        };
      } // Get the offset of of the anchoring element


      var anchorOffset = _this.getAnchorOffset(contentAnchorOffset); // Calculate element positioning


      var top = anchorOffset.top - transformOrigin.vertical;
      var left = anchorOffset.left - transformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

      var containerWindow = ownerWindow(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

      var heightThreshold = containerWindow.innerHeight - marginThreshold;
      var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;

        top -= _diff;
        transformOrigin.vertical += _diff;
      }

      warning(elemRect.height < heightThreshold || !elemRect.height || !heightThreshold, ['Material-UI: the popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n')); // Check if the horizontal axis needs shifting

      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;

        left -= _diff2;
        transformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;

        left -= _diff3;
        transformOrigin.horizontal += _diff3;
      }

      return {
        top: "".concat(top, "px"),
        left: "".concat(left, "px"),
        transformOrigin: getTransformOriginValue(transformOrigin)
      };
    };

    _this.handleEntering = function (element) {
      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }

      _this.setPositioningStyles(element);
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = debounce(function () {
        // Because we debounce the event, the open property might no longer be true
        // when the callback resolves.
        if (!_this.props.open) {
          return;
        }

        _this.setPositioningStyles(_this.paperRef);
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.action) {
        this.props.action({
          updatePosition: this.handleResize
        });
      }
    }
  }, {
    key: "getAnchorOffset",
    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    value: function getAnchorOffset(contentAnchorOffset) {
      var _this$props2 = this.props,
          anchorEl = _this$props2.anchorEl,
          anchorOrigin = _this$props2.anchorOrigin,
          anchorReference = _this$props2.anchorReference,
          anchorPosition = _this$props2.anchorPosition;

      if (anchorReference === 'anchorPosition') {
        warning(anchorPosition, 'Material-UI: you need to provide a `anchorPosition` property when using ' + '<Popover anchorReference="anchorPosition" />.');
        return anchorPosition;
      } // If an anchor element wasn't provided, just use the parent body element of this Popover


      var anchorElement = getAnchorEl(anchorEl) || ownerDocument(this.paperRef).body;
      var anchorRect = anchorElement.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
      return {
        top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    } // Returns the vertical offset of inner content to anchor the transform on if provided

  }, {
    key: "getContentAnchorOffset",
    value: function getContentAnchorOffset(element) {
      var _this$props3 = this.props,
          getContentAnchorEl = _this$props3.getContentAnchorEl,
          anchorReference = _this$props3.anchorReference;
      var contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        var contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && element.contains(contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        } // != the default value


        warning(this.props.anchorOrigin.vertical === 'top', ['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` property to the popover component.', 'Only use one of the two properties.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n'));
      }

      return contentAnchorOffset;
    } // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

  }, {
    key: "getTransformOrigin",
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;
      return {
        vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          action = _this$props4.action,
          anchorEl = _this$props4.anchorEl,
          anchorOrigin = _this$props4.anchorOrigin,
          anchorPosition = _this$props4.anchorPosition,
          anchorReference = _this$props4.anchorReference,
          children = _this$props4.children,
          classes = _this$props4.classes,
          containerProp = _this$props4.container,
          elevation = _this$props4.elevation,
          getContentAnchorEl = _this$props4.getContentAnchorEl,
          marginThreshold = _this$props4.marginThreshold,
          ModalClasses = _this$props4.ModalClasses,
          onEnter = _this$props4.onEnter,
          onEntered = _this$props4.onEntered,
          onEntering = _this$props4.onEntering,
          onExit = _this$props4.onExit,
          onExited = _this$props4.onExited,
          onExiting = _this$props4.onExiting,
          open = _this$props4.open,
          PaperProps = _this$props4.PaperProps,
          role = _this$props4.role,
          transformOrigin = _this$props4.transformOrigin,
          TransitionComponent = _this$props4.TransitionComponent,
          transitionDurationProp = _this$props4.transitionDuration,
          _this$props4$Transiti = _this$props4.TransitionProps,
          TransitionProps = _this$props4$Transiti === void 0 ? {} : _this$props4$Transiti,
          other = _objectWithoutProperties(_this$props4, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "container", "elevation", "getContentAnchorEl", "marginThreshold", "ModalClasses", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "role", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

      var transitionDuration = transitionDurationProp;

      if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
        transitionDuration = undefined;
      } // If the container prop is provided, use that
      // If the anchorEl prop is provided, use its parent body element as the container
      // If neither are provided let the Modal take care of choosing the container


      var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
      return React.createElement(Modal, _extends({
        classes: ModalClasses,
        container: container,
        open: open,
        BackdropProps: {
          invisible: true
        }
      }, other), React.createElement(TransitionComponent, _extends({
        appear: true,
        in: open,
        onEnter: onEnter,
        onEntered: onEntered,
        onExit: onExit,
        onExited: onExited,
        onExiting: onExiting,
        role: role,
        timeout: transitionDuration
      }, TransitionProps, {
        onEntering: createChainedFunction(this.handleEntering, TransitionProps.onEntering)
      }), React.createElement(Paper, _extends({
        className: classes.paper,
        "data-mui-test": "Popover",
        elevation: elevation,
        ref: function ref(_ref) {
          _this2.paperRef = ReactDOM.findDOMNode(_ref);
        }
      }, PaperProps), React.createElement(EventListener, {
        target: "window",
        onResize: this.handleResize
      }), children)));
    }
  }]);

  return Popover;
}(React.Component);

Popover.propTypes = {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updatePosition() action.
   *
   * @param {object} actions This object contains all posible actions
   * that can be triggered programmatically.
   */
  action: PropTypes.func,

  /**
   * This is the DOM element, or a function that returns the DOM element,
   * that may be used to set the position of the popover.
   */
  anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['left', 'center', 'right'])]).isRequired,
    vertical: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['top', 'center', 'bottom'])]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
  }),

  /*
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: PropTypes.oneOf(['anchorEl', 'anchorPosition', 'none']),

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
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * The elevation of the popover.
   */
  elevation: PropTypes.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` property.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: PropTypes.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: PropTypes.number,

  /**
   * `classes` property applied to the [`Modal`](/api/modal/) element.
   */
  ModalClasses: PropTypes.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired before the component is exiting.
   */
  onExit: PropTypes.func,

  /**
   * Callback fired when the component has exited.
   */
  onExited: PropTypes.func,

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: PropTypes.func,

  /**
   * If `true`, the popover is visible.
   */
  open: PropTypes.bool.isRequired,

  /**
   * Properties applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: PropTypes.object,

  /**
   * @ignore
   */
  role: PropTypes.string,

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['left', 'center', 'right'])]).isRequired,
    vertical: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['top', 'center', 'bottom'])]).isRequired
  }),

  /**
   * Transition component.
   */
  TransitionComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  }), PropTypes.oneOf(['auto'])]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: PropTypes.object
};
Popover.defaultProps = {
  anchorReference: 'anchorEl',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  elevation: 8,
  marginThreshold: 16,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  TransitionComponent: Grow,
  transitionDuration: 'auto'
};
export default withStyles(styles, {
  name: 'MuiPopover'
})(Popover);