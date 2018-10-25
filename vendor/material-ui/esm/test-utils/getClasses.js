import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import ns from '../styles/reactJssContext';
import { SheetsRegistry } from 'jss';
import createShallow from './createShallow';
import { sheetsManager } from '../styles/withStyles';
var shallow = createShallow(); // Helper function to extract the classes from a styleSheet.

export default function getClasses(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var sheetsRegistry = new SheetsRegistry();
  sheetsManager.clear();
  shallow(element, _extends({}, options, {
    context: _extends(_defineProperty({}, ns.sheetsRegistry, sheetsRegistry), options.context)
  }));
  return sheetsRegistry.registry[0].classes;
}