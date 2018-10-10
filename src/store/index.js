import Vue from 'vue'
import Vuex from 'vuex'
import router from "./modules/router"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    router
  },
  strict: debug
})

export default store
