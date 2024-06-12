const fs = require('fs');
const path = require('path');

const getFiles = (directory) => {
  const directoryPath = path.join(__dirname, `../../${directory}`);

  try {
    return fs.readdirSync(directoryPath).map((file) => path.parse(file).name);
  } catch (err) {
    console.error(`Unable to scan directory: ${err}`);
  }
};

module.exports = getFiles;
