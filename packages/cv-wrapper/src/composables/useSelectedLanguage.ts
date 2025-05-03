import { RemovableRef, usePreferredLanguages, useStorage } from '@vueuse/core';

import { defaultLocale } from '@/config/constants';
import { supportedLocales } from '@/generated/SupportedLocale';
import { SupportedLocale } from '@/types/SupportedLocale';

const STORAGE_KEY = 'language';

export const useSelectedLanguage = () => {
  const browserLanguages = usePreferredLanguages();

  const getDefaultLanguage = () => {
    if (browserLanguages.value.length === 0) return defaultLocale;

    const foundLocale = browserLanguages.value.find((browserLanguage) => {
      const supportedLocalesStrings = supportedLocales as unknown as string[];
      return supportedLocalesStrings.includes(browserLanguage);
    }) as SupportedLocale | undefined;

    return foundLocale ?? defaultLocale;
  };

  const selectedLanguage: RemovableRef<SupportedLocale> = useStorage(
    STORAGE_KEY,
    getDefaultLanguage(),
  ) as RemovableRef<SupportedLocale>;

  const resetLanguage = () => {
    selectedLanguage.value = getDefaultLanguage();
  };

  return {
    resetLanguage,
    selectedLanguage,
  };
};
