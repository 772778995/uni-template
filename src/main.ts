import { createSSRApp } from 'vue'
import 'virtual:windi.css'
import common from './common'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(common)
  return { app }
}
