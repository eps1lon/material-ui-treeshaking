/**
 * target only @material-ui/core*
 * but package.json#main
 */
import React from "react";
import ReactDOM from "react-dom";
import { Paper } from "@material-ui/core";

ReactDOM.render(
  <Paper>Hello, World!</Paper>,
  document.getElementById("root")
);
