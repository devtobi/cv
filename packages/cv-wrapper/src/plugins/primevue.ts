import 'primeicons/primeicons.css';

import Aura from '@primevue/themes/aura';
import PrimeVue, { PrimeVueConfiguration } from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import { darkModeClass } from '@/config/constants';

const primeVue = PrimeVue;
const primeVueOptions: PrimeVueConfiguration = {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: `.${darkModeClass}`,
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
};

export { primeVue, primeVueOptions, ConfirmationService, ToastService };
