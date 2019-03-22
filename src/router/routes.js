import Main from '@/components/pages/Main'

export default [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/authors/:action',
    component: resolve => require(['@/components/controllers/AuthorsController'], resolve)
  },
  {
    path: '/books/:action',
    component: resolve => require(['@/components/controllers/BooksController'], resolve)
  }
]
