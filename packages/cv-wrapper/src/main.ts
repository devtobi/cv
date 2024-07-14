import Tooltip from 'primevue/tooltip';
import { App, createApp, Fragment, h } from 'vue';

import { registerPlugins } from '@/plugins';
import AppComponent from './App.vue';

let app = null;

const setupApp = (app: App) => {
  registerPlugins(app);
  app.directive('tooltip', Tooltip);
  app.mount('#app');
};

if (import.meta.env.MODE === 'development') {
  import('vue-axe').then((res) => {
    const VueAxe = res.default;
    const VueAxePopup = res.VueAxePopup;

    app = createApp({
      render: () => h(Fragment, [h(AppComponent), h(VueAxePopup)]),
    });
    app.use(VueAxe);
    setupApp(app);
  });
} else {
  app = createApp(AppComponent);
  setupApp(app);
}
