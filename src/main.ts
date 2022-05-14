import { createSSRApp } from 'vue'
import 'virtual:windi.css'
import common from './common'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(common)
  return { app }
}
