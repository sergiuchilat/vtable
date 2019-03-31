<script>
import Action from '@/components/prototype/Action'

export default {
  name: 'ActionCreate',
  extends: Action,
  components: {
  },
  methods: {
    initAction (params) {
      (params.dataURL) && this.loadData(params.dataURL);
      (params.breadcrumb) && this.loadBreadcrumbs()
    },
    loadData (dataURL) {
      this.$store.dispatch('loadFromJSON', dataURL).then(() => {
        console.log('loaded')
      })
    },
    onSubmit () {
      this.$store.dispatch('updateData', {
        data: this.form,
        dataURL: this.dataURL
      })
        .then(response => {
          response ? this.resetForm() : alert('что то пошло не так :)')
        })
    },
    resetForm () {
      for (let key in this.form) {
        this.form[key] = ''
      }
      this.$v.$reset()
      this.showForm = false
    }
  },
  mounted () {
    this.initAction({
      dataURL: this.dataURL,
      breadcrumb: true
    })
  }
}
</script>
