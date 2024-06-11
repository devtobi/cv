const fs = require('fs');

const { GENERATED_DIRECTORY } = require('./constants.cjs');

const createDirectories = () => {
  try {
    fs.mkdirSync(GENERATED_DIRECTORY, { recursive: true });
  } catch (err) {
    console.error('Error creating directory:', err);
  }
};

module.exports = createDirectories;
