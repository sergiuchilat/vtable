<template>
  <div>
    <b-alert show :variant="resultStatus.class" v-if="resultStatus.label!==''">{{resultStatus.label}}</b-alert>
    <Table v-else :items="items"></Table>
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
          text: this.$t('homeLinkText'),
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
