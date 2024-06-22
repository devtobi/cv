import { RemovableRef, useStorage } from '@vueuse/core';

export const useInstallDialogShown = () => {
  const STORAGE_KEY = 'appInstallDialogShown';

  const appInstallDialogShown: RemovableRef<boolean> = useStorage(
    STORAGE_KEY,
    false,
  );

  const resetDialogShown = () => {
    appInstallDialogShown.value = false;
  };

  return {
    appInstallDialogShown,
    resetDialogShown,
  };
};
