<template>
  <Select
    v-model="selectedLanguage"
    :options="languages"
    option-label="name"
    option-value="code"
    :placeholder="t('CvLanguageSelect.placeholder')"
    :aria-label="t('CvLanguageSelect.placeholder')"
  >
    <template #value="slotProps">
      <div
        v-if="slotProps.value"
        class="flex items-center"
      >
        <span
          class="mr-2 fi"
          :class="`fi-${getFlag(slotProps.value)}`"
        />
        <div>{{ getDisplayName(slotProps.value) }}</div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="flex items-center">
        <span
          class="mr-2 fi"
          :class="`fi-${getFlag(slotProps.option.code)}`"
        ></span>
        <div>{{ slotProps.option.name }}</div>
      </div>
    </template>
  </Select>
</template>

<script setup lang="ts">
  import Select from 'primevue/select';
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
