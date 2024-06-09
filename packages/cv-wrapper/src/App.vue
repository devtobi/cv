<template>
  <div class="app-container flex flex-column min-h-screen">
    <the-menubar />
    <main class="content flex-1">This is my content</main>
    <the-footer />
  </div>
</template>

<script lang="ts" setup>
import TheMenubar from '@/components/TheMenubar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style>
html,
body,
.app-container {
  height: 100%;
  margin: 0;
}
</style>
