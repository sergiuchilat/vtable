<template>
  <div>
    <b-pagination-nav
      :number-of-pages="totalPages"
      base-url="#/authors/list/"
      aria-controls="vDataTable"
      :total-rows="totalRows"
      :per-page="perPage"
      v-model="currentPage"
    ></b-pagination-nav>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      aria-controls="vDataTable"
    ></b-pagination>
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
      console.log(Math.ceil(this.totalRows / this.perPage))
      return Math.ceil(this.totalRows / this.perPage)
    }
  },
  mounted () {
    this.currentPage = this.$route.params.page
  }
}
</script>
