import { usePreferredLanguages, useStorage } from '@vueuse/core';
import { watch } from 'vue';

import type { RemovableRef } from '@vueuse/core';

import { DEFAULT_LOCALE } from '@/config/constants';
import { supportedLocales } from '@/generated/SupportedLocale';
import { loadLanguage } from '@/plugins/i18n';
import { SupportedLocale } from '@/types/SupportedLocale';

const STORAGE_KEY = 'language';

export const useLanguage = () => {
  const browserLanguages = usePreferredLanguages();

  const getDefaultLanguage = () => {
    if (browserLanguages.value.length === 0) return DEFAULT_LOCALE;

    const foundLocale = browserLanguages.value.find((browserLanguage) => {
      const supportedLocalesStrings = supportedLocales as unknown as string[];
      return supportedLocalesStrings.includes(browserLanguage);
    });

    return foundLocale ?? DEFAULT_LOCALE;
  };

  const selectedLanguage: RemovableRef<SupportedLocale> = useStorage(
    STORAGE_KEY,
    getDefaultLanguage(),
  ) as RemovableRef<SupportedLocale>;

  watch(
    selectedLanguage,
    async (code: SupportedLocale) => {
      await loadLanguage(code);
    },
    { immediate: true },
  );

  return { selectedLanguage };
};
