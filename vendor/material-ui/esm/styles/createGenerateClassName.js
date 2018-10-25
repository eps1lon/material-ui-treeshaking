/* eslint-disable no-underscore-dangle */
import warning from 'warning';
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;

function safePrefix(classNamePrefix) {
  var prefix = String(classNamePrefix);
  warning(prefix.length < 256, "Material-UI: the class name prefix is too long: ".concat(prefix, ".")); // Sanitize the string as will be used to prefix the generated class name.

  return prefix.replace(escapeRegex, '-');
} // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js


export default function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
      dangerouslyUseGlobalCSS = _options$dangerouslyU === void 0 ? false : _options$dangerouslyU,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var ruleCounter = 0;
  return function (rule, styleSheet) {
    ruleCounter += 1;
    warning(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));

    if (dangerouslyUseGlobalCSS && styleSheet && styleSheet.options.name) {
      return "".concat(styleSheet.options.name, "-").concat(rule.key);
    }

    if (process.env.NODE_ENV === 'production') {
      return "".concat(productionPrefix).concat(seed).concat(ruleCounter);
    }

    if (styleSheet && styleSheet.options.classNamePrefix) {
      var prefix = safePrefix(styleSheet.options.classNamePrefix);
      return "".concat(prefix, "-").concat(rule.key, "-").concat(seed).concat(ruleCounter);
    }

    return "".concat(rule.key, "-").concat(seed).concat(ruleCounter);
  };
}