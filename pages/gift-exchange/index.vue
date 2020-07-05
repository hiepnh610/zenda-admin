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
                    class="fa text-navy"
                    :class="{
                      'fa-toggle-on': gift.status,
                      'fa-toggle-off': !gift.status
                    }"
                    @click.prevent="updateStatus(gift.id, !gift.status)"
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
  name: 'Exchange',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['Image', 'Gift', 'Created At', 'Status', '']
    }
  },

  computed: {
    ...mapGetters({
      gifts: GETTER.GIFT_EXCHANGE
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.GIFT_EXCHANGE, 0)
  },

  methods: {
    updateStatus (id, status) {
      const payload = { id, status }
      this.$store.dispatch(ACTION.GIFT_EXCHANGE_UPDATE_STATUS, payload)
    },

    deleteGift (id) {
      this.$store.dispatch(ACTION.GIFT_EXCHANGE_DELETE_STATUS, id)
    },

    changePagination (offset) {
      this.$store.dispatch(ACTION.GIFT_EXCHANGE, (offset - 1) * 5)
    },

    getLengthPagination () {
      return Math.ceil(this.gifts.count / 5)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .toggle .fa {
  cursor: pointer;
  font-size: 24px;
}
</style>
