<template>
  <div class="ibox">
    <div class="ibox-content">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr v-if="columns">
              <th v-for="(column, index) in columns" :key="index">
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody v-if="transactions.rows">
            <tr v-for="transaction in transactions.rows" :key="transaction.id">
              <td>
                {{ transaction.user_request }}
              </td>

              <td>
                {{ transaction.user_receive }}
              </td>

              <td>
                {{ transaction.amount }}
              </td>

              <td>
                {{ transaction.message }}
              </td>

              <td>
                {{ transaction.createdAt | moment('DD/MM/YYYY HH:mm:ss') }}
              </td>

              <td>
                <button
                  class="btn btn-xs btn-danger"
                  @click="removeTransaction(transaction.id)"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="6" class="footable-visible">
                <ul class="pagination">
                  <li class="footable-page-arrow disabled">
                    <a data-page="prev" href="#prev">‹</a>
                  </li>

                  <li class="footable-page active">
                    <a data-page="0" href="#">1</a>
                  </li>

                  <li class="footable-page">
                    <a data-page="1" href="#">2</a>
                  </li>

                  <li class="footable-page-arrow">
                    <a data-page="next" href="#next">›</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

export default {
  name: 'Transactions',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['User Request', 'User Receive', 'Amount', 'Message', 'Created At', '']
    }
  },

  computed: {
    ...mapGetters({
      transactions: GETTER.TRANSACTIONS
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.TRANSACTIONS)
  },

  methods: {
    removeTransaction (transactionId) {
      this.$store.dispatch(ACTION.DELETE_TRANSACTION, transactionId)
    }
  }
}
</script>

<style></style>
