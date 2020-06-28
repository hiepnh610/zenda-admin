<template>
  <div id="wrapper">
    <SidebarComponent />

    <div id="page-wrapper" class="gray-bg dashbard-1">
      <HeaderComponent />

      <div class="wrapper wrapper-content animated fadeInRight">
        <nuxt />
      </div>
    </div>

    <LoadingComponent />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarComponent from '@/components/sidebar.vue'
import HeaderComponent from '@/components/header.vue'
import LoadingComponent from '@/components/loading.vue'

export default {
  name: 'Layout',

  components: {
    SidebarComponent,
    HeaderComponent,
    LoadingComponent
  },

  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style></style>
