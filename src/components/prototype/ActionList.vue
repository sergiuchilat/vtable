<template>
  <div></div>
</template>

<script>
import Table from '@/components/widgets/Table'
import Action from '@/components/prototype/Action'
export default {
  name: 'ActionList',
  extends: Action,
  components: {
    Table
  },
  methods: {
    initAction (params) {
      (params.dataURL) && this.loadData(params.dataURL);
      (params.breadcrumb) && this.loadBreadcrumbs()
    },
    loadData (dataURL) {
      this.$store.dispatch('loadFromJSON', dataURL).then(() => {
        console.log('loaded')
      })
    }
  },
  computed: {
    items () {
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
