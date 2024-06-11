import { createI18n } from 'vue-i18n';

import en from '@/locales/en.json';

export const supportedLocales = ['en'];

export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale: SupportedLocale = 'en';

type MessageSchema = typeof en;

const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  formatFallbackMessages: true,
  messages: {
    en,
  },
});
export default i18n;
