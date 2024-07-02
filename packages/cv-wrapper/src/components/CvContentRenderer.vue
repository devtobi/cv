<template>
	<html-include
		:src="contentSrc"
	/>
</template>

<script setup lang="ts">
  import 'html-include-element';

  import { useSelectedLanguage } from '@/composables/useSelectedLanguage';
  import { computed } from 'vue';

  const { selectedLanguage } = useSelectedLanguage();

  const contentSrc = computed(() => `./${selectedLanguage.value}/`)
</script>
