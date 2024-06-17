import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

const primeVue = PrimeVue;
const primeVueOptions = {
  ripple: true,
};

export { primeVue, primeVueOptions, ConfirmationService, ToastService };
