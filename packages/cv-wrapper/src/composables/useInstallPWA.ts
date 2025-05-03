import { PrimeIcons } from '@primevue/core/api';
import { storeToRefs } from 'pinia';
import { useConfirm } from 'primevue/useconfirm';
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { useInstallDialogShown } from '@/composables/useInstallDialogShown';
import { confirmDialogGroup } from '@/config/constants';
import { installPWA } from '@/helpers/installPWA';
import { usePWAStore } from '@/stores/usePWAStore';

export const useInstallPWA = () => {
  const { setEvent, setInstalled } = usePWAStore();

  window.addEventListener(
    'beforeinstallprompt',
    (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setEvent(event);
    },
  );

  window.addEventListener('appinstalled', () => {
    setInstalled();
  });

  const confirm = useConfirm();
  const { t } = useI18n();

  const { appInstallDialogShown } = useInstallDialogShown();
  const { installPWAEvent, canBeInstalled } = storeToRefs(usePWAStore());

  const showDialog = computed(
    () => canBeInstalled.value && !appInstallDialogShown.value,
  );

  watch(showDialog, () => {
    if (showDialog.value) {
      confirm.require({
        group: confirmDialogGroup,
        header: t('PWA.installTitle'),
        message: t('PWA.installMessage'),
        icon: PrimeIcons.INFO_CIRCLE,
        acceptClass: 'p-button-primary',
        rejectClass: 'p-button-danger p-button-text',
        rejectLabel: t('PWA.installReject'),
        acceptLabel: t('PWA.installAccept'),
        acceptIcon: PrimeIcons.DOWNLOAD,
        accept: () => {
          if (installPWAEvent.value) {
            void installPWA(installPWAEvent.value as BeforeInstallPromptEvent);
          }
        },
        reject() {
          appInstallDialogShown.value = true;
        },
      });
    }
  });
};
