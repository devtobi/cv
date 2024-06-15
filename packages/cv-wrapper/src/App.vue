<template>
  <div class="app-container flex flex-column min-h-screen">
    <the-menubar />
    <main class="flex-1"></main>
    <the-footer />
  </div>
</template>

<script lang="ts" setup>
  import TheFooter from '@/components/CvFooter.vue';
  import TheMenubar from '@/components/CvMenubar.vue';
  import { useWatchAppearance } from '@/composables/useWatchAppearance';
  import { useWatchLanguage } from '@/composables/useWatchLanguage';

  useWatchLanguage();
  useWatchAppearance();
</script>

<style>
  html,
  body,
  .app-container {
    height: 100%;
    margin: 0;
  }
</style>
