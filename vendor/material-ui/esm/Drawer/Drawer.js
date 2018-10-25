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
import Modal from '../Modal';
import withStyles from '../styles/withStyles';
import Slide from '../Slide';
import Paper from '../Paper';
import { capitalize } from '../utils/helpers';
import { duration } from '../styles/transitions';
var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};
export function isHorizontal(props) {
  return ['left', 'right'].indexOf(props.anchor) !== -1;
}
export function getAnchor(props) {
  return props.theme.direction === 'rtl' && isHorizontal(props) ? oppositeDirection[props.anchor] : props.anchor;
}
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element if `variant="permanent or persistent"`. */
    docked: {
      flex: '0 0 auto'
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 'none'
    },

    /* Styles applied to the `Paper` component if `anchor="left"`. */
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },

    /* Styles applied to the `Paper` component if `anchor="right"`. */
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },

    /* Styles applied to the `Paper` component if `anchor="top"`. */
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"`. */
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },

    /* Styles applied to the `Paper` component if `anchor="left"` & `variant` is not "temporary". */
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="top"` & `variant` is not "temporary". */
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="right"` & `variant` is not "temporary". */
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Paper` component if `anchor="bottom"` & `variant` is not "temporary". */
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },

    /* Styles applied to the `Modal` component. */
    modal: {}
  };
};
/**
 * The properties of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */

var Drawer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Drawer, _React$Component);

  function Drawer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Drawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Drawer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.mounted = false;
    return _this;
  }

  _createClass(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          anchorProp = _this$props.anchor,
          BackdropProps = _this$props.BackdropProps,
          children = _this$props.children,
          classes = _this$props.classes,
          className = _this$props.className,
          elevation = _this$props.elevation,
          _this$props$ModalProp = _this$props.ModalProps;
      _this$props$ModalProp = _this$props$ModalProp === void 0 ? {} : _this$props$ModalProp;

      var BackdropPropsProp = _this$props$ModalProp.BackdropProps,
          ModalProps = _objectWithoutProperties(_this$props$ModalProp, ["BackdropProps"]),
          onClose = _this$props.onClose,
          open = _this$props.open,
          PaperProps = _this$props.PaperProps,
          SlideProps = _this$props.SlideProps,
          theme = _this$props.theme,
          transitionDuration = _this$props.transitionDuration,
          variant = _this$props.variant,
          other = _objectWithoutProperties(_this$props, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "theme", "transitionDuration", "variant"]);

      var anchor = getAnchor(this.props);
      var drawer = React.createElement(Paper, _extends({
        elevation: variant === 'temporary' ? elevation : 0,
        square: true,
        className: classNames(classes.paper, classes["paperAnchor".concat(capitalize(anchor))], _defineProperty({}, classes["paperAnchorDocked".concat(capitalize(anchor))], variant !== 'temporary'))
      }, PaperProps), children);

      if (variant === 'permanent') {
        return React.createElement("div", _extends({
          className: classNames(classes.docked, className)
        }, other), drawer);
      }

      var slidingDrawer = React.createElement(Slide, _extends({
        in: open,
        direction: oppositeDirection[anchor],
        timeout: transitionDuration,
        appear: this.mounted
      }, SlideProps), drawer);

      if (variant === 'persistent') {
        return React.createElement("div", _extends({
          className: classNames(classes.docked, className)
        }, other), slidingDrawer);
      } // variant === temporary


      return React.createElement(Modal, _extends({
        BackdropProps: _extends({}, BackdropProps, BackdropPropsProp, {
          transitionDuration: transitionDuration
        }),
        className: classNames(classes.modal, className),
        open: open,
        onClose: onClose
      }, other, ModalProps), slidingDrawer);
    }
  }]);

  return Drawer;
}(React.Component);

Drawer.propTypes = {
  /**
   * Side from which the drawer will appear.
   */
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),

  /**
   * The contents of the drawer.
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
   * The elevation of the drawer.
   */
  elevation: PropTypes.number,

  /**
   * Properties applied to the [`Modal`](/api/modal/) element.
   */
  ModalProps: PropTypes.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,

  /**
   * If `true`, the drawer is open.
   */
  open: PropTypes.bool,

  /**
   * Properties applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: PropTypes.object,

  /**
   * Properties applied to the [`Slide`](/api/slide/) element.
   */
  SlideProps: PropTypes.object,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary'])
};
Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  transitionDuration: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  },
  variant: 'temporary' // Mobile first.

};
export default withStyles(styles, {
  name: 'MuiDrawer',
  flip: false,
  withTheme: true
})(Drawer);