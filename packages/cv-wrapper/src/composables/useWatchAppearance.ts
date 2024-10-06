import { watch } from 'vue';

import { useGetAppearance } from '@/composables/useGetAppearance';
import { darkModeClass } from '@/config/constants';
import { Appearance } from '@/types/Appearance';

export const useWatchAppearance = () => {
  const { appearance } = useGetAppearance();

  const setPrimeVueAppearance = (appearance: string) => {
    const isLightTheme = appearance === Appearance.LIGHT;
    if (isLightTheme) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  };

  const enableDarkMode = () => {
    const element = document.querySelector('html');
    element?.classList.add(darkModeClass);
  };

  const disableDarkMode = () => {
    const element = document.querySelector('html');
    element?.classList.remove(darkModeClass);
  };

  watch(
    [appearance],
    () => {
      setPrimeVueAppearance(appearance.value);
    },
    { immediate: true },
  );
};
