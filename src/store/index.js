import Vue from 'vue'
import Vuex from 'vuex'
// 状态子模块
import user from '../modules/cart'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user
  }
})

export default store
