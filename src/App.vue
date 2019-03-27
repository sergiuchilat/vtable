<template>
    <div id="app">
        <page-loader></page-loader>
        <lang-switcher></lang-switcher>
        <Menu></Menu>
        <b-breadcrumb :key="vr" :items="breadcrumbItems" />
        <router-view/>
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
      vr: 1
    }
  },
  computed: {
    breadcrumbItems () {
      return this.$store.getters.getBreadcrumb
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
