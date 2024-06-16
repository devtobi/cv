<template>
  <Button
    :icon="PrimeIcons.INFO_CIRCLE"
    severity="secondary"
    outlined
    @click="showDialog = true"
    :aria-label="t('CvInformationDialogButton.label')"
    :aria-controls="showDialog ? dialogId : undefined"
    :aria-expanded="showDialog"
  />

  <Dialog
    :id="dialogId"
    v-model:visible="showDialog"
    modal
    :header="t('CvInformationDialogButton.appInfo')"
    :style="{ width: '25rem' }"
  >
  </Dialog>
</template>

<script setup lang="ts">
  import { PrimeIcons } from 'primevue/api';
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const showDialog = ref(false);

  const dialogId = 'appInfoDialog';

  const { t } = useI18n();
</script>
