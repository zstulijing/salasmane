import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      createTime:"2021-09-04T19:51:41",
      id:"28343434343434",
      ispermit:true,
      mobile:"23432432",
      name:"冷泉",
      onlineStatus:true,
      password:"1234",
      profileImg:"头像1.jpeg",
      username:"root1"
    }
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile
    }
  },
  actions: {
  },
  modules: {
  }
})
