const fs = require("fs");
const { PDF_DIRECTORY } = require("./constants.js");

const createPdfDirectory = () => {
  try {
    fs.mkdirSync(PDF_DIRECTORY, { recursive: true });
  } catch (err) {
    console.error("Error creating directory:", err);
  }
};

module.exports = createPdfDirectory;
