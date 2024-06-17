<template>
  <Toast position="bottom-right" />
  <ConfirmPopup />
  <div class="app-container flex flex-column min-h-screen">
    <CvMenubar />
    <main class="flex-1">
      <CvScrollTop />
    </main>
    <CvFooter />
  </div>
</template>

<script lang="ts" setup>
  import ConfirmPopup from 'primevue/confirmpopup';
  import Toast from 'primevue/toast';

  import CvFooter from '@/components/CvFooter.vue';
  import CvMenubar from '@/components/CvMenubar.vue';
  import CvScrollTop from '@/components/CvScrollTop.vue';
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
