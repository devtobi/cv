<template>
  <footer
    class="text-center bg-transparent border-t p-6"
    :class="borderClass"
  >
    <p :class="textClass">
      {{ staticStrings.CvFooter.copyright(currentYear) }}
    </p>
  </footer>
</template>

<script setup lang="ts">
  import { useCurrentYear } from '@/composables/useCurrentYear';
  import { useThemedClass } from '@/composables/useThemedClass';
  import { staticStrings } from '@/helpers/staticStrings';

  const textClass = useThemedClass('text-gray-500', 'text-gray-100');
  const borderClass = useThemedClass('border-gray-200', 'border-gray-700');

  const currentYear = useCurrentYear();
</script>
