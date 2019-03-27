<template>
  <div>
    <transition name="fade">
      <div v-show="isLoading" class="loadingOverlay">
        <div class="bSpiner" >
          <b-spinner type="grow" label="Small Spinner"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  computed: {
    isLoading () {
      return this.$store.getters.getPageLoading
    }
  }
}
</script>
<style scoped>
  .loadingOverlay{
    background: rgba(255, 255, 255, 1);
    position: fixed;
    z-index: 1000;
    height: 100%;
    width: 100%
  }
  .loadingOverlay .bSpiner{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1001;
    width: 7rem;
    height: 7rem;
    transform: translateX(-50%) translateY(-50%);
  }

  fade-enter-active, .fade-leave-active {
    transition: opacity 2.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
