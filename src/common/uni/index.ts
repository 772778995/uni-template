import _ from 'lodash'
//—————————————————————————————————界面—————————————————————————————————————
/**
 * 显示消息提示框。
 * https://uniapp.dcloud.io/api/ui/prompt?id=showtoast
 */
export const showToast = (opts: UniApp.ShowToastOptions | string) => {
	if (_.isString(opts)) opts = { title: opts }
	uni.showToast(Object.assign({ icon: 'none' }, opts))
	return false
}

/**
 * 隐藏消息提示框。
 * https://uniapp.dcloud.io/api/ui/prompt?id=hidetoast
 */
export const hideToast = uni.hideToast

/**
 * 显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框。
 * https://uniapp.dcloud.io/api/ui/prompt?id=showloading
 */
export const showLoading = (opts: UniApp.ShowLoadingOptions | string) => {
	if (_.isString(opts)) opts = { title: opts, mask: true }
	uni.showLoading(opts)
	return false
}

/**
 * 隐藏 loading 提示框。
 * https://uniapp.dcloud.io/api/ui/prompt?id=hideloading
 */
export const hideLoading = uni.hideLoading

/**
 * 显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。
 * http://uniapp.dcloud.io/api/ui/prompt?id=showmodal
 */
export const showModal = (opts: UniApp.ShowModalOptions | string) => {
	if (_.isString(opts)) opts = { content: opts }
	return new Promise((resolve, reject) =>
		uni.showModal({
			success: res => {
				if (res.confirm) return resolve(res?.content)
				reject(res)
			},
			...(opts as UniApp.ShowModalOptions)
		})
	)
}

/**
 * 将页面滚动到目标位置。
 * https://uniapp.dcloud.io/api/ui/scroll.html
 */
export const pageScrollTo = (opts: UniApp.PageScrollToOptions | string | number) => {
	if (_.isString(opts)) opts = { selector: opts }
	if (_.isNumber(opts)) opts = { scrollTop: opts }
	return uni.pageScrollTo(opts) as unknown as Promise<unknown>
}

/**
 * 在小程序平台，如果原生导航栏被隐藏，仍然在右上角会有一个悬浮按钮，微信下也被称为胶囊按钮。
 * 本API用于获取小程序下该菜单按钮的布局位置信息，方便开发者布局顶部内容时避开该按钮。
 * https://uniapp.dcloud.io/api/ui/menuButton.html#getmenubuttonboundingclientrect
 */
export const getMenuButtonBoundingClientRect = () => {
	let res: UniApp.GetMenuButtonBoundingClientRectRes
	/* #ifdef MP-WEIXIN */
	res = uni.getMenuButtonBoundingClientRect()
	/* #endif */
	// #ifndef MP-WEIXIN
	res = {
		bottom: 80,
		top: 10,
		left: 200,
		right: 20,
		height: 80,
		width: 100
	}
	// #endif
	return res
}

//—————————————————————————————————路由与页面跳转—————————————————————————————————————
/**
 * 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
 * https://uniapp.dcloud.io/api/router?id=navigateto
 */
export const navigateTo = (opts: UniApp.NavigateToOptions | string) => {
	if (_.isString(opts)) opts = { url: opts }
	uni.navigateTo(opts)
	return false
}

/**
 * 关闭当前页面，跳转到应用内的某个页面。
 * https://uniapp.dcloud.io/api/router?id=redirectto
 */
export const redirectTo = (opts: UniApp.RedirectToOptions | string) => {
	if (_.isString(opts)) opts = { url: opts }
	uni.redirectTo(opts)
	return false
}
/**
 * 关闭所有页面，打开到应用内的某个页面。
 * https://uniapp.dcloud.io/api/router?id=relaunch
 */
export const reLaunch = (opts: UniApp.ReLaunchOptions | string) => {
	if (_.isString(opts)) opts = { url: opts }
	uni.reLaunch(opts)
	return false
}
/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
 * https://uniapp.dcloud.io/api/router?id=switchtab
 */
