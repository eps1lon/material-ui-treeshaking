import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';
/**
 * @ignore - internal component.
 */

var ArrowDropDown = function ArrowDropDown(props) {
  return React.createElement(SvgIcon, props, React.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }));
};

ArrowDropDown = pure(ArrowDropDown);
ArrowDropDown.muiName = 'SvgIcon';
export default ArrowDropDown;