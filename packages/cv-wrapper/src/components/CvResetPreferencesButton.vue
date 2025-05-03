<template>
  <button
    :label="t('CvResetPreferencesButton.label')"
    :icon="PrimeIcons.REFRESH"
    severity="danger"
    @click="confirmReset"
  />
</template>

<script setup lang="ts">
  import { PrimeIcons } from '@primevue/core/api';
  import { useConfirm } from 'primevue/useconfirm';
  import { useToast } from 'primevue/usetoast';
  import { useI18n } from 'vue-i18n';

  import { useInstallDialogShown } from '@/composables/useInstallDialogShown';
  import { useSelectedAppearance } from '@/composables/useSelectedAppearance';
  import { useSelectedLanguage } from '@/composables/useSelectedLanguage';
  import { confirmPopupGroup } from '@/config/constants';

  const { t } = useI18n();
  const confirm = useConfirm();
  const toast = useToast();

  const { resetLanguage } = useSelectedLanguage();
  const { resetAppearance } = useSelectedAppearance();
  const { resetDialogShown } = useInstallDialogShown();

  const confirmReset = (event: MouseEvent) => {
    confirm.require({
      group: confirmPopupGroup,
      target: event.currentTarget as HTMLElement,
      message: t('CvResetPreferencesButton.confirmMessage'),
      icon: PrimeIcons.EXCLAMATION_CIRCLE,
      acceptClass: 'p-button-danger',
      rejectClass: 'p-button-danger p-button-text',
      accept: () => {
        resetPreferences();
      },
    });
  };

  const resetPreferences = () => {
    resetAppearance();
    resetLanguage();
    resetDialogShown();
    toast.add({
      severity: 'contrast',
      summary: t('CvResetPreferencesButton.toastTitle'),
      detail: t('CvResetPreferencesButton.toastMessage'),
      life: 10000,
    });
  };
</script>
