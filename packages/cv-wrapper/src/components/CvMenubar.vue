<template>
  <menubar
    :model="menuLinksLocalized"
    class="pr-3 md:pr-0 md:px-3"
    role="navigation"
    :pt="passThroughOptions"
    :breakpoints="breakpointsPrimeFlex.lg"
  >
    <template #start>
      <Avatar
        :image="profilePicture"
        size="large"
        shape="circle"
        role="img"
        :aria-label="
          t('CvMenubar.profilePictureAltText', { authorName: authorName })
        "
        class="mr-3"
      />
      <p>
        {{ label }}
      </p>
    </template>
    <template #item="{ item, props }">
      <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
      <a
        :href="item.url"
        :title="item.label as string"
        target="_blank"
        v-bind="props.action"
        aria-hidden="false"
      >
        <Button
          :icon="item.icon"
          :label="hideLinkLabels ? '' : (item.label as string)"
          :severity="item.color"
        />
      </a>
    </template>
    <template #end>
      <cv-pdf-download-button class="mr-3" />
      <cv-language-select class="hidden lg:flex mr-3" />
      <cv-appearance-toggle-button class="mr-3" />
      <cv-information-dialog-button />
    </template>
  </menubar>
</template>

<script lang="ts" setup>
  import { breakpointsPrimeFlex, useBreakpoints } from '@vueuse/core';
  import { MenubarPassThroughOptions } from 'primevue/menubar';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import type { MenuItem } from 'primevue/menuitem';

  import profilePicture from '@/assets/images/profile_picture.png';
  import CvInformationDialogButton from '@/components/CvInformationDialogButton.vue';
  import CvLanguageSelect from '@/components/CvLanguageSelect.vue';
  import { authorName } from '@/config/constants';
  import menuLinks from '@/helpers/menuLinks';

  const breakpoints = useBreakpoints(breakpointsPrimeFlex);
  const isMobile = breakpoints.smaller('sm');
  const hideLinkLabels = computed(() => breakpoints.active().value == 'lg');

  const label = computed(() =>
    isMobile.value
      ? t('CvMenubar.titleShort')
      : t('CvMenubar.title', { authorName }),
  );

  const passThroughOptions: MenubarPassThroughOptions = {
    start: {
      class:
        'flex flex-row justify-content-center align-items-center md:mr-8 flex-order-0',
    },
    end: {
      class: 'flex flex-row flex-order-1 mr-3 lg:mr-0',
    },
    button: {
      class: 'flex-order-2',
    },
    item: {
      class: 'm-0',
    },
  };

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
