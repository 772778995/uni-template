import { defineStore } from 'pinia'

const userInfoStore = defineStore('userInfo', {
  state() {
    return {
      token: 'token666'
    }
  }
})

export default userInfoStore
