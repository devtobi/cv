<template>
  <Menubar
    :model="menuLinksLocalized"
    class="pr-4 md:px-4"
    role="navigation"
    :pt="passThroughOptions"
    :breakpoints="breakpointsTailwind.lg"
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
        class="mr-4"
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
      <CvPdfDownloadButton class="mr-4" />
      <CvLanguageSelect class="hidden lg:flex mr-4" />
      <CvAppearanceToggleButton class="mr-4" />
      <CvInformationDialogButton />
    </template>
  </Menubar>
</template>

<script lang="ts" setup>
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
  import { MenubarPassThroughOptions } from 'primevue/menubar';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import type { MenuItem } from 'primevue/menuitem';

  import profilePicture from '@/assets/images/profile_picture.png';
  import CvInformationDialogButton from '@/components/CvInformationDialogButton.vue';
  import CvLanguageSelect from '@/components/CvLanguageSelect.vue';
  import { authorName } from '@/config/constants';
  import menuLinks from '@/helpers/menuLinks';

  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = breakpoints.smaller('sm');
  const hideLinkLabels = computed(() => breakpoints.active().value == 'lg');

  const label = computed(() =>
    isMobile.value
      ? t('CvMenubar.titleShort')
      : t('CvMenubar.title', { authorName }),
  );

  const passThroughOptions: MenubarPassThroughOptions = {
    start: {
      class: 'flex flex-row justify-center items-center md:mr-20 order-none',
    },
    end: {
      class: 'flex flex-row order-1 mr-4 lg:mr-0',
    },
    button: {
      class: 'order-2',
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
