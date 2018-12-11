import React from 'react';
import PropTypes from 'prop-types';
import ListContext from '../List/ListContext';
/**
 * @ignore - internal component.
 *
 * Consumes a context and passes that context merged with its props.
 */

function MergeListContext(props) {
  var alignItems = props.alignItems,
      children = props.children,
      dense = props.dense;
  return React.createElement(ListContext.Consumer, null, function (context) {
    var childContext = {
      dense: dense || context.dense || false,
      alignItems: alignItems
    };
    return React.createElement(ListContext.Provider, {
      value: childContext
    }, children(childContext));
  });
}

MergeListContext.propTypes = {
  alignItems: PropTypes.oneOf(['flex-start', 'center']).isRequired,
  children: PropTypes.func.isRequired,
  dense: PropTypes.bool.isRequired
};
export default MergeListContext;