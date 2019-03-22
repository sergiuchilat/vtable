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
      this.$store.dispatch('loadFromJSON', 'authors').then(() => {
        console.log('loaded')
      })
    }
  },
  beforeCreate () {
    console.log('create cList')
  },
  beforeMount () {
    console.log('mount cList')
  },
  computed: {
    data () {
      return this.$store.state.authors
    },
    tableHeaderText () {
      return 'Authors'
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
