const createConfig = require("./createConfig");

module.exports = createConfig({
  entry: "current-magic",
  output: "next-magic",
  name: "next-magic",
  override: {
    resolve: {
      alias: {
        "@material-ui/core": "@material-ui/core-next"
      }
    }
  }
});
