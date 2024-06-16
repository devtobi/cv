<template>
  <Button
    :icon="PrimeIcons.INFO_CIRCLE"
    severity="secondary"
    outlined
    @click="showDialog = true"
    :aria-label="t('CvInformationDialogButton.label')"
    :aria-controls="showDialog ? dialogId : undefined"
    :aria-expanded="showDialog"
  />

  <Dialog
    :id="dialogId"
    v-model:visible="showDialog"
    modal
    :header="t('CvInformationDialogButton.appInfo')"
    maximizable
    :contentStyle="{ height: '30rem' }"
    :style="{ width: '50rem' }"
  >
    <template #header>
      <div class="flex align-items-center">
        <span class="font-bold white-space-nowrap ml-2 mr-5">{{
          t('CvInformationDialogButton.appInfo')
        }}</span>
        <Button
          :label="t('CvInformationDialogButton.githubLink')"
          :icon="PrimeIcons.GITHUB"
          severity="contrast"
          @click="openRepository"
        />
      </div>
    </template>
    <CvDependencyDataTable />
    <template #footer>
      <div class="w-full flex flex-row justify-content-center">
        <p>
          {{ t('CvInformationDialogButton.footerText1') }}
          <span
            :class="PrimeIcons.HEART"
            style="color: var(--red-500)"
            :aria-label="t('CvInformationDialogButton.footerLoveAria')"
          />
          {{ t('CvInformationDialogButton.footerText2') }}
        </p>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { PrimeIcons } from 'primevue/api';
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const showDialog = ref(false);

  const repoUrl = import.meta.env.PACKAGE_REPOSITORY_URL;

  const dialogId = 'appInfoDialog';

  const openRepository = () => {
    window.open(repoUrl, '_blank')!.focus();
  };

  const { t } = useI18n();
</script>
