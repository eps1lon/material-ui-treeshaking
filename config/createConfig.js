const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = function createConfig({ entry, output, name, override }) {
  return {
    entry: `./src/${entry}.js`,
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
        title: `Material-UI tree shaking ${name}`
      })
    ],
    output: {
      path: path.resolve(__dirname, `../bundle/${output}`),
      filename: `${output}.js`
    },
    ...override
  };
};
