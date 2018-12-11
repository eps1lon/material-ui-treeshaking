import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
// @inheritedComponent TableCell
import React from 'react';
import PropTypes from 'prop-types';
import { componentPropType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import InputBase from '../InputBase';
import MenuItem from '../MenuItem';
import Select from '../Select';
import TableCell from '../TableCell';
import Toolbar from '../Toolbar';
import Typography from '../Typography';
import TablePaginationActions from './TablePaginationActions';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),
      // Increase the specificity to override TableCell.
      '&:last-child': {
        padding: 0
      }
    },

    /* Styles applied to the Toolbar component. */
    toolbar: {
      height: 56,
      minHeight: 56,
      paddingRight: 2
    },

    /* Styles applied to the spacer element. */
    spacer: {
      flex: '1 1 100%'
    },

    /* Styles applied to the caption Typography components if `variant="caption"`. */
    caption: {
      flexShrink: 0
    },

    /* Styles applied to the Select component `root` class. */
    selectRoot: {
      marginRight: 32,
      marginLeft: 8
    },

    /* Styles applied to the Select component `select` class. */
    select: {
      paddingLeft: 8,
      paddingRight: 16
    },

    /* Styles applied to the Select component `icon` class. */
    selectIcon: {
      top: 1
    },

    /* Styles applied to the `InputBase` component. */
    input: {
      color: 'inherit',
      fontSize: 'inherit',
      flexShrink: 0
    },

    /* Styles applied to the MenuItem component. */
    menuItem: {},

    /* Styles applied to the internal `TablePaginationActions` component. */
    actions: {
      flexShrink: 0,
      marginLeft: 20
    }
  };
};
/**
 * A `TableCell` based component for placing inside `TableFooter` for pagination.
 */

var TablePagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TablePagination, _React$Component);

  function TablePagination() {
    _classCallCheck(this, TablePagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(TablePagination).apply(this, arguments));
  }

  _createClass(TablePagination, [{
    key: "componentDidUpdate",
    // This logic would be better handled on userside.
    // However, we have it just in case.
    value: function componentDidUpdate() {
      var _this$props = this.props,
          count = _this$props.count,
          onChangePage = _this$props.onChangePage,
          page = _this$props.page,
          rowsPerPage = _this$props.rowsPerPage;
      var newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);

      if (page > newLastPage) {
        onChangePage(null, newLastPage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          ActionsComponent = _this$props2.ActionsComponent,
          backIconButtonProps = _this$props2.backIconButtonProps,
          classes = _this$props2.classes,
          colSpanProp = _this$props2.colSpan,
          Component = _this$props2.component,
          count = _this$props2.count,
          labelDisplayedRows = _this$props2.labelDisplayedRows,
          labelRowsPerPage = _this$props2.labelRowsPerPage,
          nextIconButtonProps = _this$props2.nextIconButtonProps,
          onChangePage = _this$props2.onChangePage,
          onChangeRowsPerPage = _this$props2.onChangeRowsPerPage,
          page = _this$props2.page,
          rowsPerPage = _this$props2.rowsPerPage,
          rowsPerPageOptions = _this$props2.rowsPerPageOptions,
          _this$props2$SelectPr = _this$props2.SelectProps,
          SelectProps = _this$props2$SelectPr === void 0 ? {} : _this$props2$SelectPr,
          other = _objectWithoutProperties(_this$props2, ["ActionsComponent", "backIconButtonProps", "classes", "colSpan", "component", "count", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onChangePage", "onChangeRowsPerPage", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps"]);

      var colSpan;

      if (Component === TableCell || Component === 'td') {
        colSpan = colSpanProp || 1000; // col-span over everything
      }

      var MenuItemComponent = SelectProps.native ? 'option' : MenuItem;
      return React.createElement(Component, _extends({
        className: classes.root,
        colSpan: colSpan
      }, other), React.createElement(Toolbar, {
        className: classes.toolbar
      }, React.createElement("div", {
        className: classes.spacer
      }), rowsPerPageOptions.length > 1 && React.createElement(Typography, {
        color: "inherit",
        variant: "caption",
        className: classes.caption
      }, labelRowsPerPage), rowsPerPageOptions.length > 1 && React.createElement(Select, _extends({
        classes: {
          root: classes.selectRoot,
          select: classes.select,
          icon: classes.selectIcon
        },
        input: React.createElement(InputBase, {
          className: classes.input
        }),
        value: rowsPerPage,
        onChange: onChangeRowsPerPage
      }, SelectProps), rowsPerPageOptions.map(function (rowsPerPageOption) {
        return React.createElement(MenuItemComponent, {
          className: classes.menuItem,
          key: rowsPerPageOption,
          value: rowsPerPageOption
        }, rowsPerPageOption);
      })), React.createElement(Typography, {
        color: "inherit",
        variant: "caption",
        className: classes.caption
      }, labelDisplayedRows({
        from: count === 0 ? 0 : page * rowsPerPage + 1,
        to: Math.min(count, (page + 1) * rowsPerPage),
        count: count,
        page: page
      })), React.createElement(ActionsComponent, {
        className: classes.actions,
        backIconButtonProps: backIconButtonProps,
        count: count,
        nextIconButtonProps: nextIconButtonProps,
        onChangePage: onChangePage,
        page: page,
        rowsPerPage: rowsPerPage
      })));
    }
  }]);

  return TablePagination;
}(React.Component);

TablePagination.propTypes = {
  /**
   * The component used for displaying the actions.
   * Either a string to use a DOM element or a component.
   */
  ActionsComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Properties applied to the back arrow [`IconButton`](/api/icon-button/) component.
   */
  backIconButtonProps: PropTypes.object,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  colSpan: PropTypes.number,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,

  /**
   * The total number of rows.
   */
  count: PropTypes.number.isRequired,

  /**
   * Customize the displayed rows label.
   */
  labelDisplayedRows: PropTypes.func,

  /**
   * Customize the rows per page label. Invoked with a `{ from, to, count, page }`
   * object.
   */
  labelRowsPerPage: PropTypes.node,

  /**
   * Properties applied to the next arrow [`IconButton`](/api/icon-button/) element.
   */
  nextIconButtonProps: PropTypes.object,

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback
   * @param {number} page The page selected
   */
  onChangePage: PropTypes.func.isRequired,

  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {object} event The event source of the callback
   */
  onChangeRowsPerPage: PropTypes.func,

  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,

  /**
   * The number of rows per page.
   */
  rowsPerPage: PropTypes.number.isRequired,

  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   */
  rowsPerPageOptions: PropTypes.array,

  /**
   * Properties applied to the rows per page [`Select`](/api/select/) element.
   */
  SelectProps: PropTypes.object
};
TablePagination.defaultProps = {
  ActionsComponent: TablePaginationActions,
  component: TableCell,
  labelDisplayedRows: function labelDisplayedRows(_ref) {
    var from = _ref.from,
        to = _ref.to,
        count = _ref.count;
    return "".concat(from, "-").concat(to, " of ").concat(count);
  },
  labelRowsPerPage: 'Rows per page:',
  rowsPerPageOptions: [10, 25, 50, 100]
};
export default withStyles(styles, {
  name: 'MuiTablePagination'
})(TablePagination);