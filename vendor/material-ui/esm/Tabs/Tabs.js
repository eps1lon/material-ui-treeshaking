import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import classNames from 'classnames';
import EventListener from 'react-event-listener';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.

import { getNormalizedScrollLeft, detectScrollType } from 'normalize-scroll-left';
import { componentPropType } from '@material-ui/utils';
import animate from '../internal/animate';
import ScrollbarSize from './ScrollbarSize';
import withStyles from '../styles/withStyles';
import TabIndicator from './TabIndicator';
import TabScrollButton from './TabScrollButton';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.

    },

    /* Styles applied to the flex container element. */
    flexContainer: {
      display: 'flex'
    },

    /* Styles applied to the flex container element if `centered={true}` & `scrollable={false}`. */
    centered: {
      justifyContent: 'center'
    },

    /* Styles applied to the tablist element. */
    scroller: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the tablist element if `scrollable={false}`. */
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },

    /* Styles applied to the tablist element if `scrollable={true}`. */
    scrollable: {
      overflowX: 'scroll'
    },

    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},

    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"`. */
    scrollButtonsAuto: _defineProperty({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),

    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this));
    _this.state = {
      indicatorStyle: {},
      scrollerStyle: {
        marginBottom: 0
      },
      showLeftScroll: false,
      showRightScroll: false,
      mounted: false
    };

    _this.getConditionalElements = function () {
      var _this$props = _this.props,
          classes = _this$props.classes,
          scrollable = _this$props.scrollable,
          ScrollButtonComponent = _this$props.ScrollButtonComponent,
          scrollButtons = _this$props.scrollButtons,
          theme = _this$props.theme;
      var conditionalElements = {};
      conditionalElements.scrollbarSizeListener = scrollable ? React.createElement(ScrollbarSize, {
        onChange: _this.handleScrollbarSizeChange
      }) : null;
      var showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');
      conditionalElements.scrollButtonLeft = showScrollButtons ? React.createElement(ScrollButtonComponent, {
        direction: theme && theme.direction === 'rtl' ? 'right' : 'left',
        onClick: _this.handleLeftScrollClick,
        visible: _this.state.showLeftScroll,
        className: classNames(classes.scrollButtons, _defineProperty({}, classes.scrollButtonsAuto, scrollButtons === 'auto'))
      }) : null;
      conditionalElements.scrollButtonRight = showScrollButtons ? React.createElement(ScrollButtonComponent, {
        direction: theme && theme.direction === 'rtl' ? 'left' : 'right',
        onClick: _this.handleRightScrollClick,
        visible: _this.state.showRightScroll,
        className: classNames(classes.scrollButtons, _defineProperty({}, classes.scrollButtonsAuto, scrollButtons === 'auto'))
      }) : null;
      return conditionalElements;
    };

    _this.getTabsMeta = function (value, direction) {
      var tabsMeta;

      if (_this.tabsRef) {
        var rect = _this.tabsRef.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft


        tabsMeta = {
          clientWidth: _this.tabsRef.clientWidth,
          scrollLeft: _this.tabsRef.scrollLeft,
          scrollLeftNormalized: getNormalizedScrollLeft(_this.tabsRef, direction),
          scrollWidth: _this.tabsRef.scrollWidth,
          left: rect.left,
          right: rect.right
        };
      }

      var tabMeta;

      if (_this.tabsRef && value !== false) {
        var children = _this.tabsRef.children[0].children;

        if (children.length > 0) {
          var tab = children[_this.valueToIndex.get(value)];

          warning(tab, ["Material-UI: the value provided `".concat(value, "` to the Tabs component is invalid."), 'Non of the Tabs children have this value.', _this.valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(_this.valueToIndex.keys()).join(', '), ".") : null].join('\n'));
          tabMeta = tab ? tab.getBoundingClientRect() : null;
        }
      }

      return {
        tabsMeta: tabsMeta,
        tabMeta: tabMeta
      };
    };

    _this.handleLeftScrollClick = function () {
      _this.moveTabsScroll(-_this.tabsRef.clientWidth);
    };

    _this.handleRightScrollClick = function () {
      _this.moveTabsScroll(_this.tabsRef.clientWidth);
    };

    _this.handleScrollbarSizeChange = function (scrollbarHeight) {
      _this.setState({
        scrollerStyle: {
          marginBottom: -scrollbarHeight
        }
      });
    };

    _this.moveTabsScroll = function (delta) {
      var theme = _this.props.theme;
      var multiplier = theme.direction === 'rtl' ? -1 : 1;
      var nextScrollLeft = _this.tabsRef.scrollLeft + delta * multiplier; // Fix for Edge

      var invert = theme.direction === 'rtl' && detectScrollType() === 'reverse' ? -1 : 1;

      _this.scroll(invert * nextScrollLeft);
    };

    _this.scrollSelectedIntoView = function () {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          value = _this$props2.value;

      var _this$getTabsMeta = _this.getTabsMeta(value, theme.direction),
          tabsMeta = _this$getTabsMeta.tabsMeta,
          tabMeta = _this$getTabsMeta.tabMeta;

      if (!tabMeta || !tabsMeta) {
        return;
      }

      if (tabMeta.left < tabsMeta.left) {
        // left side of button is out of view
        var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);

        _this.scroll(nextScrollLeft);
      } else if (tabMeta.right > tabsMeta.right) {
        // right side of button is out of view
        var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);

        _this.scroll(_nextScrollLeft);
      }
    };

    _this.scroll = function (value) {
      animate('scrollLeft', _this.tabsRef, value);
    };

    _this.updateScrollButtonState = function () {
      var _this$props3 = _this.props,
          scrollable = _this$props3.scrollable,
          scrollButtons = _this$props3.scrollButtons,
          theme = _this$props3.theme;

      if (scrollable && scrollButtons !== 'off') {
        var _this$tabsRef = _this.tabsRef,
            scrollWidth = _this$tabsRef.scrollWidth,
            clientWidth = _this$tabsRef.clientWidth;
        var scrollLeft = getNormalizedScrollLeft(_this.tabsRef, theme.direction);
        var showLeftScroll = theme.direction === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;
        var showRightScroll = theme.direction === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

        if (showLeftScroll !== _this.state.showLeftScroll || showRightScroll !== _this.state.showRightScroll) {
          _this.setState({
            showLeftScroll: showLeftScroll,
            showRightScroll: showRightScroll
          });
        }
      }
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = debounce(function () {
        _this.updateIndicatorState(_this.props);

        _this.updateScrollButtonState();
      }, 166); // Corresponds to 10 frames at 60 Hz.

      _this.handleTabsScroll = debounce(function () {
        _this.updateScrollButtonState();
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      });
      this.updateIndicatorState(this.props);
      this.updateScrollButtonState();

      if (this.props.action) {
        this.props.action({
          updateIndicator: this.handleResize
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // The index might have changed at the same time.
      // We need to check again the right indicator position.
      this.updateIndicatorState(this.props);
      this.updateScrollButtonState();

      if (this.state.indicatorStyle !== prevState.indicatorStyle) {
        this.scrollSelectedIntoView();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
      this.handleTabsScroll.clear();
    }
  }, {
    key: "updateIndicatorState",
    value: function updateIndicatorState(props) {
      var theme = props.theme,
          value = props.value;

      var _this$getTabsMeta2 = this.getTabsMeta(value, theme.direction),
          tabsMeta = _this$getTabsMeta2.tabsMeta,
          tabMeta = _this$getTabsMeta2.tabMeta;

      var left = 0;

      if (tabMeta && tabsMeta) {
        var correction = theme.direction === 'rtl' ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        left = Math.round(tabMeta.left - tabsMeta.left + correction);
      }

      var indicatorStyle = {
        left: left,
        // May be wrong until the font is loaded.
        width: tabMeta ? Math.round(tabMeta.width) : 0
      };

      if ((indicatorStyle.left !== this.state.indicatorStyle.left || indicatorStyle.width !== this.state.indicatorStyle.width) && !isNaN(indicatorStyle.left) && !isNaN(indicatorStyle.width)) {
        this.setState({
          indicatorStyle: indicatorStyle
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames4,
          _this2 = this;

      var _this$props4 = this.props,
          action = _this$props4.action,
          centered = _this$props4.centered,
          childrenProp = _this$props4.children,
          classes = _this$props4.classes,
          classNameProp = _this$props4.className,
          Component = _this$props4.component,
          fullWidth = _this$props4.fullWidth,
          indicatorColor = _this$props4.indicatorColor,
          onChange = _this$props4.onChange,
          scrollable = _this$props4.scrollable,
          ScrollButtonComponent = _this$props4.ScrollButtonComponent,
          scrollButtons = _this$props4.scrollButtons,
          _this$props4$TabIndic = _this$props4.TabIndicatorProps,
          TabIndicatorProps = _this$props4$TabIndic === void 0 ? {} : _this$props4$TabIndic,
          textColor = _this$props4.textColor,
          theme = _this$props4.theme,
          value = _this$props4.value,
          other = _objectWithoutProperties(_this$props4, ["action", "centered", "children", "classes", "className", "component", "fullWidth", "indicatorColor", "onChange", "scrollable", "ScrollButtonComponent", "scrollButtons", "TabIndicatorProps", "textColor", "theme", "value"]);

      warning(!centered || !scrollable, 'Material-UI: you can not use the `centered={true}` and `scrollable={true}` properties ' + 'at the same time on a `Tabs` component.');
      var className = classNames(classes.root, classNameProp);
      var flexContainerClassName = classNames(classes.flexContainer, _defineProperty({}, classes.centered, centered && !scrollable));
      var scrollerClassName = classNames(classes.scroller, (_classNames4 = {}, _defineProperty(_classNames4, classes.fixed, !scrollable), _defineProperty(_classNames4, classes.scrollable, scrollable), _classNames4));
      var indicator = React.createElement(TabIndicator, _extends({
        className: classes.indicator,
        color: indicatorColor
      }, TabIndicatorProps, {
        style: _extends({}, this.state.indicatorStyle, TabIndicatorProps.style)
      }));
      this.valueToIndex = new Map();
      var childIndex = 0;
      var children = React.Children.map(childrenProp, function (child) {
        if (!React.isValidElement(child)) {
          return null;
        }

        warning(child.type !== React.Fragment, ["Material-UI: the Tabs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
        var childValue = child.props.value === undefined ? childIndex : child.props.value;

        _this2.valueToIndex.set(childValue, childIndex);

        var selected = childValue === value;
        childIndex += 1;
        return React.cloneElement(child, {
          fullWidth: fullWidth,
          indicator: selected && !_this2.state.mounted && indicator,
          selected: selected,
          onChange: onChange,
          textColor: textColor,
          value: childValue
        });
      });
      var conditionalElements = this.getConditionalElements();
      return React.createElement(Component, _extends({
        className: className
      }, other), React.createElement(EventListener, {
        target: "window",
        onResize: this.handleResize
      }), conditionalElements.scrollbarSizeListener, React.createElement("div", {
        className: classes.flexContainer
      }, conditionalElements.scrollButtonLeft, React.createElement("div", {
        className: scrollerClassName,
        style: this.state.scrollerStyle,
        ref: function ref(_ref) {
          _this2.tabsRef = _ref;
        },
        role: "tablist",
        onScroll: this.handleTabsScroll
      }, React.createElement("div", {
        className: flexContainerClassName
      }, children), this.state.mounted && indicator), conditionalElements.scrollButtonRight));
    }
  }]);

  return Tabs;
}(React.Component);

Tabs.propTypes = {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `updateIndicator()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: PropTypes.func,

  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: PropTypes.bool,

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
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: componentPropType,

  /**
   * If `true`, the tabs will grow to use all the available space.
   * This property is intended for small views, like on mobile.
   */
  fullWidth: PropTypes.bool,

  /**
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {number} value We default to the index of the child
   */
  onChange: PropTypes.func,

  /**
   * True invokes scrolling properties and allow for horizontally scrolling
   * (or swiping) the tab bar.
   */
  scrollable: PropTypes.bool,

  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Determine behavior of scroll buttons when tabs are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),

  /**
   * Properties applied to the `TabIndicator` element.
   */
  TabIndicatorProps: PropTypes.object,

  /**
   * Determines the color of the `Tab`.
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,

  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: PropTypes.any
};
Tabs.defaultProps = {
  centered: false,
  component: 'div',
  fullWidth: false,
  indicatorColor: 'secondary',
  scrollable: false,
  ScrollButtonComponent: TabScrollButton,
  scrollButtons: 'auto',
  textColor: 'inherit'
};
export default withStyles(styles, {
  name: 'MuiTabs',
  withTheme: true
})(Tabs);