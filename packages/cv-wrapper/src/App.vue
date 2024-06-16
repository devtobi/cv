<template>
  <div class="app-container flex flex-column min-h-screen">
    <the-menubar />
    <main class="flex-1">
      <CvScrollTop />
    </main>
    <the-footer />
  </div>
</template>

<script lang="ts" setup>
  import TheFooter from '@/components/CvFooter.vue';
  import TheMenubar from '@/components/CvMenubar.vue';
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
