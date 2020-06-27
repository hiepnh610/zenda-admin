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

          <tfoot v-if="transactions.rows">
            <tr>
              <td colspan="5" class="footable-visible">
                <ul class="pagination">
                  <li
                    v-for="index in getLengthPagination()"
                    :key="index"
                    class="footable-page"
                  >
                    <a
                      href="#"
                      @click.prevent="changePagination(index)"
                    >
                      {{ index }}
                    </a>
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
    this.$store.dispatch(ACTION.TRANSACTIONS, 0)
  },

  methods: {
    removeTransaction (transactionId) {
      this.$store.dispatch(ACTION.DELETE_TRANSACTION, transactionId)
    },

    changePagination (offset) {
      this.$store.dispatch(ACTION.TRANSACTIONS, (offset - 1) * 5)
    },

    getLengthPagination () {
      return Math.ceil(this.transactions.count / 5)
    }
  }
}
</script>

<style></style>
