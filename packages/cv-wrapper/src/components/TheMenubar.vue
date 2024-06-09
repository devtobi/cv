<
<template>
  <menubar :model="menuLinks">
    <template #start>
      <div class="flex flex-row mr-8">
        <avatar
          :image="profilePicture"
          size="large"
          shape="circle"
          role="img"
          aria-label="Profile picture of Tobias Stadler"
          class="mr-3"
        />
        <p><strong>Tobias Stadler</strong> - Curriculum Vitae</p>
      </div>
    </template>
    <template #item="{ item }">
      <a :href="item.url" :title="item.label as string">
        <Button
          :icon="item.icon"
          :label="item.label as string"
          size="small"
          rounded
          :severity="item.color"
          class="ml-3"
        />
      </a>
    </template>
    <template #end> New features will be added soon! </template>
  </menubar>
</template>

<script lang="ts" setup>
import profilePicture from '@/assets/images/profile_picture.png'
import menuLinks from '@/data/menuLinks'
</script>
