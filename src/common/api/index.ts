import _ from 'lodash'
import { navigateTo, showModal, showLoading, hideLoading, removeStorage, getStorageSync } from '@/common/uni'

const BASE_URL = import.meta.env.VITE_BASE_API
interface Api {
  (opts: UniApp.RequestOptions): Promise<any>
  get(url: string, data?: any): Promise<any>
  put(url: string, data?: any): Promise<any>
  post(url: string, data?: any): Promise<any>
  delete(url: string, data?: any): Promise<any>
  upload(
    url: string,
    file: {
      name: string
      path: string
    },
    header?: any,
    data?: any
  ): Promise<any>
}

const showError = (content: string) =>
  showModal({
    title: '请求异常',
    content,
    showCancel: false
  })

const success = (res: any) => {
  if (!_.inRange(res.statusCode, 200, 399)) {
    const errMsg = res.data.msg || res.errMsg || '异常错误'
    showError(errMsg)
    throw new Error(errMsg)
  }
  return res.data.data
}

const api = (() => {
  let reqs = 0
  let isLoading = false
  return (opts: UniApp.RequestOptions) =>
    new Promise((resolve, reject) => {
      reqs++
      const loadingTimer = setTimeout(() => {
        showLoading('请求中…')
        isLoading = true
      }, 500)
      if (_.startsWith(opts.url, '/')) opts.url = BASE_URL + opts.url

      // 根据项目更改 token
      const token = getStorageSync('token')
      if (token) {
        opts.header = {
          ...(opts.header || {}),
          token
        }
      }

      uni.request({
        ...opts,
        success: (res) => resolve(success(res)),
        fail: (err) => showError(err.errMsg || '异常错误') || reject(err),
        complete: () => {
          reqs--
          clearTimeout(loadingTimer)
          if (!reqs && isLoading) hideLoading()
        }
      })
    })
})() as Api

api.get = (url, data) => api({ url, data })
api.put = (url, data) => api({ url, data, method: 'PUT' })
api.post = (url, data) => api({ url, data, method: 'POST' })
api.delete = (url, data) => api({ url, data, method: 'DELETE' })

api.upload = (url, file, data, header = {}) =>
  new Promise((resolve, reject) => {
    showLoading('开始上传文件')
    if (_.startsWith(url, '/')) url = BASE_URL + url
    const uploadTask = uni.uploadFile({
      url,
      header: {
        ...header,
        token: getStorageSync('token')
      },
      name: file.name,
      filePath: file.path,
      formData: data,
      success: (res: any) => resolve(success(JSON.parse(res) as UniApp.UploadFileSuccessCallbackResult)),
      fail: (err) => showError(err.errMsg || '异常错误') || reject(err),
      complete: hideLoading
    })
    uploadTask.onProgressUpdate(({ progress }) => showLoading(`已上传${progress}%`))
  })

export default api
