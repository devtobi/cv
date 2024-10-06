import * as util from 'util';

import {
  DATA_DIRECTORY,
  GENERATED_DIRECTORY,
  SUPPORTED_LOCALE_FILE_NAME,
  SUPPORTED_LOCALE_FILE_TEMPLATE,
} from './helpers/constants.js';
import createDirectories from './helpers/createDirectories.js';
import createFile from './helpers/createFile.js';
import getFiles from './helpers/getFiles.js';

createDirectories();

const locales = getFiles(DATA_DIRECTORY);
const localesJSContent = locales.map((locale) => `'${locale}'`).join(', ');
const content = util.format(SUPPORTED_LOCALE_FILE_TEMPLATE, localesJSContent);

createFile(`${GENERATED_DIRECTORY}/${SUPPORTED_LOCALE_FILE_NAME}`, content);
