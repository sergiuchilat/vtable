<template>
  <div>
<!--    <b-alert show :variant="resultStatus.class" v-if="resultStatus.label!==''">{{resultStatus.label}}</b-alert>-->
    <DataTable
           :items="items"
    ></DataTable>
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
      sortBy: 'name',
      sortDesc: false,
      tableFields: [
        {key: 'id', sortable: true},
        {key: 'name', sortable: true},
        {key: 'age', sortable: true},
        {key: 'phone', sortable: true}
      ]
    }
  }
}
</script>

<style scoped>

</style>
