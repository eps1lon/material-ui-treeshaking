import isWindow from 'dom-helpers/query/isWindow';
import ownerDocument from '../utils/ownerDocument';
import ownerWindow from '../utils/ownerWindow';
export function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
} // Do we have a vertical scroll bar?

export default function isOverflowing(container) {
  var doc = ownerDocument(container);
  var win = ownerWindow(doc);
  /* istanbul ignore next */

  if (!isWindow(doc) && !isBody(container)) {
    return container.scrollHeight > container.clientHeight;
  } // Takes in account potential non zero margin on the body.


  var style = win.getComputedStyle(doc.body);
  var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  var marginRight = parseInt(style.getPropertyValue('margin-right'), 10);
  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
}