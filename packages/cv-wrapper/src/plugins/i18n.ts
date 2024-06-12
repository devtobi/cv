import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

import { defaultLocale } from '@/config/constants';
import { supportedLocales } from '@/generated/SupportedLocale';
import en from '@/locales/en.json';
import { SupportedLocale } from '@/types/SupportedLocale';

type MessageSchema = typeof en;
type DefaultLocale = typeof defaultLocale;

const i18n = createI18n<[MessageSchema], DefaultLocale>({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  formatFallbackMessages: true,
  messages: {
    en,
  },
});
export default i18n;

const setI18nLanguage = (locale: SupportedLocale) => {
  (i18n.global.locale as any).value = locale;
  document.querySelector('html')!.setAttribute('lang', locale);
};

export const loadLanguage = async (locale: SupportedLocale) => {
  if (!supportedLocales.includes(locale)) {
    console.debug(
      `Loading localization ${locale} failed because no CV was provided for this language. Setting to fallback language ${defaultLocale}.`,
    );
    setI18nLanguage(defaultLocale);
    return nextTick();
  }

  if ((i18n.global.locale as any).value === locale) return nextTick();

  if ((i18n.global.availableLocales as string[]).includes(locale)) {
    setI18nLanguage(locale);
    return nextTick();
  }

  try {
    const messages = await import(`@/locales/${locale}.json`);
    i18n.global.setLocaleMessage<MessageSchema>(locale, messages.default);
    setI18nLanguage(locale);
  } catch {
    console.debug(
      `Localization file ${locale}.json not found. Setting to fallback language ${defaultLocale}.`,
    );
    setI18nLanguage(defaultLocale);
  }

  return nextTick();
};
