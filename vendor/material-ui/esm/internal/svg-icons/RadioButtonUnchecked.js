import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';
/**
 * @ignore - internal component.
 */

var RadioButtonUnchecked = function RadioButtonUnchecked(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
};

RadioButtonUnchecked = pure(RadioButtonUnchecked);
RadioButtonUnchecked.muiName = 'SvgIcon';
export default RadioButtonUnchecked;