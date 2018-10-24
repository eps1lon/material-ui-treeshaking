const childProcess = require("child_process");
const runWithNamedConfiguration = require("./runWithNamedConfiguration");

runWithNamedConfiguration({
  exec: childProcess.exec, // concurrent
  getCommand: (name, index) =>
    `webpack-bundle-analyzer bundle/${name}/stats.json --port ${8888 + index}`
});
