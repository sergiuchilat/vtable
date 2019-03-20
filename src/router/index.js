import Vue from 'vue'
import Router from 'vue-router'
import CreateAuthors from '@/components/pages/authors/Create'
import ListAuthors from '@/components/pages/authors/List'
import ListBooks from '@/components/pages/books/List'
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
      path: '/authors/create',
      name: 'Create',
      component: CreateAuthors
    },
    {
      path: '/authors/list',
      name: 'ListAuthors',
      component: ListAuthors
    },
    {
      path: '/books/list',
      name: 'ListBooks',
      component: ListBooks
    }
  ]
})
