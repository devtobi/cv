<template>
  <footer class="text-center bg-transparent border-top-1 border-gray-200 p-1">
    <p class="text-gray-500">
      {{ t('static.TheFooter.copyright', [currentYear]) }}
    </p>
  </footer>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  import { useCurrentYear } from '@/composables/useCurrentYear';

  const currentYear = useCurrentYear();

  const { t } = useI18n();
</script>
