import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowLeft from '../internal/svg-icons/KeyboardArrowLeft';
import KeyboardArrowRight from '../internal/svg-icons/KeyboardArrowRight';
import withTheme from '../styles/withTheme';
import IconButton from '../IconButton';
/**
 * @ignore - internal component.
 */

var TablePaginationActions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TablePaginationActions, _React$Component);

  function TablePaginationActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TablePaginationActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TablePaginationActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleBackButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page - 1);
    };

    _this.handleNextButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page + 1);
    };

    return _this;
  }

  _createClass(TablePaginationActions, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backIconButtonProps = _this$props.backIconButtonProps,
          count = _this$props.count,
          nextIconButtonProps = _this$props.nextIconButtonProps,
          onChangePage = _this$props.onChangePage,
          page = _this$props.page,
          rowsPerPage = _this$props.rowsPerPage,
          theme = _this$props.theme,
          other = _objectWithoutProperties(_this$props, ["backIconButtonProps", "count", "nextIconButtonProps", "onChangePage", "page", "rowsPerPage", "theme"]);

      return React.createElement("div", other, React.createElement(IconButton, _extends({
        onClick: this.handleBackButtonClick,
        disabled: page === 0
      }, backIconButtonProps), theme.direction === 'rtl' ? React.createElement(KeyboardArrowRight, null) : React.createElement(KeyboardArrowLeft, null)), React.createElement(IconButton, _extends({
        onClick: this.handleNextButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1
      }, nextIconButtonProps), theme.direction === 'rtl' ? React.createElement(KeyboardArrowLeft, null) : React.createElement(KeyboardArrowRight, null)));
    }
  }]);

  return TablePaginationActions;
}(React.Component);

TablePaginationActions.propTypes = {
  /**
   * Properties applied to the back arrow [`IconButton`](/api/icon-button/) element.
   */
  backIconButtonProps: PropTypes.object,

  /**
   * The total number of rows.
   */
  count: PropTypes.number.isRequired,

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
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,

  /**
   * The number of rows per page.
   */
  rowsPerPage: PropTypes.number.isRequired,

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired
};
export default withTheme()(TablePaginationActions);