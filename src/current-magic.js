/**
 * target only @material-ui/core*
 * but package.json#main
 */
import React from "react";
import ReactDOM from "react-dom";

import { withTheme } from "@material-ui/core/styles";

const Paper = withTheme()(({ children, theme }) => {
  return children;
});

ReactDOM.render(<Paper>Hello, World!</Paper>, document.getElementById("root"));
