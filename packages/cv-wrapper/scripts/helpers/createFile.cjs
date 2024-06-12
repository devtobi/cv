const fs = require('fs');

function createFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    console.error(`Error writing file to ${filePath}:`, error);
  }
}

module.exports = createFile;
