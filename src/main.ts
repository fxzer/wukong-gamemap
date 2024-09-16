import { setupMock } from '@/mocks'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

setupMock()
const app = createApp(App)
app.use(pinia)
app.mount('#app')
