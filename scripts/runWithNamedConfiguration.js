const fs = require("fs");
const path = require("path");

module.exports = function({ exec, getCommand }) {
  const configDir = path.join(__dirname, "../config");

  fs.readdirSync(configDir)
    .map(file => {
      const match = file.match(/webpack\.config\.([^\.]+)\.js/);
      if (match != null) {
        return match[1];
      }
      return match;
    })
    .filter(Boolean)
    .forEach((name, index) => {
      const command = getCommand(name, index);
      console.log(`Executing "${command}"`);
      exec(command);
    });
};
