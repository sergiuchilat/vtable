<template>
  <div>
    <Table :data="data" :tableHeaderText="tableHeaderText"></Table>
  </div>

</template>

<script>
import Table from '@/components/widgets/Table'
export default {
  name: 'List',
  components: {
    Table
  },
  methods: {
    loadData () {
      this.$store.dispatch('loadFromJSON', 'books').then(() => {
        console.log('loaded')
      })
    }
  },
  computed: {
    data () {
      return this.$store.state.books
    },
    tableHeaderText () {
      return 'Books'
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
