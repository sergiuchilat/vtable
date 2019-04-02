<template>
<div></div>
</template>

<script>
export default {
  name: 'Action',
  data () {
    return {
      resultStatus: {
        label: '',
        class: ''
      }
    }
  },
  methods: {
    loadBreadcrumbs () {
      this.$store.commit('setBreadcrumb', this.breadcrumb)
    }
  }
}
</script>

<style scoped>

</style>
