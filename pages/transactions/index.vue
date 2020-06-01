<template>
  <TableComponent />
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

import TableComponent from '@/components/table.vue'

export default {
  name: 'Transactions',

  components: {
    TableComponent
  },

  computed: {
    ...mapGetters({
      accounts: GETTER.TRANSACTIONS
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.TRANSACTIONS)
  }
}
</script>

<style></style>
