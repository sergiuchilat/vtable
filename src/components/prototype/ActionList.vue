<template>
  <div></div>
</template>

<script>
export default {
  name: 'ActionList',
  methods: {
    initAction (params) {
      if (params.dataURL) {
        this.loadData(params.dataURL)
      }
      if (params.breadcrumb) {
        this.loadBreadcrumbs()
      }
    },
    loadBreadcrumbs () {
      this.$store.state.breadcrumb = this.breadcrumb
    },
    loadData (dataURL) {
      this.$store.dispatch('loadFromJSON', dataURL).then(() => {
        console.log('loaded')
      })
    }
  },
  computed: {
    data () {
      return this.$store.getters.getActionData(this.dataURL)
    }
  },
  mounted () {
    this.initAction({
      dataURL: this.dataURL,
      breadcrumb: true
    })
  }
}
</script>

<style scoped>

</style>
