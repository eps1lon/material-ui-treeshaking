import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import warning from 'warning';
import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.
// Support for the jss-expand plugin.

function arrayMerge(destination, source) {
  return source;
}

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';
  warning(_typeof(stylesOrCreator) === 'object' || themingEnabled, ['Material-UI: the first argument provided to withStyles() is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));

  function create(theme, name) {
    var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

    if (!name || !theme.overrides || !theme.overrides[name]) {
      return styles;
    }

    var overrides = theme.overrides[name];

    var stylesWithOverrides = _extends({}, styles);

    Object.keys(overrides).forEach(function (key) {
      warning(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
      stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key], {
        arrayMerge: arrayMerge
      });
    });
    return stylesWithOverrides;
  }

  return {
    create: create,
    options: {},
    themingEnabled: themingEnabled
  };
}

export default getStylesCreator;