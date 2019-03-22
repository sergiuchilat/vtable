<template>
  <div>
    <Table :data="data"></Table>
  </div>
</template>

<script>
import PrototypeAction from '@/components/prototype/ActionList'
import Table from '@/components/widgets/Table'
export default {
  name: 'List',
  extends: PrototypeAction,
  components: {
    Table
  },
  data () {
    return {
      dataURL: 'authors',
      breadcrumb: [
        {
          text: 'Home',
          href: '#/'
        },
        {
          text: 'Authors',
          href: '#/authors/list'
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
