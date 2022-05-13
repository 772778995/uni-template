import { Plugin } from 'vue'
import $_ from 'lodash'
import * as $uni from './uni'
import $api from './api'
import $day from './day'
import * as $util from './util'

export default {
  install(app) {
    Object.assign(app.config.globalProperties, {
      $_,
      $uni,
      $api,
      $day,
      $util
    })
  }
} as Plugin
