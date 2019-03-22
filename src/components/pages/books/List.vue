<template>
  <div>
    <Table :data="data"></Table>
  </div>
</template>

<script>
import PrototypeActionList from '@/components/prototype/ActionList'
import Table from '@/components/widgets/Table'
export default {
  name: 'List',
  extends: PrototypeActionList,
  components: {
    Table
  },
  data () {
    return {
      dataURL: 'books',
      breadcrumb: [
        {
          text: 'Home',
          href: '#/'
        },
        {
          text: 'Books',
          href: '#/books/list'
        },
        {
          text: 'List',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
