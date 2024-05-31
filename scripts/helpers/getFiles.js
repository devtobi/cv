const fs = require("fs");
const path = require("path");

const getFiles = (directory) => {
  const directoryPath = path.join(__dirname, `../../${directory}`);

  try {
    return fs
      .readdirSync(directoryPath)
      .map((file) => path.join(directory, file));
  } catch (err) {
    console.error(`Unable to scan directory: ${err}`);
  }
};

module.exports = getFiles;
