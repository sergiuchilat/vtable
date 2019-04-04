<template>
    <div id="app">
      <v-app>
        <page-loader />
        <Menu />
        <Breadcrumb />
        <router-view :key = "upRouter" />
        </v-app>
    </div>
</template>

<script>
import Menu from '@/components/widgets/Menu'
import Breadcrumb from '@/components/widgets/Breadcrumb'
import PageLoader from '@/components/widgets/PageLoader'
export default {
  name: 'App',
  components: {
    Menu,
    Breadcrumb,
    PageLoader
  },
  data () {
    return {
      upBreadCrumb: 1,
      upRouter: 3
    }
  },
  methods: {
    updateRouter () {
      setTimeout(() => {
        this.upRouter++
      }, 100)
      this.upBreadCrumb++
    }
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
    }
</style>
