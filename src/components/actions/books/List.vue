<template>
  <div>
    <b-button href="#/books/create" variant="success">New</b-button>
    <b-alert show :variant="resultStatus.class" v-if="resultStatus.label!==''">{{resultStatus.label}}</b-alert>
    <Table v-else
           :items="items"
           :fields="tableFields"
           :sortBy="sortBy"
           :sortDesc="sortDesc"
           :moduleName="moduleName"
           :actionName="actionName"
    ></Table>
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
      sortBy: 'name',
      sortDesc: false,
      tableFields: [
        {key: 'id', sortable: true},
        {key: 'name', sortable: true},
        {key: 'author', sortable: true}
      ]
    }
  }
}
</script>

<style scoped>

</style>
