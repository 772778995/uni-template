import { Plugin } from 'vue'
import $_ from 'lodash'
import * as $uni from './uni'
import $day from './day'
import * as $util from './util'
import './uni/interceptor'
import userInfoStore from '@/store/userInfo'

export default {
  install(app) {
    Object.assign(app.config.globalProperties, {
      $_,
      $uni,
      $day,
      $util,
      $store: {
        userInfo: userInfoStore
      }
    })
  }
} as Plugin
