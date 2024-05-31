const path = require("path");
const fs = require("fs");
const getFiles = require("./getFiles.js");
const { DATA_DIRECTORY, WEB_DIRECTORY } = require("./constants.js");

const createWebDirectories = () => {
  const files = getFiles(DATA_DIRECTORY);
  files.forEach((file) => {
    const dirname = `${WEB_DIRECTORY}/${path.parse(file).name}`;
    try {
      fs.mkdirSync(dirname, { recursive: true });
    } catch (err) {
      console.error("Error creating directory:", err);
    }
  });
};

module.exports = createWebDirectories;
