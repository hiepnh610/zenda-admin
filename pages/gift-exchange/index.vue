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

          <tbody v-if="gifts">
            <tr v-for="gift in gifts" :key="gift.id">
              <td>
                {{ gift.id }}
              </td>

              <td>
                {{ gift.display_name }}
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
  name: 'Exchange',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['ID', 'Image', 'Gift', 'Created At', 'Status', '']
    }
  },

  computed: {
    ...mapGetters({
      gifts: GETTER.GIFT_EXCHANGE
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.GIFT_EXCHANGE)
  },

  methods: {
    updateStatus (id, status) {
      const payload = { id, status }
      this.$store.dispatch(ACTION.GIFT_EXCHANGE_UPDATE_STATUS, payload)
    },

    deleteGift (id) {
      this.$store.dispatch(ACTION.GIFT_EXCHANGE_DELETE_STATUS, id)
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
