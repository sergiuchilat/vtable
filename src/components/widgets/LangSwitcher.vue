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
  methods: {
    loadLanguage (lang) {
      import('../../../static/translations/' + lang).then(messages => {
        i18n.setLocaleMessage(lang, messages.default)
      })
    }
  },
  watch: {
    selected: function (locale) {
      i18n.locale = locale
      localStorage.appLang = locale
      this.loadLanguage(locale)
      this.$parent.updateRouter()
    }
  },
  created () {
    this.loadLanguage(i18n.locale)
  }
}
</script>

<style scoped>

</style>
