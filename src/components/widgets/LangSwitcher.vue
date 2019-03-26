<template>
    <div>
      <b-form-select v-model="selected" :options="options"/>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n'
export default {
  name: 'LangSwitcher',
  data () {
    return {
      selected: i18n.locale,
      options: [
        {value: 'ru', text: 'Русский'},
        {value: 'ro', text: 'Română'},
        {value: 'en', text: 'English'}
      ]
    }
  },
  watch: {
    selected: (locale) => {
      i18n.locale = locale
      localStorage.appLang = locale
    }
  }
}
</script>

<style scoped>

</style>
