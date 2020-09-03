<template>
  <div class="ibox">
    <div class="ibox-content">
      <div v-if="transactions.rows && transactions.rows.length" class="table-responsive">
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
                <n-link
                  :to="'/users/' + transaction.user_request_id"
                  class="text-navy"
                >
                  {{ transaction.user_request }}
                </n-link>
              </td>

              <td>
                <n-link
                  :to="'/users/' + transaction.user_receive_id"
                  class="text-navy"
                >
                  {{ transaction.user_receive }}
                </n-link>
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
                  class="btn btn-sm btn-danger"
                  @click="removeTransaction(transaction.id)"
                >
                  <i class="fa fa-trash-o m-r-xs" />

                  Remove
                </button>
              </td>
            </tr>
          </tbody>

          <tfoot v-if="transactions.rows">
            <tr>
              <td colspan="6" class="footable-visible">
                <div class="m-t-md form-inline dt-bootstrap">
                  <div class="pull-left">
                    <p>
                      Show

                      <select
                        v-model="limit"
                        class="form-control m-l-xs m-r-xs"
                        @change="onChangeLimit($event)"
                      >
                        <option
                          v-for="number in listLimit"
                          :key="number"
                          :value="number"
                        >
                          {{ number }}
                        </option>
                      </select>

                      entries
                    </p>
                  </div>

                  <ul class="pagination pull-right m-n">
                    <li
                      v-for="index in getLengthPagination()"
                      :key="index"
                      :class="{ active: index === (offset + 1) }"
                      class="footable-page"
                    >
                      <a
                        href="#"
                        :disabled="index === (offset + 1)"
                        @click.prevent="
                          index !== (offset + 1) && changePagination(index)
                        "
                      >
                        {{ index }}
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div v-else>
        <p class="text-center h3">
          NO DATA
        </p>
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
      columns: [
        'User Request',
        'User Receive',
        'Amount',
        'Message',
        'Created At',
        ''
      ],
      listLimit: [5, 10, 25, 50, 100],
      limit: 5,
      offset: 0
    }
  },

  computed: {
    ...mapGetters({
      transactions: GETTER.TRANSACTIONS
    })
  },

  mounted () {
    const payload = {
      offset: this.offset,
      limit: this.limit
    }

    this.$store.dispatch(ACTION.TRANSACTIONS, payload)
  },

  methods: {
    removeTransaction (transactionId) {
      this.$store.dispatch(ACTION.DELETE_TRANSACTION, transactionId)
    },

    changePagination (value) {
      this.offset = value - 1

      const payload = {
        offset: this.offset * this.limit,
        limit: this.limit
      }

      this.$store.dispatch(ACTION.TRANSACTIONS, payload)
    },

    getLengthPagination () {
      return Math.ceil(this.transactions.count / this.limit)
    },

    onChangeLimit () {
      const payload = {
        offset: this.offset,
        limit: this.limit
      }

      this.$store.dispatch(ACTION.TRANSACTIONS, payload)
    }
  }
}
</script>

<style></style>
