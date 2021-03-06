import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import common from './common'
import i18n from './common/i18n'
import uView from 'vk-uview-ui'

import 'virtual:windi.css'

export function createApp() {
	const app = createSSRApp(App)
	const pinia = createPinia()
	app.use(pinia)
	app.use(common)
	app.use(i18n)
	app.use(uView)
	return { app }
}
