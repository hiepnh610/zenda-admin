<template>
  <div class="ibox">
    <div class="ibox-content">
      <div v-if="gifts.rows && gifts.rows.length" class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr v-if="columns">
              <th v-for="(column, index) in columns" :key="index">
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody v-if="gifts.rows">
            <tr v-for="gift in gifts.rows" :key="gift.id">
              <td>
                <n-link :to="'/users/' + gift.user_request_id" class="text-navy">
                  {{ gift.display_name }}
                </n-link>
              </td>

              <td>
                {{ gift.gift_name }}
              </td>

              <td>
                {{ gift.createdAt | moment('DD/MM/YYYY HH:mm:ss') }}
              </td>

              <td>
                <div class="toggle">
                  <i
                    class="fa"
                    :class="{
                      'fa-check-square-o text-navy': gift.status,
                      'fa-square-o': !gift.status
                    }"
                    @click.prevent="
                      !gift.status && updateStatus(gift.id, !gift.status)
                    "
                  />
                </div>
              </td>

              <td>
                <button
                  class="btn btn-sm btn-danger"
                  @click.prevent="deleteGift(gift.id)"
                >
                  <i class="fa fa-trash-o m-r-xs" />

                  Remove
                </button>
              </td>
            </tr>
          </tbody>

          <tfoot v-if="gifts.rows">
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
  name: 'Exchange',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['Name', 'Gift', 'Created At', 'Status', ''],
      listLimit: [5, 10, 25, 50, 100],
      limit: 5,
      offset: 0
    }
  },

  computed: {
    ...mapGetters({
      gifts: GETTER.GIFT_EXCHANGE
    })
  },

  mounted () {
    const payload = {
      offset: this.offset,
      limit: this.limit
    }

    this.$store.dispatch(ACTION.GIFT_EXCHANGE, payload)
  },

  methods: {
    updateStatus (id, status) {
      const payload = { id, status }
      this.$store.dispatch(ACTION.GIFT_EXCHANGE_UPDATE_STATUS, payload)
    },

    deleteGift (id) {
      this.$store.dispatch(ACTION.GIFT_EXCHANGE_DELETE_STATUS, id)
    },

    changePagination (value) {
      this.offset = value - 1

      const payload = {
        offset: this.offset * this.limit,
        limit: this.limit
      }

      this.$store.dispatch(ACTION.GIFT_EXCHANGE, payload)
    },

    getLengthPagination () {
      return Math.ceil(this.gifts.count / this.limit)
    },

    onChangeLimit () {
      const payload = {
        offset: this.offset,
        limit: this.limit
      }

      this.$store.dispatch(ACTION.GIFT_EXCHANGE, payload)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .toggle .fa {
  cursor: pointer;
  font-size: 20px;
}
</style>
