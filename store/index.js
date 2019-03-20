import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    authors: [],
    books: []
  },
  mutations: {
    setData (state, object) {
      console.log(object.module)
      state[object.module] = object.data
    }
  },
  actions: {
    loadFromJSON (context, module) {
      fetch('http://localhost:3000/' + module).then(response => {
        return response.json()
      }).then(data => {
        // console.log(data)
        // Work with JSON data here
        context.commit('setData', {'data': data, 'module': module})
      }).catch(err => {
        console.log('Load error' + err)
      })
    }
  }
})

export default store
