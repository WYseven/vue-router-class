import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    computedCount: state => {
      return state.count > 10 ? 10 : state.count
    }
  },
  mutations: {
    add (state) {
      state.count++
    }
  },
  actions: {
    actionAdd (store) {
      setTimeout(() => {
        store.commit('add')
      }, 1000)
    }
  }
})

export default store
