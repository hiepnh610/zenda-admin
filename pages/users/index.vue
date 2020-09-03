<template>
  <div class="ibox">
    <div class="ibox-content">
      <div class="row m-b-md">
        <div class="col-sm-3 pull-right">
          <form @submit="search($event)">
            <div class="input-group">
              <input
                v-model="searchValue"
                type="text"
                placeholder="Search by name"
                class="input-sm form-control"
              >

              <span class="input-group-btn">
                <button
                  type="submit"
                  class="btn btn-sm btn-primary"
                >
                  <i class="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>

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
                  class="btn btn-sm btn-danger"
                  @click.prevent="removeUser(user.id)"
                >
                  <i class="fa fa-trash-o m-r-xs" />

                  Remove
                </button>
              </td>
            </tr>
          </tbody>

          <tfoot v-if="users.rows">
            <tr>
              <td colspan="5" class="footable-visible">
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
  name: 'Users',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['Name', 'Give Bag', 'Receive Bag', 'Created At', ''],
      listLimit: [5, 10, 25, 50, 100],
      limit: 5,
      offset: 0,
      searchValue: ''
    }
  },

  computed: {
    ...mapGetters({
      users: GETTER.USERS
    })
  },

  mounted () {
    const payload = {
      offset: this.offset,
      limit: this.limit
    }

    this.$store.dispatch(ACTION.USERS, payload)
  },

  methods: {
    removeUser (id) {
      this.$store.dispatch(ACTION.DELETE_USER, id)
    },

    changePagination (value) {
      this.offset = value - 1

      const payload = {
        offset: this.offset * this.limit,
        limit: this.limit
      }

      this.$store.dispatch(ACTION.USERS, payload)
    },

    getLengthPagination () {
      return Math.ceil(this.users.count / this.limit)
    },

    onChangeLimit () {
      const payload = {
        offset: this.offset,
        limit: this.limit
      }

      this.$store.dispatch(ACTION.USERS, payload)
    },

    search (e) {
      e.preventDefault()

      const payload = {
        offset: this.offset,
        limit: this.limit,
        displayName: this.searchValue
      }

      this.$store.dispatch(ACTION.USERS, payload)

      this.searchValue = ''
    }
  }
}
</script>

<style></style>
