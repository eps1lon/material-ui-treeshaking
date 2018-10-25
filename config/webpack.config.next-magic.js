const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: `./src/current-magic.js`,
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
      title: "Material-UI tree shaking next-magic"
    })
  ],
  output: {
    path: path.resolve(__dirname, `../bundle/next-magic`),
    filename: `index.next-magic.js`
  },
  resolve: {
    alias: {
      "@material-ui/core": "@material-ui/core-next"
    }
  }
};
