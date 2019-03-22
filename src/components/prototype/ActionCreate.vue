<template>
  <div></div>
</template>

<script>
export default {
  name: 'ActionCreate',
  components: {
  },
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
      this.$store.commit('setBreadcrumb', this.breadcrumb)
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
