<template>
  <button
    v-tooltip.bottom="toolTip"
    :label="label"
    :aria-label="ariaLabel"
    :icon="PrimeIcons.FILE_PDF"
    severity="danger"
    @click="downloadPdf"
  />
</template>

<script setup lang="ts">
  import { PrimeIcons } from '@primevue/core/api';
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useSelectedLanguage } from '@/composables/useSelectedLanguage';
  import { useThemedTooltip } from '@/composables/useThemedTooltip';
  import { authorName, pdfFilename } from '@/config/constants';

  const { t } = useI18n();
  const { selectedLanguage } = useSelectedLanguage();

  const breakpoints = useBreakpoints(breakpointsTailwind);

  const ariaLabel = computed(() => t('CvPdfDownloadButton.label'));
  const tooltipObject = useThemedTooltip(ariaLabel, 'Bottom');

  const hideLabel = breakpoints.smaller('xl');
  const label = computed(() => (hideLabel.value ? '' : ariaLabel.value));

  const toolTip = computed(() =>
    hideLabel.value ? tooltipObject.value : null,
  );

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
