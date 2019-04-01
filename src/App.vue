<template>
    <div id="app">
        <page-loader />
        <lang-switcher :updateRouter = "updateRouter" />
        <Menu />
        <b-breadcrumb :key = "upBreadCrumb" :items="breadcrumbItems" />
        <router-view :key = "upRouter" />
    </div>
</template>

<script>
import Menu from '@/components/widgets/Menu'
import Breadcrumb from '@/components/widgets/Breadcrumb'
import LangSwitcher from '@/components/widgets/LangSwitcher'
import PageLoader from '@/components/widgets/PageLoader'
export default {
  name: 'App',
  components: {
    Menu,
    Breadcrumb,
    LangSwitcher,
    PageLoader
  },
  data () {
    return {
      upBreadCrumb: 1,
      upRouter: 3
    }
  },
  computed: {
    breadcrumbItems () {
      return this.$store.getters.getBreadcrumb
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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
