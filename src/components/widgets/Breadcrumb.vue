<template>
  <b-breadcrumb :items="items" />
</template>

<script>
export default {
  name: 'breadcrumb',
  computed: {
    items () {
      return this.$store.getters.getBreadcrumb()
    }
  }
}
</script>

<style scoped>

</style>
