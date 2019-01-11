/**
 * import something from mui that is not using `classnames`
 */
import React from "react";
import ReactDOM from "react-dom";

import { colors } from "@material-ui/core";

function App() {
  return <div>We have {Object.keys(colors)} colors.</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
