<template>
  <div class="app-container flex flex-column min-h-screen">
    <the-menubar />
    <main class="flex-1">
      <span :class="operatingSystemIcon"></span>
    </main>
    <the-footer />
  </div>
</template>

<script lang="ts" setup>
  import TheFooter from '@/components/CvFooter.vue';
  import TheMenubar from '@/components/CvMenubar.vue';
  import { useWatchLanguage } from '@/composables/useWatchLanguage';
  import { getOperatingSystemIcon } from '@/helpers/getOperatingSystemIcon';

  const operatingSystemIcon = getOperatingSystemIcon();

  useWatchLanguage();
</script>

<style>
  html,
  body,
  .app-container {
    height: 100%;
    margin: 0;
  }
</style>
