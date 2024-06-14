<template>
  <Button
    :label="t('CvPdfDownloadButton.label')"
    :icon="PrimeIcons.FILE_PDF"
    severity="danger"
    @click="downloadPdf"
  />
</template>

<script setup lang="ts">
  import { PrimeIcons } from 'primevue/api';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useSelectedLanguage } from '@/composables/useSelectedLanguage';
  import { pdfFilename } from '@/config/constants';

  const { t } = useI18n();
  const { selectedLanguage } = useSelectedLanguage();

  const downloadUrl = computed(
    () => `./${selectedLanguage.value}/${pdfFilename}`,
  );

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = downloadUrl.value;
    link.target = '_blank';
    link.download = pdfFilename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
</script>
