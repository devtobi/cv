import { createI18n } from 'vue-i18n';

import de from '@/locales/de.json';
import en from '@/locales/en.json';

export const supportedLocales = ['en'];

export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale: SupportedLocale = 'en';

type MessageSchema = typeof en;

const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  locale: 'de',
  fallbackLocale: defaultLocale,
  formatFallbackMessages: true,
  messages: {
    en: Object.assign(en),
    de: Object.assign(de),
  },
});
export default i18n;
