<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#/">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Authors" right>
          <b-dropdown-item href="#/authors/create"><b-link to="create">Create</b-link></b-dropdown-item>
          <b-dropdown-item href="#/authors/list">List</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Books" right>
          <b-dropdown-item href="#/books/create"><b-link to="create">Create</b-link></b-dropdown-item>
          <b-dropdown-item href="#/books/list">List</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>

</style>
