const fs = require("fs");
const path = require("path");

function readConfigNames() {
  const configDir = path.join(__dirname, "../config");
  return fs
    .readdirSync(configDir)
    .map(file => {
      const match = file.match(/webpack\.config\.([^\.]+)\.js/);
      if (match != null) {
        return match[1];
      }
      return match;
    })
    .filter(Boolean);
}

function runWithNamedConfiguration({ exec, getCommand }) {
  readConfigNames().forEach((name, index) => {
    const command = getCommand(name, index);
    console.log(`Executing "${command}"`);
    exec(command);
  });
}

module.exports = { readConfigNames, runWithNamedConfiguration };
