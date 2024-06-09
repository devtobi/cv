<template>
  <footer class="text-center bg-transparent border-top-1 border-gray-200 p-1">
    <p class="text-gray-500">&copy; {{ currentYear }} Tobias Stadler</p>
  </footer>
</template>

<script setup lang="ts">
import { useCurrentYear } from '@/composables/useCurrentYear'

const currentYear = useCurrentYear()
</script>
