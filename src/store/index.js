import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import classReducer from './class'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    classReducer
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  
})
