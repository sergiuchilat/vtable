<template>
  <div></div>
</template>

<script>
import Action from '@/components/prototype/Action'

export default {
  name: 'ActionCreate',
  extends: Action,
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
