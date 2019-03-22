import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    breadcrumb: [],
    actionData: {
      authors: [],
      books: []
    }
  },
  mutations: {
    setData (state, object) {
      state.actionData[object.module] = object.data
    },
    setBreadcrumb (state, breadcrumb) {
      this.state.breadcrumb = breadcrumb
    }
  },
  getters: {
    getActionData: state => (actionName) => {
      return state.actionData[actionName]
    },
    getBreadcrumb () {
      return this.state.breadcrumb
    }
  },
  actions: {
    loadFromJSON (context, module) {
      fetch(process.env.API_URL + module).then(response => {
        return response.json()
      }).then(data => {
        context.commit('setData', {'data': data, 'module': module})
      }).catch(err => {
        console.log('Load error' + err)
      })
    }
  }
})

export default store
