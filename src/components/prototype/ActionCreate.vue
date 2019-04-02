<script>
import Action from '@/components/prototype/Action'

export default {
  name: 'ActionCreate',
  extends: Action,
  data () {
    return {
      showForm: true
    }
  },
  components: {
  },
  methods: {
    initAction (params) {
      (params.dataURL) && this.loadData(params.dataURL);
      (params.breadcrumb) && this.loadBreadcrumbs()
    },
    loadData (dataURL) {

    },
    onSubmit () {
      this.$store.dispatch('updateData', {
        data: this.form,
        dataURL: this.dataURL + ''
      })
        .then(response => {
          if (response) {
            this.toggleForm('hide')
            this.resultStatus = {
              label: 'E:SUCCESS:CREATE',
              class: 'success'
            }
          } else {
            this.toggleForm('show')
            this.resultStatus = {
              label: 'E:SERVER_ERROR',
              class: 'danger'
            }
          }
        })
        .catch(() => {
          this.resultStatus = {
            label: 'E:SERVER_ERROR',
            class: 'danger'
          }
        })
    },
    toggleForm (status) {
      this.showForm = status === 'show'
    },
    resetForm () {
      for (let key in this.form) {
        this.form[key] = ''
      }
      this.$v.$reset()
      this.toggleForm('show')
      this.resultStatus = {
        label: '',
        class: ''
      }
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
