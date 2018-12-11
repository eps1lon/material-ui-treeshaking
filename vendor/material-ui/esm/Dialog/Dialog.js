import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// @inheritedComponent Modal
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import Modal from '../Modal';
import Fade from '../Fade';
import { duration } from '../styles/transitions';
import chainPropTypes from '../utils/chainPropTypes';
import Paper from '../Paper';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden'
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none'
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      display: 'flex',
      flexDirection: 'column',
      margin: 48,
      position: 'relative',
      overflowY: 'auto' // Fix IE 11 issue, to remove at some point.

    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      flex: '0 1 auto',
      maxHeight: 'calc(100% - 96px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      margin: '48px auto'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 360),
      '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 360) + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.sm + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.md + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.lg + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.xl + 48 * 2), {
        margin: 48
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: '100%'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0
      }
    }
  };
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleBackdropClick = function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(event);
      }

      if (!_this.props.disableBackdropClick && _this.props.onClose) {
        _this.props.onClose(event, 'backdropClick');
      }
    };

    return _this;
  }

  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          BackdropProps = _this$props.BackdropProps,
          children = _this$props.children,
          classes = _this$props.classes,
          className = _this$props.className,
          disableBackdropClick = _this$props.disableBackdropClick,
          disableEscapeKeyDown = _this$props.disableEscapeKeyDown,
          fullScreen = _this$props.fullScreen,
          fullWidth = _this$props.fullWidth,
          maxWidth = _this$props.maxWidth,
          onBackdropClick = _this$props.onBackdropClick,
          onClose = _this$props.onClose,
          onEnter = _this$props.onEnter,
          onEntered = _this$props.onEntered,
          onEntering = _this$props.onEntering,
          onEscapeKeyDown = _this$props.onEscapeKeyDown,
          onExit = _this$props.onExit,
          onExited = _this$props.onExited,
          onExiting = _this$props.onExiting,
          open = _this$props.open,
          PaperProps = _this$props.PaperProps,
          scroll = _this$props.scroll,
          TransitionComponent = _this$props.TransitionComponent,
          transitionDuration = _this$props.transitionDuration,
          TransitionProps = _this$props.TransitionProps,
          other = _objectWithoutProperties(_this$props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"]);

      return React.createElement(Modal, _extends({
        className: classNames(classes.root, className),
        BackdropProps: _extends({
          transitionDuration: transitionDuration
        }, BackdropProps),
        disableBackdropClick: disableBackdropClick,
        disableEscapeKeyDown: disableEscapeKeyDown,
        onBackdropClick: onBackdropClick,
        onEscapeKeyDown: onEscapeKeyDown,
        onClose: onClose,
        open: open,
        role: "dialog"
      }, other), React.createElement(TransitionComponent, _extends({
        appear: true,
        in: open,
        timeout: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      }, TransitionProps), React.createElement("div", {
        className: classNames(classes.container, classes["scroll".concat(capitalize(scroll))]),
        onClick: this.handleBackdropClick,
        role: "document"
      }, React.createElement(Paper, _extends({
        elevation: 24,
        className: classNames(classes.paper, classes["paperScroll".concat(capitalize(scroll))], (_classNames = {}, _defineProperty(_classNames, classes["paperWidth".concat(maxWidth ? capitalize(maxWidth) : '')], maxWidth), _defineProperty(_classNames, classes.paperFullScreen, fullScreen), _defineProperty(_classNames, classes.paperFullWidth, fullWidth), _classNames))
      }, PaperProps), children))));
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.propTypes = {
  /**
   * @ignore
   */
  BackdropProps: PropTypes.object,

  /**
   * Dialog children, usually the included sub-components.
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
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: PropTypes.bool,

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: PropTypes.bool,

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: PropTypes.bool,

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: PropTypes.bool,

  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: PropTypes.func,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,

  /**
   * Callback fired before the dialog enters.
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: PropTypes.func,

  /**
   * Callback fired before the dialog exits.
   */
  onExit: PropTypes.func,

  /**
   * Callback fired when the dialog has exited.
   */
  onExited: PropTypes.func,

  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: PropTypes.func,

  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool.isRequired,

  /**
   * Properties applied to the [`Paper`](/api/paper/) element.
   * If you want to add a class to the `Paper` component use
   * `classes.paper` in the `Dialog` props instead.
   */
  PaperProps: chainPropTypes(PropTypes.object, function (props) {
    var _props$PaperProps = props.PaperProps,
        PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps;

    if ('className' in PaperProps) {
      return new Error('`className` overrides all `Dialog` specific styles in `Paper`. If you wanted to add ' + 'styles to the `Paper` component use `classes.paper` in the `Dialog` props ' + "instead.".concat(process.env.NODE_ENV === 'test' ? Date.now() : ''));
    }

    return null;
  }),

  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: PropTypes.oneOf(['body', 'paper']),

  /**
   * Transition component.
   */
  TransitionComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: PropTypes.object
};
Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  scroll: 'paper',
  TransitionComponent: Fade,
  transitionDuration: {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  }
};
export default withStyles(styles, {
  name: 'MuiDialog'
})(Dialog);