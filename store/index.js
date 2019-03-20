import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    authors: [],
    books: []
  },
  mutations: {
    setAuthors (state, payload) {
      state.authors = payload
    }
  },
  actions: {
    loadFromJSON (context, module) {
      fetch('http://localhost:3000/authors').then(response => {
        return response.json()
      }).then(data => {
        console.log(data)
        // Work with JSON data here
        context.commit('setAuthors', data)
      }).catch(err => {
        console.log('Load error' + err)
      })
    }
  }
})

export default store
