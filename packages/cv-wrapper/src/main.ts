import Tooltip from 'primevue/tooltip';
import { createApp } from 'vue';

import { registerPlugins } from '@/plugins';
import App from './App.vue';

const app = createApp(App);

registerPlugins(app);

app.directive('tooltip', Tooltip);
app.mount('#app');
