<template>
  <menubar :model="menuLinks">
    <template #start>
      <div class="flex flex-row mr-8">
        <avatar
          :image="profilePicture"
          size="large"
          shape="circle"
          role="img"
          :aria-label="localizedStrings.TheMenubar.profilePictureAlt"
          class="mr-3"
        />
        <p>
          {{ localizedStrings.TheMenubar.title }}
        </p>
      </div>
    </template>
    <template #item="{ item }">
      <a
        :href="item.url"
        :title="item.label as string"
      >
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
    <template #end>
      <p>{{ t('TheMenubar.newFeaturesSoon') }}</p>
    </template>
  </menubar>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';

  import profilePicture from '@/assets/images/profile_picture.png';
  import localizedStrings from '@/helpers/localizedStrings';
  import menuLinks from '@/helpers/menuLinks';

  const { t } = useI18n();
</script>
