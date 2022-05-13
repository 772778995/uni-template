/// <reference types="vite/client" />

import _ from 'lodash'
import $api from './api'
import * as $uni from './uni'
import $day from './day'
import * as $util from './util'
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $_: typeof _
    $uni: typeof $uni
    $api: typeof $api
    $day: typeof $day
    $util: typeof $util
  }
}
