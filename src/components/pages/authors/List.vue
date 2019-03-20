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
      this.$store.dispatch('loadFromJSON', 'authors').then(() => {
        // do stuff
      })
    }
  },
  computed: {
    data () {
      return this.$store.state.authors
    }
  },
  created () {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
