<template>
  <Dropdown
    v-model="selectedLanguage"
    :options="languages"
    option-label="name"
    option-value="code"
    :placeholder="t('CvLanguageSelector.placeholder')"
    :aria-label="t('CvLanguageSelector.placeholder')"
  >
    <template #value="slotProps">
      <div
        v-if="slotProps.value"
        class="flex align-items-center"
      >
        <span
          class="mr-2 fi"
          :class="`fi-${getFlag(slotProps.value)}`"
        ></span>
        <div>{{ getDisplayName(slotProps.value) }}</div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="flex align-items-center">
        <span
          class="mr-2 fi"
          :class="`fi-${getFlag(slotProps.option.code)}`"
        ></span>
        <div>{{ slotProps.option.name }}</div>
      </div>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useSelectedLanguage } from '@/composables/useSelectedLanguage';
  import { supportedLocales } from '@/generated/SupportedLocale';
  import { Language } from '@/types/Language';

  const { t } = useI18n();

  const { selectedLanguage } = useSelectedLanguage();

  const languages = computed(() =>
    supportedLocales.map((locale) => {
      return {
        code: locale,
        name: getDisplayName(locale),
      } as Language;
    }),
  );

  const getFlag = (code: string) => {
    return code === 'en' ? 'gb' : code;
  };

  const getDisplayName = (code: string) => {
    const languageNames = new Intl.DisplayNames([code], {
      type: 'language',
    });
    return toFirstUppercase(languageNames.of(code)!);
  };

  const toFirstUppercase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
</script>
