/// <reference types="vite/client" />

import userInfoStore from '@/store/userInfo'
import _ from 'lodash'
import * as $uni from './uni'
import $day from './day'
import * as $util from './util'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $_: typeof _
    $uni: typeof $uni
    $day: typeof $day
    $util: typeof $util
    $store: {
      userInfo: typeof userInfoStore
    }
  }
}
