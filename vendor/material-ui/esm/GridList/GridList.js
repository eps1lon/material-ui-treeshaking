import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
export var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

  }
};

function GridList(props) {
  var cellHeight = props.cellHeight,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      cols = props.cols,
      Component = props.component,
      spacing = props.spacing,
      style = props.style,
      other = _objectWithoutProperties(props, ["cellHeight", "children", "classes", "className", "cols", "component", "spacing", "style"]);

  return React.createElement(Component, _extends({
    className: classNames(classes.root, classNameProp),
    style: _extends({
      margin: -spacing / 2
    }, style)
  }, other), React.Children.map(children, function (child) {
    if (!React.isValidElement(child)) {
      return null;
    }

    warning(child.type !== React.Fragment, ["Material-UI: the GridList component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return React.cloneElement(child, {
      style: _extends({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
}

GridList.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),

  /**
   * Grid Tiles that will be in Grid List.
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
   * Number of columns.
   */
  cols: PropTypes.number,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,

  /**
   * Number of px for the spacing between tiles.
   */
  spacing: PropTypes.number,

  /**
   * @ignore
   */
  style: PropTypes.object
};
GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  component: 'ul',
  spacing: 4
};
export default withStyles(styles, {
  name: 'MuiGridList'
})(GridList);