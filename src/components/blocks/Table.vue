<template>
  <div>
    <b-table striped hover :items="items" />
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ],
  data () {
    return {
      items: this.data
    }
  }
}
</script>
