/** 判断是否【数字】 */
export const isNum = (v: string) => /^\d+$/.test(v)
/** 判断是否【大写字母】 */
export const isUppercase = (v: string) => /^[A-Z]+$/.test(v)
/** 判断是否【小写字母】 */
export const isLowercase = (v: string) => /^[a-z]+$/.test(v)
/** 判断是否【字母】 */
export const isLetter = (v: string) => /^[A-Za-z]+$/.test(v)
/** 判断是否【英文单词】 */
export const isWord = (v: string) => /^[A-Z][a-z]+$/.test(v)
/** 判断是否【QQ号】 */
export const isQQ = (v: string) => /^[1-9][0-9]{4,9}$/.test(v)
/** 判断是否【中文字符】 */
export const isChinese = (v: string) => /^[\u4e00-\u9fa5]+$/.test(v)
/** 判断是否【手机号】 */
export const isPhone = (v: string) => /^1[3,5,7,8][0-9]\d{8}$/.test(v)
/** 判断是否【邮政编码】 */
export const isPostalCode = (v: string) => /^[1-9]\d{5}(?!\d)$/.test(v)
/** 判断是否【邮箱】 */
export const isEmail = (v: string) => /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v)
/** 判断是否【图片地址】 */
export const isImgUrl = (v: string) => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(v)
/** 判断是否【域名】 */
export const isDomain = (v: string) => /^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?$/.test(v)
/** 判断是否【ipv4】 */
export const isIPv4 = (v: string) =>
	/^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/.test(v)

/** 判断是否【定位器】 */
export const isPositioner = (v: string) => /^\d{15}$/.test(v)
/** 判断是否【铭牌】 */
export const isNameplate = (v: string) => /^([A-F0-9]{2}:){4}[A-F0-9]{2}$/.test(v)
