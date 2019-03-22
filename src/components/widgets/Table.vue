<template>
  <div>
    <h1>{{tableHeader}}</h1>
    <b-table striped hover :items="items" />
  </div>
</template>

<script>

export default {
  props: [
    'data',
    'tableHeaderText'
  ],
  computed: {
    items () {
      return this.data
    },
    tableHeader () {
      return this.tableHeaderText
    }
  }
}
</script>
