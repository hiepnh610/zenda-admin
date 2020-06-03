<template>
  <div class="ibox">
    <div class="ibox-content">
      <div class="row m-b-sm">
        <div class="col-sm-3 pull-right">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search"
              class="input-sm form-control"
            >

            <span class="input-group-btn">
              <button type="button" class="btn btn-sm btn-primary">Go!</button>
            </span>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr v-if="columns">
              <th v-for="(column, index) in columns" :key="index">
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody v-if="transactions">
            <tr v-for="(transaction, index) in transactions" :key="index">
              <td>
                {{ transaction.user_request_name }}
              </td>

              <td>
                {{ transaction.user_receive_name }}
              </td>

              <td>
                {{ transaction.quantity }}
              </td>

              <td>
                {{ transaction.created_at }}
              </td>

              <td>
                <button class="btn btn-xs btn-danger">
                  Refund
                </button>
              </td>
            </tr>
          </tbody>
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

  data () {
    return {
      columns: ['User Request', 'User Receive', 'Quantity', 'Created At', 'Actions']
    }
  },

  computed: {
    ...mapGetters({
      transactions: GETTER.TRANSACTIONS
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.TRANSACTIONS)
  }
}
</script>

<style></style>
