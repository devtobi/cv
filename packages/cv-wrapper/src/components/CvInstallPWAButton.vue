<template>
  <Button
    :label="t('CvInstallPWAButton.label')"
    :icon="PrimeIcons.DOWNLOAD"
    @click="install"
  />
</template>

<script setup lang="ts">
  import { PrimeIcons } from '@primevue/core/api';
  import { storeToRefs } from 'pinia';
  import { useI18n } from 'vue-i18n';

  import { installPWA } from '@/helpers/installPWA';
  import { usePWAStore } from '@/stores/usePWAStore';

  const { t } = useI18n();

  const { installPWAEvent } = storeToRefs(usePWAStore());

  const install = () => {
    if (installPWAEvent.value)
      installPWA(installPWAEvent.value as BeforeInstallPromptEvent);
  };
</script>
