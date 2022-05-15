import { createI18n } from 'vue-i18n'
import zhCN from './langs/zh-CN'
import en from './langs/en'

export default createI18n({
	locale: 'zhCN',
	messages: { zhCN, en }
})

export const langList = ['zhCN', 'en']
