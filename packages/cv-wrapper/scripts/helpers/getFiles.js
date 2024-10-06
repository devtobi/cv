import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const getFiles = (directory) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const directoryPath = path.join(__dirname, `../../${directory}`);

  try {
    return fs.readdirSync(directoryPath).map((file) => path.parse(file).name);
  } catch (err) {
    console.error(`Unable to scan directory: ${err}`);
  }
};

export default getFiles;
