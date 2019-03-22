<template>
  <div>
    Main page
    <div></div>
    <span></span>
  </div>
</template>

<script>
import PrototypeAction from '@/components/prototype/ActionList'
export default {
  extends: PrototypeAction,
  data () {
    return {
      breadcrumb: []
    }
  }
}
</script>
