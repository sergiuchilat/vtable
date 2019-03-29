<template>
  <div></div>
</template>

<script>
import Action from '@/components/prototype/Action'

export default {
  name: 'ActionCreate',
  extends: Action,
  components: {
  },
  methods: {
    initAction (params) {
      this.$store.dispatch('updateData', params).then(() => {
        console.log('updated')
        this.resetForm()
      })
    },
    onSubmit () {
      this.initAction({
        dataURL: this.dataURL,
        data: this.form
      })
    },
    resetForm () {
      for (let key in this.form) {
        this.form[key] = ''
      }
      this.$v.$reset()
    }
  },
  mounted () {
    this.loadBreadcrumbs()
  }
}
</script>

<style scoped>

</style>
