<template>
  <div>
    <Table :items="items" :fetchError="fetchError"></Table>
  </div>
</template>

<script>
import PrototypeActionList from '@/components/prototype/ActionList'
export default {
  name: 'List',
  extends: PrototypeActionList,
  data () {
    return {
      dataURL: 'books',
      breadcrumb: [
        {
          text: this.$t('homeLinkText'),
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
