import { usePrimeVue } from 'primevue/config';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { useSelectedLanguage } from '@/composables/useSelectedLanguage';
import { loadLanguage } from '@/plugins/i18n';
import { SupportedLocale } from '@/types/SupportedLocale';

export const useWatchLanguage = () => {
  const { selectedLanguage } = useSelectedLanguage();
  const { t } = useI18n();
  const PrimeVue = usePrimeVue();

  watch(
    selectedLanguage,
    async (code: SupportedLocale) => {
      await loadLanguage(code);
      updatePrimeVueLocalizations();
    },
    { immediate: true },
  );

  const updatePrimeVueLocalizations = () => {
    PrimeVue.config.locale!.aria!.close = t('PrimeVue.aria.close');
  };
};
