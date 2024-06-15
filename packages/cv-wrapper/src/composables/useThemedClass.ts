import { computed } from 'vue';

import { useGetAppearance } from '@/composables/useGetAppearance';
import { Appearance } from '@/types/Appearance';

export const useThemedClass = (lightClass: string, darkClass: string) => {
  const { appearance } = useGetAppearance();

  return computed(() =>
    appearance.value === Appearance.DARK ? darkClass : lightClass,
  );
};
