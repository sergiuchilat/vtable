import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/pages/Create'
import Main from '@/components/pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
})
