<template>
  <div class="ibox">
    <div class="ibox-content">
      <div class="row m-b-sm">
        <div class="col-sm-3">
          <n-link
            v-if="gifts.length < 10"
            to="/gifts/create"
            class="btn btn-sm btn-primary"
          >
            <i class="fa fa-plus m-r-xs" />
            Create
          </n-link>
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

          <tbody v-if="gifts.rows">
            <tr v-for="gift in gifts.rows" :key="gift.id">
              <td>
                <img v-if="gift.image" :src="gift.image" alt="">
              </td>

              <td>
                {{ gift.name }}
              </td>

              <td>
                {{ gift.quantity }}
              </td>

              <td>
                {{ gift.points }}
              </td>

              <td>
                {{ gift.createdAt | moment('DD/MM/YYYY HH:mm:ss') }}
              </td>

              <td>
                <n-link :to="'/gifts/' + gift.id" class="btn btn-sm btn-warning">
                  <i class="fa fa-pencil m-r-xs" />
                  Edit
                </n-link>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="6" class="footable-visible">
                <ul class="pagination">
                  <li class="footable-page-arrow disabled">
                    <a data-page="prev" href="#prev">‹</a>
                  </li>

                  <li class="footable-page active">
                    <a data-page="0" href="#">1</a>
                  </li>

                  <li class="footable-page">
                    <a data-page="1" href="#">2</a>
                  </li>

                  <li class="footable-page-arrow">
                    <a data-page="next" href="#next">›</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

export default {
  name: 'Gifts',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['Image', 'Name', 'Quantity', 'Points', 'Created At', '']
    }
  },

  computed: {
    ...mapGetters({
      gifts: GETTER.GIFTS
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.GIFTS)
  },

  methods: {
    deleteGift (id) {
      this.$store.dispatch(ACTION.DELETE_GIFT, id)
    },

    editGift (id) {}
  }
}
</script>

<style></style>
