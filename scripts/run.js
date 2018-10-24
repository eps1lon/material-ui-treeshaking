const childProcess = require("child_process");
const { runWithNamedConfiguration } = require("./utils");

const [commandTemplate] = process.argv.slice(2);
runWithNamedConfiguration({
  exec: childProcess.execSync,
  getCommand: name => commandTemplate.replace(/\{name\}/g, name)
});
