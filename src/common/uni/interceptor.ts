import { getStorageSync, showToast } from './index'

const loginWhiteList = ['/pages/index/index']

const invoke = (arg: any) => {
	arg.url = arg.url.replace(/@|(\.vue)/g, '')
	if (process.env.NODE_ENV === 'production') {
		if (loginWhiteList.includes(arg.url)) return true
		return getStorageSync('userInfo') || showToast('页面不存在或无权访问')
	}
}

const fail = (err: any) => {
	const errMsg = err?.errMsg || '异常错误'
	showToast(errMsg)
	throw new Error(errMsg)
}

uni.addInterceptor('navigateTo', { invoke, fail })
uni.addInterceptor('redirectTo', { invoke, fail })
uni.addInterceptor('reLaunch', { invoke, fail })
uni.addInterceptor('switchTab', { invoke, fail })
uni.addInterceptor('navigateBack', { fail })
uni.addInterceptor('preloadPage', { fail })