export const switchTab = (opts: UniApp.SwitchTabOptions | string) => {
	if (_.isString(opts)) opts = { url: opts }
	uni.switchTab(opts)
	return false
}
/**
 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
 * https://uniapp.dcloud.io/api/router?id=navigateback
 */
export const navigateBack = (opts?: UniApp.NavigateBackOptions | number) => {
	if (!opts) opts = {}
	if (_.isNumber(opts)) opts = { delta: opts }
	uni.navigateBack(opts)
	return false
}
/**
 * 预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。
 * https://uniapp.dcloud.io/api/preload-page
 */
export const preloadPage = (opts: UniApp.PreloadPageOptions | string) => {
	if (_.isString(opts)) opts = { url: opts }
	uni.preloadPage(opts)
	return false
}

//—————————————————————————————————数据缓存—————————————————————————————————————
/**
 * 将数据存储在本地缓存，这是一个异步接口。
 * https://uniapp.dcloud.io/api/storage/storage?id=setstorage
 */
export const setStorage = (key: string, data: any) => uni.setStorage({ key, data }) as unknown as Promise<unknown>

/**
 * 将数据存储在本地缓存，这是一个同步接口。
 * https://uniapp.dcloud.io/api/storage/storage?id=setstoragesync
 */
export const setStorageSync = (key: string, data: any) => (uni.setStorageSync(key, data) as unknown) || false

/**
 * 从本地缓存中异步获取指定 key 对应的内容。
 * https://uniapp.dcloud.io/api/storage/storage?id=getstorage
 */
export const getStorage = (key: string) => uni.getStorage({ key }) as unknown as Promise<unknown>

/**
 * 从本地缓存中同步获取指定 key 对应的内容。
 * https://uniapp.dcloud.io/api/storage/storage?id=getstoragesync
 */
export const getStorageSync = (key: string) => uni.getStorageSync(key)

/**
 * 异步获取当前 storage 的相关信息。
 * https://uniapp.dcloud.io/api/storage/storage?id=getstorageinfo
 */
export const getStorageInfo = uni.getStorageInfo as {
	(opts: UniApp.GetStorageInfoOptions): Promise<unknown>
}

/**
 * 同步获取当前 storage 的相关信息。
 * https://uniapp.dcloud.io/api/storage/storage?id=getstorageinfosync
 */
export const getStorageInfoSync = uni.getStorageInfo

/**
 * 从本地缓存中异步移除指定 key。
 * https://uniapp.dcloud.io/api/storage/storage?id=removestorage
 */
export const removeStorage = (key: string) => uni.removeStorage({ key }) as unknown as Promise<unknown>

/**
 * 从本地缓存中同步移除指定 key。
 * https://uniapp.dcloud.io/api/storage/storage?id=removestoragesync
 */
export const removeStorageSync = uni.removeStorageSync

/**
 * 清理本地数据缓存。
 * https://uniapp.dcloud.io/api/storage/storage?id=clearstorage
 */
export const clearStorage = uni.clearStorage

/**
 * 同步清理本地数据缓存。
 * https://uniapp.dcloud.io/api/storage/storage?id=clearstoragesync
 */
export const clearStorageSync = uni.clearStorageSync

//—————————————————————————————————位置—————————————————————————————————————
/**
 * 异步获取当前的地理位置、速度。
 * https://uniapp.dcloud.io/api/location/location
 */
export const getLocation = (opts: UniApp.GetLocationOptions = {}) => {
	opts = Object.assign({ type: 'gcj02', isHighAccuracy: true }, opts)
	return uni.getLocation(opts) as unknown as Promise<UniApp.GetLocationSuccess>
}

/**
 * 打开地图选择位置。
 * https://uniapp.dcloud.io/api/location/location?id=chooselocation
 */
export const chooseLocation = uni.chooseLocation as {
	(opts: UniApp.ChooseLocationOptions): Promise<UniApp.ChooseLocationSuccess>
}

/**
 * 使用应用内置地图查看位置。
 * https://uniapp.dcloud.io/api/location/open-location
 */
export const openLocation = uni.openLocation as {
	(opts: UniApp.OpenLocationOptions): Promise<unknown>
}

