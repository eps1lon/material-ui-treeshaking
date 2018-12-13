const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: `./src/current-manual.js`,
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        // https://github.com/babel/babel-loader/issues/171#issuecomment-163385201
        exclude: /node_modules\/(?!(@material-ui\/core\/es)\/).*/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, `../bundle/current-manual-shakeable`),
    filename: `index.current-manual-shakeable.js`
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      title: "Material-UI tree shaking current-manual-shakeable"
    })
  ],
  /**
   * That's the important part. You still import as before but webpack rewrites
   * all of those so that the module version is imported.
   */
  resolve: {
    alias: {
      "@material-ui/core": "@material-ui/core/es"
    }
  }
};
