<template>
  <TableComponent />
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

import TableComponent from '@/components/table.vue'

export default {
  name: 'Gifts',

  components: {
    TableComponent
  },

  computed: {
    ...mapGetters({
      gifts: GETTER.GIFTS
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.GIFTS)
  }
}
</script>

<style></style>
