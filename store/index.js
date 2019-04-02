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
      store.state.dataLoaded = false
      setTimeout(function () {
        store.state.pageLoading = !store.state.dataLoaded
      }, 100)
      return new Promise((resolve, reject) => {
        fetch(process.env.API_URL + payload.dataURL, {
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          method: 'POST',
          body: JSON.stringify(payload.data)
        })
          .then(response => {
            store.state.pageLoading = false
            resolve(response.ok)
          })
          .catch(err => {
            console.log('Load error' + err)
            store.state.pageLoading = false
            reject(err)
          })
      })
    },
    fetchData (context, module) {
      return new Promise((resolve, reject) => {
        // process.env.API_URL + module
        store.state.dataLoaded = false
        setTimeout(function () {
          store.state.pageLoading = !store.state.dataLoaded
        }, 100)

        context.commit('setData', {'data': [], 'module': module})
        fetch(process.env.API_URL + module).then(response => {
          return response.json()
        }).then(data => {
          store.state.dataLoaded = true
          store.state.pageLoading = false
          context.commit('setData', {'data': data, 'module': module})
          resolve('SUCCESS')
        }).catch(err => {
          console.log('Load error' + err)
          store.state.dataLoaded = true
          store.state.pageLoading = false
          context.commit('setData', {'data': [], 'module': module})
          reject(err)
        })
      })
    }
  }
})

export default store
