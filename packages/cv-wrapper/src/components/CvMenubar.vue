<template>
  <menubar
    :model="menuLinksLocalized"
    class="px-3"
  >
    <template #start>
      <div class="flex flex-row justify-content-center mr-8">
        <avatar
          :image="profilePicture"
          size="large"
          shape="circle"
          role="img"
          :aria-label="t('CvMenubar.profilePictureAltText', { authorName })"
          class="mr-3"
        />
        <p>
          {{ t('CvMenubar.title', { authorName }) }}
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
          :severity="item.color"
          class="ml-3"
        />
      </a>
    </template>
    <template #end>
      <cv-pdf-download-button class="mr-3" />
      <cv-language-selector />
    </template>
  </menubar>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import type { MenuItem } from 'primevue/menuitem';

  import profilePicture from '@/assets/images/profile_picture.png';
  import CvLanguageSelector from '@/components/CvLanguageSelector.vue';
  import { authorName } from '@/config/constants';
  import menuLinks from '@/helpers/menuLinks';

  const { t } = useI18n();

  const menuLinksLocalized = computed<MenuItem[]>(() => {
    return menuLinks.map((menuLink) => {
      return {
        ...menuLink,
        label: menuLink.localeLabel ? t(menuLink.localeLabel) : menuLink.label,
      };
    });
  });
</script>