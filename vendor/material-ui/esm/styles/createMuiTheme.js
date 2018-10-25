import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.

import isPlainObject from 'is-plain-object';
import warning from 'warning';
import createBreakpoints from './createBreakpoints';
import createMixins from './createMixins';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';
import shape from './shape';
import spacing from './spacing';
import transitions from './transitions';
import zIndex from './zIndex';

function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      shadowsInput = options.shadows,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "shadows", "typography"]);

  var palette = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);

  var muiTheme = _extends({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Inject custom properties
    shadows: shadowsInput || shadows,
    typography: createTypography(palette, typographyInput)
  }, deepmerge({
    shape: shape,
    spacing: spacing,
    transitions: transitions,
    zIndex: zIndex
  }, other, {
    isMergeableObject: isPlainObject
  }));

  warning(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.');
  return muiTheme;
}

export default createMuiTheme;