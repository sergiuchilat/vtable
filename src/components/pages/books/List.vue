<template>
  <div>
    <Table :data="data"></Table>
  </div>

</template>

<script>
import Table from '@/components/blocks/Table'
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
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
