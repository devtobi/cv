import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

import { DEFAULT_LOCALE } from '@/config/constants';
import { supportedLocales } from '@/generated/SupportedLocale';
import de from '@/locales/de.json'; // WIP: Only want to en by default
import en from '@/locales/en.json';
import { SupportedLocale } from '@/types/SupportedLocale';

type MessageSchema = typeof en;

const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  formatFallbackMessages: true,
  messages: {
    en,
    de,
  },
});
export default i18n;

const setI18nLanguage = (locale: SupportedLocale) => {
  (i18n.global.locale as any).value = locale;
  document.querySelector('html')!.setAttribute('lang', locale);
};

export const loadLanguage = async (locale: SupportedLocale) => {
  if (!supportedLocales.includes(locale))
    throw new Error('Language not supported');

  if ((i18n.global.locale as any).value === locale) return nextTick();

  if (i18n.global.availableLocales.includes(locale)) {
    setI18nLanguage(locale);
    return nextTick();
  }

  const messages = await import(`@/locales/${locale}.json`);
  if (!messages || !messages.default) throw new Error('Language not found');

  i18n.global.setLocaleMessage<MessageSchema>(locale, messages.default);
  setI18nLanguage(locale);
  return nextTick();
};
