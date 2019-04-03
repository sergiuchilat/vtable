<template>
  <div>
    <b-pagination-nav
      :number-of-pages="totalPages || 1"
      :base-url="baseURL"
      aria-controls="vDataTable"
      :total-rows="totalRows"
      :per-page="perPage"
      v-model="currentPage"
    ></b-pagination-nav>

    <b-form-select
      id="input-3"
      v-model="perPage"
      :options="perPageOptions"
      required
    ></b-form-select>
    <b-table
      striped
      hover
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      id="vDataTable"/>
  </div>
</template>

<script>

export default {
  props: {
    fields: {
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    responseError: {
      type: String,
      required: false
    },
    moduleName: {
      required: false,
      type: String
    },
    actionName: {
      required: false,
      type: String
    }
  },
  data () {
    return {
      sortBy: 'name',
      sortDesc: false,
      perPage: 5,
      perPageOptions: [5, 10, 20, 50, 100],
      currentPage: 1
    }
  },
  computed: {
    totalRows () {
      return this.items.length
    },
    totalPages () {
      return Math.ceil(this.totalRows / this.perPage)
    },
    baseURL () {
      return '#/' + this.moduleName + '/' + this.actionName + '/'
    }
  },
  watch: {
    perPage () {
      this.currentPage = 1
    }
  },
  created () {
    this.currentPage = this.$route.params.page || 1
  }
}
</script>
