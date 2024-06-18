import { PrimeIcons } from 'primevue/api';
import { useConfirm } from 'primevue/useconfirm';
import { useRegisterSW } from 'virtual:pwa-register/vue';
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { confirmDialogGroup } from '@/config/constants';

export const usePWA = () => {
  const confirm = useConfirm();
  const { t } = useI18n();

  const intervalMS = 60 * 60 * 1000;

  const { needRefresh, updateServiceWorker } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      r &&
        setInterval(async () => {
          if (!(!r.installing && navigator)) return;

          if ('connection' in navigator && !navigator.onLine) return;

          const resp = await fetch(swUrl, {
            cache: 'no-store',
            headers: {
              cache: 'no-store',
              'cache-control': 'no-cache',
            },
          });

          if (resp?.status === 200) await r.update();
        }, intervalMS);
    },
  });

  const reset = () => {
    needRefresh.value = false;
  };

  watch(
    needRefresh,
    (value) => {
      if (value) {
        confirm.require({
          group: confirmDialogGroup,
          header: t('PWA.newVersionTitle'),
          message: t('PWA.newVersionMessage'),
          icon: PrimeIcons.DOWNLOAD,
          acceptClass: 'p-button-primary',
          rejectClass: 'p-button-primary p-button-text',
          accept: () => {
            updateServiceWorker();
          },
          onHide() {
            reset();
          },
        });
      }
    },
    { immediate: true },
  );
};