//—————————————————————————————————媒体—————————————————————————————————————
/**
 * 创建并返回 map 上下文 mapContext 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 <map> 组件。
 * https://uniapp.dcloud.io/api/location/map?id=createmapcontext
 */
export const createMapContext = uni.createMapContext

/**
 * 异步从本地相册选择图片或使用相机拍照。
 * https://uniapp.dcloud.io/api/media/image?id=chooseimage
 */
export const chooseImage = (
	opts: UniApp.ChooseImageOptions = {
		count: 1
	}
) => uni.chooseImage(opts) as unknown as Promise<UniApp.ChooseImageSuccessCallbackResult>
/**
 * 从本地选择文件。仅 H5 平台有效
 * https://uniapp.dcloud.io/api/media/file.html
 */
export const chooseFileH5 = uni.chooseFile as {
	(opts: UniApp.ChooseFileOptions): Promise<UniApp.ChooseFileSuccessCallbackResult>
}

// —————————————————————————————————设备—————————————————————————————————————
/**
 * 获取系统信息。
 * https://uniapp.dcloud.io/api/system/info.html#getsysteminfo
 */
export const getSystemInfo = (opts: UniApp.GetSystemInfoOptions = {}) =>
	uni.getSystemInfo(opts) as unknown as Promise<UniApp.GetSystemInfoResult>

/**
 * 获取系统信息同步接口。
 * https://uniapp.dcloud.io/api/system/info.html#getsysteminfo
 */
export const getSystemInfoSync = uni.getSystemInfoSync

/**
 * 调起客户端扫码界面，扫码成功后返回对应的结果。
 * https://uniapp.dcloud.io/api/system/barcode.html#scancode
 */
export const scanCode = (
	opts: UniApp.ScanCodeOptions = {
		scanType: ['qrCode']
	}
) => uni.scanCode(opts) as unknown as Promise<UniApp.ScanCodeSuccessRes>

/**
 * 使手机发生较短时间的振动（15ms）。iOS上只有长震动，没有短震动
 * https://uniapp.dcloud.io/api/system/vibrate.html#vibrateshort
 */
export const vibrateShort = () => uni.vibrateShort({}) as unknown as Promise<any>

/**
 * 使手机发生较长时间的振动（400ms）。
 * https://uniapp.dcloud.io/api/system/vibrate.html#vibratelong
 */
export const vibrateLong = () => uni.vibrateLong({}) as unknown as Promise<any>

//—————————————————————————————————第三方服务—————————————————————————————————————
/**
 * 登录
 * https://uniapp.dcloud.io/api/plugins/login.html
 */
export const login = (opts: UniApp.LoginOptions = {}) => uni.login(opts) as unknown as Promise<UniApp.LoginRes>

//—————————————————————————————————其他—————————————————————————————————————
/**
 * 获取全局唯一的录音管理器 recorderManager。
 * https://uniapp.dcloud.io/api/media/record-manager.html
 */
export const getRecorderManger = uni.getRecorderManager

type ScopeWX =
	| 'userInfo'
	| 'userLocation'
	| 'userLocationBackground'
	| 'address'
	| 'record'
	| 'writePhotosAlbum'
	| 'camera'
	| 'invoice'
	| 'invoiceTitle'
	| 'werun'
/**
 * 提前向用户发起授权请求。
 * https://uniapp.dcloud.io/api/other/authorize.html#authorize
 */
export const authorizeWX = (scope: ScopeWX) => {
	let res: Promise<unknown>
	// #ifdef MP-WEIXIN
	res = uni.authorize({ scope: 'scope.' + scope }) as unknown as Promise<unknown>
	// #endif
	// #ifndef MP-WEIXIN
	res = new Promise(resolve => resolve())
	// #endif
	return res
}

/**
 * 检查登录态是否过期。
 * https://uniapp.dcloud.io/api/plugins/login.html#uni-checksession
 */
export const checkSession = (opts: UniApp.CheckSessionOptions = {}) =>
	uni.checkSession(opts) as unknown as Promise<unknown>
