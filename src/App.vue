<template>
  <div id="app">
    <Menu></Menu>
    <b-breadcrumb :items="breadcrumbItems" />
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/widgets/Menu'
import Breadcrumb from '@/components/widgets/Breadcrumb'

export default {
  name: 'App',
  components: {
    Menu,
    Breadcrumb
  },
  computed: {
    breadcrumbItems () {
      return this.$store.state.breadcrumb
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
