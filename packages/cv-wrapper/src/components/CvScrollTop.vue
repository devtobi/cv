<template>
  <ScrollTop
    v-tooltip.left="tooltipObject"
    :pt="passThroughOptions"
    :icon="PrimeIcons.CHEVRON_UP"
  />
</template>

<script setup lang="ts">
  import { PrimeIcons } from '@primevue/core/api';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useThemedClass } from '@/composables/useThemedClass';
  import { useThemedTooltip } from '@/composables/useThemedTooltip';

  const backgroundColor = useThemedClass('bg-black', 'bg-white');
  const iconStyle = useThemedClass(
    'color: var(--gray-100)',
    'color: var(--gray-700)',
  );

  const { t } = useI18n();
  const tooltipLabel = computed(() => t('PrimeVue.aria.scrollTop'));
  const tooltipObject = useThemedTooltip(tooltipLabel, 'Left');

  const passThroughOptions = computed(() => {
    return {
      root: `rounded-md ${backgroundColor.value}`,
      icon: {
        style: iconStyle.value,
      },
      transition: {
        name: 'fade',
      },
    };
  });
</script>
