import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN.json'
import en from './locales/en.json'

export default createI18n({
	locale: 'zhCN',
	messages: { zhCN, en }
})

export const langList = ['zhCN', 'en']
