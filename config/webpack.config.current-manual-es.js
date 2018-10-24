const path = require("path");

module.exports = {
  entry: `./src/current-manual-es.js`,
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
    path: path.resolve(__dirname, `../bundle/current-manual-es`),
    filename: `index.current-manual-es.js`
  }
};
