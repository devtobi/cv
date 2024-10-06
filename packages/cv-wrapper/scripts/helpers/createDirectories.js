import * as fs from 'fs';

import { GENERATED_DIRECTORY } from './constants.js';

const createDirectories = () => {
  try {
    fs.mkdirSync(GENERATED_DIRECTORY, { recursive: true });
  } catch (err) {
    console.error('Error creating directory:', err);
  }
};

export default createDirectories;
