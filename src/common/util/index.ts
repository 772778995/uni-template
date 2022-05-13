import day from '../day'

/**
 * 获取指定页面实例
 * @param i 指定相对于当前页面之前的页面的数量，默认0即当前页面
 * @returns 页面实例
 */
export const getPage = (i: number = 0) => {
	const pages = getCurrentPages()
	return pages[pages.length - 1 - i] as Page.PageInstance
}

/**
 *
 * @param time 要格式化的时间，time 为当前 HH:mm:ss，date 为当前 YYYY-MM-DD 默认当前时间
 * @param format 要格式化的格式，time 为 HH:mm:ss，date 为 YYYY-MM-DD，默认 YYYY-MM-DD HH:mm:ss
 * @returns 2022-03-24 10:25:55
 */
export const formatTime = (
	time?: 'time' | 'date' | string | number | Date,
	format: 'time' | 'date' | string = 'YYYY-MM-DD HH:mm:ss'
) => {
	switch (time) {
		case 'time': {
			format = 'HH:mm:ss'
			time = undefined
			break
		}
		case 'date':
			format = 'YYYY-MM-DD'
			time = undefined
			break
	}
	switch (format) {
		case 'time':
			format = 'HH:mm:ss'
			break
		case 'date':
			format = 'YYYY-MM-DD'
			break
	}
	return day(time).format(format)
}
