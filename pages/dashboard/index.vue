<template>
  <div class="container">
    Dashboard

    <button @click.prevent="showToasted">
      Show Toasted
    </button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',

  middleware: ['authenticated'],

  methods: {
    showToasted () {
      const opts = {}

      this.$toasted.success('hello billo', opts)
    }
  }
}
</script>

<style></style>
