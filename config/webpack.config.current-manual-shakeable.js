const path = require("path");

module.exports = {
  entry: `./src/current-manual.js`,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, `../bundle/current-manual-shakeable`),
    filename: `index.current-manual-shakeable.js`
  },
  /**
   * That's the important part. You still import as before but webpack rewrites
   * all of those so that the module version is imported. If you already have
   * `from "@material-ui/core/es/*"` imports in your codebase this will cause runtime errors.
   * However if you already mixed those two import types you probably already had
   * defects in your code. A simple search & replace is sufficient
   */
  resolve: {
    alias: {
      "@material-ui/core": "@material-ui/core/es"
    }
  }
};
