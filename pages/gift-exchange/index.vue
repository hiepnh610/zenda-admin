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
                {{ gift.createdAt }}
              </td>

              <td>
                <div class="toggle" @click.prevent="updateStatus(gift.id)">
                  <i v-if="gift.status" class="fa fa-toggle-on" />

                  <i v-else class="fa fa-toggle-off" />
                </div>
              </td>

              <td>
                <button class="btn btn-sm btn-danger">
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
    updateStatus (id) {}
  }
}
</script>

<style lang="scss" scoped>
::v-deep .toggle .fa {
  cursor: pointer;
  font-size: 20px;
}
</style>
