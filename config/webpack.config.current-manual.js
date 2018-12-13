const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      title: "Material-UI tree shaking current-manual"
    })
  ],
  output: {
    path: path.resolve(__dirname, `../bundle/current-manual`),
    filename: `index.current-manual.js`
  }
};
