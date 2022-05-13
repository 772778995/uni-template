import { showModal } from '@/common/uni'

const invoke = (arg: any) => {
  arg.url = arg.url.replace(/@|(\.vue)/g, '')
}

const fail = (err: any) => {
  const content = err?.errMsg || '异常错误'
  showModal({ title: '跳转页面异常', content })
  throw new Error(content)
}

uni.addInterceptor('navigateTo', { invoke, fail })
uni.addInterceptor('redirectTo', { invoke, fail })
uni.addInterceptor('reLaunch', { invoke, fail })
uni.addInterceptor('switchTab', { invoke, fail })
uni.addInterceptor('navigateBack', { fail })
uni.addInterceptor('preloadPage', { fail })
