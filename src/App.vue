<template>
  <div id="app">
    <Menu></Menu>
    <b-container-fluid>
      <router-view/>
    </b-container-fluid>
  </div>
</template>

<script>
import Menu from '@/components/blocks/Menu'
export default {
  name: 'App',
  components: {
    Menu
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
