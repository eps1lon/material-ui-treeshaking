import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 48,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily
    },

    /* Styles applied to the root element if `titlePosition="bottom"`. */
    titlePositionBottom: {
      bottom: 0
    },

    /* Styles applied to the root element if `titlePosition="top"`. */
    titlePositionTop: {
      top: 0
    },

    /* Styles applied to the root element if a `subtitle` is provided. */
    rootSubtitle: {
      height: 68
    },

    /* Styles applied to the title and subtitle container element. */
    titleWrap: {
      flexGrow: 1,
      marginLeft: theme.mixins.gutters().paddingLeft,
      marginRight: theme.mixins.gutters().paddingRight,
      color: theme.palette.common.white,
      overflow: 'hidden'
    },

    /* Styles applied to the container element if `actionPosition="left"`. */
    titleWrapActionPosLeft: {
      marginLeft: 0
    },

    /* Styles applied to the container element if `actionPosition="right"`. */
    titleWrapActionPosRight: {
      marginRight: 0
    },

    /* Styles applied to the title container element. */
    title: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '24px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the subtitle container element. */
    subtitle: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the actionIcon if supplied. */
    actionIcon: {},

    /* Styles applied to the actionIcon if `actionPosition="left"`. */
    actionIconActionPosLeft: {
      order: -1
    }
  };
};

function GridListTileBar(props) {
  var _classNames, _classNames2;

  var actionIcon = props.actionIcon,
      actionPosition = props.actionPosition,
      classes = props.classes,
      classNameProp = props.className,
      subtitle = props.subtitle,
      title = props.title,
      titlePosition = props.titlePosition,
      other = _objectWithoutProperties(props, ["actionIcon", "actionPosition", "classes", "className", "subtitle", "title", "titlePosition"]);

  var actionPos = actionIcon && actionPosition;
  var className = classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.titlePositionBottom, titlePosition === 'bottom'), _defineProperty(_classNames, classes.titlePositionTop, titlePosition === 'top'), _defineProperty(_classNames, classes.rootSubtitle, subtitle), _classNames), classNameProp); // Remove the margin between the title / subtitle wrapper, and the Action Icon

  var titleWrapClassName = classNames(classes.titleWrap, (_classNames2 = {}, _defineProperty(_classNames2, classes.titleWrapActionPosLeft, actionPos === 'left'), _defineProperty(_classNames2, classes.titleWrapActionPosRight, actionPos === 'right'), _classNames2));
  return React.createElement("div", _extends({
    className: className
  }, other), React.createElement("div", {
    className: titleWrapClassName
  }, React.createElement("div", {
    className: classes.title
  }, title), subtitle ? React.createElement("div", {
    className: classes.subtitle
  }, subtitle) : null), actionIcon ? React.createElement("div", {
    className: classNames(classes.actionIcon, _defineProperty({}, classes.actionIconActionPosLeft, actionPos === 'left'))
  }, actionIcon) : null);
}

GridListTileBar.propTypes = {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: PropTypes.node,

  /**
   * Position of secondary action IconButton.
   */
  actionPosition: PropTypes.oneOf(['left', 'right']),

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
   * String or element serving as subtitle (support text).
   */
  subtitle: PropTypes.node,

  /**
   * Title to be displayed on tile.
   */
  title: PropTypes.node,

  /**
   * Position of the title bar.
   */
  titlePosition: PropTypes.oneOf(['top', 'bottom'])
};
GridListTileBar.defaultProps = {
  actionPosition: 'right',
  titlePosition: 'bottom'
};
export default withStyles(styles, {
  name: 'MuiGridListTileBar'
})(GridListTileBar);