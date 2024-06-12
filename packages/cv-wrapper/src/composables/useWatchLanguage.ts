import { watch } from 'vue';

import { useSelectedLanguage } from '@/composables/useSelectedLanguage';
import { loadLanguage } from '@/plugins/i18n';
import { SupportedLocale } from '@/types/SupportedLocale';

export const useWatchLanguage = () => {
  const { selectedLanguage } = useSelectedLanguage();

  watch(
    selectedLanguage,
    async (code: SupportedLocale) => {
      await loadLanguage(code);
    },
    { immediate: true },
  );
};
