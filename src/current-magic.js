/**
 * target only @material-ui/core*
 * but package.json#main
 */
import React from "react";
import ReactDOM from "react-dom";
import { Typography } from "@material-ui/core";

ReactDOM.render(
  <Typography>Hello, World!</Typography>,
  document.getElementById("root")
);
