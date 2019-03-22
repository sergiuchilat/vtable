<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'PrototypeController',
  components: {},
  computed: {
    actionLoader () {
      return this.$route.params.action + 'Component'
    }
  }
}
</script>

<style scoped>

</style>
