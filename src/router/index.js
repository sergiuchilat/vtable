import Vue from 'vue'
import Router from 'vue-router'
// import CreateAuthors from '@/components/pages/authors/Create'
// import ListAuthors from '@/components/pages/authors/List'
// import ListBooks from '@/components/pages/books/List'
import Main from '@/components/pages/Main'

// const ListAuthors = () => import('@/components/pages/authors/List')
// const ListBooks = () => import('@/components/pages/books/List')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/authors/:action',
      component: resolve => require(['@/components/controllers/AuthorsController'], resolve)
    }
  ]
})
