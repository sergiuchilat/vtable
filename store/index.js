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
      // console.log(object.data)
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
      return new Promise(resolve => {
        fetch(process.env.API_URL + payload.dataURL, {
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          method: 'POST',
          body: JSON.stringify(payload.data)
        })
          .then(response => {
            setTimeout(() => {
              store.state.dataLoaded = true
              store.state.pageLoading = false
              resolve(response.ok)
            }, 1000)
          })
      })
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
        store.state.dataLoaded = true
        store.state.pageLoading = false
        console.log('>>', data, '<<')
        context.commit('setData', {'data': {items: data, fetchError: ''}, 'module': module})
      }).catch(err => {
        console.log('Load error' + err)
        store.state.dataLoaded = true
        store.state.pageLoading = false
        context.commit('setData', {'data': {items: [], fetchError: 'FETCH_FAILED'}, 'module': module})
      })
    }
  }
})

export default store
