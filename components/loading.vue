<template>
  <div v-if="loading" class="loading">
    <div class="sk-spinner sk-spinner-fading-circle">
      <div class="sk-circle1 sk-circle" />
      <div class="sk-circle2 sk-circle" />
      <div class="sk-circle3 sk-circle" />
      <div class="sk-circle4 sk-circle" />
      <div class="sk-circle5 sk-circle" />
      <div class="sk-circle6 sk-circle" />
      <div class="sk-circle7 sk-circle" />
      <div class="sk-circle8 sk-circle" />
      <div class="sk-circle9 sk-circle" />
      <div class="sk-circle10 sk-circle" />
      <div class="sk-circle11 sk-circle" />
      <div class="sk-circle12 sk-circle" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { GETTER } from '@/constants/name-space'

export default {
  name: 'Loading',

  computed: {
    ...mapGetters({
      loading: GETTER.LOADING
    })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  background: rgba(0, 0, 0, .3);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2002;
}

.sk-spinner {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
