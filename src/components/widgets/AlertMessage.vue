<template>
  <div class="row alert-container">
    <b-alert show variant="success" v-if="label==='success.create'" :class="alertClass">{{$t('responseMessages.success.create')}}</b-alert>
    <b-alert show variant="danger" v-if="label==='errors.create'" :class="alertClass">{{$t('responseMessages.errors.create')}}</b-alert>
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: {
    label: {
      type: String
    },
    alertClass: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
