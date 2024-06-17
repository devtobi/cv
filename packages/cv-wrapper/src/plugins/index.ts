import type { App } from 'vue';

import 'flag-icons/css/flag-icons.css';

import i18n from '@/plugins/i18n';
import {
  ConfirmationService,
  primeVue,
  primeVueOptions,
  ToastService,
} from '@/plugins/primevue';

export function registerPlugins(app: App) {
  app
    .use(i18n)
    .use(primeVue, primeVueOptions)
    .use(ConfirmationService)
    .use(ToastService);
}
