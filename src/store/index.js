import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      age:null,
      createTime:"2021-09-04T19:51:41",
      gender:null,
      id:"28343434343434",
      ispermit:true,
      mobile:"23432432",
      name:"冷泉",
      onlineStatus:true,
      password:"1234",
      profileImg:"36881485260783616.png",
      username:"root1",
    },
    company: {
      createTime:"2021-09-04T20:09:22",
      departmentId:"阿萨德部门",
      dimissionTime:"2121-09-04T20:09:22",
      entryTime:"2021-09-15T20:09:22",
      faceId:null,
      firmId:"26607242283450368",
      id:"34731196361605123",
      isenable:false,
      occupation:"副主任",
      peopleId:"28343434343434",
      serviceStatus:true,
      tag:null,
      workNumber:"2",
      workingCity:"北京",
      workingStatus:true
    },
    otherPart: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile
    },
    setOtherPart(state, otherPart) {
      state.otherPart = otherPart
    },
    setCompany(state, company) {
      state.company = company
    }
    
  },
  actions: {
  },
  modules: {
  }
})
