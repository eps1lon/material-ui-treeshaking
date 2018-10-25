import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
// @inheritedComponent Modal
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
import Modal from '../Modal';
import Fade from '../Fade';
import { duration } from '../styles/transitions';
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

    /* Styles applied to the `Paper` component. */
    paper: {
      display: 'flex',
      flexDirection: 'column',
      margin: 48,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none'
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

function Dialog(props) {
  var _classNames;

  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      disableBackdropClick = props.disableBackdropClick,
      disableEscapeKeyDown = props.disableEscapeKeyDown,
      fullScreen = props.fullScreen,
      fullWidth = props.fullWidth,
      maxWidth = props.maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      PaperProps = props.PaperProps,
      scroll = props.scroll,
      TransitionComponent = props.TransitionComponent,
      transitionDuration = props.transitionDuration,
      TransitionProps = props.TransitionProps,
      other = _objectWithoutProperties(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  return React.createElement(Modal, _extends({
    className: classNames(classes.root, classes["scroll".concat(capitalize(scroll))], className),
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
  }, TransitionProps), React.createElement(Paper, _extends({
    elevation: 24,
    className: classNames(classes.paper, classes["paperScroll".concat(capitalize(scroll))], (_classNames = {}, _defineProperty(_classNames, classes["paperWidth".concat(maxWidth ? capitalize(maxWidth) : '')], maxWidth), _defineProperty(_classNames, classes.paperFullScreen, fullScreen), _defineProperty(_classNames, classes.paperFullWidth, fullWidth), _classNames))
  }, PaperProps), children)));
}

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
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', false]),

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
   */
  PaperProps: PropTypes.object,

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