<template>
  <Button
    v-tooltip.left="tooltipObject"
    :icon="PrimeIcons.INFO_CIRCLE"
    severity="secondary"
    outlined
    :aria-label="t('CvInformationDialogButton.label')"
    :aria-controls="showDialog ? dialogId : undefined"
    :aria-expanded="showDialog"
    @click="showDialog = true"
  />

  <Dialog
    :id="dialogId"
    v-model:visible="showDialog"
    modal
    :header="t('CvInformationDialogButton.appInfo')"
    maximizable
    :content-style="{ height: '30rem' }"
    :pt="accessibilityOptions"
    :class="maximized ? 'm-0' : 'm-3'"
    @maximize="maximized = true"
    @unmaximize="maximized = false"
  >
    <template #header>
      <div class="flex align-items-center">
        <span class="font-bold white-space-nowrap ml-2 mr-5">{{
          t('CvInformationDialogButton.appInfo')
        }}</span>
        <Button
          :label="gitHubLabel"
          :icon="PrimeIcons.GITHUB"
          severity="contrast"
          class="mr-3"
          @click="openRepository"
        />
      </div>
    </template>
    <CvDependencyDataTable />
    <template #footer>
      <div class="w-full flex flex-column align-items-center">
        <p>
          {{ t('CvInformationDialogButton.footerText1') }}
          <span
            :class="PrimeIcons.HEART"
            style="color: var(--red-500)"
            :aria-label="t('CvInformationDialogButton.footerLoveAria')"
          />
          {{ t('CvInformationDialogButton.footerText2') }}
        </p>
        <CvLanguageSelect
          v-if="showLanguageSelection"
          class="mb-3"
        />
        <CvInstallPWAButton
          v-if="canBeInstalled"
          class="mb-3"
        />
        <CvResetPreferencesButton />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { PrimeIcons } from '@primevue/core/api';
  import { breakpointsPrimeFlex, useBreakpoints } from '@vueuse/core';
  import { storeToRefs } from 'pinia';
  import { DialogPassThroughOptions } from 'primevue/dialog';
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useThemedTooltip } from '@/composables/useThemedTooltip';
  import { usePWAStore } from '@/stores/usePWAStore';

  const breakpoints = useBreakpoints(breakpointsPrimeFlex);
  const showLanguageSelection = breakpoints.smaller('lg');
  const hideGitHubLabel = breakpoints.smaller('sm');

  const maximized = ref(false);

  const gitHubLabel = computed(() =>
    hideGitHubLabel.value ? '' : t('CvInformationDialogButton.githubLink'),
  );

  const showDialog = ref(false);

  const repoUrl = import.meta.env.PACKAGE_REPOSITORY_URL;

  const dialogId = 'appInfoDialog';

  const { canBeInstalled } = storeToRefs(usePWAStore());

  const { t } = useI18n();

  const tooltipLabel = computed(() => t('CvInformationDialogButton.tooltip'));

  const tooltipObject = useThemedTooltip(tooltipLabel, 'Left');

  const openRepository = () => {
    window.open(repoUrl, '_blank')!.focus();
  };

  const accessibilityOptions: DialogPassThroughOptions = {
    pcMaximizeButton: {
      icon: {
		  ariaHidden: true
	  }
    },
  };
</script>
