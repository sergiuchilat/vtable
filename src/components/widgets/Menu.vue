<template>
  <div>
        <v-toolbar color="grey darken-1" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-menu :nudge-width="100">
            <template v-slot:activator="{ on }">
              <v-toolbar-title v-on="on">
              <span @click="pushRoute('')">{{$t('homeLinkText')}}</span>
            </v-toolbar-title>
            </template>
          </v-menu>

          <v-menu :nudge-width="100">
            <template v-slot:activator="{ on }">
              <v-toolbar-title v-on="on">
                <span>Authors</span>
                <v-icon dark>arrow_drop_down</v-icon>
              </v-toolbar-title>
            </template>

            <v-list>
              <v-list-tile @click="pushRoute('authors/create')">
                <v-list-tile-title>
                  Create
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="pushRoute('authors/list')">
                <v-list-tile-title>
                  List
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-menu :nudge-width="100">
            <template v-slot:activator="{ on }">
              <v-toolbar-title v-on="on">
                <span>Books</span>
                <v-icon dark>arrow_drop_down</v-icon>
              </v-toolbar-title>
            </template>

            <v-list>
              <v-list-tile @click="pushRoute('books/create')">
                <v-list-tile-title>
                  Create
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="pushRoute('books/list')">
                <v-list-tile-title>
                  List
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>
          <v-layout align-self-center justify-end>
            <lang-switcher :updateRouter = "updateRouter" />
          </v-layout>
        </v-toolbar>
  </div>
</template>

<script>
import LangSwitcher from '@/components/widgets/LangSwitcher'
export default {
  components: {
    LangSwitcher
  },
  methods: {
    pushRoute (value) {
      this.$router.push('/' + value)
    }
  }
}
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
