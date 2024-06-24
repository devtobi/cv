<template>
  <Button
    :label="label"
    :aria-label="ariaLabel"
    v-tooltip.bottom="toolTip"
    :icon="PrimeIcons.FILE_PDF"
    severity="danger"
    @click="downloadPdf"
  />
</template>

<script setup lang="ts">
  import { breakpointsPrimeFlex, useBreakpoints } from '@vueuse/core';
  import { PrimeIcons } from 'primevue/api';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useSelectedLanguage } from '@/composables/useSelectedLanguage';
  import { useThemedTooltip } from '@/composables/useThemedTooltip';
  import { authorName, pdfFilename } from '@/config/constants';

  const { t } = useI18n();
  const { selectedLanguage } = useSelectedLanguage();

  const breakpoints = useBreakpoints(breakpointsPrimeFlex);

  const ariaLabel = computed(() => t('CvPdfDownloadButton.label'));
  const tooltipObject = useThemedTooltip(ariaLabel, 'Bottom');

  const isMobile = breakpoints.smaller('md');
  const label = computed(() => (isMobile.value ? '' : ariaLabel.value));

  const toolTip = computed(() => (isMobile.value ? tooltipObject.value : null));

  const downloadUrl = computed(
    () => `./${selectedLanguage.value}/${pdfFilename}`,
  );

  const downloadFileName = computed(
    () => `cv-${authorName.replace(/\s/g, '')}-${selectedLanguage.value}.pdf`,
  );

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = downloadUrl.value;
    link.target = '_blank';
    link.download = downloadFileName.value;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
</script>
