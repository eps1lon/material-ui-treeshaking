import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import ReactDOM from 'react-dom';
import { mount as enzymeMount } from 'enzyme'; // Generate an enhanced mount function.

export default function createMount() {
  var options1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options1$mount = options1.mount,
      mount = _options1$mount === void 0 ? enzymeMount : _options1$mount,
      other1 = _objectWithoutProperties(options1, ["mount"]);

  var attachTo = window.document.createElement('div');
  attachTo.className = 'app';
  attachTo.setAttribute('id', 'app');
  window.document.body.insertBefore(attachTo, window.document.body.firstChild);

  var mountWithContext = function mountWithContext(node) {
    var options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mount(node, _extends({
      attachTo: attachTo
    }, other1, options2));
  };

  mountWithContext.attachTo = attachTo;

  mountWithContext.cleanUp = function () {
    ReactDOM.unmountComponentAtNode(attachTo);
    attachTo.parentNode.removeChild(attachTo);
  };

  return mountWithContext;
}