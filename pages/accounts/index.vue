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
        <table class="table table-striped text-center">
          <thead class="text-center">
            <tr v-if="columns">
              <th
                v-for="(column, index) in columns"
                :key="index"
                class="text-center"
              >
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody v-if="accounts">
            <tr v-for="(account, index) in accounts" :key="index">
              <td>
                {{ account.display_name }}
              </td>

              <td>
                {{ account.give_bag }}
              </td>

              <td>
                {{ account.receive_bag }}
              </td>

              <td>
                <button class="btn btn-xs btn-danger">
                  Deleted
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
  name: 'Accounts',

  data () {
    return {
      columns: ['User Name', 'Give Bag', 'Receive Bag', 'Actions']
    }
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
