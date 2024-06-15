import { usePrimeVue } from 'primevue/config';
import { watch } from 'vue';

import { useGetAppearance } from '@/composables/useGetAppearance';
import { darkTheme, lightTheme, themeLinkHtml } from '@/config/constants';
import { Appearance } from '@/types/Appearance';

export const useWatchAppearance = () => {
  const PrimeVue = usePrimeVue();
  const { appearance } = useGetAppearance();

  const setPrimeVueAppearance = (appearance: string) => {
    const isLightTheme = appearance === Appearance.LIGHT;
    const currentTheme = isLightTheme ? darkTheme : lightTheme;
    const newTheme = isLightTheme ? lightTheme : darkTheme;
    PrimeVue.changeTheme(currentTheme, newTheme, themeLinkHtml);
  };

  watch(
    [appearance],
    () => {
      setPrimeVueAppearance(appearance.value);
    },
    { immediate: true },
  );
};
