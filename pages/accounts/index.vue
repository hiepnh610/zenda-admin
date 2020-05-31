<template>
  <TableComponent />
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

import TableComponent from '@/components/table.vue'

export default {
  name: 'Accounts',

  components: {
    TableComponent
  },

  computed: {
    ...mapGetters({
      accounts: GETTER.ACCOUNTS
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.ACCOUNTS)
  }
}
</script>

<style></style>
