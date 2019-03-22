<template>
  <div>
    <component :is="actionLoader"></component>
  </div>
</template>

<script>
import Controller from '@/components/controllers/Controller'

const listComponent = () => import('@/components/pages/books/List')
const createComponent = () => import('@/components/pages/books/Create')

export default {
  name: 'BooksController',
  extends: Controller,
  components: {
    listComponent,
    createComponent
  }
}
</script>

<style scoped>

</style>
