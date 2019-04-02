<template>
  <div>
    <b-table striped hover :items="items" />
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    responseError: {
      type: String,
      required: false
    }
  }
}
</script>
