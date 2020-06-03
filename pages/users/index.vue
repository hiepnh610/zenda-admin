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

          <tbody v-if="users">
            <tr v-for="(user, index) in users" :key="index">
              <td>
                {{ user.display_name }}
              </td>

              <td>
                {{ user.give_bag }}
              </td>

              <td>
                {{ user.receive_bag }}
              </td>

              <td>
                {{ user.created_at }}
              </td>

              <td>
                <button
                  class="btn btn-xs btn-danger"
                  @click.prevent="deleteUser(user._id)"
                >
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
  name: 'Users',

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
    this.$store.dispatch(ACTION.USERS)
  },

  methods: {
    deleteUser (id) {
      this.$store.dispatch(ACTION.DELETE_USER, id)
    }
  }
}
</script>

<style></style>
