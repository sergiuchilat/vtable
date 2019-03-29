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
      state.breadcrumb = breadcrumb
    }
  },
  getters: {
    getPageLoading: state => {
      return state.pageLoading
    },
    getActionData: state => actionName => {
      return state.actionData[actionName]
    },
    getBreadcrumb: state => {
      return state.breadcrumb
    }
  },
  actions: {
    updateData (context, payload) {
      console.log(payload)
    },
    fetchData (context, module) {
      // process.env.API_URL + module
      store.state.dataLoaded = false
      setTimeout(function () {
        store.state.pageLoading = !store.state.dataLoaded
      }, 100)

      context.commit('setData', {'data': [], 'module': module})
      fetch(process.env.API_URL + module).then(response => {
        return response.json()
      }).then(data => {
        setTimeout(function () {
          store.state.dataLoaded = false
          store.state.pageLoading = false
        }, 1000)
        context.commit('setData', {'data': data, 'module': module})
      }).catch(err => {
        console.log('Load error' + err)
      })
    }
  }
})

export default store
