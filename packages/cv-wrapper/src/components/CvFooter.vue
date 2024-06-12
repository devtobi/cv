<template>
  <footer class="text-center bg-transparent border-top-1 border-gray-200 p-1">
    <p class="text-gray-500">
      {{ staticStrings.CvFooter.copyright(currentYear) }}
    </p>
  </footer>
</template>

<script setup lang="ts">
  import { useCurrentYear } from '@/composables/useCurrentYear';
  import { staticStrings } from '@/helpers/staticStrings';

  const currentYear = useCurrentYear();
</script>
