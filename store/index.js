import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    dataLoaded: false,
    pageLoading: false,
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
    getPageLoading: state => {
      return state.pageLoading
    },
    getActionData: state => (actionName) => {
      return state.actionData[actionName]
    },
    getBreadcrumb () {
      return this.state.breadcrumb
    }
  },
  actions: {
    loadFromJSON (context, module) {
      // process.env.API_URL + module
      store.state.dataLoaded = false
      setTimeout(function () {
        store.state.pageLoading = !store.state.dataLoaded
      }, 100)

      context.commit('setData', {'data': [], 'module': module})
      fetch(process.env.API_URL + 'db.php?module=' + module).then(response => {
        return response.json()
      }).then(data => {
        store.state.dataLoaded = true
        store.state.pageLoading = false
        context.commit('setData', {'data': data, 'module': module})
      }).catch(err => {
        console.log('Load error' + err)
      })
    }
  }
})

export default store
