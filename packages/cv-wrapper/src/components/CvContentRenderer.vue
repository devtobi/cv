<template>
  <HtmlInclude :src="contentSrc" />
</template>

<script setup lang="ts">
  import 'html-include-element';

  import { computed } from 'vue';

  import { useSelectedLanguage } from '@/composables/useSelectedLanguage';

  const { selectedLanguage } = useSelectedLanguage();

  const contentSrc = computed(() => `./${selectedLanguage.value}/`);
</script>
