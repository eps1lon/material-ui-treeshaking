import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _extends from "@babel/runtime/helpers/extends";
// @inheritedComponent Paper
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import Collapse from '../Collapse';
import Paper from '../Paper';
import withStyles from '../styles/withStyles';
import { isMuiElement } from '../utils/reactHelpers'; // Workaround https://github.com/jsdom/jsdom/issues/2026

var edgeFix = typeof window !== 'undefined' && /jsdom/.test(window.navigator.userAgent) ? {} : {
  // Fix a rendering issue on Edge
  '@supports (-ms-ime-align: auto)': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
};
export var styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&:before': {
          display: 'none'
        }
      },
      '&:last-child': _extends({
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
      }, edgeFix),
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {
      margin: '16px 0',
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:before': {
        opacity: 0
      }
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
      backgroundColor: theme.palette.action.disabledBackground
    }
  };
};

var ExpansionPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpansionPanel, _React$Component);

  function ExpansionPanel(props) {
    var _this;

    _classCallCheck(this, ExpansionPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpansionPanel).call(this));

    _this.handleChange = function (event) {
      var expanded = _this.isControlled ? _this.props.expanded : _this.state.expanded;

      if (!_this.isControlled) {
        _this.setState({
          expanded: !expanded
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, !expanded);
      }
    };

    _this.isControlled = props.expanded != null;
    _this.state = {};

    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.expanded = props.defaultExpanded !== undefined ? props.defaultExpanded : false;
    }

    return _this;
  }

  _createClass(ExpansionPanel, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          childrenProp = _this$props.children,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          CollapsePropsProp = _this$props.CollapseProps,
          defaultExpanded = _this$props.defaultExpanded,
          disabled = _this$props.disabled,
          expandedProp = _this$props.expanded,
          onChange = _this$props.onChange,
          other = _objectWithoutProperties(_this$props, ["children", "classes", "className", "CollapseProps", "defaultExpanded", "disabled", "expanded", "onChange"]);

      var expanded = this.isControlled ? expandedProp : this.state.expanded;
      var className = classNames(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.expanded, expanded), _defineProperty(_classNames, classes.disabled, disabled), _classNames), classNameProp);
      var summary = null;
      var children = React.Children.map(childrenProp, function (child) {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(child.type !== React.Fragment, ["Material-UI: the ExpansionPanel component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));

        if (isMuiElement(child, ['ExpansionPanelSummary'])) {
          summary = React.cloneElement(child, {
            disabled: disabled,
            expanded: expanded,
            onChange: _this2.handleChange
          });
          return null;
        }

        return child;
      });
      var CollapseProps = !expanded ? {
        'aria-hidden': 'true'
      } : null;
      return React.createElement(Paper, _extends({
        className: className,
        elevation: 1,
        square: true
      }, other), summary, React.createElement(Collapse, _extends({
        in: expanded,
        timeout: "auto"
      }, CollapseProps, CollapsePropsProp), children));
    }
  }]);

  return ExpansionPanel;
}(React.Component);

ExpansionPanel.propTypes = {
  /**
   * The content of the expansion panel.
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
   * Properties applied to the [`Collapse`](/api/collapse/) element.
   */
  CollapseProps: PropTypes.object,

  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: PropTypes.bool,

  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: PropTypes.bool,

  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: PropTypes.func
};
ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
};
export default withStyles(styles, {
  name: 'MuiExpansionPanel'
})(ExpansionPanel);