<template>
  <div>
    <Table :data="data"></Table>
  </div>
</template>

<script>
import PrototypeAction from '@/components/prototype/ActionList'
export default {
  name: 'List',
  extends: PrototypeAction,
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
