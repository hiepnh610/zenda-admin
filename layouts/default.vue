<template>
  <div id="wrapper">
    <SidebarComponent />

    <div id="page-wrapper" class="gray-bg dashbard-1">
      <HeaderComponent />

      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarComponent from '@/components/sidebar.vue'
import HeaderComponent from '@/components/header.vue'

export default {
  name: 'Layout',

  components: {
    SidebarComponent,
    HeaderComponent
  },

  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style></style>
