<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="vDataTable"
    ></b-pagination>
    <b-form-select
      id="input-3"
      v-model="perPage"
      :options="perPageOptions"
      required
    ></b-form-select>
    <b-table striped hover
             :items="items"
             :per-page="perPage"
             :current-page="currentPage"
             id="vDataTable"/>
  </div>
</template>

<script>

export default {
  props: {
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
      perPage: 5,
      currentPage: 1,
      perPageOptions: [5, 10, 20, 50, 100]
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  }
}
</script>
