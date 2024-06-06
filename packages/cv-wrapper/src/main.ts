import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import App from './App.vue'
const app = createApp(App)

app.use(PrimeVue, {
  ripple: true
})

app.mount('#app')
