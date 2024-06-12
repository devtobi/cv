const DATA_DIRECTORY = '../../data';
const GENERATED_DIRECTORY = 'src/generated';
const SUPPORTED_LOCALE_FILE_NAME = 'SupportedLocale.ts';
const SUPPORTED_LOCALE_FILE_TEMPLATE =
  'export const supportedLocales = [%s] as const;';

module.exports = {
  DATA_DIRECTORY,
  GENERATED_DIRECTORY,
  SUPPORTED_LOCALE_FILE_NAME,
  SUPPORTED_LOCALE_FILE_TEMPLATE,
};
