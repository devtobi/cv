<template>
  <toast position="bottom-right" />
  <confirm-dialog
    :group="confirmDialogGroup"
    class="m-4"
  />
  <confirm-popup :group="confirmPopupGroup" />
  <div class="app-container flex flex-col min-h-screen">
    <cv-menubar />
    <main class="flex-1">
      <cv-content-renderer />
      <cv-scroll-top />
    </main>
    <cv-footer />
  </div>
</template>

<script lang="ts" setup>
  import ConfirmDialog from 'primevue/confirmdialog';
  import ConfirmPopup from 'primevue/confirmpopup';
  import Toast from 'primevue/toast';

  import CvFooter from '@/components/CvFooter.vue';
  import CvMenubar from '@/components/CvMenubar.vue';
  import CvScrollTop from '@/components/CvScrollTop.vue';
  import { useInstallPWA } from '@/composables/useInstallPWA';
  import { usePWA } from '@/composables/usePWA';
  import { useWatchAppearance } from '@/composables/useWatchAppearance';
  import { useWatchLanguage } from '@/composables/useWatchLanguage';
  import { confirmDialogGroup, confirmPopupGroup } from '@/config/constants';

  useWatchLanguage();
  useWatchAppearance();
  usePWA();
  useInstallPWA();
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
