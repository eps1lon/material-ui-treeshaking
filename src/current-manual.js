/**
 * target only @material-ui/core*
 * but package.json#main
 */
const React = require("react");
const ReactDOM = require("react-dom");
const Typography = require("@material-ui/core/Typography");

ReactDOM.render(
  document.getElementById("root"),
  <Typography>Hello, World!</Typography>
);
