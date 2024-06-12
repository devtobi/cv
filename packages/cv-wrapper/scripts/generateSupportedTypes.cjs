const util = require('util');
const createDirectories = require('./helpers/createDirectories.cjs');
const createFile = require('./helpers/createFile.cjs');
const getFiles = require('./helpers/getFiles.cjs');
const {
  DATA_DIRECTORY,
  SUPPORTED_LOCALE_FILE_TEMPLATE,
  GENERATED_DIRECTORY,
  SUPPORTED_LOCALE_FILE_NAME,
} = require('./helpers/constants.cjs');

createDirectories();

const locales = getFiles(DATA_DIRECTORY);
const localesJSContent = locales.map((locale) => `'${locale}'`).join(', ');
const content = util.format(SUPPORTED_LOCALE_FILE_TEMPLATE, localesJSContent);

createFile(`${GENERATED_DIRECTORY}/${SUPPORTED_LOCALE_FILE_NAME}`, content);
