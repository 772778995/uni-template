import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN.json'
import en from './locales/en.json'

export default createI18n({
	locale: 'zh-CN',
	messages: {
		'zh-CN': zhCN,
		en
	}
})

export const localeList = [
	{ locale: 'zh-CN', txt: '简体中文' },
	{ locale: 'en', txt: 'English' }
]
