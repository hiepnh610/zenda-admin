<template>
  <div class="ibox">
    <div class="ibox-content">
      <div
        v-if="users.rows && users.rows.length"
        class="table-responsive"
      >
        <table class="table table-striped">
          <thead>
            <tr v-if="columns">
              <th v-for="(column, index) in columns" :key="index">
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody v-if="users.rows">
            <tr v-for="user in users.rows" :key="user.id">
              <td>
                <n-link :to="'/users/' + user.id" class="text-navy">
                  {{ user.display_name }}
                </n-link>
              </td>

              <td>
                {{ user.give_bag }}
              </td>

              <td>
                {{ user.receive_bag }}
              </td>

              <td>
                {{ user.createdAt | moment('DD/MM/YYYY HH:mm:ss') }}
              </td>

              <td>
                <button
                  class="btn btn-xs btn-danger"
                  @click.prevent="removeUser(user.id)"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>

          <tfoot v-if="users.rows">
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
  name: 'Users',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['User Name', 'Give Bag', 'Receive Bag', 'Created At', 'Actions']
    }
  },

  computed: {
    ...mapGetters({
      users: GETTER.USERS
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.USERS, 0)
  },

  methods: {
    removeUser (id) {
      this.$store.dispatch(ACTION.DELETE_USER, id)
    },

    changePagination (offset) {
      this.$store.dispatch(ACTION.USERS, (offset - 1) * 5)
    },

    getLengthPagination () {
      return Math.ceil(this.users.count / 5)
    }
  }
}
</script>

<style></style>
