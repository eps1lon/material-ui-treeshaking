import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
// @inheritedComponent EventListener
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import ownerDocument from '../utils/ownerDocument';
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */

class ClickAwayListener extends React.Component {
  constructor(...args) {
    super(...args);
    this.mounted = false;

    this.handleClickAway = event => {
      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      } // IE 11 support, which trigger the handleClickAway even after the unbind


      if (!this.mounted) {
        return;
      } // The child might render null.


      if (!this.node) {
        return;
      }

      const doc = ownerDocument(this.node);

      if (doc.documentElement && doc.documentElement.contains(event.target) && !this.node.contains(event.target)) {
        this.props.onClickAway(event);
      }
    };
  }

  componentDidMount() {
    // Finds the first child when a component returns a fragment.
    // https://github.com/facebook/react/blob/036ae3c6e2f056adffc31dfb78d1b6f0c63272f0/packages/react-dom/src/__tests__/ReactDOMFiber-test.js#L105
    this.node = ReactDOM.findDOMNode(this);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const _this$props = this.props,
          {
      children,
      mouseEvent,
      touchEvent
    } = _this$props,
          other = _objectWithoutPropertiesLoose(_this$props, ["children", "mouseEvent", "touchEvent", "onClickAway"]);

    const listenerProps = {};

    if (mouseEvent !== false) {
      listenerProps[mouseEvent] = this.handleClickAway;
    }

    if (touchEvent !== false) {
      listenerProps[touchEvent] = this.handleClickAway;
    }

    return React.createElement(React.Fragment, null, children, React.createElement(EventListener, _extends({
      target: "document"
    }, listenerProps, other)));
  }

}

ClickAwayListener.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The wrapped element.
   */
  children: PropTypes.element.isRequired,

  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   */
  mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),

  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: PropTypes.func.isRequired,

  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   */
  touchEvent: PropTypes.oneOf(['onTouchStart', 'onTouchEnd', false])
} : {};
ClickAwayListener.defaultProps = {
  mouseEvent: 'onMouseUp',
  touchEvent: 'onTouchEnd'
};
export default ClickAwayListener;