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
    path: path.resolve(__dirname, `../bundle/current-manual`),
    filename: `index.current-manual.js`
  }
};
