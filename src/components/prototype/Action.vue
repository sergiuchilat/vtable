<template>
<div></div>
</template>

<script>
export default {
  name: 'Action',
  methods: {
    loadBreadcrumbs () {
      this.$store.commit('setBreadcrumb', this.breadcrumb)
    }
  }
}
</script>

<style scoped>

</style>
