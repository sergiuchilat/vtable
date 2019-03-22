<template>
  <div>
    <h1>Table header</h1>
    <b-table striped hover :items="items" />
  </div>
</template>

<script>

export default {
  props: [
    'data'
  ],
  computed: {
    items () {
      return this.data
    }
  }
}
</script>
