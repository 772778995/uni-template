import { createSSRApp } from 'vue'
import 'virtual:windi.css'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return { app }
}
