const path = require("path");
const util = require("util");

const getFiles = require("./getFiles.js");
const { DATA_DIRECTORY } = require("./constants.js");

const generateTasks = (taskName, commandString) => {
  const files = getFiles(`${DATA_DIRECTORY}`);
  return files.map((file) => {
    const dirname = path.parse(file).name;
    return {
      command: util.format(commandString, dirname, dirname),
      name: taskName,
    };
  });
};

module.exports = generateTasks;
