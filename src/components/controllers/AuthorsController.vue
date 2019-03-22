<template>
  <div>
    Authors Controller
    <p>{{$route.params.action}}</p>
    <component :is="componentName"></component>
    <hr>
  </div>
</template>

<script>
const listComponent = () => import('@/components/pages/authors/List')
const createComponent = () => import('@/components/pages/authors/Create')

export default {
  name: 'AuthorsController',
  components: {
    listComponent,
    createComponent
  },
  computed: {
    componentName () {
      return this.$route.params.action + 'Component'
    }
  }
}
</script>

<style scoped>

</style>
