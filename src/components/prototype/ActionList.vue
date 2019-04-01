<template>
  <div></div>
</template>

<script>
import Table from '@/components/widgets/DataTable'
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
      this.$store.dispatch('fetchData', dataURL).then(() => {
      })
    }
  },
  computed: {
    items () {
      let data = this.$store.getters.getActionData(this.dataURL)
      return data.items || []
    },
    fetchError () {
      let data = this.$store.getters.getActionData(this.dataURL)
      return data.fetchError || ''
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
