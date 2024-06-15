import { usePreferredDark } from '@vueuse/core';
import { computed } from 'vue';

import { useSelectedAppearance } from '@/composables/useSelectedAppearance';
import { Appearance } from '@/types/Appearance';

export const useGetAppearance = () => {
  const prefersDark = usePreferredDark();
  const { selectedAppearance } = useSelectedAppearance();

  const appearance = computed(() =>
    selectedAppearance.value === Appearance.SYSTEM
      ? prefersDark.value
        ? Appearance.DARK
        : Appearance.LIGHT
      : selectedAppearance.value,
  );

  return {
    appearance,
  };
};
