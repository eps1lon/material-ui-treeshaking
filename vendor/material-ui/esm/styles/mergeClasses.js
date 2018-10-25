import _extends from "@babel/runtime/helpers/extends";
import warning from 'warning';
import getDisplayName from '../utils/getDisplayName';

function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = _extends({}, baseClasses);

  Object.keys(newClasses).forEach(function (key) {
    warning(baseClasses[key] || !newClasses[key], ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
    warning(!newClasses[key] || typeof newClasses[key] === 'string', ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

export default mergeClasses;