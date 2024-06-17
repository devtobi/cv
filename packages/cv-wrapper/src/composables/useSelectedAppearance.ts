import { RemovableRef, useStorage } from '@vueuse/core';

import { Appearance } from '@/types/Appearance';

export const useSelectedAppearance = () => {
  const STORAGE_KEY = 'appearance';

  const selectedAppearance: RemovableRef<string> = useStorage(
    STORAGE_KEY,
    Appearance.SYSTEM,
  );

  const resetAppearance = () => {
    selectedAppearance.value = Appearance.SYSTEM;
  };

  return {
    resetAppearance,
    selectedAppearance,
  };
};
