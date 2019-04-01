<template>
  <div>
    <div v-if="!fetchError"><b-table striped hover :items="items" /></div>
    <div v-else>{{fetchError}}</div>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    fetchError: {
      type: String,
      required: false
    }
  }
}
</script>
