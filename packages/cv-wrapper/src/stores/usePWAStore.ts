import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';

export const usePWAStore = defineStore('pwa', () => {
  const installPWAEventInternal = ref<BeforeInstallPromptEvent | null>();
  const installPWAEvent = readonly(installPWAEventInternal);

  const canBeInstalled = computed(() => !!installPWAEventInternal.value);

  const setInstalled = () => {
    installPWAEventInternal.value = null;
  };

  const setEvent = (event: BeforeInstallPromptEvent) => {
    installPWAEventInternal.value = event;
  };

  return { canBeInstalled, installPWAEvent, setEvent, setInstalled };
});
