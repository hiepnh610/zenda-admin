<template>
  <div>
    <div id="wrapper">
      <SidebarComponent />

      <div id="page-wrapper" class="gray-bg dashbard-1">
        <HeaderComponent />

        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/sidebar.vue'
import HeaderComponent from '@/components/header.vue'

export default {
  name: 'Layout',

  components: {
    SidebarComponent,
    HeaderComponent
  }
}
</script>

<style></style>
